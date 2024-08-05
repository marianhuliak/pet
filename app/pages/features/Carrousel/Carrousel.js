import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Navigation, Autoplay } from "swiper/modules";
import styles from "./Carrousel.module.scss";
import nextSlide from "../../../images/arrow_next.png";
import prevSlide from "../../../images/arrow_prev.png";
import Image from "next/image";


const Carrousel = ({ images, imageWidth, imageHeight, imageSpacing }) => {
  const swiperRef = useRef(null);

  const handlePrev = () => {
    swiperRef.current.swiper.slidePrev();
  };

  const handleNext = () => {
    swiperRef.current.swiper.slideNext();
  };

  return (
    <div className={styles.carouselContainer}>
      <Swiper
        ref={swiperRef}
        slidesPerView="auto"
        spaceBetween={imageSpacing || 30}
        centeredSlides={false}
        loop={true}
        autoplay={{
          delay: 3000,
        }}
        modules={[Navigation, Autoplay]}
        className={styles.mySwiper}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className={styles.swiperSlide}>
            <img
              src={image.src}
              alt={image.alt}
              style={{ width: imageWidth, height: imageHeight }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={styles.customPrev} onClick={handlePrev}>
        <Image src={prevSlide} alt="Previous" />
      </div>
      <div className={styles.customNext} onClick={handleNext}>
        <Image src={nextSlide} alt="Next" />
      </div>
    </div>
  );
};

export default Carrousel;
