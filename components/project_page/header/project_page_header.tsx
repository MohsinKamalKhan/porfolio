import Image from "next/image";
import styles from './project_page_header.module.css';
import { FaExternalLinkAlt } from "react-icons/fa";
import Skills from "@/components/skills/skills";

type ProjectPageHeaderType = {
    project_name: string,
    image_link: string,
    link: string,
}

export default function ProjectPageHeader({project_name, image_link, link} : ProjectPageHeaderType) {
    const skills_arr = ['NEXTJS', 'FIGMA', 'REACTJS', 'JS', 'CSS', 'HTML', 'LINUX'];

    return (
        <header className={styles.header}>
            <div className={styles.name_and_skills}>
                <h1 className={styles.project_name}>{project_name}</h1>
                <Skills skills_arr={skills_arr} />
            </div>
            <div className={styles.image_column}>
                <a className={styles.image_link} href={link}>
                    <Image className={styles.image} alt="project image" src={image_link} width={300} height={200} />
                    <p>Visit Project<FaExternalLinkAlt style={{marginLeft:'8px'}} /></p>
                </a>
            </div>
        </header>
    );
}