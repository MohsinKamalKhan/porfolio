import { ProjectType } from '@/app/project/[slug]/page';
import styles from './info_card.module.css';

export default function InfoCard({project_info} : {project_info: ProjectType}) {

    return (
        <div className={styles.info_card}>
            <p>Project Name: {project_info.project_name}</p>
            <p>Live Preview: {project_info.live_preview || 'N/A'}</p>
            <p>Date Started: {String(project_info.date_started).slice(0, 15)}</p>
            <p>Date Ended: {String(project_info.date_ended).slice(0, 15)}</p>
            <p>Programming Language: {project_info.programming_language}</p>
            <p>Github Link: <a href={project_info.github_link}>{project_info.github_link}</a></p>
            <p>Last Updated: {String(project_info.last_updated).slice(0, 15)}</p>
        </div>
    );
}