'use client';
import styles from './error.module.css';

export default function ErrorPage({
    error,
    reload
} : {
    error: Error,
    reload : () => void
}) {

    return (
        <div className={styles.container}>
            <h1 className={styles.errorMessage}>{error.message}</h1>
            <button className={styles.reloadButton} onClick={reload}>RELOAD</button>
        </div>
    );
}