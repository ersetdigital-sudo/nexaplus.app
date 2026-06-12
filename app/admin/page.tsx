import { createServerSupabaseClient } from "@/lib/supabase/server";
import { FileText, Image } from "lucide-react";
import Link from "next/link";

export default async function AdminDashboardPage() {
  const supabase = await createServerSupabaseClient();

  const { count: blogCount } = await supabase
    .from("blog_posts")
    .select("*", { count: "exact", head: true });

  const { count: portfolioCount } = await supabase
    .from("portfolio_items")
    .select("*", { count: "exact", head: true });

  return (
    <div>
      <h1 className="text-2xl font-bold text-slate-900">Dashboard</h1>
      <p className="mt-1 text-sm text-slate-500">Kelola konten website NexaPlus</p>

      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <Link
          href="/admin/blog"
          className="rounded-xl border border-slate-200 bg-white p-6 hover:border-blue-200 hover:shadow-sm transition-all"
        >
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50">
              <FileText className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-900">{blogCount || 0}</p>
              <p className="text-sm text-slate-500">Blog Posts</p>
            </div>
          </div>
        </Link>

        <Link
          href="/admin/portfolio"
          className="rounded-xl border border-slate-200 bg-white p-6 hover:border-blue-200 hover:shadow-sm transition-all"
        >
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-50">
              <Image className="h-6 w-6 text-purple-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-900">{portfolioCount || 0}</p>
              <p className="text-sm text-slate-500">Portfolio Items</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
