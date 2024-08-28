'use client';
import { useState } from 'react';
import styles from './projects_home.module.css';
import Image from 'next/image';
import ProjectOrBlog from '@/components/project_or_blog.tsx/project_or_blog';

export default function ProjectsHome({projects} : {projects: {id: number, image_link: string, name: string}[]}) {
    const [activeState, setActiveState] = useState<number>(0);


    return (
        <div className={styles.container}>
            {
                projects.map((project, i) => {
                    return (
                        <ProjectOrBlog projectOrBlog='PROJECT' id={project.id}>
                        <div className={`${styles.panel} ${i === activeState ? styles.active : ''}`} onMouseEnter={() => setActiveState(i)} onClick={() => setActiveState(i)}  key={project.name} >
                            <Image className={styles.image} width={300} height={200} src={project.image_link} alt={project.name} />
                            <h3>{project.name}</h3>
                        </div>
                        </ProjectOrBlog>
                    );
                })
            }

      </div>
    );
}