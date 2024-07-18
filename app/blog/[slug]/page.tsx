import Article from "@/components/article/article";
import { createClient } from "@/utils/supabase/server";

export type CardType = {
    date: Date,
    heading: string,
    content: string,
    image_link: string
}

export default async function Page({ params } : { params: {slug: string}}) {
    const id = params.slug;
    const supabase = createClient();
    const { data: blogRough} = await supabase.from("blogs").select( "date, heading, content, image_link").filter('id', "eq", id);
    if (blogRough === null) throw Error('Error in Data Fetching!');

    const blog = blogRough![0] as CardType;

    return blog && <Article article={blog} />;
}