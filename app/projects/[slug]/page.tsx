import HeadingSection from "@/components/heading/heading_section";
import Cards from "@/components/cards/cards";
import { createClient } from "@/utils/supabase/server";
import { CardType } from "@/components/cards/card";
import Pagination from "@/components/pagination/pagination";

export default async function ProjectsPage({ params }: { params: { slug: string } }) {
    const limit: number = Number(params.slug);
    const supabase = createClient();
    const { data : projects }  = await supabase.from("projects").select().range(limit * 4, (limit + 1) * 4 - 1);
    if (projects === null) throw Error('Database Connection Failed');
    const allProjects : CardType[] | null = projects as CardType[] | null;

    return (
        <div>
            <HeadingSection heading="PROJECTS" />
            { allProjects && <Cards projectOrblog="PROJECT" cards={allProjects} />}
            <Pagination ProjectOrBlog="PROJECT" pageNumber={limit} />
        </div>
    );
}