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
            <ul>
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
            <ul>
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
          <ul>
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
          <ul>
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
            <ul>
              <li className={styles.details}>Ортодонтичні лицьові маски</li>
              <li className={styles.details}>
                Матеріали для детальної фотографії
              </li>
              <li className={styles.details}> Сепараційні інструменти</li>
            </ul>
          </div>

          <div className={styles.sectionSix}>
            <p className={styles.title}>Ортодонтичні трейнери для зубів</p>
            <ul>
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
