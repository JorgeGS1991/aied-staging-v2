import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import RoleSelectionForm from "../../components/RoleSelectionForm/RoleSelectionForm";
import { connect } from "react-redux";
import { IconButton } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

import "./Login.css";
import { setUserRole } from "../../redux/actions/userActions";
import axios from "axios";

function Login({ setUserRole, role }) {
  const [formData, setFormData] = useState({
    googleId: "",
    displayName: "",
    email: "",
    role: "student",
  });

  const handleRoleSelect = (role) => {
    // Handle the selected role (send to the server, store in state, etc.)
    setUserRole(role);
    console.log("Selected Role:", role);
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "start",
        // width: "500px",
        marginTop: "100px",
        padding: "20px", // Added padding for spacing
        // backgroundColor: "#eee", // Background color following Material Design guidelines
        borderRadius: "8px", // Optional: Add border radius for rounded corners
        // height: "100vh",
      }}
    >
      <Typography variant="h4" gutterBottom>
        Login
      </Typography>
      <Link
        to="http://localhost:3001/auth/google"
        style={{ textDecoration: "none", marginTop: "20px" }}
      >
        <Button
          variant="filled"
          color="primary"
          sx={{
            textTransform: "capitalize",
            borderRadius: "8px",
            padding: "10px 34px",
            border: "1px solid #333",
            fontSize: "0.95em",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
            "&:hover": {
              backgroundColor: "#3367D6",
              color: "#ffffff",
            },
          }}
        >
          <img
            src="/images/search.png"
            alt="google icon"
            className="google-icon"
          />
          Sign in with Google
        </Button>
      </Link>
      <div className="login-as">--- Login as ---</div>
      {role !== null && <RoleSelectionForm onRoleSelect={handleRoleSelect} />}
    </Box>
  );
}

const mapStateToProps = (state) => ({
  role: state.user.role,
});

export default connect(mapStateToProps, { setUserRole })(Login);
