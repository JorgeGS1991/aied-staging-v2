import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import data from "../../../../../data/modules";

function SubContent() {
  const { id, topicId, contentId } = useParams();
  const [content, setContent] = useState("");

  useEffect(() => {
    setContent(
      data[id - 1].subTopics[topicId - 1].contents[contentId - 1].content
    );
  });
  //   console.log(id, topicId, contentId);
  return (
    <div className="subcontent-section">
      {/* content - {id} - {topicId} - {contentId} */}
      <div className="content" dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}

export default SubContent;
