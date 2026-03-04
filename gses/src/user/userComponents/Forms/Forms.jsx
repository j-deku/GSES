import { useState } from "react";
import PropTypes from "prop-types";
import { Box, Card, Typography, Tabs, Tab, Button, Divider, IconButton, TextField, InputAdornment } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { FaGoogle, FaApple, FaLinkedin, FaArrowLeft, FaEnvelope, FaLock } from "react-icons/fa";
import LoginForm from "../LoginForm/LoginForm";
import RegisForm from "../RegisForm/RegisForm";
import "./Forms.css";

const Forms = ({ setLogin }) => {
  const [tabValue, setTabValue] = useState(0); // 0 for Login, 1 for Register
  const navigate = useNavigate();

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <div className="forms-page-wrapper">
      {/* Back Button */}
      <IconButton 
        onClick={() => navigate(-1)} 
        sx={{ position: "absolute", top: {xs:30, md:20}, left: 20, color: {xs:"#333", md:"#ccc"} }}
      >
        <FaArrowLeft />
      </IconButton>

      <Card className="auth-card" elevation={10}>
        {/* Left Side: Branding & Illustration */}
        <Box className="auth-left-panel">
          <Box className="logo-container">
            <div className="logo-icon">G</div>
            <Typography variant="h6" className="brand-name">GSES</Typography>
          </Box>
          
          <Box className="illustration-content">
            <Typography variant="h3" className="welcome-text">
              Welcome to <br /> GSES
            </Typography>
            <img src="/images/lighting.png" alt="Workflow Illustration" className="auth-svg" />
            <Typography className="description-text">
              Premium Wedding Lights & Events Electrical Solutions
            </Typography>
          </Box>
        </Box>

        {/* Right Side: Form Content */}
        <Box className="auth-right-panel">
          <Tabs 
            value={tabValue} 
            onChange={handleTabChange} 
            centered 
            className="auth-tabs"
            TabIndicatorProps={{ style: { backgroundColor: "#D4AF37" } }}
          >
            <Tab label="Log In" sx={{color:"#4B0F1C"}}/>
            <Tab label="Register" sx={{color:"#4B0F1C"}}/>
          </Tabs>

          <Box className="form-container">
          {tabValue === 0 ? (
            <LoginForm setLogin={setLogin} />
          ) : (
            <RegisForm setLogin={setLogin} />
          )}
        </Box>

        </Box>
      </Card>
    </div>
  );
};

Forms.propTypes = { setLogin: PropTypes.func.isRequired };
export default Forms;
