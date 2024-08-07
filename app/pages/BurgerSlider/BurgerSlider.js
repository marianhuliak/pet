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

import { motion } from "framer-motion";

const burgerVariants = {
  hidden: { opacity: 0,y:0,transition: { type: "spring", duration: 2 } },
  visible: { opacity: 1,y: 20, transition: {  duration: 1 } },
  exit: { opacity: 0, y: 40, transition: { duration: 1 }}
};

const BurgerSlider = () => {
  return (
    <motion.section
      className={styles.BurgerSliderContainer}
      whileInView="visible"
      viewport={{ amount: 0.4 }}
      variants={burgerVariants}
    >
      <div className={styles.BurgerSliderContainer}>
        <div className={styles.fullScreen}>
          <Swiper
            className={styles.mySwiper}
            loop={true}
            autoplay={{
              delay: 3000,
            }}
            modules={[Autoplay]}
          >
            <SwiperSlide>
              <Image
                src={photo1}
                ß
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
    </motion.section>
  );
};

export default BurgerSlider;