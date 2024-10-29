import React from "react";
import styles from "../styles/Header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <video
        autoPlay
        muted
        playsInline
        loop
        preload="none"
        poster="/poster.jpg">
        <source
          src="/casba.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  );
};

export default Header;
