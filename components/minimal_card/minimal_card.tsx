import Image from 'next/image';
import styles from './minimal_card.module.css';
import ProjectOrBlog from '../project_or_blog.tsx/project_or_blog';

export type MinimalCardType = {
    id: number,
    heading: string,
    date: Date,
    image_link: string
}

export default function MinimalCard({card, projectOrBlog} : {card: MinimalCardType, projectOrBlog: 'PROJECT' | 'BLOG'}) {

    return (
        <ProjectOrBlog projectOrBlog={projectOrBlog} id={card.id} >
            <div className={styles.container}>
                <Image className={styles.image} src={card.image_link} alt={card.heading} width={300} height={200} />
                <div className={styles.footer}>
                    <h2>{card.heading}</h2>
                    <p>{String(card.date).slice(2, 10)}</p>
                </div>
                <div className={styles.read_more_container}>
                    <p>READ MORE</p>
                </div>
            </div>
        </ProjectOrBlog>
    );
}