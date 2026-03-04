import React, { useContext } from "react";
import "./AppDownload.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import CookieForm from "../CookieForm/CookieForm";

const AppDownload = () => {
  return (
    <div className="app-download" id="app-download">
      <h1>
        Download Our Mobile Version GSES App <br /> via
      </h1>
      <div className="app-download-img">
        <Link to="https://play.google.com" target="_blank">
          <img src={assets.google_app} alt="play store" />
        </Link>
        <Link to="https://appstore.com" target="_blank">
          <img src={assets.app_store} alt="app store" />
        </Link>
      </div>
      <CookieForm />
    </div>
  );
};

export default AppDownload;
