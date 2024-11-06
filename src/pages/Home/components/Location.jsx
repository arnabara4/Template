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
            <p>Bir, Keori, Himachal Pradesh 176077, India</p>
            <a href="https://www.google.com/maps/place/Camp+Kasbah+Bir/@32.0464894,76.7107864,17z/data=!4m9!3m8!1s0x3904b92fa6f8e709:0x64f162f73a067763!5m2!4m1!1i2!8m2!3d32.0464894!4d76.7133613!16s%2Fg%2F11ff4_mv54?entry=ttu&g_ep=EgoyMDI0MTAyMy4wIKXMDSoASAFQAw%3D%3D">
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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3381.841204442576!2d76.71078637568303!3d32.04648937397743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3904b92fa6f8e709%3A0x64f162f73a067763!2sCamp%20Kasbah%20Bir!5e0!3m2!1sen!2sin!4v1730897848439!5m2!1sen!2sin"
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
