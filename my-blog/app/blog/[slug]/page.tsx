import { PortableText } from "@portabletext/react";
import { client, urlFor } from "@/lib/sanity";
import Image from "next/image";
import { notFound } from "next/navigation";

// Define your BlogPost type
type BlogPost = {
  _id: string;
  title: string;
  slug: { current: string };
  mainImage: { asset: { url: string } };
  body: any;
  publishedAt: string;
  author: { name: string };
};

const PortableTextComponents: any = {
  types: {
    image: ({ value }: { value: any }) => (
      <Image
        src={urlFor(value).url()}
        alt={value.alt || "Blog Image"}
        width={800}
        height={400}
        className="w-full rounded"
      />
    ),
  },
  block: {
    h1: ({ children }: { children: React.ReactNode }) => (
      <h1 className="text-3xl font-bold my-4">{children}</h1>
    ),
    h2: ({ children }: { children: React.ReactNode }) => (
      <h2 className="text-2xl font-semibold my-3">{children}</h2>
    ),
    normal: ({ children }: { children: React.ReactNode }) => (
      <p className="text-gray-800 my-2">{children}</p>
    ),
  },
  marks: {
    link: ({ value, children }: { value: { href: string }; children: React.ReactNode }) => (
      <a
        href={value.href}
        className="text-blue-600 underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    ),
  },
};

// Refactor to use async function in the Server Component
export default async function BlogPost({ params }: any) {
  const post: BlogPost | null = await client.fetch(
    `*[_type == "post" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      mainImage,
      body,
      publishedAt,
      author -> { name }
    }`,
    { slug: params.slug }
  );

  if (!post) return notFound();

  return (
    <article className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-600 mb-4">
        By {post.author.name} |{" "}
        {new Date(post.publishedAt).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>
      {post.mainImage && (
        <Image
          src={urlFor(post.mainImage).url()}
          alt={post.title}
          width={800}
          height={400}
          className="w-full rounded"
        />
      )}
      <div className="mt-6 prose">
        <PortableText value={post.body} components={PortableTextComponents} />
      </div>
    </article>
  );
}
