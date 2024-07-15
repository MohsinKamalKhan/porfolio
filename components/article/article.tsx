import { CardType } from "../cards/card";
import styles from './article.module.css';

export default async function Article({article} : {article : CardType}) {
    
    return (
        <div className={styles.container}>
            <p className={styles.date}>{String(article.date).slice(2, 10)}</p>
            <p className={styles.content}>
                {article.content}
            </p>
        </div>
    );
}