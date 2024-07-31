"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "./PromotionalOffers.module.scss";
import canvas from "./images/bigWhiteCanvas.svg";

const PromotionalOffers = () => {
  return (
    <>
      <div className={styles.promotionalOffersContainer}>
        <div>
          <p className={styles.promotionalOffersText}>Акційні пропозиції</p>
        </div>
        <div lassName={styles.galleryCntainer} >
          <Image
            src={canvas}
            alt="White Canvas"
            className={styles.icon}
            width={244}
            height={321}
          />
          <Image
            src={canvas}
            alt="White Canvas"
            className={styles.icon}
            width={244}
            height={321}
          />
          <Image
            src={canvas}
            alt="White Canvas"
            className={styles.icon}
            width={244}
            height={321}
          />
           <Image
            src={canvas}
            alt="White Canvas"
            className={styles.icon}
            width={244}
            height={321}
          />
        </div>
      </div>
      <hr className={styles.customLinePromotionalOffers} />
    </>
  );
};

export default PromotionalOffers;
