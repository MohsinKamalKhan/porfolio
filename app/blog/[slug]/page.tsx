import Article from "@/components/article/article";
import { CardType } from "@/components/cards/card";
import HeadingSection from "@/components/heading/heading_section";
import { createClient } from "@/utils/supabase/server";

export default async function Page({ params } : { params: {slug: string}}) {
    const id = params.slug;
    const supabase = createClient();
    const { data: blogRough} = await supabase.from("blogs").select( "date, heading, content").filter('id', "eq", id);
    const blog = blogRough![0] as CardType;

    return (
        blog &&
        <div>
            <HeadingSection heading={blog.heading} />
            <Article article={blog} />
        </div>
    );
}