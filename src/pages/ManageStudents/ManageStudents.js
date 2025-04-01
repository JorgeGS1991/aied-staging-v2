import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Typography, Box, Tab, Paper, Button } from "@mui/material";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import MUIDataTable from "mui-datatables";
import QuizAnalytics from "../../components/QuizAnalytics/QuizAnalytics";
import { fetchAllUsers } from "../../redux/actions/userActions";
import Login from "../Login/Login";
import axios from "axios"; // For API calls
import "./ManageStudents.css";

const ManageStudents = ({ user, users, fetchAllUsers }) => {
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    const fetchUsers = async () => {
      await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/users`)
        .then((res) => res.json())
        .then((data) => fetchAllUsers(data));
    };
    fetchUsers();
  }, [fetchAllUsers]);

  const handleHideUser = async (id) => {
    // Show confirmation dialog before proceeding
    const confirmHide = window.confirm("Are you sure you want to hide this user?");
    
    if (!confirmHide) {
      return; // If user cancels, do nothing
    }

    try {
      const response = await axios.put(
        `${process.env.REACT_APP_BACKEND_URL}/api/users/hide`,
        { user_id: id } // Pass user ID in the request body
      );
      alert(response.data.message); // Notify the user

      // Refresh the users list after hiding the user
      const fetchUsers = async () => {
        await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/users`)
          .then((res) => res.json())
          .then((data) => fetchAllUsers(data));
      };
      fetchUsers(); // Re-fetch users list
    } catch (error) {
      console.error("Error hiding user:", error);
      alert("Failed to hide user.");
    }
  };
  const data = users
  .filter((user) => user.role === "student")
  .map((user) => {
    const lastActivityDate = new Date(user.lastActivity);
      const today = new Date();
    const inactiveDays = Math.floor((today - lastActivityDate) / (1000 * 60 * 60 * 24)); // Convert ms to days

      return {
      fullName: `${user.firstName} ${user.lastName}`,
      role: user.role,
      username: user.username,
      lastActivity: user.lastActivity,
      inactiveDays: isNaN(inactiveDays) ? "N/A" : inactiveDays, // Handle invalid dates
      pythonOneScore: user.pythonOneScore,
      id: user._id,
      };
    });

  const columns = [
    { name: "fullName", label: "Full Name" },
    { name: "role", label: "Role" },
    { name: "username", label: "Username" },
    { name: "lastActivity", label: "Last Activity" },
    { name: "inactiveDays", label: "Inactive Days" }, 
    {
      name: "actions",
      label: "Actions",
      options: {
        customBodyRender: (value, tableMeta) => {
        const userId = tableMeta.rowData[7]; // Assuming the user ID is in the 7th column
          return (
            <>
              <Button variant="contained" color="primary" onClick={() => handleHideUser(userId)}>
                Hide User
              </Button>
              <Button
                variant="contained"
                color="secondary"
                component={Link}
                to={`/manage-students/activity/${userId}`}
                sx={{ marginLeft: "10px" }}
              >
                View Activity
              </Button>
            </>
          );
        },
      },
    },
    { name: "id", label: "ID", options: { display: false } },
  ];

  const options = {
    filterType: "dropdown",
    responsive: "standard",
    selectableRows: "none", // Disable row selection
    rowsPerPage: 5,
    rowsPerPageOptions: [5, 10, 25],
    download: true,
    print: true,
    search: true,
  };

  return (
    <TabContext value={value}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <TabList onChange={handleChange} aria-label="Manage Students / Quizzes">
          <Tab label="Manage Students" value="1" />
          <Tab label="Quiz Analytics" value="2" />
        </TabList>
      </Box>
      <TabPanel value="1">
        <Box
          sx={{
            margin: "20px",
            padding: "30px",
            backgroundColor: "#f9f9f9",
            boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.1)",
          }}
        >
          {user ? (
            <>
              <Typography variant="h4" sx={{ marginBottom: "20px" }}>
                Manage Student Information
              </Typography>
              <Paper>
                <MUIDataTable
                  title={"STUDENT LIST"}
                  data={data}
                  columns={columns}
                  options={options}
                />
              </Paper>
            </>
          ) : (
            <Login />
          )}
        </Box>
      </TabPanel>
      <TabPanel value="2">
        <QuizAnalytics />
      </TabPanel>
    </TabContext>
  );
};

const mapStateToProps = (state) => ({
  users: state.user.users,
  user: state.user.user,
});

export default connect(mapStateToProps, { fetchAllUsers })(ManageStudents);
