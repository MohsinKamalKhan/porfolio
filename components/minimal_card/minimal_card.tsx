import Image from 'next/image';
import styles from './minimal_card.module.css';

export type MinimalCardType = {
    id: number,
    heading: string,
    date: Date,
    image_link: string
}

export default function MinimalCard({card} : {card: MinimalCardType}) {

    return (
        <div className={styles.container}>
            <Image className={styles.image} src={card.image_link} alt={card.heading} width={300} height={200} />
            <div className={styles.footer}>
                <h2>{card.heading}</h2>
                <p>{String(card.date).slice(2, 10)}</p>
            </div>
        </div>
    );
}