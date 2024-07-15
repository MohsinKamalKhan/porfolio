import Button from "../button/button";
import styles from './pagination.module.css';

export default function Pagination({pageNumber}: {pageNumber: number}) {

    return(
        <div className={styles.pagination_container}>
            <Button text="PREV" link={`/blogs/${pageNumber - 1}`} disabled={pageNumber === 0 ? true : false}  />
            <Button text="NEXT" link={`/blogs/${pageNumber + 1}`}  />
        </div>
    );
}