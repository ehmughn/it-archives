import { useNavigate } from "react-router-dom";
import "../css/CourseStart.css";

interface Props {
  title: string;
}

function CourseStart(props: Props) {
  const navigate = useNavigate();

  return (
    <header className="course-header">
      <button className="back-button" onClick={() => navigate("../../")}>
        ← Back to Home
      </button>
      <h1 className="title-heading">{props.title}</h1>
    </header>
  );
}

export default CourseStart;
