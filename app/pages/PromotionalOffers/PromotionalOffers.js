"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "./PromotionalOffers.module.scss";
import Carrousel from "../../pages/features/Carrousel/Carrousel.js";
import { motion } from "framer-motion";
import imagesList from "./images"; 
import Manufacturers from "../Manufacturers/Manufacturers";


const offersVariants = {
  hidden: { opacity: 0,transition: { type: "spring", duration: 2 } },
  visible: { opacity: 1, transition: {  duration: 1 } },
  exit: { opacity: 0,  transition: { duration: 2 }}
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