import React from "react";
import Header from "./header";
import "../App.css";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Container,
} from "@mui/material";

import image from "../public/image2.png";

const AboutView = () => (
  <div>
    <Header />
    <Box className="half-background" />
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "2rem",
        minHeight: "100vh",
        boxSizing: "border-box",
      }}
    >
      <Typography variant="h1" component="h1" gutterBottom>
        About Todos
      </Typography>
      <Typography variant="h6" component="p" sx={{ marginBottom: "2rem" }}>
        Todos is a simple and intuitive task management app designed to help you
        stay organized and productive. Add, track, and complete tasks with ease.
      </Typography>

      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="div" gutterBottom>
                Easy to Use
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Add tasks with a single click and track you progress easily.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="div" gutterBottom>
                Organizing.
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Organize your tasks for way easier workflow.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
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
    <img src={image} alt="Background" className="background-image2" />
  </div>
);

export default AboutView;
