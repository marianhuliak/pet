"use client";

import React from "react";
import styles from "./BurgerMenu.module.scss";
import { motion } from "framer-motion";

const BurgerMenu = () => {
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
              <li className={styles.details}>самолігуючі</li>
              <li className={styles.details}> естетичні</li>
              <li className={styles.details}> лінгвальні</li>
              <li className={styles.details}> металеві</li>
              <li className={styles.details}>
                сапфірові пластикові накусочні (майданчики)
              </li>
            </ul>
          </div>

          <div className={styles.sectionTwo}>
            <p className={styles.title}>Засоби гігієни для брекетів</p>
            <ul className={styles.hygieneDetails}>
              <li className={styles.details}>
                Ортодонтичні набори для чистки брекетів
              </li>
              <li className={styles.details}>
                {" "}
                Ортодонтичні зубні щітки, йоршики
              </li>
              <li className={styles.details}>
                Флоси(зубна нитка для брекетів)
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.sectionThree}>
          <ul className={styles.hygieneDetails}>
            <li className={styles.details}>Матеріали для фіксації брекетів</li>
            <li className={styles.details}>Ортодонтичні ретрактори</li>
            <li className={styles.details}> Замки брекета</li>
            <li className={styles.details}> Ортодонтичні дуги для брекетів</li>
            <li className={styles.details}>
              {" "}
              Ортодонтичні кільця для брекетів
            </li>
            <li className={styles.details}> Лігатури для брекетів</li>
            <li className={styles.details}>
              Еластичні матеріали: ланцюжки, тяги для брекетів, сепараційні
              кільця
            </li>
            <li className={styles.details}> Ортодонтичні інструменти</li>
            <li className={styles.details}>
              Ортодонтичні пружини, стопора, кнопки, гачки
            </li>
            <li className={styles.details}> Ортодонтичні ретейнери</li>
          </ul>
        </div>
        <div className={styles.sectionFour}>
          <p className={styles.title}>Аксесуари для ортодона і стоматолога</p>
          <ul className={styles.accessoriesВetails}>
            <li className={styles.details}>Демонстраційні тіподонти </li>
            <li className={styles.details}>
              Контейнери для зубних протезів, пластинок, капи
            </li>
            <li className={styles.details}> Маски стоматологічні захисні </li>
            <li className={styles.details}> Окуляри стоматологічні захисні </li>
            <li className={styles.details}>
              {" "}
              Ортодонтичний віск для брекетів{" "}
            </li>
            <li className={styles.details}> Гвинти ортодонтичні </li>
            <li className={styles.details}> Пластини для кап </li>
            <li className={styles.details}>Ортодонтичні мікроімпланти </li>
            <li className={styles.details}> Захисні капи</li>
          </ul>
        </div>
        <div className={styles.sectionFive}>
          <div className={styles.sectionFive}>
            <ul className={styles.accessoriesDetails}>
              <li className={styles.details}>Ортодонтичні лицьові маски</li>
              <li className={styles.details}>
                Матеріали для детальної фотографії
              </li>
              <li className={styles.details}> Сепараційні інструменти</li>
            </ul>
          </div>

          <div className={styles.sectionSix}>
            <p className={styles.title}>Ортодонтичні трейнери для зубів</p>
            <ul className={styles.trainersDetails}>
              <li className={styles.details}>
                Myobrace A1, A2, A3, T1, T2, T3, T3N, TA, 13, i3N, K1, K2, K3,
                J1, J2, J3
              </li>
              <li className={styles.details}> Трейнера Т4К, T4A, INFANT</li>
              <li className={styles.details}>
                Трейнера Т4В, Т4В 2, TMJ, T4F, TMD,
              </li>
              <li className={styles.details}> Bruxogard</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default BurgerMenu;



