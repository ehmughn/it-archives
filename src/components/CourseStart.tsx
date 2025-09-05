import "../css/CourseStart.css";

interface Props {
  title: string;
  toHome: () => void;
}

function CourseStart(props: Props) {
  return (
    <header className="course-header">
      <button className="back-button" onClick={props.toHome}>
        ← Back to Home
      </button>
      <h1 className="title-heading">{props.title}</h1>
    </header>
  );
}

export default CourseStart;
