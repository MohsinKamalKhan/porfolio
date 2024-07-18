import { CardType } from "@/components/cards/card";
import HeadingSection from "@/components/heading/heading_section";
import styles from './latest_blog_section.module.css';
import Button from "@/components/button/button";
import { createClient } from "@/utils/supabase/server";
import MinimalCard from "@/components/minimal_card/minimal_card";

export default async function LatestBlogSection() {
    const supabase = createClient();

    const {data: latest_blog_raw} = await supabase.from('get_latest_blog').select('*');
    if (latest_blog_raw === null) throw Error('Fetching Data from DB failed!');

    const latest_blog = latest_blog_raw as CardType[];

    return (
        <div className={styles.container}>
            <HeadingSection heading="LATEST BLOG" />
            <div className={styles.card_section}>
                {latest_blog.map(card =>  <MinimalCard key={card.id} card={card} projectOrBlog="BLOG" />)}
            </div>
            <Button link="/blogs" text="View All Blogs" />
        </div>
    );
}