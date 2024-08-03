import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Navigation, Autoplay } from "swiper/modules";
import styles from "./Carrousel.module.scss";

const Carrousel = ({ images, imageWidth, imageHeight, imageSpacing }) => {
  return (
    <div className={styles.carouselContainer}>
      <Swiper
        slidesPerView="auto"
        spaceBetween={imageSpacing || 30}
        centeredSlides={false}
        loop={true}
        navigation={true}
        autoplay={{
          delay: 5000, 
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
    </div>
  );
};

export default Carrousel;
