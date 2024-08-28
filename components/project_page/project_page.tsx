import { ProjectType } from "@/app/project/[slug]/page";
import styles from './project_page.module.css';
import ProjectPageHeader from "./header/project_page_header";
import InfoCard from "./info_card/info_card";
import ProjectBody from "./project_body/project_body";

export default function ProjectPage({project_info} : {project_info: ProjectType}) {

    return (
        <section className={styles.section}>
            <ProjectPageHeader image_link={project_info.image_link} project_name={project_info.name} link={project_info.live_preview || project_info.github_link} />
            <section className={styles.body}>
                <ProjectBody project_info={project_info} />
                <InfoCard project_info={project_info} />
            </section>
        </section>
    );
}