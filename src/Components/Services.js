import React from "react";
import services from "../Assets/services.png";

const Services = () => {
  return (
    <div className="services-container">
      <br />
      <br />
      <br />

      <h2 className="services-heading">Services</h2>
      <br />
      <h1>What We Offer</h1>
      <p className="services-text">
        We engage in integrated digital marketing strategies to ensure you've
        got all your bases covered.
        <br />
        <br />
        <br />
        <br />
        <br />
      </p>
      <div className="services-img">
        <img src={services} alt="" />
        <br />
        <br />
        <br />
        <br />
      </div>
    </div>
  );
};

export default Services;
