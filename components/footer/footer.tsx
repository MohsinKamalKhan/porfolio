import styles from './footer.module.css';

export default async function FooterSection() {

    return (
        <div className={styles.footer}>
            <div className={styles.my_info_container}>
                <p>Created By Mohsin Kamal in NEXTJS and SUPABASE. </p>
            </div>
            <div className={styles.follow_me_container}>
                <h2>FOLLOW ME</h2>
                <div className={styles.follow_me_icons}>
                    <div className={styles.icon}></div>
                    <div className={styles.icon}></div>
                    <div className={styles.icon}></div>
                </div>
            </div>
            <div className={styles.contact_container}>
                <h2>Contact Me</h2>
                <p>mohsinkamalk49@gmail.com</p>
                <p>+92 3368784076</p>
            </div>
        </div>
    );
}