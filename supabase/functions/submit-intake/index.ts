import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@2.0.0";
import { jsPDF } from "https://esm.sh/jspdf@2.5.2";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

// Label mappings for human-readable output
const LABELS: Record<string, Record<string, string>> = {
  industry: {
    manufacturing: "Manufacturing",
    logistics: "Logistics & Warehousing",
    facility: "Facility Management",
    infrastructure: "Infrastructure",
    energy: "Energy & Utilities",
    other: "Other Industry",
  },
  scale: {
    single: "Single Site",
    multi: "Multi-Site",
    distributed: "Distributed Operations",
  },
  structureLevel: {
    adhoc: "Ad-hoc / Informal",
    semiStructured: "Semi-Structured",
    fullyStructured: "Fully Structured",
  },
  downtimeSensitivity: {
    critical: "Critical (Minutes matter)",
    high: "High (Hours matter)",
    moderate: "Moderate (Days acceptable)",
    low: "Low (Flexible)",
  },
  coordinationComplexity: {
    simple: "Simple (Few stakeholders)",
    moderate: "Moderate",
    complex: "Complex (Many stakeholders)",
    veryComplex: "Very Complex (Multi-org)",
  },
  operationType: {
    facility: "Facility Operations",
    logistics: "Logistics & Distribution",
    maintenance: "Maintenance & Repair",
    production: "Production & Manufacturing",
    fieldService: "Field Service",
  },
  requestHandling: {
    phone: "Phone/Direct Contact",
    email: "Email",
    ticketing: "Ticketing System",
    adhoc: "Ad-hoc / Informal",
  },
  toolsInUse: {
    manual: "Manual / Paper-based",
    spreadsheets: "Spreadsheets",
    fragmented: "Multiple Disconnected Tools",
    semiAutomated: "Semi-Automated Systems",
    integrated: "Integrated Platform",
  },
  frictionPoints: {
    manualCoordination: "Manual Coordination Overhead",
    unclearOwnership: "Unclear Task Ownership",
    inconsistentExecution: "Inconsistent Execution",
    escalationDelays: "Escalation Delays",
    communicationBreakdown: "Communication Breakdown",
    lackVisibility: "Lack of Visibility",
    slowResponse: "Slow Response Times",
  },
  safetyCompliance: {
    iso9001: "ISO 9001",
    iso27001: "ISO 27001",
    hse: "HSE Requirements",
    vca: "VCA/SCC",
    osha: "OSHA",
    other: "Other Compliance",
  },
};

function getLabel(category: string, value: string): string {
  return LABELS[category]?.[value] || value;
}

function getLabels(category: string, values: string[]): string {
  if (!values || values.length === 0) return "Not specified";
  return values.map(v => getLabel(category, v)).join(", ");
}

function generateReferenceId(): string {
  const timestamp = Date.now().toString(36).toUpperCase();
  const random = Math.random().toString(36).substring(2, 6).toUpperCase();
  return `OVL-${timestamp}-${random}`;
}

