import React from "react";
import { Box, Typography, Button, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: { xs: "80vh", md: "90vh" },
        backgroundImage: "url('/hero-section.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        color: "#fff",
      }}
    >
      {/* Gradient Overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(90deg, rgba(0,0,0,0.85), rgba(0,0,0,0.2))",
          zIndex: 1,
        }}
      />

      {/* Hero Content */}
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          px: { xs: 3, md: 10 },
          width: { xs: "90%", md: "50%" },
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: "2rem", md: "3.2rem" },
            fontWeight: "bold",
            color: "#fff",
          }}
        >
          Premium Wedding Lights & Events Electrical Solutions
        </Typography>

        <Typography
          variant="h5"
          sx={{
            mt: 3,
            mb: 5,
            color: "#ccc",
            fontSize: { xs: "1.1rem", md: "1.4rem" },
          }}
        >
          Wedding & Event Light Specialists
        </Typography>

        <Stack direction={{ xs: "column", sm: "row" }} spacing={3}>
          <Button
            variant="contained"
            sx={{
              px: 1.8,
              py: 1,
              fontSize: { xs: "1rem", md: "1rem" },
              borderRadius: 2,
              background:
                "linear-gradient(180deg, rgba(102,17,13,0.94), rgba(189,92,48,0.94))",
              "&:hover": { opacity: 0.9 },
            }}
            onClick={() => navigate("/booking")}
          >
            Book a Service
          </Button>

          <Button
            variant="contained"
            sx={{
              px: 1.5,
              py: 1,
              fontSize: { xs: "1rem", md: "0.8rem" },
              borderRadius: 2,
              background: "#fff",
              color: "black",
              fontWeight: "bold",
              "&:hover": { opacity: 0.9 },
            }}
            onClick={() => navigate("/products")}
          >
            View Products
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default Header;
