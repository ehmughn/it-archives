import { useState, useMemo } from "react";
import "../css/Home.css";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
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
      aria-label={`Navigate to ${course.name} course page`}
    >
      {course.name || "Unnamed Course"}
    </button>
  );
}

function Home() {
  const [page, setPage] = useState("Home");
  const [searchQuery, setSearchQuery] = useState("");

  const courseList = useMemo<Course[]>(() => {
    return CoursesList.map((course: CourseInformation) => ({
      name: course.name,
      code: course.code,
    }));
  }, []);

  const filteredCourses = useMemo(() => {
    return courseList.filter((course) =>
      course.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [courseList, searchQuery]);

  const goToHome = () => {
    setPage("Home");
  };

  return (
    <div className="page-container">
      <Header
        page={page}
        goToHome={goToHome}
        setPage={setPage}
        courses={courseList}
      />
      <main className="main-content">
        {page === "Home" ? (
          <div className="home-div">
            <h2 className="home-h1">Welcome to IT Archives</h2>
            <p className="home-subtitle">
              List of courses I took related to IT.
            </p>
            <div className="search-container">
              <input
                type="text"
                className="search-input"
                placeholder="Search courses..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Search for courses by name"
              />
            </div>
            <div className="home-buttons">
              {filteredCourses.map((course) => (
                <div key={course.code} className="course-button-wrapper">
                  <CourseButton
                    course={course}
                    onClick={() => setPage(course.code)}
                  />
                </div>
              ))}
              {filteredCourses.length === 0 && (
                <p className="no-results">
                  No courses found matching your search.
                </p>
              )}
            </div>
          </div>
        ) : (
          <Courses page={page} toHome={goToHome} />
        )}
      </main>
      <Footer />
    </div>
  );
}

export default Home;
