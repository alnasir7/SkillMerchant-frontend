import React from "react";
import { Link } from "react-router-dom";
import icon from "../../misc/icon5.png";

const Footer = () => {
  return (
    <div className="footer-custom container">
      <div className="row footer-row">
        <div className="col-12 col-md-4 logo-container footer-div">
          <table>
            <tr>
              <td>
                <Link
                  to="/home"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <img src={icon} alt="Logo Unavailable" />
                </Link>
              </td>
            </tr>
            <tr>
              <td>
                <span>Copyrights 2020 all righsts received</span>
              </td>
            </tr>
          </table>
        </div>
        <div className="col-12 col-md-4 about-div footer-div">
          <table>
            <tr>
              <td>
                <h3>The Skill Merchant</h3>
              </td>
            </tr>
            <tr>
              <td>
                <h5>Learn About Us</h5>
              </td>
            </tr>
          </table>
        </div>
        <div className="col-12 col-md-4 contact-div footer-div">
          <table>
            <tr>
              <td>
                <h4>Contact Us</h4>
              </td>
            </tr>
            <tr>
              <td>
                <div>
                  <i className="fab fa-facebook fa-2x social-media-icon"></i>
                  <i className="fab fa-instagram fa-2x social-media-icon"></i>
                  <i className="fab fa-twitter fa-2x social-media-icon"></i>
                </div>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Footer;
