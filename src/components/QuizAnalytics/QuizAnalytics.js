import React, { useEffect, useState } from "react";
import axios from "axios";
import MUIDataTable from "mui-datatables";
import { CircularProgress, Box, Typography } from "@mui/material";
import "./QuizAnalytics.css";  



const StudentScores = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalQuestions, setTotalQuestions] = useState(5); // Default value

  useEffect(() => {
    // Fetch user data from backend API
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/api/users`)
      .then((response) => {
        setUsers(response.data);
        setLoading(false); // Set loading to false when data is fetched
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
    { name: "username", label: "Username", options: { filter: false, sort: true, customBodyRender: (value, tableMeta) => {
      const username = tableMeta.rowData[0]; // Get the username from the first column
      return <span title={`User: ${username}`}>{value}</span>;
    },} },
    { name: "firstName", label: "First Name", options: { filter: false, sort: true,customBodyRender: (value, tableMeta) => {
      const username = tableMeta.rowData[0]; // Get the username from the first column
      return <span title={`User: ${username}`}>{value}</span>;
    },} },
    { name: "lastName", label: "Last Name", options: { filter: false, sort: true, customBodyRender: (value, tableMeta) => {
      const username = tableMeta.rowData[0]; // Get the username from the first column
      return <span title={`User: ${username}`}>{value}</span>;
    },} },
    { name: "introScore", label: "Intro Score", options: { filter: true, sort: true,customBodyRender: (value, tableMeta) => {
      const username = tableMeta.rowData[0]; // Get the username from the first column
      return <span title={`User: ${username}`}>{value}</span>;
    },} },
    { name: "introPercentage", label: "Intro Percentage", options: { filter: true, sort: true,customBodyRender: (value, tableMeta) => {
      const username = tableMeta.rowData[0]; // Get the username from the first column
      return <span title={`User: ${username}`}>{value}</span>;
    }, } },
    { name: "beyondScore", label: "Beyond Score", options: { filter: true, sort: true,customBodyRender: (value, tableMeta) => {
      const username = tableMeta.rowData[0]; // Get the username from the first column
      return <span title={`User: ${username}`}>{value}</span>;
    },} },
    { name: "beyondPercentage", label: "Beyond Percentage", options: { filter: true, sort: true, customBodyRender: (value, tableMeta) => {
      const username = tableMeta.rowData[0]; // Get the username from the first column
      return <span title={`User: ${username}`}>{value}</span>;
    },  } },
    { name: "decompositionScore", label: "Decomposition Score", options: { filter: true, sort: true,customBodyRender: (value, tableMeta) => {
      const username = tableMeta.rowData[0]; // Get the username from the first column
      return <span title={`User: ${username}`}>{value}</span>;
    }, } },
    { name: "decompositionPercentage", label: "Decomposition Percentage", options: { filter: true, sort: true,customBodyRender: (value, tableMeta) => {
      const username = tableMeta.rowData[0]; // Get the username from the first column
      return <span title={`User: ${username}`}>{value}</span>;
    }, } },
    { name: "algorithmScore", label: "Algorithm Score", options: { filter: true, sort: true, customBodyRender: (value, tableMeta) => {
      const username = tableMeta.rowData[0]; // Get the username from the first column
      return <span title={`User: ${username}`}>{value}</span>;
    }, } },
    { name: "algorithmPercentage", label: "Algorithm Percentage", options: { filter: true, sort: true, customBodyRender: (value, tableMeta) => {
      const username = tableMeta.rowData[0]; // Get the username from the first column
      return <span title={`User: ${username}`}>{value}</span>;
    }, } },
    { name: "pythonOneScore", label: "pythonOne Score",  options: { filter: false, sort: true,customBodyRender: (value, tableMeta) => {
      const username = tableMeta.rowData[0]; // Get the username from the first column
      return <span title={`User: ${username}`}>{value}</span>;
    },  } },
    { name: "pythonOnePercentage", label: "pythonOne Percentage",  options: { filter: false, sort: true,customBodyRender: (value, tableMeta) => {
      const username = tableMeta.rowData[0]; // Get the username from the first column
      return <span title={`User: ${username}`}>{value}</span>;
    }, } },
    { name: "pythonTwoScore", label: "pythonTwoScore",  options: { filter: false, sort: true,customBodyRender: (value, tableMeta) => {
      const username = tableMeta.rowData[0]; // Get the username from the first column
      return <span title={`User: ${username}`}>{value}</span>;
    },} },
    { name: "pythonTwoPercentage", label: "pythonTwo Percentage",  options: { filter: false, sort: true,customBodyRender: (value, tableMeta) => {
      const username = tableMeta.rowData[0]; // Get the username from the first column
      return <span title={`User: ${username}`}>{value}</span>;
    }, } },
    { name: "pythonThreeScore", label: "pythonThreeScore",  options: { filter: false, sort: true, customBodyRender: (value, tableMeta) => {
      const username = tableMeta.rowData[0]; // Get the username from the first column
      return <span title={`User: ${username}`}>{value}</span>;
    }, } },
    { name: "pythonThreePercentage", label: "pythonThree Percentage",  options: { filter: false, sort: true,customBodyRender: (value, tableMeta) => {
      const username = tableMeta.rowData[0]; // Get the username from the first column
      return <span title={`User: ${username}`}>{value}</span>;
    }, } },
    { name: "pythonFiveScore", label: "pythonFiveScore",  options: { filter: false, sort: true, customBodyRender: (value, tableMeta) => {
      const username = tableMeta.rowData[0]; // Get the username from the first column
      return <span title={`User: ${username}`}>{value}</span>;
    }, } },
    { name: "pythonFivePercentage", label: "pythonFive Percentage",  options: { filter: false, sort: true, customBodyRender: (value, tableMeta) => {
      const username = tableMeta.rowData[0]; // Get the username from the first column
      return <span title={`User: ${username}`}>{value}</span>;
    },  } },
    { name: "pythonSixScore", label: "pythonSixScore",  options: { filter: false, sort: true,customBodyRender: (value, tableMeta) => {
      const username = tableMeta.rowData[0]; // Get the username from the first column
      return <span title={`User: ${username}`}>{value}</span>;
    },} },
    { name: "pythonSixPercentage", label: "pythonSix Percentage",  options: { filter: false, sort: true, customBodyRender: (value, tableMeta) => {
      const username = tableMeta.rowData[0]; // Get the username from the first column
      return <span title={`User: ${username}`}>{value}</span>;
    }, } },
    { name: "pythonSevenScore", label: "pythonSevenScore",  options: { filter: false, sort: true, customBodyRender: (value, tableMeta) => {
      const username = tableMeta.rowData[0]; // Get the username from the first column
      return <span title={`User: ${username}`}>{value}</span>;
    }, } },
    { name: "pythonSevenPercentage", label: "pythonSeven Percentage",  options: { filter: false, sort: true,customBodyRender: (value, tableMeta) => {
      const username = tableMeta.rowData[0]; // Get the username from the first column
      return <span title={`User: ${username}`}>{value}</span>;
    }, } },

  ];

  const options = {
    filterType: "checkbox",
    responsive: "standard",
    rowsPerPage: 10,
    page: 4, // Start from page 5 (index starts at 0)
    pagination: true,
    selectableRows: "none",
    customTableBodyStyle: { textAlign: "center", padding: "12px" }, // Proper row spacing
    customHeadLabelRender: (columnMeta) => (
      <div style={{ textAlign: "center", fontWeight: "bold", fontSize: "14px" }}>
        {columnMeta.label}
      </div>
    ),
    setTableProps: () => ({
      style: { borderCollapse: "separate", borderSpacing: "10px 5px" }, // Adjusts row spacing
    }),
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
    <Box sx={{ padding: "20px" }}>
      {loading ? (
        <Box sx={{ textAlign: "center" }}>
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

export default StudentScores;
