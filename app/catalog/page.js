"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import styles from "./page.module.scss";
import Header from "../pages/Header/Header.js";
import Footer from "../pages/Footer/Footer.js";
import Link from "next/link";

const mainTitle = "Брекети";

const Catalog = ({ category = mainTitle }) => {
  return (
    <div>
      <Header />

      <div className={styles.catalogContainer}>
        <div className={styles.sectionOne}>
          <div className={styles.sections}>
            <div className={styles.sectionContainer}>
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

            <div className={styles.sectionContainer}>
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
                  {" "}
                  Флоси (зубна нитка для брекетів)
                </li>
                <li className={styles.details}>
                  {" "}
                  Матеріали для фіксації брекетів
                </li>
                <li className={styles.details}> Ортодонтичні ретрактори</li>
                <li className={styles.details}> Замки брекета</li>
                <li className={styles.details}>
                  {" "}
                  Ортодонтичні дуги для брекетів
                </li>
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

            <div className={styles.sectionContainer}>
              <p className={styles.title}>
                Аксесуари для ортодона і стоматолога
              </p>

              <ul>
                <li className={styles.details}>Демонстраційні тіподонти</li>
                <li className={styles.details}>
                  Контейнери для зубних протезів, пластинок, капи
                </li>
                <li className={styles.details}>
                  {" "}
                  Маски стоматологічні захисні
                </li>
                <li className={styles.details}>
                  Окуляри стоматологічні захисні
                </li>
                <li className={styles.details}>
                  Ортодонтичний віск для брекетів
                </li>
                <li className={styles.details}> Гвинти ортодонтичні</li>
                <li className={styles.details}> Пластини для кап</li>
                <li className={styles.details}>Ортодонтичні мікроімпланти</li>
                <li className={styles.details}> Захисні капи</li>
                <li className={styles.details}>Ортодонтичні лицьові маски</li>
                <li className={styles.details}>
                  Матеріали для детальної фотографії
                </li>
                <li className={styles.details}> Сепараційні інструменти</li>
              </ul>
            </div>

            <div className={styles.sectionContainer}>
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
        </div>

        <div className={styles.sectionTwo}>
          <h2 className={styles.categoryTitle}>{category}</h2>
          <div className={styles.productList}>
            <div className={styles.productItem}>
              <p className={styles.productName}>Кнопка лінгвальна овальна</p>
              <p className={styles.productPrice}>₴400</p>
              <button className={styles.addToCartButton}>В кошик</button>
            </div>
            <div className={styles.productItem}>
              <p className={styles.productName}>Кнопка лінгвальна овальна</p>
              <p className={styles.productPrice}>₴400</p>
              <button className={styles.addToCartButton}>В кошик</button>
            </div>
            <div className={styles.productItem}>
              <p className={styles.productName}>Кнопка лінгвальна овальна</p>
              <p className={styles.productPrice}>₴400</p>
              <button className={styles.addToCartButton}>В кошик</button>
            </div>
            <div className={styles.productItem}>
              <p className={styles.productName}>Кнопка лінгвальна овальна</p>
              <p className={styles.productPrice}>₴400</p>
              <button className={styles.addToCartButton}>В кошик</button>
            </div>
            <div className={styles.productItem}>
              <p className={styles.productName}>Кнопка лінгвальна овальна</p>
              <p className={styles.productPrice}>₴400</p>
              <button className={styles.addToCartButton}>В кошик</button>
            </div>
            <div className={styles.productItem}>
              <p className={styles.productName}>Кнопка лінгвальна овальна</p>
              <p className={styles.productPrice}>₴400</p>
              <button className={styles.addToCartButton}>В кошик</button>
            </div>
            <div className={styles.productItem}>
              <p className={styles.productName}>Кнопка лінгвальна овальна</p>
              <p className={styles.productPrice}>₴400</p>
              <button className={styles.addToCartButton}>В кошик</button>
            </div>
            <div className={styles.productItem}>
              <p className={styles.productName}>Кнопка лінгвальна овальна</p>
              <p className={styles.productPrice}>₴400</p>
              <button className={styles.addToCartButton}>В кошик</button>
            </div>
            <div className={styles.productItem}>
              <p className={styles.productName}>Кнопка лінгвальна овальна</p>
              <p className={styles.productPrice}>₴400</p>
              <button className={styles.addToCartButton}>В кошик</button>
            </div>
          </div>
          <button className={styles.showMore}>Показати більше</button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Catalog;
