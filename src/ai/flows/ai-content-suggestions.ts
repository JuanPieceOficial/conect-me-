'use server';

/**
 * @fileOverview Provides AI-powered content suggestions based on user profile and activity.
 *
 * - suggestContent - A function to generate content suggestions.
 * - ContentSuggestionInput - The input type for suggestContent function.
 * - ContentSuggestionOutput - The output type for suggestContent function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ContentSuggestionInputSchema = z.object({
  userProfile: z
    .string()
    .describe('The user profile information including interests and demographics.'),
  pastActivity: z
    .string()
    .describe('A summary of the user past activity on the platform, including liked posts, comments, and followed accounts.'),
});
export type ContentSuggestionInput = z.infer<typeof ContentSuggestionInputSchema>;

const ContentSuggestionOutputSchema = z.object({
  suggestions: z
    .array(z.string())
    .describe('A list of content suggestions tailored to the user.'),
});
export type ContentSuggestionOutput = z.infer<typeof ContentSuggestionOutputSchema>;

export async function suggestContent(input: ContentSuggestionInput): Promise<ContentSuggestionOutput> {
  return suggestContentFlow(input);
}

const prompt = ai.definePrompt({
  name: 'contentSuggestionPrompt',
  input: {schema: ContentSuggestionInputSchema},
  output: {schema: ContentSuggestionOutputSchema},
  prompt: `Based on the user profile and past activity, suggest content topics that the user might be interested in.\n\nUser Profile: {{{userProfile}}}\nPast Activity: {{{pastActivity}}}\n\nSuggestions (as a list of topics):`,
});

const suggestContentFlow = ai.defineFlow(
  {
    name: 'suggestContentFlow',
    inputSchema: ContentSuggestionInputSchema,
    outputSchema: ContentSuggestionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
