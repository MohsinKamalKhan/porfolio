import Link from 'next/link';
import styles from './button.module.css';

type ButtonType = {
    text: string,
    link: string,
    disabled?: boolean
}

export default async function Button({ text, link, disabled } : ButtonType) {
    return (
        <div className={styles.button_container}>
            <Link href={link}><button disabled={disabled} className={styles.button}>{text}</button></Link>
        </div>  
    );
}