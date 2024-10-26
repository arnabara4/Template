import React, { useState } from "react";
import Slider from "react-slick";
import "./BedroomCarousel.css"; // Create this file for custom styles
import styles from "./BedroomCarousel.module.css";
import { useRef } from "react";
import tent from "../../assets/tent.webp"
import single from "../../assets/Double.webp"
import triple from "../../assets/triple.webp"
import quad from "../../assets/quad.webp"
const roomData = [
  {
    image:
      tent,
    title: "Swiss tents with attached bathroom",
    description:
      "A spacious luxury room with a breathtaking view of the Arabian Sea.",
  },
  {
    image:single
      ,
    title: "Single Sharing",
    description: "Elegant room with exquisite furnishing and modern amenities.",
  },
  {
    image:single
      ,
    title: "Double sharing",
    description: "Experience the ultimate comfort with private lounge access.",
  },
  {
    image:
      
    triple,
    title: "Triple sharing",
    description: "Luxurious suite offering unparalleled elegance and luxury.",
  },
  {
    image:
      quad,
    title: "Quad sharing",
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
      }}
      className={styles.container}>
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
              // className={styles}
            />
            <div className={styles.elemdesc}>
              <h3>{room.title}</h3>
              <p>{room.description}</p>
              <div>
                <button className={styles.viewbtn}>BOOK NOW</button>
                {/* <button className={styles.galbtn}>GALLERY</button> */}
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
