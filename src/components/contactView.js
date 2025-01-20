import Header from "./header";
import React from "react";
import { useState } from "react";
import { TextField, Button, Typography, Box } from "@mui/material";
import "../css/contact.css";
import { useFormStatus } from "react-dom";

const ContactView = () => {
  const [errors, setErrors] = useState({});
  const { pending, data, error } = useFormStatus();

  const handleChange = (e) => {
    const { name, value } = e.target;
    handleValidation(name, value);
  };

  // Field validation
  const handleValidation = (name, value) => {
    const isEmpty = (v) => v.trim() === "";
    const isTooShort = (v, minLength) => v.length < minLength;
    const isValidEmail = (v) => /\S+@\S+\.\S+/.test(v);

    /*
    
        To do: Fix the function below as in: fix the helpertext error to show up
        on both of the textfields, instead of only on where the error was.

        add limitations to message length and a submit ratelimit to prevent spam
        ^^ as if this was a real app

        better interface styling and make it match with the rest of the site.

    */

    const containsUnsupportedCharacters = (v) => /[\d\s\W]/.test(v);

    let validationErrors = { ...errors };

    if (isEmpty(value)) {
      validationErrors[name] = `${name} cannot be empty`;
    } else if (isTooShort(value, 3) && name !== "message") {
      validationErrors[name] = `${name} cannot be shorter than 3 letters.`;
    } else if (name === "email" && !isValidEmail(value)) {
      validationErrors[name] = `${name} doesn't contain a valid email`;
    } else if (containsUnsupportedCharacters(value) && name !== "email") {
      validationErrors[name] = `${name} contains invalid characters.`;
    } else {
      delete validationErrors[name];
    }
    setErrors(validationErrors);
  };

  const submitForm = async (event) => {
    event.preventDefault();

    const hasErrors = Object.keys(errors).length > 0;
    if (hasErrors) {
      console.log("Errors:", errors);
    } else {
      const formData = new FormData(event.target);
      const formObject = Object.fromEntries(formData.entries());
      console.log("Form submitted with data:", formObject);

      try {
        const response = await fetch(
          "https://dummyjson.com/c/7237-500e-488f-a50c",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formObject),
          }
        );

        if (!response.ok) {
          throw new Error("Failed to submit. Try again later.");
        }

        const result = await response.json();
        console.log("Success:", result);
      } catch (error) {
        console.error("Error submitting feedback:", error.message);
      }
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
              if (!pending) {
                submitForm(e);
              }
            }}
          >
            <TextField
              fullWidth
              required
              label="Name"
              name="name"
              variant="standard"
              className="contact-field"
              onChange={handleChange}
              error={!!errors?.name}
              helperText={errors?.name?.message || "Type your name"}
            />
            <TextField
              fullWidth
              required
              label="Email"
              name="email"
              variant="standard"
              className="contact-field"
              onChange={handleChange}
              error={!!errors?.name}
              helperText={errors?.name?.message || "Type your email"}
            />
            <TextField
              fullWidth
              required
              label="Message"
              name="message"
              multiline
              rows={4}
              variant="standard"
              className="contact-field"
              onChange={handleChange}
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
