"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "./Manufacturers.module.scss";
import canvas from "../../images/smallWhiteCanvas.svg";
import Carrousel from "../../pages/features/Carrousel/Carrousel.js";


const imagesLarge = [
  { src: "https://storage.googleapis.com/pod_public/1300/169106.jpg", alt: "Large Image 1" },
  { src: "https://hips.hearstapps.com/hmg-prod/images/rabbit-breeds-american-white-1553635287.jpg?crop=0.976xw:0.651xh;0.0242xw,0.291xh&resize=980:*", alt: "Large Image 2" },
  { src: "https://static.wixstatic.com/media/nsplsh_37d29875d2fc48e0bdc1baeed3e07156~mv2.jpg/v1/fit/w_320%2Ch_1000%2Cal_c%2Cq_80,enc_auto/file.jpg", alt: "Large Image 3" },
  { src: "https://static.wixstatic.com/media/nsplsh_37d29875d2fc48e0bdc1baeed3e07156~mv2.jpg/v1/fit/w_320%2Ch_1000%2Cal_c%2Cq_80,enc_auto/file.jpg", alt: "Large Image 4" },
  { src: "https://storage.googleapis.com/pod_public/1300/169106.jpg", alt: "Large Image 1" },
  { src: "https://hips.hearstapps.com/hmg-prod/images/rabbit-breeds-american-white-1553635287.jpg?crop=0.976xw:0.651xh;0.0242xw,0.291xh&resize=980:*", alt: "Large Image 2" },
  { src: "https://static.wixstatic.com/media/nsplsh_37d29875d2fc48e0bdc1baeed3e07156~mv2.jpg/v1/fit/w_320%2Ch_1000%2Cal_c%2Cq_80,enc_auto/file.jpg", alt: "Large Image 3" },
  { src: "https://static.wixstatic.com/media/nsplsh_37d29875d2fc48e0bdc1baeed3e07156~mv2.jpg/v1/fit/w_320%2Ch_1000%2Cal_c%2Cq_80,enc_auto/file.jpg", alt: "Large Image 4" },
];

const Manufacturers = () => {
  return (
    <>
      <div className={styles.manufacturersContainer}>
      <div className={styles.fullScreen}>
        <div>
          <p className={styles.manufacturersText}>Виробники</p>
        </div>
        <div lassName={styles.galleryCntainer}>
        <Carrousel images={imagesLarge} imageWidth="200px" imageHeight="200px" imageSpacing="12px" />
        </div>
      </div>
      </div>
      <hr className={styles.customLineManufacturers} />
    </>
  );
};

export default Manufacturers;
