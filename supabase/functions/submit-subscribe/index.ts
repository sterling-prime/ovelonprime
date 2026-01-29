import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.49.1";
import { Resend } from "https://esm.sh/resend@4.0.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface SubscribeRequest {
  name: string;
  email: string;
}

// Operations E-Guide PDF as base64 (embedded for reliable delivery)
const PDF_URL = "https://ovelon-prime-vision.lovable.app/assets/Operations_E-Guide.pdf";

serve(async (req: Request): Promise<Response> => {
  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email }: SubscribeRequest = await req.json();

    // Validate input
    if (!name || !email) {
      return new Response(
        JSON.stringify({ success: false, error: "Name and email are required" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ success: false, error: "Invalid email format" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    console.log("[Subscribe] Processing subscription for:", email);

    // Initialize Supabase client with service role
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Save subscriber to database
    const { error: dbError } = await supabase
      .from("subscribers")
      .upsert(
        { name: name.trim(), email: email.toLowerCase().trim(), source: "popup" },
        { onConflict: "email" }
      );

    if (dbError) {
      console.error("[Subscribe] Database error:", dbError);
      return new Response(
        JSON.stringify({ success: false, error: "Failed to save subscription" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    console.log("[Subscribe] Subscriber saved to database");

    // Fetch PDF for attachment
    let pdfAttachment = null;
    try {
      const pdfResponse = await fetch(PDF_URL);
      if (pdfResponse.ok) {
        const pdfBuffer = await pdfResponse.arrayBuffer();
        const pdfBase64 = btoa(
          new Uint8Array(pdfBuffer).reduce((data, byte) => data + String.fromCharCode(byte), "")
        );
        pdfAttachment = {
          filename: "Ovelon-Prime-Operations-E-Guide.pdf",
          content: pdfBase64,
        };
        console.log("[Subscribe] PDF attachment prepared successfully");
      } else {
        console.warn("[Subscribe] Failed to fetch PDF:", pdfResponse.status);
      }
    } catch (pdfError) {
      console.error("[Subscribe] Error fetching PDF:", pdfError);
    }

    // Send welcome email via Resend
    const resendApiKey = Deno.env.get("RESEND_API_KEY");
    const fromEmail = Deno.env.get("FROM_EMAIL") || "noreply@ovelon-prime.com";

    if (resendApiKey) {
      try {
        const resend = new Resend(resendApiKey);

        const emailOptions: any = {
          from: `Ovelon Prime <${fromEmail}>`,
          to: [email],
          subject: "Welcome to Ovelon Prime – Your Operations E-Guide Inside",
          html: `
            <!DOCTYPE html>
            <html>
            <head>
              <meta charset="utf-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
            </head>
            <body style="margin: 0; padding: 0; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #f8fafc;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #f8fafc;">
                <tr>
                  <td align="center" style="padding: 40px 20px;">
                    <table role="presentation" width="600" cellspacing="0" cellpadding="0" style="background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 24px rgba(0,0,0,0.08);">
                      
                      <!-- Premium Header with Logo -->
                      <tr>
                        <td style="background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); padding: 40px 40px 35px;">
                          <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                            <tr>
                              <td>
                                <!-- Hexagonal Logo SVG -->
                                <table role="presentation" cellspacing="0" cellpadding="0">
                                  <tr>
                                    <td style="vertical-align: middle; padding-right: 14px;">
                                      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <polygon points="20,2 36,11 36,29 20,38 4,29 4,11" stroke="#ffffff" stroke-width="2" fill="none"/>
                                        <line x1="20" y1="20" x2="20" y2="2" stroke="#ffffff" stroke-width="1.5"/>
                                        <line x1="20" y1="20" x2="36" y2="29" stroke="#ffffff" stroke-width="1.5"/>
                                        <line x1="20" y1="20" x2="4" y2="29" stroke="#ffffff" stroke-width="1.5"/>
                                        <circle cx="20" cy="20" r="4" fill="#ffffff"/>
                                      </svg>
                                    </td>
                                    <td style="vertical-align: middle;">
                                      <h1 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: 300; letter-spacing: 4px;">OVELON PRIME</h1>
                                      <p style="margin: 4px 0 0; color: rgba(255,255,255,0.7); font-size: 12px; letter-spacing: 1px;">Seamless Operations</p>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>

                      <!-- Welcome Section -->
                      <tr>
                        <td style="padding: 40px 40px 30px;">
                          <h2 style="margin: 0 0 20px; color: #0f172a; font-size: 26px; font-weight: 600;">Welcome, ${name}!</h2>
                          <p style="margin: 0 0 24px; color: #475569; font-size: 16px; line-height: 1.7;">
                            Thank you for joining Ovelon Prime. You're now part of an exclusive community focused on operational excellence and workflow optimization.
                          </p>
                        </td>
                      </tr>

                      <!-- E-Guide Card -->
                      <tr>
                        <td style="padding: 0 40px 30px;">
                          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%); border-radius: 12px; border-left: 4px solid #22c55e;">
                            <tr>
                              <td style="padding: 24px;">
                                <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                                  <tr>
                                    <td style="vertical-align: top; padding-right: 16px;">
                                      <div style="width: 48px; height: 48px; background-color: #22c55e; border-radius: 10px; display: flex; align-items: center; justify-content: center;">
                                        <span style="font-size: 24px;">📖</span>
                                      </div>
                                    </td>
                                    <td style="vertical-align: top;">
                                      <h3 style="margin: 0 0 8px; color: #166534; font-size: 18px; font-weight: 600;">Your Operations E-Guide</h3>
                                      <p style="margin: 0; color: #15803d; font-size: 14px; line-height: 1.6;">
                                        As promised, we've attached your complimentary Operations E-Guide. This comprehensive resource covers essential strategies for optimizing your operational workflows.
                                      </p>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>

                      <!-- What You'll Receive Section -->
                      <tr>
                        <td style="padding: 0 40px 30px;">
                          <h3 style="margin: 0 0 16px; color: #0f172a; font-size: 16px; font-weight: 600;">What you'll receive from us:</h3>
                          <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                            <tr>
                              <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0;">
                                <table role="presentation" cellspacing="0" cellpadding="0">
                                  <tr>
                                    <td style="padding-right: 12px; vertical-align: top;">
                                      <div style="width: 8px; height: 8px; background-color: #0ea5e9; border-radius: 50%; margin-top: 6px;"></div>
                                    </td>
                                    <td style="color: #475569; font-size: 15px; line-height: 1.6;">
                                      Workflow optimization strategies and best practices
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                            <tr>
                              <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0;">
                                <table role="presentation" cellspacing="0" cellpadding="0">
                                  <tr>
                                    <td style="padding-right: 12px; vertical-align: top;">
                                      <div style="width: 8px; height: 8px; background-color: #0ea5e9; border-radius: 50%; margin-top: 6px;"></div>
                                    </td>
                                    <td style="color: #475569; font-size: 15px; line-height: 1.6;">
                                      Operations management insights and frameworks
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                            <tr>
                              <td style="padding: 12px 0;">
                                <table role="presentation" cellspacing="0" cellpadding="0">
                                  <tr>
                                    <td style="padding-right: 12px; vertical-align: top;">
                                      <div style="width: 8px; height: 8px; background-color: #0ea5e9; border-radius: 50%; margin-top: 6px;"></div>
                                    </td>
                                    <td style="color: #475569; font-size: 15px; line-height: 1.6;">
                                      Industry trends and innovation updates
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>

                      <!-- CTA Section -->
                      <tr>
                        <td style="padding: 0 40px 40px;">
                          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #f8fafc; border-radius: 12px;">
                            <tr>
                              <td style="padding: 24px; text-align: center;">
                                <p style="margin: 0 0 16px; color: #64748b; font-size: 14px;">
                                  Ready to transform your operations?
                                </p>
                                <a href="https://ovelon-prime.com" style="display: inline-block; background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); color: #ffffff; text-decoration: none; padding: 14px 32px; border-radius: 8px; font-size: 15px; font-weight: 500;">
                                  Explore Ovelon Prime →
                                </a>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>

                      <!-- Footer -->
                      <tr>
                        <td style="background-color: #f8fafc; padding: 30px 40px; border-top: 1px solid #e2e8f0;">
                          <p style="margin: 0; color: #94a3b8; font-size: 12px; text-align: center; line-height: 1.6;">
                            © ${new Date().getFullYear()} Ovelon Prime. All rights reserved.<br>
                            <a href="https://ovelon-prime.com/privacy" style="color: #64748b; text-decoration: none;">Privacy Policy</a> · 
                            <a href="https://ovelon-prime.com/terms" style="color: #64748b; text-decoration: none;">Terms of Service</a>
                          </p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </body>
            </html>
          `,
        };

        // Add PDF attachment if available
        if (pdfAttachment) {
          emailOptions.attachments = [pdfAttachment];
        }

        await resend.emails.send(emailOptions);

        console.log("[Subscribe] Welcome email sent successfully with PDF attachment:", !!pdfAttachment);
      } catch (emailError) {
        console.error("[Subscribe] Email sending failed:", emailError);
        // Don't fail the whole request if email fails
      }
    } else {
      console.warn("[Subscribe] RESEND_API_KEY not configured, skipping welcome email");
    }

    return new Response(
      JSON.stringify({ success: true, message: "Subscribed successfully" }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );

  } catch (error) {
    console.error("[Subscribe] Unexpected error:", error);
    return new Response(
      JSON.stringify({ success: false, error: "An unexpected error occurred" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
