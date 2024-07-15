import HeadingSection from "@/components/heading/heading_section";
import Cards from "@/components/cards/cards";
import { createClient } from "@/utils/supabase/server";
import { CardType } from "@/components/cards/card";
import Pagination from "@/components/pagination/pagination";

export default async function Page({ params }: { params: { slug: string } }) {
    const limit: number = Number(params.slug);
    const supabase = createClient();
    const { data : blogs }  = await supabase.from("blogs").select().range(limit * 4, (limit + 1) * 4 - 1);
    const allBlogs : CardType[] | null = blogs as CardType[] | null;

    return (
        <div>
            <HeadingSection heading="BLOGS" />
            { allBlogs && <Cards projectOrblog="BLOG" cards={allBlogs} />}
            <Pagination pageNumber={limit} />
        </div>
    );
}