import React from "react";
import services from "../Assets/services.png";

const Services = () => {
  return (
    <div className="services-container">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2 className="services-heading">Services</h2>
            <br />
            <h1>What We Offer</h1>
            <p className="services-text">
              We engage in integrated digital marketing strategies to ensure
              you've got all your bases covered.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="services-img">
              <img src={services} alt="" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
