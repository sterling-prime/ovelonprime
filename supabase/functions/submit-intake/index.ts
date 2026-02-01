import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@2.0.0";
import { jsPDF } from "https://esm.sh/jspdf@2.5.2";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.49.1";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

// Create Supabase client with service role for database operations
const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
const supabaseServiceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
const supabaseAdmin = createClient(supabaseUrl, supabaseServiceRoleKey);

// Allowed origins for CORS - restricts which domains can call this function
const allowedOrigins = [
  "https://ovelon-prime.com",
  "https://www.ovelon-prime.com",
  "https://ovelon-prime-vision.lovable.app",
  "https://id-preview--f0dc01e6-c277-45f8-8b58-90bb0d24365e.lovable.app",
  "http://localhost:5173", // local development
  "http://localhost:8080",
];

function getCorsHeaders(origin: string | null): Record<string, string> {
  const isAllowed = origin && allowedOrigins.some(allowed => 
    origin === allowed || 
    origin.endsWith('.lovable.app') || 
    origin.endsWith('.lovableproject.com')
  );
  
  return {
    "Access-Control-Allow-Origin": isAllowed ? origin : allowedOrigins[0],
    "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Vary": "Origin",
  };
}

// Rate limiting configuration
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000; // 15 minutes
const RATE_LIMIT_MAX_REQUESTS = 5; // max requests per window per IP

// In-memory rate limit store (resets on cold start, but provides protection within instance lifetime)
const rateLimitStore = new Map<string, { count: number; windowStart: number }>();

function checkRateLimit(ip: string): { allowed: boolean; remaining: number; resetAt: number } {
  const now = Date.now();
  
  // Clean up expired entries
  for (const [key, data] of rateLimitStore.entries()) {
    if (now - data.windowStart > RATE_LIMIT_WINDOW_MS) {
      rateLimitStore.delete(key);
    }
  }
  
  const record = rateLimitStore.get(ip);
  
  if (!record) {
    rateLimitStore.set(ip, { count: 1, windowStart: now });
    return { allowed: true, remaining: RATE_LIMIT_MAX_REQUESTS - 1, resetAt: now + RATE_LIMIT_WINDOW_MS };
  }
  
  // Check if window has expired
  if (now - record.windowStart > RATE_LIMIT_WINDOW_MS) {
    rateLimitStore.set(ip, { count: 1, windowStart: now });
    return { allowed: true, remaining: RATE_LIMIT_MAX_REQUESTS - 1, resetAt: now + RATE_LIMIT_WINDOW_MS };
  }
  
  // Check if limit exceeded
  if (record.count >= RATE_LIMIT_MAX_REQUESTS) {
    return { 
      allowed: false, 
      remaining: 0, 
      resetAt: record.windowStart + RATE_LIMIT_WINDOW_MS 
    };
  }
  
  // Increment count
  record.count++;
  return { 
    allowed: true, 
    remaining: RATE_LIMIT_MAX_REQUESTS - record.count, 
    resetAt: record.windowStart + RATE_LIMIT_WINDOW_MS 
  };
}

function getClientIp(req: Request): string {
  // Check common headers for client IP (in order of preference)
  const forwardedFor = req.headers.get("x-forwarded-for");
  if (forwardedFor) {
    // x-forwarded-for can contain multiple IPs, the first one is the client
    return forwardedFor.split(",")[0].trim();
  }
  
  const realIp = req.headers.get("x-real-ip");
  if (realIp) {
    return realIp.trim();
  }
  
  const cfConnectingIp = req.headers.get("cf-connecting-ip");
  if (cfConnectingIp) {
    return cfConnectingIp.trim();
  }
  
  return "unknown";
}

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

