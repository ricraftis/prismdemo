import { google } from '@ai-sdk/google';
import { generateText } from 'ai';

const model = google('gemini-3.1-flash');

export async function POST(req: Request) {
  try {
    const { path, answers } = await req.json();

    const systemPrompt = `You are a Senior Business Strategist for the Prism Financial Health Check... [PROMPT LOGIC INJECTED]`;

    const { text } = await generateText({
      model: model,
      system: systemPrompt,
      prompt: `Path: ${path}\nAnswers: ${JSON.stringify(answers)}`,
      temperature: 0.7,
      maxTokens: 2500,
    });

    return new Response(JSON.stringify({ report: text }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Report generation failed." }), { status: 500 });
  }
}
