/** @format */

import { Button, Container, Typography, AppBar, Toolbar } from "@mui/material";

const HomePage = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };
  return (
    <div
      style={{
        margin: 0,
        padding: 0,
        height: "100vh",
        backgroundColor: "#223545",
      }}
    >
      <Typography
        variant="h1"
        component="div"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "#41d186",
        }}
      >
        Accredian
      </Typography>

      <Container>
        <AppBar
          position="fixed"
          style={{ backgroundColor: "transparent", boxShadow: "none" }}
        >
          <Toolbar>
            <Typography
              variant="h6"
              component="div"
              sx={{
                flexGrow: 1,
                color: "#fff",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: 1.5,
                cursor: "pointer",
              }}
            >
              Accredian
            </Typography>
            <Button color="primary" onClick={() => handleLogout()}>
              Logout
            </Button>
          </Toolbar>
        </AppBar>

        <div style={{ paddingTop: "64px" }}></div>
      </Container>
    </div>
  );
};

// Function to handle logout

export default HomePage;
