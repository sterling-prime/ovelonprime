require("dotenv").config();

const express = require("express");
const { Resend } = require("resend");
const cors = require("cors");
const { z } = require("zod");
const { jsPDF } = require("jspdf");

const app = express();

// CORS - restrict to allowed origins
const allowedOrigin = process.env.ALLOWED_ORIGIN || 'http://localhost:5173';
app.use(cors({
  origin: allowedOrigin,
  methods: ['POST', 'GET'],
  credentials: true
}));

// Limit payload size to prevent memory exhaustion
app.use(express.json({ limit: '50kb' }));

const resend = new Resend(process.env.RESEND_API_KEY);

// Simple in-memory rate limiting
const rateLimit = new Map();
const RATE_LIMIT_WINDOW = 15 * 60 * 1000; // 15 minutes
const RATE_LIMIT_MAX = 5; // max requests per window

const rateLimiter = (req, res, next) => {
  const ip = req.ip || req.connection.remoteAddress || 'unknown';
  const now = Date.now();
  
  // Clean up old entries
  for (const [key, data] of rateLimit.entries()) {
    if (now - data.windowStart > RATE_LIMIT_WINDOW) {
      rateLimit.delete(key);
    }
  }
  
  const record = rateLimit.get(ip);
  
  if (!record) {
    rateLimit.set(ip, { count: 1, windowStart: now });
    return next();
  }
  
  if (now - record.windowStart > RATE_LIMIT_WINDOW) {
    rateLimit.set(ip, { count: 1, windowStart: now });
    return next();
  }
  
  if (record.count >= RATE_LIMIT_MAX) {
    return res.status(429).json({ 
      success: false, 
      error: 'Too many requests. Please try again later.' 
    });
  }
  
  record.count++;
  next();
};

// Input validation schemas
const operationalDataSchema = z.object({
  industry: z.enum(['manufacturing', 'logistics', 'facility', 'infrastructure', 'energy', 'other']).optional(),
  operationType: z.array(z.enum(['facility', 'logistics', 'maintenance', 'production', 'fieldService'])).max(5).optional(),
  scale: z.enum(['single', 'multi', 'distributed']).optional(),
  requestHandling: z.array(z.enum(['email', 'phone', 'tickets', 'verbal', 'spreadsheets', 'erp'])).max(6).optional(),
  structureLevel: z.enum(['adhoc', 'semiStructured', 'fullyStructured']).optional(),
  toolsInUse: z.array(z.enum(['manual', 'semiAutomated', 'fragmented', 'integrated'])).max(4).optional(),
  frictionPoints: z.array(z.string().max(100)).max(10).optional(),
  frictionNotes: z.string().max(1000).optional(),
  downtimeSensitivity: z.enum(['critical', 'high', 'moderate', 'low']).optional(),
  safetyCompliance: z.array(z.string().max(50)).max(10).optional(),
  coordinationComplexity: z.enum(['simple', 'moderate', 'complex', 'veryComplex']).optional()
});

const contactDetailsSchema = z.object({
  fullName: z.string().min(1).max(100),
  email: z.string().email().max(255),
  phone: z.string().min(1).max(50),
  companyName: z.string().min(1).max(200),
  role: z.string().min(1).max(100),
  country: z.string().min(1).max(100),
  city: z.string().min(1).max(100)
});

const analysisSchema = z.object({
  operationalObservations: z.array(z.string().max(500)).max(10),
  riskExposure: z.array(z.string().max(500)).max(10),
  executionReadiness: z.string().max(1000),
  advisoryDirection: z.array(z.string().max(500)).max(5)
});

const simulatorSchema = z.object({
  operationalData: operationalDataSchema.optional(),
  contactDetails: contactDetailsSchema,
  analysis: analysisSchema.optional()
});

