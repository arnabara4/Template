import React from "react";
import styles from "../styles/Header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <video
        autoPlay
        muted
        playsInline
        loop>
        <source
          src="/casba.webm"
          type="video/webm"
        />
      </video>
    </div>
  );
};

export default Header;