// Reusable email header with logo SVG
function getEmailHeader(subtitle: string): string {
  return `
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
                    <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwb2x5Z29uIHBvaW50cz0iMjAsMiAzNiwxMSAzNiwyOSAyMCwzOCA0LDI5IDQsMTEiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIyIiBmaWxsPSJub25lIi8+CiAgICA8bGluZSB4MT0iMjAiIHkxPSIyMCIgeDI9IjIwIiB5Mj0iMiIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjEuNSIvPgogICAgPGxpbmUgeDE9IjIwIiB5MT0iMjAiIHgyPSIzNiIgeTI9IjI5IiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMS41Ii8+CiAgICA8bGluZSB4MT0iMjAiIHkxPSIyMCIgeDI9IjQiIHkyPSIyOSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjEuNSIvPgogICAgPGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iNCIgZmlsbD0iI2ZmZmZmZiIvPgo8L3N2Zz4=" alt="Ovelon Prime" width="40" height="40" style="display: block;" />
                  </td>
                  <td style="vertical-align: middle;">
                    <h1 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: 300; letter-spacing: 4px; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;">OVELON PRIME</h1>
                    <p style="margin: 4px 0 0; color: rgba(255,255,255,0.7); font-size: 12px; letter-spacing: 1px;">${subtitle}</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  `;
}

