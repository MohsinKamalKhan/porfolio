import Link from 'next/link';
import styles from './left_container_mobile.module.css';
import { FaArrowRight } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

type typeLeftContainerMobile = {
    handlingMobileNavbar: () => void
}


export default function LeftContainerMobile({
    handlingMobileNavbar
} : typeLeftContainerMobile) {
    return (
        <div className={styles['container']}>
            <div className={styles['cross-icon-div']}>
                <IoClose onClick={handlingMobileNavbar}   size={30} />
            </div>
            <div className={styles['navbar']}>
                <p onClick={handlingMobileNavbar} className={styles['link']}><Link href={"/"}>HOME</Link></p>
                <p onClick={handlingMobileNavbar} className={styles['link']}><Link href={"/projects/0"}>PROJECTS</Link></p>
                <p onClick={handlingMobileNavbar} className={styles['link']}><Link href={"/blogs/0"}>BLOGS</Link></p>
                <p onClick={handlingMobileNavbar} className={styles['link']}><Link href={"/about-me"}>ABOUT ME</Link></p>
            </div>
            <div className={styles['close-text']}>
                <span className={styles['lower-text']}>Click on Background to close sidebar</span>
                <FaArrowRight />
            </div>
        </div>
    );
}