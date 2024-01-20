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
        Welcome to the Work-Learn Curriculum!
      </Typography>
      <Typography>
        Congratulations on starting a rewarding learning journey!
      </Typography>

      <Typography variant="h5" sx={{ my: 2 }} gutterBottom>
        What is Work-Learn?
      </Typography>
      <Typography>
        The Work-Learn project is intended to prepare you for careers in the
        Tech sector. In this curriculum, you will learn about three main topics:
        Computational Thinking, COBOL, and Python. They are designed by ______
        And more details/broad info about how the curriculum is structured
        (Maggie or Phillip might know how to write this better than I do)…
      </Typography>

      <hr style={{ margin: "20px 0" }} />

      <Typography variant="h5" sx={{ my: 2 }}>
        Project and the Team
      </Typography>
      <Typography>
        This curriculum is currently being piloted through National Science
        Foundation (Grant #___). This is a joint venture between the University
        of Nebraska Omaha, Southern Methodist University, and Sienna Francis
        House. The project team consists of Dr. Magie Hall (Principal
        Investigator), Dr. Michelle Friend (Co-PI), Dr. Alexandra Pavlakis
        (Co-PI), and Dr, Wang Min (Postdoctoral Fellow). If you have any
        questions about the project or the curriculum, please contact ______
      </Typography>
    </Box>
  );
}

export default DBContent;
