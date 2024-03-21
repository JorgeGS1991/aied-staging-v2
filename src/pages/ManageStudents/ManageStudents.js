import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from "@mui/material";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Route, Routes } from "react-router";
import { Link } from "react-router-dom";
import QuizAnalytics from "../../components/QuizAnalytics/QuizAnalytics";
import { fetchAllUsers } from "../../redux/actions/userActions";
import Login from "../Login/Login";
import ManageStudentDetails from "./ManageStudentDetails/ManageStudentDetails";
import "./ManageStudents.css";

const ManageStudents = ({ user, users, fetchAllUsers }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  useEffect(() => {
    const fetchUsers = async () => {
      await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/api/users`
        // "http://localhost:3001/api/users"
      )
        .then((res) => res.json())
        .then((data) => fetchAllUsers(data));
    };
    fetchUsers();
  }, []);

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
              <TableContainer component={Paper}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Full Name</TableCell>
                      <TableCell>Role</TableCell>
                      <TableCell>Username</TableCell>
                      <TableCell>Last Activity</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {users.map((user, index) => {
                      return user.role === "student" ? (
                        <TableRow key={index}>
                          <TableCell>
                            <Typography variant="body1">
                              <Link to={`/manage-students/${user._id}`}>
                                {user.firstName + " " + user.lastName}
                              </Link>
                            </Typography>
                          </TableCell>
                          <TableCell>
                            <Typography variant="body1">{user.role}</Typography>
                          </TableCell>
                          <TableCell>
                            <Typography variant="body1">
                              {user.username}
                            </Typography>
                          </TableCell>
                          <TableCell>
                            <Typography variant="body1">
                              {user.lastActivity}
                            </Typography>
                          </TableCell>
                        </TableRow>
                      ) : null;
                    })}
                  </TableBody>
                </Table>
              </TableContainer>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={users.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
              <Routes>
                <Route path="/:userId" element={<ManageStudentDetails />} />
              </Routes>
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
