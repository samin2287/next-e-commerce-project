"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import bannerImage from "@/assets/banners/banner-image.png";

type BlogPost = {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readingTime: string;
  author: string;
  image: StaticImageData;
  slug: string;
};

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "2024 Essentials: Building a Minimal Everyday Carry",
    excerpt:
      "From hyper-functional tablets to sustainable bags, we highlight gear that keeps your day nimble and productive.",
    category: "Guides",
    date: "Nov 05, 2025",
    readingTime: "6 min read",
    author: "Lara Griffin",
    image: bannerImage,
    slug: "2024-everyday-carry",
  },
  {
    id: 2,
    title: "Inside the Lab: How We Select Featured Products",
    excerpt:
      "Peek behind the curtain at the transparency checklist each product must pass before it lands on the homepage.",
    category: "Behind the brand",
    date: "Oct 19, 2025",
    readingTime: "5 min read",
    author: "Team Curators",
    image: bannerImage,
    slug: "how-we-select-products",
  },
  {
    id: 3,
    title: "Design Trends That Will Define Smart Homes Next Year",
    excerpt:
      "Smarter lighting, calmer dashboards, and interoperable devices will make home-tech feel invisible yet powerful.",
    category: "Trends",
    date: "Sep 30, 2025",
    readingTime: "7 min read",
    author: "Parker Miles",
    image: bannerImage,
    slug: "smart-home-design-trends",
  },
];

const BlogPage = () => {
  return (
    <div className="bg-lightBg min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="mb-12 rounded-2xl bg-gradient-to-br from-green-100 via-white to-blue-50 p-10 shadow-sm">
          <p className="uppercase text-sm font-semibold tracking-[0.25em] text-gray-500">
            Journal
          </p>
          <h1 className="mt-3 text-4xl font-bold text-gray-900 sm:text-5xl">
            Fresh takes on commerce, design, and technology
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-600">
            Stories curated by our editorial team to help you navigate product
            launches, home inspiration, and the tools we rely on for modern
            living.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="flex flex-col rounded-xl border border-gray-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <div className="relative h-56 w-full overflow-hidden rounded-t-xl bg-gray-100">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  priority={post.id === 1}
                />
                <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-medium uppercase tracking-wide text-gray-700">
                  {post.category}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <div className="text-xs uppercase tracking-wider text-gray-500">
                  {post.date} • {post.readingTime}
                </div>
                <h2 className="mt-3 text-xl font-semibold text-gray-900">
                  {post.title}
                </h2>
                <p className="mt-2 flex-1 text-gray-600">{post.excerpt}</p>
                <div className="mt-6 flex items-center justify-between text-sm text-gray-500">
                  <span>By {post.author}</span>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="font-semibold text-green-700 hover:text-green-800">
                    Read article →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
