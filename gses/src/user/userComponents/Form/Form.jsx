import { useState } from "react";
import PropTypes from "prop-types";
import "./Forms.css";
import LoginForm from "../LoginForm/LoginForm";
import RegisForm from "../RegisForm/RegisForm";
import { Box, Card, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowAltCircleLeft, FaTimes } from "react-icons/fa";

const Form = ({ setLogin }) => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const toggleStyle = {
    color: "#4B0F1C",
    cursor: "pointer",
    fontWeight: "bold",
  };

  const gold = "#D4AF37";
  const wine = "#4B0F1C";

  if (localStorage.getItem("userId")) {
    setLogin(true);
  }

  return (
    <Box component="div" sx={{background:"url('/hero-section.jpg')", 
      postion:"relative", zIndex:-1, 
      height:"100vh", width:"100%" }}>
        <Box component="form" 
        sx={{ maxWidth: 400, 
          margin: "auto", mt: 12, p: 6, boxShadow: 3, 
          borderRadius: 2, color: "gray", background: isLogin ? "aliceblue" : "white", 
          transition: "all 0.5s", position: "relative" 
          }}>
            <Card>
              <CardHeader>
          <Typography
            variant="h5"
            component={Link}
            to="/"
            sx={{
              color: gold,
              fontWeight: "bold",
              textDecoration: "none",
              letterSpacing: 2,
            }}
          >
            GSES
          </Typography>
        </Card>
              </CardHeader>
            </Card>
        </Box>
    </Box>
  );
};
Forms.propTypes = {
  setLogin: PropTypes.func.isRequired,
};

export default Form;
