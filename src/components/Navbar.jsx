import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="./logo.svg" alt="Vite logo" />
        <span>Pop Rock Crystal</span>
      </div>

      <ul className="navbar-menu">
        <li>Home</li>
        <li>Shop</li>
        <li>About Us</li>
        <li>Help</li>
      </ul>

      <div className="navbar-cart">
        <span>00</span>
        <img src="./cart-icon.svg" alt="Vite logo" />
      </div>
    </nav>
  );
};

export default Navbar;
