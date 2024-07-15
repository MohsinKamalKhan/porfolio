import Article from "@/components/article/article";
import { CardType } from "@/components/cards/card";
import HeadingSection from "@/components/heading/heading_section";
import { createClient } from "@/utils/supabase/server";
import Image from "next/image";
import styles from './page.module.css';

export default async function Page({ params } : { params: {slug: string}}) {
    const id = params.slug;
    const supabase = createClient();
    const { data: projectRough} = await supabase.from("projects").select( "date, heading, content, image_link").filter('id', "eq", id);
    const blog = projectRough![0] as CardType;

    return (
        blog &&
        <div>
            <div className={styles.heading_with_image_container}>
                <HeadingSection heading={blog.heading} />
                <Image className={styles.image} alt="project image" src={'/images/my_image.jpg'} width={200} height={200} />
            </div>
            <Article article={blog} />
        </div>
    );
}