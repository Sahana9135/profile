import React from "react";
import "./Header.css";
import Sahana from "./Sahana.jpeg"

const Header = () => {
  return (
    <>
    <header className="header">
      <h1>Sahana Saravanan</h1>
      <h3>JUNIOR WEB DEVELOPER</h3>
    </header>
    <div className="image">
      <img src={Sahana} alt="Profile" />
    </div>
    </>
  );
};

export default Header;
