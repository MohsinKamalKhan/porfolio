import styles from './cards.module.css';
import MinimalCard, { MinimalCardType } from '../minimal_card/minimal_card';
import Link from 'next/link';


export default async function Cards({ cards, projectOrblog } : { cards : MinimalCardType[], projectOrblog: 'PROJECT' | 'BLOG' }) {

    return (
        <div className={styles.cards_section}>
            { 
                projectOrblog === 'PROJECT' ?
                cards.map(card => <Link href={`/project/${card.id}`}><MinimalCard key={card.id} card={card} /></Link> ) 
                :
                cards.map(card => <Link href={`/blog/${card.id}`}><MinimalCard key={card.id} card={card} /></Link> ) 
            }
        </div>
    );
}