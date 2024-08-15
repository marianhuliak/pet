import dynamic from 'next/dynamic';
import styles from "./page.module.scss";

// Ліниве завантаження компонентів
const Header = dynamic(() => import("./pages/Header/Header.js"));
const BurgerSlider = dynamic(() => import("./pages/BurgerSlider/BurgerSlider.js"));
const PromotionalOffers = dynamic(() => import("./pages/PromotionalOffers/PromotionalOffers.js"));
const Manufacturers = dynamic(() => import("./pages/Manufacturers/Manufacturers.js"));
const AboutUs = dynamic(() => import("./pages/AboutUs/AboutUs.js"));
const Footer = dynamic(() => import("./pages/Footer/Footer.js"));

export default function Home() {
  return (
    <main className={styles.main}>
      <Header className={styles.header} />
      <div className={styles.scrollPart}>
        <BurgerSlider className={styles.section} />
        <PromotionalOffers className={styles.section} />
        <Manufacturers className={styles.section} />
        <AboutUs className={styles.section} />
        <Footer className={styles.section} />
      </div>
    </main>
  );
}
