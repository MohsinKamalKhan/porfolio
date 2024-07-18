import Article from "@/components/article/article";
import { CardType } from "@/components/cards/card";
import { createClient } from "@/utils/supabase/server";

export default async function Page({ params } : { params: {slug: string}}) {
    const id = params.slug;
    const supabase = createClient();
    const { data: projectRough} = await supabase.from("projects").select( "date, heading, content, image_link").filter('id', "eq", id);
    if (projectRough === null) throw Error('Error in Data Fetching!');

    const project = projectRough![0] as CardType;

    return project && <Article article={project} />;
}