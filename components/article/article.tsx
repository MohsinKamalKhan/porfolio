import styles from './article.module.css';
import HeadingSection from '../heading/heading_section';

export default async function Article({article} : {article : {date: Date, heading: string, content: string}}) {

    return (
        <article>
            <div className={styles.heading_with_image_container}>
                <HeadingSection heading={article.heading} />
            </div>
            <div className={styles.container}>
                <p className={styles.date}>{String(article.date).slice(2, 10)}</p>
                <p className={styles.content}>
                    {article.content}
                </p>
            </div>
        </article>
    );
}