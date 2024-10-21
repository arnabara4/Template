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
        <li
          to="/destination"
          className={styles.nav}>
          DESTINATION
        </li>
        <a
          href="#Rooms"
          style={{ textDecoration: "none", color: "inherit" }}>
          <li
            to="/hotels"
            className={styles.nav}>
            HOTELS
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
        <li
          to="/offers"
          className={styles.nav}>
          OFFERS
        </li>
        <li
          to="/memberships"
          className={styles.nav}>
          MEMBERSHIPS
        </li>
        <li
          to="/more"
          className={styles.nav}>
          MORE
        </li>
      </nav>
      <div className={styles.login}>LOGIN / JOIN</div>
      <button className={styles.book}>BOOK A STAY</button>
    </div>
  );
};

export default Navbar;
