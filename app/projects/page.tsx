import HeadingSection from "@/components/heading/heading_section";
import Cards from "@/components/cards/cards";
import { createClient } from "@/utils/supabase/server";
import { MinimalCardType } from "@/components/minimal_card/minimal_card";

export default async function Page() {
    const supabase = createClient();
    const { data : projects }  = await supabase.from("projects").select("id, heading, date, image_link");
    const allBlogs : MinimalCardType[] = projects as MinimalCardType[];

    return (
        <div>
            <HeadingSection heading="PROJECTS" />
            <Cards projectOrblog="PROJECT" cards={allBlogs} />
        </div>
    );
}