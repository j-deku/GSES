import React, { useContext } from "react";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";

const ProductPage = () => {
  const { decor_lists, cartItems, removeFromCart, getTotalCartAmount, url } =
    useContext(StoreContext);
  const navigate = useNavigate();

  const printPage = () => {
    window.print();
  };

  const deliveryFee = getTotalCartAmount() === 0 ? 0 : 2;

  return (
    <Box sx={{ px: { xs: 3, md: 10 }, py: 10, bgcolor: "#f9f9f9" }}>
      <Typography variant="h4" fontWeight="bold" mb={5}>
        Your Cart
      </Typography>

      {/* Cart Table */}
      <Box
        sx={{
          bgcolor: "#fff",
          borderRadius: 3,
          p: 3,
          boxShadow: "0 5px 20px rgba(0,0,0,0.1)",
          overflowX: "auto",
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "2fr 2fr 1fr 1fr 1fr 0.5fr 0.5fr",
            gap: 2,
            fontWeight: "bold",
            mb: 2,
          }}
        >
          <Typography>Items</Typography>
          <Typography>Title</Typography>
          <Typography>Price</Typography>
          <Typography>Quantity</Typography>
          <Typography>Total</Typography>
          <Typography>Remove</Typography>
          <Typography>
            <img
              onClick={printPage}
              src={assets.printIcon2}
              alt="Print"
              style={{ cursor: "pointer", width: 24 }}
            />
          </Typography>
        </Box>

        <hr />

        {/* Cart Items */}
        {decor_lists.map(
          (item, idx) =>
            cartItems[item._id] > 0 && (
              <Box
                key={item._id || idx}
                sx={{
                  display: "grid",
                  gridTemplateColumns: "2fr 2fr 1fr 1fr 1fr 0.5fr 0.5fr",
                  gap: 2,
                  alignItems: "center",
                  py: 2,
                  "&:hover": { bgcolor: "#f2f2f2" },
                }}
              >
                <img
                  src={`${url}/images/${item.image}`}
                  alt={item.name}
                  style={{
                    width: "100%",
                    maxHeight: 80,
                    objectFit: "cover",
                    borderRadius: 5,
                  }}
                />
                <Typography>{item.name}</Typography>
                <Typography>${item.price}</Typography>
                <Typography>{cartItems[item._id]}</Typography>
                <Typography>
                  ${(item.price * cartItems[item._id]).toFixed(2)}
                </Typography>
                <img
                  onClick={() => removeFromCart(item._id)}
                  src={assets.trash_icon}
                  alt="Delete"
                  style={{ cursor: "pointer", width: 24 }}
                />
              </Box>
            ),
        )}

        {getTotalCartAmount() === 0 && (
          <Typography textAlign="center" py={5} color="gray">
            Your cart is empty 😔
          </Typography>
        )}
      </Box>

      {/* Totals & Promo Code */}
      <Box
        sx={{
          display: { xs: "block", md: "flex" },
          justifyContent: "space-between",
          mt: 5,
          gap: 5,
        }}
      >
        {/* Totals */}
        <Box
          sx={{
            bgcolor: "#fff",
            borderRadius: 3,
            p: 3,
            boxShadow: "0 5px 20px rgba(0,0,0,0.1)",
            minWidth: 280,
          }}
        >
          <Typography variant="h6" fontWeight="bold" mb={2}>
            Product Totals
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
            <Typography>SubTotal</Typography>
            <Typography>${getTotalCartAmount()}</Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
            <Typography>Delivery Fee</Typography>
            <Typography>${deliveryFee}</Typography>
          </Box>
          <hr />
          <Box sx={{ display: "flex", justifyContent: "space-between", mt: 1 }}>
            <Typography fontWeight="bold">Total</Typography>
            <Typography fontWeight="bold">
              ${getTotalCartAmount() + deliveryFee}
            </Typography>
          </Box>
          <Button
            variant="contained"
            sx={{ mt: 3, width: "100%", bgcolor: "#D4AF37", color: "#4B0F1C" }}
            onClick={() => navigate("/order")}
          >
            PROCEED TO CHECKOUT
          </Button>
        </Box>

        {/* Promo Code */}
        <Box
          sx={{
            bgcolor: "#fff",
            borderRadius: 3,
            p: 3,
            boxShadow: "0 5px 20px rgba(0,0,0,0.1)",
            minWidth: 280,
          }}
        >
          <Typography variant="h6" fontWeight="bold" mb={2}>
            Promo Code
          </Typography>
          <Typography mb={1}>
            If you have a promo code, enter it here:
          </Typography>
          <Box sx={{ display: "flex", gap: 1 }}>
            <input
              type="text"
              placeholder="Enter promo code"
              style={{
                flex: 1,
                padding: "10px",
                borderRadius: 5,
                border: "1px solid #ccc",
              }}
            />
            <Button
              variant="contained"
              sx={{ bgcolor: "#4B0F1C", color: "#fff" }}
            >
              Apply
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductPage;
