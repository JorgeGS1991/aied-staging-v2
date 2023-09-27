import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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

  //   useEffect(() => {
  //     setParams({
  //       ...params,
  //       id: id,
  //       topicId: topicId,
  //       contentId: contentId,
  //     });
  //     console.log(params);
  //   }, [id, topicId, contentId]);

  useEffect(() => {
    setContent(
      data[id - 1].subTopics[topicId - 1].contents[contentId - 1].content
    );
  }, [id, topicId, contentId, content]);

  //   const getNextId = () => {
  /**
   *  check contentId -> topicId -> id
   * if contentId + 1 good -> inc. if not, reset contentId and
   *      if topicId + 1 good -> inc. if not, reset topicId and
   *          if id + 1 good -> inc. if not, reset id.
   *
   * debug: 1/1/1 (contentId + 1 good) -> 1/1/2 -> (contentId good) -> 1/1/3 (fail)
   * -> reset contentId, and check topicId
   */
  //     let currentContents =
  //       data[params.id - 1].subTopics[params.topicId - 1].contents;
  //     let currentTopics = data[params.id - 1].subTopics;
  //     let currentData = data;

  //     console.log(params);
  //     console.log(currentContents);
  //     console.log("button");

  //     if (params.contentId + 1 <= currentContents.length) {
  //       setParams({ ...params, contentId: params.contentId + 1 });
  //     } else if (params.topicId + 1 <= currentTopics.length) {
  //       setParams({ ...params, contentId: 1, topicId: params.topicId + 1 });
  //     } else if (params.id + 1 <= currentData.length) {
  //       setParams({ ...params, contentId: 1, topicId: 1, id: params.id + 1 });
  //     } else {
  //       setParams({ ...params, contentId: 1, topicId: 1, id: 1 });
  //     }
  //     console.log(params);
  //     console.log("after");
  //     navigate(`/dashboard/${params.id}/${params.topicId}/${params.contentId}`);
  //   };

  return (
    <div className="subcontent-section">
      <div className="content" dangerouslySetInnerHTML={{ __html: content }} />
      {/* <div className="navigate">
        <Button color="error" variant="outlined" onClick={getNextId}>
          Next
        </Button>
      </div> */}
    </div>
  );
}

export default SubContent;
