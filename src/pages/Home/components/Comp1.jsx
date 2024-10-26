import React from "react";
import styles from "../styles/Comp1.module.css";
import Pic1 from "/pic1.webp";

const Text = () => {
  return (
    <div
      id="about"
      className={styles.txt1wrapper}>
      <div className={styles.txt1}>
        <span>- ABOUT US</span>
        <p>

          {/* ISKO CHANGE KARNA HE  */}
          Welcome to Camp Kasbah, your ultimate escape into nature's beauty. Nestled beside a serene river with breathtaking scenic views, our property offers a unique blend of camping, glamping, and outdoor adventure. Enjoy the peace and tranquillity of riverside camping combined with the comforts of our luxurious glamping accommodations.<br></br>
At Camp Kasbah , reconnect with nature as you breathe in the fresh mountain air, dip your toes in the cool, natural water streams, and let the sounds of the river soothe you. Thrill-seekers can experience the excitement of river crossing or explore the pristine surroundings. Our team is here to make sure your stay is as comfortable and memorable as possible, with amenities designed for relaxation and adventure.

        </p>
      </div>
      
    </div>
  );
};

export default Text;
