import React, { useState } from "react";
import Slider from "react-slick";
import "./CafeCarousel.css"; // Create this file for custom styles
import styles from "./CafeCarousel.module.css";
import { useRef } from "react";

const roomData = [
  {
    name: "WASABI NO MORIMOTO",
    image:
      "https://cdn.sanity.io/images/ocl5w36p/production/e07563e2cf1405cf81f14341e8ce783bce8a538d-1400x1120.jpg?w=768&fm=webp&dpr=2",
    description:
      "This award-winning Japanese restaurant offers an authentic dining experience with stunning flavors and fresh ingredients crafted by Chef Morimoto.",
    link: "https://www.tajhotels.com/en-in/hotels/taj-mahal-palace-mumbai/restaurants/wasabi-by-morimoto/",
    cuisine: "Japanese",
    timing: "12:30 PM - 2:45 PM, 7:00 PM - 11:30 PM",
    number: "+91-22-6665-3366",
  },
  {
    name: "GOLDEN DRAGON",
    image:
      "https://cdn.sanity.io/images/ocl5w36p/production/4c9a3c38b7d4cb85c2c6455b2647a5ee78252a2b-3878x3102.jpg?w=768&fm=webp&dpr=2",
    description:
      "Renowned for its Szechuan and Cantonese cuisine, the Golden Dragon is an iconic restaurant that brings a legacy of exceptional Chinese dining.",
    link: "https://www.tajhotels.com/en-in/hotels/taj-mahal-palace-mumbai/restaurants/golden-dragon/",
    cuisine: "Chinese",
    timing: "12:30 PM - 2:45 PM, 7:00 PM - 11:45 PM",
    number: "+91-22-6665-3366",
  },
  {
    name: "SOUK",
    image:
      "https://cdn.sanity.io/images/ocl5w36p/production/1bde5aa0b8d9b05ac62c786827d3361eee8039ff-1400x1120.jpg?w=768&fm=webp&dpr=2",
    description:
      "Offering a rooftop Mediterranean experience, Souk serves a variety of dishes from Morocco, Turkey, Egypt, and Lebanon, with stunning views of the city and the Arabian Sea.",
    link: "https://www.tajhotels.com/en-in/hotels/taj-mahal-palace-mumbai/restaurants/souk/",
    cuisine: "Middle Eastern",
    timing: "12:30 PM - 3:00 PM, 7:00 PM - 11:30 PM",
    number: "+91-22-6665-3366",
  },
  {
    name: "SHAMINA",
    image:
      "https://cdn.sanity.io/images/ocl5w36p/production/3edf16128bb9da2f201706bf18818f50dcd7cd91-1050x840.jpg?w=768&fm=webp&dpr=2",
    description:
      "A legendary all-day dining venue that serves global cuisine with an emphasis on seasonal ingredients and classic flavors.",
    link: "https://www.tajhotels.com/en-in/hotels/taj-mahal-palace-mumbai/restaurants/shamiana/",
    cuisine: "Indian, International",
    timing: "24 hours",
    number: "+91-22-6665-3366",
  },

  {
    name: "LA PATISSERIE",
    image:
      "https://cdn.sanity.io/images/ocl5w36p/production/f1153a4c63bcff2df2b8034e3d05e1b94e4647fa-1400x1120.png?w=768&fm=webp&dpr=2",
    description:
      "Innovative and contemporary, Masala Kraft presents a delightful fusion of modern Indian cuisine with traditional flavors.",
    link: "https://www.tajhotels.com/en-in/hotels/taj-mahal-palace-mumbai/restaurants/masala-kraft/",
    cuisine: "French",
    timing: "8:00 AM - 10:00 PM",
    number: "+91-22-6665-3366",
  },
  {
    name: "AQUARIUS",
    image:
      "https://cdn.sanity.io/images/ocl5w36p/production/7bf8901d200b7f6551ae1d88536dc08057397472-1400x1120.png?w=768&fm=webp&dpr=2",
    description:
      "Located by the poolside, Aquarius offers light snacks, refreshing beverages, and a relaxing ambiance for an enjoyable meal or drink.",
    link: "https://www.tajhotels.com/en-in/hotels/taj-mahal-palace-mumbai/restaurants/aquarius/",
    cuisine: "Snacks, Beverages",
    timing: "11:00 AM - 8:00 PM",
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
    centerMode: true, // Enable center mode to show partial slides
    centerPadding: "250px", // Padding to show part of next/prev slides Remove extra padding between slides
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
          - <p>Restaurants at The Taj Mahal Palace, Mumbai</p> -
        </p>
        <p className={styles.desc}>
          Tuck into our culinary delights meticulously crafted by our master
          chefs at The Taj Mahal Palace, Mumbai. Discover a splendid array of
          dining and bar options, featuring some of the best restaurants in
          Mumbai. From Indian and Chinese cuisines to delectable international
          offerings, savour the enchantment{" "}
          {!more ? <span onClick={() => setMore(true)}>{"..>>"}</span> : ""}
          <p className={more ? styles.show : styles.dont}>
            of 5-star restaurants in Mumbai. Our skilled mixologists and
            sommeliers await to guide you through an exploration of inventive
            cocktails and exceptional vintages from our carefully curated
            collection.
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
              src={room.image}
              alt={room.title}
              style={{ width: "90%", height: "auto", borderRadius: "" }} // Maintain the fixed width
            />
            <div className={styles.elemdesc}>
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

export default CafeCarousel;
