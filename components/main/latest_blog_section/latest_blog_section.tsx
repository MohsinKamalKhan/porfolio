import HeadingSection from "@/components/heading/heading_section";
import styles from './latest_blog_section.module.css';
import Button from "@/components/button/button";
import { createClient } from "@/utils/supabase/server";
import BlogsCards from "@/components/blogs_cards/blogs_cards";

export default async function LatestBlogSection() {
    const supabase = createClient();

    const {data: latest_blogs_raw} = await supabase.from("blogs").select('id, date').order('id', {ascending: false}).limit(3);
    if (latest_blogs_raw === null) throw Error('Fetching Data from DB failed!');

    const latest_blogs = latest_blogs_raw as {id: number, date: Date}[];

    return (
        <div className={styles.container}>
            <HeadingSection heading="LATEST BLOG" />
            <div className={styles.card_section}>
                <BlogsCards blogs={latest_blogs} />
            </div>
            <Button link="/blogs" text="View All Blogs" />
        </div>
    );
}