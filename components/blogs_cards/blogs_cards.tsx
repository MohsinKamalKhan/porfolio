import ProjectOrBlog from '../project_or_blog.tsx/project_or_blog';
import styles from './blogs_cards.module.css';
import Image from 'next/image';

export default async function BlogsCards({ blogs } : { blogs : {id: number, date: Date}[] }) {

    return (
        <>
            { blogs.map(blog => (
                <ProjectOrBlog id={blog.id} key={blog.id} projectOrBlog='BLOG'>
                <div className={styles.container}>
                    <Image className={styles.image} src='/images/blog_image.webp' alt='blog image' width={300} height={200} />
                    <div className={styles.footer}>
                        <p>{String(blog.date).slice(0, 10)}</p>
                    </div>
                    <div className={styles.read_more_container}>
                        <p>READ MORE</p>
                    </div>
                </div>
                </ProjectOrBlog>
            ))}
        </>
    );
}