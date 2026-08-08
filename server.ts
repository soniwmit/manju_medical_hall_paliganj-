import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";

const app = express();
const PORT = 3000;

app.use(express.json({ limit: "10mb" }));

// Lazy GoogleGenAI instance helper
let aiClient: GoogleGenAI | null = null;
function getGenAI() {
  if (!aiClient) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (apiKey && apiKey !== "MY_GEMINI_API_KEY") {
      aiClient = new GoogleGenAI({ apiKey });
    }
  }
  return aiClient;
}

// API Health
app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    business: "Manju Medical Hall Paliganj Indra Nagar More",
    phone: "06207148771",
  });
});

// Sitemap & Robots.txt static serving
app.get("/sitemap.xml", (req, res) => {
  res.header("Content-Type", "application/xml");
  res.sendFile(path.join(process.cwd(), "public", "sitemap.xml"));
});

app.get("/robots.txt", (req, res) => {
  res.header("Content-Type", "text/plain");
  res.sendFile(path.join(process.cwd(), "public", "robots.txt"));
});

// AI Assistant Endpoint
app.post("/api/ai-assist", async (req, res) => {
  try {
    const { prompt, context } = req.body;
    if (!prompt) {
      return res.status(400).json({ error: "Prompt is required" });
    }

    const ai = getGenAI();
    if (!ai) {
      // Fallback response if no API key provided
      return res.json({
        answer: `Thank you for asking! Manju Medical Hall in Paliganj Indra Nagar More is your trusted pharmacy for genuine medicines, baby care, surgical supplies, and health supplements. For specific dosage and prescription queries, please call us directly at 06207148771 or send a message on WhatsApp. Always consult a certified physician.`,
        source: "fallback",
      });
    }

    const systemInstruction = `You are the knowledgeable medical assistant for Manju Medical Hall located at Indra Nagar More, Paliganj, Bihar 801110. Phone: 06207148771.
    Provide helpful, polite, and concise information regarding general medicine uses, OTC products, baby care items, health supplements, and pharmacy services.
    CRITICAL DISCLAIMER: Always remind users that prescription drugs require a valid prescription and physician consultation. Do NOT give direct medical diagnoses or alter prescribed dosages. Keep responses well-formatted with bullet points if necessary.`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `${context ? `Context: ${context}\n\n` : ""}User Question: ${prompt}`,
      config: {
        systemInstruction,
        temperature: 0.3,
        maxOutputTokens: 800,
      },
    });

    res.json({
      answer: response.text || "No response generated. Please contact Manju Medical Hall at 06207148771.",
      source: "gemini",
    });
  } catch (error: any) {
    console.error("AI Assist error:", error);
    res.status(500).json({
      error: "Failed to process medical query.",
      answer: "We encountered an issue processing your query. Please call Manju Medical Hall directly at 06207148771 or WhatsApp us for instant help.",
    });
  }
});

async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Manju Medical Hall Server running on http://localhost:${PORT}`);
  });
}

startServer();
