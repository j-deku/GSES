import Navbar from "../../admin/adminComponents/Navbar/Navbar";
import { Outlet, Route, Routes } from "react-router-dom";

import "./Admin.css";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Sidebar from "../../admin/adminComponents/Sidebar/Sidebar";
const Admin = () => {
  return (
    <div>
      <ToastContainer />
      <Navbar />
      <hr />
      <div className="app-content">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
};

export default Admin;
