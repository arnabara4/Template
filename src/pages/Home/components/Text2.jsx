import React from "react";
import styles from "../styles/text.module.css";
import Carousel from "./Carousel/Carousel";

const Text2 = () => {
  return (
    <div 
    id="attractions"
    className={styles.txt2Wrapper}>
      <div className={styles.txt2}>
        <span>- ATTRACTIONS</span>
        <p>
          Step into India's inaugural luxury haven, a 5-star hotel in Mumbai's
          Colaba. Indulge in a symphony of culinary delights at our nine
          legendary bars and restaurants, and revel in the stellar service of
          our devoted butlers and concierge. This is where opulence meets
          tradition, promising an unforgettable experience.
        </p>
      </div>
      <Carousel />
    </div>
  );
};

export default Text2;
