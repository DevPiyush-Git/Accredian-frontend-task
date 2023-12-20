/** @format */

import { useState } from "react";
import { TextField, Button, Container, Typography, Box } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const SignupForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let navigate = useNavigate();

  const handleSignup = async () => {
    const data = {
      email,
      password,
    };

    await axios
      .post("http://localhost:3000/users/login", data)
      .then((response) => {
        console.log(response.data);
        navigate("/home");
      })
      .catch((error) => {
        console.log("err", error.message);
      });
  };

  return (
    <>
      <Container
        component="main"
        maxWidth="xs"
        sx={{
          backgroundColor: "#000000",
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            boxShadow: "6px 9px 20px -9px rgba(95,192,135,1)",
            padding: 4,
            borderRadius: 8,
            backgroundColor: "#f8f8f8",
            width: "100%",
          }}
        >
          <Typography
            component="h1"
            variant="h5"
            sx={{ color: "#333", marginBottom: 3 }}
          >
            🚀 Sign In
          </Typography>
          <form>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="new-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Typography variant="body2" color="textSecondary" align="left">
              <Link to="/" color="primary">
                Forgot Password?{" "}
              </Link>
            </Typography>

            <Button
              type="button"
              fullWidth
              variant="contained"
              color="primary"
              sx={{ mt: 3, mb: 2, backgroundColor: "#5fc087" }}
              onClick={handleSignup}
            >
              Sign In
            </Button>
            <Typography variant="body2" color="textSecondary" align="center">
              New to Accredian?{" "}
              <Link to="/" color="primary">
                Sign Up
              </Link>
            </Typography>
          </form>
        </Box>
      </Container>
    </>
  );
};

export default SignupForm;
