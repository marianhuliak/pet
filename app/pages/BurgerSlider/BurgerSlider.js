"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "./BurgerSlider.module.scss";
import { color } from "framer-motion";


const BurgerSlider = () => {
  return (
    <>
    
      <div className={styles.BurgerSliderContainer}>
      </div>
      <hr className={styles.customLineBurger} />
    </>
  );
};

export default BurgerSlider;
