import AddArticlePage from "@/components/add-article-page";
import { createClient } from "@/utils/supabase/server";
import { notFound } from "next/navigation";

export default async function AddPage() {
    const supabase = await createClient();
    const {
        data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
        notFound();
    }

    return <AddArticlePage />;
}