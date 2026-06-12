"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { PortfolioEditor } from "../../editor";

export default function EditPortfolioPage() {
  const params = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const supabase = createClient();
    supabase
      .from("portfolio_items")
      .select("*")
      .eq("id", params.id)
      .single()
      .then(({ data }) => {
        setItem(data);
        setLoading(false);
      });
  }, [params.id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-blue-600 border-t-transparent" />
      </div>
    );
  }

  if (!item) return <p className="text-slate-500">Portfolio tidak ditemukan.</p>;

  return <PortfolioEditor item={item} />;
}
