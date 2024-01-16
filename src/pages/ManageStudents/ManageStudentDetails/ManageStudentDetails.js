import {
  CircularProgress,
  Grid,
  LinearProgress,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router";
import { getUser } from "../../../redux/actions/userActions";
import Login from "../../Login/Login";

import "./ManageStudentDetails.css";

function ManageStudentDetails({ user, getUser }) {
  const { userId } = useParams();
  const [loading, setLoading] = useState(true);

  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    const fetchUser = async () => {
      await axios
        .get(`/api/users/${userId}`, { withCredentials: true })
        .then((res) => setCurrentUser(res.data));
      setLoading(false);
    };
    const delay = setTimeout(() => {
      fetchUser();
    }, 1500);

    return () => clearTimeout(delay);
  }, []);
  console.log(currentUser);
  const renderScoreBar = (score, attribute) => {
    const scoreOutOfTen = score !== -1 ? (score / 10) * 100 : 0;

    return (
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={3} p={5}>
          <Typography>{attribute} Quiz:</Typography>
        </Grid>
        <Grid item xs={9} p={5} container alignItems="center">
          <Grid item xs={10}>
            <LinearProgress variant="determinate" value={scoreOutOfTen} />
          </Grid>
          <Grid item xs={2}>
            <Typography>{score !== -1 ? score : "NA"}</Typography>
          </Grid>
        </Grid>
      </Grid>
    );
  };

  return (
    <div className="student-details">
      {user ? (
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h4">Student Dashboard</Typography>
          </Grid>
          {loading ? (
            <Grid
              item
              xs={12}
              mt={5}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <CircularProgress />
            </Grid>
          ) : (
            <>
              {currentUser && (
                <>
                  <Grid item xs={12}>
                    <Typography variant="h5">
                      {currentUser?.displayName}
                    </Typography>
                    <Typography>Email: {currentUser.email}</Typography>
                    <Typography>Role: {currentUser.role}</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    {renderScoreBar(
                      currentUser.abstractionScore,
                      "Abstraction"
                    )}
                    {renderScoreBar(currentUser.algorithmScore, "Algorithm")}
                    {renderScoreBar(
                      currentUser.decompositionScore,
                      "Decomposition"
                    )}
                    {renderScoreBar(
                      currentUser.patternScore,
                      "Pattern Recognition"
                    )}
                    {renderScoreBar(
                      currentUser.introScore,
                      "Introduction to Computational Thinking"
                    )}
                  </Grid>
                </>
              )}
            </>
          )}
        </Grid>
      ) : (
        <Login />
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({
  user: state.user.user,
});

export default connect(mapStateToProps, { getUser })(ManageStudentDetails);
