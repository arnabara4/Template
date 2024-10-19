import React from "react";
import Header from "./components/Header";
import Comp1 from "./components/Comp1";
import Text2 from "./components/Text2.jsx";
import HotelInfo from "./components/HotelInfo.jsx";
import Location from "./components/Location.jsx";
import Nav2 from "./components/Nav2.jsx";

const Home = () => {
  return (
    <>
      <Header />
      <Nav2/>
      <Comp1 />
      <Text2 />
      <HotelInfo />
      <Location />
    </>
  );
};

export default Home;
