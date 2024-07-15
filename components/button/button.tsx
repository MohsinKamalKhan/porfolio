import Link from 'next/link';
import styles from './button.module.css';

type ButtonType = {
    text: string,
    link: string
}

export default async function Button({ text, link } : ButtonType) {
    return (
        <div className={styles.button_container}>
            <Link href={link}><button className={styles.button}>{text}</button></Link>
        </div>  
    );
}