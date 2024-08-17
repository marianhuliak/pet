"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "./Manufacturers.module.scss";
import Carousel from "../features/Carousel/Carousel.js";
import { motion } from "framer-motion";
import imagesList from "./images";

const manufacturersVariants = {
  hidden: { opacity: 0,  transition: { type: "spring", duration: 0.5 } },
  visible: { opacity: 1, transition: { duration:  0.5  } },
  exit: { opacity: 0,  transition: { duration:  0.5  } },
};
const Manufacturers = () => {
  return (
    <>
      <motion.section
        className={styles.manufacturers}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: "auto" }}
        variants={manufacturersVariants}
      >
        <div className={styles.manufacturers}>
          <div className={styles.customLineContainer}>
            <hr className={styles.customLineManufacturers} />
          </div>
          <div className={styles.manufacturersContainer}>
            <div className={styles.fullScreen}>
              <div>
                <p className={styles.manufacturersText}>Виробники</p>
              </div>
              <div lassName={styles.galleryCntainer}>
                <Carousel
                  images={imagesList}
                  imageWidth="200px"
                  imageHeight="200px"
                  imageSpacing={12}
                />
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default Manufacturers;
