import React from "react";

import BannerBackground from "../Assets/Rectangle.png";
import Golbe from "../Assets/earth.png";
import Trusted from "../Assets/Trusted.png";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div className="homcontainere-banner-">
      <div className="home-bannerImage-container">
        <img src={BannerBackground} alt="" />
        <div className="home-globe">
          <img src={Golbe} alt="" />
        </div>
        <div className="home-container">
          <Navbar />
          <div className="home-text-section">
            <h1 className="primary-heading">
              Reach the Heart of your Target Audience
            </h1>
            <p className="primary-text">Book a free 30-Minute Strategy chat</p>
            <button className="secondary-button">Book Now</button>
          </div>
        </div>
        <div className="home-Trusted">
          <img src={Trusted} alt="" />
        </div>
      </div>
    </div>
  );
};
export default Home;
