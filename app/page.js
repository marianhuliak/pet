import Header from "./pages/Header/Header.js";
import styles from "./page.module.scss";
import BurgerSlider from "./pages/BurgerSlider/BurgerSlider.js";
import PromotionalOffers from "./pages/PromotionalOffers/PromotionalOffers.js";
import Manufacturers from "./pages/Manufacturers/Manufacturers.js";
import AboutUs from "./pages/AboutUs/AboutUs.js";
import Footer from "./pages/Footer/Footer.js";

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