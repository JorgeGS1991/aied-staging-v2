/**
 *  @author: Phillip Nguyen
 *  Component: Quiz
 *  Date: 11/15/2023
 *  Objective: Building a quiz feature for students to complete quizzes on our own application
 *
 */

import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  List,
  ListItem,
  ListItemButton,
  Typography,
} from "@mui/material";

import {
  fetchQuestionsSuccess,
  selectAnswer,
} from "../../redux/actions/quizActions";
import Notification from "../SnackBar/SnackBar";

const Quiz = ({
  questions,
  correctAnswers,
  userResponses,
  fetchQuestionsSuccess,
  selectAnswer,
}) => {
  const [newQuestions, setNewQuestions] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState(
    Array(questions.length).fill(null)
  );
  const [questionIndex, setQuestionIndex] = useState(null);
  const [selectedOptionsMC, setSelectedOptionsMC] = useState([
    false,
    false,
    false,
    false,
  ]);

  const [userResponseMC, setUserResponseMC] = useState([]);

  const [score, setScore] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [notificationOpen, setNotificationOpen] = useState(true);

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

  useEffect(() => {
    selectAnswer(questionIndex, userResponseMC);
    const updatedSelectedOptions = [...selectedOptions];

    // Update the specific index with the new userResponseMC
    updatedSelectedOptions[questionIndex] = userResponseMC;

    // Update the state with the modified selectedOptions array
    setSelectedOptions(updatedSelectedOptions);
  }, [selectAnswer, userResponseMC]);

  if (!questions) {
    return <>Loading...</>;
  }

  // console.log(selectedOptions);

  const handleOptionClick = (questionIndex, optionIndex) => {
    const updatedSelectedOptions = [...selectedOptions];
    updatedSelectedOptions[questionIndex] = optionIndex;
    if (typeof questions[questionIndex].correctAnswers !== "object") {
      setSelectedOptions(updatedSelectedOptions);
      selectAnswer(questionIndex, optionIndex); // Dispatch the selected answer to Redux
    }
  };

  const handleCheckboxChange = (question, index, optionIndex) => {
    const updatedSelectedOptionsMC = [...selectedOptionsMC];
    updatedSelectedOptionsMC[optionIndex] =
      !updatedSelectedOptionsMC[optionIndex];

    if (updatedSelectedOptionsMC[optionIndex]) {
      setUserResponseMC([...userResponseMC, optionIndex]);
      console.log("choice selected" + optionIndex);
      // console.log(userResponseMC);
    } else {
      setUserResponseMC(
        userResponseMC.filter((userResponse) => userResponse !== optionIndex)
      );
      console.log("choice deselected" + optionIndex);

      // console.log(userResponseMC);
    }

    setQuestionIndex(index);
    setSelectedOptionsMC(updatedSelectedOptionsMC);
    selectAnswer(index, userResponseMC);
  };

  console.log(userResponses);
  console.log(userResponseMC);
  console.log("----- Selected Options -----");
  console.log(selectedOptions);
  console.log(selectedOptionsMC);
  console.log("----- CorrectAnswers -----");
  console.log(correctAnswers);

  const handleNotificationClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setNotificationOpen(false);
  };

  const handleBackgroundColor = (index, optionIndex) => {
    if (submitted) {
      console.log(correctAnswers);
      console.log(userResponses);
      if (typeof selectedOptions[index] !== "object") {
        return selectedOptions[index] === optionIndex
          ? correctAnswers[index] === userResponses[index]
            ? "#00e348"
            : "#ff4141"
          : correctAnswers[index] === optionIndex
          ? "#00e348"
          : "#dddddd";
      } else {
        return correctAnswers[index].includes(optionIndex)
          ? "#00e348"
          : "#ff4141";
      }
    }
    return selectedOptions[index] === optionIndex ? "#419aff" : "#ffffff";
  };

  const handleSubmit = () => {
    let newScore = score; // Initialize a variable to keep track of the new score

    // Compare userResponses with correctAnswers
    userResponses.forEach((response, index) => {
      if (typeof response !== "object") {
        if (response === correctAnswers[index]) {
          newScore++; // Increment the score when the response is correct
        }
      } else {
        if (response.length === correctAnswers[index].length) {
          console.log("== MC Submit ==");
          const sortedArr1 = response.slice().sort();
          const sortedArr2 = correctAnswers[index].slice().sort();
          if (sortedArr1.every((value, index) => value === sortedArr2[index])) {
            newScore++;
          }
        }
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
              {!Array.isArray(question.correctAnswer)
                ? question.options?.map((option, optionIndex) => (
                    <ListItem key={optionIndex} disablePadding>
                      <ListItemButton
                        onClick={() => handleOptionClick(index, optionIndex)}
                        sx={{
                          backgroundColor: handleBackgroundColor(
                            index,
                            optionIndex
                          ),
                          borderRadius: "8px",
                          padding: "12px",
                          marginBottom: "8px",
                          border: "1px solid #000000",
                          "&:hover": {
                            backgroundColor: "#bfdfff", // Light red background on hover
                          },
                        }}
                      >
                        {option}
                      </ListItemButton>
                    </ListItem>
                  ))
                : question.options?.map((option, optionIndex) => (
                    <ListItem key={optionIndex} disablePadding>
                      <FormControlLabel
                        sx={{
                          backgroundColor: handleBackgroundColor(
                            index,
                            optionIndex
                          ),
                          borderRadius: "8px",
                          padding: "12px",
                          marginBottom: "8px",
                          border: "1px solid #000000",
                          width: "100%",
                        }}
                        control={
                          <Checkbox
                            onChange={() =>
                              handleCheckboxChange(question, index, optionIndex)
                            }
                          />
                        }
                        label={option}
                      />
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
        <>
          <Typography variant="h6" sx={{ marginTop: "20px" }}>
            Your Score: {score} out of {questions.length}
          </Typography>
          <Notification
            open={notificationOpen}
            handleClose={handleNotificationClose}
            message={`You submitted successfully, your score is: ${(
              (score * 100) /
              questions.length
            ).toFixed(2)}%`}
            severity={"success"}
          />
        </>
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
