import "../css/CourseStart.css";

interface Props {
  title: string;
  toHome: () => void;
}

function CourseStart({ title, toHome }: Props) {
  return (
    <header className="course-header">
      <button
        className="back-button"
        onClick={toHome}
        aria-label="Return to home page"
      >
        ← Back to Home
      </button>
      <h1 className="title-heading">{title}</h1>
    </header>
  );
}

export default CourseStart;
