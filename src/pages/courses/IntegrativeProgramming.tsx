import "../../css/Course.css";

import Title from "../../components/Title";
import Definition from "../../components/topic-contents/Definition";
import List from "../../components/topic-contents/List";

import type { Content } from "../../components/topic-contents/List";
import LessonNumber from "../../components/buttons/LessonNumber";
import { useState } from "react";

function IntegrativeProgramming() {
  const [lessonNumber, setLessonNumber] = useState("All");

  const lessonNumberButtonsClicked = (data: string) => {
    setLessonNumber(data);
    console.log(data);
  };

  const renderLesson1 = () => {
    const keyConceptsOfIntegrativeProgramming: Content[] = [
      {
        title: "Multi-Language Development",
        content:
          "Utilizing different programming languages within the same project to take advantage of the specific strengths of each.",
        type: "inline",
      },
      {
        title: "Cross-Platform Integration",
        content:
          "Developing applications that work across multiple platforms (web, mobile, desktop) by integrating different technologies.",
        type: "inline",
      },
      {
        title: "API Integration",
        content:
          "Connecting different systems or services through Application Programming Interfaces (APIs) to enable communication between them. This allows developers to integrate external services, such as payment gateways, social media, or data services, into their applications",
        type: "inline",
      },
      {
        title: "Framework and Library Integration",
        content:
          "Combining different frameworks or libraries within a single project to build more feature-rich and efficient applications.",
        type: "inline",
      },
      {
        title: "Microservices Architecture",
        content:
          "Developing software applications as a collection of loosely coupled services, each responsible for a specific function. This approach allows developers to use different technologies for each microservice, optimizing performance and scalability.",
        type: "inline",
      },
      {
        title: "Data Integration",
        content:
          "Combining data from multiple sources or databases to provide a unified view or to perform complex data analytics. This may involve integrating SQL and NoSQL databases or combining on-premises and cloud-based data stores.",
        type: "inline",
      },
      {
        title: "Middleware and Orchestration",
        content:
          "Using middleware to connect different applications, services, or components within a system, and orchestrating their interactions to ensure seamless operation. Middleware often handles tasks such as message passing, data transformation, and process coordination",
        type: "inline",
      },
    ];

    const importanceOfIntegrativeProgramming: Content[] = [
      {
        title: "Enhanced Functionality",
        content:
          "Integrative programming allows different software components to work together seamlessly, creating systems that offer more comprehensive and powerful features.",
        type: "inline",
      },
      {
        title: "Improved User Experience",
        content:
          "When different systems and components are integrated effectively, users experience smoother and more intuitive interactions.",
        type: "inline",
      },
      {
        title: "Increased Efficiency",
        content:
          "Integration helps streamline workflows and processes by enabling automated data exchange and communication between systems.",
        type: "inline",
      },
      {
        title: "Scalability and Flexibility",
        content:
          "Loosely coupled systems, a key aspect of integrative programming, are easier to scale and modify.",
        type: "inline",
      },
      {
        title: "Cost-Effectiveness",
        content:
          "By integrating existing systems and components, organizations can leverage their current investments rather than building new solutions from scratch.",
        type: "inline",
      },
      {
        title: "Better Data Management",
        content:
          "Integrative programming facilitates better data management by ensuring that data flows smoothly between different systems.",
        type: "inline",
      },
      {
        title: "Collaboration and Teamwork",
        content:
          "Integration encourages collaboration among different development teams, each working on different components or services.",
        type: "inline",
      },
      {
        title: "Future-Proofing",
        content:
          "As technology evolves, integrative programming allows systems to adapt more easily to new technologies and standards. This ensures that applications remain relevant and functional over time.",
        type: "inline",
      },
    ];

    const benefitsOfUsingFrameworksAndLibraries: Content[] = [
      {
        title: "Efficiency",
        content:
          "They provide reusable code, reducing the amount of time and effort needed to write common functionalities from scratch.",
        type: "inline",
      },
      {
        title: "Consistency",
        content:
          "Frameworks enforce a consistent structure and coding style, making the codebase easier to understand and maintain.",
        type: "inline",
      },
      {
        title: "Scalability",
        content:
          "Both frameworks and libraries offer tools and patterns that help in building scalable applications",
        type: "inline",
      },
      {
        title: "Community Support",
        content:
          "Popular frameworks and libraries have large communities, offering extensive documentation, tutorials, and support.",
        type: "inline",
      },
    ];

    const choosingTheRightFrameworkOrLibrary: Content[] = [
      {
        title: "Project requirements",
        content: "",
        type: "",
      },
      {
        title: "Community support",
        content: "",
        type: "",
      },
      {
        title: "Learning curve",
        content: "",
        type: "",
      },
      {
        title: "Performance",
        content: "",
        type: "",
      },
    ];

    return (
      <>
        <h1 className="lesson-title">
          Lesson 1: INTRODUCTION TO INTEGRATIVE PROGRAMMING
        </h1>
        <Definition
          title=" Integrative Programming"
          meaning={
            "refers to the practice of combining multiple programming languages, frameworks, libraries, or tools within a single software project to leverage the strengths of each."
          }
        />
        <List
          title="Key Concepts of Integrative Programming"
          content={keyConceptsOfIntegrativeProgramming}
        />
        <List
          title="Importance of Integrative Programming in Software Development"
          content={importanceOfIntegrativeProgramming}
        />
        <Definition
          title="Frameworks and Libraries"
          meaning={
            "essential tools in software development that help developers build applications more efficiently by providing pre-written code, structures, and functionalities."
          }
        />
        <Definition
          title="Frameworks"
          meaning={
            "a collection of pre-defined classes, functions, and rules that provides a structure and a foundation for building software applications. Frameworks typically dictate the architecture of an application and enforce certain coding patterns and best practices."
          }
        />
        <Definition
          title="Libraries"
          meaning={
            "a collection of pre-written code that developers can call upon to perform common tasks. Unlike frameworks, libraries don't dictate the overall structure of the application but rather offer specific functionalities that can be used within a project."
          }
        />
        <List
          title="Benefits of Using Frameworks and Libraries"
          content={benefitsOfUsingFrameworksAndLibraries}
        />
        <List
          title="Choosing the Right Framework and Library"
          content={choosingTheRightFrameworkOrLibrary}
        />
        <Definition
          title="Front-End Development"
          meaning={
            "focuses on the visual aspects of a website or application—the part that users see and interact with. This includes everything from the layout and design to the interactive elements and user experience."
          }
        />
        <Definition
          title="Back-End Development"
          meaning={
            "deals with the server side of a website or application. It focuses on how the site works, including database interactions, server logic, and application performance."
          }
        />
        <Definition
          title="Full-Stack Development"
          meaning={
            "is proficient in both front-end and back-end development. They have the skills to build a complete web application from start to finish, handling everything from the user interface to the server-side logic and database management."
          }
        />
      </>
    );
  };
  const renderLesson2 = () => {
    const keyConcepts: Content[] = [
      {
        title: "Components",
        content:
          "the fundamental units of any React application, encapsulating both the structure and behavior of parts of the user interface. A React component is a self-contained unit that manages its own content, presentation, and behavior.",
        type: "inline",
      },
      {
        title: "JavaScript XML (JSX)",
        content:
          "a syntax extension for JavaScript that lets you write HTML-like markup inside a JavaScript file. Although there are other ways to write components, most React developers prefer the conciseness of JSX, and most codebases use it.",
        type: "inline",
      },
      {
        title: "Virtual DOM",
        content:
          "core concept in React that plays a crucial role in its performance and efficiency. It's a lightweight, in memory representation of the real DOM (Document Object Model) elements in a web application.",
        type: "inline",
      },
      {
        title: "Unidirectional Data Flow",
        content:
          "data in a React application flows in one direction—from parent components to child components. This flow is managed through props (short for properties) and ensures that the data lifecycle is predictable and easier to debug.",
        type: "inline",
      },
    ];
    const keyPoints: Content[] = [
      {
        title: "Props are Read-Only",
        content:
          "Child components cannot modify props received from their parent. This prevents accidental data mutations.",
        type: "inline",
      },
      {
        title: "State Management",
        content:
          "State is typically managed in parent components. Child components can request state updates through callbacks.",
        type: "inline",
      },
      {
        title: "Predictability",
        content:
          "The unidirectional flow makes it easier to understand how data changes affect the UI.",
        type: "inline",
      },
      {
        title: "Debugging",
        content:
          "Issues are often easier to isolate because data flows in a clear and predictable manner.",
        type: "inline",
      },
    ];
    const rulesOfJSX: Content[] = [
      {
        title: "Return a single root element.",
        content: "",
        type: "",
      },
      {
        title: "Close all the tags.",
        content: "",
        type: "",
      },
    ];

    return (
      <>
        <h1 className="lesson-title">Lesson 2: INTRODUCTION TO REACT JS</h1>
        <Definition
          title="React"
          meaning="a widely-used JavaScript library for building dynamic, interactive user interfaces, particularly for single-page applications (SPAs). It was created by Facebook in 2013 and has since become one of the most popular tools in web development."
        />
        <List title="Key Concepts" content={keyConcepts} />
        <List title="Key Points" content={keyPoints} />
        <List title="The Rules of JSX" content={rulesOfJSX} />
      </>
    );
  };

  const renderContent = () => {
    switch (lessonNumber) {
      case "All":
        return (
          <>
            {renderLesson1()}
            {renderLesson2()}
          </>
        );
      case "1":
        return renderLesson1();
      case "2":
        return renderLesson2();
    }
  };

  return (
    <div className="container">
      <Title text="Integrative Programming and Technologies" />
      <div className="lesson-buttons">
        {["All", "1", "2"].map((num) => (
          <LessonNumber
            key={num}
            number={num}
            onClick={lessonNumberButtonsClicked}
          />
        ))}
      </div>
      <h1 className="lesson-indicator">
        {lessonNumber && `Lesson ${lessonNumber}`}
      </h1>
      {renderContent()}
      <p className="ending-message">You have reached the end of the page.</p>
    </div>
  );
}

export default IntegrativeProgramming;
