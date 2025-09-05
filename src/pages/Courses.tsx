import "../css/Course.css";
import React, { useState, useEffect } from "react";
import type {
  CourseInformation,
  Content,
  SubList,
  Formula,
} from "../data/CoursesInformation";
import CoursesList from "../data/CoursesInformation";
import CourseStart from "../components/CourseStart";
import LessonNumber from "../components/buttons/LessonNumber";

import Definition from "../components/topic-contents/Definition";
import List from "../components/topic-contents/List";
import FormulaBox from "../components/topic-contents/FormulaBox";

interface Props {
  page: string;
  toHome: () => void;
}

function Courses(props: Props) {
  const [course, setCourse] = useState<CourseInformation | null>(null);
  const [lessonCount, setLessonCount] = useState(["All"]);
  const [lessonNumber, setLessonNumber] = useState("All");

  const lessonNumberButtonsClicked = (data: string) => {
    setLessonNumber(data);
  };

  useEffect(() => {
    const matched = CoursesList.find((c) => c.code === props.page);
    if (matched) {
      setCourse(matched);
      setLessonCount(() => {
        const numberedLessons = matched.lessons.map((_, index) =>
          String(index + 1)
        );
        return ["All", ...numberedLessons];
      });
    }
  }, [props.page]);

  const renderDefinition = (content: Content) => {
    return (
      <Definition
        title={content.title}
        meaning={typeof content.content === "string" ? content.content : ""}
      />
    );
  };

  const renderList = (content: Content) => {
    return (
      <List title={content.title} content={content.content as SubList[]} />
    );
  };

  const renderFormulaBox = (content: Content) => {
    const formulaContent = content.content as Formula;

    return (
      <FormulaBox
        title={content.title}
        formula={formulaContent.formula}
        explanation={formulaContent.explanation}
        inputs={formulaContent.inputs}
        calculate={formulaContent.calculate}
      />
    );
  };

  const renderAll = () => {
    return lessonCount.slice(1).map((_, index) => render(index + 1));
  };

  const render = (numberedLessonNumber: number) => {
    return (
      <>
        <h1 className="lesson-title">
          Lesson {numberedLessonNumber}:{" "}
          {course?.lessons[numberedLessonNumber - 1].title}
        </h1>
        {course?.lessons[numberedLessonNumber - 1].content.map(
          (content: Content, index: number) => {
            switch (content.type) {
              case "Definition":
                return (
                  <React.Fragment key={index}>
                    {renderDefinition(content)}
                  </React.Fragment>
                );
              case "List":
                return (
                  <React.Fragment key={index}>
                    {renderList(content)}
                  </React.Fragment>
                );
              case "Formula":
                return (
                  <React.Fragment key={index}>
                    {renderFormulaBox(content)}
                  </React.Fragment>
                );
              default:
                return null;
            }
          }
        )}
      </>
    );
  };

  const renderContent = () => {
    switch (lessonNumber) {
      case "All":
        return renderAll();
      default:
        return render(Number(lessonNumber));
    }
  };

  return (
    <div className="container">
      {course ? (
        <>
          <CourseStart title={course.name} toHome={props.toHome} />
          <div className="lesson-buttons">
            {lessonCount.map((num) => (
              <LessonNumber
                key={num}
                number={num}
                onClick={lessonNumberButtonsClicked}
              />
            ))}
          </div>
          <h1 className="lesson-indicator">
            {lessonNumber === "All" ? "All Lessons" : `Lesson ${lessonNumber}`}
          </h1>
          {renderContent()}
          <p className="ending-message">
            You have reached the end of the page.
          </p>
        </>
      ) : (
        <p>Course not found.</p>
      )}
    </div>
  );
}

export default Courses;
