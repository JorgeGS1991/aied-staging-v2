import React, { useEffect, useState } from "react";
import axios from "axios";
import MUIDataTable from "mui-datatables";
import { CircularProgress, Box, Typography } from "@mui/material";

const StudentScores = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

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
        setLoading(false); // Set loading to false in case of error
      });
  }, []);

  const replaceNegativeScores = (score) => (score === -1 ? 0 : score);

  const columns = [
    {
      name: "username",
      label: "Username",
      options: {
        filter: false,
        sort: true,
      },
    },
    {
      name: "firstName",
      label: "First Name",
      options: {
        filter: false,
        sort: true,
      },
    },
    {
      name: "lastName",
      label: "Last Name",
      options: {
        filter: false,
        sort: true,
      },
    },
    {
      name: "introScore",
      label: "Intro Score",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "beyondScore",
      label: "Beyond Score",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "decompositionScore",
      label: "Decomposition Score",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "algorithmScore",
      label: "Algorithm Score",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "pythonOneScore",
      label: "Python One Score",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "pythonTwoScore",
      label: "Python Two Score",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "pythonThreeScore",
      label: "Python Three Score",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "pythonFiveScore",
      label: "Python Five Score",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "pythonSixScore",
      label: "Python Six Score",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "pythonSevenScore",
      label: "Python Seven Score",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "patternScore",
      label: "Pattern Score",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "abstractionScore",
      label: "Abstraction Score",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "reviewScore",
      label: "Review Score",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "emailScore",
      label: "Email Score",
      options: {
        filter: true,
        sort: true,
      },
    },
  ];

  const options = {
    filterType: "checkbox",
    responsive: "standard",
    rowsPerPage: 10,
    pagination: true,
    selectableRows: "none", // Disable row selection
  };

  const data = users.map((user) => {
    return {
      username: user.username,
      firstName: user.firstName,
      lastName: user.lastName,
      introScore: replaceNegativeScores(user.introScore),
      beyondScore: replaceNegativeScores(user.beyondScore),
      decompositionScore: replaceNegativeScores(user.decompositionScore),
      algorithmScore: replaceNegativeScores(user.algorithmScore),
      pythonOneScore: replaceNegativeScores(user.pythonOneScore),
      pythonTwoScore: replaceNegativeScores(user.pythonTwoScore),
      pythonThreeScore: replaceNegativeScores(user.pythonThreeScore),
      pythonFiveScore: replaceNegativeScores(user.pythonFiveScore),
      pythonSixScore: replaceNegativeScores(user.pythonSixScore),
      pythonSevenScore: replaceNegativeScores(user.pythonSevenScore),
      patternScore: replaceNegativeScores(user.patternScore),
      abstractionScore: replaceNegativeScores(user.abstractionScore),
      reviewScore: replaceNegativeScores(user.reviewScore),
      emailScore: replaceNegativeScores(user.emailScore),
    };
  });

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
          title={"Student Scores"}
          data={data}
          columns={columns}
          options={options}
        />
      )}
    </Box>
  );
};

export default StudentScores;
