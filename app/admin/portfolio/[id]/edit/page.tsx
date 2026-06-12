import { createServerSupabaseClient } from "@/lib/supabase/server";
import { notFound } from "next/navigation";
import { PortfolioEditor } from "../../editor";

interface EditPortfolioPageProps {
  params: Promise<{ id: string }>;
}

export default async function EditPortfolioPage({ params }: EditPortfolioPageProps) {
  const { id } = await params;
  const supabase = await createServerSupabaseClient();

  const { data: item } = await supabase
    .from("portfolio_items")
    .select("*")
    .eq("id", id)
    .single();

  if (!item) notFound();

  return <PortfolioEditor item={item} />;
}
