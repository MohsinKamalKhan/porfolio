import HeadingSection from "@/components/heading/heading_section";
import Cards from "@/components/cards/cards";
import { createClient } from "@/utils/supabase/server";
import Pagination from "@/components/pagination/pagination";
import { MinimalCardType } from "@/components/minimal_card/minimal_card";

export default async function ProjectsPage({ params }: { params: { slug: string } }) {
    const limit: number = Number(params.slug);
    const supabase = createClient();

    const { data : response }  = await supabase.from("projects").select('id, heading, content, date, image_link').range(limit * 4, (limit + 1) * 4 - 1);
    if (response === null) throw Error('FETCHING DATA FROM DB FAILED!');

    const allProjects = response as MinimalCardType[];

    return (
        <div>
            <HeadingSection heading="PROJECTS" />
            <Cards projectOrBlog="PROJECT" cards={allProjects} />
            <Pagination ProjectOrBlog="PROJECT" pageNumber={limit} />
        </div>
    );
}