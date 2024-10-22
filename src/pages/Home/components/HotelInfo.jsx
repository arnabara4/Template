import React from "react";
import styles from "../styles/Hotelinfo.module.css";
import Logo1 from "../assets/Logo1.png.png";
import Logo2 from "../assets/Logo2.png.png";
import Logo3 from "../assets/Logo3.png.png";
import Logo4 from "../assets/Logo4.png.png";
import Logo5 from "../assets/Logo5.png.png";
import Logo6 from "../assets/Logo6.png";
import Logo7 from "../assets/Logo7.svg.png";
import Logo8 from "../assets/Logo8.svg.png";

const HotelInfo = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>- HOTEL INFORMATION</div>
      <div className={styles.info}>
        <div className={styles.column}>
          <div className={styles.comp}>
            <p className={styles.title2}>CHECK-IN CHECK-OUT </p>
            <div>
              <img
                src={Logo1}
                alt="pic"
              />
              <p>
                Check-in from 2:00 pm <br />
                Check-out until noon
              </p>
            </div>
          </div>
          <div className={styles.comp}>
            <p className={styles.title2}>DINING</p>
            <div>
              <img
                src={Logo2}
                alt="pic"
              />
              <p> 9 restaurants & bar</p>
            </div>
          </div>
          <div className={styles.comp}>
            <p className={styles.title2}>CURRENT TEMPERATURE</p>
            <div>
              <img
                src={Logo3}
                alt="pic"
              />
              <p>25.05°c</p>
            </div>
          </div>
        </div>
        <div className={styles.column}>
          <div className={styles.comp}>
            <p className={styles.title2}>ROOMS</p>
            <div>
              <img
                src={Logo4}
                alt="pic"
              />
              <p>285 rooms and suites</p>
            </div>
          </div>
          <div className={styles.comp}>
            <p className={styles.title2}>WELNESS</p>
            <div>
              <img
                src={Logo5}
                alt="pic"
              />
              <p>
                J Wellness Circle and the Ayurveda Sanctuary offering
                International and Indian wellness therapies.
              </p>
            </div>
          </div>
          <div className={styles.comp}>
            <p className={styles.title2}>OTEL ESSENTIALS</p>
            <div>
              <p> GSTIN: 27AAACT3957G1Z7</p>
            </div>
          </div>
        </div>
        <div className={styles.column}>
          <div className={styles.comp}>
            <p className={styles.title2}>CONTACT</p>
            <div>
              <img
                src={Logo6}
                alt="pic"
              />
              <p>
                Apollo Bunder, Mumbai, Maharashtra, <br />
                400 001, India
              </p>
            </div>
          </div>
          <div className={styles.comp}>
            <div>
              <img
                src={Logo7}
                alt="pic"
              />
              <p>mumbai@ihcltata.com</p>
            </div>
          </div>
          <div className={styles.comp}>
            <div>
              <img
                src={Logo8}
                alt="pic"
              />
              <p>
                +91 2266653366 <br />
                +91 2264804425
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelInfo;
