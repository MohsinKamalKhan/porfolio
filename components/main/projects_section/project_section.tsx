import ProjectsHome from "@/components/main/hero_section/projects_home/projects_home";
import Button from "@/components/button/button";
import HeadingSection from "@/components/heading/heading_section";
import { createClient } from "@/utils/supabase/server";

export default async function ProjectSection() {
    const supabase = createClient();
    const { data : projects }  = await supabase.from("projects").select("id, image_link, name").range(0, 4);
    if (projects === null) throw Error('Database Connection Failed');
    
    const five_projects = projects as {id: number, image_link: string, name: string}[];

    return (
        <div>
            <HeadingSection heading="PROJECTS" />
            <ProjectsHome projects={five_projects} />
            <Button link="/projects" text="View All Projects" />
        </div>
    );
}