// HTML escape function for safe email content
const escapeHtml = (str) => {
  if (typeof str !== 'string') return str;
  return str.replace(/[&<>"']/g, (m) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  }[m]));
};

const escapeObject = (obj) => {
  if (typeof obj === 'string') return escapeHtml(obj);
  if (Array.isArray(obj)) return obj.map(escapeObject);
  if (typeof obj === 'object' && obj !== null) {
    const escaped = {};
    for (const [key, value] of Object.entries(obj)) {
      escaped[key] = escapeObject(value);
    }
    return escaped;
  }
  return obj;
};

// Generate unique reference ID
const generateReferenceId = () => {
  const timestamp = Date.now().toString(36).toUpperCase();
  const random = Math.random().toString(36).substring(2, 6).toUpperCase();
  return `OPR-${timestamp}-${random}`;
};

// Label mappings for human-readable output
const LABELS = {
  industry: {
    manufacturing: 'Manufacturing',
    logistics: 'Logistics & Distribution',
    facility: 'Facility Management',
    infrastructure: 'Infrastructure',
    energy: 'Energy & Utilities',
    other: 'Other'
  },
  operationType: {
    facility: 'Facility Management',
    logistics: 'Logistics',
    maintenance: 'Maintenance',
    production: 'Production',
    fieldService: 'Field Service'
  },
  scale: {
    single: 'Single Site',
    multi: 'Multi-Site',
    distributed: 'Distributed Operations'
  },
  requestHandling: {
    email: 'Email',
    phone: 'Phone',
    tickets: 'Ticketing System',
    verbal: 'Verbal/In-Person',
    spreadsheets: 'Spreadsheets',
    erp: 'ERP System'
  },
  structureLevel: {
    adhoc: 'Ad-Hoc / Reactive',
    semiStructured: 'Semi-Structured',
    fullyStructured: 'Fully Structured'
  },
  toolsInUse: {
    manual: 'Manual Processes',
    semiAutomated: 'Semi-Automated',
    fragmented: 'Fragmented Tools',
    integrated: 'Integrated Platform'
  },
  downtimeSensitivity: {
    critical: 'Critical (24/7 Operations)',
    high: 'High',
    moderate: 'Moderate',
    low: 'Low'
  },
  coordinationComplexity: {
    simple: 'Simple',
    moderate: 'Moderate',
    complex: 'Complex',
    veryComplex: 'Very Complex'
  },
  frictionPoints: {
    unclearOwnership: 'Unclear Ownership',
    manualCoordination: 'Manual Coordination',
    inconsistentExecution: 'Inconsistent Execution',
    escalationDelays: 'Escalation Delays',
    slowResponse: 'Slow Response Times',
    communicationBreakdown: 'Communication Breakdown',
    lackVisibility: 'Lack of Visibility'
  },
  safetyCompliance: {
    iso9001: 'ISO 9001',
    iso14001: 'ISO 14001',
    iso45001: 'ISO 45001',
    osha: 'OSHA',
    gdpr: 'GDPR',
    hipaa: 'HIPAA',
    other: 'Other'
  }
};

// Get human-readable label
const getLabel = (category, value) => {
  if (!value) return 'Not specified';
  if (Array.isArray(value)) {
    return value.map(v => LABELS[category]?.[v] || v).join(', ') || 'Not specified';
  }
  return LABELS[category]?.[value] || value;
};

// Generate PDF summary
const generatePDF = (data, referenceId, submissionDate) => {
  const { contactDetails, operationalData, analysis } = data;
  
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4'
  });
  
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 20;
  const contentWidth = pageWidth - (margin * 2);
  let y = margin;
  
  // Colors
  const primaryColor = [41, 41, 41]; // #292929
  const accentColor = [58, 143, 148]; // #3A8F94
  const textColor = [51, 51, 51]; // #333
  const mutedColor = [128, 128, 128]; // #808080
  const lightBg = [249, 249, 249]; // #f9f9f9
  
  // Helper functions
  const checkPageBreak = (neededHeight) => {
    if (y + neededHeight > pageHeight - margin) {
      doc.addPage();
      y = margin;
      return true;
    }
    return false;
  };
  
  const drawLine = (color = [229, 229, 229]) => {
    doc.setDrawColor(...color);
    doc.setLineWidth(0.3);
    doc.line(margin, y, pageWidth - margin, y);
    y += 5;
  };
  
  const addSection = (title, icon = '●') => {
    checkPageBreak(25);
    y += 8;
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(12);
    doc.setTextColor(...primaryColor);
    doc.text(`${title}`, margin, y);
    y += 2;
    drawLine(accentColor);
    y += 3;
  };
  
  const addField = (label, value, indent = 0) => {
    if (!value || value === 'Not specified') return;
    checkPageBreak(12);
    
    const xPos = margin + indent;
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9);
    doc.setTextColor(...mutedColor);
    doc.text(label, xPos, y);
    
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10);
    doc.setTextColor(...textColor);
    
    // Handle long text with wrapping
    const labelWidth = doc.getTextWidth(label) + 3;
    const valueLines = doc.splitTextToSize(String(value), contentWidth - labelWidth - indent);
    
    doc.text(valueLines[0], xPos + labelWidth, y);
    y += 5;
    
    // Additional lines
    for (let i = 1; i < valueLines.length; i++) {
      checkPageBreak(5);
      doc.text(valueLines[i], xPos + labelWidth, y);
      y += 5;
    }
  };
  
  const addBulletList = (items, color = textColor) => {
    items.forEach(item => {
      checkPageBreak(10);
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(10);
      doc.setTextColor(...color);
      
      const lines = doc.splitTextToSize(String(item), contentWidth - 8);
      doc.text('•', margin + 2, y);
      doc.text(lines[0], margin + 8, y);
      y += 5;
      
      for (let i = 1; i < lines.length; i++) {
        checkPageBreak(5);
        doc.text(lines[i], margin + 8, y);
        y += 5;
      }
    });
  };
  
  // ========== HEADER ==========
  // Company name
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(18);
  doc.setTextColor(...primaryColor);
  doc.text('OVELON PRIME', margin, y);
  y += 10;
  
  // Document title
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(14);
  doc.setTextColor(...accentColor);
  doc.text('Operational Review Request Summary', margin, y);
  y += 8;
  
  // Reference & Date
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(...mutedColor);
  doc.text(`Reference: ${referenceId}`, margin, y);
  doc.text(`Submitted: ${submissionDate}`, pageWidth - margin - 50, y);
  y += 5;
  
  drawLine();
  
  // ========== STEP 7: PERSONAL & COMPANY DETAILS ==========
  addSection('Step 7 — Personal & Company Details');
  
  addField('Full Name:', contactDetails?.fullName);
  addField('Email:', contactDetails?.email);
  addField('Phone:', contactDetails?.phone);
  addField('Company:', contactDetails?.companyName);
  addField('Role:', contactDetails?.role);
  addField('Location:', `${contactDetails?.city || ''}, ${contactDetails?.country || ''}`);
  
  // ========== STEP 1: OPERATIONAL CONTEXT ==========
  if (operationalData) {
    addSection('Step 1 — Operational Context');
    
    addField('Industry:', getLabel('industry', operationalData.industry));
    addField('Operation Types:', getLabel('operationType', operationalData.operationType));
    addField('Scale:', getLabel('scale', operationalData.scale));
  }
  
  // ========== STEP 2: CURRENT OPERATING MODEL ==========
  if (operationalData && (operationalData.requestHandling || operationalData.structureLevel || operationalData.toolsInUse)) {
    addSection('Step 2 — Current Operating Model');
    
    addField('Request Handling:', getLabel('requestHandling', operationalData.requestHandling));
    addField('Structure Level:', getLabel('structureLevel', operationalData.structureLevel));
    addField('Tools in Use:', getLabel('toolsInUse', operationalData.toolsInUse));
  }
  
  // ========== STEP 3: PAIN POINTS ==========
  if (operationalData && (operationalData.frictionPoints?.length || operationalData.frictionNotes)) {
    addSection('Step 3 — Pain Points');
    
    if (operationalData.frictionPoints?.length) {
      addField('Friction Points:', getLabel('frictionPoints', operationalData.frictionPoints));
    }
    if (operationalData.frictionNotes) {
      y += 3;
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(9);
      doc.setTextColor(...mutedColor);
      doc.text('Additional Notes:', margin, y);
      y += 5;
      
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(10);
      doc.setTextColor(...textColor);
      const noteLines = doc.splitTextToSize(operationalData.frictionNotes, contentWidth);
      noteLines.forEach(line => {
        checkPageBreak(5);
        doc.text(line, margin, y);
        y += 5;
      });
    }
  }
  
  // ========== STEP 4: CONSTRAINTS ==========
  if (operationalData && (operationalData.downtimeSensitivity || operationalData.safetyCompliance?.length || operationalData.coordinationComplexity)) {
    addSection('Step 4 — Constraints');
    
    addField('Downtime Sensitivity:', getLabel('downtimeSensitivity', operationalData.downtimeSensitivity));
    addField('Safety & Compliance:', getLabel('safetyCompliance', operationalData.safetyCompliance));
    addField('Coordination Complexity:', getLabel('coordinationComplexity', operationalData.coordinationComplexity));
  }
  
  // ========== STEP 5 & 6: OPERATIONAL ANALYSIS ==========
  if (analysis) {
    addSection('Steps 5–6 — Operational Analysis');
    
    if (analysis.operationalObservations?.length) {
      y += 2;
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(10);
      doc.setTextColor(...primaryColor);
      doc.text('Operational Observations', margin, y);
      y += 5;
      addBulletList(analysis.operationalObservations);
    }
    
    if (analysis.riskExposure?.length) {
      y += 3;
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(10);
      doc.setTextColor(195, 48, 48); // Red for risks
      doc.text('Risk & Exposure Areas', margin, y);
      y += 5;
      addBulletList(analysis.riskExposure, [195, 48, 48]);
    }
    
    if (analysis.executionReadiness) {
      y += 3;
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(10);
      doc.setTextColor(...primaryColor);
      doc.text('Execution Readiness', margin, y);
      y += 5;
      
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(10);
      doc.setTextColor(...textColor);
      const readinessLines = doc.splitTextToSize(analysis.executionReadiness, contentWidth);
      readinessLines.forEach(line => {
        checkPageBreak(5);
        doc.text(line, margin, y);
        y += 5;
      });
    }
    
    if (analysis.advisoryDirection?.length) {
      y += 3;
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(10);
      doc.setTextColor(...accentColor);
      doc.text('Advisory Direction', margin, y);
      y += 5;
      addBulletList(analysis.advisoryDirection, accentColor);
    }
  }
  
  // ========== FOOTER ==========
  y = pageHeight - 15;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(...mutedColor);
  doc.text('This document contains only information provided by the submitter. Generated by Ovelon Prime.', margin, y);
  y += 4;
  doc.text('For questions, contact support@ovelon-prime.com', margin, y);
  
  // Return base64 encoded PDF
  return doc.output('datauristring').split(',')[1];
};

