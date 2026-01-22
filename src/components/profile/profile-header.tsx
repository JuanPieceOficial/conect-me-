import Image from 'next/image';
import { Edit, UserPlus } from 'lucide-react';
import type { User } from '@/lib/data';
import { currentUser } from '@/lib/data';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { FriendButton } from './friend-button';

interface ProfileHeaderProps {
  user: User;
}

export function ProfileHeader({ user }: ProfileHeaderProps) {
  const isCurrentUser = user.id === currentUser.id;

  return (
    <div className="w-full">
      <div className="relative h-48 w-full md:h-64 rounded-t-lg bg-secondary">
        {user.coverPhoto && (
          <Image
            src={user.coverPhoto.imageUrl}
            alt={`${user.name}'s cover photo`}
            fill
            className="object-cover rounded-t-lg"
            priority
            data-ai-hint={user.coverPhoto.imageHint}
          />
        )}
      </div>
      <div className="p-4 bg-card">
        <div className="relative flex flex-col items-center sm:flex-row sm:items-end -mt-20 sm:-mt-16">
          <Avatar className="h-32 w-32 border-4 border-card">
            <AvatarImage
              src={user.avatar.imageUrl}
              alt={user.name}
              data-ai-hint={user.avatar.imageHint}
            />
            <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="mt-4 sm:ml-6 flex-1 text-center sm:text-left">
            <h1 className="font-headline text-2xl font-bold">{user.name}</h1>
            <p className="text-muted-foreground">@{user.username}</p>
          </div>
          <div className="mt-4 sm:mt-0 space-x-2">
            {isCurrentUser ? (
              <Button>
                <Edit className="mr-2 h-4 w-4" /> Edit Profile
              </Button>
            ) : (
                <FriendButton initialStatus={user.isFriend ? 'is_friend' : 'not_friend'}/>
            )}
          </div>
        </div>
        <p className="mt-6 text-center sm:text-left text-foreground/90 max-w-2xl mx-auto sm:mx-0">{user.bio}</p>
      </div>
    </div>
  );
}
