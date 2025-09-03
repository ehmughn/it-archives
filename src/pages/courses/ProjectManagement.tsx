import "../../css/Course.css";

import Title from "../../components/Title";
import Definition from "../../components/topic-contents/Definition";
import List from "../../components/topic-contents/List";
import FormulaBox from "../../components/topic-contents/FormulaBox";

import type { Content } from "../../components/topic-contents/List";
import LessonNumber from "../../components/buttons/LessonNumber";
import { useState } from "react";

function ProjectManagement() {
  const [lessonNumber, setLessonNumber] = useState("All");

  const lessonNumberButtonsClicked = (data: string) => {
    setLessonNumber(data);
    console.log(data);
  };

  const renderLesson1 = () => {
    const keyProjectCharacteristics: Content[] = [
      {
        title: "Temporary​",
        content:
          "Projects have a defined start and end date. They are not ongoing like operations.",
        type: "inline",
      },
      {
        title: "Unique Deliverable",
        content:
          "Each project produces a specific output (product, service, or result) that is distinct in some way.",
        type: "inline",
      },
      {
        title: "Progressive Elaboration",
        content:
          "Projects are developed in steps, and details become clearer as the project progresses.",
        type: "inline",
      },
      {
        title: "Defined Scope and Objectives",
        content:
          "Projects are initiated with clear goals and performance expectations.",
        type: "inline",
      },
      {
        title: "Resource Constraints",
        content:
          "Projects operate under constraints such as time, cost, scope, and quality.",
        type: "inline",
      },
      {
        title: "Cross-functional Teams",
        content:
          "Projects often involve people from different departments or areas of expertise.",
        type: "inline",
      },
      {
        title: "Risk and Uncertainty",
        content:
          "Every project has some degree of uncertainty and risk, which must be managed.",
        type: "inline",
      },
      {
        title: "Change-Oriented",
        content:
          "Projects often lead to or result from change in processes, systems, or organizations.",
        type: "inline",
      },
    ];

    return (
      <>
        <h1 className="lesson-title">Lesson 1: Project</h1>
        <Definition
          title="Project"
          meaning="is a temporary endeavor undertaken to create a unique product, service, or result."
        />
        <List
          title="Key Characteristics of a Project"
          content={keyProjectCharacteristics}
        />
      </>
    );
  };
  const renderLesson2 = () => {
    const constraints: Content[] = [
      {
        title: "Cost",
        content:
          "Project's budget. The project manager balances the budget so that projects neither overspend nor underspend.",
        type: "inline",
      },
      {
        title: "Scope",
        content:
          "Both the desired features and functions of the final product and the work required to deliver them. Estimating scope is crucial during planning.",
        type: "inline",
      },
      {
        title: "Quality",
        content:
          "Standards the project must meet to be effective. The final product must accomplish its intended task or deliver expected value.",
        type: "inline",
      },
      {
        title: "Risk",
        content:
          "External factors that can harm the project. It includes the probability of negative events and their consequences.",
        type: "inline",
      },
      {
        title: "Resources",
        content:
          "Includes people, equipment, facilities, funding—everything needed to deliver the final project.",
        type: "inline",
      },
      {
        title: "Time",
        content:
          "The duration needed to finish a project. Tasks and their estimates must be accurate to stay on schedule.",
        type: "inline",
      },
    ];

    const comparison: Content[] = [
      {
        title: "Project",
        content:
          "is a temporary endeavor undertaken to create a unique product, service, or result. It has a beginning and end. It is complete when goals are achieved.",
        type: "inline",
      },
      {
        title: "Program",
        content:
          "is a group of similar or related projects managed as a group rather than independently.",
        type: "inline",
      },
      {
        title: "Portfolio",
        content:
          "is a group of programs and projects within the same organization. These programs and projects may or may not be related.",
        type: "inline",
      },
    ];

    return (
      <>
        <h1 className="lesson-title">Lesson 2: Project Management</h1>
        <Definition
          title="Project Management"
          meaning="is the use of specific knowledge, skills, tools, and techniques to deliver something of value to people."
        />
        <List title="Constraints of Project Management" content={constraints} />
        <List title="Project, Program, Portfolio" content={comparison} />
      </>
    );
  };
  const renderLesson3 = () => {
    const planningElements: Content[] = [
      {
        title: "Project Scope",
        content: "Defines what is included and excluded from the project.",
        type: "inline",
      },
      {
        title: "Objectives and Goals",
        content: "Specific, measurable outcomes the project aims to achieve.",
        type: "inline",
      },
      {
        title: "Work Breakdown Structure (WBS)",
        content: "Breaks the project into smaller, manageable tasks.",
        type: "inline",
      },
      {
        title: "Timeline/Schedule",
        content: "Specifies when tasks will be completed.",
        type: "inline",
      },
      {
        title: "Resource Allocation",
        content: "Assigns people, roles, and responsibilities.",
        type: "inline",
      },
      {
        title: "Budget Planning",
        content: "Estimates project costs and financial needs.",
        type: "inline",
      },
      {
        title: "Risk Management",
        content: "Identifies potential risks and mitigation strategies.",
        type: "inline",
      },
      {
        title: "Communication Plan",
        content: "Outlines how stakeholders will be informed.",
        type: "inline",
      },
      {
        title: "Quality Control",
        content: "Ensures deliverables meet required standards.",
        type: "inline",
      },
    ];

    const projectPlanComponents: Content[] = [
      {
        title: "Project Objectives",
        content: "Defines what the project aims to achieve.",
        type: "inline",
      },
      {
        title: "Scope",
        content: "Clarifies what is included and excluded from the project.",
        type: "inline",
      },
      {
        title: "Timeline",
        content: "Outlines key milestones and deadlines.",
        type: "inline",
      },
      {
        title: "Budget",
        content: "Details cost estimates and financial planning.",
        type: "inline",
      },
      {
        title: "Resources",
        content: "Lists people, tools, and materials needed.",
        type: "inline",
      },
      {
        title: "Roles and Responsibilities",
        content: "Assigns tasks and ownership.",
        type: "inline",
      },
      {
        title: "Risk Management",
        content: "Plans for identifying and mitigating risks.",
        type: "inline",
      },
      {
        title: "Communication Plan",
        content: "Describes how information will be shared.",
        type: "inline",
      },
      {
        title: "Quality Plan",
        content: "Defines how success and standards will be measured.",
        type: "inline",
      },
    ];

    const importanceOfPlan: Content[] = [
      {
        title: "Clarity",
        content:
          "Ensures everyone understands the project’s direction and priorities.",
        type: "inline",
      },
      {
        title: "Control",
        content: "Helps manage time, cost, scope, and quality effectively.",
        type: "inline",
      },
      {
        title: "Coordination",
        content: "Aligns team members and stakeholders.",
        type: "inline",
      },
      {
        title: "Risk Reduction",
        content: "Anticipates and prepares for problems.",
        type: "inline",
      },
      {
        title: "Accountability",
        content: "Clearly assigns responsibilities.",
        type: "inline",
      },
    ];

    return (
      <>
        <h1 className="lesson-title">Lesson 3: Project Planning</h1>
        <Definition
          title="Project Planning"
          meaning="is the process of defining the scope, objectives, tasks, resources, timeline, and budget for a specific project. It serves as a roadmap that guides the team through each stage."
        />
        <List
          title="Key Elements in Project Planning"
          content={planningElements}
        />
        <Definition
          title="Project Plan"
          meaning="is a formal document that outlines how a project will be executed, monitored, and completed. It ensures alignment and guides decision-making throughout the project lifecycle."
        />
        <List
          title="Key Components of a Project Plan"
          content={projectPlanComponents}
        />
        <List title="Importance of a Project Plan" content={importanceOfPlan} />
      </>
    );
  };
  const renderLesson4 = () => {
    const keyTimeManagementProcesses: Content[] = [
      {
        title: "Plan Schedule Management",
        content:
          "Establish policies, procedures, and documentations for planning, managing, and controlling the project schedule.",
        type: "inline",
      },
      {
        title: "Define Activities",
        content:
          "Identify and document the specific actions to produce project deliverables.",
        type: "inline",
      },
      {
        title: "Sequence Activities",
        content: "Determine the order of tasks based on dependencies.",
        type: "inline",
      },
      {
        title: "Estimate Activity Durations",
        content:
          "Estimate how long each activity will take using tools and expert judgement.",
        type: "inline",
      },
      {
        title: "Develop Schedule",
        content: "Create the project timeline using scheduling tools.",
        type: "inline",
      },
      {
        title: "Control Schedule",
        content:
          "Track the schedule performance, manage changes, and update the schedule as needed.",
        type: "inline",
      },
    ];

    const timeManagementTools: Content[] = [
      {
        title: "Gantt Charts",
        content: "",
        type: "",
      },
      {
        title: "Critical Path Method (CPM)",
        content: "",
        type: "",
      },
      {
        title: "Work Breakdown Structure (WBS)",
        content: "",
        type: "",
      },
      {
        title: "Project Management Software",
        content: "",
        type: "",
      },
    ];

    const timeEstimationTechniques: Content[] = [
      {
        title: "Analogous Estimating",
        content:
          "estimate the cost, time, or resources needed for a new project by comparing it to similar, completed projects.",
        type: "inline",
      },
      {
        title: "Parametric Estimating",
        content:
          "uses historical data and statistical relationships to estimate project costs and durations.",
        type: "inline",
      },
      {
        title: "Three-Point Estimating",
        content:
          "improves forecast accuracy by considering optimistic, most likely, and pessimistic scenarios.",
        type: "inline",
      },
      {
        title: "Bottom-Up Estimating",
        content:
          "breaking down a project into smaller, more manageable tasks, and then estimating the cost, time, or resource requirements for each individual task.",
        type: "inline",
      },
    ];

    return (
      <>
        <h1 className="lesson-title">Lesson 4: Project Management - Time</h1>
        <Definition
          title="Time Management"
          meaning="The process of planning and controlling the schedule to ensure timely completion of a project."
        />

        <List
          title="Key Time Management Processes"
          content={keyTimeManagementProcesses}
        />

        <List title="Time Management Tools" content={timeManagementTools} />

        <Definition
          title="Gantt Chart"
          meaning="is a visual project management tool that displays a project's schedule over time."
        />

        <Definition
          title="Critical Path Method (CPM)"
          meaning="is a project planning and scheduling technique used to identify the sequence of tasks (activities) that determines the minimum time required to complete a project."
        />

        <List
          title="Time Estimation Techniques"
          content={timeEstimationTechniques}
        />

        <Definition
          title="PERT (Program Evaluation and Review Technique) Analysis"
          meaning="is a method that analyzes the time required to complete each task and its associated dependencies and determines the minimum amount of time necessary to complete a specific project."
        />

        <FormulaBox
          title="Estimated Time Formula"
          formula="Te = (To + 4(Tm) + Tp) / 6"
          explanation="The result (Estimated Time) will be the activity duration."
          inputs={[
            { label: "Optimistic Time", key: "to" },
            { label: "Most Likely Time", key: "tm" },
            { label: "Pessimistic Time", key: "tp" },
          ]}
          calculate={({ to = 0, tm = 0, tp = 0 }) => (to + 4 * tm + tp) / 6}
        />
      </>
    );
  };
  const renderLesson5 = () => {
    const keyComponentsOfEVM: Content[] = [
      {
        title: "Planned Value (PV)",
        content:
          "also called Budgeted Cost of Work Scheduled (BCWS). The estimated value of the work planned to be done by a specific time.",
        type: "inline",
      },
      {
        title: "Earned Value (EV)",
        content:
          "also called Budgeted Cost of Work Performed (BCWP). The estimated value of the work actually completed by a specific time.",
        type: "inline",
      },
      {
        title: "Actual Cost (AC)",
        content:
          "also called Actual Cost of Work Performed (ACWP). The actual cost incurred for the work performed by a specific time.",
        type: "inline",
      },
    ];
    return (
      <>
        <h1 className="lesson-title">Lesson 5: Project Management - Cost</h1>
        <Definition
          title="Cost Management"
          meaning="the process of planning, scheduling, monitoring, and controlling the time allocated to complete project activities. Eman's note: base lang to sa ppt, same lang siya sa definition ng 'Time Management'."
        />

        <Definition
          title="Earned Value Management (EVM)"
          meaning="used to measure project performance and progress in an objective manner."
        />

        <List title="Key Components of EVM" content={keyComponentsOfEVM} />

        <FormulaBox
          title="Cost Variance (CV)"
          formula="CV = EV - AC"
          explanation="Tells if you're over or under budget. Positive CV = under budget, Negative CV = over budget."
          inputs={[
            { label: "Earned Value (EV)", key: "ev" },
            { label: "Actual Cost (AC)", key: "ac" },
          ]}
          calculate={({ ev = 0, ac = 0 }) => ev - ac}
        />

        <FormulaBox
          title="Schedule Variance (SV)"
          formula="SV = EV - PV"
          explanation="Tells if you're ahead or behind schedule. Positive SV = ahead of schedule, Negative SV = behind schedule."
          inputs={[
            { label: "Earned Value (EV)", key: "ev" },
            { label: "Planned Value (PV)", key: "pv" },
          ]}
          calculate={({ ev = 0, pv = 0 }) => ev - pv}
        />

        <FormulaBox
          title="Cost Performance Index (CPI)"
          formula="CPI = EV / AC"
          explanation="Efficiency of cost usage. CPI < 1 = over budget, CPI > 1 = under budget."
          inputs={[
            { label: "Earned Value (EV)", key: "ev" },
            { label: "Actual Cost (AC)", key: "ac" },
          ]}
          calculate={({ ev = 0, ac = 1 }) => ev / ac}
        />

        <FormulaBox
          title="Schedule Performance Index (SPI)"
          formula="SPI = EV / PV"
          explanation="Efficiency of schedule performance. SPI < 1 = behind schedule, SPI > 1 = ahead of schedule."
          inputs={[
            { label: "Earned Value (EV)", key: "ev" },
            { label: "Planned Value (PV)", key: "pv" },
          ]}
          calculate={({ ev = 0, pv = 1 }) => ev / pv}
        />

        <Definition
          title="Earned Value"
          meaning="tells you how much work has actually been completed, in terms of the project's budget."
        />

        <FormulaBox
          title="Earned Value (EV) Formula"
          formula="EV = Planned Value (PV) * Percent of Work Completed"
          explanation="Just the percentage of the PV."
          inputs={[
            { label: "Planned Value (PV)", key: "pv" },
            { label: "Percent of Work Completed", key: "pe" },
          ]}
          calculate={({ pv = 0, pe = 0 }) => (pv * pe) / 100}
        />

        <Definition
          title="Actual Cost"
          meaning="the real amount of money spent on a project for the work completed up to a specific point in time. Formula: add all the values given."
        />

        <Definition
          title="Cost-Benefit Analysis"
          meaning="a decision-making tool used to evaluate the financial viability of a project, investment, or decision by comparing its total expected costs with its total expected benefits."
        />

        <FormulaBox
          title="Benefit-Cost Ratio (BCR) Formula"
          formula="BCR = Total Benefits / Total Costs"
          explanation="A value greater than 1 indicates a worthwhile investment."
          inputs={[
            { label: "Total Benefits", key: "benefits" },
            { label: "Total Costs", key: "costs" },
          ]}
          calculate={({ benefits = 0, costs = 1 }) => benefits / costs}
        />
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
            {renderLesson3()}
            {renderLesson4()}
            {renderLesson5()}
          </>
        );
      case "1":
        return renderLesson1();
      case "2":
        return renderLesson2();
      case "3":
        return renderLesson3();
      case "4":
        return renderLesson4();
      case "5":
        return renderLesson5();
    }
  };

  return (
    <div className="container">
      <Title text="Project Management" />
      <div className="lesson-buttons">
        {["All", "1", "2", "3", "4", "5"].map((num) => (
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

export default ProjectManagement;
