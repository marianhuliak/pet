"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import ToothModel from "../pages/features/ToothModel/ToothModel.js";
import styles from "./page.module.scss";
import arrow from "../images/arrowAbout.svg";
import jaw from "../images/jaw.svg";
import hands from "../images/aboutHands.svg";
import logo from "../images/white-tiff-without.png";
import Footer from "../pages/Footer/Footer.js";
import Link from "next/link";
import { motion } from "framer-motion";

const aboutVariants = {
  hidden: { opacity: 0, transition: { type: "spring", duration: 0.5 } },
  visible: { opacity: 1, transition: { duration: 0.5 } },
  exit: { opacity: 0, transition: { duration: 0.5 } },
};

const About = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleMouseEnter = () => {
    setIsAnimating(true);
  };

  const handleAnimationEnd = () => {
    setIsAnimating(false);
  };

  const containerRef = useRef(null);

  const handleScroll = (e) => {
    e.preventDefault();
    const container = containerRef.current;
    const sections = Array.from(container.children);
    const currentScroll = container.scrollLeft;
    const sectionWidth = window.innerWidth;

    const currentIndex = Math.round(currentScroll / sectionWidth);

    if (e.deltaY > 0) {
      // Scroll right
      if (currentIndex < sections.length - 1) {
        container.style.scrollBehavior = "auto"; // Вимкнути автоматичне плавне прокручування
        container.scrollTo({
          left: (currentIndex + 1) * sectionWidth,
        });
        setTimeout(() => {
          container.style.scrollBehavior = "smooth"; // Увімкнути плавне прокручування
        }, 1000); // Затримка для більш плавного переходу
      }
    } else {
      // Scroll left
      if (currentIndex > 0) {
        container.style.scrollBehavior = "auto";
        container.scrollTo({
          left: (currentIndex - 1) * sectionWidth,
        });
        setTimeout(() => {
          container.style.scrollBehavior = "smooth";
        }, 1000);
      }
    }
  };

  return (
    <div className={styles.sections}>
      <div className={styles.sectionOne}>
        <motion.section
          className={styles.fullScreenOne}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: "auto" }}
          variants={aboutVariants}
        >
          <div className={styles.arrowContainer}>
            <Link href="/">
              <Image src={arrow} className={styles.arrow} alt="Arrow" />
            </Link>
          </div>
          <div className={styles.sectionOneContainer}>
            <div className={styles.titleContainer}>
              <h1 className={styles.title}>
                Ortho <br /> store
              </h1>
            </div>
            <div className={styles.toothModel}>
              <Image src={logo} alt="logo" className={styles.logo} />
            </div>
          </div>
        </motion.section>
      </div>

      <div className={styles.sectionTwo}>
        <div className={styles.fullScreenTwo}>
          <motion.section
            className={styles.textTwoContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: "auto" }}
            variants={aboutVariants}
          >
            <p className={styles.titleTextTwo}>
              Інтернет магазин ортодонтичної продукції.{" "}
            </p>
            <p className={styles.mainTextTwo}>
              Ми прийшли на цей ринок в 2015 році з головною метою - щоб ви
              набували якісний товар за низькими цінами. У нашому
              ортодонтическом магазині працюють професіонали, які добре знають
              потреби та потреби лікарів-ортодонтів. Ми постійно стежимо за
              інноваціями в сфері ортодонтії та підберемо вам найкращий варіант
              з широкого асортименту ортодонтичних матеріалів та інструментів,
              проконсультуємо по всіх виниклих питань.
            </p>
            <Image src={jaw} alt="Jaw" className={styles.jaw} />
          </motion.section>
        </div>
      </div>

      <div className={styles.sectionThree}>
        <motion.section
          className={styles.fullScreenThree}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: "auto" }}
          variants={aboutVariants}
        >
          <div className={styles.mainTextThree}>
            <ul className={styles.mainTextlist}>
              <li className={styles.liThree}>
                різноманітні види брекетів, матеріали до них і засоби гігієни;
              </li>
              <li className={styles.liThree}>ретрактори;</li>
              <li className={styles.liThree}> інструменти; </li>
              <li className={styles.liThree}> ретейнери; </li>
              <li className={styles.liThree}> трейнери; </li>
              <li className={styles.liThree}>
                {" "}
                різні види кап і пластини до них;
              </li>
              <li className={styles.liThree}>
                {" "}
                ортодонтические гвинти, мікроімпланти;{" "}
              </li>
              <li className={styles.liThree}>
                {" "}
                аксесуари для ортодонта і стоматолога;{" "}
              </li>

              <li className={styles.liThree}>
                {" "}
                матеріали для дентальної фотографії;{" "}
              </li>
              <li className={styles.liThree}>сепараційні інструменти. </li>
            </ul>
            <p>
              Номенклатура товарів постійно оновлюється і доповнюється
              дотримуючись всіх вимог і побажань індустрії ортодонтії.
            </p>
          </div>
        </motion.section>
      </div>

      <div className={styles.sectionFour}>
        <motion.section
          className={styles.fullScreenFour}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: "auto" }}
          variants={aboutVariants}
        >
          <p className={styles.mainTextFour}>
            Весь асортимент ортодонтичного магазину представлений продукцією
            провідних світових брендів, а саме:
          </p>
          <div className={styles.ulContainer}>
            <ul className={styles.fourTextlist}>
              <li> Biodinamica; </li>
              <li> Bisco; </li>
              <li> Hubit; </li>
              <li> ID-Logical; </li>
              <li> IMD;</li>
              <li> Lancer Orthodontics; </li>
              <li> Lewa Dental; </li>
              <li> Mico One; </li>
            </ul>
            <ul className={styles.fourTextlist}>
              <li> MRC;</li>
              <li> Opro;</li>
              <li> Ormco;</li>
              <li> Ortho Classic; </li>
              <li> Ortho-Direct;</li>
              <li> Speed ​​Dental; </li>
              <li> OrthoStore; </li>
              <li> 3B. </li>
            </ul>
          </div>
        </motion.section>
      </div>

      <div className={styles.sectionFive}>
        <motion.section
          className={styles.fullScreenFive}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: "auto" }}
          variants={aboutVariants}
        >
          <ul className={styles.mainTextFive}>
            <li className={styles.liFive}>
              Ми з повагою ставимося як до великих компаній, цінуємо їхній
              досвід і готові поставити будь-яку кількість ортодонтической
              продукції, так і до кожному бажаючому працювати з нами доктору.
            </li>
            <li className={styles.liFive}>
              Інтернет магазин ортодонтической продукції Orthostore слідуючи
              інновацій в своїй сфері діяльності і пропонує продукцію високої
              якості від провідних світових брендів.
            </li>
            <li className={styles.liFive}>
              Надаємо професійні кваліфіковані консультації та індивідуальний
              підхід до кожного клієнта.
            </li>
          </ul>
          <Image src={hands} alt="Hands" className={styles.hands} />
        </motion.section>
      </div>

      <div className={styles.sectionSix}>
        <motion.section
          className={styles.fullScreenSix}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: "auto" }}
          variants={aboutVariants}
        >
          <ul className={styles.mainTextSix}>
            <li className={styles.liSix}>
              Для всіх постійних клієнтів передбачені знижки, подарунки та інші
              приємні сюрпризи.
            </li>
            <li className={styles.liSix}>
              В умовах кризи і нестабільності наш ортодонтический магазин
              підтримує лояльну цінову політику щоб і професіонал і молодий
              фахівець знайшли необхідну продукцію на будь-який бюджет. Це і
              товари з достатніми для роботи характеристиками і середній ціновий
              клас з оптимальним співвідношенням ціна-якість, і преміум сегмент
              де фахівці найвищого рівня мають високі вимоги до функціоналу і
              надійності матеріалів і інструментів змогли придбати бажану
              продукцію.
            </li>
          </ul>
        </motion.section>
      </div>
      <div className={styles.footerContainer}>
        <Footer />
      </div>
    </div>
  );
};

export default About;
