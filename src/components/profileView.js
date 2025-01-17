import React, { useEffect, useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import Header from "./header";
import "../css/profile.css";

const ProfileView = () => {
  const { uid } = useParams(); // This gets the user ID from the URL parameter
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("Token");
    if (!token) {
      navigate("/login");
      return;
    }

    if (uid) {
      fetch(`https://dummyjson.com/users/${uid}`)
        .then((res) => res.json())
        .then((data) => setUserData(data))
        .catch((error) => console.log(error));
    }
  }, [navigate, uid]);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  if (uid === localStorage.getItem("id")) {
    return (
      <div>
        <Header />
        <Box className="half-background" />
        <Box className="profile-container">
          <Box className="profile-box">
            <div className="profile-picture-w">
              <img
                src={userData?.image || "https://via.placeholder.com/150"}
                alt="Profile"
                className="profile-picture"
              />
            </div>
            <Typography variant="body2" className="profile-label">
              Username
            </Typography>
            <Typography variant="h6" className="profile-text">
              {userData?.username}
            </Typography>

            <Typography variant="body2" className="profile-label">
              Email
            </Typography>
            <Typography variant="h6" className="profile-text">
              {userData?.email}
            </Typography>

            <Button
              variant="outlined"
              onClick={handleLogout}
              sx={{ marginTop: 2 }}
            >
              Logout
            </Button>
          </Box>
        </Box>
      </div>
    );
  } else {
    return (
      <div>
        <Header />
        <Box className="half-background" />
        <Typography variant="body2" className="profile-text">
          Permission denied
        </Typography>
      </div>
    );
  }
};

export default ProfileView;
