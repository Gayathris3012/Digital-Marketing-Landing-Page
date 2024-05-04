import React from "react";
import BannerBackground from "../Assets/Rectangle.png";
import Golbe from "../Assets/earth.png";
import Trusted from "../Assets/Trusted.png";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="home-bannerImage-container">
        <img src={BannerBackground} alt="" className="img-fluid" />
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <div className="home-globe">
                <img src={Golbe} alt="" className="img-fluid" />
              </div>
              <div className="home-container">
                <div className="home-text-section">
                  <h1 className="primary-heading">
                    Reach the Heart of your Target Audience
                  </h1>
                  <p className="primary-text">
                    Book a free 30-Minute Strategy chat
                  </p>
                  <button className="secondary-button">Book Now</button>
                </div>
              </div>
              <div className="home-Trusted">
                <img src={Trusted} alt="" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
