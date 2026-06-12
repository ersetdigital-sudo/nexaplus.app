"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import Link from "next/link";
import { Plus } from "lucide-react";
import { DeletePortfolioButton } from "./delete-button";

interface PortfolioItem {
  id: string;
  name: string;
  slug: string;
  category: string;
  description: string;
  url: string | null;
  screenshot: string | null;
  published: boolean;
  created_at: string;
}

export default function AdminPortfolioPage() {
  const [items, setItems] = useState<PortfolioItem[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchItems = async () => {
    const supabase = createClient();
    const { data } = await supabase
      .from("portfolio_items")
      .select("*")
      .order("created_at", { ascending: false });
    setItems(data || []);
    setLoading(false);
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Portfolio</h1>
          <p className="mt-1 text-sm text-slate-500">Kelola item portfolio</p>
        </div>
        <Link
          href="/admin/portfolio/new"
          className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-blue-700 transition-colors"
        >
          <Plus className="h-4 w-4" />
          Tambah Portfolio
        </Link>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {loading ? (
          <div className="col-span-full flex justify-center py-12">
            <div className="h-6 w-6 animate-spin rounded-full border-2 border-blue-600 border-t-transparent" />
          </div>
        ) : items.length > 0 ? (
          items.map((item) => (
            <div key={item.id} className="rounded-xl border border-slate-200 bg-white overflow-hidden hover:shadow-sm transition-shadow">
              {item.screenshot && (
                <div className="aspect-video bg-slate-100 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={item.screenshot} alt={item.name} className="w-full h-full object-cover" />
                </div>
              )}
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-medium text-blue-700">
                    {item.category}
                  </span>
                  <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                    item.published ? "bg-green-50 text-green-700" : "bg-slate-100 text-slate-600"
                  }`}>
                    {item.published ? "Live" : "Hidden"}
                  </span>
                </div>
                <h3 className="text-sm font-semibold text-slate-900">{item.name}</h3>
                <p className="mt-1 text-xs text-slate-500 line-clamp-2">{item.description}</p>
                {item.url && (
                  <a href={item.url} target="_blank" rel="noopener noreferrer" className="mt-2 block text-xs text-blue-600 hover:underline truncate">
                    {item.url}
                  </a>
                )}
                <div className="mt-3 flex items-center gap-2">
                  <Link
                    href={`/admin/portfolio/${item.id}/edit`}
                    className="rounded-md bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-200 transition-colors"
                  >
                    Edit
                  </Link>
                  <DeletePortfolioButton id={item.id} name={item.name} onDeleted={fetchItems} />
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full rounded-xl border border-slate-200 bg-white px-5 py-12 text-center">
            <p className="text-sm text-slate-500">Belum ada portfolio. Tambahkan item pertama.</p>
          </div>
        )}
      </div>
    </div>
  );
}
