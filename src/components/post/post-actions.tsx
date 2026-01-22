"use client";

import { useState } from 'react';
import { Heart, MessageCircle, Send, MoreHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Post, Comment as CommentType } from '@/lib/data';

interface PostActionsProps {
  post: Post;
}

export function PostActions({ post }: PostActionsProps) {
  const [likes, setLikes] = useState(post.likes);
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    if (isLiked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setIsLiked(!isLiked);
  };

  return (
    <div className="flex items-center justify-between pt-2">
        <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" onClick={handleLike} className="flex items-center gap-2 group">
                <Heart className={`h-5 w-5 group-hover:fill-red-500 group-hover:text-red-500 transition-colors ${isLiked ? 'fill-red-500 text-red-500' : 'text-muted-foreground'}`} />
                <span className="text-sm text-muted-foreground">{likes}</span>
            </Button>
            <Button variant="ghost" size="sm" className="flex items-center gap-2 group">
                <MessageCircle className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                <span className="text-sm text-muted-foreground">{post.comments.length}</span>
            </Button>
            <Button variant="ghost" size="sm" className="flex items-center gap-2 group">
                <Send className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </Button>
        </div>
        <Button variant="ghost" size="icon" className="group">
            <MoreHorizontal className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
        </Button>
    </div>
  );
}
