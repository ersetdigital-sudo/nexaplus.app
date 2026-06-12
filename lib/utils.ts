import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { type BlogPost, type BlogCategory } from "@/data/blog-posts"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function filterBlogPosts(
  posts: BlogPost[],
  category: BlogCategory | "All"
): BlogPost[] {
  if (category === "All") {
    return posts;
  }
  return posts.filter((post) => post.category === category);
}

export function formatDate(date: Date): string {
  return date.toLocaleDateString("id-ID", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
