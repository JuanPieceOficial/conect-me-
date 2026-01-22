import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import type { Post } from '@/lib/data';
import { PostActions } from './post-actions';
import { CommentSection } from './comment-section';


interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PostCardProps) {
  return (
    <Card className="overflow-hidden transition-shadow duration-300 hover:shadow-lg">
      <CardContent className="p-4 sm:p-6">
        <div className="flex items-start gap-4">
          <Avatar className="h-11 w-11 border">
            <AvatarImage src={post.user.avatar.imageUrl} alt={post.user.name} data-ai-hint={post.user.avatar.imageHint}/>
            <AvatarFallback>{post.user.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <div className="flex items-baseline gap-2">
              <Link href={`/profile/${post.user.username}`} className="font-headline font-semibold text-base hover:underline">
                {post.user.name}
              </Link>
              <span className="text-sm text-muted-foreground">@{post.user.username}</span>
              <span className="text-xs text-muted-foreground">&#-</span>
              <span className="text-xs text-muted-foreground hover:underline cursor-pointer">{post.timestamp}</span>
            </div>
            <p className="mt-2 text-foreground/90">{post.text}</p>
          </div>
        </div>
        
        {post.image && (
          <div className="mt-4 -mx-6 sm:-mx-6">
             <div className="relative aspect-[4/3] w-full">
                <Image
                    src={post.image.imageUrl}
                    alt="Post image"
                    fill
                    className="object-cover"
                    data-ai-hint={post.image.imageHint}
                />
             </div>
          </div>
        )}

        <div className={post.image ? 'mt-4' : 'mt-2'}>
            <PostActions post={post} />
        </div>
        
        {post.comments.length > 0 && (
            <>
                <Separator className="my-4" />
                <CommentSection comments={post.comments} />
            </>
        )}
      </CardContent>
    </Card>
  );
}
