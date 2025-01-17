import React from "react";
import Header from "./header";
import { Box, Typography, Container, TextField, Button } from "@mui/material";
import "../css/login.css";
import { useState } from "react";
import { useNavigate } from "react-router";

const LoginView = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  let nav = useNavigate();

  const handleLogin = () => {
    console.log("Sending login request...");
    fetch("https://dummyjson.com/user/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: email,
        password: password,
        expiresInMins: 30,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.accessToken) {
          localStorage.setItem("Token", data.accessToken);
          localStorage.setItem("id", data.id);
          console.log(localStorage);
          nav("/list");
        } else {
          setError("Wrong username or password, try again.");
          console.log(error);
        }
      })
      .catch((error) => {
        console.error("Error, please try again later.", error.message);
      });
  };

  return (
    <div>
      <Header />
      <Box className="half-background1" />
      <Container maxWidth="xs" className="login-container">
        <Box className="login-box" sx={{ padding: 4, textAlign: "center" }}>
          <Typography variant="h4" className="login-title" gutterBottom>
            Login
          </Typography>

          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            onChange={(e) => setEmail(e.target.value)}
          />

          <TextField
            label="Password"
            variant="outlined"
            type="password"
            fullWidth
            margin="normal"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Box sx={{ marginTop: 2 }}>
            <Button
              variant="contained"
              fullWidth
              sx={{
                marginBottom: 2,
              }}
              onClick={handleLogin}
            >
              Login
            </Button>
          </Box>
          {error && (
            <Typography variant="body2" color="error" sx={{ marginTop: 2 }}>
              {error}
            </Typography>
          )}
        </Box>
      </Container>
    </div>
  );
};

export default LoginView;
