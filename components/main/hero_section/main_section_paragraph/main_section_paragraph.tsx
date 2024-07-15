import styles from './main_section_paragraph.module.css';

export default async function MainSectionParagraph() {

    return (
        <div className={styles.intro_para}>
            <p className={styles.intro_para_heading}>Hi there, I'm Mohsin Kamal Khan</p>
            <p className={styles.intro_para_subtext}>BSCS FAST NUCES</p>
        </div>
    );
}