import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ContactPayload {
  firstName: string;
  lastName: string;
  businessName: string;
  businessEmail: string;
  requestDetails: string;
}

function generateReferenceId(): string {
  const timestamp = Date.now().toString(36).toUpperCase();
  const random = Math.random().toString(36).substring(2, 6).toUpperCase();
  return `OVL-C-${timestamp}-${random}`;
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

function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

serve(async (req: Request): Promise<Response> => {
  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    console.log("[submit-contact] Request received");

    // Parse request body
    const payload = await req.json() as ContactPayload;

    // Validate required fields
    if (!payload.firstName?.trim()) {
      return new Response(
        JSON.stringify({ success: false, error: "First name is required", errorCode: "VALIDATION_ERROR" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    if (!payload.lastName?.trim()) {
      return new Response(
        JSON.stringify({ success: false, error: "Last name is required", errorCode: "VALIDATION_ERROR" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    if (!payload.businessName?.trim()) {
      return new Response(
        JSON.stringify({ success: false, error: "Business name is required", errorCode: "VALIDATION_ERROR" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    if (!payload.businessEmail?.trim() || !validateEmail(payload.businessEmail)) {
      return new Response(
        JSON.stringify({ success: false, error: "Valid business email is required", errorCode: "VALIDATION_ERROR" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    if (!payload.requestDetails?.trim()) {
      return new Response(
        JSON.stringify({ success: false, error: "Request details are required", errorCode: "VALIDATION_ERROR" }),
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

    const fullName = `${payload.firstName.trim()} ${payload.lastName.trim()}`;

    console.log(`[submit-contact] Processing submission: ${referenceId}`);
    console.log(`[submit-contact] Contact: ${payload.businessEmail}`);

    // Email configuration
    const fromEmail = Deno.env.get("FROM_EMAIL") || "Ovelon Prime <noreply@ovelon-prime.com>";
    const internalEmail = Deno.env.get("INTERNAL_EMAIL") || "support@ovelon-prime.com";

    // Build HTML email for user confirmation
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
          .info-row { margin-bottom: 12px; }
          .info-label { color: #64748b; font-size: 13px; display: block; margin-bottom: 2px; }
          .info-value { color: #1e293b; font-size: 14px; }
          .cta { text-align: center; margin: 32px 0; }
          .cta a { display: inline-block; background: #0f172a; color: white; padding: 14px 28px; text-decoration: none; border-radius: 8px; font-weight: 600; }
          .cta a:hover { background: #1e293b; }
          .footer { background: #f8fafc; padding: 24px; text-align: center; font-size: 12px; color: #64748b; border-top: 1px solid #e2e8f0; }
          .footer p { margin: 4px 0; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>OVELON PRIME</h1>
            <p>Contact Request Received</p>
          </div>
          <div class="content">
            <p>Dear ${escapeHtml(fullName)},</p>
            <p>Thank you for reaching out. We have received your request and our team will review it carefully.</p>
            
            <div class="reference-box">
              <p>Your Reference ID</p>
              <strong>${referenceId}</strong>
            </div>

            <h2>Your Submission</h2>
            <div class="info-row">
              <span class="info-label">Name</span>
              <span class="info-value">${escapeHtml(fullName)}</span>
            </div>
            <div class="info-row">
              <span class="info-label">Business</span>
              <span class="info-value">${escapeHtml(payload.businessName)}</span>
            </div>
            <div class="info-row">
              <span class="info-label">Request Details</span>
              <span class="info-value">${escapeHtml(payload.requestDetails)}</span>
            </div>

            <h2>Next Steps</h2>
            <p>We will review your request internally and get back to you shortly. To expedite the process, you can schedule a strategic consultation directly:</p>
            
            <div class="cta">
              <a href="https://cal.com/ovelon-prime/introduction-call">Book a Strategic Consultation</a>
            </div>

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
          .header { background: #0f172a; color: white; padding: 24px; border-radius: 8px 8px 0 0; }
          .header h1 { margin: 0; font-size: 20px; }
          .content { background: #ffffff; padding: 24px; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 8px 8px; }
          .field { margin-bottom: 16px; padding-bottom: 16px; border-bottom: 1px solid #f1f5f9; }
          .field:last-child { border-bottom: none; margin-bottom: 0; padding-bottom: 0; }
          .label { font-size: 12px; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px; }
          .value { font-size: 15px; color: #0f172a; }
          .reference { background: #f1f5f9; padding: 12px; border-radius: 6px; margin-bottom: 20px; font-family: monospace; }
          .timestamp { color: #64748b; font-size: 13px; margin-top: 16px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>🔔 New Contact Request</h1>
          </div>
          <div class="content">
            <div class="reference">
              Reference: <strong>${referenceId}</strong>
            </div>
            
            <div class="field">
              <div class="label">First Name</div>
              <div class="value">${escapeHtml(payload.firstName)}</div>
            </div>
            
            <div class="field">
              <div class="label">Last Name</div>
              <div class="value">${escapeHtml(payload.lastName)}</div>
            </div>
            
            <div class="field">
              <div class="label">Business Name</div>
              <div class="value">${escapeHtml(payload.businessName)}</div>
            </div>
            
            <div class="field">
              <div class="label">Business Email</div>
              <div class="value"><a href="mailto:${escapeHtml(payload.businessEmail)}">${escapeHtml(payload.businessEmail)}</a></div>
            </div>
            
            <div class="field">
              <div class="label">Request Details</div>
              <div class="value">${escapeHtml(payload.requestDetails)}</div>
            </div>
            
            <div class="timestamp">
              Submitted: ${formattedDate}
            </div>
          </div>
        </div>
      </body>
      </html>
    `;

    // Send confirmation email to user
    try {
      const userEmailResult = await resend.emails.send({
        from: fromEmail,
        to: [payload.businessEmail],
        subject: "We received your request — Ovelon Prime",
        html: userEmailHtml,
      });
      console.log(`[submit-contact] User email sent:`, userEmailResult);
    } catch (emailError) {
      console.error("[submit-contact] Failed to send user email:", emailError);
      // Continue - don't fail the whole request if user email fails
    }

    // Send notification to internal team
    try {
      const internalEmailResult = await resend.emails.send({
        from: fromEmail,
        to: [internalEmail],
      subject: `New Contact Request — ${escapeHtml(payload.businessName)} — Ovelon Prime`,
      html: internalEmailHtml,
      reply_to: payload.businessEmail,
    });
      console.log(`[submit-contact] Internal email sent:`, internalEmailResult);
    } catch (emailError) {
      console.error("[submit-contact] Failed to send internal email:", emailError);
      // Continue - don't fail the whole request if internal email fails
    }

    console.log(`[submit-contact] Submission complete: ${referenceId}`);

    return new Response(
      JSON.stringify({
        success: true,
        referenceId,
        submittedAt,
      }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );

  } catch (error) {
    console.error("[submit-contact] Error:", error);
    return new Response(
      JSON.stringify({
        success: false,
        error: "An unexpected error occurred. Please try again.",
        errorCode: "SERVER_ERROR",
      }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
