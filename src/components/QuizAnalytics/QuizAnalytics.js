import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Grid,
  Paper,
  Typography,
  CircularProgress,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

const QuizAnalytics = () => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data from backend API
    axios
      .get("/api/questions")
      .then((response) => {
        setQuestions(response.data);
        setLoading(false); // Set loading to false when data is fetched
      })
      .catch((error) => {
        console.error("Error fetching questions:", error);
        setLoading(false); // Set loading to false in case of error
      });
  }, []);

  return (
    <Grid container spacing={2}>
      {loading ? (
        <Grid item xs={12} sx={{ textAlign: "center" }}>
          <CircularProgress />
        </Grid>
      ) : (
        questions.map((question, index) => (
          <Grid
            item
            xs={36}
            sm={18}
            md={6}
            key={index}
            sx={{ padding: "10px" }}
          >
            <Paper elevation={3} sx={{ padding: "20px", height: "100%" }}>
              <Typography sx={{ fontWeight: "bold" }} variant="h5">
                <div
                  dangerouslySetInnerHTML={{
                    __html: question.question,
                  }}
                  style={{ padding: "0 20px", textAlign: "left" }}
                />
              </Typography>
              <List
                sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
              >
                {question.options.map((option, optionIndex) => (
                  <ListItem
                    key={optionIndex}
                    sx={{
                      //   width: "auto",
                      marginRight: "10px",
                      marginBottom: "10px",
                    }}
                  >
                    <span style={{ textDecoration: "underline" }}>
                      Option {optionIndex}:
                    </span>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: option,
                      }}
                      style={{ padding: "0 20px" }}
                    />
                  </ListItem>
                ))}
              </List>
              <Typography variant="body1">
                Correct Answer: {JSON.stringify(question.correctAnswer)}
              </Typography>
              <Typography variant="body1">
                Right Answers: {question.rightAnswer ?? 0}
              </Typography>
              <Typography variant="body1">
                Wrong Answers: {question.wrongAnswer ?? 0}
              </Typography>
            </Paper>
          </Grid>
        ))
      )}
    </Grid>
  );
};

export default QuizAnalytics;
