"use client";

import React from "react";
import Image from "next/image";
import styles from "./Footer.module.scss";
import instagramLogo from "../../images/instagramLogo.svg";
import youTubeLogo from "../../images/youTubeLogo.svg";
import facebookLogo from "../../images/facebookLogo.svg";
import telegramLogo from "../../images/telegramLogo.svg"
import { motion } from "framer-motion";

const footerVariants = {
  hidden: { opacity: 0,transition: { type: "spring", duration:  0.5  } },
  visible: { opacity: 1,  transition: {  duration:  0.5  } },
  exit: { opacity: 0, transition: { duration:  0.5  }}
};

const Footer = () => {
  
  return (
    <footer>
      <motion.footer
        className={styles.footer}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: "auto" }}
        variants={footerVariants}
      >
        <hr className={styles.customLineFooter} />
        <div className={styles.footerContainer}>
          <div className={styles.fullScreen}>
            <div>
              <div className={styles.containerData}>
                <div className={styles.hoursContainer}>
                  <p className={styles.heading}>Години роботи</p>
                  <p className={styles.hours}>
                    понеділок - п'ятниця <br /> 9.00 - 18.00 <br /> прийом
                    замовлень - ONLINE 24/7
                  </p>
                </div>

                <div className={styles.contactContainer}>
                  <p className={styles.heading}>Контактні дані</p>
                  <div className={styles.phoneNumbers}>
                    <a
                      href="tel:+380503039494"
                      className={styles.contactDetails}
                    >
                      050-303-94-94

                    </a>
                  </div>
                </div>
              </div>

              <div className={styles.socialMediaContainer}>
                <p className={styles.heading}>Соціальні мережі</p>
                <div className={styles.iconsContainer}>
                  <Image
                    src={instagramLogo}
                    alt="Instagram Logo"
                    className={styles.icon}
                  />
                  <Image
                    src={youTubeLogo}
                    alt="YouTube Logo"
                    className={styles.icon}
                  />
                  <Image
                    src={facebookLogo}
                    alt="Facebook Logo"
                    className={styles.icon}
                  />
                   <Image
                    src={telegramLogo}
                    alt="Telegram Logo"
                    className={styles.icon}
                  />
                </div>
              </div>
              <div className={styles.copyrightContainer}>
                <p className={styles.copyright}>
                  Copyright © Orthostore.com.ua - все для ортодонтії 2015 - 2024
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.footer>
    </footer>
  );
};

export default Footer;