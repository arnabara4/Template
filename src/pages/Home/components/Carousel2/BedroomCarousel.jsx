import React, { useState } from "react";
import Slider from "react-slick";
import "./BedroomCarousel.css"; // Create this file for custom styles
import styles from "./BedroomCarousel.module.css";
import { useRef } from "react";

const roomData = [
  {
    image:
      "https://cdn.sanity.io/images/ocl5w36p/production/d6164d18fb65eae98c953178f200075ea19a5069-1400x1120.jpg?w=768&fm=webp&dpr=2",
    title: "Luxury Room",
    description:
      "A spacious luxury room with a breathtaking view of the Arabian Sea.",
  },
  {
    image:
      "https://cdn.sanity.io/images/ocl5w36p/production/cc4b61416955c27cb5babc5b529feab7c0faf824-1400x1120.jpg?w=768&fm=webp&dpr=2",
    title: "Palace Room",
    description: "Elegant room with exquisite furnishing and modern amenities.",
  },
  {
    image:
      "https://cdn.sanity.io/images/ocl5w36p/production/38a3f5c1e3dcc73ad6fa977276be8e901db41690-1401x1120.jpg?w=768&fm=webp&dpr=2",
    title: "LUXURIOUS GRANDE ROOM SEA VIEW KING SIZE BED",
    description: "Experience the ultimate comfort with private lounge access.",
  },
  {
    image:
      "https://cdn.sanity.io/images/ocl5w36p/production/e89ab90be5e070c45ca81e512935244e59310ff8-1400x1108.jpg?w=768&fm=webp&dpr=2",
    title: "Presidential Suite",
    description: "Luxurious suite offering unparalleled elegance and luxury.",
  },
];

const BedroomCarousel = () => {
  const sliderRef = useRef(null);
  const [more, setMore] = useState(false);
  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: false,
    autoplaySpeed: 3000,
    centerMode: true, // Enable center mode to show partial slides
    centerPadding: "250px",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerPadding: "50px",
          arrows: false,
        },
      },
    ], // Padding to show part of next/prev slides Remove extra padding between slides
  };

  return (
    <div
      id="Rooms"
      style={{
        position: "relative",
        width: "100%",
        maxWidth: "1200px",
        margin: "0 auto",
        marginTop: "30px",
      }}>
      <div className={styles.titletext}>
        <p className={styles.title}>
          - <p>Luxury Rooms & Suites at The Taj Mahal Palace, Mumbai</p> -
        </p>
        <p className={styles.desc}>
          Indulge in the opulent tranquility of our luxury rooms and suites at
          The Taj Mahal Palace, Mumbai.{" "}
          {!more ? <span onClick={() => setMore(true)}>{"..>>"}</span> : ""}
          <p className={more ? styles.show : styles.dont}>
            Adorned with fine natural materials and period art, each space
            offers an exquisite retreat, where heritage seamlessly meets modern
            comfort. Experience personalized service and unparalleled elegance,
            ensuring an unforgettable stay in the heart of Mumbai's history and
            culture.
            {more ? <span onClick={() => setMore(false)}>{"<<"}</span> : ""}
          </p>
        </p>
      </div>

      {/* Slider component */}
      <Slider
        ref={sliderRef}
        {...settings}>
        {roomData.map((room, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
            }}>
            <img
              className={styles.elemimg}
              src={room.image}
              alt={room.title}
            />
            <div className={styles.elemdesc}>
              <h3>{room.title}</h3>
              <p>{room.description}</p>
              <div>
                <button className={styles.viewbtn}>VIEW RATES</button>
                <button className={styles.galbtn}>GALLERY</button>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      {/* Custom navigation buttons */}
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <button
          className={styles.leftButton}
          onClick={() => sliderRef.current.slickPrev()}>
          <span className="material-symbols-outlined">arrow_back_ios</span>
        </button>
        <button
          onClick={() => sliderRef.current.slickNext()}
          className={styles.rightButton}>
          <span className="material-symbols-outlined">arrow_forward_ios</span>
        </button>
      </div>
    </div>
  );
};

export default BedroomCarousel;
