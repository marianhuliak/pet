"use client";

import React from "react";
import Image from "next/image";
import styles from "./AboutUs.module.scss";
import tooth from "./images/tooth.png";


const AboutUs = () => {
  return (
    <>
      <div className={styles.AboutUsContainer}>
        <div className={styles.header}>
          <p className={styles.title}>Про нас</p>
          <p className={styles.subTitle}>ORTHOSTORE.COM.UA</p>
        </div>

        <div className={styles.infoContainer}>
          <div className={styles.infoItem}>
            <div className={styles.imageContainer}>
              <Image
                src={tooth}
                alt="Tooth"
                className={styles.tooth}
                width={55}
              />
            </div>
            <p className={styles.infoText}>Засновані у 2015 році</p>
          </div>
          <div className={styles.infoItem}>
            <div className={styles.imageContainer}>
              <Image
                src={tooth}
                alt="Tooth"
                className={styles.tooth}
                width={55}
              />
            </div>
            <p className={styles.infoText}>
              Займаємо лідируючі позиції на вітчизняному ринку ортодонтії
            </p>
          </div>
          <div className={styles.infoItem}>
            <div className={styles.imageContainer}>
              <Image
                src={tooth}
                alt="Tooth"
                className={styles.tooth}
                width={35}
              />
            </div>
            <p className={styles.infoText}>
              Постачаємо високоякісну ортодонтичну продукцію відомих світових
              брендів для ортодонтів та клінік по всій Україні
            </p>
          </div>
        </div>
      </div>
      <hr className={styles.customLineAboutUs} />
    </>
  );
};

export default AboutUs;
