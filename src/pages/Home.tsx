import { useState, useMemo } from "react";
import "../css/Home.css";

import type { CourseInformation } from "../data/CoursesInformation";
import CoursesList from "../data/CoursesInformation";
import Courses from "./Courses";

interface Course {
  name: string;
  code: string;
}

function CourseButton({
  course,
  onClick,
}: {
  course: Course;
  onClick: () => void;
}) {
  return (
    <button
      className="home-button"
      onClick={onClick}
      aria-label={`Navigate to ${course.name}`}
    >
      {course.name}
    </button>
  );
}

function Home() {
  const [page, setPage] = useState("Home");

  const courseList = useMemo<Course[]>(() => {
    return CoursesList.map((course: CourseInformation) => ({
      name: course.name,
      code: course.code,
    }));
  }, []);

  const goToHome = () => {
    setPage("Home");
  };

  return (
    <div className="page-container">
      {page === "Home" ? (
        <div className="home-div">
          <h1 className="home-h1">Welcome to Your Courses</h1>
          <div className="home-buttons">
            {courseList.map((course) => (
              <CourseButton
                key={course.code}
                course={course}
                onClick={() => setPage(course.code)}
              />
            ))}
          </div>
        </div>
      ) : (
        <Courses page={page} toHome={goToHome} />
      )}
    </div>
  );
}

export default Home;
