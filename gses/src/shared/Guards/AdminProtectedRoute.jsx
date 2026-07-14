import React, { useEffect, useState } from "react";
import { Alert, Box, CircularProgress } from "@mui/material";
import { Outlet, Navigate } from "react-router-dom";
import adminApi from "../../API/adminApi";

const AdminProtectedRoute = () => {
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const checkAdminSession = async () => {
      try {
        const res = await adminApi.get("/api/admin/me");

        if (res.data.success) {
          setAuthenticated(true);
        }
      } catch (err) {
        setAuthenticated(false);
        setError(
          err.response?.data?.message || "Admin authentication required."
        );
      } finally {
        setLoading(false);
      }
    };

    checkAdminSession();
  }, []);

  if (loading) {
    return (
      <Box sx={{ display: "grid", placeItems: "center", minHeight: "100vh" }}>
        <CircularProgress />
      </Box>
    );
  }

  if (!authenticated) {
    return <Navigate to="/admin/auth0" replace state={{ error }} />;
  }

  return <Outlet />;
};

export default AdminProtectedRoute;