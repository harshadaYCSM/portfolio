import React, { useState } from "react";
import "../styles/Header.css";
// import Mobile from "./mobile";
// import Web from "./web/index";
import NavBar from "../components/NavBar"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="header">
      <div className="logo"></div>
      <div className="menu">
        <div className="web-menu">
          {/* <Web /> */}
          <NavBar />
        </div>
        <div className="mobile-menu">
          <div onClick={() => setIsOpen(!isOpen)}>
            <i className="fi-rr-apps menu-icon"></i>
          </div>
          {/* {isOpen && <Mobile isOpen={isOpen} setIsOpen={setIsOpen} />} */}
        </div>
      </div>
    </div>
  );
}

export default Header;