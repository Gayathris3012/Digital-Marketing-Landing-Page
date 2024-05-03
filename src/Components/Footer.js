import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer-page">
      <Container>
        <Row>
          <Col md={4}>
            <h5>Follow Us</h5>
            <div className="social-icons">
              <FaTwitter className="social-icon" />
              <FaFacebook className="social-icon" />
              <FaInstagram className="social-icon" />
            </div>
          </Col>

          <Col md={4}>
            <p>Help Centre</p>
            <p>Account Information</p>
            <p>About</p>
            <p>Contact Us</p>
            <p>Talk and Support</p>
            <p>Support Docs</p>
          </Col>

          <Col md={4}>
            <p>System Status</p>
            <p>Update</p>
            <p> Security</p>
            <p>Beta Test</p>
            <p> Pricing Product</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
