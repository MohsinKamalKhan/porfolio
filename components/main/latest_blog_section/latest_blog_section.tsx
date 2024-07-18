import Card, { CardType } from "@/components/cards/card";
import HeadingSection from "@/components/heading/heading_section";
import styles from './latest_blog_section.module.css';
import Button from "@/components/button/button";
import { createClient } from "@/utils/supabase/server";

export default async function LatestBlogSection() {
    const supabase = createClient();

    const {data: latest_blog_raw} = await supabase.from('get_latest_blog').select('*');
    if (latest_blog_raw === null) throw Error('Database Connection Failed');
    const latest_blog = latest_blog_raw as CardType[];

    return (
        latest_blog && 
        <div className={styles.latest_blog_section}>
            <HeadingSection heading="LATEST BLOG" />
            <div className={styles.card_section}>
                {latest_blog.map(card =>  <Card key={card.id} card={card} />)}
            </div>
            <Button link="/blogs" text="View All Blogs" />
        </div>
    );
}