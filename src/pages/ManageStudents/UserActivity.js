import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";

function UserActivity() {
  const { userId } = useParams(); // Get userId from route params
  const [activityLogs, setActivityLogs] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUserActivity = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/users/activity/${userId}`);
        setActivityLogs(response.data);
      } catch (err) {
        console.error("Error fetching user activity:", err);
        setError("Failed to fetch user activity.");
      }
    };

    fetchUserActivity();
  }, [userId]);

  return (
    <Box sx={{ padding: "20px" }}>
      <Typography variant="h4" sx={{ marginBottom: "20px" }}>
        User Activity Logs
      </Typography>
      {error && <Typography color="error">{error}</Typography>}
      {activityLogs.length > 0 ? (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Date</TableCell>
                <TableCell>Login Times</TableCell>
                <TableCell>Logout Times</TableCell>
                <TableCell>Pages Visited</TableCell>
                <TableCell>Quizzes</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {activityLogs.map((log, index) => (
                <TableRow key={index}>
                  <TableCell>{log.date}</TableCell>
                  <TableCell>{log.loginTimes.join(", ")}</TableCell>
                  <TableCell>{log.logoutTimes.join(", ")}</TableCell>
                  <TableCell>
                    {log.pagesVisited.map((page, idx) => (
                      <div key={idx}>
                        {page.pageName} ({page.timeSpent} mins)
                      </div>
                    ))}
                  </TableCell>
                  <TableCell>
                    {log.quizzes.map((quiz, idx) => (
                      <div key={idx}>
                        {quiz.type}: {quiz.attempts} attempts, {quiz.timeSpent} mins, {quiz.reached80Percent ? "80%+ reached" : "Below 80%"}
                      </div>
                    ))}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <Typography>No activity logs available for this user.</Typography>
      )}
    </Box>
  );
}

export default UserActivity;
