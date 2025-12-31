import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Route, Router, Routes } from "react-router-dom";
import Cart from "./Pages/Cart/Cart";
import PlaceOrder from "./Pages/PlaceOrder/PlaceOrder";
import MyOrders from "./Pages/MyOrders/MyOrders";
import Verify from "./Pages/Verify/Verify";
import Footer from "./components/Footer/Footer";
import NewsFeed from "./components/NewsFeed/NewsFeed";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import LoadingPage from "./components/LoadingPage/LoadingPage";
import DeliveryInfo from "./components/DeliveryInfo/DeliveryInfo";
import AboutUs from "./components/AboutUs/AboutUs";
import { loadAllImages } from "./utils/loadImages";
import VerifyOTP from "./components/VerifyOTP/VerifyOTP";
import PasswordReset from "./components/PasswordReset/PasswordReset";
import Home from "./pages/Home/Home";
import LoginForm from "./components/LoginForm/LoginForm";
import Register from "./components/Register/Register";
import PrivacyPolicy from "./components/PrivacyPolicy/PrivacyPolicy";

const App = () => {
  const [isLoading, setIsLoading] = useState(
    () => !sessionStorage.getItem("assetsLoaded")
  );

  useEffect(() => {
    const preloadAssets = async () => {
      if (!localStorage.getItem("assetsLoaded")) {
        await loadAllImages();
        localStorage.setItem("assetsLoaded", "true");
      }
      sessionStorage.setItem("assetsLoaded", "true");
      setIsLoading(false);
    };

    if (isLoading) {
      preloadAssets();
    }
  }, [isLoading]);

  return (
    <div>
      <ToastContainer position="top-left" />
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginForm/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/newsFeed" element={<NewsFeed />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/deliveryInfo" element={<DeliveryInfo />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/verify" element={<Verify />} />
          <Route path="/order" element={<PlaceOrder />} />
          <Route path="/myOrders" element={<MyOrders />} />
          <Route
            path="/verify-otp"
            element={<VerifyOTP/>}
          />
          <Route path="/password-reset" element={<PasswordReset />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