{/*"use client";

import React, { useState } from "react";
import styles from "./BurgerMenu.module.scss";
import { motion } from "framer-motion";

const BurgerMenu = () => {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
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
        <div
          className={`${styles.sectionOneContainer} ${
            activeSection === "sectionOne" ? styles.active : ""
          }`}
        >
          <div className={styles.sectionOne}>
            <p className={styles.title}>
              Брекети
              <button
                className={styles.burgerMenuButton}
                onClick={() => toggleSection("sectionOne")}
              >
                {activeSection === "sectionOne" ? "▲" : "▼"}
              </button>
            </p>
            <ul className={styles.bracesDetails}>
              <li className={styles.details}>самолігуючі</li>
              <li className={styles.details}> естетичні</li>
              <li className={styles.details}> лінгвальні</li>
              <li className={styles.details}> металеві</li>
              <li className={styles.details}>
                сапфірові пластикові накусочні (майданчики)
              </li>
            </ul>
          </div>

          <div className={styles.sectionTwo}>
            <p className={styles.title}>
              Засоби гігієни для брекетів
              <button
                className={styles.burgerMenuButton}
                onClick={() => toggleSection("sectionTwo")}
              >
                {activeSection === "sectionTwo" ? "▲" : "▼"}
              </button>
            </p>
            <ul className={styles.hygieneDetails}>
              <li className={styles.details}>
                Ортодонтичні набори для чистки брекетів
              </li>
              <li className={styles.details}>
                {" "}
                Ортодонтичні зубні щітки, йоршики
              </li>
              <li className={styles.details}>
                Флоси(зубна нитка для брекетів)
              </li>
            </ul>
          </div>
        </div>

        <div
          className={`${styles.sectionThree} ${
            activeSection === "sectionThree" ? styles.active : ""
          }`}
        >
          <p className={styles.title}>
            Матеріали для фіксації брекетів
            <button
              className={styles.burgerMenuButton}
              onClick={() => toggleSection("sectionThree")}
            >
              {activeSection === "sectionThree" ? "▲" : "▼"}
            </button>
          </p>
          <ul className={styles.hygieneDetails}>
            <li className={styles.details}>Матеріали для фіксації брекетів</li>
            <li className={styles.details}>Ортодонтичні ретрактори</li>
            <li className={styles.details}> Замки брекета</li>
            <li className={styles.details}> Ортодонтичні дуги для брекетів</li>
            <li className={styles.details}>
              {" "}
              Ортодонтичні кільця для брекетів
            </li>
            <li className={styles.details}> Лігатури для брекетів</li>
            <li className={styles.details}>
              Еластичні матеріали: ланцюжки, тяги для брекетів, сепараційні
              кільця
            </li>
            <li className={styles.details}> Ортодонтичні інструменти</li>
            <li className={styles.details}>
              Ортодонтичні пружини, стопора, кнопки, гачки
            </li>
            <li className={styles.details}> Ортодонтичні ретейнери</li>
          </ul>
        </div>

        <div
          className={`${styles.sectionFour} ${
            activeSection === "sectionFour" ? styles.active : ""
          }`}
        >
          <p className={styles.title}>
            Аксесуари для ортодона і стоматолога
            <button
              className={styles.burgerMenuButton}
              onClick={() => toggleSection("sectionFour")}
            >
              {activeSection === "sectionFour" ? "▲" : "▼"}
            </button>
          </p>
          <ul className={styles.accessoriesВetails}>
            <li className={styles.details}>Демонстраційні тіподонти </li>
            <li className={styles.details}>
              Контейнери для зубних протезів, пластинок, капи
            </li>
            <li className={styles.details}> Маски стоматологічні захисні </li>
            <li className={styles.details}> Окуляри стоматологічні захисні </li>
            <li className={styles.details}>
              {" "}
              Набори для ультразвукових чисток і інструменти
            </li>
          </ul>
        </div>

        <div
          className={`${styles.sectionFive} ${
            activeSection === "sectionFive" ? styles.active : ""
          }`}
        >
          <p className={styles.title}>
            Ортодонтичні розширювачі
            <button
              className={styles.burgerMenuButton}
              onClick={() => toggleSection("sectionFive")}
            >
              {activeSection === "sectionFive" ? "▲" : "▼"}
            </button>
          </p>
          <ul className={styles.accessoriesВetails}>
            <li className={styles.details}> Ортодонтичні розширювачі для зубів</li>
            <li className={styles.details}>
              {" "}
              Розширювачі для верхньої і нижньої щелепи
            </li>
          </ul>
        </div>

        <div
          className={`${styles.sectionSix} ${
            activeSection === "sectionSix" ? styles.active : ""
          }`}
        >
          <p className={styles.title}>
            Ортодонтичні пластини
            <button
              className={styles.burgerMenuButton}
              onClick={() => toggleSection("sectionSix")}
            >
              {activeSection === "sectionSix" ? "▲" : "▼"}
            </button>
          </p>
          <ul className={styles.accessoriesВetails}>
            <li className={styles.details}>Ортодонтичні пластини</li>
            <li className={styles.details}>
              {" "}
              Пластини для корекції прикусу
            </li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
};

export default BurgerMenu;

*/}