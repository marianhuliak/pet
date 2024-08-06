"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";
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
        <Swiper
          className={styles.mySwiper}
          loop={true}
          
        autoplay={{
          delay: 3000,
        }}
        modules={[ Autoplay]}
        >
          <SwiperSlide>
            <Image
              src={photo1}
              alt="Photo 1"
              style={{ width: "100%", height: "auto" }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={photo2}
              alt="Photo 2"
              style={{ width: "100%", height: "auto" }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={photo3}
              alt="Photo 3"
              style={{ width: "100%", height: "auto" }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={photo4}
              alt="Photo 4"
              style={{ width: "100%", height: "auto" }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={photo5}
              alt="Photo 5"
              style={{ width: "100%", height: "auto" }}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default BurgerSlider;
