import React from "react";
import styles from "../styles/Head.module.css";
import separator from "../assets/Separator.png";
import gallery from "../assets/Group.png";
const NamaGal = () => {
  return (
    <div className={styles.NameGal}>
      <img
        className={styles.Name}
        src={separator}
        alt="pic"
      />
      The Camp Kasbah
      {/* <div className={styles.Gallery}>
        <img
          src={gallery}
          alt="pic"
        />
        GALLERY
      </div> */}
    </div>
  );
};

export default NamaGal;
