"use client";
import Image from 'next/image';
import styles from './main_section_image.module.css';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';
import { useEffect, useState } from 'react';

const slides = [
    {
        name : 'Figma Designer',
        image_url : "/images/figma.svg"
    },
    {
        name : 'NEXTJS Developer',
        image_url : '/images/next-js.svg'
    },
    {
        name : 'Supabase Developer',
        image_url : '/images/supabase.svg'
    },
    {
        name : 'MongoDB Developer',
        image_url : '/images/mongo-db.svg'
    },
    {
        name : 'Firebase Developer',
        image_url : '/images/firebase.svg'
    }
];

export default function MainSectionImage() {
    const [slide, setSlide] = useState(0);

    function leftClickHandler() {
        if (slide !== 0) setSlide(slide - 1);
        else setSlide(slides.length - 1);
    }

    function rightClickHandler() {
        if (slide !== slides.length - 1) setSlide(slide + 1);
        else setSlide(0);
    }

    useEffect(() => {
        setTimeout(rightClickHandler, 5000)
    }, []);

    return (
        <div className={styles.image_section}>
            <FaArrowAltCircleLeft color='white' className={styles.clickButton} onClick={leftClickHandler} size={30} />
            <span unselectable='on' className={styles.intro_image_cover}>
                <Image alt={slides[slide].image_url} width={250} height={250}  src={slides[slide].image_url} />
                <p>{slides[slide].name}</p>
            </span>
            <FaArrowAltCircleRight color='white' className={styles.clickButton} onClick={rightClickHandler} size={30} />
        </div>
    );
}