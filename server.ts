import express from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const isProd = process.env.NODE_ENV === 'production';
const PORT = 3000;

async function startServer() {
  const app = express();
  app.use(express.json());

  // Initialize Gemini client on the server
  // User-Agent: aistudio-build is mandatory for telemetry tracking
  const apiKey = process.env.GEMINI_API_KEY;
  const ai = new GoogleGenAI({
    apiKey: apiKey || '',
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      }
    }
  });

  // API endpoint for audit / strategy generation
  app.post('/api/audit', async (req, res) => {
    try {
      const { name, email, company, industry, currentTools, challenges } = req.body;

      if (!industry || !challenges) {
        return res.status(400).json({ error: 'Industry and challenges are required.' });
      }

      if (!apiKey) {
        // Return a professional mock response if API Key is missing, so the app remains perfectly usable
        return res.json({
          summary: `Thank you for requesting an audit for ${company || 'your business'}! It looks like our AI Strategy engine is running in sandbox mode, but based on your challenges in ${industry} with ${challenges}, you are losing significant revenue to speed-to-lead bottlenecks.`,
          quickWins: [
            {
              title: "Instant AI SMS Speed-to-Lead",
              description: "Trigger an intelligent automated text to fresh leads in under 10 seconds of capture.",
              hoursSaved: "5-6 hours/week",
              impact: "Immediately doubles lead-to-booking rates"
            },
            {
              title: "GoHighLevel CRM Integration",
              description: "Consolidate all inbound pipelines into one transparent visual dashboard.",
              hoursSaved: "4 hours/week",
              impact: "Ensures 0% lead leakage"
            }
          ],
          longTermStrategy: "Transition completely to an AI Voice receptionist for answering after-hours calls and pre-qualifying leads before your sales team schedules consultation calls.",
          estimatedMetrics: {
            hoursSavedPerWeek: "10-12 hours per week",
            responseTimeImprovement: "From hours down to sub-10 seconds",
            estimatedConversionUplift: "+25% increase in booked calls"
          },
          recommendedStack: ["GoHighLevel CRM", "Vapi / Retool AI Voice", "Make.com Automation Loops"]
        });
      }

      const prompt = `
You are the AI Chief Automation Officer at StartupBae.
Generate a high-value, professional AI Automation & CRM Strategy for a business with the following profile:
- Contact Name: ${name || 'Valued Prospect'}
- Business Name: ${company || 'Our Future Partner'}
- Industry: ${industry}
- Current tools/methods used: ${currentTools || 'manual tracking/spreadsheets/emails'}
- Key pain points & challenges: ${challenges}

We need to convince them that automating their lead responses and deploying CRM systems is their highest ROI move.
Provide the strategy in a structured JSON format. Return ONLY a valid JSON object matching the following structure (no markdown fences, no formatting backticks):

{
  "summary": "A concise executive summary of why their current manual processes are costing them revenue and how automation solves it.",
  "quickWins": [
    {
      "title": "Quick Win Title (e.g., AI Receptionist or Instant Lead Follow-up)",
      "description": "Clear explanation of how we will automate this specific process.",
      "hoursSaved": "Est. hours saved per week",
      "impact": "Specific business/revenue impact"
    },
    {
      "title": "Another Quick Win",
      "description": "Clear explanation of how we will automate this second process.",
      "hoursSaved": "Est. hours saved per week",
      "impact": "Specific business/revenue impact"
    }
  ],
  "longTermStrategy": "A strategic description of their 3-6 month automation roadmap (e.g., CRM consolidation, Voice AI agents, custom workflows).",
  "estimatedMetrics": {
    "hoursSavedPerWeek": "Total hours saved per week (e.g., '12-15 hours')",
    "responseTimeImprovement": "Improvement in response time (e.g., 'From 4 hours to under 30 seconds')",
    "estimatedConversionUplift": "Est. conversion rate increase (e.g., '+28%')"
  },
  "recommendedStack": ["Tool/technology 1", "Tool/technology 2", "Tool/technology 3"]
}
`;

      const response = await ai.models.generateContent({
        model: 'gemini-3.5-flash',
        contents: prompt,
        config: {
          responseMimeType: 'application/json',
        }
      });

      const responseText = response.text || '{}';
      res.json(JSON.parse(responseText.trim()));
    } catch (error: any) {
      console.error('Gemini API Error:', error);
      res.status(500).json({ error: 'Failed to generate strategy. ' + error.message });
    }
  });

  // Contact form CRM submission simulation endpoint
  app.post('/api/contact', async (req, res) => {
  try {

    const lead = {
      leadId: "SB_" + Math.random().toString(36).substring(2,8).toUpperCase(),
      timestamp: new Date().toISOString(),
      ...req.body
    };

    const googleResponse = await fetch(
      "https://script.google.com/macros/s/AKfycbzOHgtnsQABVB2E3FBYEBaZBCWRNZfSke0zq8a5n9vBuF_0iBQuCWuvdXO2psjk2k0n9A/exec",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(lead),
      }
    );

    const googleResult = await googleResponse.json();

    res.json({
      success: true,
      ...lead,
      googleResult
    });

  } catch (error: any) {
    console.error(error);
    res.status(500).json({
      error: error.message
    });
  }
});

  if (!isProd) {
    // In development: Use Vite dev server middleware
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'custom',
    });
    
    app.use(vite.middlewares);
    
    // Serve index.html for any SPA routing
    app.use('*', async (req, res, next) => {
      const url = req.originalUrl;
      try {
        let template = await vite.transformIndexHtml(url, `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>StartupBae | Premium AI Automation & CRM Partner</title>
  </head>
  <body class="bg-[#030712] text-[#F3F4F6] font-sans antialiased">
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>`);
        res.status(200).set({ 'Content-Type': 'text/html' }).end(template);
      } catch (e) {
        vite.ssrFixStacktrace(e as Error);
        next(e);
      }
    });
  } else {
    // In production: Serve static files from dist/
    app.use(express.static(path.join(__dirname, 'dist')));
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`[StartupBae] Full-stack server running at http://localhost:${PORT}`);
  });
}

startServer();
