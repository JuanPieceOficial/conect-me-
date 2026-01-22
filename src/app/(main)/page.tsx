import { CreatePost } from '@/components/post/create-post';
import { PostCard } from '@/components/post/post-card';
import { posts } from '@/lib/data';

export default function HomePage() {
  return (
    <div className="w-full max-w-2xl mx-auto py-8 px-4 sm:px-0">
      <div className="space-y-6">
        <CreatePost />
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
