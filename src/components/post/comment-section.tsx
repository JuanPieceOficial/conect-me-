import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import type { Comment, User } from '@/lib/data';
import { currentUser } from '@/lib/data';

interface CommentSectionProps {
  comments: Comment[];
}

function CommentItem({ comment }: { comment: Comment }) {
  return (
    <div className="flex items-start gap-3">
      <Avatar className="h-8 w-8 border">
        <AvatarImage src={comment.user.avatar.imageUrl} alt={comment.user.name} data-ai-hint={comment.user.avatar.imageHint} />
        <AvatarFallback>{comment.user.name.charAt(0)}</AvatarFallback>
      </Avatar>
      <div className="flex-1">
        <div className="text-sm bg-secondary rounded-lg px-3 py-2">
          <Link href={`/profile/${comment.user.username}`} className="font-semibold hover:underline">
            {comment.user.name}
          </Link>
          <p className="text-foreground/90">{comment.text}</p>
        </div>
        <p className="text-xs text-muted-foreground mt-1 px-3">{comment.timestamp}</p>
      </div>
    </div>
  );
}

function AddCommentForm({ user }: { user: User }) {
  return (
    <div className="flex items-center gap-3 pt-4">
      <Avatar className="h-8 w-8 border">
        <AvatarImage src={user.avatar.imageUrl} alt={user.name} data-ai-hint={user.avatar.imageHint} />
        <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
      </Avatar>
      <form className="flex-1">
        <Input placeholder="Write a comment..." className="h-9 rounded-full bg-secondary" />
        <Button type="submit" className="hidden">Post</Button>
      </form>
    </div>
  );
}

export function CommentSection({ comments }: CommentSectionProps) {
  return (
    <div className="pt-4 space-y-4">
      {comments.map((comment) => (
        <CommentItem key={comment.id} comment={comment} />
      ))}
      <AddCommentForm user={currentUser} />
    </div>
  );
}
