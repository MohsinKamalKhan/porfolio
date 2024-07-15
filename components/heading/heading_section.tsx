import styles from './heading_section.module.css';

type HeadingSectionType = {
    heading: string
}

export default async function HeadingSection(props: HeadingSectionType) {

    return (
        <div className={styles.heading}>
            <p className={styles.paragraph}>{props.heading}</p>
        </div>
    );
}