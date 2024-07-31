"use client";

import React, { useState } from "react";
import Image from "next/image";
import logo from "./images/mainLogo.svg";
import searchLight from "./images/searchLight.svg";
import basket from "./images/basket.svg";
import userIcon from "./images/userIcon.svg";
import MenuButton from "./features/MenuButton.js";
import styles from "./Header.module.scss";
import BurgerSlider from "./BurgerSlider";
import bergerIcon from "./images/burgerMenu.svg";

const Header = () => {
  const [inputValue, setValue] = useState("");
  const [isOpen, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className={styles.headerContainer}>
      <div className={styles.logoContainer}>
        <Image src={logo} alt="Main Logo" className={styles.logoImage} />
        <p className={styles.logoText}>orthostore</p>
      </div>

      <div className={styles.searchAndMenuContainer}>
        <div className={styles.searchAndInfo}>
          <div className={styles.searchContainer}>
            {/*<Image
            src={searchLight}
            alt="Search Icon"
            className={styles.searchIcon}
            width={30}
            height={30}
          />*/}
            <input
              className={styles.searchInput}
              value={inputValue}
              onChange={handleChange}
              type="text"
              placeholder="Пошук"
            />
          </div>

          <div className={styles.contactInfo}>
            <p>+066 210 0095</p>
            <p>Пн-Пт: 9:00-18:00</p>
          </div>

          <div className={styles.iconsContainer}>
            <Image
              src={basket}
              alt="Basket Icon"
              className={styles.icon}
              width={30}
              height={30}
            />
            <Image
              src={userIcon}
              alt="User Icon"
              className={styles.icon}
              width={30}
              height={30}
            />
          </div>
        </div>

        <div className={styles.menuContainer}>
          <Image
            src={bergerIcon}
            alt="berger Icon"
            className={styles.bergerIcon}
            width={30}
            height={30}
          />

          <div className={styles.menuItems}>
            <p>Про нас</p>
            <p>Галерея</p>
            <p>Виробник</p>
            <p>Контакти</p>
          </div>
        </div>
      </div>

      {/*<hr className={styles.customLine} />*/}

      {/*<BurgerSlider/>*/}
    </div>
  );
};

export default Header;
