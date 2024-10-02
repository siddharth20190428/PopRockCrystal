import React from "react";

const Navbar = () => {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        color: "white",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <img src="./logo.svg" className="logo" alt="Vite logo" />
        <span>Pop Rock Crystal</span>
      </div>

      <ul
        style={{
          listStyle: "none",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <li>Home</li>
        <li>Shop</li>
        <li>About Us</li>
        <li>Help</li>
      </ul>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.25rem",
        }}
      >
        <span
          style={{
            background: "#FF2B77",
            color: "white",
            borderRadius: "50%",
            width: 28,
            height: 28,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          00
        </span>
        <img src="./cart-icon.svg" className="logo" alt="Vite logo" />
      </div>
    </nav>
  );
};

export default Navbar;
