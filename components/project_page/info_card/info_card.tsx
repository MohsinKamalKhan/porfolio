import { ProjectType } from '@/app/project/[slug]/page';
import styles from './info_card.module.css';
import { FaExternalLinkAlt } from "react-icons/fa";

export default function InfoCard({project_info} : {project_info: ProjectType}) {

    return (
        <div className={styles.info_card}>
            <p>Project Name: <br /> <span className={styles.underline}>{project_info.name}</span></p>
            <p>Live Preview: {project_info.live_preview ? <a className={styles.underline} href={project_info.live_preview}>LINK <FaExternalLinkAlt /></a> : 'N/A'}</p>
            <p>Date Start: {String(project_info.date_started).slice(0, 15)}</p>
            <p>Date End: {String(project_info.date_ended).slice(0, 15)}</p>
            <p>Lang: {project_info.programming_language}</p>
            <p>Github Link: <a className={styles.underline} href={project_info.github_link}>LINK <FaExternalLinkAlt /></a></p>
        </div>
    );
}