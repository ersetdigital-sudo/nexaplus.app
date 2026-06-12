"use client";

import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import { Trash2 } from "lucide-react";

export function DeletePortfolioButton({ id, name }: { id: string; name: string }) {
  const router = useRouter();
  const supabase = createClient();

  const handleDelete = async () => {
    if (!confirm(`Hapus portfolio "${name}"?`)) return;

    await supabase.from("portfolio_items").delete().eq("id", id);
    router.refresh();
  };

  return (
    <button
      onClick={handleDelete}
      className="rounded-md bg-red-50 p-1.5 text-red-600 hover:bg-red-100 transition-colors"
      title="Hapus"
    >
      <Trash2 className="h-3.5 w-3.5" />
    </button>
  );
}
