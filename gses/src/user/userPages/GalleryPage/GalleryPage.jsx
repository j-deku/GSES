/* eslint-disable */
import React, { useState } from "react";
import { Box, Typography, Grid, Button, Dialog } from "@mui/material";
import { motion } from "framer-motion";

const gold = "#D4AF37";
const wine = "#4B0F1C";

const galleryData = [
  { img: "/fan1.jpg", category: "wedding" },
  { img: "/fan2.jpg", category: "outdoor" },
  { img: "/light3.jpg", category: "stage" },
  { img: "/top-light.jpg", category: "wedding" },
  { img: "/wall-light2.jpg", category: "lighting" },
  { img: "/fan4.jpg", category: "outdoor" },
];

const categories = ["all", "wedding", "outdoor", "stage", "lighting"];

const GalleryPage = () => {
  const [active, setActive] = useState("all");
  const [selectedImg, setSelectedImg] = useState(null);

  const filtered =
    active === "all"
      ? galleryData
      : galleryData.filter((item) => item.category === active);

  return (
    <Box
      sx={{ bgcolor: wine, minHeight: "100vh", py: 10, px: { xs: 3, md: 10 } }}
    >
      {/* Title */}
      <Typography
        variant="h3"
        textAlign="center"
        color="#fff"
        fontWeight="bold"
      >
        Gallery
      </Typography>

      {/* Filter Buttons */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 2,
          my: 5,
          flexWrap: "wrap",
        }}
      >
        {categories.map((cat) => (
          <Button
            key={cat}
            onClick={() => setActive(cat)}
            sx={{
              color: active === cat ? wine : gold,
              bgcolor: active === cat ? gold : "transparent",
              border: `1px solid ${gold}`,
              textTransform: "capitalize",
            }}
          >
            {cat}
          </Button>
        ))}
      </Box>

      {/* Gallery Grid */}
      <Grid container spacing={3}>
        {filtered.map((item, i) => (
          <Grid item xs={12} sm={6} md={4} key={i}>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Box
                onClick={() => setSelectedImg(item.img)}
                sx={{
                  cursor: "pointer",
                  borderRadius: 3,
                  overflow: "hidden",
                }}
              >
                <Box
                  component="img"
                  src={item.img}
                  alt=""
                  sx={{
                    width: "100%",
                    height: 250,
                    objectFit: "cover",
                  }}
                />
              </Box>
            </motion.div>
          </Grid>
        ))}
      </Grid>

      {/* Modal */}
      <Dialog
        open={!!selectedImg}
        onClose={() => setSelectedImg(null)}
        maxWidth="md"
      >
        <Box component="img" src={selectedImg} sx={{ width: "100%" }} />
      </Dialog>
    </Box>
  );
};

export default GalleryPage;
