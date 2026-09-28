import { blogPosts } from '@/lib/data';

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const post = blogPosts.find((p) => p.id === id);

  if (!post) {
    return <div>Članak nije pronađen.</div>;
  }

  return (
    <main className="container mx-auto max-w-4xl py-20">
      <img
        src={post.image}
        alt={post.title}
        className="w-full rounded-lg mb-8"
      />

      <h1 className="text-4xl font-bold mb-4">
        {post.title}
      </h1>

      <p className="mb-6 text-gray-500">
        {post.date}
      </p>

      <div className="text-lg leading-8 whitespace-pre-line">
        {post.content}
      </div>
    </main>
  );
}