import React from "react";
import styles from "./styles/Navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <img
        className={styles.logo}
        src="/logo.png"
        alt="pic"
      />
      <nav>
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
            CAFE
          </li>
        </a>
      </nav>
      {/* <div className={styles.login}>LOGIN / JOIN</div>
      <button className={styles.book}>BOOK A STAY</button> */}
    </div>
  );
};

export default Navbar;
