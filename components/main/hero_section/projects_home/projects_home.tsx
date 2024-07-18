'use client';
import { useState } from 'react';
import styles from './projects_home.module.css';
import { CardType } from '@/components/cards/card';
import Image from 'next/image';
import ProjectOrBlog from '@/components/project_or_blog.tsx/project_or_blog';

export default function ProjectsHome({projects} : {projects: CardType[]}) {
    const [activeState, setActiveState] = useState<number>(0);


    return (
        <div className={styles.container}>
            {
                projects.map((project, i) => {
                    return (
                        <ProjectOrBlog projectOrBlog='PROJECT' id={project.id}>
                        <div className={`${styles.panel} ${i === activeState ? styles.active : ''}`} onMouseEnter={() => setActiveState(i)} onClick={() => setActiveState(i)}  key={project.heading} >
                            <Image className={styles.image} width={300} height={200} src={project.image_link} alt={project.heading} />
                            <h3>{project.heading}</h3>
                        </div>
                        </ProjectOrBlog>
                    );
                })
            }

      </div>
    );
}