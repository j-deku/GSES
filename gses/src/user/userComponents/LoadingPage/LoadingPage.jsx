import React from "react";
import "./LoadingPage.css";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
const LoadingPage = () => {
  const gold = "#D4AF37";

  return (
    <div className="loadingPage">
      <Typography
        variant="h1"
        className="loading-logo"
        sx={{
          color: gold,
          fontWeight: "bold",
          textDecoration: "none",
          letterSpacing: 2,
        }}
      >
        GSES
      </Typography>
      <div className="loading-text">
        <p>l o a d i n g . . .</p>
      </div>
      <div className="footer-details">
        <p>
          {" "}
          &copy; Inc. J-Deku <br />
          <Link
            to={"https://github.com/j-deku/jerryDek.github.io"}
            target="_blank"
          >
            <img src="/to_do_icon2.png" alt="" />{" "}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoadingPage;
