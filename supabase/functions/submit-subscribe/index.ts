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

    // Send welcome email via Resend
    const resendApiKey = Deno.env.get("RESEND_API_KEY");
    const fromEmail = Deno.env.get("FROM_EMAIL") || "noreply@ovelon-prime.com";

    if (resendApiKey) {
      try {
        const resend = new Resend(resendApiKey);

        await resend.emails.send({
          from: `Ovelon Prime <${fromEmail}>`,
          to: [email],
          subject: "Welcome to Ovelon Prime",
          html: `
            <!DOCTYPE html>
            <html>
            <head>
              <meta charset="utf-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
            </head>
            <body style="margin: 0; padding: 0; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #f4f4f4;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #f4f4f4;">
                <tr>
                  <td align="center" style="padding: 40px 20px;">
                    <table role="presentation" width="600" cellspacing="0" cellpadding="0" style="background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
                      <!-- Header -->
                      <tr>
                        <td style="background: linear-gradient(135deg, #000033 0%, #001a33 100%); padding: 40px 40px 30px;">
                          <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 300; letter-spacing: 4px;">OVELON PRIME</h1>
                          <p style="margin: 10px 0 0; color: rgba(255,255,255,0.8); font-size: 14px; letter-spacing: 1px;">Seamless Operations</p>
                        </td>
                      </tr>
                      <!-- Content -->
                      <tr>
                        <td style="padding: 40px;">
                          <h2 style="margin: 0 0 20px; color: #000033; font-size: 24px; font-weight: 400;">Welcome, ${name}!</h2>
                          <p style="margin: 0 0 20px; color: #555555; font-size: 16px; line-height: 1.6;">
                            Thank you for subscribing to Ovelon Prime. You're now part of an exclusive community focused on operational excellence.
                          </p>
                          <p style="margin: 0 0 20px; color: #555555; font-size: 16px; line-height: 1.6;">
                            You'll receive exclusive insights on:
                          </p>
                          <ul style="margin: 0 0 20px; padding-left: 20px; color: #555555; font-size: 16px; line-height: 1.8;">
                            <li>Workflow optimization strategies</li>
                            <li>Operations management best practices</li>
                            <li>Industry trends and innovations</li>
                          </ul>
                          <p style="margin: 0; color: #555555; font-size: 16px; line-height: 1.6;">
                            Stay tuned for valuable content delivered directly to your inbox.
                          </p>
                        </td>
                      </tr>
                      <!-- Footer -->
                      <tr>
                        <td style="background-color: #f8f8f8; padding: 30px 40px; border-top: 1px solid #eeeeee;">
                          <p style="margin: 0; color: #888888; font-size: 12px; text-align: center;">
                            © ${new Date().getFullYear()} Ovelon Prime. All rights reserved.
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
        });

        console.log("[Subscribe] Welcome email sent successfully");
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
