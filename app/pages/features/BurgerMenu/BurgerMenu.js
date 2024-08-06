"use client";

import React, { useState } from "react";
import styles from "./BurgerMenu.module.scss";
import { motion } from "framer-motion";

const sections = {
  sectionOne: [
    "самолігуючі",
    "естетичні",
    "лінгвальні",
    "металеві",
    "сапфірові пластикові накусочні (майданчики)"
  ],
  sectionTwo: [
    "Ортодонтичні набори для чистки брекетів",
    "Ортодонтичні зубні щітки, йоршики",
    "Флоси (зубна нитка для брекетів)"
  ],
  sectionThree: [
    "Матеріали для фіксації брекетів",
    "Ортодонтичні ретрактори",
    "Замки брекета",
    "Ортодонтичні дуги для брекетів",
    "Ортодонтичні кільця для брекетів",
    "Лігатури для брекетів",
    "Еластичні матеріали: ланцюжки, тяги для брекетів, сепараційні кільця",
    "Ортодонтичні інструменти",
    "Ортодонтичні пружини, стопора, кнопки, гачки",
    "Ортодонтичні ретейнери"
  ],
  sectionFour: [
    "Демонстраційні тіподонти",
    "Контейнери для зубних протезів, пластинок, капи",
    "Маски стоматологічні захисні",
    "Окуляри стоматологічні захисні",
    "Ортодонтичний віск для брекетів",
    "Гвинти ортодонтичні",
    "Пластини для кап",
    "Ортодонтичні мікроімпланти",
    "Захисні капи"
  ],
  sectionFive: [
    "Ортодонтичні лицьові маски",
    "Матеріали для детальної фотографії",
    "Сепараційні інструменти"
  ],
  sectionSix: [
    "Myobrace A1, A2, A3, T1, T2, T3, T3N, TA, 13, i3N, K1, K2, K3, J1, J2, J3",
    "Трейнера Т4К, T4A, INFANT",
    "Трейнера Т4В, Т4В 2, TMJ, T4F, TMD",
    "Bruxogard"
  ]
};

const BurgerMenu = () => {
  const [activeDetail, setActiveDetail] = useState({
    sectionOne: null,
    sectionTwo: null,
    sectionThree: null,
    sectionFour: null,
    sectionFive: null,
    sectionSix: null
  });

  const handleDetailClick = (section, index) => {
    setActiveDetail(prev => ({
      ...prev,
      [section]: prev[section] === index ? null : index
    }));
  };

  return (
    <div className={styles.fullScreen}>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: "auto", opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        transition={{ duration: 0.5 }}
        className={styles.burgerMenuContainer}
      >
        <div className={styles.sectionOneContainer}>
          <div className={styles.sectionOne}>
            <p className={styles.title}>Брекети</p>
            <ul className={styles.bracesDetails}>
              {sections.sectionOne.map((detail, index) => (
                <li
                  key={index}
                  className={`${styles.details} ${activeDetail.sectionOne === index ? styles.active : ''}`}
                  onClick={() => handleDetailClick('sectionOne', index)}
                >
                  {detail}
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.sectionTwo}>
            <p className={styles.title}>Засоби гігієни для брекетів</p>
            <ul className={styles.hygieneDetails}>
              {sections.sectionTwo.map((detail, index) => (
                <li
                  key={index}
                  className={`${styles.details} ${activeDetail.sectionTwo === index ? styles.active : ''}`}
                  onClick={() => handleDetailClick('sectionTwo', index)}
                >
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles.sectionThree}>
          <ul className={styles.hygieneDetails}>
            {sections.sectionThree.map((detail, index) => (
              <li
                key={index}
                className={`${styles.details} ${activeDetail.sectionThree === index ? styles.active : ''}`}
                onClick={() => handleDetailClick('sectionThree', index)}
              >
                {detail}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.sectionFour}>
          <p className={styles.title}>Аксесуари для ортодона і стоматолога</p>
          <ul className={styles.accessoriesDetails}>
            {sections.sectionFour.map((detail, index) => (
              <li
                key={index}
                className={`${styles.details} ${activeDetail.sectionFour === index ? styles.active : ''}`}
                onClick={() => handleDetailClick('sectionFour', index)}
              >
                {detail}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.sectionFive}>
          <div className={styles.sectionFive}>
            <ul className={styles.accessoriesDetails}>
              {sections.sectionFive.map((detail, index) => (
                <li
                  key={index}
                  className={`${styles.details} ${activeDetail.sectionFive === index ? styles.active : ''}`}
                  onClick={() => handleDetailClick('sectionFive', index)}
                >
                  {detail}
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.sectionSix}>
            <p className={styles.title}>Ортодонтичні трейнери для зубів</p>
            <ul className={styles.trainersDetails}>
              {sections.sectionSix.map((detail, index) => (
                <li
                  key={index}
                  className={`${styles.details} ${activeDetail.sectionSix === index ? styles.active : ''}`}
                  onClick={() => handleDetailClick('sectionSix', index)}
                >
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default BurgerMenu;
