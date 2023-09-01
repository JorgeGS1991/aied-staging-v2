import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import "./Dashboard.css";
import data from "../../data/modules";
import Content from "./Content/Content";
import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";

function Dashboard() {
  const [isActive, setIsActive] = useState(Array(3).fill(false));
  const [content, setContent] = useState("");

  const toggleDropdown = (index, content) => {
    const newIsActive = [...isActive];
    newIsActive[index] = !newIsActive[index];

    setIsActive(newIsActive);
    setContent(content);
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
                      <Link
                        to={`${subTopic.id}`}
                        onClick={() => toggleDropdown(index, subTopic.content)}
                      >
                        {subTopic.name}{" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="1em"
                          viewBox="0 0 320 512"
                        >
                          <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" />
                        </svg>
                      </Link>

                      <div
                        class="dropdown-container"
                        style={{ display: isActive[index] ? "block" : "none" }}
                      >
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
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
          <Route path=":id" element={<Content content={content} />} />
        </Routes>
      </div>
    </div>
  );
}

export default Dashboard;
