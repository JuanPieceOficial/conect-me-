import { notFound } from 'next/navigation';
import { users, posts as allPosts } from '@/lib/data';
import { ProfileHeader } from '@/components/profile/profile-header';
import { Card } from '@/components/ui/card';
import { PostCard } from '@/components/post/post-card';
import { Separator } from '@/components/ui/separator';

export async function generateStaticParams() {
  return users.map((user) => ({
    username: user.username,
  }));
}

export default function ProfilePage({ params }: { params: { username: string } }) {
  const user = users.find((u) => u.username === params.username);

  if (!user) {
    notFound();
  }

  const userPosts = allPosts.filter((p) => p.user.id === user.id);

  return (
    <div className="w-full max-w-3xl mx-auto py-8 px-4 sm:px-0">
        <Card className="overflow-hidden">
            <ProfileHeader user={user} />
            <Separator />
            <div className="p-4 sm:p-6 space-y-6">
                 <h2 className="font-headline text-xl font-bold">Posts</h2>
                {userPosts.length > 0 ? (
                    userPosts.map((post) => (
                    <PostCard key={post.id} post={post} />
                    ))
                ) : (
                    <p className="text-muted-foreground text-center py-8">
                    {user.name} hasn't posted anything yet.
                    </p>
                )}
            </div>
        </Card>
    </div>
  );
}
