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
