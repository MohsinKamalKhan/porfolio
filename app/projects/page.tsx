import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ProjectCard } from '@/components/project-card'
import { createClient } from '@/utils/supabase/server';

interface Project {
    id: number;
    project_title: string;
    project_description: string,
    image_link: string,
    technologies: string[]
}

export default async function ProjectsPage() {
    const supabase = await createClient();
    const {data: projectsData, error: projectsError} = await supabase.rpc('fetch_all_projects');
    if (projectsError) {
      console.log(projectsError);
      throw Error("Error Fetching Projects!");
    }
    const projects = projectsData as Project[];

  return (
    <div className="container py-12">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold tracking-tight">All Projects</h1>
        <Button asChild>
          <Link href="/">Back to Home</Link>
        </Button>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map(project => (
          <ProjectCard 
            key={project.id}
            title={project.project_title}
            description={project.project_description}
            image={project.image_link}
            link={`/project/${project.id}`}
            tags={project.technologies}
          />
        ))}
      </div>
    </div>
  )
}

