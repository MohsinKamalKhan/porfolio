import styles from './main_section.module.css';
import MainSectionImage from './main_section_image/main_section_image';
import MainSectionParagraph from './main_section_paragraph/main_section_paragraph';

export default async function MainSection() {

    return (
            <div className={styles.main_section}>
                <MainSectionParagraph />
                <MainSectionImage />
            </div>
    );
}