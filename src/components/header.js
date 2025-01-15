import React from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import "../css/header.css";

const Header = () => {
  return (
    <header>
      <Box>
        <Link to="/">
          <Button variant="text">Home</Button>
        </Link>
        <Link to="/list">
          <Button variant="text">List</Button>
        </Link>
        <Link to="/about">
          <Button variant="text">About</Button>
        </Link>
      </Box>
    </header>
  );
};

export default Header;
