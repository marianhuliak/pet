"use client";

import React from "react";
import ToothModel from "../features/ToothModel/ToothModel";
import styles from "./AboutUs.module.scss";
import { motion } from "framer-motion";

const aboutUsVariants = {
  hidden: { opacity: 0, transition: { type: "spring", duration: 0.5 } },
  visible: { opacity: 1, transition: { duration: 0.5 } },
  exit: { opacity: 0, transition: { duration: 0.5 } },
};

const AboutUs = () => {
  return (
    <>
      <motion.section
        className={styles.aboutUs}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: "auto" }}
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
              <div className={styles.imageContainer}>
                <ToothModel id="1" size="main"/>
              </div>

              <ul className={styles.infoItem}>
                <li className={styles.infoText}>Засновані у 2015 році</li>

                <li className={styles.infoText}>
                  Займаємо лідируючі позиції на вітчизняному ринку ортодонтії
                </li>

                <li className={styles.infoText}>
                  Постачаємо високоякісну ортодонтичну продукцію відомих <br />{" "}
                  світових брендів для ортодонтів та клінік по всій Україні
                </li>
              </ul>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default AboutUs;
