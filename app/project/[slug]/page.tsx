
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

// const project_info : ProjectType = {
//     project_id: 1,
//     project_name: '8 BIT CPU from scratch',
//     date_started: new Date(),
//     date_ended: new Date(),
//     live_preview: null,
//     programming_language: 'assembly',
//     last_updated: new Date(),
//     image_link: 'https://eysmfrpkevzzyedhpiez.supabase.co/storage/v1/object/public/images/matrix_calculator.jpg',
//     project_goal: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
//     technical_requirement: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
//     project_scope: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
//     github_link: 'https://github.com/mohsinkamalkhan'
// }

export default async function Page({ params } : { params: {slug: string}}) {
    const id = params.slug;
    const supabase = createClient();
    const { data: projectRough} = await supabase.from("projects").select('*').filter('id', "eq", id);
    if (projectRough === null) throw Error('Error in Data Fetching!');

    const project = projectRough![0] as ProjectType;
    console.log(project);
    return <ProjectPage project_info={project} />;
}