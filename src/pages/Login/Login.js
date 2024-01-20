import { Button, Box, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { setUser, setUserRole } from "../../redux/actions/userActions";

import "./Login.css";

function Login({ setUser, setUserRole }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        // "http://localhost:3001/login",
        "https://aied-staging-backend.vercel.app/login",
        {
          username,
          password,
        },
        { withCredentials: true }
      );
      const { token, user } = response.data;
      setUser(user.firstName + " " + user.lastName);
      setUserRole(user.role);
      localStorage.setItem("token", token);
      history("/dashboard");
    } catch (error) {
      console.error(error);
    }
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
      <Typography variant="h4">Login</Typography>
      <TextField
        label="Username"
        variant="outlined"
        sx={{ width: "60%", margin: "20px auto", background: "#fff" }}
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
          marginTop: "0",
          background: "#fff",
        }}
        margin="normal"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button
        sx={{ width: "20%", margin: "auto", marginBottom: "30px" }}
        variant="contained"
        color="error"
        onClick={handleLogin}
      >
        Login
      </Button>
      <Link
        to="/register"
        style={{ padding: "0 20px", textDecoration: "underline" }}
      >
        Not a member? Start here
      </Link>
    </Box>
  );
}

const mapStateToProps = (state) => ({
  user: state.user.user,
});
export default connect(mapStateToProps, { setUser, setUserRole })(Login);
