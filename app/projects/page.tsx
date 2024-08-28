import HeadingSection from "@/components/heading/heading_section";
import { createClient } from "@/utils/supabase/server";
import ProjectsCards from "@/components/projects_cards/projects_cards";

export default async function ProjectsPage() {
    const supabase = createClient();

    const { data : response }  = await supabase.from("projects").select('id, name, image_link');
    if (response === null) throw Error('FETCHING DATA FROM DB FAILED!');

    const allProjects = response as {id: number, name: string, image_link: string}[];

    return (
        <div>
            <HeadingSection heading="PROJECTS" />
            <ProjectsCards projects={allProjects} />
        </div>
    );
}