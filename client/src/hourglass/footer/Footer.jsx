import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div>
          <img
            className="footer-logo-img"
            src={`${process.env.PUBLIC_URL}/images/laundromutt.png`}
            alt="laundromutt-logo"
          />
        </div>
        <div className="company-text-container">
          <div className="company-text">Company Information</div>
          <div className="our-story">Our Story</div>
        </div>
        <div className="newsletter-container">
          <div className="newsletter-text">Sign Up for our Newsletter</div>
          <div className="newsletter-input-container">
            <input type="text" placeholder="   your email" />
            <div className="newsletter-icon">
              <img
                src={`${process.env.PUBLIC_URL}/images/triangle-fill.svg`}
                alt="triangle-icon"
              />
            </div>
          </div>
        </div>
        <div className="company-info-container">
          <div className="address-container">
            <div className="address-icon">
              <img
                src={`${process.env.PUBLIC_URL}/images/map.svg`}
                alt="map-icon"
              />
            </div>
            <div className="address">
              <div>Address</div>
              <p>220 Lewis St #1</p>
              <p>Ketchum, ID 83340</p>
            </div>
          </div>
          <div className="phone-container">
            <div className="phone-icon">
              <img
                src={`${process.env.PUBLIC_URL}/images/telephone.svg`}
                alt="phone-icon"
              />
            </div>
            <div className="phone">
              <div>Phone</div>
              <p>1.208.726.9274</p>
            </div>
          </div>
          <div className="hours-container">
            <div className="clock-icon">
              <img
                src={`${process.env.PUBLIC_URL}/images/clock.svg`}
                alt="clock-icon"
              />
            </div>
            <div className="hours">
              <div>Working Hours</div>
              <p>Monday - Friday: 8am - 6pm</p>
              <p>Saturday - Sunday: 10am - 4pm</p>
            </div>
          </div>
        </div>
        <div className="break"></div>
        <div className="copyright-container">
          <p>
            © 2020 Laundromutt All rights reserved. Privacy Policy & Terms of
            Use
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;