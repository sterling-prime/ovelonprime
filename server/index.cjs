require("dotenv").config();

console.log("ENV VALUE:", process.env.RESEND_API_KEY);
console.log("SERVER FILE LOADED");

const express = require("express");
const { Resend } = require("resend");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// ⬇️ DIT MOET HIER STAAN — BOVEN ALLE ROUTES
const resend = new Resend(process.env.RESEND_API_KEY);
console.log("RESEND INSTANCE:", typeof resend);
// health check
app.get("/health", (req, res) => {
  res.json({ ok: true });
});

app.post("/api/request-review", async (req, res) => {
  try {
    const { data } = req.body;

    await resend.emails.send({
      from: "Ovelon Prime <noreply@ovelon-prime.com>",
      to: ["support@ovelon-prime.com"],
      subject: "New Operational Review Request",
      html: `<pre>${JSON.stringify(data, null, 2)}</pre>`,
    });

    res.json({ success: true });
  } catch (err) {
    console.error("EMAIL ERROR:", err);
    res.status(500).json({ success: false, error: String(err) });
  }
});

app.listen(3001, () => {
  console.log("✅ Server running on http://localhost:3001");
});
