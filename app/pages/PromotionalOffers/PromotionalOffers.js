"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "./PromotionalOffers.module.scss";
import Carrousel from "../../pages/features/Carrousel/Carrousel.js";
import { motion } from "framer-motion";
import imagesList from "./images"; 


const offersVariants = {
  hidden: { opacity: 1, y: -100 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", duration: 2 } },
  exit: { opacity: 0, y: 20, transition: { duration: 2 } },
};

const PromotionalOffers = () => {
  return (
    <>
      <motion.section
        className={styles.promotionalOffers}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.4 }}
        variants={offersVariants}
      >
        <hr className={styles.customLinePromotionalOffers} />
        <div className={styles.promotionalOffersContainer}>
          <div className={styles.fullScreen}>
            <div>
              <p className={styles.promotionalOffersText}>Акційні пропозиції</p>
            </div>
            <div lassName={styles.galleryCntainer}>
              <Carrousel
                images={imagesList}
                imageWidth="244px"
                imageHeight="321px"
                imageSpacing={30}
              />
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default PromotionalOffers;

{
  /*"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "./PromotionalOffers.module.scss";
import Carrousel from "../../pages/features/Carrousel/Carrousel.js";
import { motion } from "framer-motion";

/* 
const imagesLarge = [
  {
    src: "../../images/slideshow/01-2-1920x755.jpg",
    alt: "Large Image 1",
  },
  {
    src: "../../images/slideshow/04-1920x755.jpg",
    alt: "Large Image 2",
  },
  {
    src: "../../images/slideshow/05-1920x755.jpg",
    alt: "Large Image 3",
  },
  {
    src: "../../images/slideshow/banner-1920x755.jpg",
    alt: "Large Image 4",
  },
  {
    src: "../../images/slideshow/banner-nadijnist-sajt-1920x755.jpg",
    alt: "Large Image 1",
  }
];

/*

const offersVariants = {
  hidden: { opacity: 0, y: -100 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const PromotionalOffers = () => {
  return (
    <>
      <motion.section
        className={styles.promotionalOffers}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.4 }}
        variants={offersVariants}
      >
        <hr className={styles.customLinePromotionalOffers} />
        <div className={styles.promotionalOffersContainer}>
          <div className={styles.fullScreen}>
            <div>
              <p className={styles.promotionalOffersText}>Акційні пропозиції</p>
            </div>
            <div lassName={styles.galleryCntainer}>
              <Carrousel
                images={imagesLarge}
                imageWidth="244px"
                imageHeight="321px"
                imageSpacing={30}
              />
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default PromotionalOffers; */
}
