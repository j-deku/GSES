import React from "react";
import User from "./Layouts/User/User";
import Admin from "./Layouts/admin/admin";
import { Routes, Route } from "react-router-dom";

//admin routes
import Add from "./admin/adminPages/Add/Add";
import Lists from "./admin/adminPages/Lists/Lists";
import Orders from "./admin/adminPages/Orders/Orders";
import Notification from "./admin/adminPages/Notification/Notification";
import Home from "./user/userPages/Home/Home";
import NewsFeed from "./user/userComponents/NewsFeed/NewsFeed";
import Privacy_Policy from "./user/userComponents/Policy/PrivacyPolicy";
import DeliveryInfo from "./user/userComponents/DeliveryInfo/DeliveryInfo";
import AboutUs from "./user/userComponents/AboutUs/AboutUs";
import Faq from "./user/userComponents/Faq/Faq";
import ProductPage from "./user/userPages/ProductPage/ProductPage";
import GalleryPage from "./user/userPages/GalleryPage/GalleryPage";
import Verify from "./user/userPages/Verify/Verify";
import ProfileDetails from "./user/userComponents/ProfileDetails/ProfileDetails";
import BookingPage from "./user/userPages/BookingPage/BookingPage";
import MyOrders from "./user/userPages/MyOrders/MyOrders";
import VerifyOTP from "./user/userComponents/VerifyOTP/VerifyOTP";
import PasswordReset from "./user/userComponents/PasswordReset/PasswordReset";

const App = ({ setLogin }) => {
  return (
    <div>
      <Routes>
        <Route path="/*" element={<User setLogin={setLogin} />}>
          <Route index element={<Home />} />
          <Route path="newsFeed" element={<NewsFeed />} />
          <Route path="privacy-policy" element={<Privacy_Policy />} />
          <Route path="deliveryInfo" element={<DeliveryInfo />} />
          <Route path="aboutUs" element={<AboutUs />} />
          <Route path="message-us" element={<Faq />} />
          <Route path="products" element={<ProductPage />} />
          <Route path="gallery" element={<GalleryPage />} />
          <Route path="verify" element={<Verify />} />
          <Route path="profile" element={<ProfileDetails />} />
          <Route path="booking" element={<BookingPage />} />
          <Route path="myOrders" element={<MyOrders />} />
          <Route
            path="verify-otp"
            element={<VerifyOTP setLogin={setLogin} />}
          />
          <Route path="password-reset" element={<PasswordReset />} />
        </Route>

        {/* Admin Routes */}
        <Route path="/admin" element={<Admin />}>
          <Route index element={<Add />} />
          <Route path="add" element={<Add />} />
          <Route path="list" element={<Lists />} />
          <Route path="order" element={<Orders />} />
          <Route path="notification" element={<Notification />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
