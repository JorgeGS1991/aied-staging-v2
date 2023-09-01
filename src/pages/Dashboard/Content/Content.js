import { useParams } from "react-router-dom";
import subTopic from "../../../data/modules";
import "./Content.css";
function Content({ content }) {
  let { id } = useParams();
  return (
    <div
      className="content-section"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}

export default Content;
