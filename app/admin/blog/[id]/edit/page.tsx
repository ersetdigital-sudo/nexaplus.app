"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { BlogEditor } from "../../editor";

export default function EditBlogPostPage() {
  const params = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const supabase = createClient();
    supabase
      .from("blog_posts")
      .select("*")
      .eq("id", params.id)
      .single()
      .then(({ data }) => {
        setPost(data);
        setLoading(false);
      });
  }, [params.id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-orange-600 border-t-transparent" />
      </div>
    );
  }

  if (!post) return <p className="text-slate-500">Artikel tidak ditemukan.</p>;

  return <BlogEditor post={post} />;
}
