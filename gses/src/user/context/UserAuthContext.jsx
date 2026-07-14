import { createContext, useContext, useEffect, useState } from "react";
import api from "../../API/api";

const UserAuthContext = createContext();

export const useUserAuth = () => useContext(UserAuthContext);

export const UserAuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const getProfile = async () => {
    try {
      const res = await api.get("/api/user/me");

      if (res.data.success) {
        setUser(res.data.user);
      }
    } catch {
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProfile();
  }, []);

  const logout = async () => {
    await api.post("/api/user/logout");
    setUser(null);
  };

  return (
    <UserAuthContext.Provider
      value={{
        user,
        setUser,
        loading,
        getProfile,
        logout,
      }}
    >
      {loading ? null : children}
    </UserAuthContext.Provider>
  );
};
