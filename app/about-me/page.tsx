import AboutMe from "@/components/about_me/about_me";
import HeadingSection from "@/components/heading/heading_section";

export default async function Page({ params }: { params: { slug: string } }) {

    return (
        <div>
            <HeadingSection heading="ABOUT ME" />
            <AboutMe />
        </div>
    );
}