import React, { useState } from "react";
import Slider from "react-slick";
import "./BedroomCarousel.css"; // Create this file for custom styles
import styles from "./BedroomCarousel.module.css";
import { useRef } from "react";
import tent from "./assets/tents.jpg";
import quad from "./assets/Quad.jpg";
import triple from "./assets/triple.jpg";
import double from "./assets/double.jpg";

const roomData = [
  {
    image: tent,
    title: "SWISS TENTS",
    description:
      "A spacious luxury room with a breathtaking view of the Arabian Sea.",
  },
  {
    image: quad,
    title: "QUAD SHARING",
    description: "Elegant room with exquisite furnishing and modern amenities.",
  },
  {
    image: triple,
    title: "TRIPLE SHARING",
    description: "Experience the ultimate comfort with private lounge access.",
  },
  {
    image: double,
    title: "DOUBLE SHARING",
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
    autoplay: true,
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
          - <p>Camp Kasbah: Comfort and Adventure in the Desert</p> -
        </p>
        <p className={styles.desc}>
          Camp Kasbah offers a range of accommodations to suit every traveler,
          from cozy Nomad Rooms for adventure seekers to luxurious Oasis Villas
          for those craving extra comfort.{" "}
          {!more ? <span onClick={() => setMore(true)}>{"..>>"}</span> : ""}
          <p className={more ? styles.show : styles.dont}>
            Guests can choose from Deluxe Desert View Tents with breathtaking
            views, spacious Family Safari Suites perfect for group stays, or
            eco-friendly Glamping Pods for a sustainable desert experience. Each
            room combines rustic charm with modern comfort, ensuring a memorable
            stay surrounded by the stunning beauty of the desert landscape.
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
