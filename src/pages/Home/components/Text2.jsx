import React from "react";
import styles from "../styles/text.module.css";
import Carousel from "./Carousel/Carousel";

const Text2 = () => {
  return (
    <div
      id="attraction"
      className={styles.txt2Wrapper}>
      <div className={styles.txt2}>
        <span>- HIGHLIGHTS</span>
        <p>
          At Camp Kasbah , reconnect with nature as you breathe in the fresh
          mountain air, dip your toes in the cool, natural water streams, and
          let the sounds of the river soothe you. Thrill-seekers can experience
          the excitement of river crossing or explore the pristine surroundings.
          Our team is here to make sure your stay is as comfortable and
          memorable as possible, with amenities designed for relaxation and
          adventure.
        </p>
      </div>
      <Carousel />
    </div>
  );
};

export default Text2;
