import React from "react";
import styles from "./styles/Navbar.module.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [btn, setBtn] = useState(true);

  const toggleShow = () => {
    setShow(!show);
    setBtn(!btn);
  };

  return (
    <div className={styles.container}>
      <img
        className={styles.logo}
        src="/logo.png"
        alt="pic"
      />
      <nav className={show ? styles.show : ""}>
        <a
          href="#Rooms"
          style={{ textDecoration: "none", color: "inherit" }}>
          <li
            to="/hotels"
            className={styles.nav}>
            ROOMS
          </li>
        </a>
        <a
          href="#Cafe"
          style={{ textDecoration: "none", color: "inherit" }}>
          <li
            to="/dining"
            className={styles.nav}>
            DINING
          </li>
        </a>
        <a
          href="#attraction"
          style={{ textDecoration: "none", color: "inherit" }}>
          <li
            // to="/dining"
            className={styles.nav}>
            ATTRACTIONS
          </li>
        </a>
        <a
          href="#about"
          style={{ textDecoration: "none", color: "inherit" }}>
          <li
            // to="/dining"
            className={styles.nav}>
            ABOUT US
          </li>
        </a>
        <button className={styles.bookmobile}>BOOK A STAY</button>
      </nav>
      {/* <div className={styles.login}>LOGIN / JOIN</div> */}
      <button className={styles.book}>BOOK A STAY</button>
      <FontAwesomeIcon
        className={`${styles.menu_open} ${btn ? styles.btnshow : ""}`}
        icon={faBars}
        size="2x"
        color="white"
        onClick={() => {
          toggleShow();
        }}
      />
      <FontAwesomeIcon
        className={`${styles.menu_open} ${!btn ? styles.btnshow : ""}`}
        icon={faXmark}
        size="2x"
        color="white"
        onClick={() => toggleShow()}
      />
    </div>
  );
};

export default Navbar;
