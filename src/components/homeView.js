import React from "react";
import Header from "./header";
import { Box, Typography, Container, Button } from "@mui/material";
import { Link } from "react-router-dom";
import "../css/home.css";
import image from "../public/image.png";

const HomeView = () => {
  return (
    <div>
      <Container className="container">
        <Box className="content-box">
          <Typography variant="h2" className="title">
            Todos, a simple Todo app
          </Typography>

          <Typography variant="h5" className="subtitle">
            Organize your tasks.
          </Typography>

          <Box className="button-container">
            <Link to="/list">
              <Button variant="contained" className="action-button">
                Get Started
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="outlined" className="action-button">
                Learn More
              </Button>
            </Link>
          </Box>
        </Box>

        <img src={image} alt="Background" className="background-image" />
      </Container>
    </div>
  );
};

export default HomeView;
