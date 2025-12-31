import React from "react";
import './Navbar.css'
import { FaCartPlus, FaUserCircle } from 'react-icons/fa'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <img src="/GSES-logo.jpg" alt="GSES Logo" className="logo" />
      </div>

      <div className="navbar-center">
        <ul>
          <li>
            <a>HOME</a>
            <a>DASHBOARD</a>
            <a>PRODUCTS</a>
            <a>CONTACT</a>
          </li>
        </ul>
      </div>

      <div className="navbar-right">
        
        <FaCartPlus size={40} style={{cursor:'pointer', marginRight:40}}/>
        <FaUserCircle size={40} style={{cursor:"pointer"}}/>
      </div>
    </div>
  );
};

export default Navbar;
