import styles from './footer.module.css';
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import Link from 'next/link';

export default async function FooterSection() {

    return (
        <div className={styles.footer}>
            <div className={styles.my_info_container}>
                <p>Created By Mohsin Kamal in NEXTJS and SUPABASE. </p>
            </div>
            <div className={styles.follow_me_container}>
                <h2>FOLLOW ME</h2>
                <div className={styles.follow_me_icons}>
                    <Link target='_blank' href={'https://github.com/mohsinkamalkhan'}><FaGithub /></Link>
                    <Link target='_blank' href={'https://www.linkedin.com/in/mohsin-kamal-khan-b5bba1309/'}><CiLinkedin /></Link>
                    <Link target='_blank' href={'https://www.instagram.com/mkk__rg/'}><FaInstagram /></Link>
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