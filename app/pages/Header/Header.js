"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo from "../../images/mainLogo.svg";
import basket from "../../images/basket.svg";
import userIcon from "../../images/userIcon.svg";
import styles from "./Header.module.scss";
import BurgerMenu from "../features/BurgerMenu/BurgerMenu.js";
import BurgerMenu2 from "../features/BurgerMenu/BurgerMenu2.js";
import burgerIcon from "../../images/burgerMenu.svg";
import { AnimatePresence } from "framer-motion";

const Header = () => {
  const [inputValue, setValue] = useState("");
  const [isOpen, setOpen] = useState(false);
  const [isScreenWide, setIsScreenWide] = useState(false);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const clickHandler = () => {
    setOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsScreenWide(window.innerWidth > 730);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className={styles.headerr}>
      <div className={styles.headerContainer}>
        <div className={styles.fullScreen}>
          <div className={styles.headerLogoContainer}>
            <div className={styles.logoContainer}>
              <Image src={logo} alt="Main Logo" className={styles.logoImage} />
              <p className={styles.logoText}>orthostore</p>
            </div>
          </div>

          <div className={styles.searchAndMenuContainer}>
            <div className={styles.searchAndInfo}>
              <div className={styles.contactInfo}>
                <a href="tel:+1234567890" className={styles.firstContactInfo}>
                  +066 210 0095
                </a>
                <p className={styles.secondContactInfo}>Пн-Пт: 9:00-18:00</p>
              </div>
              <div>
                <div className={styles.endOfContainer}>
                  <div className={styles.searchContainer}>
                    <input
                      className={styles.searchInput}
                      value={inputValue}
                      onChange={handleChange}
                      type="text"
                      placeholder="Пошук"
                    />
                  </div>

                  <div className={styles.iconsContainer}>
                    <Image
                      src={basket}
                      alt="Basket Icon"
                      className={styles.icon}
                    />
                    <Image
                      src={userIcon}
                      alt="User Icon"
                      className={styles.icon}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.menuContainer}>
              <div className={styles.burgerIconContainer}>
                <Image
                  src={burgerIcon}
                  alt="burger Icon"
                  className={styles.burgerIcon}
                  onClick={clickHandler}
                />
              </div>

              <ul className={styles.menuItems}>
                <li className={styles.menuItem}>Про нас</li>
                <li className={styles.menuItem}>Виробник</li>
                <li className={styles.menuItem}>Відгуки</li>
                <li className={styles.menuItem}>Доставка і оплата</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <hr className={styles.customLine} />
      <AnimatePresence>
        {isOpen && (isScreenWide ? <BurgerMenu /> : <BurgerMenu2 />)}
      </AnimatePresence>
    </header>
  );
};

export default Header;