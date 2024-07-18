import { CardType } from "../cards/card";
import styles from './article.module.css';
import Image from 'next/image';
import HeadingSection from '../heading/heading_section';

export default async function Article({article} : {article : CardType}) {
    
    return (
        <article>
            <div className={styles.heading_with_image_container}>
                <HeadingSection heading={article.heading} />
                <Image className={styles.image} alt="project image" src={article.image_link} width={300} height={200} />
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