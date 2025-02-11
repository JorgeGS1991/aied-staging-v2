import React, { useEffect, useState } from "react";
import axios from "axios";
import MUIDataTable from "mui-datatables";
import { CircularProgress, Box, Typography } from "@mui/material";
import "./QuizAnalytics.css";  



const QuizAnalytics = () => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalQuestions, setTotalQuestions] = useState(5); // Default value

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/users`)
      .then((response) => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
        setLoading(false);
      });

    // Fetch total questions if API provides it
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/quiz-info`)
      .then((response) => {
        if (response.data.totalQuestions) {
          setTotalQuestions(response.data.totalQuestions);
        }
      })
      .catch((error) => console.error("Error fetching total questions:", error));
  }, []);

  const replaceNegativeScores = (score) => (score < 0 ? 0 : score);

  const calculatePercentage = (score, total) => {
    if (!score || score < 0) score = 0;
    if (!total || total <= 0) return "0%";

    let percentage = (score / total) * 100;
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;

    return percentage.toFixed(2) + "%";
  };

  const columns = [
    { name: "username", label: "Username", options: { filter: false, sort: true } },
    { name: "firstName", label: "First Name", options: { filter: false, sort: true } },
    { name: "lastName", label: "Last Name", options: { filter: false, sort: true } },
    { name: "introScore", label: "Intro Score", options: { filter: true, sort: true } },
    { name: "introPercentage", label: "Intro Percentage", options: { filter: true, sort: true } },
    { name: "beyondScore", label: "Beyond Score", options: { filter: true, sort: true } },
    { name: "beyondPercentage", label: "Beyond Percentage", options: { filter: true, sort: true } },
    { name: "decompositionScore", label: "Decomposition Score", options: { filter: true, sort: true } },
    { name: "decompositionPercentage", label: "Decomposition Percentage", options: { filter: true, sort: true } },
    { name: "algorithmScore", label: "Algorithm Score", options: { filter: true, sort: true } },
    { name: "algorithmPercentage", label: "Algorithm Percentage", options: { filter: true, sort: true } },
    { name: "pythonOneScore", label: "pythonOne Score",  options: { filter: false, sort: true } },
    { name: "pythonOnePercentage", label: "pythonOne Percentage",  options: { filter: false, sort: true } },
    { name: "pythonTwoScore", label: "pythonTwoScore",  options: { filter: false, sort: true } },
    { name: "pythonTwoPercentage", label: "pythonTwo Percentage",  options: { filter: false, sort: true } },
    { name: "pythonThreeScore", label: "pythonThreeScore",  options: { filter: false, sort: true } },
    { name: "pythonThreePercentage", label: "pythonThree Percentage",  options: { filter: false, sort: true } },
    { name: "pythonFiveScore", label: "pythonFiveScore",  options: { filter: false, sort: true } },
    { name: "pythonFivePercentage", label: "pythonFive Percentage",  options: { filter: false, sort: true } },
    { name: "pythonSixScore", label: "pythonSixScore",  options: { filter: false, sort: true } },
    { name: "pythonSixPercentage", label: "pythonSix Percentage",  options: { filter: false, sort: true } },
    { name: "pythonSevenScore", label: "pythonSevenScore",  options: { filter: false, sort: true } },
    { name: "pythonSevenPercentage", label: "pythonSeven Percentage",  options: { filter: false, sort: true } },

  ];

  const options = {
    filterType: "checkbox",
    responsive: "standard",
    rowsPerPage: 10,
    pagination: true,
    selectableRows: "none",
  };

  const data = users.map((user) => ({
    username: user.username,
    firstName: user.firstName,
    lastName: user.lastName,
    introScore: replaceNegativeScores(user.introScore),
    introPercentage: calculatePercentage(user.introScore, totalQuestions),
    beyondScore: replaceNegativeScores(user.beyondScore),
    beyondPercentage: calculatePercentage(user.beyondScore, totalQuestions),
    decompositionScore: replaceNegativeScores(user.decompositionScore),
    decompositionPercentage: calculatePercentage(user.decompositionScore, totalQuestions),
    algorithmScore: replaceNegativeScores(user.algorithmScore),
    algorithmPercentage: calculatePercentage(user.algorithmScore, totalQuestions),
    pythonOneScore: replaceNegativeScores(user.pythonOneScore),
    pythonOnePercentage: calculatePercentage(user.pythonOneScore, totalQuestions),
    pythonTwoScore: replaceNegativeScores(user.pythonTwoScore),
    pythonTwoPercentage: calculatePercentage(user.pythonTwoScore, totalQuestions ),
    pythonThreeScore: replaceNegativeScores(user.pythonThreeScore),
    pythonThreePercentage: calculatePercentage(user.pythonThreeScore, totalQuestions),
    pythonFiveScore: replaceNegativeScores(user.pythonFiveScore),
    pythonFivePercentage: calculatePercentage(user.pythonFiveScore, totalQuestions ),
    pythonSixScore: replaceNegativeScores(user.pythonSixScore),
    pythonSixPercentage: calculatePercentage(user.pythonSixScore, totalQuestions ),
    pythonSevenScore: replaceNegativeScores(user.pythonSevenScore),
    pythonSevenPercentage: calculatePercentage(user.pythonSevenScore, totalQuestions ),

  }));

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h6">Filter by Type</Typography>
        <FormGroup
          sx={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr" }}
        >
          {Array.from(new Set(questions.map((question) => question.type))).map(
            (type, index) => (
              <FormControlLabel
                control={
                  <Checkbox
                    key={index}
                    checked={selectedTypes.includes(type)}
                    onChange={() => handleTypeChange(type)}
                    label={type}
                  />
                }
                label={
                  type.includes("python")
                    ? type.replace("python", "python-lesson-")
                    : type
                }
              />
            )
          )}
        </FormGroup>
      </Grid>
      {loading ? (
        <Grid item xs={12} sx={{ textAlign: "center" }}>
          <CircularProgress />
          <Typography variant="h6" sx={{ marginTop: "10px" }}>
            Loading student data...
          </Typography>
        </Box>
      ) : (
        <MUIDataTable
          title={"Student Scores and Percentages"}
          data={data}
          columns={columns}
          options={options}
          style={{ textAlign: "center" }}
        />
      )}
    </Box>
  );
};

export default QuizAnalytics;
