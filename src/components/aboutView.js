import React from "react";
import Header from "./header";
import "../App.css";
import "../css/about.css";
import { Link } from "react-router-dom";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Container,
  Button,
} from "@mui/material";
import image from "../public/image2.png";

const AboutView = () => (
  <div>
    <Header />
    <Box className="half-background2" />
    <Container className="container">
      <Typography variant="h1" component="h1" className="about-title">
        About Todos
      </Typography>
      <Typography variant="h6" component="p" className="about-description">
        Todos is a simple and intuitive task management app designed to help you
        stay organized and productive. Add, track, and complete tasks with ease.
      </Typography>

      <Grid container spacing={3} justifyContent="center" className="card-grid">
        <Grid item xs={12} sm={6} md={4} className="card-item">
          <Card>
            <CardContent>
              <Typography variant="h5" component="div" gutterBottom>
                Easy to Use
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Add tasks with a single click and track your progress easily.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4} className="card-item">
          <Card>
            <CardContent>
              <Typography variant="h5" component="div" gutterBottom>
                Organizing.
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Organize your tasks for a much easier workflow.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6} sm={6} md={4} className="card-item">
          <Card>
            <CardContent>
              <Typography variant="h5" component="div" gutterBottom>
                Productivity.
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Be more productive by storing everything in Todos.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
    <footer>
      <div>
        <Link to="/contact">
          <Button>Contact Us</Button>
        </Link>
        <p>Email: todos@todos.com</p>
        <p>Phone: +358123456789</p>
      </div>
    </footer>
    <img src={image} alt="Background" className="background-image2" />
  </div>
);

export default AboutView;
