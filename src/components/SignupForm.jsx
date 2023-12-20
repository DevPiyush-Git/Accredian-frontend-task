/** @format */

import { useState } from "react";
import { TextField, Button, Container, Typography, Box } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const SignupForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [exist, setExist] = useState(false);

  let navigate = useNavigate();
  const handleSignup = async (e) => {
    e.preventDefault();
    const data = {
      username,
      email,
      password,
    };
    if (password !== confirmPassword) {
      setPasswordsMatch(false);
      return;
    }
    await axios
      .post("http://localhost:3000/users", data)
      .then((response) => {
        console.log(response);
        navigate("/home");
      })
      .catch((error) => {
        console.log(error.response.data);
        if (error.response.data) {
          setExist(true);
        }
      });
  };

  return (
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
          🚀 Sign Up
        </Typography>
        <form>
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            autoFocus
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

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

          <TextField
            margin="normal"
            required
            fullWidth
            name="confirmPassword"
            label="Confirm Password"
            type="password"
            id="confirmPassword"
            autoComplete="new-password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            error={!passwordsMatch}
            helperText={!passwordsMatch && "Passwords do not match"}
          />
          <Typography variant="body1" align="center" color="error">
            {exist && "Username or Email already exists"}
          </Typography>

          <Button
            type="button"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 3, mb: 2, backgroundColor: "#5fc087" }}
            onClick={handleSignup}
          >
            Register
          </Button>
          <Typography variant="body2" color="textSecondary" align="center">
            Already a member?{" "}
            <Link to="/login" color="primary">
              Log in
            </Link>
          </Typography>
        </form>
      </Box>
    </Container>
  );
};

export default SignupForm;
