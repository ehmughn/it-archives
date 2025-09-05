import "../../css/LessonNumber.css";

interface Props {
  number: string;
  isActive: boolean;
  onClick: (number: string) => void;
}

function LessonNumber({ number, isActive, onClick }: Props) {
  return (
    <button
      className={`lesson-button ${isActive ? "active" : ""}`}
      onClick={() => onClick(number)}
      aria-pressed={isActive}
      aria-label={`View ${
        number === "All" ? "all lessons" : `lesson ${number}`
      }`}
    >
      {number}
    </button>
  );
}

export default LessonNumber;
