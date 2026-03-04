/* eslint-disable */
import React from "react";
import {
  Box,
  Typography,
  Grid,
  Button,
  Card,
  CardContent,
} from "@mui/material";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import BuildIcon from "@mui/icons-material/Build";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PaidIcon from "@mui/icons-material/Paid";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

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

export default function WhyChooseUs() {
  const navigate = useNavigate();
  return (
    <Box sx={{ bgcolor: wine, color: "#fff" }}>
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
        <Box sx={{ position: "relative" }}>
          {/* Glow Background */}
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: { xs: "300px", md: "600px" },
              height: { xs: "300px", md: "600px" },
              background:
                "radial-gradient(circle, rgba(212,175,55,0.25) 0%, rgba(212,175,55,0.08) 40%, transparent 70%)",
              filter: "blur(80px)",
              zIndex: 0,
            }}
          />

          <Typography
            variant="h4"
            textAlign="center"
            mb={1}
            fontWeight="bold"
            sx={{ position: "relative", zIndex: 1 }}
          >
            Why Choose Us
          </Typography>
          <Typography
            textAlign="center"
            sx={{ color: "#EAEAEA", mb: 6, position: "relative", zIndex: 1 }}
          >
            Trusted lighting and electrical solutions for unforgettable events
          </Typography>

          <Grid container spacing={4} sx={{ position: "relative", zIndex: 1 }}>
            {[
              {
                title: "High Quality Product",
                desc: "We supply durable, reliable lighting and electrical products designed to perform beautifully at every event.",
                icon: <LightbulbIcon sx={{ fontSize: 40, color: gold }} />,
              },
              {
                title: "Professional Installation",
                desc: "Our experienced team handles setups and installation safely, ensuring everything works perfectly on your big day.",
                icon: <BuildIcon sx={{ fontSize: 40, color: gold }} />,
              },
              {
                title: "Reliable & On-Time Service",
                desc: "We deliver and install on schedule, so your event runs smoothly without stress or delays.",
                icon: <AccessTimeIcon sx={{ fontSize: 40, color: gold }} />,
              },
              {
                title: "Affordable & Transparent Pricing",
                desc: "We offer competitive pricing with clear quotes-no hidden costs, just honest value.",
                icon: <PaidIcon sx={{ fontSize: 40, color: gold }} />,
              },
            ].map((item, i) => (
              <Grid item xs={12} sm={6} md={3} key={i}>
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                >
                  <Card
                    sx={{
                      bgcolor: deepWine,
                      borderRadius: 3,
                      height: "100%",
                      border: `1px solid rgba(212,175,55,0.2)`,
                      textAlign: "center",
                      p: 2,
                      backdropFilter: "blur(6px)",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        transform: "translateY(-10px) scale(1.02)",
                        boxShadow: `0 15px 40px rgba(212,175,55,0.25)`,
                      },
                    }}
                  >
                    <CardContent>
                      <Box sx={{ mb: 2 }}>{item.icon}</Box>
                      <Typography
                        variant="h6"
                        fontWeight="bold"
                        color={gold}
                        gutterBottom
                      >
                        {item.title}
                      </Typography>
                      <Typography
                        sx={{ color: "#EAEAEA", fontSize: "0.95rem" }}
                      >
                        {item.desc}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>
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
          onClick={() => navigate("/book")}
          variant="contained"
          sx={{ bgcolor: wine, color: "#fff", mt: 2 }}
        >
          Book a Service
        </Button>
      </Box>
    </Box>
  );
}
