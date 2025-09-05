import { useState, useEffect, useCallback, useMemo } from "react";
import "../css/Course.css";
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

function Courses({ page, toHome }: Props) {
  const [course, setCourse] = useState<CourseInformation | null>(null);
  const [lessonCount, setLessonCount] = useState<string[]>(["All"]);
  const [lessonNumber, setLessonNumber] = useState<string>("All");
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  const lessonNumberButtonsClicked = useCallback((data: string) => {
    setLessonNumber(data);
  }, []);

  useEffect(() => {
    setIsLoading(true);
    const matched = CoursesList.find((c) => c.code === page);
    if (matched) {
      setCourse(matched);
      setLessonCount([
        "All",
        ...matched.lessons.map((_, index) => String(index + 1)),
      ]);
    } else {
      setCourse(null);
    }
    setIsLoading(false);
  }, [page]);

  const searchContent = (content: Content): boolean => {
    const searchText = searchTerm.toLowerCase();
    switch (content.type) {
      case "Definition":
        const meaning =
          typeof content.content === "string" ? content.content : "";
        return (
          content.title.toLowerCase().includes(searchText) ||
          meaning.toLowerCase().includes(searchText)
        );
      case "List":
        const listContent = content.content as SubList[];
        return (
          content.title.toLowerCase().includes(searchText) ||
          listContent.some(
            (item) =>
              item.title.toLowerCase().includes(searchText) ||
              item.content.toLowerCase().includes(searchText)
          )
        );
      case "Formula":
        const formulaContent = content.content as Formula;
        return (
          content.title.toLowerCase().includes(searchText) ||
          formulaContent.formula.toLowerCase().includes(searchText) ||
          formulaContent.explanation?.toLowerCase().includes(searchText) ||
          false ||
          formulaContent.inputs.some((input) =>
            input.label.toLowerCase().includes(searchText)
          )
        );
      default:
        return false;
    }
  };

  const renderDefinition = (content: Content) => (
    <Definition
      key={`${content.title}-${content.type}`}
      title={content.title}
      meaning={typeof content.content === "string" ? content.content : ""}
    />
  );

  const renderList = (content: Content) => (
    <List
      key={`${content.title}-${content.type}`}
      title={content.title}
      content={content.content as SubList[]}
    />
  );

  const renderFormulaBox = (content: Content) => {
    const formulaContent = content.content as Formula;
    return (
      <FormulaBox
        key={`${content.title}-${content.type}`}
        title={content.title}
        formula={formulaContent.formula}
        explanation={formulaContent.explanation}
        inputs={formulaContent.inputs}
        calculate={formulaContent.calculate}
      />
    );
  };

  const renderContentItem = (content: Content) => {
    if (!searchContent(content)) return null;
    switch (content.type) {
      case "Definition":
        return renderDefinition(content);
      case "List":
        return renderList(content);
      case "Formula":
        return renderFormulaBox(content);
      default:
        return null;
    }
  };

  const renderContent = useMemo(() => {
    if (!course) return <p className="error-message">Course not found.</p>;
    const relevantLessons =
      lessonNumber === "All"
        ? course.lessons
        : [course.lessons[parseInt(lessonNumber) - 1]];
    const allContent = relevantLessons.flatMap((lesson) =>
      lesson.content.map((content) => content)
    );
    const filteredContent = allContent
      .map((content) => renderContentItem(content))
      .filter((item) => item !== null);

    if (filteredContent.length === 0 && searchTerm) {
      return (
        <p className="error-message">No content found for "{searchTerm}".</p>
      );
    }
    return filteredContent;
  }, [course, lessonNumber, searchTerm]);

  if (isLoading) {
    return <div className="loading">Loading course...</div>;
  }

  return (
    <div className="container">
      {course ? (
        <>
          <CourseStart title={course.name} toHome={toHome} />
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search content..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
              aria-label="Search content within lessons"
            />
          </div>
          <div className="lesson-buttons">
            {lessonCount.map((num) => (
              <LessonNumber
                key={num}
                number={num}
                isActive={num === lessonNumber}
                onClick={lessonNumberButtonsClicked}
              />
            ))}
          </div>
          <h2 className="lesson-indicator">
            {lessonNumber === "All"
              ? "All Content"
              : `Lesson ${lessonNumber} Content`}
          </h2>
          {renderContent}
          <p className="ending-message">
            You have reached the end of the page.
          </p>
        </>
      ) : (
        <p className="error-message">Course not found.</p>
      )}
    </div>
  );
}

export default Courses;
