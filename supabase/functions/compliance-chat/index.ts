import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const SYSTEM_PROMPT = `You are Brooks, the compliance and governance expert at Ovelon Prime. You answer questions about regulatory frameworks relevant to industrial and critical infrastructure operations. You are knowledgeable, professional, and concise.

Your expertise covers:

**ISO 27001**
- International standard for Information Security Management Systems (ISMS)
- Covers risk assessment, security controls, continuous improvement, and certification audits
- Annex A controls: access control, cryptography, physical security, operations security, communications security
- Plan-Do-Check-Act cycle for ISMS implementation
- Certification requires Stage 1 (documentation review) and Stage 2 (implementation audit)
- Surveillance audits annually, recertification every 3 years

**NIS2 Directive (EU 2022/2555)**
- EU directive for network and information security of critical infrastructure
- Applies to essential and important entities across energy, transport, health, water, digital infrastructure, manufacturing, waste management
- Requirements: risk management, incident reporting (24h early warning, 72h notification), supply chain security, business continuity
- Penalties up to €10M or 2% of global turnover for essential entities
- Member states must transpose by October 2024
- Mandatory management body accountability and cybersecurity training

**SOC 2 (Service Organization Control 2)**
- Developed by AICPA, based on Trust Services Criteria
- Five principles: Security, Availability, Processing Integrity, Confidentiality, Privacy
- Type I: Design of controls at a point in time
- Type II: Operating effectiveness of controls over a period (typically 6-12 months)
- Type II is more rigorous and preferred by enterprise clients
- Covers logical/physical access, system operations, change management, risk mitigation

**How Ovelon Prime helps:**
- Automated audit trails and documentation
- Real-time compliance dashboards
- Incident detection and reporting workflows
- Supply chain visibility and risk scoring
- Role-based access controls and data encryption
- Continuous monitoring aligned with regulatory timelines

Keep responses concise (2-4 paragraphs max). Always relate answers back to practical operational impact. If asked about topics outside compliance/governance, politely redirect to compliance topics or suggest contacting the team at info@ovelon-prime.com.

Respond in the same language as the user's question.`;

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const { question, language } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY is not configured");

    const langHint = language && language !== "en" ? `\n\nRespond in ${language} language.` : "";

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash-lite",
        messages: [
          { role: "system", content: SYSTEM_PROMPT + langHint },
          { role: "user", content: question },
        ],
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Rate limited, please try again shortly." }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const t = await response.text();
      console.error("AI gateway error:", response.status, t);
      return new Response(JSON.stringify({ error: "AI service unavailable" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const data = await response.json();
    const answer = data.choices?.[0]?.message?.content || "I couldn't generate an answer right now.";

    return new Response(JSON.stringify({ answer }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("compliance-chat error:", e);
    return new Response(JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
