import {
  Alert,
  Box,
  Button,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";
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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const history = useNavigate();
  const handleRegister = async () => {
    try {
      await axios.post(`${process.env.REACT_APP_BACKEND_URL}/register`, {
        firstName,
        lastName,
        username,
        email,
        password,
        confirmPassword,
        role: role ? role : "'student'",
      });
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
        label={
          <InputLabel htmlFor="firstName" required>
            First Name
          </InputLabel>
        }
        variant="outlined"
        sx={{ width: "60%", margin: "20px auto", background: "#fff" }}
        margin="normal"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        id="firstName"
      />
      <TextField
        label={
          <InputLabel htmlFor="lastName" required>
            Last Name
          </InputLabel>
        }
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
        id="lastName"
      />
      <TextField
        label={
          <InputLabel htmlFor="username" required>
            Username
          </InputLabel>
        }
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
        id="username"
      />
      <TextField
        label={
          <InputLabel htmlFor="email" required>
            Email
          </InputLabel>
        }
        variant="outlined"
        sx={{
          width: "60%",
          margin: "20px auto",
          background: "#fff",
          marginTop: "0",
        }}
        margin="normal"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        id="email"
      />
      <TextField
        label={
          <InputLabel htmlFor="password" required>
            Password
          </InputLabel>
        }
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
        id="password"
      />
      <TextField
        label={
          <InputLabel htmlFor="confirmPassword" required>
            Confirm Password
          </InputLabel>
        }
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
        id="confirmPassword"
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
