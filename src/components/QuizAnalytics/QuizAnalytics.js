import React, { useEffect, useState } from "react";
import axios from "axios";
import MUIDataTable from "mui-datatables";
import { CircularProgress, Box, Typography } from "@mui/material";
import "./QuizAnalytics.css";

const StudentScores = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [quizTotals, setQuizTotals] = useState({});

  //  Correct Mapping Based on Given Quiz Types
  const quizNameMapping = {
    intro: "intro",
    decomposition: "decomposition",
    abstraction: "abstraction",
    pattern:"patternRecognition",
    beyond: "beyond",
    algorithm: "algorithms",
    review: "review",
    pythonone: "python1",
    pythontwo: "python2",
    pythonthree: "python3",
    pythonfive: "python5",
    pythonsix: "python6",
    pythonseven: "python7",
    mainframeOne: "mainframe1",
  };

  console.log("Quiz Name Mapping:", quizNameMapping);

  const fetchQuestions = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/questions`, {
        credentials: "include",
      });

      if (!response.ok) {
        throw new Error("Failed to fetch questions");
      }

      const questions = await response.json();

      // Log raw quiz types received from backend
      console.log("Raw quiz types from backend:", [...new Set(questions.map(q => q.type))]);

      // Normalize and store correct quiz types
      const quizQuestionCounts = questions.reduce((acc, question) => {
        let quizType = question.type?.trim().toLowerCase();
        if (!quizType) return acc; // Skip if type is missing

        if (!acc[quizType]) {
          acc[quizType] = 0;
        }
        acc[quizType] += 1;
        return acc;
      }, {});

      console.log("Normalized quiz totals after processing:", quizQuestionCounts);
      setQuizTotals(quizQuestionCounts);
    } catch (error) {
      console.error("Error fetching questions:", error);
    }
  };

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/api/users`)
      .then((response) => {
        console.log("Fetched user data:", response.data);
        setUsers(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
        setLoading(false);
      });

    fetchQuestions();
  }, []);

  useEffect(() => {
    console.log("Final quizTotals after fetching:", quizTotals);
  }, [quizTotals]);

  const replaceNegativeScores = (score) => (score < 0 || score === null || score === undefined ? 0 : score);

  const calculatePercentage = (score, quizType) => {
    if (score == null || isNaN(score) || score < 0) score = 0;

    let normalizedQuizType = quizType.trim().toLowerCase();

    // Map quiz name if it exists in our known mapping
    if (quizNameMapping[normalizedQuizType]) {
      normalizedQuizType = quizNameMapping[normalizedQuizType];
    }

    const totalQuestions = quizTotals[normalizedQuizType];

    if (!totalQuestions || totalQuestions <= 0) {
      console.warn(`Missing or zero questions for quiz type "${normalizedQuizType}". Available quiz totals:`, quizTotals);
      return "0%";
    }

    let percentage = (score * 100) / totalQuestions;
    percentage = Math.min(100, Math.max(0, percentage));

    console.log(` Quiz: ${normalizedQuizType}, Score: ${score}, Total Questions: ${totalQuestions}, Percentage: ${percentage.toFixed(2)}%`);

    return percentage.toFixed(2) + "%";
  };

  const columns = [
    { name: "username", label: "Username" },
    { name: "firstName", label: "First Name" },
    { name: "lastName", label: "Last Name" },
    { name: "introScore", label: "Intro Score" },
    { name: "introPercentage", label: "Intro Percentage" },
    { name: "decompositionScore", label: "Decomposition Score" },
    { name: "decompositionPercentage", label: "Decomposition Percentage" },
    { name: "patternScore", label: "patternRecognition Score" },
    { name: "patternScorePercentage", label: "patternRecognition Percentage" },
    { name: "abstractionScore", label: "abstraction Score" },
    { name: "abstractionPercentage", label: "abstraction Percentage" },
    { name: "reviewScore", label: "review Score" },
    { name: "reviewPercentage", label: "review Percentage" },
    { name: "algorithmScore", label: "Algorithm Score" },
    { name: "algorithmPercentage", label: "Algorithm Percentage" },
    { name: "beyondScore", label: "Beyond Score" },
    { name: "beyondPercentage", label: "Beyond Percentage" },
    { name: "pythonOneScore", label: "Python One Score" },
    { name: "pythonOnePercentage", label: "Python One Percentage" },
    { name: "pythonTwoScore", label: "Python Two Score" },
    { name: "pythonTwoPercentage", label: "Python Two Percentage" },
    { name: "pythonThreeScore", label: "Python Three Score" },
    { name: "pythonThreePercentage", label: "Python Three Percentage" },
    { name: "pythonFiveScore", label: "Python Five Score" },
    { name: "pythonFivePercentage", label: "Python Five Percentage" },
    { name: "pythonSixScore", label: "Python Six Score" },
    { name: "pythonSixPercentage", label: "Python Six Percentage" },
    { name: "pythonSevenScore", label: "Python Seven Score" },
    { name: "pythonSevenPercentage", label: "Python Seven Percentage" },
    { name: "mainframeOneScore", label: "Mainframe One Score"},
    { name: "mainframeOnePercentage", label: "Mainframe One Percentage"}
  ];

  const options = {
    filterType: "checkbox",
    responsive: "standard",
    rowsPerPage: 10,
    pagination: true,
    selectableRows: "none",
    customTableBodyStyle: { textAlign: "center", padding: "12px" },
    setTableProps: () => ({
      style: { borderCollapse: "separate", borderSpacing: "10px 5px" },
    }),
  };

  const data = users.map((user) => ({
    username: user.username,
    firstName: user.firstName,
    lastName: user.lastName,
    introScore: replaceNegativeScores(user.introScore),
    introPercentage: calculatePercentage(user.introScore, "intro"),
    decompositionScore: replaceNegativeScores(user.decompositionScore),
    decompositionPercentage: calculatePercentage(user.decompositionScore, "decomposition"),
    patternScore: replaceNegativeScores(user.patternScore),
    patternScorePercentage: calculatePercentage(user.patternScore, "patternrecognition"),
    abstractionScore: replaceNegativeScores(user.abstractionScore),
    abstractionPercentage: calculatePercentage(user.abstractionScore, "abstraction"),
    reviewScore: replaceNegativeScores(user.reviewScore),
    reviewPercentage: calculatePercentage(user.reviewScore, "review"),
    beyondScore: replaceNegativeScores(user.beyondScore),
    beyondPercentage: calculatePercentage(user.beyondScore, "beyond"),
    algorithmScore: replaceNegativeScores(user.algorithmScore),
    algorithmPercentage: calculatePercentage(user.algorithmScore, "algorithm"),
    pythonOneScore: replaceNegativeScores(user.pythonOneScore),
    pythonOnePercentage: calculatePercentage(user.pythonOneScore, "pythonone"),
    pythonTwoScore: replaceNegativeScores(user.pythonTwoScore),
    pythonTwoPercentage: calculatePercentage(user.pythonTwoScore, "pythontwo"),
    pythonThreeScore: replaceNegativeScores(user.pythonThreeScore),
    pythonThreePercentage: calculatePercentage(user.pythonThreeScore, "pythonthree"),
    pythonFiveScore: replaceNegativeScores(user.pythonFiveScore),
    pythonFivePercentage: calculatePercentage(user.pythonFiveScore, "pythonfive"),
    pythonSixScore: replaceNegativeScores(user.pythonSixScore),
    pythonSixPercentage: calculatePercentage(user.pythonSixScore, "pythonsix"),
    pythonSevenScore: replaceNegativeScores(user.pythonSevenScore),
    pythonSevenPercentage: calculatePercentage(user.pythonSevenScore, "pythonseven"),
    mainframeOneScore: replaceNegativeScores(user.mainframeOneScore),
    mainframeOnePercentage: calculatePercentage(user.mainframeOneScore, "mainframeOne")
  }));

  return <MUIDataTable title="Student Scores and Percentages" data={data} columns={columns} options={options} />;
};

export default StudentScores;
