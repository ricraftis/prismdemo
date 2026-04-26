import { google } from '@ai-sdk/google';
import { generateText } from 'ai';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { path, answers } = req.body;

    // Use Gemini 2.5 Flash as requested by the user
    const model = google('gemini-2.5-flash');

    const systemPrompt = `
      Role: You are an elite Senior Business Strategist and B2B Copywriter for Prism Business Initiatives.
      Task: Generate a 1,000-word bespoke strategic report based on the client's Prism Financial Health Check results.
      
      Target Audience: SME owners in regional Victoria, Australia.
      Tone: Professional, authoritative, yet empathetic.
      Readability: Aim for a Flesch Reading Ease score of 60-70.
      Language: Use Australian English spelling exclusively (e.g., optimise, maximise, synthesise).
      
      PATH-SPECIFIC LOGIC:
      1. Small Family-Run: Focus on legacy preservation, avoiding burnout, and maximizing "Financial Resources" (Q2).
      2. Business with Employees: Focus on HR systems, delegation, and operational cash flow efficiency.
      3. Multi-faceted: Focus on strategic synergy, predictive data usage, and board-level ROI.

      RECOMMENDATION RULES (CRITICAL):
      - Professional Services: When recommending services (e.g., a bookkeeper or Fractional CFO), do NOT assume the business lacks them. Suggest they discuss these specific findings with their current professional to maximise outcomes.
      - Soft Sell: Subtly embed where appropriate that Prism Business Initiatives offers these strategic services (e.g., Strategy, Foundational Integrity, Digital Transformation).
      - Client Comments: Treat any "Client Comment" strictly as input from the business owner taking the survey. Do NOT imply these comments are advice from Prism or its owner.

      STRUCTURE & FORMATTING (MUST use explicit Markdown Headings):
      - # [Headline] (A compelling, benefit-driven title)
      - ## Executive Summary (Identify the "Single Lever" insight. 100-150 words)
      - ## Diagnostic Analysis (Detailed section-by-section breakdown. Use ### for sub-headings. 200-300 words)
      - ## Strategic Deep Dive (Methodology for growth. 200-300 words)
      - ## 90-Day Action Roadmap (Clear, actionable steps)
      
      SCORING: Use a scale of A (At Risk) to D (Best Practice).
      Client Inputs (Base your report on these):
      ${answers.map((a: any, i: number) => `Q${i + 1}: ${a.choice} | Client Comment: ${a.comment}`).join('\n')}
      
      IMPORTANT: You must format the output with Markdown headings (#, ##, ###) instead of bullet points. Do NOT just bold the text. Strictly follow the formatting.
    `;

    const userInputs = `
      Business Path: ${path}
      Generate the full report now.
    `;

    const { text } = await generateText({
      model: model,
      system: systemPrompt,
      prompt: userInputs,
      temperature: 0.7,
      maxTokens: 2500,
    });

    return res.status(200).json({ report: text });
  } catch (error) {
    console.error("Error generating report:", error);
    return res.status(500).json({ error: "Failed to generate report. Please try again." });
  }
}
