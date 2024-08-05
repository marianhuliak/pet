"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import styles from "./BurgerSlider.module.scss";
import photo1 from "../../images/slideshow/01-2-1920x755.jpg";
import photo2 from "../../images/slideshow/04-1920x755.jpg";
import photo3 from "../../images/slideshow/05-1920x755.jpg";
import photo4 from "../../images/slideshow/banner-1920x755.jpg";
import photo5 from "../../images/slideshow/banner-nadijnist-sajt-1920x755.jpg";

const BurgerSlider = () => {
  return (
    <div className={styles.BurgerSliderContainer}>
      <div className={styles.fullScreen}>
        <Swiper className={styles.mySwiper}   
        autoplay={{
          delay: 3000,
        }}
        modules={ [Autoplay]} 
        >
          <SwiperSlide>
            <Image src={photo1} alt="Photo 1" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={photo2} alt="Photo 2" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={photo3} alt="Photo 3" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={photo4} alt="Photo 4" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={photo5} alt="Photo 5" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default BurgerSlider;

{
  /*"use client";

import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import Image from 'next/image';
import styles from './BurgerSlider.module.scss';
import photo1 from"../../images/slideshow/01-2-1920x755.jpg";
import photo2 from"../../images/slideshow/04-1920x755.jpg";
import photo3 from"../../images/slideshow/05-1920x755.jpg";
import photo4 from"../../images/slideshow/banner-1920x755.jpg";
import photo5 from"../../images/slideshow/banner-nadijnist-sajt-1920x755.jpg";


const BurgerSlider = () => {
  return (
    <>
    
      <div className={styles.BurgerSliderContainer}>
      <Swiper className="mySwiper">
        <SwiperSlide>
          <Image src={photo1.src} alt="Photo 1" layout="fill" objectFit="cover" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={photo2.src} alt="Photo 2" layout="fill" objectFit="cover" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={photo3.src} alt="Photo 3" layout="fill" objectFit="cover" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={photo4.src} alt="Photo 4" layout="fill" objectFit="cover" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={photo5.src} alt="Photo 5" layout="fill" objectFit="cover" />
        </SwiperSlide>
      </Swiper>
      </div>
    </>
  );
};

export default BurgerSlider;*/
}
