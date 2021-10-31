import React from "react";
import About from "../About/About";
import Banner from "../Banner/Banner";
import TourPackage from "../TourPackage/TourPackage";
import './Home'

const Home = () => {
  return (
    <div>
      <h1 className="title-1">W<span className="title-2">orld Travel</span></h1>
      <Banner></Banner>
      <TourPackage></TourPackage>
      {/* <About></About> */}
    </div>
  );
};

export default Home;
