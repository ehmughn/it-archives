import "../../css/LessonNumber.css";

interface Props {
  number: string;
  onClick: (value: string) => void;
}

function LessonNumber({ number, onClick }: Props) {
  return (
    <button className="lesson-button" onClick={() => onClick(number)}>
      {number}
    </button>
  );
}

export default LessonNumber;
