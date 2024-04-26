import { openai } from '@ai-sdk/openai';
import { experimental_generateText } from 'ai';
import dotenv from 'dotenv';

dotenv.config();

async function main() {
  const result = await experimental_generateText({
    model: openai('gpt-3.5-turbo-instruct'),
    maxTokens: 1024,
    prompt: 'Invent a new holiday and describe its traditions.',
  });

  console.log(result.text);
}

main().catch(console.error);
