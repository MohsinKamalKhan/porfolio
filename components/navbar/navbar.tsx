'use client'

import { useState } from 'react';
import MobileNavbar from './mobile_navbar/mobile_navbar';
import styles from './navbar.module.css';
import { GiHamburgerMenu } from "react-icons/gi";
import Link from 'next/link';

export default function Navbar() {
    const [showMobileNavbar, setShowNavbar] = useState(false);

    function handlingMobileNavbar() {
        setShowNavbar(!showMobileNavbar);
    }

    return (
        <div className={styles['navbar']}>
            <p className={styles['link']}><Link href={'/'}>HOME</Link></p>
            <p className={styles['link']}><Link href={'/projects'}>PROJECTS</Link></p>
            <p className={styles['link']}><Link href={'/blogs/0'}>BLOGS</Link></p>
            <p className={styles['link']}><Link href={'/about-me'}>ABOUT ME</Link></p>

            <span onClick={handlingMobileNavbar} className={styles['hamburger']}><GiHamburgerMenu color='black' size={25} /></span>
            { showMobileNavbar && <MobileNavbar handlingMobileNavbar={handlingMobileNavbar} /> }
        </div>
    );
}