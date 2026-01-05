require("dotenv").config();

const express = require("express");
const { Resend } = require("resend");
const cors = require("cors");
const { z } = require("zod");

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
      return res.status(400).json({ 
        success: false, 
        error: 'Invalid input data' 
      });
    }

    // Escape HTML in validated data for safe email rendering
    const safeData = escapeObject(validationResult.data);
    const { contactDetails, operationalData, analysis } = safeData;

    // Build email content
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
    .timestamp { color: #888; font-size: 12px; margin-top: 30px; }
  </style>
</head>
<body>
  <h1>New Operational Readiness Review</h1>
  
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
    <div class="field"><span class="label">Industry:</span> <span class="value">${operationalData.industry || 'Not specified'}</span></div>
    <div class="field"><span class="label">Operation Types:</span> <span class="value">${operationalData.operationType?.join(', ') || 'Not specified'}</span></div>
    <div class="field"><span class="label">Scale:</span> <span class="value">${operationalData.scale || 'Not specified'}</span></div>
    <div class="field"><span class="label">Structure Level:</span> <span class="value">${operationalData.structureLevel || 'Not specified'}</span></div>
    <div class="field"><span class="label">Request Handling:</span> <span class="value">${operationalData.requestHandling?.join(', ') || 'Not specified'}</span></div>
    <div class="field"><span class="label">Tools in Use:</span> <span class="value">${operationalData.toolsInUse?.join(', ') || 'Not specified'}</span></div>
    <div class="field"><span class="label">Downtime Sensitivity:</span> <span class="value">${operationalData.downtimeSensitivity || 'Not specified'}</span></div>
    <div class="field"><span class="label">Compliance Frameworks:</span> <span class="value">${operationalData.safetyCompliance?.join(', ') || 'Not specified'}</span></div>
    <div class="field"><span class="label">Coordination Complexity:</span> <span class="value">${operationalData.coordinationComplexity || 'Not specified'}</span></div>
    ${operationalData.frictionPoints?.length ? `<div class="field"><span class="label">Friction Points:</span> <span class="value">${operationalData.frictionPoints.join(', ')}</span></div>` : ''}
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

  <p class="timestamp">Submitted: ${new Date().toISOString()}</p>
</body>
</html>
    `;

    // Send internal review email
    await resend.emails.send({
      from: "Ovelon Prime <noreply@ovelon-prime.com>",
      to: ["support@ovelon-prime.com"],
      subject: "New Operational Readiness Review",
      html: emailHtml,
    });

    // Send confirmation email to user
    const calLink = "https://cal.com/ovelon-prime/introduction-call";
    
    const userConfirmationHtml = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
    h1 { color: #1a1a1a; font-size: 24px; margin-bottom: 20px; }
    h2 { color: #333; font-size: 18px; margin-top: 30px; }
    .section { background: #f9f9f9; border: 1px solid #e5e5e5; border-radius: 8px; padding: 20px; margin: 20px 0; }
    .cta-button { display: inline-block; background: #292929; color: #ffffff !important; text-decoration: none; padding: 14px 28px; border-radius: 6px; font-weight: 600; margin: 20px 0; }
    .cta-button:hover { background: #3A8F94; }
    ul { margin: 10px 0; padding-left: 20px; }
    li { margin-bottom: 8px; }
    .footer { margin-top: 40px; padding-top: 20px; border-top: 1px solid #e5e5e5; font-size: 12px; color: #888; }
  </style>
</head>
<body>
  <h1>Your Operational Review Request Has Been Received</h1>
  
  <p>Dear ${contactDetails?.fullName || 'Valued Client'},</p>
  
  <p>Thank you for submitting your operational review request. Our team will carefully review your submission and follow up accordingly.</p>
  
  <div class="section">
    <h2>What Happens Next</h2>
    <ul>
      <li>Our team will analyze the operational context you provided</li>
      <li>We will review the identified pain points and constraints</li>
      <li>You will receive a detailed response within 2-3 business days</li>
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
    <p>Best regards,<br>The Ovelon Prime Team</p>
    <p>This is an automated message. Please do not reply directly to this email.</p>
  </div>
</body>
</html>
    `;

    // Send confirmation to user
    if (contactDetails?.email) {
      await resend.emails.send({
        from: "Ovelon Prime <noreply@ovelon-prime.com>",
        to: [contactDetails.email],
        subject: "Your Operational Review Request - Ovelon Prime",
        html: userConfirmationHtml,
      });
    }

    res.json({ success: true });
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
