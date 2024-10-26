import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer"
// import Preloader from "../pages/Home/components/Preloader";
const Layout = ({children}) => {
  return (
    <>
      {/* <Preloader /> */}
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
