"use client";

import React from "react";
import ToothModel from "../features/ToothModel/ToothModel";
import styles from "./AboutUs.module.scss";
import { motion } from "framer-motion";

const aboutUsVariants = {
  hidden: { opacity: 0, y: 0, transition: { type: "spring", duration: 2 } },
  visible: { opacity: 1, y: 40, transition: { duration: 1 } },
  exit: { opacity: 0, y: 40, transition: { duration: 1 } },
};

const AboutUs = () => {
  return (
    <>
      <motion.section
        className={styles.aboutUs}
        whileInView="visible"
        viewport={{ amount: 0.4 }}
        variants={aboutUsVariants}
      >
        <div className={styles.customLineContainer}>
          <hr className={styles.customLineAboutUs} />
        </div>
        <div className={styles.AboutUsContainer}>
          <div className={styles.fullScreen}>
            <div className={styles.header}>
              <p className={styles.title}>Про нас</p>
            </div>

            <div className={styles.infoContainer}>
              <div className={styles.infoItem}>
                <div >
                  <ToothModel  />
                </div>
                <p className={styles.infoText}>Засновані у 2015 році</p>
              </div>
              <div className={styles.infoItem}>
                <div className={styles.imageContainer}>
                  <ToothModel />
                </div>
                <p className={styles.infoText}>
                  Займаємо лідируючі позиції на вітчизняному ринку ортодонтії
                </p>
              </div>
              <div className={styles.infoItem}>
                <div className={styles.imageContainer}>
                  <ToothModel />
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
      </motion.section>
    </>
  );
};

export default AboutUs;