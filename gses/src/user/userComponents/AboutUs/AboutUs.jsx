/* eslint-disable no-unused-vars */
import React from "react";
import {
  Box,
  Typography,
  Grid,
  Button,
  Card,
  CardContent,
} from "@mui/material";
import { motion } from "framer-motion";

const gold = "#D4AF37";
const wine = "#4B0F1C";
const deepWine = "#2E0710";

const Section = ({ children }) => (
  <Box sx={{ py: 10, px: { xs: 3, md: 10 } }}>{children}</Box>
);

const fadeIn = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export default function About() {
  return (
    <Box sx={{ bgcolor: wine, color: "#fff" }}>
      {/* HERO */}
      <Box
        sx={{
          height: "60vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          background: `linear-gradient(rgba(75,15,28,0.8), rgba(46,7,16,0.9)), url('/images/wedding-light.jpg')`,
          backgroundSize: "cover",
        }}
      >
        <Box>
          <Typography variant="h3" fontWeight="bold">
            About GSES
          </Typography>
          <Box
            sx={{ width: 80, height: 4, bgcolor: gold, mx: "auto", my: 2 }}
          />
          <Typography variant="h6" sx={{ maxWidth: 600 }}>
            We craft unforgettable wedding experiences through elegant lighting
            and reliable power solutions.
          </Typography>
        </Box>
      </Box>

      {/* WHO WE ARE */}
      <Section>
        <Grid container spacing={5} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="/about-image.jpg"
              alt="about"
              sx={{ width: "100%", borderRadius: 3 }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <motion.div {...fadeIn}>
              <Typography variant="h4" fontWeight="bold" gutterBottom>
                Who We Are
              </Typography>
              <Typography sx={{ color: "#EAEAEA" }}>
                GSES (Golden Star Event Solutions) is a trusted provider of
                professional event lighting and electrical services. We
                specialize in creating visually stunning environments for
                weddings and special occasions through carefully designed
                lighting systems.
              </Typography>
            </motion.div>
          </Grid>
        </Grid>
      </Section>

      {/* MISSION & VISION */}
      <Section>
        <Grid container spacing={4}>
          {["Mission", "Vision"].map((item, i) => (
            <Grid item xs={12} md={6} key={i}>
              <motion.div {...fadeIn}>
                <Card
                  sx={{
                    bgcolor: deepWine,
                    border: `1px solid ${gold}`,
                    color: "#EAEAEA",
                    borderRadius: 3,
                  }}
                >
                  <CardContent>
                    <Typography variant="h5" color={gold} gutterBottom>
                      {item}
                    </Typography>
                    <Typography>
                      {item === "Mission"
                        ? "To deliver elegant, safe, and innovative lighting solutions that enhance every event experience."
                        : "To become a leading name in event lighting, known for excellence, creativity, and reliability."}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Section>

      {/* SERVICES */}
      <Section>
        <Typography variant="h4" textAlign="center" mb={5} fontWeight="bold">
          What We Do
        </Typography>
        <Grid container spacing={4}>
          {[
            "Wedding Lighting Design",
            "Decorative Event Lighting",
            "Temporary Power Solutions",
            "Stage & Ambient Lighting",
            "Custom Lighting Installations",
          ].map((service, i) => (
            <Grid item xs={12} sm={6} md={4} key={i}>
              <motion.div {...fadeIn}>
                <Card sx={{ bgcolor: deepWine, borderRadius: 3 }}>
                  <CardContent>
                    <Typography color={gold} fontWeight="bold">
                      {service}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Section>

      {/* WHY CHOOSE US */}
      <Section>
        <Typography variant="h4" textAlign="center" mb={5} fontWeight="bold">
          Why Choose Us
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          {[
            "Professional team",
            "High-quality equipment",
            "Reliable installations",
            "Attention to detail",
            "Customer-focused service",
          ].map((item, i) => (
            <Grid item xs={12} sm={6} md={4} key={i}>
              <Box sx={{ textAlign: "center" }}>
                <Typography color={gold}>✔</Typography>
                <Typography>{item}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Section>

      {/* CTA */}
      <Box
        sx={{
          textAlign: "center",
          py: 10,
          background: `linear-gradient(135deg, ${gold}, #F7E7A1)`,
        }}
      >
        <Typography variant="h4" color={wine} fontWeight="bold" gutterBottom>
          Let us light up your special moments
        </Typography>
        <Button
          variant="contained"
          sx={{ bgcolor: wine, color: "#fff", mt: 2 }}
        >
          Book a Service
        </Button>
      </Box>
    </Box>
  );
}
