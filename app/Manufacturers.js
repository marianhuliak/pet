"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "./Manufacturers.module.scss";
import canvas from "./images/smallWhiteCanvas.svg";

const Manufacturers = () => {
  return (
    <>
      <div className={styles.manufacturersContainer}>
        <div>
          <p className={styles.manufacturersText}>Виробники</p>
        </div>
        <div lassName={styles.galleryCntainer} >
          <Image
            src={canvas}
            alt="White Canvas"
            className={styles.icon}
            width={200}
            height={200}
          />
          <Image
            src={canvas}
            alt="White Canvas"
            className={styles.icon}
            width={200}
            height={200}
          />
          <Image
            src={canvas}
            alt="White Canvas"
            className={styles.icon}
            width={200}
            height={200}
          />
          <Image
            src={canvas}
            alt="White Canvas"
            className={styles.icon}
            width={200}
            height={200}
          />
           <Image
            src={canvas}
            alt="White Canvas"
            className={styles.icon}
            width={200}
            height={200}
          />
        </div>
      </div>
      <hr className={styles.customLineManufacturers} />
    </>
  );
};

export default Manufacturers;
