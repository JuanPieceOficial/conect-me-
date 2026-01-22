import { Lightbulb } from 'lucide-react';
import { suggestContent } from '@/ai/flows/ai-content-suggestions';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export async function ContentSuggestions() {
  const MOCK_INPUT = {
    userProfile: 'Loves hiking, photography, and technology. Follows nature and coding accounts.',
    pastActivity: 'Liked several posts about mountain landscapes and new JavaScript frameworks. Commented on a post about camera gear.',
  };

  const { suggestions } = await suggestContent(MOCK_INPUT);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-headline flex items-center gap-2">
          <Lightbulb className="h-5 w-5 text-accent" />
          For you
        </CardTitle>
        <CardDescription>
          AI-powered topic suggestions based on your activity.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3">
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              <a href="#"># {suggestion.replace(/\s+/g, '')}</a>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
