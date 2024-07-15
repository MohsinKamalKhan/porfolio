import MainSection from "@/components/main/hero_section/main_section";
import LatestBlogSection from "@/components/main/latest_blog_section/latest_blog_section";
import ProjectSection from "@/components/main/projects_section/project_section";

export default async function Home() {

  return (
    <div>
      <MainSection />
      <ProjectSection />
      <LatestBlogSection />
    </div>
  );
}
