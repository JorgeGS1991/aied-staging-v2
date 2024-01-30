import { Box, Typography } from "@mui/material";

function DBContent() {
  return (
    <Box sx={{ textAlign: "start", marginTop: "20px", padding: "50px" }}>
      <img
        src="/images/welcome.png"
        alt="Landing Page"
        className="dashboard-img"
      />
      <Typography sx={{ marginTop: "50px" }} variant="h4" gutterBottom>
        Welcome to the Work-Learn!
      </Typography>
      <Typography>
        Congratulations on starting a rewarding learning journey!
      </Typography>

      <Typography>
        We are so excited to have you here! To get started, click on “How to
        Navigate the Work-Learn Website” in the sidebar on the left side of the
        screen.
      </Typography>
    </Box>
  );
}

export default DBContent;
