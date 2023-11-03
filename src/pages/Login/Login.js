import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import RoleSelectionForm from "../../components/RoleSelectionForm/RoleSelectionForm";
import { connect } from "react-redux";

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
        marginTop: "100px",
        // height: "100vh",
      }}
    >
      <Typography variant="h4" gutterBottom>
        Login
      </Typography>
      <Link
        to="http://localhost:3001/auth/google"
        underline="none"
        sx={{
          // marginTop: "100px",
          "&:hover": {
            backgroundColor: "#3367D6",
            textDecoration: "none",
          },
        }}
      >
        <Button
          variant="contained"
          color="primary"
          sx={{
            borderRadius: "8px",
            padding: "12px 24px",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <svg
            class="w-4 h-4 mr-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 18 19"
          >
            <path
              fill-rule="evenodd"
              d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z"
              clip-rule="evenodd"
            />
          </svg>
          Sign in with Google
        </Button>
      </Link>
      {role !== null && <RoleSelectionForm onRoleSelect={handleRoleSelect} />}
    </Box>
  );
}

const mapStateToProps = (state) => ({
  role: state.user.role,
});

export default connect(mapStateToProps, { setUserRole })(Login);
