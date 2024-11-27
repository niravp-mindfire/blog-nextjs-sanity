import { client, urlFor } from "@/lib/sanity";
import Image from "next/image";

type BlogPost = {
  _id: string;
  title: string;
  slug: { current: string };
  mainImage: { asset: { url: string } };
  publishedAt: string;
  body: any;
  category?: string; // Optional: If categories exist in your dataset
  author?: string;   // Optional: If author details exist
};

export default async function HomePage() {
  const posts: BlogPost[] = await client.fetch(`
    *[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      mainImage,
      publishedAt,
      "category": categories[0]->title,
      "author": author->name
    }
  `);
    console.log(posts, "=============posts");
    
  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-800 text-center mb-12">
        Latest Blog Posts
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {posts.map((post) => (
          <article
            key={post._id}
            className="group bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-200"
          >
            {post.mainImage && (
              <div className="relative">
                <Image
                  src={urlFor(post.mainImage).url()}
                  alt={post.title}
                  width={400}
                  height={400}
                  className="w-full h-56 object-cover transition-transform duration-200 group-hover:scale-105"
                />
              </div>
            )}
            <div className="p-6">
              {post.category && (
                <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">
                  {post.category}
                </p>
              )}
              <h2 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                {post.title}
              </h2>
              <p className="text-sm text-gray-500 mt-1">
                {new Date(post.publishedAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
                {post.author && ` • By ${post.author}`}
              </p>
              <a
                href={`/blog/${post.slug.current}`}
                className="text-sm text-blue-500 font-medium mt-4 inline-block hover:underline"
              >
                Read More →
              </a>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
