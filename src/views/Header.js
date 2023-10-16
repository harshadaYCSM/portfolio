import React, { useState } from "react";
import NavBar from "../components/NavBar"
import "../styles/Header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="header">
      <div className="logo"></div>
      <div className="menu">
        <div className="web-menu">
          <NavBar />
        </div>
        <div className="mobile-menu">
          <div onClick={() => setIsOpen(!isOpen)}>
            <i className="fi-rr-apps menu-icon"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;