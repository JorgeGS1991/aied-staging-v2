import { useEffect, useState } from "react";
import "./Dashboard.css";
import data from "../../data/modules";
// import Topics from "./Topics/Topics";
import { Route, Routes, useLocation, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { setUser, setProgress } from "../../redux/actions/userActions";
import {
  Box,
  Button,
  CircularProgress,
  LinearProgress,
  Skeleton,
  Typography,
} from "@mui/material";
import Login from "../Login/Login";
import contents from "../../data/contents";
import Topics from "./Topics/Topics";
import Content from "./Topics/Content/Content";
import SubContent from "./Topics/Content/SubContent/SubContent";

function getLength(subTopics) {
  let lastData = subTopics[subTopics.length - 1];
  return lastData.contents[lastData.contents.length - 1].id;
}

function CircularProgressWithLabel(props) {
  return (
    <Box>
      <Box sx={{ position: "relative", display: "inline-flex" }}>
        <CircularProgress variant="determinate" {...props} />
        <Box
          sx={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: "absolute",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="caption"
            component="div"
            color="text.secondary"
          >{`${Math.round(props.value)}%`}</Typography>
        </Box>
      </Box>
      <Box>
        <Typography variant="subtitle2">Your progress</Typography>
      </Box>
    </Box>
  );
}

function Dashboard({ user, progress = 0, setUser, setProgress }) {
  const [isActive, setIsActive] = useState([]);
  const [content, setContent] = useState(localStorage.getItem("content") || "");
  const [topic, setTopic] = useState("");
  const [subTopics, setSubTopics] = useState({});
  const { id, topicId } = useParams();

  const [users, setUsers] = useState(null);

  const [progressCurrent, setProgressCurrent] = useState(0);
  const [lengthSubTopics, setLengthSubTopics] = useState(0);

  const location = useLocation();

  useEffect(() => {
    if (content) {
      setContent(content);
    }
  }, [content]);

  useEffect(() => {
    console.log(topic);
    if (topic) {
      setTopic(topic);
    }
  }, [topic]);

  //   useEffect(() => {
  //     if (!progress) {
  //       setProgress(progress);
  //     }
  //     setProgress((progressCurrent * 100) / lengthSubTopics);
  //   }, [progressCurrent, lengthSubTopics, setProgress]);

  useEffect(() => {
    // Parse the user data from the query parameter
    const searchParams = new URLSearchParams(location.search);
    const userData = searchParams.get("user");

    if (userData) {
      // Parse the user data if needed
      const parsedUser = JSON.parse(decodeURIComponent(userData));
      setUsers(parsedUser);
      setUser(users);
    }
  }, [location, setUser, users]);
  const toggleDropdown = (index, length) => {
    setIsActive(Array(length).fill(false));
    const newIsActive = [...isActive];
    newIsActive[index] = !newIsActive[index];
    setIsActive(newIsActive);
    console.log(isActive[index]);
  };

  const getTopic = (subTopics, topic, subTopic, index) => {
    setProgressCurrent(index);
    setLengthSubTopics(getLength(subTopics));
    setContent(subTopic);
    setTopic(topic);
    setSubTopics(subTopics);
  };

  return (
    <div className="dashboard">
      <div className="db-sidebar">
        {data.map((item) => {
          return (
            <div>
              <div className="db-unit">
                <Link to={`${item.id}`}>{item.topicName}</Link>
              </div>
              <div className="db-items">
                {item.subTopics.map((subTopic, index) => {
                  return (
                    <div className="db-item">
                      <a
                        href="#"
                        onClick={() =>
                          toggleDropdown(index, item.subTopics.length)
                        }
                      >
                        {subTopic.name}
                        {"   "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="1em"
                          viewBox="0 0 320 512"
                        >
                          <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" />
                        </svg>
                      </a>
                      {isActive && (
                        <div
                          class="dropdown-container"
                          style={{
                            display: isActive[index] ? "flex" : "none",
                            flexDirection: "column",
                            marginLeft: "10px",
                          }}
                        >
                          {subTopic.contents.map((subContent) => (
                            <Link
                              to={`${item.id}/${index + 1}/${subContent.id}`}
                              // onClick={() =>
                              //   getTopic(
                              //     item.subTopics,
                              //     subTopic.name,
                              //     subContent,
                              //     subContent.id
                              //   )
                              // }
                            >
                              {subContent.topic}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
      {user ? (
        <div className="db-content">
          {/* <Box
            className="db-content-progress"
            pt={5}
            pl={50}
            sx={{ width: "100%" }}
          > */}
          {/* {subTopics && topic && content && (
              <Link
                to={`${content.id}`}
                onClick={() => getTopic(subTopics, topic, content, content.id)}
              >
                Next
              </Link>
            )} */}
          {/* <CircularProgressWithLabel
              variant="determinate"
              value={progress ? progress : 0}
            />
          </Box> */}
          <Routes>
            <Route path=":id" element={<Topics />} />
            <Route path=":id/:topicId" element={<Content />}>
              <Route path=":contentId" element={<SubContent />} />
            </Route>
          </Routes>
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({
  user: state.user.user,
  progress: state.user.progress,
});

export default connect(mapStateToProps, { setUser, setProgress })(Dashboard);
