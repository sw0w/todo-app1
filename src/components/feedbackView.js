import Header from "./header";
import React from "react";
import { Button, Typography, Box } from "@mui/material";
import "../css/feedback.css";

const FeedbackView = () => {
  return (
    <>
      <Header />
      <Box className="half-background" />
      <div className="wrapper">
        <div className="contact-container">
          <Typography variant="h5" className="contact-title">
            Contact Us
          </Typography>
          <form className="contact-form">
            <Button
              variant="contained"
              color="primary"
              className="contact-button"
            >
              Submit
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default FeedbackView;
