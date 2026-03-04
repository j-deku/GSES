import { useContext, useState } from "react";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import {
  Box,
  TextField,
  Button,
  Typography,
  CircularProgress,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { FaEnvelope, FaLock, FaUser } from "react-icons/fa";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import { Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { StoreContext } from "../../context/StoreContext";

const RegisForm = ({ setLogin }) => {
  const { url } = useContext(StoreContext);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  // Validation schema
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(5, "Enter your full name")
      .required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "Password must contain uppercase, lowercase, number, and special character."
      )
      .required("Password is required"),
  });

  const handleGoogleLogin = () => {
    const googleLoginUrl = `${url}/auth/google`;
    window.open(googleLoginUrl, "_self");
  };

  const handleSubmit = async (values) => {
    setIsSubmitting(true);
    const baseUrl = url || "http://localhost:5000";
    try {
      const response = await axios.post(`${baseUrl}/api/user/register`, values);
      if (response.data.success) {
        localStorage.setItem("userId", response.data.userId);
        window.open("/verify-otp", "_blank");
        setLogin(false);
      } else {
        toast.warn(response.data.message);
      }
    } catch (error) {
      toast.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <Typography
        variant="h5"
        sx={{ mb: 3, textAlign: "center", color: "gray" }}
      >
        Register
      </Typography>
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box sx={{ mb: 3 }}>
              <TextField
                name="name"
                label="Full Name"
                placeholder="Your Name"
                required
                autoFocus
                fullWidth
                value={values.name}
                onChange={(e) => {
                  const capitalizedValue = e.target.value.replace(
                    /\b\w/g,
                    (char) => char.toUpperCase()
                  );
                  handleChange({
                    target: {
                      name: e.target.name,
                      value: capitalizedValue,
                    },
                  });
                }}
                onBlur={handleBlur}
                error={touched.name && Boolean(errors.name)}
                helperText={touched.name && errors.name}
                inputMode="text"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <FaUser style={{ marginRight: "8px" }} />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  mb: 2,
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "30px",
                  },
                }}
              />
            </Box>
            <Box sx={{ mb: 3 }}>
              <TextField
                name="email"
                label="Email"
                type="email"
                placeholder="you@example.com"
                required
                fullWidth
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.email && Boolean(errors.email)}
                helperText={touched.email && errors.email}
                inputMode="email"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <FaEnvelope style={{ marginRight: "8px" }} />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  mb: 2,
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "30px",
                  },
                }}
              />
            </Box>
            <Box sx={{ mb: 3 }}>
              <TextField
                name="password"
                label="Password"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                required
                fullWidth
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.password && Boolean(errors.password)}
                inputMode="password"
                helperText={touched.password && errors.password}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <FaLock style={{ marginRight: "8px" }} />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={togglePassword}>
                        {showPassword ? <MdVisibility /> : <MdVisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                sx={{
                  mb: 0,
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "30px",
                  },
                }}
              />
            </Box>
            <Box sx={{ textAlign: "center" }}>
              <Button
                type="submit"
                variant="contained"
                fullWidth
                disabled={isSubmitting}
                sx={{
                  mt: 0,
                  py: 1.5,
                  borderRadius: "30px",
                  backgroundColor: "#4B0F1C",
                  color: "#fff",
                  fontWeight: 600,
                  "&:hover": {
                    backgroundColor: "#3a0c15",
                  },
                }}
              >
                {isSubmitting ? <CircularProgress size={24} /> : "Register"}
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </div>
  );
};
RegisForm.propTypes = {
  setLogin: PropTypes.func.isRequired,
};

export default RegisForm;
