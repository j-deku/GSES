import React, { useContext, useState } from "react";
import { StoreContext } from "../../context/StoreContext";
import {
  Box,
  Typography,
  Grid,
  TextField,
  Button,
  Divider,
} from "@mui/material";
import { toast } from "react-toastify";
import axios from "axios";

const wine = "#4B0F1C";
const gold = "#D4AF37";

const BookingPage = () => {
  const { getTotalCartAmount, token, decor_lists, cartItems, url } =
    useContext(StoreContext);

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
    phone: "",
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const placeOrder = async (e) => {
    e.preventDefault();
    if (!token) {
      toast.error("You must be logged in to place an order");
      return;
    }

    const orderItems = decor_lists
      .filter((item) => cartItems[item._id] > 0)
      .map((item) => ({ ...item, quantity: cartItems[item._id] }));

    const orderData = {
      address: data,
      items: orderItems,
      amount: getTotalCartAmount() + (getTotalCartAmount() === 0 ? 0 : 2),
      status: "pending",
      email: data.email,
    };

    try {
      const response = await axios.post(url + "/api/order/place", orderData, {
        headers: { token },
      });

      if (response.data.success && response.data.authorization_url) {
        window.location.replace(response.data.authorization_url);
      } else {
        toast.error("Invalid authorization URL");
        console.error("Order Error:", response.data);
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error("Error placing order: " + error.response.data);
      } else {
        toast.error("Unexpected error occurred");
      }
    }
  };

  return (
    <Box sx={{ mt: 12, px: { xs: 3, md: 10 } }}>
      <form onSubmit={placeOrder}>
        <Grid container spacing={6}>
          {/* Left - Delivery Form */}
          <Grid item xs={12} md={6}>
            <Typography variant="h4" sx={{ fontWeight: 600, mb: 5 }}>
              Delivery Information
            </Typography>

            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="First Name"
                  name="firstName"
                  value={data.firstName}
                  onChange={onChangeHandler}
                  required
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="Last Name"
                  name="lastName"
                  value={data.lastName}
                  onChange={onChangeHandler}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Email"
                  type="email"
                  name="email"
                  value={data.email}
                  onChange={onChangeHandler}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Street"
                  name="street"
                  value={data.street}
                  onChange={onChangeHandler}
                  required
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="City"
                  name="city"
                  value={data.city}
                  onChange={onChangeHandler}
                  required
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="State"
                  name="state"
                  value={data.state}
                  onChange={onChangeHandler}
                  required
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="Zip Code"
                  name="zipCode"
                  value={data.zipCode}
                  onChange={onChangeHandler}
                  required
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="Country"
                  name="country"
                  value={data.country}
                  onChange={onChangeHandler}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Phone +233..."
                  name="phone"
                  type="tel"
                  value={data.phone}
                  onChange={onChangeHandler}
                  required
                />
              </Grid>
            </Grid>
          </Grid>

          {/* Right - Cart Summary */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{ p: 4, bgcolor: "#f9f9f9", borderRadius: 3, boxShadow: 3 }}
            >
              <Typography variant="h5" sx={{ mb: 3 }}>
                Cart Totals
              </Typography>

              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Typography>SubTotal</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography textAlign="right">
                    ${getTotalCartAmount()}
                  </Typography>
                </Grid>

                <Grid item xs={6}>
                  <Typography>Delivery Fee</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography textAlign="right">
                    ${getTotalCartAmount() === 0 ? 0 : 2}
                  </Typography>
                </Grid>

                <Divider sx={{ my: 2 }} />

                <Grid item xs={6}>
                  <Typography fontWeight="bold">Total</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography fontWeight="bold" textAlign="right">
                    ${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}
                  </Typography>
                </Grid>
              </Grid>

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  mt: 4,
                  background: wine,
                  color: "#fff",
                  fontWeight: "bold",
                  py: 1.5,
                  "&:hover": { background: gold, color: wine },
                }}
              >
                PROCEED TO PAYMENT
              </Button>
            </Box>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default BookingPage;