// Reusable email footer with terms, privacy, and unsubscribe
function getEmailFooter(email: string): string {
  const unsubscribeUrl = `https://ovelon-prime.com/unsubscribe?email=${encodeURIComponent(email)}`;
  return `
    <!-- Footer -->
    <tr>
      <td style="background-color: #f8fafc; padding: 30px 40px; border-top: 1px solid #e2e8f0;">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
          <tr>
            <td style="text-align: center;">
              <p style="margin: 0 0 12px; color: #64748b; font-size: 12px; line-height: 1.6;">
                © ${new Date().getFullYear()} Ovelon Prime. All rights reserved.
              </p>
              <p style="margin: 0 0 12px; color: #94a3b8; font-size: 11px;">
                <a href="https://ovelon-prime.com/terms" style="color: #64748b; text-decoration: none;">Terms of Service</a>
                <span style="margin: 0 8px; color: #cbd5e1;">•</span>
                <a href="https://ovelon-prime.com/privacy" style="color: #64748b; text-decoration: none;">Privacy Policy</a>
                <span style="margin: 0 8px; color: #cbd5e1;">•</span>
                <a href="${unsubscribeUrl}" style="color: #64748b; text-decoration: none;">Unsubscribe</a>
              </p>
              <p style="margin: 0; color: #94a3b8; font-size: 11px;">
                Enterprise Operational Systems
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  `;
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
    if (y + neededHeight > pageHeight - 80) { // Reserve more space for footer
      addPageFooter();
      doc.addPage();
      y = margin;
    }
  };

  // Add footer to each page
  const addPageFooter = () => {
    const footerY = pageHeight - 50;
    
    // Divider line
    doc.setDrawColor(226, 232, 240);
    doc.line(margin, footerY - 20, pageWidth - margin, footerY - 20);
    
    // Footer text
    doc.setTextColor(148, 163, 184);
    doc.setFontSize(7);
    doc.setFont("helvetica", "normal");
    
    // Terms & Privacy links
    doc.text("Terms of Service: ovelon-prime.com/terms  •  Privacy Policy: ovelon-prime.com/privacy", margin, footerY - 5);
    
    // Talk to Expert link
    doc.setTextColor(14, 165, 233); // Sky blue
    doc.text("Talk to an Expert: cal.com/ovelon-prime/introduction-call", margin, footerY + 8);
    
    // Copyright
    doc.setTextColor(148, 163, 184);
    doc.text(`© ${new Date().getFullYear()} Ovelon Prime. All rights reserved.`, pageWidth - margin - 140, footerY + 8);
  };

  // Header with branding
  doc.setFillColor(15, 23, 42); // Dark slate
  doc.rect(0, 0, pageWidth, 90, "F");

  // Draw hexagonal logo icon
  const logoX = margin;
  const logoY = 45;
  const logoSize = 18;
  
  // Hexagon vertices (pointy-top orientation)
  const hexPoints: [number, number][] = [];
  for (let i = 0; i < 6; i++) {
    const angle = (Math.PI / 3) * i - Math.PI / 2;
    hexPoints.push([
      logoX + logoSize * Math.cos(angle),
      logoY + logoSize * Math.sin(angle)
    ]);
  }
  
  // Draw outer hexagon frame
  doc.setDrawColor(255, 255, 255);
  doc.setLineWidth(1.5);
  doc.setFillColor(15, 23, 42);
  doc.lines(
    hexPoints.slice(1).map((p, i) => [p[0] - hexPoints[i][0], p[1] - hexPoints[i][1]]),
    hexPoints[0][0],
    hexPoints[0][1],
    [1, 1],
    "FD",
    true
  );

  // Draw inner node (center circle)
  doc.setFillColor(255, 255, 255);
  doc.circle(logoX, logoY, 3, "F");

  // Draw inner lines from center to 3 alternating vertices
  doc.setLineWidth(1);
  for (let i = 0; i < 6; i += 2) {
    doc.line(logoX, logoY, hexPoints[i][0], hexPoints[i][1]);
  }

  // Brand wordmark
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(22);
  doc.setFont("helvetica", "bold");
  doc.text("OVELON PRIME", logoX + 32, 50);

  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(200, 200, 200);
  doc.text("Operational Review Request", logoX + 32, 68);

  y = 115;

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

  // Helper: Add section title with header-matching style (dark background)
  const addSectionTitle = (title: string) => {
    checkPageBreak(45);
    doc.setFillColor(15, 23, 42); // Dark slate matching header
    doc.roundedRect(margin, y, contentWidth, 28, 3, 3, "F");
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(11);
    doc.setFont("helvetica", "bold");
    doc.text(title.toUpperCase(), margin + 12, y + 18);
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

  // Helper: Add bullet list with proper text wrapping for long items
  const addBulletList = (label: string, items: string[]) => {
    if (!items || items.length === 0) return;
    
    doc.setTextColor(100, 116, 139);
    doc.setFontSize(9);
    doc.setFont("helvetica", "normal");
    doc.text(label, margin, y);
    y += 14;

    doc.setTextColor(15, 23, 42);
    doc.setFontSize(10);
    const bulletIndent = 15;
    const bulletContentWidth = contentWidth - bulletIndent;
    
    items.forEach((item) => {
      // Wrap text properly for long items (especially important for Polish/German)
      const lines = doc.splitTextToSize(item, bulletContentWidth);
      checkPageBreak(lines.length * 14 + 4);
      
      // Draw bullet point
      doc.text("•", margin + 4, y);
      
      // Draw wrapped text
      lines.forEach((line: string, lineIndex: number) => {
        doc.text(line, margin + bulletIndent, y);
        if (lineIndex < lines.length - 1) {
          y += 14;
        }
      });
      y += 18;
    });
    y += 4;
  };

  // Helper: Add premium analysis card with executive styling
  const addAnalysisCard = (title: string, content: string | string[], icon: string) => {
    const isArray = Array.isArray(content);
    const items = isArray ? content : [content];
    if (items.length === 0 || (items.length === 1 && !items[0])) return;

    // Calculate card height
    let estimatedHeight = 50;
    items.forEach((item) => {
      const lines = doc.splitTextToSize(item, contentWidth - 50);
      estimatedHeight += lines.length * 14 + 8;
    });
    
    checkPageBreak(estimatedHeight);

    // Card background with subtle gradient effect
    doc.setFillColor(250, 251, 252);
    doc.roundedRect(margin, y, contentWidth, estimatedHeight, 6, 6, "F");
    
    // Left accent bar - matching dark header style
    doc.setFillColor(15, 23, 42); // Dark slate matching header
    doc.roundedRect(margin, y, 4, estimatedHeight, 2, 2, "F");

    // Card title with icon - dark styled like header
    y += 18;
    doc.setTextColor(15, 23, 42);
    doc.setFontSize(11);
    doc.setFont("helvetica", "bold");
    doc.text(`${icon}  ${title.toUpperCase()}`, margin + 16, y);
    y += 16;

    // Card content
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.setTextColor(51, 65, 85);
    
    items.forEach((item) => {
      const lines = doc.splitTextToSize(item, contentWidth - 50);
      
      if (isArray && items.length > 1) {
        // Bullet for multiple items
        doc.setFillColor(14, 165, 233);
        doc.circle(margin + 22, y - 3, 2, "F");
        lines.forEach((line: string, idx: number) => {
          doc.text(line, margin + 30, y);
          y += 14;
        });
      } else {
        // No bullet for single item
        lines.forEach((line: string) => {
          doc.text(line, margin + 16, y);
          y += 14;
        });
      }
      y += 4;
    });
    
    y += 10;
  };

  // Helper: Add readiness badge
  const addReadinessBadge = (label: string, value: string) => {
    checkPageBreak(60);
    
    // Determine color based on readiness level
    let bgColor: [number, number, number] = [241, 245, 249]; // Default gray
    let textColor: [number, number, number] = [71, 85, 105];
    let accentColor: [number, number, number] = [100, 116, 139];
    
    const lowerValue = value.toLowerCase();
    if (lowerValue.includes("high") || lowerValue.includes("wysok") || lowerValue.includes("hoch") || lowerValue.includes("élevé") || lowerValue.includes("alt")) {
      bgColor = [220, 252, 231]; // Green
      textColor = [22, 101, 52];
      accentColor = [34, 197, 94];
    } else if (lowerValue.includes("moderate") || lowerValue.includes("umiarkow") || lowerValue.includes("mittel") || lowerValue.includes("modér") || lowerValue.includes("moder")) {
      bgColor = [254, 249, 195]; // Yellow
      textColor = [133, 77, 14];
      accentColor = [234, 179, 8];
    } else if (lowerValue.includes("low") || lowerValue.includes("nisk") || lowerValue.includes("niedrig") || lowerValue.includes("faible") || lowerValue.includes("bass")) {
      bgColor = [254, 226, 226]; // Red
      textColor = [153, 27, 27];
      accentColor = [239, 68, 68];
    }

    // Card background
    doc.setFillColor(...bgColor);
    doc.roundedRect(margin, y, contentWidth, 50, 6, 6, "F");
    
    // Accent bar
    doc.setFillColor(...accentColor);
    doc.roundedRect(margin, y, 4, 50, 2, 2, "F");

    // Label
    y += 18;
    doc.setTextColor(100, 116, 139);
    doc.setFontSize(9);
    doc.setFont("helvetica", "normal");
    doc.text(label, margin + 16, y);
    
    // Value
    y += 16;
    doc.setTextColor(...textColor);
    doc.setFontSize(13);
    doc.setFont("helvetica", "bold");
    const valueLines = doc.splitTextToSize(value, contentWidth - 40);
    doc.text(valueLines[0], margin + 16, y);
    
    y += 26;
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

  // Analysis Section - Premium Executive Layout
  const { analysis } = payload;
  
  // Section header with distinct styling (matching document header)
  checkPageBreak(50);
  doc.setFillColor(15, 23, 42); // Dark header
  doc.roundedRect(margin, y, contentWidth, 36, 4, 4, "F");
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(13);
  doc.setFont("helvetica", "bold");
  doc.text("EXECUTIVE ANALYSIS", margin + 16, y + 23);
  y += 50;

  // Key Observations Card
  if (analysis.operationalObservations && analysis.operationalObservations.length > 0) {
    addAnalysisCard("Key Observations", analysis.operationalObservations, "◉");
  }

  // Risk Exposure Card
  if (analysis.riskExposure && analysis.riskExposure.length > 0) {
    addAnalysisCard("Risk Exposure", analysis.riskExposure, "⚠");
  }

  // Execution Readiness Badge
  if (analysis.executionReadiness) {
    addReadinessBadge("Execution Readiness Assessment", analysis.executionReadiness);
  }

  // Advisory Direction Card
  if (analysis.advisoryDirection && analysis.advisoryDirection.length > 0) {
    addAnalysisCard("Strategic Advisory Direction", analysis.advisoryDirection, "→");
  }

  // Add Talk to Expert CTA section before footer
  checkPageBreak(70);
  y += 10;
  
  // CTA Box
  doc.setFillColor(241, 245, 249);
  doc.roundedRect(margin, y, contentWidth, 55, 6, 6, "F");
  doc.setDrawColor(14, 165, 233);
  doc.setLineWidth(1);
  doc.roundedRect(margin, y, contentWidth, 55, 6, 6, "S");
  
  doc.setTextColor(15, 23, 42);
  doc.setFontSize(11);
  doc.setFont("helvetica", "bold");
  doc.text("Ready to accelerate your operational transformation?", margin + 15, y + 22);
  
  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  doc.setTextColor(14, 165, 233);
  doc.text("Talk to an Expert: cal.com/ovelon-prime/introduction-call", margin + 15, y + 40);
  
  y += 70;

  // Add footer to the last page
  addPageFooter();

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
  // Get origin for CORS
  const origin = req.headers.get("origin");
  const corsHeaders = getCorsHeaders(origin);

  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  // Rate limiting check
  const clientIp = getClientIp(req);
  const rateLimit = checkRateLimit(clientIp);
  
  console.log(`[submit-intake] Request from IP: ${clientIp}, origin: ${origin}, remaining: ${rateLimit.remaining}`);
  
  if (!rateLimit.allowed) {
    console.log(`[submit-intake] Rate limit exceeded for IP: ${clientIp}`);
    return new Response(
      JSON.stringify({
        success: false,
        error: "Too many requests. Please try again later.",
        errorCode: "RATE_LIMIT_EXCEEDED",
        resetAt: new Date(rateLimit.resetAt).toISOString(),
      }),
      { 
        status: 429, 
        headers: { 
          ...corsHeaders, 
          "Content-Type": "application/json",
          "X-RateLimit-Remaining": "0",
          "X-RateLimit-Reset": rateLimit.resetAt.toString(),
        } 
      }
    );
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

    // Extract data from payload
    const { contactDetails, operationalData, analysis } = payload;

    // Save to database
    try {
      // Parse the full name into first/last name
      const nameParts = contactDetails.fullName?.trim().split(/\s+/) || [];
      const firstName = nameParts[0] || "";
      const lastName = nameParts.slice(1).join(" ") || "";

      const { error: dbError } = await supabaseAdmin
        .from("intake_submissions")
        .insert({
          reference_id: referenceId,
          first_name: firstName,
          last_name: lastName,
          job_title: contactDetails.role,
          company: contactDetails.companyName,
          email: contactDetails.email,
          phone: contactDetails.phone,
          country: contactDetails.country,
          city: contactDetails.city,
          industry: operationalData.industry,
          company_size: operationalData.scale,
          focus_areas: operationalData.operationType,
          priority_cost_reduction: null, // Not in current form
          priority_quality: null,
          priority_delivery: null,
          priority_flexibility: null,
          priority_sustainability: null,
          challenges: operationalData.frictionPoints,
          timeline: null, // Not in current form
          budget: null,
          ai_analysis: {
            operationalObservations: analysis.operationalObservations,
            riskExposure: analysis.riskExposure,
            executionReadiness: analysis.executionReadiness,
            advisoryDirection: analysis.advisoryDirection,
          },
          language: "en", // Could be passed from frontend
          user_agent: req.headers.get("user-agent"),
          ip_address: clientIp,
          pdf_attached: true,
        });

      if (dbError) {
        console.error("[submit-intake] Database insert failed:", dbError);
        // Continue anyway - email is still valuable
      } else {
        console.log("[submit-intake] Database record created successfully");
      }
    } catch (dbErr) {
      console.error("[submit-intake] Database error:", dbErr);
      // Continue with email sending
    }
    
    // Build HTML email for user
    const userEmailHtml = `
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
                
                ${getEmailHeader("Operational Review Request Received")}

                <!-- Content -->
                <tr>
                  <td style="padding: 40px;">
                    <p style="margin: 0 0 20px; color: #1e293b; font-size: 16px; line-height: 1.7;">Dear ${escapeHtml(contactDetails.fullName)},</p>
                    <p style="margin: 0 0 24px; color: #475569; font-size: 15px; line-height: 1.7;">Thank you for submitting your Operational Review Request. We have received your submission and our team will review it shortly.</p>
                    
                    <!-- Reference Box -->
                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="margin-bottom: 24px;">
                      <tr>
                        <td style="background: #f1f5f9; border-radius: 8px; padding: 16px;">
                          <p style="margin: 0; font-size: 13px; color: #64748b;">Your Reference ID</p>
                          <p style="margin: 4px 0 0; font-size: 18px; font-family: monospace; font-weight: bold; color: #0f172a;">${referenceId}</p>
                        </td>
                      </tr>
                    </table>

                    <!-- Submission Summary -->
                    <h2 style="margin: 24px 0 16px; font-size: 16px; color: #0f172a; border-bottom: 2px solid #e2e8f0; padding-bottom: 8px;">Submission Summary</h2>
                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                      <tr>
                        <td style="padding: 8px 0;">
                          <span style="color: #64748b; font-size: 13px; display: inline-block; width: 100px;">Company</span>
                          <span style="color: #1e293b; font-size: 14px;">${escapeHtml(contactDetails.companyName)}</span>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 8px 0;">
                          <span style="color: #64748b; font-size: 13px; display: inline-block; width: 100px;">Industry</span>
                          <span style="color: #1e293b; font-size: 14px;">${escapeHtml(getLabel("industry", operationalData.industry))}</span>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 8px 0;">
                          <span style="color: #64748b; font-size: 13px; display: inline-block; width: 100px;">Scale</span>
                          <span style="color: #1e293b; font-size: 14px;">${escapeHtml(getLabel("scale", operationalData.scale))}</span>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 8px 0;">
                          <span style="color: #64748b; font-size: 13px; display: inline-block; width: 100px;">Location</span>
                          <span style="color: #1e293b; font-size: 14px;">${escapeHtml(contactDetails.city)}, ${escapeHtml(contactDetails.country)}</span>
                        </td>
                      </tr>
                    </table>

                    <p style="margin: 24px 0; color: #475569; font-size: 15px; line-height: 1.7;">A detailed PDF report of your submission is attached to this email for your records.</p>

                    <!-- Next Steps -->
                    <h2 style="margin: 24px 0 16px; font-size: 16px; color: #0f172a; border-bottom: 2px solid #e2e8f0; padding-bottom: 8px;">Next Steps</h2>
                    <p style="margin: 0 0 24px; color: #475569; font-size: 15px; line-height: 1.7;">To accelerate the review process, you can schedule a strategic consultation with our team:</p>
                    
                    <!-- CTA Button -->
                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                      <tr>
                        <td align="center" style="padding: 16px 0 32px;">
                          <a href="https://cal.com/ovelon-prime/introduction-call" style="display: inline-block; background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); color: #ffffff; text-decoration: none; padding: 14px 32px; border-radius: 8px; font-size: 15px; font-weight: 500;">Talk to an Expert →</a>
                        </td>
                      </tr>
                    </table>

                    <p style="margin: 0 0 16px; color: #475569; font-size: 15px; line-height: 1.7;">If you have any questions, please reply to this email or contact us at <a href="mailto:info@ovelon-prime.com" style="color: #0ea5e9;">info@ovelon-prime.com</a>.</p>

                    <p style="margin: 0; color: #475569; font-size: 15px; line-height: 1.7;">Best regards,<br><strong>Ovelon Prime Team</strong></p>
                  </td>
                </tr>

                ${getEmailFooter(contactDetails.email)}
              </table>
            </td>
          </tr>
        </table>
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
            ${(operationalData.frictionPoints || []).map(fp => `<li>${escapeHtml(getLabel("frictionPoints", fp))}</li>`).join("") || "<li>None specified</li>"}
          </ul>
          ${operationalData.frictionNotes ? `<div class="notes">"${escapeHtml(operationalData.frictionNotes)}"</div>` : ""}

          <h2>Compliance Requirements</h2>
          <ul>
            ${(operationalData.safetyCompliance || []).map(sc => `<li>${escapeHtml(getLabel("safetyCompliance", sc))}</li>`).join("") || "<li>None specified</li>"}
          </ul>

          <h2>System Analysis</h2>
          <p><strong>Observations:</strong></p>
          <ul>
            ${(analysis.operationalObservations || []).map(obs => `<li>${escapeHtml(obs)}</li>`).join("") || "<li>None</li>"}
          </ul>
          <p><strong>Risk Exposure:</strong></p>
          <ul>
            ${(analysis.riskExposure || []).map(risk => `<li>${escapeHtml(risk)}</li>`).join("") || "<li>None identified</li>"}
          </ul>
          <p><strong>Execution Readiness:</strong> ${escapeHtml(analysis.executionReadiness || "Not assessed")}</p>
          <p><strong>Advisory Direction:</strong></p>
          <ul>
            ${(analysis.advisoryDirection || []).map(dir => `<li>${escapeHtml(dir)}</li>`).join("") || "<li>None</li>"}
          </ul>

          <hr style="margin: 32px 0; border: none; border-top: 1px solid #e2e8f0;">
          <p style="color: #64748b; font-size: 12px;">Full PDF report attached. Review and follow up within 24 hours.</p>
        </div>
      </body>
      </html>
    `;

    // Email configuration
    const fromEmail = "Ovelon Prime <info@ovelon-prime.com>";
    const internalEmail = Deno.env.get("INTERNAL_EMAIL") || "info@ovelon-prime.com";

    // Send confirmation email to user with PDF
    try {
      const userEmailResult = await resend.emails.send({
        from: fromEmail,
        to: [contactDetails.email],
        subject: `Your Operational Review Request — ${referenceId}`,
        html: userEmailHtml,
        attachments: [
          {
            filename: `Ovelon-Prime-Operational-Review-${referenceId}.pdf`,
            content: pdfBase64,
          },
        ],
      });
      console.log(`[submit-intake] User email sent:`, userEmailResult);
    } catch (emailError) {
      console.error("[submit-intake] Failed to send user email:", emailError);
      // Continue - don't fail the whole request if user email fails
    }

    // Send notification to internal team with PDF
    try {
      const internalEmailResult = await resend.emails.send({
        from: fromEmail,
        to: [internalEmail],
        subject: `New Intake — ${contactDetails.companyName} — ${referenceId}`,
        html: internalEmailHtml,
        reply_to: contactDetails.email,
        attachments: [
          {
            filename: `Ovelon-Prime-Operational-Review-${referenceId}.pdf`,
            content: pdfBase64,
          },
        ],
      });
      console.log(`[submit-intake] Internal email sent:`, internalEmailResult);
    } catch (emailError) {
      console.error("[submit-intake] Failed to send internal email:", emailError);
      // Continue - don't fail the whole request if internal email fails
    }

    console.log(`[submit-intake] Submission complete: ${referenceId}`);

    return new Response(
      JSON.stringify({
        success: true,
        referenceId,
        pdfAttached: true,
        submittedAt,
      }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("[submit-intake] Error:", error);
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
