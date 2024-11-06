import React, { useState } from "react";
import Slider from "react-slick";
import "./CafeCarousel.css"; // Create this file for custom styles
import styles from "./CafeCarousel.module.css";
import { useRef } from "react";
import dine1 from "./assets/dine1.jpg";
import dine2 from "./assets/dine2.jpg";
import dine3 from "./assets/dine3.jpg";

const roomData = [
  {
    name: "WASABI NO MORIMOTO",
    image: dine1,
    description:
      "This award-winning Japanese restaurant offers an authentic dining experience with stunning flavors and fresh ingredients crafted by Chef Morimoto.",
    link: "https://www.tajhotels.com/en-in/hotels/taj-mahal-palace-mumbai/restaurants/wasabi-by-morimoto/",
    cuisine: "Japanese",
    timing: "12:30 PM - 2:45 PM, 7:00 PM - 11:30 PM",
    number: "+91-22-6665-3366",
  },
  {
    name: "GOLDEN DRAGON",
    image: dine2,
    description:
      "Renowned for its Szechuan and Cantonese cuisine, the Golden Dragon is an iconic restaurant that brings a legacy of exceptional Chinese dining.",
    link: "https://www.tajhotels.com/en-in/hotels/taj-mahal-palace-mumbai/restaurants/golden-dragon/",
    cuisine: "Chinese",
    timing: "12:30 PM - 2:45 PM, 7:00 PM - 11:45 PM",
    number: "+91-22-6665-3366",
  },
  {
    name: "SOUK",
    image: dine3,
    description:
      "Offering a rooftop Mediterranean experience, Souk serves a variety of dishes from Morocco, Turkey, Egypt, and Lebanon, with stunning views of the city and the Arabian Sea.",
    link: "https://www.tajhotels.com/en-in/hotels/taj-mahal-palace-mumbai/restaurants/souk/",
    cuisine: "Middle Eastern",
    timing: "12:30 PM - 3:00 PM, 7:00 PM - 11:30 PM",
    number: "+91-22-6665-3366",
  },
];

const CafeCarousel = () => {
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
    centerMode: true,
    centerPadding: "250px",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerPadding: "50px",
          arrows: false,
        },
      },
    ],
  };

  return (
    <div
      id="Cafe"
      style={{
        position: "relative",
        width: "100%",
        maxWidth: "1200px",
        margin: "0 auto",
        marginTop: "30px",
      }}>
      <div className={styles.titletext}>
        <p className={styles.title}>
          - <p>Camp Kasbah Dining: Flavorful Desert Experiences</p> -
        </p>
        <p className={styles.desc}>
          At Camp Kasbah, dining is a delightful journey through rich flavors
          and culinary traditions.{" "}
          {!more ? <span onClick={() => setMore(true)}>{"..>>"}</span> : ""}
          <p className={more ? styles.show : styles.dont}>
            Guests can savor authentic local dishes crafted with fresh, locally
            sourced ingredients, all while enjoying stunning views of the desert
            landscape. Whether dining under the stars or in our cozy restaurant,
            each meal promises a unique experience that combines the essence of
            the desert with warm hospitality.
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
            {/* <div className={styles.elemdesc}>
              <h3>{room.name}</h3>
              <p>{room.description}</p>
              <div>
                <button className={styles.galbtn}>
                  <img
                    src="https://cdn.sanity.io/images/ocl5w36p/production/cdc097c29df3378bd1bd995ce13355470e3102a1-37x37.png"
                    alt="pic"
                    style={{ width: "1.5em", height: "1.5em" }}
                  />
                  GALLERY
                </button>
              </div>
              <div className={styles.info}>
                <p>
                  <span>Cuisine:</span>
                  {room.cuisine}{" "}
                </p>
                <p>
                  <span>Opening Hours:</span>
                  {room.timing}
                </p>
              </div>
              <span className={styles.no}>{room.number}</span>
            </div> */}
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

export default CafeCarousel;
