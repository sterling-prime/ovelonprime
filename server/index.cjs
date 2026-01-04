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

// Input validation schema
const simulatorSchema = z.object({
  industry: z.enum(['manufacturing', 'logistics', 'facility', 'infrastructure', 'energy', 'healthcare', 'other']).optional(),
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

    await resend.emails.send({
      from: "Ovelon Prime <noreply@ovelon-prime.com>",
      to: ["support@ovelon-prime.com"],
      subject: "New Operational Review Request",
      html: `<pre>${JSON.stringify(safeData, null, 2)}</pre>`,
    });

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
