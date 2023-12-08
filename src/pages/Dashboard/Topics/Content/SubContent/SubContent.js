import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ParsonsProblem from "../../../../../components/Parsons/Parsons";
import Quiz from "../../../../../components/Quiz/Quiz";
import UploadDocument from "../../../../../components/UploadDocument/UploadDocument";
import data from "../../../../../data/modules";

import "./SubContent.css";

function SubContent() {
  const { id, topicId, contentId } = useParams();
  const [params, setParams] = useState({
    id: id,
    topicId: topicId,
    contentId: contentId,
  });
  //   const navigate = useNavigate();
  const [content, setContent] = useState("");
  const [type, setType] = useState("");
  const [quizType, setQuizType] = useState("");

  useEffect(() => {
    setContent(
      data[id - 1].subTopics[topicId - 1].contents[contentId - 1].content
    );
    setType(data[id - 1].subTopics[topicId - 1].contents[contentId - 1].type);
    setQuizType(data[id - 1].subTopics[topicId - 1].type);
  }, [id, topicId, contentId, content, quizType]);

  return (
    <div className="subcontent-section">
      {type !== "quiz" && (
        <div
          className="content"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      )}
      {type === "quiz" && <Quiz type={quizType} />}
      {type === "upload" && <UploadDocument />}
      {type === "parsons" && <ParsonsProblem />}
    </div>
  );
}

export default SubContent;
