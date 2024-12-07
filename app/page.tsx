import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { GitHubLogoIcon, InstagramLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons'
import { ProjectCard } from '@/components/project-card'
import { SkillBadge } from '@/components/skill-badge'
import { BlogPost } from '@/components/blog-post'
import { createClient } from '@/utils/supabase/server'

export default async function Home() {
  const supabase = await createClient();
  const {data: projectsData, error: projectsError} = await supabase.rpc('fetch_featured_projects');
  if (projectsError) {
    console.log(projectsError);
    throw Error("Error Fetching Projects!");
  }
  const projects = projectsData as Project[];

  const { data: articlesData, error: articlesError } = await supabase
  .from("articles")
  .select('*')
  .order('id', { ascending: false })
  .limit(3);

  if (articlesError) {
    console.log(articlesError);
    throw Error("Error Fetching articles!");
  }
  const articles = articlesData as ArticleType[];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex flex-col items-center justify-between gap-4 py-20 md:py-32">
          <h1 className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-center text-4xl font-bold tracking-tight text-transparent sm:text-5xl xl:text-6xl/none">
            Hi, I'm Mohsin Kamal Khan
          </h1>
          <p className="max-w-[800px] text-center text-xl text-muted-foreground md:text-2xl">
            Full-Stack Developer building modern, scalable web applications
          </p>
          <div className="flex gap-4 mt-8">
            <Button asChild size="lg">
              <Link href="/projects">View Projects</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="#contact">Contact Me</Link>
            </Button>
          </div>
        </div>
      </section>

      <main className="container py-12 space-y-20">
        {/* About Me */}
        <section id="about" className="space-y-6">
          <h2 className="text-3xl font-bold tracking-tight">About Me</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <Card>
              <CardContent className="p-6">
                <p className="leading-7">
                  I'm a passionate Full-Stack Developer. 
                  I specialize in React, Node.js, and cloud technologies. When I'm not coding, you can find me 
                  contributing to open-source projects or writing about tech on my blog.
                </p>
                <Button className="mt-4" variant="outline" asChild>
                  <Link target="_blank" href="/resume.pdf">View Resume</Link>
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Core Competencies</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p>📚 Software Engineer - FAST NUCES Lahore</p>
                <p>🛠️Proficient in JavaScript, React, and Node.js</p>
                <p>🚀 2+ years experience in developing SaaS platforms</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Featured Projects */}
        <section id="projects" className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-3xl font-bold tracking-tight">Featured Projects</h2>
            <Button variant="outline" asChild>
              <Link href="/projects">View All Projects</Link>
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
        </section>

        {/* Skills/Technologies */}
        <section id="skills" className="space-y-6">
          <h2 className="text-3xl font-bold tracking-tight">Skills & Technologies</h2>
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-wrap gap-2">
                <SkillBadge name="React" icon="/assets/react-icon.svg" />
                <SkillBadge name="Node.js" icon="/assets/nodejs-icon.svg" />
                <SkillBadge name="TypeScript" icon="/assets/typescript-icon.svg" />
                <SkillBadge name="Python" icon="/assets/python-icon.svg" />
                <SkillBadge name="Firebase" icon="/assets/firebase-icon.svg" />
                <SkillBadge name="MongoDB" icon="/assets/mongodb-icon.svg" />
                <SkillBadge name="Supabase" icon="/assets/supabase-icon.svg" />
                <SkillBadge name="NextJS" icon="/assets/nextjs-icon.svg" />
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Blogs/Articles */}
        <section id="blog" className="space-y-6">
          <h2 className="text-3xl font-bold tracking-tight">Latest Articles</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {articles.map(article => (
              <BlogPost
                key={article.id}
                title={article.title}
                date={String(article.date).slice(0, 10)}
                image={article.img_link}
                link={`/article/${article.id}`}
              />
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="space-y-6">
          <h2 className="text-3xl font-bold tracking-tight">Get in Touch</h2>
          <Card>
            <CardContent className="p-6">
              <p className="mb-4">
                I'm always open to new opportunities and collaborations. Feel free to reach out!
              </p>
              <Button asChild size="lg">
                <Link href="mailto:mohsinkamaldev@gmail.com">Contact Me</Link>
              </Button>
              <div className="flex gap-4 mt-6">
                <Link href="https://github.com/mohsinkamalkhan" className="text-muted-foreground hover:text-primary">
                  <GitHubLogoIcon className="w-6 h-6" />
                </Link>
                <Link href="https://linkedin.com/in/mohsin-kamal-dev" className="text-muted-foreground hover:text-primary">
                  <LinkedInLogoIcon className="w-6 h-6" />
                </Link>
                <Link href="https://instagram.com/mkk__rg" className="text-muted-foreground hover:text-primary">
                  <InstagramLogoIcon className="w-6 h-6" />
                </Link>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

    </div>
  )
}

