import Image from 'next/image'
import Link from 'next/link'
import { CalendarIcon, GitHubLogoIcon, ExternalLinkIcon } from '@radix-ui/react-icons'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { createClient } from '@/utils/supabase/server'

export type ProjectType = {
    project_id: number;
    project_title: string;
    project_description: string;
    date_started: Date;
    date_ended: Date;
    live_preview: string | null;
    image_link: string;
    project_goal: string;
    technical_requirement: string;
    project_scope: string;
    github_link: string;
};
interface Technology {
  id: string;
  technology: string;
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug: id } = await params;
  const supabase = await createClient();

  const { data } = await supabase.from("projects").select('*').filter('id', "eq", id);
  if (!data) throw Error('Error in Data Fetching!');
  const project = data![0] as ProjectType;

  const { data: techRough} = await supabase.from("technologies").select("id, project_id, technology").filter('project_id', 'eq', id);
  const technologies = techRough as Technology[];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex flex-col items-center justify-between gap-4 py-10 md:py-16">
          <h1 className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-center text-4xl font-bold tracking-tight text-transparent sm:text-5xl xl:text-6xl/none">
            {project.project_title}
          </h1>
          <p className="max-w-[800px] text-center text-muted-foreground md:text-xl">
            {project.project_description}
          </p>
          <div className="flex gap-4">
            <Link href={project.github_link || ''} passHref>
              <Button disabled={project.github_link ? false : true}>
                <GitHubLogoIcon className="mr-2 h-4 w-4" />
                View Source
              </Button>
            </Link>
            <Link href={project.live_preview || ''} passHref>
              <Button disabled={project.live_preview ? false : true}>
                View Demo
                <ExternalLinkIcon className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container py-8 md:py-12">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Left Content */}
          <div className="lg:col-span-2">
            {/* Project Sections */}
            <div className="space-y-8">
              <section>
                <h2 className="mb-4 text-2xl font-bold">Project Goal</h2>
                <Card>
                  <CardContent className="p-6">
                    <p className="leading-7">
                      {project.project_goal}
                    </p>
                  </CardContent>
                </Card>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-bold">Technical Requirements</h2>
                <Card>
                  <CardContent className="p-6">
                    <p className="leading-7">
                      {project.technical_requirement}
                    </p>
                  </CardContent>
                </Card>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-bold">Project Scope</h2>
                <Card>
                  <CardContent className="p-6">
                    <p className="leading-7">
                      {project.project_scope}  
                    </p>
                  </CardContent>
                </Card>
              </section>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              {/* Circuit Diagram */}
              <Card className="overflow-hidden">
                <Image
                  src={project.image_link || "/placeholder.svg"}
                  alt="CPU Circuit Diagram"
                  width={400}
                  height={300}
                  className="w-full object-cover"
                />
              </Card>

              {/* Project Info */}
              <Card>
                <CardContent className="p-6 space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Project Details</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center text-muted-foreground">
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        Start: {String(project.date_started).slice(0, 15)}
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        End: {String(project.date_ended).slice(0, 15)}
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Technologies</h3>
                    <div className="flex flex-wrap gap-2">
                      {technologies.map(tenchnology => <Badge key={tenchnology.id}>{tenchnology.technology}</Badge>)}
                    </div>
                  </div>

                  <Link 
                    href={project.github_link || ''}
                    className="inline-flex items-center text-sm text-muted-foreground hover:text-primary"
                  >
                    <GitHubLogoIcon className="mr-2 h-4 w-4" />
                    View on GitHub
                    <ExternalLinkIcon className="ml-2 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

