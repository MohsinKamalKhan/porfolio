import styles from './cards.module.css';
import MinimalCard, { MinimalCardType } from '../minimal_card/minimal_card';

export default async function Cards({ cards, projectOrBlog } : { cards : MinimalCardType[], projectOrBlog: 'PROJECT' | 'BLOG' }) {

    return (
        <div className={styles.cards_section}>
            { cards.map(card => <MinimalCard key={card.id} card={card} projectOrBlog={projectOrBlog} /> )}
        </div>
    );
}