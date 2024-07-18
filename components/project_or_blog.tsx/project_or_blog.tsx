import Link from "next/link";
import { ReactNode } from "react";

export default  function ProjectOrBlog({ children, id, projectOrBlog } : { children : ReactNode, id: number, projectOrBlog : 'PROJECT' | 'BLOG' }) {

    return (
        <Link href={projectOrBlog === 'BLOG' ? `/blog/${id}` : `/project/${id}`}>
            {children}
        </Link>
    );
}