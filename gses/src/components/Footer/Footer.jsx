import React from "react";
import "./Footer.css";
import { FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-left">
        <img src="/GSES-logo.jpg" alt="GSES Logo" className="logo" /><br/>
        <p>
          GSES is very fast in delivery <br /> to your satisfaction
        </p>
      </div>

      <div className="footer-center">
        <ul>
          <li>
            <h3>COMPANY</h3>
            <a>Partners</a>
            <a>Community</a>
            <a>Agents</a>
            <a>Markers</a>
          </li>
                <p>GSES &copy; All Right Reserve.</p>
        </ul>
      </div>

      <div className="footer-right">
        <ul>
          <li>
            <h3>REACH US ON:</h3>
            <a href="tel:+233246062758">🔗 0246062758</a>
            <a>🔗 fdeku573@gmail.com</a>
            <a href="sms:+233246062758">
              <FaEnvelope size={20} /> Send SMS
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
