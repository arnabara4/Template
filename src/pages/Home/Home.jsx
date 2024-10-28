import React from "react";
import Header from "./components/Header";
import Comp1 from "./components/Comp1";
import Text2 from "./components/Text2.jsx";
import HotelInfo from "./components/HotelInfo.jsx";
import Location from "./components/Location.jsx";
import BedroomCarousel from "./components/Carousel2/BedroomCarousel.jsx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CafeCarousel from "./components/Carousel3/CafeCarousel.jsx";

const Home = () => {
  return (
    <>
      <Header />
      <Comp1 />
      <Text2 />
      <BedroomCarousel />
      <CafeCarousel />
      <HotelInfo />
      <Location />
    </>
  );
};

export default Home;
