
import ProjectPage from "@/components/project_page/project_page";
import { createClient } from "@/utils/supabase/server";

export type ProjectType = {
    project_id: number,
    name: string,
    date_started: Date,
    date_ended: Date,
    live_preview: string | null,
    programming_language: string,
    last_updated: Date,
    image_link: string,
    project_goal: string,
    technical_requirement: string,
    project_scope: string,
    github_link: string,
};

export default async function Page({ params } : { params: {slug: string}}) {
    const id = params.slug;
    const supabase = createClient();
    const { data: projectRough} = await supabase.from("projects").select('*').filter('id', "eq", id);
    if (projectRough === null) throw Error('Error in Data Fetching!');

    const project = projectRough![0] as ProjectType;

    return <ProjectPage project_info={project} />;
}