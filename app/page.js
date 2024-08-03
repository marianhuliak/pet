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
      <Header className={styles.header}/>
      <BurgerSlider className={styles.burger}/>
      <PromotionalOffers />
      <Manufacturers />
      <AboutUs />
      <Footer />
    </main>
  );
}






{/*


"use client";
import { useState, useEffect } from 'react';
import Header from "./pages/Header/Header.js";
import styles from "./page.module.scss";
import BurgerSlider from "./pages/BurgerSlider/BurgerSlider.js";
import PromotionalOffers from "./pages/PromotionalOffers/PromotionalOffers.js";
import Manufacturers from "./pages/Manufacturers/Manufacturers.js";
import AboutUs from "./pages/AboutUs/AboutUs.js";
import Footer from "./pages/Footer/Footer.js";

export default function Home() {
  const [headerClass, setHeaderClass] = useState(styles.headerFixed);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const manufacturersElement = document.querySelector('#manufacturers');

      if (manufacturersElement) {
        const manufacturersOffset = manufacturersElement.offsetTop;

        if (scrollY > manufacturersOffset) {
          setHeaderClass(`${styles.headerFixed} ${styles.headerHidden}`);
        } else {
          setHeaderClass(styles.headerFixed);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Запускаємо handleScroll один раз, щоб перевірити початковий стан
    handleScroll();

    // Очистка прослуховувача подій під час розмонтажу компонента
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className={styles.main}>
      <Header className={headerClass} />
      <BurgerSlider />
      <PromotionalOffers />
      <Manufacturers id="manufacturers" />
      <AboutUs />
      <Footer />
    </main>
  );
}


*/}



