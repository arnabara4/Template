import React from "react";
import styles from "../styles/Header.module.css";
import NamaGal from "./NamaGal";

const Header = () => {
  return (
    <div className={styles.header}>
      <video
        autoPlay
        muted
        playsInline
        loop
        preload="auto">
        <source
          src="/casba.mp4"
          type="video/mp4"
        />
      </video>
      <NamaGal />
    </div>
  );
};

export default Header;
