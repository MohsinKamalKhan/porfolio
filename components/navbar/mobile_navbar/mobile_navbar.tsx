import styles from './mobile_navbar.module.css';
import LeftContainerMobile from './left_container_mobile';

type typeMobileNavbar = {
    handlingMobileNavbar: () => void
}

export default function MobileNavbar({
    handlingMobileNavbar
} : typeMobileNavbar) {

    return (
        <>
            <LeftContainerMobile handlingMobileNavbar={handlingMobileNavbar} />
            <div onTouchStart={handlingMobileNavbar} className={styles.right_container}>
            </div>
        </>
    );
}