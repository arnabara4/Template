import React from "react";
import styles from "./styles/Footer.module.css";
import logo from "/logo.png";

const Footer = () => {
  return (
    <div className={styles.container}>
      <img
        className={styles.footlogo}
        src={logo}
      />
      <div className={styles.info}>
        <div className={styles.column}>
          <div className={styles.form}>
            <p>SUBSCRIBE FOR LATEST UPDATES</p>
            <form>
              <input
                type="email"
                placeholder="Enter your email Address"
              />
              <button className={styles.subscribe}>SUBSCRIBE</button>
            </form>
          </div>
          <div className={styles.elem}>
            <p className={styles.head}>FOR BOOOKING CONTACT</p>
            <div>
              <p>8448320407</p>
              <p>peaktrail.hotels@gmail.com</p>
            </div>
          </div>
          <div className={styles.elem}>
            <p className={styles.head}>CUSTOMER SUPPORT</p>
            <div>
              <p>8448320407</p>
              <p>peaktrail.hotels@gmail.com</p>
            </div>
          </div>
        </div>
        <div className={styles.linkcolumn}>
          <p>QUICK LINKS</p>
          <ul>
            <li>Hotels</li>
            <li>Dining</li>
            <li>Wellness</li>
            <li>
              Timeless <br /> Wedding
            </li>
            <li>Event Venues</li>
            <li>Taj Magazine</li>
            <li>Sitemap</li>
            <li>About Taj</li>
            <li>Offers</li>
            <li>Blog</li>
          </ul>
        </div>
        <div className={styles.smcolumn}>CONNECT WITH US</div>
      </div>
      <p className={styles.copyright}>
        © 2024 The Indian Hotels Company Limited. All Rights Reserved.
      </p>
      <hr />
    </div>
  );
};

export default Footer;
