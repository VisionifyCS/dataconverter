import React from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="navbar">
        <nav
          className="navbarheading"
          onClick={() => {
            navigate("/");
          }}
        >
          <h1 className="navbar-h1">
            DATA<span style={{ color: "Orange" }}>CONVERTER</span>
          </h1>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
