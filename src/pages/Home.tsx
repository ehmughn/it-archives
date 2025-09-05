import { useNavigate } from "react-router-dom";
import "../css/Home.css";

interface Course {
  name: string;
  code: string;
}

function Home() {
  const navigate = useNavigate();
  const courseList: Course[] = [
    { name: "Project Management", code: "CTPRJMGT" },
    { name: "Advanced Networking", code: "CTADNETL" },
    { name: "Integrative Programming", code: "CTINPRGL" },
  ];

  const renderContent = (course: Course) => {
    return (
      <button
        onClick={() => {
          navigate("/course/" + course.code);
        }}
      >
        {course.name}
      </button>
    );
  };

  return (
    <>
      <h1>This is Home</h1>
      {courseList.map((course) => {
        return renderContent(course);
      })}
    </>
  );
}

export default Home;
