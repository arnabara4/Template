import React from "react";
import styles from "../styles/Header.module.css";
import NamaGal from "./NamaGal.jsx";
import Info from "./Info.jsx";

const Header = () => {
  return (
    <div className={styles.header}>
      <NamaGal />
      <Info />
    </div>
  );
};

export default Header;
