// Quiz.js

import React, { useEffect, useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import {
  Box,
  Button,
  List,
  ListItem,
  ListItemButton,
  Typography,
} from "@mui/material";

import {
  fetchQuestionsSuccess,
  selectAnswer,
} from "../../redux/actions/quizActions";

const Quiz = ({
  questions,
  correctAnswers,
  userResponses,
  fetchQuestionsSuccess,
  selectAnswer,
}) => {
  const dispatch = useDispatch();
  //   const questions = useSelector((state) => state?.questions);
  //   const userResponses = useSelector((state) => state.userResponses);
  const [newQuestions, setNewQuestions] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState(
    Array(questions.length).fill(null)
  );

  const [score, setScore] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    // Simulate fetching questions asynchronously
    // Replace this with your actual API call
    const fetchQuestions = async () => {
      const response = await fetch("http://localhost:3001/api/questions");
      const data = await response.json();
      setNewQuestions(data);
    };

    fetchQuestions();
  }, []);

  useEffect(() => {
    fetchQuestionsSuccess(newQuestions);
  }, [fetchQuestionsSuccess, newQuestions]);

  if (!questions) {
    return <>Loading...</>;
  }

  console.log(correctAnswers);
  console.log(userResponses);

  const handleOptionClick = (questionIndex, optionIndex) => {
    const updatedSelectedOptions = [...selectedOptions];
    updatedSelectedOptions[questionIndex] = optionIndex;
    setSelectedOptions(updatedSelectedOptions);
    selectAnswer(questionIndex, optionIndex); // Dispatch the selected answer to Redux
  };

  const handleSubmit = () => {
    let newScore = score; // Initialize a variable to keep track of the new score

    // Compare userResponses with correctAnswers
    userResponses.forEach((response, index) => {
      if (response === correctAnswers[index]) {
        newScore++; // Increment the score when the response is correct
      }
    });

    setScore(newScore); // Update the score state with the new score
    setSubmitted(true); // Set submitted to true to indicate the quiz has been submitted
  };

  return (
    <Box
      className="quiz-container"
      sx={{
        margin: "20px",
        padding: "30px",
        backgroundColor: "#f9f9f9",
        boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.1)", // Box shadow
      }}
    >
      {questions.length > 0 &&
        questions.map((question, index) => (
          <Box
            key={index}
            className="question-card"
            sx={{ marginBottom: "20px" }}
          >
            <Typography variant="h6" sx={{ marginBottom: "10px" }}>
              {question.question}
            </Typography>
            <List>
              {question.options?.map((option, optionIndex) => (
                <ListItem key={optionIndex} disablePadding>
                  <ListItemButton
                    onClick={() => handleOptionClick(index, optionIndex)}
                    sx={{
                      backgroundColor:
                        selectedOptions[index] === optionIndex
                          ? "#ff9999" // Slightly darker red after click
                          : selectedOptions[index] === optionIndex
                          ? "#ffcccc" // Light red on hover
                          : "#ffffff", // White background for unselected option
                      borderRadius: "8px",
                      padding: "12px",
                      marginBottom: "8px",
                      border: "1px solid #000000",
                      "&:hover": {
                        backgroundColor: "#ffcccc", // Light red background on hover
                      },
                    }}
                  >
                    {option}
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        ))}
      <Button
        variant="contained"
        color="primary"
        onClick={handleSubmit}
        disabled={submitted} // Disable button after submission
        sx={{ marginTop: "20px" }}
      >
        Submit Quiz
      </Button>
      {submitted && (
        <Typography variant="h6" sx={{ marginTop: "20px" }}>
          Your Score: {score} out of {questions.length}
        </Typography>
      )}
    </Box>
  );
};

const mapStateToProps = (state) => ({
  questions: state.quiz.questions,
  userResponses: state.quiz.userResponses,
  correctAnswers: state.quiz.correctAnswers,
});
export default connect(mapStateToProps, {
  fetchQuestionsSuccess,
  selectAnswer,
})(Quiz);
