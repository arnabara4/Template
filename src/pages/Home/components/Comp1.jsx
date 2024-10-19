import React from "react";
import styles from "../styles/Comp1.module.css";
import Pic1 from "/pic1.webp";

const Text = () => {
  return (
    <div
      id="about"
      className={styles.txt1wrapper}>
      <div className={styles.txt1}>
        <span>- OUR LEGENDARY FLAGSHIP</span>
        <p>
          The Taj Mahal Palace, Mumbai, offers stunning views of the Gateway of
          India and Arabian Sea. Since 1903, it has hosted royalty and
          dignitaries, blending heritage with modern luxury. Enjoy opulent
          rooms, lush gardens, fine dining, and personalized services, all just
          an hour from the airport. Experience world-class hospitality in the
          heart of the city’s rich history.
        </p>
      </div>
      <img
        src={Pic1}
        alt="pic"
      />
    </div>
  );
};

export default Text;
