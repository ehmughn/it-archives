import { useState } from "react";
import "../css/Home.css";

import type { CourseInformation } from "../data/CoursesInformation";
import CoursesList from "../data/CoursesInformation";
import Courses from "./Courses";
interface Course {
  name: string;
  code: string;
}

function Home() {
  const [page, setPage] = useState("Home");
  const courseList: Course[] = [];

  const goToHome = () => {
    setPage("Home");
  };

  CoursesList.map((course: CourseInformation) => {
    courseList.push({
      name: course.name,
      code: course.code,
    });
  });

  const renderButtons = (course: Course) => {
    return (
      <button
        onClick={() => {
          setPage(course.code);
        }}
      >
        {course.name}
      </button>
    );
  };

  const render = () => {
    switch (page) {
      case "Home":
        return (
          <>
            <h1>This is Home</h1>
            {courseList.map((course) => {
              return renderButtons(course);
            })}
          </>
        );
      default:
        return <Courses page={page} toHome={goToHome} />;
    }
  };

  return render();
}

export default Home;
