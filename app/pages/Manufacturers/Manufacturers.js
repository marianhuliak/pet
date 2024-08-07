"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "./Manufacturers.module.scss";
import Carrousel from "../../pages/features/Carrousel/Carrousel.js";
import { motion } from "framer-motion";
import imagesList from "./images";

const manufacturersVariants = {
  hidden: { opacity: 0, y: 0, transition: { type: "spring", duration: 2 } },
  visible: { opacity: 1, y: 40, transition: { duration: 1 } },
  exit: { opacity: 0, y: 40, transition: { duration: 1 } },
};
const Manufacturers = () => {
  return (
    <>
      <motion.section
        className={styles.manufacturers}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.4 }}
        variants={manufacturersVariants}
      >
        <div className={styles.customLineContainer}>
          <hr className={styles.customLineManufacturers} />
        </div>
        <div className={styles.manufacturersContainer}>
          <div className={styles.fullScreen}>
            <div>
              <p className={styles.manufacturersText}>Виробники</p>
            </div>
            <div lassName={styles.galleryCntainer}>
              <Carrousel
                images={imagesList}
                imageWidth="200px"
                imageHeight="200px"
                imageSpacing={12}
              />
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default Manufacturers;
