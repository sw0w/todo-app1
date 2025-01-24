import Header from "./header";
import React from "react";
import { TextField, Button, Typography, Box } from "@mui/material";
import "../css/contact.css";
import { useForm } from "react-hook-form";

const ContactView = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function SubmitForm(event) {
    try {
      const response = await fetch(
        "https://dummyjson.com/c/7237-500e-488f-a50c",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(event),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to submit. Try again later.");
      }

      const result = await response.json();
      console.log("Success:", result);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  return (
    <>
      <Header />
      <Box className="half-background" />
      <div className="wrapper">
        <div className="contact-title-container">
          <Typography variant="h1" className="contact-title">
            Contact Us
          </Typography>
          <Typography variant="h5" className="contact-subtitle">
            We’d love to hear from you!
          </Typography>
        </div>

        <div className="contact-container">
          <form className="contact-form" onSubmit={handleSubmit(SubmitForm)}>
            <div className="name-email-container">
              <TextField
                fullWidth
                label="Name"
                name="name"
                variant="standard"
                className="contact-field"
                {...register("name", {
                  required: "Name is required",
                  pattern: {
                    value: /^[a-zA-Z ]+$/,
                    message: "Invalid name format",
                  },
                })}
                error={!!errors?.name}
                helperText={errors?.name?.message || "Type your name here"}
              />
              <TextField
                fullWidth
                label="Email"
                name="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Invalid email format",
                  },
                })}
                variant="standard"
                className="contact-field"
                error={!!errors?.email}
                helperText={errors?.email?.message || "Type your email here"}
              />
            </div>

            <TextField
              fullWidth
              label="Message"
              name="message"
              multiline
              rows={4}
              variant="standard"
              className="contact-field"
              {...register("message", {
                required: "Message is required",
              })}
              error={!!errors?.message}
              helperText={errors?.message?.message || "Type your message here"}
            />

            <Button
              variant="contained"
              color="primary"
              className="contact-button"
              type="submit"
            >
              Submit
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactView;
