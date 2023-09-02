import { useEffect, useState } from "react";
import "./Dashboard.css";
import data from "../../data/modules";
import Content from "./Content/Content";
import { Route, Routes, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { setUser } from "../../redux/actions/userActions";

function Dashboard({ setUser }) {
  const [isActive, setIsActive] = useState(Array(3).fill(false));
  const [content, setContent] = useState("");

  const [users, setUsers] = useState(null);

  const location = useLocation();

  //   useEffect(() => {
  //     setUser(users);
  //   }, [setUser, users]);

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
  const toggleDropdown = (index) => {
    const newIsActive = [...isActive];
    newIsActive[index] = !newIsActive[index];

    setIsActive(newIsActive);
  };

  const getTopic = (subTopic) => {
    setContent(subTopic);
  };

  return (
    <div className="dashboard">
      <div className="db-sidebar">
        {data.map((item) => {
          return (
            <div>
              <div className="db-unit">{item.topicName}</div>
              <div className="db-items">
                {item.subTopics.map((subTopic, index) => {
                  return (
                    <div className="db-item">
                      <a href="#" onClick={() => toggleDropdown(index)}>
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

                      <div
                        class="dropdown-container"
                        style={{ display: isActive[index] ? "block" : "none" }}
                      >
                        <Link
                          to={`${index}`}
                          onClick={() => getTopic(subTopic)}
                        >
                          Main Content
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
      <div className="db-content">
        <Routes>
          <Route path=":id" element={<Content subTopic={content} />} />
        </Routes>
      </div>
    </div>
  );
}

export default connect(null, { setUser })(Dashboard);
