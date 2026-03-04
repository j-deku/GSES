/* eslint-disable */
import React from "react";
import { Box, Typography, Grid, Button } from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const gold = "#D4AF37";
const wine = "#4B0F1C";

const images = [
  {
    img: "/light1.jpg",
    text: "Elegant fairy lights draped over a romantic outdoor wedding setup, creating a magical ambiance for the evening.",
  },
  {
    img: "/light3.jpg",
    text: "A stunning chandelier with crystal lights illuminating a grand ballroom.",
  },
  {
    img: "/red-light.jpg",
    text: "Warm red LED lights creating a cozy and inviting atmosphere in a modern living space.",
  },
  {
    img: "/fan4.jpg",
    text: "A decorative ceiling fan with integrated LED lighting, perfect for elegant home settings.",
  },
];

const GalleryPreview = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ bgcolor: wine, py: 10, px: { xs: 3, md: 10 } }}>
      {/* Header */}
      <Typography
        variant="h4"
        textAlign="center"
        color="#fff"
        fontWeight="bold"
      >
        Our Work
      </Typography>

      <Typography textAlign="center" sx={{ color: "#EAEAEA", mb: 5 }}>
        A glimpse of our stunning event lighting setups
      </Typography>

      {/* Image + Text Cards */}
      <Grid container spacing={4}>
        {images.map((item, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <motion.div whileHover="hover" initial="rest" animate="rest">
              <Box
                sx={{
                  position: "relative",
                  borderRadius: 3,
                  overflow: "hidden",
                  cursor: "pointer",
                  boxShadow: "0 5px 20px rgba(0,0,0,0.3)",
                }}
              >
                {/* Image */}
                <Box
                  component="img"
                  src={item.img}
                  sx={{
                    width: "100%",
                    height: 220,
                    objectFit: "cover",
                    display: "block",
                  }}
                />

                {/* Overlay Text */}
                <motion.div
                  variants={{
                    rest: { y: 50, opacity: 0 },
                    hover: {
                      y: 0,
                      opacity: 1,
                      transition: { duration: 0.5, ease: "easeOut" },
                    },
                  }}
                  style={{
                    position: "absolute",
                    bottom: 0,
                    width: "100%",
                    padding: "20px",
                    background:
                      "linear-gradient(180deg, rgba(0,0,0,0) 60%, rgba(0,0,0,0.7) 100%)",
                    display: "flex",
                    alignItems: "flex-end",
                    justifyContent: "center",
                    textAlign: "center",
                  }}
                >
                  <Typography
                    variant="body1"
                    color={gold}
                    fontWeight="bold"
                    sx={{ textShadow: "0 0 10px rgba(255,215,55,0.8)" }}
                  >
                    {item.text}
                  </Typography>
                </motion.div>
              </Box>
            </motion.div>
          </Grid>
        ))}
      </Grid>

      {/* CTA */}
      <Box sx={{ textAlign: "center", mt: 6 }}>
        <Button
          variant="contained"
          onClick={() => navigate("/gallery")}
          sx={{
            bgcolor: gold,
            color: wine,
            px: 4,
            py: 1.5,
            fontWeight: "bold",
            "&:hover": { bgcolor: "#f0d75c" },
          }}
        >
          View Full Gallery
        </Button>
      </Box>
    </Box>
  );
};

export default GalleryPreview;
