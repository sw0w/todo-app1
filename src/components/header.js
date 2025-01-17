import React from "react";
import { Link, useLocation } from "react-router-dom";
import Box from "@mui/material/Box";
import { Button } from "@mui/material/";
import "../css/header.css";
import Login from "./login.js";

const Header = () => {
  const location = useLocation();
  const isLoggedIn = localStorage.getItem("Token");
  return (
    <header className="header">
      <Box className="button-container1">
        <div className="left">
          <Link to="/">
            <Button
              variant="text"
              className={`nav-button ${
                location.pathname === "/" ? "active" : ""
              }`}
            >
              Home
            </Button>
          </Link>
          {isLoggedIn && (
            <Link to="/list">
              <Button
                variant="text"
                className={`nav-button ${
                  location.pathname === "/list" ? "active" : ""
                }`}
              >
                List
              </Button>
            </Link>
          )}

          <Link to="/about">
            <Button
              variant="text"
              className={`nav-button ${
                location.pathname === "/about" ? "active" : ""
              }`}
            >
              About
            </Button>
          </Link>
        </div>
        <Login />
      </Box>
    </header>
  );
};

export default Header;
