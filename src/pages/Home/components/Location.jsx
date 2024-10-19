import React from "react";
import styles from "../styles/Location.module.css";

const Location = () => {
  return (
    <div
      id="sitemap"
      className={styles.container}>
      <div className={styles.wrapper}>
        <div>
          <div className={styles.title}>- LOCATION & DIRECTIONS</div>
          <div className={styles.info}>
            <span>GETTING HERE</span>
            <p>Apollo Bunder, Mumbai, Maharashtra, 400 001, India</p>
            <a href="https://www.google.com/maps/place/The+Taj+Mahal+Palace,+Mumbai/@18.9251949,72.8318081,16z/data=!4m9!3m8!1s0x3be7d1c06fffffff:0xc0290485a4d73f57!5m2!4m1!1i2!8m2!3d18.9216631!4d72.8332028!16zL20vMDZieDFj?entry=ttu&g_ep=EgoyMDI0MTAxNi4wIKXMDSoASAFQAw%3D%3D">
              OPEN GOOGLE MAPS
            </a>
            <div className={styles.service}>
              <p>AIRPOT</p> <em>+</em>
            </div>
            <div className={styles.service}>
              <p>LOCAL TRANSPORT</p> <em>+</em>
            </div>
          </div>
        </div>

        <iframe
          className={styles.map}
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7548.28006332697!2d72.83180805131225!3d18.925194942528485!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7d1c06fffffff%3A0xc0290485a4d73f57!2sThe%20Taj%20Mahal%20Palace%2C%20Mumbai!5e0!3m2!1sen!2sin!4v1729355931498!5m2!1sen!2sin"
          width="600"
          height="450"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  );
};

export default Location;
