import Article from "@/components/article/article";
import { createClient } from "@/utils/supabase/server";

export default async function Page({ params } : { params: {slug: string}}) {
    const id = params.slug;
    const supabase = createClient();
    const { data: blogRough} = await supabase.from("blogs").select( "date, heading, content").filter('id', "eq", id);
    if (blogRough === null) throw Error('Error in Data Fetching!');

    const blog = blogRough![0] as {date: Date, heading: string, content: string};

    return blog && <Article article={blog} />;
}