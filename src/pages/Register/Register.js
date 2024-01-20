import { Alert, Box, Button, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router";
import RoleSelectionForm from "../../components/RoleSelectionForm/RoleSelectionForm";
import { setUserRole } from "../../redux/actions/userActions";

function Register({ role, setUserRole }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const history = useNavigate();
  const handleRegister = async () => {
    try {
      const response = await axios.post(
        "https://aied-staging-backend.vercel.app/register",
        {
          firstName,
          lastName,
          username,
          password,
          confirmPassword,
          role: role ? role : "'student'",
        }
      );
      history("/login");
    } catch (error) {
      console.error(error);
      setError(error.response.data.message);
    }
  };
  const handleRoleSelect = (role) => {
    // Handle the selected role (send to the server, store in state, etc.)
    setUserRole(role);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "50%",
        padding: "20px 50px",
        margin: "auto",
        marginTop: "50px",
        background: "#eee",
        boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
      }}
    >
      <Typography variant="h4">Create Your Account</Typography>
      {error && <Alert severity="error">{error}</Alert>}
      <TextField
        label="First Name"
        variant="outlined"
        sx={{ width: "60%", margin: "20px auto", background: "#fff" }}
        margin="normal"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <TextField
        label="Last Name"
        variant="outlined"
        sx={{
          width: "60%",
          margin: "20px auto",
          background: "#fff",
          marginTop: "0",
        }}
        margin="normal"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <TextField
        label="Username"
        variant="outlined"
        sx={{
          width: "60%",
          margin: "20px auto",
          background: "#fff",
          marginTop: "0",
        }}
        margin="normal"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <TextField
        label="Password"
        type="password"
        variant="outlined"
        sx={{
          width: "60%",
          margin: "20px auto",
          background: "#fff",
          marginTop: "0",
        }}
        margin="normal"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <TextField
        label="Confirm Password"
        type="password"
        variant="outlined"
        sx={{
          width: "60%",
          margin: "20px auto",
          background: "#fff",
          marginTop: "0",
        }}
        margin="normal"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <div className="login-as">
        Register as
        {role !== null && <RoleSelectionForm onRoleSelect={handleRoleSelect} />}
      </div>
      <Button
        sx={{ width: "20%", margin: "auto" }}
        variant="contained"
        color="error"
        onClick={handleRegister}
      >
        Register
      </Button>
    </Box>
  );
}

const mapStateToProps = (state) => ({
  role: state.user.role,
});

export default connect(mapStateToProps, { setUserRole })(Register);
