import { useEffect, useState } from "react";
import { Link, Route, Routes, useParams } from "react-router-dom";
import data from "../../../../data/modules";

import "./Content.css";
import SubContent from "./SubContent/SubContent";

function Content() {
  const { id, topicId } = useParams();
  const [subContent, setSubContent] = useState({});

  useEffect(() => {
    setSubContent(data[id - 1].subTopics[topicId - 1]);
  }, [subContent, id, topicId]);
  return (
    <div className="content-section">
      <div className="content-header">
        <h2 className="content-head">{subContent.name}</h2>
        <div className="content-subhead">
          <div className="content-author">{subContent.author}</div> {"|"}
          {subContent.creationDate && (
            <div className="content-creationdate">
              {subContent.creationDate.toLocaleDateString("en-us", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </div>
          )}
        </div>
      </div>
      <div className="content-body">
        {subContent.contents ? (
          <ol>
            {subContent.contents.map((content) => (
              <li>
                <Link to={`${content.id}`}>{content.topic}</Link>
              </li>
            ))}
          </ol>
        ) : null}
      </div>
      <Routes>
        <Route path=":contentId" element={<SubContent />} />
      </Routes>
    </div>
  );
}

export default Content;
