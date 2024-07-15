import Image from "next/image";
import styles from './about_me.module.css';

export default function AboutMe() {
    return(
        <div className={styles.container}>
            <p>
                I am Mohsin Kamal Khan. I am currently doing my bachelor in Computer Science from FAST NUCES Pakistan. I have full-stack web developer skills. On front-end I am proficient on tailwindcss and css, on UI/UX design I have a good familarity with FIGMA and on Backend I have a good understanding of SQL and No-SQL databases like MSSQL, MYSQL, Supabase, Mongodb, Firebase etc.
            </p>
            <Image className={styles.image} src={'/images/my_image.jpg'} alt="my image" width={300} height={300} />
        </div>
    );
}