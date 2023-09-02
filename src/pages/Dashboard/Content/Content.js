import { useParams } from "react-router-dom";
import subTopic from "../../../data/modules";
import "./Content.css";
function Content({ subTopic }) {
  return (
    <div className="content-section">
      {subTopic && (
        <>
          <div className="content-header">
            <h2 className="content-head">{subTopic.name}</h2>
            <div className="content-subhead">
              <div className="content-author">{subTopic.author}</div> {"|"}
              {subTopic.creationDate && (
                <div className="content-creationdate">
                  {subTopic.creationDate.toLocaleDateString("en-us", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </div>
              )}
            </div>
          </div>
          <div
            className="content"
            dangerouslySetInnerHTML={{ __html: subTopic.content }}
          />
        </>
      )}
    </div>
  );
}

export default Content;
