"use client";

import { useState } from 'react';
import { Image, Video, Send } from 'lucide-react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { currentUser } from '@/lib/data';

export function CreatePost() {
  const [postContent, setPostContent] = useState('');
  const { toast } = useToast();

  const handlePost = () => {
    if (postContent.trim()) {
      console.log('Posting:', postContent);
      setPostContent('');
      toast({
        title: "Posted!",
        description: "Your new post is now live.",
      });
    }
  };
  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex items-start gap-4">
          <Avatar className="h-11 w-11 border">
            <AvatarImage
              src={currentUser.avatar.imageUrl}
              alt={currentUser.name}
              data-ai-hint={currentUser.avatar.imageHint}
            />
            <AvatarFallback>{currentUser.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="w-full">
            <Textarea
              placeholder={`What's on your mind, ${currentUser.name.split(' ')[0]}?`}
              className="border-none focus-visible:ring-0 resize-none shadow-none text-base min-h-[60px]"
              value={postContent}
              onChange={(e) => setPostContent(e.target.value)}
            />
          </div>
        </div>
        <Separator className="my-3" />
        <div className="flex justify-between items-center">
          <div className="flex gap-1">
            <Button variant="ghost" size="icon" aria-label="Add image">
              <Image className="h-5 w-5 text-muted-foreground" />
            </Button>
            <Button variant="ghost" size="icon" aria-label="Add video">
              <Video className="h-5 w-5 text-muted-foreground" />
            </Button>
          </div>
          <Button onClick={handlePost} disabled={!postContent.trim()} className="bg-accent text-accent-foreground hover:bg-accent/90">
            <Send className="h-4 w-4 mr-2" />
            Post
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
