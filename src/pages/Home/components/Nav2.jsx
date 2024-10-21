import React from "react";
import styles from "../styles/content.module.css";
import { Link } from "react-router-dom";

const Nav2 = ({ setSec, sec }) => {
  return (
    <div className={styles.Nav2wrapper}>
      <ul>
        {/* <Link to="/rooms"> */}
        <a href="#Rooms">
          <li
            onClick={() => setSec("rooms")}
            className={sec === "rooms" ? styles.selected : styles.un}>
            ROOMS
          </li>
        </a>
        {/* </Link> */}
        {/* <Link to="/"> */}
        <li
          onClick={() => setSec("overview")}
          className={sec === "overview" ? styles.selected : styles.un}>
          OVERVIEW
        </li>
        {/* </Link> */}
        {/* <li
          // onClick={() => setSec("offers")}
          className={sec === "offers" ? styles.selected : styles.un}>
          OFFERS
        </li> */}
        {/* <Link to="/dining"> */}
        <a href="#Cafe">
          <li
            onClick={() => setSec("dining")}
            className={sec === "dining" ? styles.selected : styles.un}>
            DINING
          </li>
        </a>
        {/* </Link> */}
        {/* <li
          // onClick={() => setSec("venues")}
          className={sec === "venues" ? styles.selected : styles.un}>
          VENUES
        </li> */}
        {/* <li
          // onClick={() => setSec("wellness")}
          className={sec === "wellness" ? styles.selected : styles.un}>
          WELLNESS
        </li> */}
        {/* <Link to="/experience"> */}
        <li
          onClick={() => setSec("experience")}
          className={sec === "experience" ? styles.selected : styles.un}>
          EXPERIENCE
        </li>
        {/* </Link>
        <Link to="/gallery"> */}
        <li
          onClick={() => setSec("gallery")}
          className={sec === "gallery" ? styles.selected : styles.un}>
          GALLERY
        </li>
        {/* </Link>
        <Link> */}
        <li
          // onClick={() => setSec("attractions")}
          className={sec === "attractions" ? styles.selected : styles.un}>
          ATTRACTIONS
        </li>
        {/* </Link> */}
      </ul>
    </div>
  );
};

export default Nav2;
