"use client";

import React from "react";
import ToothModel from "../../pages/features/ToothModel/ToothModel";
import styles from "./AboutUs.module.scss";

const AboutUs = () => {
  return (
    <>
      <div className={styles.AboutUsContainer}>
        <div className={styles.fullScreen}>
          <div className={styles.header}>
            <p className={styles.title}>Про нас</p>
          </div>

          <div className={styles.infoContainer}>
            <div className={styles.infoItem}>
              <div className={styles.imageContainer}>
                


              </div>
              <p className={styles.infoText}>Засновані у 2015 році</p>
            </div>
            <div className={styles.infoItem}>
              <div className={styles.imageContainer}>
                
                

              </div>
              <p className={styles.infoText}>
                Займаємо лідируючі позиції на вітчизняному ринку ортодонтії
              </p>
            </div>
            <div className={styles.infoItem}>
              <div className={styles.imageContainer}>
                
                

                
              </div>
              <p className={styles.infoText}>
                Постачаємо високоякісну ортодонтичну продукцію відомих <br />{" "}
                світових брендів для ортодонтів та клінік по всій Україні
              </p>
            </div>
          </div>
          <div className={styles.fullScreen}></div>
        </div>
      </div>
      <hr className={styles.customLineAboutUs} />
    </>
  );
};

export default AboutUs;
