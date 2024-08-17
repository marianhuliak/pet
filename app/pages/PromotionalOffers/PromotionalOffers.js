"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "./PromotionalOffers.module.scss";
import Carousel from "../features/Carousel/Carousel.js";
import { motion } from "framer-motion";
import imagesList from "./images"; 
import Manufacturers from "../Manufacturers/Manufacturers";


const offersVariants = {
  hidden: { opacity: 0,transition: { type: "spring", duration:  0.5  } },
  visible: { opacity: 1, transition: {  duration:  0.5  } },
  exit: { opacity: 0,  transition: { duration:  0.5  }}
};

const PromotionalOffers = () => {
  return (
    <>
      <motion.section
        className={styles.promotionalOffers}
        whileInView="visible"
        initial="hidden"
        viewport={{amount: "auto" }}
        variants={offersVariants}
      > 
        <hr className={styles.customLinePromotionalOffers} />
        <div className={styles.promotionalOffersContainer}>
          <div className={styles.fullScreen}>
            <div>
              <p className={styles.promotionalOffersText}>Акційні пропозиції</p>
            </div>
            <div lassName={styles.galleryCntainer}>
              <Carousel
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