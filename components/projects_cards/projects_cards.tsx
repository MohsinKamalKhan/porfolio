import ProjectOrBlog from '../project_or_blog.tsx/project_or_blog';
import styles from './projects_cards.module.css';
import Image from 'next/image';

export default async function ProjectsCards({ projects } : { projects : {id: number, name: string, image_link: string}[] }) {

    return (
        <div className={styles.cards_section}>
            { projects.map(project => (
                <div key={project.id} className={styles.container}>
                    <ProjectOrBlog id={project.id} key={project.id} projectOrBlog='PROJECT'>
                        <Image className={styles.image} src={project.image_link} alt={project.name} width={300} height={200} />
                    <div className={styles.footer}>
                        <h2>{project.name}</h2>
                    </div>
                    <div className={styles.read_more_container}>
                        <p>READ MORE</p>
                    </div>
                    </ProjectOrBlog>
                </div> 
            ))}
        </div>
    );
}