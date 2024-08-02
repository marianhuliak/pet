"use client";

import React from "react";
import styles from "./BurgerMenu.module.scss";

const BurgerMenu = () => {
  return (
    <div className={styles.burgerMenuContainer}>
      <div className={styles.fullScreen}>
        <div className={styles.section}>
          <p className={styles.title}>Брекети</p>
          <p className={styles.details}>
            самолігуючі
            <br /> естетичні
            <br /> лінгвальні
            <br /> металеві
            <br /> сапфірові пластикові накусочні (майданчики)
          </p>
          <p className={styles.title}>Засоби гігієни для брекетів</p>
          <p className={styles.details}>
            Ортодонтичні набори для чистки брекетів
            <br /> Ортодонтичні зубні щітки, йоршики
            <br /> Флоси(зубна нитка для
            <br /> брекетів)
          </p>
        </div>
        <div className={styles.section}>
          <p className={styles.details}>
            Матеріали для фіксації <br /> брекетів <br /> Ортодонтичні
            ретрактори <br /> Замки брекета <br />
            Ортодонтичні дуги для <br /> брекетів
            <br /> Ортодонтичні кільця для <br /> брекетів <br /> Лігатури для
            брекетів
            <br /> Еластичні матеріали:
            <br /> ланцюжки, тяги для брекетів, сепараційні кільця <br />{" "}
            Ортодонтичні інструменти <br /> Ортодонтичні пружини,
            <br /> стопора, <br /> кнопки, гачки <br /> Ортодонтичні ретейнери
          </p>
        </div>
        <div className={styles.section}>
          <p className={styles.title}>Аксесуари для ортодона і стоматолога</p>
          <p className={styles.details}>
            Демонстраційні тіподонти Контейнери
            <br /> для зубних протезів, пластинок, капи Маски стоматологічні
            захисні
            <br /> Окуляри стоматологічні захисні Ортодонтичний віск для
            брекетів Гвинти
            <br /> ортодонтичні Пластини для кап Ортодонтичні мікроімпланти
            Захисні капи
          </p>
        </div>
        <div className={styles.section}>
          
          <p className={styles.details}>Ортодонтичні лицьові маски Матеріали для детальної фотографії
            <br /> Сепараційні інструменти</p>
            <p className={styles.title}>Ортодонтичні трейнери для зубів</p>
          <p className={styles.details}>
            Myobrace A1, A2, A3, T1, T2, T3, T3N,
            TA, 13, i3N, K1, K2, K3, J1, J2, J3 Трейнера Т4К, T4A, INFANT
            Трейнера Т4В, Т4В 2, TMJ, T4F, TMD, Bruxogard
          </p>
        </div>
      </div>
    </div>
  );
};

export default BurgerMenu;
