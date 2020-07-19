import React from "react";
import { Link } from "react-router-dom";
import icon from "../../misc/icon5.png";

const Footer = () => {
  return (
    <div className="footer-custom container">
      <div className="row footer-row">
        <div className="col-12 col-md-4 logo-container footer-div">
          <div>
            <Link to="/home" style={{ textDecoration: "none", color: "white" }}>
              <img src={icon} alt="Logo Unavailable" />
            </Link>
          </div>
          <div>
            <span>Copyrights 2020 all righsts received</span>
          </div>
        </div>
        <div className="col-12 col-md-4 about-div footer-div">
          <section>
            <h3>The Skill Merchant</h3>
            <h5>Learn About Us</h5>
          </section>
        </div>
        <div className="col-12 col-md-4 contact-div footer-div">
          <section>
            <div>
              <h4>Contact Us</h4>
            </div>
            <br />
            <div>
              <i className="fab fa-facebook fa-2x social-media-icon"></i>
              <i className="fab fa-instagram fa-2x social-media-icon"></i>
              <i className="fab fa-twitter fa-2x social-media-icon"></i>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Footer;