function escapeHtml(text: string): string {
  if (typeof text !== "string") return String(text || "");
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

interface IntakePayload {
  operationalData: {
    industry: string;
    operationType: string[];
    scale: string;
    requestHandling: string[];
    structureLevel: string;
    toolsInUse: string[];
    frictionPoints: string[];
    frictionNotes: string;
    downtimeSensitivity: string;
    safetyCompliance: string[];
    coordinationComplexity: string;
  };
  contactDetails: {
    fullName: string;
    email: string;
    phone: string;
    companyName: string;
    role: string;
    country: string;
    city: string;
  };
  analysis: {
    operationalObservations: string[];
    riskExposure: string[];
    executionReadiness: string;
    advisoryDirection: string[];
  };
}

// deno-lint-ignore no-explicit-any
function generatePDF(payload: IntakePayload, referenceId: string, submittedAt: string): any {
  const doc = new jsPDF({ unit: "pt", format: "a4" });
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 50;
  const contentWidth = pageWidth - 2 * margin;
  let y = margin;

  const checkPageBreak = (neededHeight: number) => {
    if (y + neededHeight > pageHeight - 60) {
      doc.addPage();
      y = margin;
    }
  };

  // Header with branding
  doc.setFillColor(15, 23, 42); // Dark slate
  doc.rect(0, 0, pageWidth, 80, "F");

  doc.setTextColor(255, 255, 255);
  doc.setFontSize(24);
  doc.setFont("helvetica", "bold");
  doc.text("OVELON PRIME", margin, 45);

  doc.setFontSize(11);
  doc.setFont("helvetica", "normal");
  doc.text("Operational Review Request", margin, 62);

  y = 110;

  // Reference & Date section
  doc.setFillColor(248, 250, 252);
  doc.rect(margin, y, contentWidth, 50, "F");
  doc.setDrawColor(226, 232, 240);
  doc.rect(margin, y, contentWidth, 50, "S");

  doc.setTextColor(100, 116, 139);
  doc.setFontSize(9);
  doc.text("Reference ID", margin + 15, y + 18);
  doc.text("Submitted", margin + 200, y + 18);

  doc.setTextColor(15, 23, 42);
  doc.setFontSize(11);
  doc.setFont("helvetica", "bold");
  doc.text(referenceId, margin + 15, y + 35);
  doc.setFont("helvetica", "normal");
  doc.text(submittedAt, margin + 200, y + 35);

  y += 75;

  // Helper: Add section title
  const addSectionTitle = (title: string) => {
    checkPageBreak(40);
    doc.setFillColor(241, 245, 249);
    doc.rect(margin, y, contentWidth, 28, "F");
    doc.setTextColor(30, 41, 59);
    doc.setFontSize(12);
    doc.setFont("helvetica", "bold");
    doc.text(title, margin + 12, y + 18);
    y += 40;
  };

  // Helper: Add field
  const addField = (label: string, value: string) => {
    checkPageBreak(35);
    doc.setTextColor(100, 116, 139);
    doc.setFontSize(9);
    doc.setFont("helvetica", "normal");
    doc.text(label, margin, y);
    y += 14;

    doc.setTextColor(15, 23, 42);
    doc.setFontSize(10);
    const lines = doc.splitTextToSize(value || "Not specified", contentWidth);
    doc.text(lines, margin, y);
    y += lines.length * 14 + 10;
  };

  // Helper: Add bullet list
  const addBulletList = (label: string, items: string[]) => {
    if (!items || items.length === 0) return;
    checkPageBreak(20 + items.length * 16);
    
    doc.setTextColor(100, 116, 139);
    doc.setFontSize(9);
    doc.setFont("helvetica", "normal");
    doc.text(label, margin, y);
    y += 14;

    doc.setTextColor(15, 23, 42);
    doc.setFontSize(10);
    items.forEach((item) => {
      checkPageBreak(16);
      doc.text("•  " + item, margin + 10, y);
      y += 16;
    });
    y += 6;
  };

  // Contact Details Section
  addSectionTitle("Contact Information");
  const { contactDetails } = payload;
  addField("Full Name", contactDetails.fullName);
  addField("Email", contactDetails.email);
  addField("Phone", contactDetails.phone);
  addField("Company", contactDetails.companyName);
  addField("Role", contactDetails.role);
  addField("Location", `${contactDetails.city}, ${contactDetails.country}`);

  // Operational Context Section
  addSectionTitle("Operational Context");
  const { operationalData } = payload;
  addField("Industry", getLabel("industry", operationalData.industry));
  addField("Scale", getLabel("scale", operationalData.scale));
  addField("Operation Types", getLabels("operationType", operationalData.operationType));
  addField("Request Handling", getLabels("requestHandling", operationalData.requestHandling));

  // Operating Model Section
  addSectionTitle("Current Operating Model");
  addField("Structure Level", getLabel("structureLevel", operationalData.structureLevel));
  addField("Tools in Use", getLabels("toolsInUse", operationalData.toolsInUse));
  addField("Coordination Complexity", getLabel("coordinationComplexity", operationalData.coordinationComplexity));

  // Pain Points Section
  addSectionTitle("Operational Friction");
  addField("Friction Points", getLabels("frictionPoints", operationalData.frictionPoints));
  if (operationalData.frictionNotes) {
    addField("Additional Notes", operationalData.frictionNotes);
  }

  // Constraints Section
  addSectionTitle("Constraints & Compliance");
  addField("Downtime Sensitivity", getLabel("downtimeSensitivity", operationalData.downtimeSensitivity));
  addField("Safety & Compliance", getLabels("safetyCompliance", operationalData.safetyCompliance));

  // Analysis Section
  const { analysis } = payload;
  addSectionTitle("Operational Analysis");
  addBulletList("Key Observations", analysis.operationalObservations);
  addBulletList("Risk Exposure", analysis.riskExposure);
  addField("Execution Readiness", analysis.executionReadiness);
  addBulletList("Advisory Direction", analysis.advisoryDirection);

  // Footer
  const footerY = pageHeight - 40;
  doc.setDrawColor(226, 232, 240);
  doc.line(margin, footerY - 10, pageWidth - margin, footerY - 10);
  
  doc.setTextColor(148, 163, 184);
  doc.setFontSize(8);
  doc.text("This document was generated by Ovelon Prime. All information is confidential.", margin, footerY);
  doc.text("© Ovelon Prime", pageWidth - margin - 60, footerY);

  // Return as arraybuffer for base64 encoding
  return doc.output("arraybuffer");
}

// deno-lint-ignore no-explicit-any
function arrayBufferToBase64(buffer: any): string {
  const bytes = new Uint8Array(buffer);
  let binary = "";
  for (let i = 0; i < bytes.byteLength; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary);
}

serve(async (req: Request): Promise<Response> => {
  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    console.log("[submit-intake] Request received");

    // Parse request body
    const body = await req.json();
    const payload = body.data as IntakePayload;

    // Validate required fields
    if (!payload?.contactDetails?.email || !payload?.contactDetails?.fullName) {
      console.error("[submit-intake] Missing required contact details");
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: "Missing required contact details",
          errorCode: "VALIDATION_ERROR"
        }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Generate reference ID and timestamp
    const referenceId = generateReferenceId();
    const submittedAt = new Date().toISOString();
    const formattedDate = new Date().toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      timeZoneName: "short",
    });

    console.log(`[submit-intake] Processing submission: ${referenceId}`);
    console.log(`[submit-intake] Contact: ${payload.contactDetails.email}`);

    // Generate PDF
    let pdfBase64: string;
    try {
      const pdfBuffer = generatePDF(payload, referenceId, formattedDate);
      pdfBase64 = arrayBufferToBase64(pdfBuffer);
      console.log(`[submit-intake] PDF generated successfully (${pdfBase64.length} chars base64)`);
    } catch (pdfError) {
      console.error("[submit-intake] PDF generation failed:", pdfError);
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: "Failed to generate PDF report",
          errorCode: "PDF_ERROR"
        }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Prepare email content
    const { contactDetails, operationalData, analysis } = payload;
    
    // Build HTML email for user
    const userEmailHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #1e293b; margin: 0; padding: 0; background: #f8fafc; }
          .container { max-width: 600px; margin: 0 auto; background: white; }
          .header { background: #0f172a; color: white; padding: 32px; text-align: center; }
          .header h1 { margin: 0; font-size: 24px; font-weight: 600; }
          .header p { margin: 8px 0 0; opacity: 0.8; font-size: 14px; }
          .content { padding: 32px; }
          .reference-box { background: #f1f5f9; border-radius: 8px; padding: 16px; margin-bottom: 24px; }
          .reference-box p { margin: 0; font-size: 13px; color: #64748b; }
          .reference-box strong { display: block; font-size: 18px; color: #0f172a; font-family: monospace; margin-top: 4px; }
          h2 { font-size: 18px; color: #0f172a; margin: 24px 0 12px; border-bottom: 2px solid #e2e8f0; padding-bottom: 8px; }
          .info-row { display: flex; margin-bottom: 8px; }
          .info-label { color: #64748b; font-size: 13px; width: 120px; flex-shrink: 0; }
          .info-value { color: #1e293b; font-size: 14px; }
          .cta { text-align: center; margin: 32px 0; }
          .cta a { display: inline-block; background: #0ea5e9; color: white; padding: 14px 28px; text-decoration: none; border-radius: 8px; font-weight: 600; }
          .footer { background: #f8fafc; padding: 24px; text-align: center; font-size: 12px; color: #64748b; border-top: 1px solid #e2e8f0; }
          .footer p { margin: 4px 0; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>OVELON PRIME</h1>
            <p>Operational Review Request Received</p>
          </div>
          <div class="content">
            <p>Dear ${escapeHtml(contactDetails.fullName)},</p>
            <p>Thank you for submitting your Operational Review Request. We have received your submission and our team will review it shortly.</p>
            
            <div class="reference-box">
              <p>Your Reference ID</p>
              <strong>${referenceId}</strong>
            </div>

            <h2>Submission Summary</h2>
            <div class="info-row">
              <span class="info-label">Company</span>
              <span class="info-value">${escapeHtml(contactDetails.companyName)}</span>
            </div>
            <div class="info-row">
              <span class="info-label">Industry</span>
              <span class="info-value">${escapeHtml(getLabel("industry", operationalData.industry))}</span>
            </div>
            <div class="info-row">
              <span class="info-label">Scale</span>
              <span class="info-value">${escapeHtml(getLabel("scale", operationalData.scale))}</span>
            </div>
            <div class="info-row">
              <span class="info-label">Location</span>
              <span class="info-value">${escapeHtml(contactDetails.city)}, ${escapeHtml(contactDetails.country)}</span>
            </div>

            <p style="margin-top: 24px;">A detailed PDF report of your submission is attached to this email for your records.</p>

            <h2>Next Steps</h2>
            <p>To accelerate the review process, you can schedule a strategic consultation with our team:</p>
            
            <div class="cta">
              <a href="https://cal.com/ovelon-prime/introduction-call">Schedule Consultation</a>
            </div>

            <p>If you have any questions, please reply to this email or contact us at <a href="mailto:info@ovelon-prime.com">info@ovelon-prime.com</a>.</p>

            <p>Best regards,<br><strong>Ovelon Prime Team</strong></p>
          </div>
          <div class="footer">
            <p><strong>Ovelon Prime</strong></p>
            <p>Enterprise Operational Systems</p>
            <p style="margin-top: 12px;">This email and any attachments are confidential.</p>
          </div>
        </div>
      </body>
      </html>
    `;

    // Build HTML email for internal team
    const internalEmailHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #1e293b; }
          .container { max-width: 700px; margin: 0 auto; }
          h1 { color: #0f172a; border-bottom: 3px solid #0ea5e9; padding-bottom: 12px; }
          h2 { color: #0f172a; margin-top: 28px; font-size: 16px; background: #f1f5f9; padding: 10px 14px; border-radius: 6px; }
          .info-grid { display: grid; grid-template-columns: 140px 1fr; gap: 8px 16px; margin: 16px 0; }
          .label { color: #64748b; font-size: 13px; }
          .value { color: #1e293b; font-weight: 500; }
          .highlight { background: #fef3c7; padding: 2px 6px; border-radius: 4px; }
          ul { margin: 8px 0; padding-left: 20px; }
          li { margin: 4px 0; }
          .notes { background: #f1f5f9; padding: 16px; border-radius: 8px; margin: 16px 0; font-style: italic; }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>🔔 New Intake Submission</h1>
          <p><strong>Reference:</strong> <code>${referenceId}</code> | <strong>Submitted:</strong> ${formattedDate}</p>

          <h2>Contact Information</h2>
          <div class="info-grid">
            <span class="label">Name</span><span class="value">${escapeHtml(contactDetails.fullName)}</span>
            <span class="label">Email</span><span class="value"><a href="mailto:${escapeHtml(contactDetails.email)}">${escapeHtml(contactDetails.email)}</a></span>
            <span class="label">Phone</span><span class="value">${escapeHtml(contactDetails.phone)}</span>
            <span class="label">Company</span><span class="value">${escapeHtml(contactDetails.companyName)}</span>
            <span class="label">Role</span><span class="value">${escapeHtml(contactDetails.role)}</span>
            <span class="label">Location</span><span class="value">${escapeHtml(contactDetails.city)}, ${escapeHtml(contactDetails.country)}</span>
          </div>

          <h2>Operational Context</h2>
          <div class="info-grid">
            <span class="label">Industry</span><span class="value">${escapeHtml(getLabel("industry", operationalData.industry))}</span>
            <span class="label">Scale</span><span class="value">${escapeHtml(getLabel("scale", operationalData.scale))}</span>
            <span class="label">Operation Types</span><span class="value">${escapeHtml(getLabels("operationType", operationalData.operationType))}</span>
            <span class="label">Structure Level</span><span class="value">${escapeHtml(getLabel("structureLevel", operationalData.structureLevel))}</span>
            <span class="label">Tools</span><span class="value">${escapeHtml(getLabels("toolsInUse", operationalData.toolsInUse))}</span>
            <span class="label">Downtime Sensitivity</span><span class="value ${operationalData.downtimeSensitivity === "critical" ? "highlight" : ""}">${escapeHtml(getLabel("downtimeSensitivity", operationalData.downtimeSensitivity))}</span>
            <span class="label">Complexity</span><span class="value">${escapeHtml(getLabel("coordinationComplexity", operationalData.coordinationComplexity))}</span>
          </div>

          <h2>Friction Points</h2>
          <ul>
            ${operationalData.frictionPoints.map(fp => `<li>${escapeHtml(getLabel("frictionPoints", fp))}</li>`).join("")}
          </ul>
          ${operationalData.frictionNotes ? `<div class="notes">"${escapeHtml(operationalData.frictionNotes)}"</div>` : ""}

          <h2>Compliance Requirements</h2>
          <ul>
            ${operationalData.safetyCompliance.map(sc => `<li>${escapeHtml(getLabel("safetyCompliance", sc))}</li>`).join("") || "<li>None specified</li>"}
          </ul>

          <h2>System Analysis</h2>
          <p><strong>Observations:</strong></p>
          <ul>
            ${analysis.operationalObservations.map(obs => `<li>${escapeHtml(obs)}</li>`).join("") || "<li>None</li>"}
          </ul>
          <p><strong>Risk Exposure:</strong></p>
          <ul>
            ${analysis.riskExposure.map(risk => `<li>${escapeHtml(risk)}</li>`).join("") || "<li>None identified</li>"}
          </ul>
          <p><strong>Execution Readiness:</strong> ${escapeHtml(analysis.executionReadiness)}</p>
          <p><strong>Advisory Direction:</strong></p>
          <ul>
            ${analysis.advisoryDirection.map(dir => `<li>${escapeHtml(dir)}</li>`).join("") || "<li>None</li>"}
          </ul>

          <hr style="margin: 32px 0; border: none; border-top: 1px solid #e2e8f0;">
          <p style="color: #64748b; font-size: 12px;">Full PDF report attached. Review and follow up within 24 hours.</p>
        </div>
      </body>
      </html>
    `;

    // Send email to internal team
    const fromEmail = Deno.env.get("FROM_EMAIL") || "Ovelon Prime <onboarding@resend.dev>";
    const internalEmail = Deno.env.get("INTERNAL_EMAIL") || "info@ovelon-prime.com";

    try {
      const internalResult = await resend.emails.send({
        from: fromEmail,
        to: [internalEmail],
        subject: `🔔 New Intake: ${contactDetails.companyName} - ${referenceId}`,
        html: internalEmailHtml,
        attachments: [
          {
            filename: `ovelon-operational-review-${referenceId}.pdf`,
            content: pdfBase64,
          },
        ],
      });

      console.log("[submit-intake] Internal email sent:", internalResult);
    } catch (emailError) {
      console.error("[submit-intake] Failed to send internal email:", emailError);
      // Continue - don't fail the whole submission for internal email
    }

    // Send confirmation email to user
    try {
      const userResult = await resend.emails.send({
        from: fromEmail,
        to: [contactDetails.email],
        subject: `Your Operational Review Request – ${referenceId} – Ovelon Prime`,
        html: userEmailHtml,
        attachments: [
          {
            filename: `ovelon-operational-review-${referenceId}.pdf`,
            content: pdfBase64,
          },
        ],
      });

      console.log("[submit-intake] User email sent:", userResult);
    } catch (emailError) {
      console.error("[submit-intake] Failed to send user email:", emailError);
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: "Failed to send confirmation email. Please try again.",
          errorCode: "EMAIL_ERROR"
        }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Success response
    console.log(`[submit-intake] Submission complete: ${referenceId}`);
    return new Response(
      JSON.stringify({
        success: true,
        referenceId,
        pdfAttached: true,
        message: "Submission received successfully",
      }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );

  } catch (error) {
    console.error("[submit-intake] Unexpected error:", error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error instanceof Error ? error.message : "An unexpected error occurred",
        errorCode: "INTERNAL_ERROR"
      }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
