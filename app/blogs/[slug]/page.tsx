import HeadingSection from "@/components/heading/heading_section";
import Cards from "@/components/cards/cards";
import { createClient } from "@/utils/supabase/server";
import Pagination from "@/components/pagination/pagination";
import { MinimalCardType } from "@/components/minimal_card/minimal_card";

export default async function Page({ params }: { params: { slug: string } }) {
    const limit: number = Number(params.slug);
    const supabase = createClient();

    const { data : result }  = await supabase.from("blogs").select().range(limit * 4, (limit + 1) * 4 - 1);
    if (result === null) throw Error('Could Not Fetch Data!');

    const allBlogs = result as MinimalCardType[];

    return (
        <div>
            <HeadingSection heading="BLOGS" />
            <Cards projectOrBlog="BLOG" cards={allBlogs} />
            <Pagination ProjectOrBlog="BLOG" pageNumber={limit} />
        </div>
    );
}