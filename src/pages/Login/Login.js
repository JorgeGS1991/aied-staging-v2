import React from "react";
import axios from "axios";

import "./Login.css";

function Login() {
  //   const handleGoogleLogin = async () => {
  //     try {
  //       // Make a request to your Node.js backend's /auth/google route.
  //       const response = await axios.get("http://localhost:3001/auth/google");

  //       // Redirect to the Google OAuth page.
  //       window.location.href = response.data.authUrl;
  //     } catch (error) {
  //       // Handle error, e.g., show an error message.
  //       console.error("Error:", error);
  //     }
  //   };

  return (
    <div>
      <h2 className="login-head">Login</h2>
      <a className="google-button" href="http://localhost:3001/auth/google">
        <img
          className="google-icon"
          src="/images/google.png"
          alt="google logo"
        />
        Login with Google
      </a>

      {/* <button onClick={handleGoogleLogin}>Login with Google</button> */}
      {/* Include your email/password registration form here */}
    </div>
  );
}

export default Login;
