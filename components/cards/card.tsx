import Image from 'next/image';
import styles from './card.module.css';
import Button from '../button/button';


export type CardType = {
    id: number,
    heading: string,
    content: string,
    date: Date,
    image_link: string
}

export default async function Card({ card } : { card: CardType }) {

    return (
        <div className={styles.container}>
            <div>
                <div className={styles.heading_container}>
                    <h2>{card.heading}</h2>
                    <p>02-02-2022</p>
                </div>
                <p className={styles.content}>{card.content.slice(0, 150)}...</p>
                <div className={styles.button}>
                    <Button link='/' text='Read More' />
                </div>
            </div>
            <Image style={{objectFit:"cover"}} className={styles.image}   height={250} width={250} alt='card image' src={card.image_link} />
        </div>
    );
}