// Health check
app.get("/health", (req, res) => {
  res.json({ ok: true });
});

// Request review endpoint with rate limiting and validation
app.post("/api/request-review", rateLimiter, async (req, res) => {
  try {
    // Validate content type
    if (!req.is('application/json')) {
      return res.status(415).json({ 
        success: false, 
        error: 'Content-Type must be application/json' 
      });
    }

    const { data } = req.body;
    
    // Validate input data
    const validationResult = simulatorSchema.safeParse(data);
    if (!validationResult.success) {
      console.error("Validation errors:", validationResult.error.errors);
      return res.status(400).json({ 
        success: false, 
        error: 'Invalid input data' 
      });
    }

    // Escape HTML in validated data for safe email rendering
    const safeData = escapeObject(validationResult.data);
    const { contactDetails, operationalData, analysis } = safeData;
    
    // Generate reference ID and submission date
    const referenceId = generateReferenceId();
    const submissionDate = new Date().toLocaleString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      timeZoneName: 'short'
    });
    
    // Generate PDF
    let pdfBase64 = null;
    let pdfGenerationFailed = false;
    
    try {
      pdfBase64 = generatePDF(validationResult.data, referenceId, submissionDate);
      console.log('PDF generated successfully');
    } catch (pdfErr) {
      console.error('PDF generation failed:', pdfErr);
      pdfGenerationFailed = true;
      // Continue with submission - don't block
    }

    // Build email content for internal team
    const emailHtml = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 800px; margin: 0 auto; padding: 20px; }
    h1 { color: #1a1a1a; border-bottom: 2px solid #e5e5e5; padding-bottom: 10px; }
    h2 { color: #333; margin-top: 30px; font-size: 18px; }
    h3 { color: #555; margin-top: 20px; font-size: 16px; }
    .section { background: #f9f9f9; border: 1px solid #e5e5e5; border-radius: 8px; padding: 20px; margin: 15px 0; }
    .contact-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
    .field { margin-bottom: 8px; }
    .label { font-weight: bold; color: #555; }
    .value { color: #1a1a1a; }
    ul { margin: 10px 0; padding-left: 20px; }
    li { margin-bottom: 8px; }
    .risk { color: #c53030; }
    .advisory { color: #2563eb; }
    .reference { background: #3A8F94; color: white; padding: 8px 16px; border-radius: 4px; display: inline-block; margin-bottom: 15px; }
    .timestamp { color: #888; font-size: 12px; margin-top: 30px; }
  </style>
</head>
<body>
  <h1>New Operational Readiness Review</h1>
  
  <div class="reference">Reference: ${referenceId}</div>
  
  <div class="section">
    <h2>Contact Details</h2>
    <div class="contact-grid">
      <div class="field"><span class="label">Name:</span> <span class="value">${contactDetails?.fullName || 'N/A'}</span></div>
      <div class="field"><span class="label">Email:</span> <span class="value">${contactDetails?.email || 'N/A'}</span></div>
      <div class="field"><span class="label">Phone:</span> <span class="value">${contactDetails?.phone || 'N/A'}</span></div>
      <div class="field"><span class="label">Role:</span> <span class="value">${contactDetails?.role || 'N/A'}</span></div>
      <div class="field"><span class="label">Company:</span> <span class="value">${contactDetails?.companyName || 'N/A'}</span></div>
      <div class="field"><span class="label">Location:</span> <span class="value">${contactDetails?.city || 'N/A'}, ${contactDetails?.country || 'N/A'}</span></div>
    </div>
  </div>

  ${operationalData ? `
  <div class="section">
    <h2>Operational Context</h2>
    <div class="field"><span class="label">Industry:</span> <span class="value">${getLabel('industry', operationalData.industry)}</span></div>
    <div class="field"><span class="label">Operation Types:</span> <span class="value">${getLabel('operationType', operationalData.operationType)}</span></div>
    <div class="field"><span class="label">Scale:</span> <span class="value">${getLabel('scale', operationalData.scale)}</span></div>
    <div class="field"><span class="label">Structure Level:</span> <span class="value">${getLabel('structureLevel', operationalData.structureLevel)}</span></div>
    <div class="field"><span class="label">Request Handling:</span> <span class="value">${getLabel('requestHandling', operationalData.requestHandling)}</span></div>
    <div class="field"><span class="label">Tools in Use:</span> <span class="value">${getLabel('toolsInUse', operationalData.toolsInUse)}</span></div>
    <div class="field"><span class="label">Downtime Sensitivity:</span> <span class="value">${getLabel('downtimeSensitivity', operationalData.downtimeSensitivity)}</span></div>
    <div class="field"><span class="label">Compliance Frameworks:</span> <span class="value">${getLabel('safetyCompliance', operationalData.safetyCompliance)}</span></div>
    <div class="field"><span class="label">Coordination Complexity:</span> <span class="value">${getLabel('coordinationComplexity', operationalData.coordinationComplexity)}</span></div>
    ${operationalData.frictionPoints?.length ? `<div class="field"><span class="label">Friction Points:</span> <span class="value">${getLabel('frictionPoints', operationalData.frictionPoints)}</span></div>` : ''}
    ${operationalData.frictionNotes ? `<div class="field"><span class="label">Additional Notes:</span> <span class="value">${operationalData.frictionNotes}</span></div>` : ''}
  </div>
  ` : ''}

  ${analysis ? `
  <div class="section">
    <h2>Operational Analysis</h2>
    
    ${analysis.operationalObservations?.length ? `
    <h3>Operational Observations</h3>
    <ul>
      ${analysis.operationalObservations.map(obs => `<li>${obs}</li>`).join('')}
    </ul>
    ` : ''}
    
    ${analysis.riskExposure?.length ? `
    <h3 class="risk">Risk & Exposure Areas</h3>
    <ul>
      ${analysis.riskExposure.map(risk => `<li class="risk">${risk}</li>`).join('')}
    </ul>
    ` : ''}
    
    ${analysis.executionReadiness ? `
    <h3>Execution Readiness Assessment</h3>
    <p>${analysis.executionReadiness}</p>
    ` : ''}
    
    ${analysis.advisoryDirection?.length ? `
    <h3 class="advisory">Advisory Direction</h3>
    <ul>
      ${analysis.advisoryDirection.map(dir => `<li class="advisory">${dir}</li>`).join('')}
    </ul>
    ` : ''}
  </div>
  ` : ''}

  <p class="timestamp">Submitted: ${submissionDate}</p>
  ${pdfGenerationFailed ? '<p style="color: #c53030;">⚠️ PDF generation failed for this submission</p>' : ''}
</body>
</html>
    `;

    // Build internal email with PDF attachment
    // Note: Use verified domain email or onboarding@resend.dev for testing
    const fromEmail = process.env.FROM_EMAIL || "Ovelon Prime <onboarding@resend.dev>";
    const internalToEmail = process.env.INTERNAL_EMAIL || "support@ovelon-prime.com";
    
    const internalEmailOptions = {
      from: fromEmail,
      to: [internalToEmail],
      subject: `New Operational Review: ${referenceId}`,
      html: emailHtml,
    };
    
    if (pdfBase64) {
      internalEmailOptions.attachments = [{
        filename: `operational-review-summary_${referenceId}.pdf`,
        content: pdfBase64,
      }];
    }
    
    // Send internal review email
    await resend.emails.send(internalEmailOptions);

    // Build user confirmation email
    const calLink = "https://cal.com/ovelon-prime/introduction-call";
    
    const userConfirmationHtml = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
    h1 { color: #1a1a1a; font-size: 24px; margin-bottom: 20px; }
    h2 { color: #333; font-size: 18px; margin-top: 30px; }
    .header-section { border-bottom: 2px solid #3A8F94; padding-bottom: 15px; margin-bottom: 20px; }
    .reference { background: #f9f9f9; border: 1px solid #e5e5e5; border-radius: 6px; padding: 12px 16px; font-family: monospace; font-size: 14px; margin: 15px 0; }
    .section { background: #f9f9f9; border: 1px solid #e5e5e5; border-radius: 8px; padding: 20px; margin: 20px 0; }
    .cta-button { display: inline-block; background: #292929; color: #ffffff !important; text-decoration: none; padding: 14px 28px; border-radius: 6px; font-weight: 600; margin: 20px 0; }
    .cta-button:hover { background: #3A8F94; }
    ul { margin: 10px 0; padding-left: 20px; }
    li { margin-bottom: 8px; }
    .footer { margin-top: 40px; padding-top: 20px; border-top: 1px solid #e5e5e5; font-size: 12px; color: #888; }
    .pdf-note { background: #3A8F94; color: white; padding: 12px 16px; border-radius: 6px; margin: 15px 0; }
  </style>
</head>
<body>
  <div class="header-section">
    <h1>Your Operational Review Request Has Been Received</h1>
  </div>
  
  <p>Dear ${contactDetails?.fullName || 'Valued Client'},</p>
  
  <p>Thank you for submitting your operational review request. Your submission has been received and logged for review.</p>
  
  <div class="reference">
    <strong>Reference ID:</strong> ${referenceId}<br>
    <strong>Submitted:</strong> ${submissionDate}
  </div>
  
  ${pdfBase64 ? `
  <div class="pdf-note">
    📎 <strong>Your summary is attached</strong> — A complete PDF of your submission is included with this email for your records.
  </div>
  ` : ''}
  
  <div class="section">
    <h2>What Happens Next</h2>
    <ul>
      <li><strong>Review:</strong> Our team will analyze the operational context you provided</li>
      <li><strong>Assessment:</strong> We will review the identified pain points and constraints</li>
      <li><strong>Response:</strong> You will receive a detailed response within 2-3 business days</li>
    </ul>
  </div>
  
  <div class="section">
    <h2>Accelerate Your Review</h2>
    <p>To discuss your operational challenges directly with an expert, schedule a strategic consultation:</p>
    <a href="${calLink}" class="cta-button" target="_blank">Schedule Strategic Consultation</a>
  </div>
  
  ${analysis ? `
  <div class="section">
    <h2>Summary of Your Analysis</h2>
    
    ${analysis.operationalObservations?.length ? `
    <h3>Operational Observations</h3>
    <ul>
      ${analysis.operationalObservations.map(obs => `<li>${obs}</li>`).join('')}
    </ul>
    ` : ''}
    
    ${analysis.riskExposure?.length ? `
    <h3>Risk & Exposure Areas</h3>
    <ul>
      ${analysis.riskExposure.map(risk => `<li>${risk}</li>`).join('')}
    </ul>
    ` : ''}
    
    ${analysis.executionReadiness ? `
    <h3>Execution Readiness</h3>
    <p>${analysis.executionReadiness}</p>
    ` : ''}
    
    ${analysis.advisoryDirection?.length ? `
    <h3>Advisory Direction</h3>
    <ul>
      ${analysis.advisoryDirection.map(dir => `<li>${dir}</li>`).join('')}
    </ul>
    ` : ''}
  </div>
  ` : ''}
  
  <div class="footer">
    <p>Best regards,<br><strong>The Ovelon Prime Team</strong></p>
    <p>This is an automated message. Please do not reply directly to this email.<br>
    For support, contact <a href="mailto:support@ovelon-prime.com">support@ovelon-prime.com</a></p>
  </div>
</body>
</html>
    `;

    // Build user email options with PDF attachment
    const userEmailOptions = {
      from: fromEmail,
      to: [contactDetails.email],
      subject: `Your Operational Review Request — ${referenceId}`,
      html: userConfirmationHtml,
    };
    
    if (pdfBase64) {
      userEmailOptions.attachments = [{
        filename: `operational-review-summary_${referenceId}.pdf`,
        content: pdfBase64,
      }];
    }

    // Send confirmation to user
    if (contactDetails?.email) {
      await resend.emails.send(userEmailOptions);
    }

    console.log(`Submission successful: ${referenceId}`);
    res.json({ 
      success: true,
      referenceId,
      pdfAttached: !!pdfBase64
    });
  } catch (err) {
    console.error("EMAIL ERROR:", err);
    // Generic error message - don't expose internal details
    res.status(500).json({ 
      success: false, 
      error: 'Failed to process request. Please try again later.' 
    });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
