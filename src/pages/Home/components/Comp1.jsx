import React from "react";
import styles from "../styles/Comp1.module.css";
import Pic1 from "/pic1.jpg";

const Text = () => {
  return (
    <div
      id="about"
      className={styles.txt1wrapper}>
      <div className={styles.txt1}>
        <span>- CAMP KASBAH</span>
        <p>
          Welcome to Camp Kasbah, your ultimate escape into nature's beauty.
          Nestled beside a serene river with breathtaking scenic views, our
          property offers a unique blend of camping, glamping, and outdoor
          adventure. Enjoy the peace and tranquillity of riverside camping
          combined with the comforts of our luxurious glamping accommodations.
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
