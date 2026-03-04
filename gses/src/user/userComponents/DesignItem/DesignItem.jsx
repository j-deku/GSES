import React, { useContext } from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Box,
} from "@mui/material";
import { StoreContext } from "../../context/StoreContext";
import { assets } from "../../assets/assets";

const wine = "#4B0F1C";
const gold = "#D4AF37";

const DesignItem = ({ id, name, price, description, image, quantity }) => {
  const { url } = useContext(StoreContext);

  if (!id) {
    console.error("Invalid or missing 'id' for DesignItem.");
    return null;
  }

  const imageUrl = image ? `${url}/images/${image}` : assets.default_image;

  return (
    <Card
      sx={{
        borderRadius: 3,
        transition: "transform 0.3s, box-shadow 0.3s",
        "&:hover": {
          transform: "scale(1.05)",
          boxShadow: `0 0 20px ${gold}80`,
        },
        userSelect: "none",
        backgroundColor: "#fff",
      }}
    >
      <Box position="relative">
        <CardMedia
          component="img"
          image={imageUrl}
          alt={`Design item - ${name}`}
          sx={{
            height: 220,
            objectFit: "cover",
            borderTopLeftRadius: 12,
            borderTopRightRadius: 12,
          }}
          onError={(e) => (e.target.src = assets.default_image)}
        />
        {quantity < 5 ? (
          <Box
            sx={{
              position: "absolute",
              top: 10,
              left: 10,
              px: 2,
              py: 0.5,
              borderRadius: "50px",
              backgroundColor: wine,
              color: "#fff",
              fontWeight: "bold",
              fontSize: 18,
            }}
          >
            Rem: {quantity}
          </Box>
        ) : (
          <Box
            sx={{
              position: "absolute",
              top: 10,
              left: 10,
              px: 2,
              py: 0.5,
              borderRadius: "50px",
              backgroundColor: gold,
              color: "#fff",
              fontWeight: "bold",
              fontSize: 18,
            }}
          >
            Stock
          </Box>
        )}
      </Box>

      <CardContent>
        <Typography
          variant="h6"
          sx={{ fontWeight: 600, textAlign: "center", mb: 1 }}
        >
          {name || "Unnamed Item"}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ mb: 2, textAlign: "center" }}
        >
          {description || "No description available."}
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{ fontWeight: "bold", color: wine, textAlign: "center", mb: 2 }}
        >
          ${price?.toFixed(2) || "0.00"}
        </Typography>
        <Button
          fullWidth
          sx={{
            background: wine,
            color: "#fff",
            fontWeight: "bold",
            "&:hover": { background: gold, color: wine },
            borderRadius: 2,
            textTransform: "none",
          }}
        >
          View Details
        </Button>
      </CardContent>
    </Card>
  );
};

DesignItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  price: PropTypes.number,
  description: PropTypes.string,
  image: PropTypes.string,
  quantity: PropTypes.number,
};

export default DesignItem;
