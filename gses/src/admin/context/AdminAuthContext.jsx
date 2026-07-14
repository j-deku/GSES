import { createContext, useContext, useEffect, useState } from "react";
import adminApi from "../../API/adminApi";

const AdminAuthContext = createContext();

export const useAdminAuth = () => useContext(AdminAuthContext);

export const AdminAuthProvider = ({ children }) => {
  const [admin, setAdmin] = useState(null);
  const [loading, setLoading] = useState(true);
  const [roleCheck, setRoleCheck] = useState(null);

  const getProfile = async () => {
    try {
      const res = await adminApi.get("/api/admin/me");

      if (res.data.success) {
        setAdmin(res.data.admin);
      }
    } catch {
      setAdmin(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProfile();
  }, []);

  const adminRoleCheck = async () => {
    try {
      const res = await adminApi.get("/api/admin/protect");
      if (res.data.success) {
        setRoleCheck(res.data.role);
      }
    } catch {
      setRoleCheck(null);
    }
  };
  useEffect(() => {
    adminRoleCheck();
  },[]);

  const logout = async () => {
    const res = await adminApi.post("/api/admin/logout");
      if(res.data.success){
        setAdmin(null);
        window.location.href = res.data.redirect;
      }
  };

  return (
    <AdminAuthContext.Provider
      value={{
        admin,
        setAdmin,
        loading,
        getProfile,
        logout,
        roleCheck,
        setRoleCheck,
        adminRoleCheck,
      }}
    >
      {loading ? null : children}
    </AdminAuthContext.Provider>
  );
};
