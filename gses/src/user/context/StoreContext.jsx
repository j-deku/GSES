import axios from "axios";
import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

export const StoreContext = createContext(null);

const StoreContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState({});
  const url = "http://localhost:5000";
  const [token, setToken] = useState("");
  const [cookie, setCookie] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [user, setUser] = useState(null); // User state
  const [decor_lists, setDecor_lists] = useState([]);

  // Check for token and fetch user data on mount
  useEffect(() => {
    const savedToken = localStorage.getItem("token");
    if (savedToken) {
      setToken(savedToken);
      // Set user data if saved
      const storedUser = JSON.parse(localStorage.getItem("user"));
      if (storedUser) {
        setUser(storedUser);
      }
    }
  }, []);

  const addToCart = async (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
    if (token) {
      await axios.post(
        `${url}/api/cart/add`,
        { itemId },
        { headers: { token } },
      );
    }
  };

  const removeFromCart = async (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    if (token) {
      await axios.post(
        `${url}/api/cart/remove`,
        { itemId },
        { headers: { token } },
      );
    }
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        const itemInfo = decor_lists.find((product) => product._id === item);
        if (itemInfo && itemInfo.price) {
          totalAmount += itemInfo.price * cartItems[item];
        } else {
          console.error("Invalid item id or price");
        }
      }
    }
    return totalAmount;
  };

  const fetchDecorList = async () => {
    const response = await axios.get(`${url}/api/design/list`);
    setDecor_lists(response.data.data);
  };

  const loadCartData = async (token) => {
    const response = await axios.post(
      `${url}/api/cart/get`,
      {},
      { headers: { token } },
    );
    setCartItems(response.data.cartData);
  };

  useEffect(() => {
    async function loadData() {
      await fetchDecorList();
      const savedToken = localStorage.getItem("token");
      if (savedToken) {
        setToken(savedToken);
        await loadCartData(savedToken);
      }
    }
    loadData();
  }, []);

  // Capture user data and avatar after Google login
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");
    const name = urlParams.get("name");
    const email = urlParams.get("email");
    const avatar = urlParams.get("avatar"); // Get avatar URL from query params

    if (token) {
      localStorage.setItem("token", token);
      const userData = { name, email, avatar }; // Store user data along with avatar
      localStorage.setItem("user", JSON.stringify(userData)); // Save to localStorage
      setUser(userData); // Update user state
    }
  }, []);

  // Context value with userData included
  const ContextValue = {
    decor_lists,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    url,
    token,
    setToken,
    cookie,
    setCookie,
    searchTerm,
    setSearchTerm,
    user, // Provide user data (including avatar)
    setUser,
  };

  return (
    <StoreContext.Provider value={ContextValue}>
      {children}
    </StoreContext.Provider>
  );
};
StoreContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StoreContextProvider;
