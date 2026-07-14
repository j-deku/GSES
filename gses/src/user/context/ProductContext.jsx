import { createContext, useContext, useEffect, useState } from "react";
import api from "../../API/api";

const ProductContext = createContext();

export const UseProducts = () => useContext(ProductContext);

export const ProductProvider = ({ children }) => {
  const [product, setProduct] = useState(null);
  const [searchTerm, setSearchTerm] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [removeFromCart, setRemoveFromCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalCartAmount, getTotalCartAmount] = useState(null);
  const url = import.meta.env.VITE_API_BASE_URL;

  const getProduct = async () => {
    try {
      const res = await api.get("/api/design/list");

      if (res.data.success) {
        setProduct(res.data.data);
      }
    } catch {
      setProduct(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProduct();
    const interval = setInterval(() => {
      if (document.visibilityState === "visible") {
        getProduct();
      }
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const deleteProduct = async () => {
    await api.post("/api/design/remove");
    setProduct(null);
  };

  return (
    <ProductContext.Provider
      value={{
        product,
        setProduct,
        searchTerm,
        setSearchTerm,
        cartItems,
        setCartItems,
        loading,
        getProduct,
        removeFromCart,
        setRemoveFromCart,
        totalCartAmount,
        getTotalCartAmount,
        deleteProduct,
        url,
      }}
    >
      {loading ? null : children}
    </ProductContext.Provider>
  );
};
