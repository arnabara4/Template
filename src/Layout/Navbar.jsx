import React from "react";
import styles from "./styles/Navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <nav>
        <a
          href="#about"
          style={{ textDecoration: "none", color: "inherit" }}>
          <li
            to="/about"
            className={styles.nav}>
            ABOUT US
          </li>
        </a>
        <a
          href="#attractions"
          style={{ textDecoration: "none", color: "inherit" }}>
          <li
            to="/attractions"
            className={styles.nav}>
            ATTRACTIONS
          </li>
        </a>
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
      </nav>
      {/* <div className={styles.login}>LOGIN / JOIN</div>
      <button className={styles.book}>BOOK A STAY</button> */}
    </div>
  );
};

export default Navbar;
