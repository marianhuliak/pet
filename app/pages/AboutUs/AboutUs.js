"use client";

import React from "react";
import ToothModel from "../features/ToothModel/ToothModel";
import styles from "./AboutUs.module.scss";
import { motion } from "framer-motion";

const aboutUsVariants = {
  hidden: { opacity: 0, y: -100 },  
  visible: { opacity: 1, y: 0, transition: { type: "spring", duration: 0.8 } },  
};


const AboutUs = () => {
  return (
    <>
     {/* <motion.section
      className={styles.aboutUs}
      initial="hidden"  
      whileInView="visible"  
      viewport={{ amount: 0.4 }}  
      variants={aboutUsVariants}
    >  */}
      <hr className={styles.customLineAboutUs} />
      <div className={styles.AboutUsContainer}>
        <div className={styles.fullScreen}>
          <div className={styles.header}>
            <p className={styles.title}>Про нас</p>
          </div>
          

          <div className={styles.infoContainer}>
            <div className={styles.infoItem}>
              <div className={styles.imageContainer}>
              <ToothModel />
                


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
      
      {/*  </motion.section>  */}
    </>
  );
};

export default AboutUs;
