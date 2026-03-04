import { useContext, useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  CircularProgress,
  InputAdornment,
  IconButton,
  Divider
} from "@mui/material";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import { toast } from "react-toastify";
import { Howl } from "howler";
import PropTypes from "prop-types";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";

const LoginForm = ({ setLogin }) => {
  const { url, setToken } = useContext(StoreContext);
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  const successTone = new Howl({
    src: ["/apple-sms.mp3"],
    volume: 1,
    autoplay: false,
    loop: false,
  });

  // Validation schema
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters long")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "Password must contain uppercase, lowercase, number, and special character."
      )
      .required("Password is required"),
  });

  const handleGoogleLogin = () => {
      window.location.href = `${url}/api/auth/google`;
    };

  const handleSubmit = async (values) => {
    setIsSubmitting(true);
    const baseUrl = url || "http://localhost:5000";
    try {
      const response = await axios.post(`${baseUrl}/api/user/login`, values, {
        withCredentials: true,
      });
      if (response.data.success) {
        setToken(response.data.token);
        localStorage.setItem("token", response.data.token);
        successTone.play();
        setLogin(false);
        toast.success(response.data.message);
        navigate("/");
      } else if (response.data.redirect) {
        toast.warn(
          "User not verified. Redirecting to verification page..."
        );
        window.open(`${response.data.redirect}`, "_blank");
        setLogin(false);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error("Login failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <Box s={{mx:10}}>
      <Typography
        variant="h5"
        sx={{ mb: 3, textAlign: "center", color: "gray" }}
      >
        Log In
      </Typography>
      <Formik
        initialValues={{ email: "", password: "" }}
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
                helperText={touched.password && errors.password}
                inputMode="password"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <FaLock style={{ marginRight: "8px" }} />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={togglePassword}>
                        {showPassword ? (
                          <MdVisibility />
                        ) : (
                          <MdVisibilityOff />
                        )}
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
            <Typography variant="h7">
              Forgot password?
              <span
                onClick={() => setLogin(false)}
                style={{ color: "#4B0F1C", fontWeight: "bold" }}
              >
                <a href="/reset-password"> Reset password </a>
              </span>
            </Typography>
            <br />
            <br />
            <Box sx={{ textAlign: "center", mb: 2 }}>
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
                {isSubmitting ? <CircularProgress size={24} /> : "Log In"}
              </Button>
            </Box>
          </form>
        )}
      </Formik>
      <Box sx={{ textAlign: "center" }}>
        <Typography variant="h6" sx={{ my: 2, color:"gray" }}>
         ——————— OR ———————
        </Typography>
        <Button
          onClick={handleGoogleLogin}
          variant="outlined"
          sx={{ textTransform: "none", mb: 2, borderRadius:20 }}
        >
        <img src="https://img.icons8.com/color/48/000000/google-logo.png" alt="google" width={30} height={30} style={{marginRight: "10px"}}/>
          Login with Google
        </Button>
      </Box>
    </Box>
  );
};
LoginForm.propTypes = {
  setLogin: PropTypes.func.isRequired,
};

export default LoginForm;
