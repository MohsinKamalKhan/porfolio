import HeadingSection from "@/components/heading/heading_section";
import { createClient } from "@/utils/supabase/server";
import Pagination from "@/components/pagination/pagination";
import BlogsCards from "@/components/blogs_cards/blogs_cards";
import styles from './page.module.css'

export default async function Page({ params }: { params: { slug: string } }) {
    const limit: number = Number(params.slug);
    const supabase = createClient();

    const { data : result }  = await supabase.from("blogs").select('id, date').order("date", {ascending: false}).range(limit * 4, (limit + 1) * 4 - 1);
    if (result === null) throw Error('Could Not Fetch Data!');

    const allBlogs = result as {id: number, date: Date}[];

    return (
        <div>
            <HeadingSection heading="BLOGS" />
            <div className={styles.cards_section}><BlogsCards blogs={allBlogs} /></div>
            <Pagination pageNumber={limit} />
        </div>
    );
}