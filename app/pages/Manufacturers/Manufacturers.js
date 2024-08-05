"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "./Manufacturers.module.scss";
import canvas from "../../images/smallWhiteCanvas.svg";
import Carrousel from "../../pages/features/Carrousel/Carrousel.js";
import { motion } from "framer-motion";

const imagesLarge = [
  {
    src: "https://orthostore.com.ua/image/cache/catalog/manufacturer/part4-205x220.jpg",
    alt: "Large Image 1",
  },
  {
    src: "https://orthostore.com.ua/image/cache/catalog/proizvoditeli/logo_top-205x220.gif",
    alt: "Large Image 3",
  },
  {
    src: "https://orthostore.com.ua/image/cache/catalog/proizvoditeli/opro-logo-web-300x240-205x220.jpg",
    alt: "Large Image 1",
  },
  {
    src: "https://orthostore.com.ua/image/cache/catalog/proizvoditeli/biodinamicalogo-205x220.jpg",
    alt: "Large Image 1",
  },
  {
    src: "https://orthostore.com.ua/image/cache/catalog/proizvoditeli/images%281%29-205x220.png",
    alt: "Large Image 3",
  }
];


const manufacturersVariants = {
  hidden: { opacity: 0, y: -100 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", duration: 3.5 } },
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
        <hr className={styles.customLineManufacturers} />
        <div className={styles.manufacturersContainer}>
          <div className={styles.fullScreen}>
            <div>
              <p className={styles.manufacturersText}>Виробники</p>
            </div>
            <div lassName={styles.galleryCntainer}>
              <Carrousel
                images={imagesLarge}
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
