import Button from "../button/button";
import styles from './pagination.module.css';

export default function Pagination({pageNumber, ProjectOrBlog}: {pageNumber: number, ProjectOrBlog : 'PROJECT' | 'BLOG'}) {

    return(
        ProjectOrBlog === 'BLOG' ?
        <div className={styles.pagination_container}>
            <Button text="PREV" link={`/blogs/${pageNumber - 1}`} disabled={pageNumber === 0 ? true : false}  />
            <Button text="NEXT" link={`/blogs/${pageNumber + 1}`}  />
        </div>
        :
        <div className={styles.pagination_container}>
            <Button text="PREV" link={`/projects/${pageNumber - 1}`} disabled={pageNumber === 0 ? true : false}  />
            <Button text="NEXT" link={`/projects/${pageNumber + 1}`}  />
        </div>
    );
}