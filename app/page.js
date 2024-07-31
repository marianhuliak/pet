import Header from "./Header.js";
import styles from "./page.module.css";
import BurgerSlider from "./BurgerSlider.js";
import PromotionalOffers from "./PromotionalOffers.js";
import Manufacturers from "./Manufacturers.js";
import AboutUs from "./AboutUs.js";
import Footer from "./Footer.js";


export default function Home() {
  return (
    <main className={styles.main}>
      <Header/>
      <BurgerSlider/>
      <PromotionalOffers/>
      <Manufacturers/>
      <AboutUs/>
      <Footer/>

      
    </main>
  );
}
