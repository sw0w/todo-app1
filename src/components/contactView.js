import Header from "./header";
import React from "react";
import { TextField, Button, Typography, Box } from "@mui/material";
import "../css/contact.css";
import { useFormStatus } from "react-dom";

const ContactView = () => {
  const { pending, data, error } = useFormStatus();

  const submitForm = async (formData) => {
    console.log("Form submitted with data:", formData);

    try {
      const response = await fetch(
        "https://dummyjson.com/c/7237-500e-488f-a50c",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to submit. Try again later.");
      }

      const result = await response.json();
      console.log("Success:", result);
    } catch (error) {
      console.error("Error submitting feedback:", err.message);
    }
  };

  return (
    <>
      <Header />
      <Box className="half-background" />
      <div className="wrapper">
        <div className="contact-container">
          <Typography variant="h5" className="contact-title">
            Contact Us
          </Typography>
          <form
            className="contact-form"
            onSubmit={(e) => {
              e.preventDefault();
              submitForm();
            }}
          >
            <TextField
              fullWidth
              label="Name"
              name="name"
              required
              variant="outlined"
              className="contact-field"
            />
            <TextField
              fullWidth
              label="Email"
              name="email"
              type="email"
              required
              variant="outlined"
              className="contact-field"
            />
            <TextField
              fullWidth
              label="Message"
              name="message"
              multiline
              rows={4}
              required
              variant="outlined"
              className="contact-field"
            />
            <Button
              variant="contained"
              color="primary"
              className="contact-button"
              type="submit"
              disabled={pending}
            >
              {pending ? "Submitting..." : "Submit"}
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactView;
