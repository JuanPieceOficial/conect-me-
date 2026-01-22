import Link from 'next/link';
import { Plus } from 'lucide-react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { users } from '@/lib/data';

export function RightSidebar() {
  const usersToFollow = users.slice(0, 4);

  return (
    <aside className="sticky top-16 hidden h-[calc(100vh-4rem)] w-80 flex-col gap-6 p-4 lg:flex">
      <Card>
        <CardHeader>
          <CardTitle className="font-headline">Who to Follow</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {usersToFollow.map((user) => (
            <div key={user.id} className="flex items-center justify-between">
              <Link href={`/profile/${user.username}`} className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage
                    src={user.avatar.imageUrl}
                    alt={user.name}
                    data-ai-hint={user.avatar.imageHint}
                  />
                  <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold text-sm">{user.name}</p>
                  <p className="text-xs text-muted-foreground">@{user.username}</p>
                </div>
              </Link>
              <Button size="sm" variant="outline" className="bg-accent text-accent-foreground hover:bg-accent/90 hover:text-accent-foreground">
                <Plus className="h-4 w-4 mr-1" />
                Follow
              </Button>
            </div>
          ))}
        </CardContent>
      </Card>
    </aside>
  );
}
