import { ProjectType } from "@/app/project/[slug]/page";
import styles from './project_body.module.css';

export default function ProjectBody({project_info} : {project_info : ProjectType}) {

    return (
        <div className={styles.body}>
            <div>
                <h3>Project Goal:</h3>
                <p>{project_info.project_goal}</p>
            </div>
            <div>
                <h3>Technical Requirements:</h3>
                <p>{project_info.technical_requirement}</p>
            </div>
            <div>
                <h3>Project Scope:</h3>
                <p>{project_info.project_scope}</p>
            </div>
        </div>
    );
}