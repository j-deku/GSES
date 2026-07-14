import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { CircularProgress, Alert, Box } from "@mui/material";
import adminApi from "../../API/adminApi";

const CanAccessAdminLogin = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [canLogin, setCanLogin] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const checkRole = async () => {
      try {
        const res = await adminApi.get("/api/admin/protect");

        if (res.data.success) {
          setCanLogin(true);
        }
      } catch (err) {
        setCanLogin(false);
        setError(
          err.response?.data?.message || "Access denied."
        );
      } finally {
        setLoading(false);
      }
    };

    checkRole();
  }, []);

  if (loading) {
    return( 
    <Box sx={{ display: "grid", placeItems: "center", minHeight: "100vh" }}>
        <CircularProgress />
      </Box>
      )
  }

  if (!canLogin) {
    return <Alert severity="error">{error}</Alert>;
  }

  return children;
};

export default CanAccessAdminLogin;