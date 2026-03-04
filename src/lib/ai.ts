import Anthropic from '@anthropic-ai/sdk';

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

export async function improvePrompt(prompt: string): Promise<string> {
  const message = await anthropic.messages.create({
    model: "claude-sonnet-4-20250514",
    max_tokens: 1024,
    messages: [
      {
        role: "user",
        content: `Improve this AI prompt for clarity, specificity, and effectiveness. Return only the improved prompt, no explanation:\n\n${prompt}`
      }
    ],
  });
  
  return (message.content[0] as { text: string }).text;
}

export async function generateDescription(prompt: string): Promise<{ title: string; description: string }> {
  const message = await anthropic.messages.create({
    model: "claude-sonnet-4-20250514",
    max_tokens: 256,
    messages: [
      {
        role: "user", 
        content: `Generate a short title (max 60 chars) and description (max 160 chars) for this prompt. Return JSON: {"title": "...", "description": "..."}\n\n${prompt}`
      }
    ],
  });
  
  return JSON.parse((message.content[0] as { text: string }).text);
}