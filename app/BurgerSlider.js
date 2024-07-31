"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "./BurgerSlider.module.scss";

const BurgerSlider = () => {
  return (
    <>
    <div className={styles.BurgerSliderContainer}>
    <hr className={styles.customLineBurger}/>
    </div>
    </>
  );
};

export default BurgerSlider;
