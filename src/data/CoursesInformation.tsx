/*

ADDING STUFF HERE SHORTCUTS USING VSCODE

WHAT TO TYPE - WHAT IT DOES

course-template - start of a new course
lesson-template - start of a new lesson, must be put inside a course

content-definition - a content of a lesson, definition content
content-inline-list - a content of a lesson, list with titles and their definition
content-list - a content of a lesson, list with only titles (no definition)
content-formula - a content of a lesson, formula with interactive calculator

*/

export interface SubList {
  title: string;
  content: string;
  type: string;
}

export interface Formula {
  formula: string;
  explanation: string;
  inputs: { label: string; key: string }[];
  calculate: (values: Record<string, number>) => number;
}

export type contentType = SubList[] | Formula | string;

export interface Content {
  title: string;
  content: contentType;
  type: string;
}

export interface Lesson {
  title: string;
  content: Content[];
}

export interface CourseInformation {
  name: string;
  code: string;
  lessons: Lesson[];
}

const CoursesList: CourseInformation[] = [
  {
    name: "Project Management",
    code: "CTPRJMGT",
    lessons: [
      {
        title: "Project",
        content: [
          {
            title: "Project",
            content:
              "is a temporary endeavor undertaken to create a unique product, service, or result.",
            type: "Definition",
          },
          {
            title: "Key Characteristics of a Project",
            content: [
              {
                title: "Temporary",
                content:
                  "Projects have a defined start and end date. They are not ongoing like operations.",
                type: "InLineDefinition",
              },
              {
                title: "Unique Deliverable",
                content:
                  "Each project produces a specific output (product, service, or result) that is distinct in some way.",
                type: "InLineDefinition",
              },
              {
                title: "Progressive Elaboration",
                content:
                  "Projects are developed in steps, and details become clearer as the project progresses.",
                type: "InLineDefinition",
              },
              {
                title: "Defined Scope and Objectives",
                content:
                  "Projects are initiated with clear goals and performance expectations.",
                type: "InLineDefinition",
              },
              {
                title: "Resource Constraints",
                content:
                  "Projects operate under constraints such as time, cost, scope, and quality.",
                type: "InLineDefinition",
              },
              {
                title: "Cross-functional Teams",
                content:
                  "Projects often involve people from different departments or areas of expertise.",
                type: "InLineDefinition",
              },
              {
                title: "Risk and Uncertainty",
                content:
                  "Every project has some degree of uncertainty and risk, which must be managed.",
                type: "InLineDefinition",
              },
              {
                title: "Change-Oriented",
                content:
                  "Projects often lead to or result from change in processes, systems, or organizations.",
                type: "InLineDefinition",
              },
            ],
            type: "List",
          },
        ],
      },
      {
        title: "Project Management",
        content: [
          {
            title: "Project Management",
            content:
              "is the use of specific knowledge, skills, tools, and techniques to deliver something of value to people.",
            type: "Definition",
          },
          {
            title: "Constraints of Project Management",
            content: [
              {
                title: "Cost",
                content:
                  "Project's budget. The project manager balances the budget so that projects neither overspend nor underspend.",
                type: "InLineDefinition",
              },
              {
                title: "Scope",
                content:
                  "Both the desired features and functions of the final product and the work required to deliver them. Estimating scope is crucial during planning.",
                type: "InLineDefinition",
              },
              {
                title: "Quality",
                content:
                  "Standards the project must meet to be effective. The final product must accomplish its intended task or deliver expected value.",
                type: "InLineDefinition",
              },
              {
                title: "Risk",
                content:
                  "External factors that can harm the project. It includes the probability of negative events and their consequences.",
                type: "InLineDefinition",
              },
              {
                title: "Resources",
                content:
                  "Includes people, equipment, facilities, funding—everything needed to deliver the final project.",
                type: "InLineDefinition",
              },
              {
                title: "Time",
                content:
                  "The duration needed to finish a project. Tasks and their estimates must be accurate to stay on schedule.",
                type: "InLineDefinition",
              },
            ],
            type: "List",
          },
          {
            title: "Project, Program, Portfolio",
            content: [
              {
                title: "Project",
                content:
                  "is a temporary endeavor undertaken to create a unique product, service, or result. It has a beginning and end. It is complete when goals are achieved.",
                type: "InLineDefinition",
              },
              {
                title: "Program",
                content:
                  "is a group of similar or related projects managed as a group rather than independently.",
                type: "InLineDefinition",
              },
              {
                title: "Portfolio",
                content:
                  "is a group of programs and projects within the same organization. These programs and projects may or may not be related.",
                type: "InLineDefinition",
              },
            ],
            type: "List",
          },
        ],
      },
      {
        title: "Project Planning",
        content: [
          {
            title: "Project Planning",
            content:
              "is the process of defining the scope, objectives, tasks, resources, timeline, and budget for a specific project. It serves as a roadmap that guides the team through each stage.",
            type: "Definition",
          },
          {
            title: "Key Elements in Project Planning",
            content: [
              {
                title: "Project Scope",
                content:
                  "Defines what is included and excluded from the project.",
                type: "InLineDefinition",
              },
              {
                title: "Objectives and Goals",
                content:
                  "Specific, measurable outcomes the project aims to achieve.",
                type: "InLineDefinition",
              },
              {
                title: "Work Breakdown Structure (WBS)",
                content: "Breaks the project into smaller, manageable tasks.",
                type: "InLineDefinition",
              },
              {
                title: "Timeline/Schedule",
                content: "Specifies when tasks will be completed.",
                type: "InLineDefinition",
              },
              {
                title: "Resource Allocation",
                content: "Assigns people, roles, and responsibilities.",
                type: "InLineDefinition",
              },
              {
                title: "Budget Planning",
                content: "Estimates project costs and financial needs.",
                type: "InLineDefinition",
              },
              {
                title: "Risk Management",
                content:
                  "Identifies potential risks and mitigation strategies.",
                type: "InLineDefinition",
              },
              {
                title: "Communication Plan",
                content: "Outlines how stakeholders will be informed.",
                type: "InLineDefinition",
              },
              {
                title: "Quality Control",
                content: "Ensures deliverables meet required standards.",
                type: "InLineDefinition",
              },
            ],
            type: "List",
          },
          {
            title: "Project Plan",
            content:
              "is a formal document that outlines how a project will be executed, monitored, and completed. It ensures alignment and guides decision-making throughout the project lifecycle.",
            type: "Definition",
          },
          {
            title: "Key Components of a Project Plan",
            content: [
              {
                title: "Project Objectives",
                content: "Defines what the project aims to achieve.",
                type: "InLineDefinition",
              },
              {
                title: "Scope",
                content:
                  "Clarifies what is included and excluded from the project.",
                type: "InLineDefinition",
              },
              {
                title: "Timeline",
                content: "Outlines key milestones and deadlines.",
                type: "InLineDefinition",
              },
              {
                title: "Budget",
                content: "Details cost estimates and financial planning.",
                type: "InLineDefinition",
              },
              {
                title: "Resources",
                content: "Lists people, tools, and materials needed.",
                type: "InLineDefinition",
              },
              {
                title: "Roles and Responsibilities",
                content: "Assigns tasks and ownership.",
                type: "InLineDefinition",
              },
              {
                title: "Risk Management",
                content: "Plans for identifying and mitigating risks.",
                type: "InLineDefinition",
              },
              {
                title: "Communication Plan",
                content: "Describes how information will be shared.",
                type: "InLineDefinition",
              },
              {
                title: "Quality Plan",
                content: "Defines how success and standards will be measured.",
                type: "InLineDefinition",
              },
            ],
            type: "List",
          },
          {
            title: "Importance of a Project Plan",
            content: [
              {
                title: "Clarity",
                content:
                  "Ensures everyone understands the project’s direction and priorities.",
                type: "InLineDefinition",
              },
              {
                title: "Control",
                content:
                  "Helps manage time, cost, scope, and quality effectively.",
                type: "InLineDefinition",
              },
              {
                title: "Coordination",
                content: "Aligns team members and stakeholders.",
                type: "InLineDefinition",
              },
              {
                title: "Risk Reduction",
                content: "Anticipates and prepares for problems.",
                type: "InLineDefinition",
              },
              {
                title: "Accountability",
                content: "Clearly assigns responsibilities.",
                type: "InLineDefinition",
              },
            ],
            type: "List",
          },
        ],
      },
      {
        title: "Project Management - Time",
        content: [
          {
            title: "Time Management",
            content:
              "The process of planning and controlling the schedule to ensure timely completion of a project.",
            type: "Definition",
          },
          {
            title: "Key Time Management Processes",
            content: [
              {
                title: "Plan Schedule Management",
                content:
                  "Establish policies, procedures, and documentations for planning, managing, and controlling the project schedule.",
                type: "InLineDefinition",
              },
              {
                title: "Define Activities",
                content:
                  "Identify and document the specific actions to produce project deliverables.",
                type: "InLineDefinition",
              },
              {
                title: "Sequence Activities",
                content: "Determine the order of tasks based on dependencies.",
                type: "InLineDefinition",
              },
              {
                title: "Estimate Activity Durations",
                content:
                  "Estimate how long each activity will take using tools and expert judgement.",
                type: "InLineDefinition",
              },
              {
                title: "Develop Schedule",
                content: "Create the project timeline using scheduling tools.",
                type: "InLineDefinition",
              },
              {
                title: "Control Schedule",
                content:
                  "Track the schedule performance, manage changes, and update the schedule as needed.",
                type: "InLineDefinition",
              },
            ],
            type: "List",
          },
          {
            title: "Time Management Tools",
            content: [
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
            ],
            type: "List",
          },
          {
            title: "Gantt Chart",
            content:
              "is a visual project management tool that displays a project's schedule over time.",
            type: "Definition",
          },
          {
            title: "Critical Path Method (CPM)",
            content:
              "is a project planning and scheduling technique used to identify the sequence of tasks (activities) that determines the minimum time required to complete a project.",
            type: "Definition",
          },
          {
            title: "Time Estimation Techniques",
            content: [
              {
                title: "Analogous Estimating",
                content:
                  "estimate the cost, time, or resources needed for a new project by comparing it to similar, completed projects.",
                type: "InLineDefinition",
              },
              {
                title: "Parametric Estimating",
                content:
                  "uses historical data and statistical relationships to estimate project costs and durations.",
                type: "InLineDefinition",
              },
              {
                title: "Three-Point Estimating",
                content:
                  "improves forecast accuracy by considering optimistic, most likely, and pessimistic scenarios.",
                type: "InLineDefinition",
              },
              {
                title: "Bottom-Up Estimating",
                content:
                  "breaking down a project into smaller, more manageable tasks, and then estimating the cost, time, or resource requirements for each individual task.",
                type: "InLineDefinition",
              },
            ],
            type: "List",
          },
          {
            title: "PERT (Program Evaluation and Review Technique) Analysis",
            content:
              "is a method that analyzes the time required to complete each task and its associated dependencies and determines the minimum amount of time necessary to complete a specific project.",
            type: "Definition",
          },
          {
            title: "Estimated Time Formula",
            content: {
              formula: "Te = (To + 4(Tm) + Tp) / 6",
              explanation:
                "The result (Estimated Time) will be the activity duration.",
              inputs: [
                { label: "Optimistic Time", key: "to" },
                { label: "Most Likely Time", key: "tm" },
                { label: "Pessimistic Time", key: "tp" },
              ],
              calculate: ({ to = 0, tm = 0, tp = 0 }) => (to + 4 * tm + tp) / 6,
            },
            type: "Formula",
          },
        ],
      },
      {
        title: "Project Management - Cost",
        content: [
          {
            title: "Cost Management",
            content:
              "the process of planning, scheduling, monitoring, and controlling the time allocated to complete project activities. Eman's note: base lang to sa ppt, same lang siya sa definition ng 'Time Management'.",
            type: "Definition",
          },
          {
            title: "Earned Value Management (EVM)",
            content:
              "used to measure project performance and progress in an objective manner.",
            type: "Definition",
          },
          {
            title: "Key Components of EVM",
            content: [
              {
                title: "Planned Value (PV)",
                content:
                  "also called Budgeted Cost of Work Scheduled (BCWS). The estimated value of the work planned to be done by a specific time.",
                type: "InLineDefinition",
              },
              {
                title: "Earned Value (EV)",
                content:
                  "also called Budgeted Cost of Work Performed (BCWP). The estimated value of the work actually completed by a specific time.",
                type: "InLineDefinition",
              },
              {
                title: "Actual Cost (AC)",
                content:
                  "also called Actual Cost of Work Performed (ACWP). The actual cost incurred for the work performed by a specific time.",
                type: "InLineDefinition",
              },
            ],
            type: "List",
          },
          {
            title: "Cost Variance (CV)",
            content: {
              formula: "CV = EV - AC",
              explanation:
                "Tells if you're over or under budget. Positive CV = under budget, Negative CV = over budget.",
              inputs: [
                { label: "Earned Value (EV)", key: "ev" },
                { label: "Actual Cost (AC)", key: "ac" },
              ],
              calculate: ({ ev = 0, ac = 0 }) => ev - ac,
            },
            type: "Formula",
          },
          {
            title: "Schedule Variance (SV)",
            content: {
              formula: "SV = EV - PV",
              explanation:
                "Tells if you're ahead or behind schedule. Positive SV = ahead of schedule, Negative SV = behind schedule.",
              inputs: [
                { label: "Earned Value (EV)", key: "ev" },
                { label: "Planned Value (PV)", key: "pv" },
              ],
              calculate: ({ ev = 0, pv = 0 }) => ev - pv,
            },
            type: "Formula",
          },
          {
            title: "Cost Performance Index (CPI)",
            content: {
              formula: "CPI = EV / AC",
              explanation:
                "Efficiency of cost usage. CPI < 1 = over budget, CPI > 1 = under budget.",
              inputs: [
                { label: "Earned Value (EV)", key: "ev" },
                { label: "Actual Cost (AC)", key: "ac" },
              ],
              calculate: ({ ev = 0, ac = 1 }) => ev / ac,
            },
            type: "Formula",
          },
          {
            title: "Schedule Performance Index (SPI)",
            content: {
              formula: "SPI = EV / PV",
              explanation:
                "Efficiency of schedule performance. SPI < 1 = behind schedule, SPI > 1 = ahead of schedule.",
              inputs: [
                { label: "Earned Value (EV)", key: "ev" },
                { label: "Planned Value (PV)", key: "pv" },
              ],
              calculate: ({ ev = 0, pv = 1 }) => ev / pv,
            },
            type: "Formula",
          },
          {
            title: "Earned Value",
            content:
              "tells you how much work has actually been completed, in terms of the project's budget.",
            type: "Definition",
          },
          {
            title: "Earned Value (EV) Formula",
            content: {
              formula: "EV = Planned Value (PV) * Percent of Work Completed",
              explanation: "Just the percentage of the PV.",
              inputs: [
                { label: "Planned Value (PV)", key: "pv" },
                { label: "Percent of Work Completed", key: "pe" },
              ],
              calculate: ({ pv = 0, pe = 0 }) => (pv * pe) / 100,
            },
            type: "Formula",
          },
          {
            title: "Actual Cost",
            content:
              "the real amount of money spent on a project for the work completed up to a specific point in time. Formula: add all the values given.",
            type: "Definition",
          },
          {
            title: "Cost-Benefit Analysis",
            content:
              "a decision-making tool used to evaluate the financial viability of a project, investment, or decision by comparing its total expected costs with its total expected benefits.",
            type: "Definition",
          },
          {
            title: "Benefit-Cost Ratio (BCR) Formula",
            content: {
              formula: "BCR = Total Benefits / Total Costs",
              explanation:
                "A value greater than 1 indicates a worthwhile investment.",
              inputs: [
                { label: "Total Benefits", key: "benefits" },
                { label: "Total Costs", key: "costs" },
              ],
              calculate: ({ benefits = 0, costs = 1 }) => benefits / costs,
            },
            type: "Formula",
          },
        ],
      },
    ],
  },
  {
    name: "Advanced Networking",
    code: "CTADNETL",
    lessons: [
      {
        title: "Wireless Access Point",
        content: [
          {
            title: "What is Wireless Access Point (WAP)",
            content:
              "WAP is a networking device that enables wired networks accessible to wirelessly capable devices.",
            type: "Definition",
          },
          {
            title: "How does it work",
            content:
              "It enables communication between wireless devices and the wired network structure by working as a link between them.",
            type: "Definition",
          },
          {
            title: "When do we use WAP",
            content:
              "WAPs are deployed when extra Wi-Fi coverage or capacity is needed.",
            type: "Definition",
          },
          {
            title: "WAP Pros",
            content: [
              {
                title: "Wireless Connectivity",
                content:
                  "using WAP, users can connect devices wirelessly and without the need for cables.",
                type: "InLineDefinition",
              },
              {
                title: "Expanded Coverage",
                content:
                  "users can connect to the network wirelessly from various locations within the coverage area.",
                type: "InLineDefinition",
              },
            ],
            type: "List",
          },
          {
            title: "WAP Cons",
            content: [
              {
                title: "Range Limitations",
                content:
                  "due to limited range, wireless access points can create dead spots or areas with weak or no connectivity, hindering user mobility.",
                type: "InLineDefinition",
              },
              {
                title: "Network Congestion",
                content:
                  "when data traffic overwhelms the network's capacity, wireless access points experience congestion, leading to decreased performance for all connected devices.",
                type: "InLineDefinition",
              },
            ],
            type: "List",
          },
        ],
      },
      {
        title: "Active Directory Roles",
        content: [
          {
            title: "Active Directory Domain Services (ADDS)",
            content:
              "is a core component of Microsoft's Active Directory, acting as a centralized system for managing users, computers, and other resources within a network.",
            type: "Definition",
          },
          {
            title: "ADDS Detailed Breakdown",
            content: [
              {
                title: "Centralized Management",
                content:
                  "AD DS provides a single point for managing users, computers, and other network resources, simplifying administration.",
                type: "InLineDefinition",
              },
              {
                title: "Identity and Access Management",
                content:
                  "It authenticates users and controls their access to network resources, ensuring only authorized individuals can access specific data and applications.",
                type: "InLineDefinition",
              },
              {
                title: "Hierarchical Structure",
                content:
                  "AD DS organizes resources into a logical structure (domains, organizational units, etc.) for easier management and scalability.",
                type: "InLineDefinition",
              },
              {
                title: "Security Features",
                content:
                  "It enforces security policies, including password policies and access controls, to protect the network from unauthorized access and malicious activity.",
                type: "InLineDefinition",
              },
              {
                title: "Single Sign-On (SSO)",
                content:
                  "AD DS can facilitate SSO, allowing users to accesss multiple resources with a single login.",
                type: "InLineDefinition",
              },
              {
                title: "Scalability",
                content:
                  "AD DS is designed to scale with the needs of the organization, supporting large networks with many users and devices.",
                type: "InLineDefinition",
              },
            ],
            type: "List",
          },
          {
            title: "Domain Name System (DNS)",
            content:
              "acts as the internet's phonebook. It translates human-readable domain names (like google.com) into machine-readable IP addresses (like 172.217.160.142), allowing devices to locate and connect to each other online.",
            type: "Definition",
          },
          {
            title: "DNS Detailed Explanation",
            content: [
              {
                title: "Human-Friendly Names",
                content:
                  "We use domain names (e.g., example.com) because they are easy to remember and use.",
                type: "InLineDefinition",
              },
              {
                title: "Machine-Readable Addresses",
                content:
                  "Computers use IP addresses to identify and communicate with each other.",
                type: "InLineDefinition",
              },
              {
                title: "DNS Servers",
                content:
                  "DNS servers are specialized computers that store the mapping between domain names and IP addresses.",
                type: "InLineDefinition",
              },
              {
                title: "The Process",
                content:
                  "When you type a website address in your browser, your computer sends a request to a DNS server to find the corresponding IP address. The DNS server then provides the IP address, allowing your browser to connect to the correct server and retrieve the website's content.",
                type: "InLineDefinition",
              },
              {
                title: "Importance",
                content:
                  "Without DNS, we would have to remember and use long strings of numbers (IP addresses) to access websites, which would be extremely cumbersome.",
                type: "InLineDefinition",
              },
            ],
            type: "List",
          },
          {
            title: "Dynamic Host Configuration Protocol (DHCP)",
            content:
              "is a network server that automatically assigns IP addresses and other network configuration parameters to devices on a network. It dynamically provides these settings, allowing devices to connect to the network and communicate with other devices and networks.",
            type: "Definition",
          },
          {
            title: "DHCP Detailed Explanation",
            content: [
              {
                title: "Dynamic IP Address Assignment",
                content:
                  "DHCP servers maintain a pool of available IP addresses and lease them out to devices that request one. This eliminates the need for manual configuration of IP addresses on each device.",
                type: "InLineDefinition",
              },
              {
                title: "Network Configuration Parameters",
                content:
                  "Besides IP Addresses, DHCP servers also provide other essential network information, such as subnet mask, default gateway, and dns server address.",
                type: "InLineDefinition",
              },
              {
                title: "DHCP Lease",
                content:
                  "The IP address and configuration parameters are assigned for a specific duration, known as a lease. When the lease expires, the devices may request a renewal from the DHCP server.",
                type: "InLineDefinition",
              },
              {
                title: "Client-Server Model",
                content:
                  "DHCP operates on a client-server model. Clients (devices) request configuration information, and the DHCP server responds with the necessary details.",
                type: "InLineDefinition",
              },
            ],
            type: "List",
          },
          {
            title: "Benefits of DHCP",
            content: [
              {
                title: "Simplified network management",
                content:
                  "Reduces the administrative burden of manually configuring IP addresses.",
                type: "InLineDefinition",
              },
              {
                title: "Reduced errors",
                content: "Minimizes the risk of IP address conflicts.",
                type: "InLineDefinition",
              },
              {
                title: "Flexibility and scalability",
                content: "Easily accommodates new devices joining the network.",
                type: "InLineDefinition",
              },
              {
                title: "Guest network support",
                content:
                  "Commonly used in public Wi-Fi networks to provide temporary IP addresses to visitors.",
                type: "InLineDefinition",
              },
            ],
            type: "List",
          },
          {
            title: "Other Essential Network Information",
            content: [
              {
                title: "Subnet mask",
                content:
                  "Defines the network and host portions of an IP address.",
                type: "InLineDefinition",
              },
              {
                title: "Default gateway",
                content: "The router used to access other networks.",
                type: "InLineDefinition",
              },
              {
                title: "DNS server address",
                content: "Used to translate domain names into IP addresses.",
                type: "InLineDefinition",
              },
            ],
            type: "List",
          },
        ],
      },
    ],
  },
  {
    name: "Integrative Programming and Technologies",
    code: "CTINPRGL",
    lessons: [
      {
        title: "INTRODUCTION TO INTEGRATIVE PROGRAMMING",
        content: [
          {
            title: "Integrative Programming",
            content:
              "refers to the practice of combining multiple programming languages, frameworks, libraries, or tools within a single software project to leverage the strengths of each.",
            type: "Definition",
          },
          {
            title: "Key Concepts of Integrative Programming",
            content: [
              {
                title: "Multi-Language Development",
                content:
                  "Utilizing different programming languages within the same project to take advantage of the specific strengths of each.",
                type: "InLineDefinition",
              },
              {
                title: "Cross-Platform Integration",
                content:
                  "Developing applications that work across multiple platforms (web, mobile, desktop) by integrating different technologies.",
                type: "InLineDefinition",
              },
              {
                title: "API Integration",
                content:
                  "Connecting different systems or services through Application Programming Interfaces (APIs) to enable communication between them. This allows developers to integrate external services, such as payment gateways, social media, or data services, into their applications",
                type: "InLineDefinition",
              },
              {
                title: "Framework and Library Integration",
                content:
                  "Combining different frameworks or libraries within a single project to build more feature-rich and efficient applications.",
                type: "InLineDefinition",
              },
              {
                title: "Microservices Architecture",
                content:
                  "Developing software applications as a collection of loosely coupled services, each responsible for a specific function. This approach allows developers to use different technologies for each microservice, optimizing performance and scalability.",
                type: "InLineDefinition",
              },
              {
                title: "Data Integration",
                content:
                  "Combining data from multiple sources or databases to provide a unified view or to perform complex data analytics. This may involve integrating SQL and NoSQL databases or combining on-premises and cloud-based data stores.",
                type: "InLineDefinition",
              },
              {
                title: "Middleware and Orchestration",
                content:
                  "Using middleware to connect different applications, services, or components within a system, and orchestrating their interactions to ensure seamless operation. Middleware often handles tasks such as message passing, data transformation, and process coordination",
                type: "InLineDefinition",
              },
            ],
            type: "List",
          },
          {
            title:
              "Importance of Integrative Programming in Software Development",
            content: [
              {
                title: "Enhanced Functionality",
                content:
                  "Integrative programming allows different software components to work together seamlessly, creating systems that offer more comprehensive and powerful features.",
                type: "InLineDefinition",
              },
              {
                title: "Improved User Experience",
                content:
                  "When different systems and components are integrated effectively, users experience smoother and more intuitive interactions.",
                type: "InLineDefinition",
              },
              {
                title: "Increased Efficiency",
                content:
                  "Integration helps streamline workflows and processes by enabling automated data exchange and communication between systems.",
                type: "InLineDefinition",
              },
              {
                title: "Scalability and Flexibility",
                content:
                  "Loosely coupled systems, a key aspect of integrative programming, are easier to scale and modify.",
                type: "InLineDefinition",
              },
              {
                title: "Cost-Effectiveness",
                content:
                  "By integrating existing systems and components, organizations can leverage their current investments rather than building new solutions from scratch.",
                type: "InLineDefinition",
              },
              {
                title: "Better Data Management",
                content:
                  "Integrative programming facilitates better data management by ensuring that data flows smoothly between different systems.",
                type: "InLineDefinition",
              },
              {
                title: "Collaboration and Teamwork",
                content:
                  "Integration encourages collaboration among different development teams, each working on different components or services.",
                type: "InLineDefinition",
              },
              {
                title: "Future-Proofing",
                content:
                  "As technology evolves, integrative programming allows systems to adapt more easily to new technologies and standards. This ensures that applications remain relevant and functional over time.",
                type: "InLineDefinition",
              },
            ],
            type: "List",
          },
          {
            title: "Frameworks and Libraries",
            content:
              "essential tools in software development that help developers build applications more efficiently by providing pre-written code, structures, and functionalities.",
            type: "Definition",
          },
          {
            title: "Frameworks",
            content:
              "a collection of pre-defined classes, functions, and rules that provides a structure and a foundation for building software applications. Frameworks typically dictate the architecture of an application and enforce certain coding patterns and best practices.",
            type: "Definition",
          },
          {
            title: "Libraries",
            content:
              "a collection of pre-written code that developers can call upon to perform common tasks. Unlike frameworks, libraries don't dictate the overall structure of the application but rather offer specific functionalities that can be used within a project.",
            type: "Definition",
          },
          {
            title: "Benefits of Using Frameworks and Libraries",
            content: [
              {
                title: "Efficiency",
                content:
                  "They provide reusable code, reducing the amount of time and effort needed to write common functionalities from scratch.",
                type: "InLineDefinition",
              },
              {
                title: "Consistency",
                content:
                  "Frameworks enforce a consistent structure and coding style, making the codebase easier to understand and maintain.",
                type: "InLineDefinition",
              },
              {
                title: "Scalability",
                content:
                  "Both frameworks and libraries offer tools and patterns that help in building scalable applications",
                type: "InLineDefinition",
              },
              {
                title: "Community Support",
                content:
                  "Popular frameworks and libraries have large communities, offering extensive documentation, tutorials, and support.",
                type: "InLineDefinition",
              },
            ],
            type: "List",
          },
          {
            title: "Choosing the Right Framework and Library",
            content: [
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
            ],
            type: "List",
          },
          {
            title: "Front-End Development",
            content:
              "focuses on the visual aspects of a website or application—the part that users see and interact with. This includes everything from the layout and design to the interactive elements and user experience.",
            type: "Definition",
          },
          {
            title: "Back-End Development",
            content:
              "deals with the server side of a website or application. It focuses on how the site works, including database interactions, server logic, and application performance.",
            type: "Definition",
          },
          {
            title: "Full-Stack Development",
            content:
              "is proficient in both front-end and back-end development. They have the skills to build a complete web application from start to finish, handling everything from the user interface to the server-side logic and database management.",
            type: "Definition",
          },
        ],
      },
      {
        title: "INTRODUCTION TO REACT JS",
        content: [
          {
            title: "React",
            content:
              "a widely-used JavaScript library for building dynamic, interactive user interfaces, particularly for single-page applications (SPAs). It was created by Facebook in 2013 and has since become one of the most popular tools in web development.",
            type: "Definition",
          },
          {
            title: "Key Concepts",
            content: [
              {
                title: "Components",
                content:
                  "the fundamental units of any React application, encapsulating both the structure and behavior of parts of the user interface. A React component is a self-contained unit that manages its own content, presentation, and behavior.",
                type: "InLineDefinition",
              },
              {
                title: "JavaScript XML (JSX)",
                content:
                  "a syntax extension for JavaScript that lets you write HTML-like markup inside a JavaScript file. Although there are other ways to write components, most React developers prefer the conciseness of JSX, and most codebases use it.",
                type: "InLineDefinition",
              },
              {
                title: "Virtual DOM",
                content:
                  "core concept in React that plays a crucial role in its performance and efficiency. It's a lightweight, in memory representation of the real DOM (Document Object Model) elements in a web application.",
                type: "InLineDefinition",
              },
              {
                title: "Unidirectional Data Flow",
                content:
                  "data in a React application flows in one direction—from parent components to child components. This flow is managed through props (short for properties) and ensures that the data lifecycle is predictable and easier to debug.",
                type: "InLineDefinition",
              },
            ],
            type: "List",
          },
          {
            title: "Key Points",
            content: [
              {
                title: "Props are Read-Only",
                content:
                  "Child components cannot modify props received from their parent. This prevents accidental data mutations.",
                type: "InLineDefinition",
              },
              {
                title: "State Management",
                content:
                  "State is typically managed in parent components. Child components can request state updates through callbacks.",
                type: "InLineDefinition",
              },
              {
                title: "Predictability",
                content:
                  "The unidirectional flow makes it easier to understand how data changes affect the UI.",
                type: "InLineDefinition",
              },
              {
                title: "Debugging",
                content:
                  "Issues are often easier to isolate because data flows in a clear and predictable manner.",
                type: "InLineDefinition",
              },
            ],
            type: "List",
          },
          {
            title: "The Rules of JSX",
            content: [
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
            ],
            type: "List",
          },
        ],
      },
    ],
  },
  {
    name: "Systems Integration and Architecture",
    code: "CTSYSINL",
    lessons: [
      {
        title: "Introduction",
        content: [
          {
            title: "Information",
            content:
              "a complex concept that encompasses various aspects of knowledge, meaning, organization, and relevance.",
            type: "Definition",
          },
          {
            title: "System",
            content:
              "set of interconnected components, elements, or parts that work together to achieve a common goal or function.",
            type: "Definition",
          },
          {
            title: "Information System (IS)",
            content:
              "a set of interconnected components and processes that collect, store, process, and disseminate information to support an organization's operations, management, and decision-making.",
            type: "Definition",
          },
          {
            title: "Components of an Information System",
            content: [
              {
                title: "Hardware",
                content: "computers, networks, peripherals",
                type: "InLineDefinition",
              },
              {
                title: "Software",
                content: "operating systems, applications, utilities",
                type: "InLineDefinition",
              },
              {
                title: "Data",
                content: "types, formats, storage, and retrieval",
                type: "InLineDefinition",
              },
              {
                title: "People",
                content: "users, developers, administrators",
                type: "InLineDefinition",
              },
              {
                title: "Procedures",
                content: "business process, workflow",
                type: "InLineDefinition",
              },
            ],
            type: "List",
          },
          {
            title: "Information Systems (IS) Types",
            content: [
              {
                title: "Transaction Processing Systems (TPS)",
                content:
                  "Handle routine transactions, such as sales, inventory management, and payroll processing.",
                type: "InLineDefinition",
              },
              {
                title: "Management Information Systems (MIS)",
                content:
                  "Provide managers with relevant information to support decision-making.",
                type: "InLineDefinition",
              },
              {
                title: "Decision Support Systems (DSS)",
                content:
                  "Assist decision-makers in making informed decisions by analyzing data and providing recommendations.",
                type: "InLineDefinition",
              },
              {
                title: "Knowledge Management Systems (KMS)",
                content: "Manage and share knowledge within an organization.",
                type: "InLineDefinition",
              },
              {
                title: "Enterprise Resource Planning Systems (ERP)",
                content:
                  "Integrate various business functions, such as finance, human resources, and supply chain management.",
                type: "InLineDefinition",
              },
              {
                title: "Customer Relationship Management Systems (CRM)",
                content: "Manage customer interactions and relationships.",
                type: "InLineDefinition",
              },
              {
                title: "Supply Chain Management Systems (SCM)",
                content:
                  "Manage the flow of goods, services, and information from raw materials to end customers.",
                type: "InLineDefinition",
              },
            ],
            type: "List",
          },
          {
            title: "Other Systems related to IT",
            content: [
              {
                title: "Internet of Things (IoT) Systems",
                content:
                  "These systems connect devices and sensors to collect data and automate processes.",
                type: "InLineDefinition",
              },
              {
                title: "Telephony Systems",
                content:
                  "These systems manage phone calls, voice messages, and other communication protocols.",
                type: "InLineDefinition",
              },
              {
                title: "Virtual Private Networks (VPNs)",
                content:
                  "These systems provide secure and private access to networks over the internet.",
                type: "InLineDefinition",
              },
              {
                title: "Content Management Systems (CMS)",
                content:
                  "These systems manage content creation, editing, and publishing for websites and other digital platforms.",
                type: "InLineDefinition",
              },
              {
                title: "Geographic Information System (GIS)",
                content:
                  "These systems capture, analyze, and display geospatial data.",
                type: "InLineDefinition",
              },
              {
                title: "Business Intelligence Systems",
                content:
                  "These systems analyze data to gain insights and make informed business decisions.",
                type: "InLineDefinition",
              },
            ],
            type: "List",
          },
          {
            title: "System Integration",
            content:
              "the connection of data, applications, APIs, and devices across your IT organization to be more efficient, productive, and agile. It is the process by which multiple individual subsystems or sub-components are combined into one all-encompassing larger system thereby allowing the subsystems to function together.",
            type: "Definition",
          },
          {
            title: "System Architecture",
            content:
              "the conceptual model that defines the structure, behavior, and more views of a system. It can consist of system components and the sub-systems developed, that will work together to implement the overall system.",
            type: "Definition",
          },
          {
            title: "Types of system integration",
            content: [
              {
                title: "Internal integrations",
                content:
                  "a company connects its internal systems to streamline specific workflows",
                type: "InLineDefinition",
              },
              {
                title: "Customer-facing integrations:",
                content:
                  "a company connects its product with customers' applications to help clients get more value from their solution",
                type: "InLineDefinition",
              },
              {
                title: "Business-to-business (B2B) integration",
                content:
                  "a company connects its ERP system with business partners' to streamline transactions",
                type: "InLineDefinition",
              },
              {
                title: "Enterprise service bus (i.e., horizontal integration)",
                content:
                  "systems connect to a “bus”, or a bus-like infrastructure, that facilitates communication between the various systems",
                type: "InLineDefinition",
              },
            ],
            type: "List",
          },
          {
            title: "Category of System Integration",
            content: [
              {
                title: "Enterprise Application Integration (EAI)",
                content:
                  "the process of integrating different applications within a single enterprise.",
                type: "InLineDefinition",
              },
              {
                title: "Data Integration (DI)",
                content:
                  "the process of integrating different data sources into a single system. This can include data from databases, spreadsheets, and text files.",
                type: "InLineDefinition",
              },
              {
                title: "Application Integration",
                content:
                  "connects different software applications to enable them to interact and share information.",
                type: "InLineDefinition",
              },
              {
                title: "Business Process Integration",
                content:
                  "aligns and optimizes business processes across different systems and departments.",
                type: "InLineDefinition",
              },
            ],
            type: "List",
          },
          //Next topic here
        ],
      },
      {
        title: "Modeling Requirements",
        content: [
          {
            title: "Modeling Requirements",
            content:
              "The process of capturing, analyzing, and documenting what a system should do using models or diagrams.",
            type: "Definition",
          },
          {
            title: "Importance of Modeling Requirements",
            content: [
              {
                title: "Ensures clear understanding between stakeholders",
                content: "",
                type: "",
              },
              { title: "Reduces project risk", content: "", type: "" },
              {
                title: "Serves as a blueprint for developers",
                content: "",
                type: "",
              },
              {
                title: "Facilitates better testing and validation",
                content: "",
                type: "",
              },
              {
                title: "Enhances maintenance and future development",
                content: "",
                type: "",
              },
            ],
            type: "List",
          },
          {
            title: "Types of Requirements",
            content: [
              {
                title: "Functional Requirements",
                content:
                  "What the system should do (e.g., login, generate report)",
                type: "InLineDefinition",
              },
              {
                title: "Non-Functional Requirements",
                content:
                  "How the system should behave (e.g., performance, security)",
                type: "InLineDefinition",
              },
              {
                title: "Business Requirements",
                content: "Why the system is needed (business goals)",
                type: "InLineDefinition",
              },
              {
                title: "User Requirements",
                content: "What the user expects (user stories, personas)",
                type: "InLineDefinition",
              },
            ],
            type: "List",
          },
          {
            title: "Techniques for Modeling Requirements",
            content: [
              {
                title: "Textual",
                content: "Use Cases, User Stories",
                type: "InLineDefinition",
              },
              {
                title: "Graphical",
                content: "Data Flow Diagrams (DFD), UML, ERD",
                type: "InLineDefinition",
              },
              {
                title: "Prototypes",
                content: "Wireframes, Mockups",
                type: "InLineDefinition",
              },
            ],
            type: "List",
          },
          {
            title: "Steps in Identifying Modeling Requirements",
            content: [
              {
                title: "Requirements Gathering",
                content: "Interviews, surveys, observation",
                type: "InLineDefinition",
              },
              {
                title: "Analysis and Clarification",
                content: "Identify conflicts, prioritize",
                type: "InLineDefinition",
              },
              {
                title: "Modeling",
                content: "Convert into use cases, diagrams",
                type: "InLineDefinition",
              },
              {
                title: "Validation",
                content: "Review with stakeholders",
                type: "InLineDefinition",
              },
              {
                title: "Documentation",
                content: "Store in SRS (Software Requirements Specification)",
                type: "InLineDefinition",
              },
            ],
            type: "List",
          },
        ],
      },
      {
        title: "Software Architecture",
        content: [
          {
            title: "Software architecture",
            content:
              "refers to the high-level structures of a software system and the discipline of creating such structures and systems. It involves making decisions about the organization of a software system, the components and their relationships, the design principles guiding the system's behavior",
            type: "Definition",
          },
          {
            title: "Factor of Software Architecture",
            content: [
              {
                title: "Design",
                content:
                  "A plan or specification for the construction of an object or system or for the implementation of an activity or process or the result of that plan or specification in the of a prototype, product or process",
                type: "InLineDefinition",
              },
              {
                title: "Quality Attributes",
                content:
                  "It includes correctness, reliability, adequacy, learnability, maintainability readability, testability, efficiency, portability",
                type: "InLineDefinition",
              },
              {
                title: "IT Environment",
                content:
                  "An integrated collection of technology component that serves the needs of its users and owner of the resulting system",
                type: "InLineDefinition",
              },
              {
                title: "Human Dynamic",
                content:
                  "A team-oriented activity involving engineers, developers, business analysts, domain experts, data/infrastructure architects, project manager etc.",
                type: "InLineDefinition",
              },
              {
                title: "Business Strategy",
                content:
                  "It refers to the actions and decisions that a company takes to reach its business goals and be competitive in its industry",
                type: "InLineDefinition",
              },
            ],
            type: "List",
          },
          {
            title: "Software Design",
            content:
              "provides a design plan that describes the elements of a system, how they fit, and work together to fulfill the requirement of the system.",
            type: "Definition",
          },
          {
            title: "Software Architect",
            content:
              "provides a solution that the technical team can create and design for the entire application.",
            type: "Definition",
          },

          {
            title: "Software Architect Expertise",
            content: [
              {
                title: "Design Expertise",
                content:
                  "Expert in  software design, including diverse methods and approaches such as object-oriented design, event-driven design, etc.",
                type: "InLineDefinition",
              },
              {
                title: "Domain Expertise",
                content:
                  "Expert on the system being developed and plan for software evolution.",
                type: "InLineDefinition",
              },
              {
                title: "Technology Expertise",
                content:
                  "Expert on available technologies that helps in the implementation of the system.",
                type: "InLineDefinition",
              },
              {
                title: "Methodological Expertise",
                content:
                  "Expert on software development methodologies that may be adopted during SDLC (Software Development Life Cycle).",
                type: "InLineDefinition",
              },
            ],
            type: "List",
          },
          {
            title: "Common Quality Attributes",
            content: [
              {
                title: "Design Qualities",
                content: "dontMatter",
                type: "dontMatter",
              },
              {
                title: "Run-time Qualities",
                content: "dontMatter",
                type: "dontMatter",
              },
              {
                title: "System Qualities",
                content: "dontMatter",
                type: "dontMatter",
              },
              {
                title: "User Qualities",
                content: "dontMatter",
                type: "dontMatter",
              },
              {
                title: "Architecture Quality",
                content: "dontMatter",
                type: "dontMatter",
              },
              {
                title: "Non-runtime Quality",
                content: "dontMatter",
                type: "dontMatter",
              },
              {
                title: "Business quality attributes",
                content: "dontMatter",
                type: "dontMatter",
              },
            ],
            type: "List",
          },
          {
            title: "Design Qualities",
            content: [
              {
                title: "Conceptual Integrity",
                content:
                  "Defines the consistency and coherence of the overall design. This includes the way components or modules are designed.",
                type: "InLineDefinition",
              },
              {
                title: "Maintainability",
                content:
                  "Ability of the system to undergo changes with a degree of ease.",
                type: "InLineDefinition",
              },
              {
                title: "Reusability",
                content:
                  "Defines the capability for components and subsystems to be suitable for use in other applications.",
                type: "InLineDefinition",
              },
            ],
            type: "List",
          },
          {
            title: "Run-time Qualities",
            content: [
              {
                title: "Interoperability",
                content:
                  "Ability of a system or different systems to operate successfully by communicating and exchanging information with other external systems written and run by external parties.",
                type: "InLineDefinition",
              },
              {
                title: "Manageability",
                content:
                  "Defines how easy it is for system administrators to manage the application.",
                type: "InLineDefinition",
              },
              {
                title: "Reliability",
                content: "Ability of a system to remain operational over time.",
                type: "InLineDefinition",
              },
              {
                title: "Scalability",
                content:
                  "Ability of a system to either handle the load increase without impacting the performance of the system or the ability to be readily enlarged.",
                type: "InLineDefinition",
              },
              {
                title: "Security",
                content:
                  "Capability of a system to prevent malicious or accidental actions outside of the designed usages.",
                type: "InLineDefinition",
              },
              {
                title: "Performance",
                content:
                  "Indication of the responsiveness of a system to execute any action within a given time interval.",
                type: "InLineDefinition",
              },
              {
                title: "Availability",
                content:
                  "Defines the proportion of time that the system is functional and working. It can be measured as a percentage of the total system downtime over a predefined period.",
                type: "InLineDefinition",
              },
            ],
            type: "List",
          },
          {
            title: "System Qualities",
            content: [
              {
                title: "Supportability",
                content:
                  "Ability of the system to provide information helpful for identifying and resolving issues when it fails to work correctly.",
                type: "InLineDefinition",
              },
              {
                title: "Testability",
                content:
                  "Measure of how easy it is to create test criteria for the system and its components.",
                type: "InLineDefinition",
              },
            ],
            type: "List",
          },
          {
            title: "User Qualities",
            content: [
              {
                title: "Usability",
                content:
                  "Defines how well the application meets the requirements of the user and consumer by being intuitive.",
                type: "InLineDefinition",
              },
            ],
            type: "List",
          },
          {
            title: "Architecture Quality",
            content: [
              {
                title: "Correctness",
                content:
                  "Accountability for satisfying all the requirements of the system.",
                type: "InLineDefinition",
              },
            ],
            type: "List",
          },
          {
            title: "Non-runtime Quality",
            content: [
              {
                title: "Portability",
                content:
                  "Ability of the system to run under different computing environment.",
                type: "InLineDefinition",
              },
              {
                title: "Integrality",
                content:
                  "Ability to make separately developed components of the system work correctly together.",
                type: "InLineDefinition",
              },
              {
                title: "Modifiability",
                content:
                  "Ease with which each software system can accommodate changes to its software.",
                type: "InLineDefinition",
              },
            ],
            type: "List",
          },
          {
            title: "Business quality attributes",
            content: [
              {
                title: "Cost and schedule",
                content:
                  "Cost of the system with respect to time to market, expected project lifetime & utilization of legacy.",
                type: "InLineDefinition",
              },
              {
                title: "Marketability",
                content: "Use of system with respect to market competition.",
                type: "InLineDefinition",
              },
            ],
            type: "List",
          },
          {
            title: "Architectural Style",
            content:
              "also called as architectural pattern, is a set of principles which shapes an application. It defines an abstract framework for a family of system in terms of the pattern of structural organization",
            type: "Definition",
          },
          {
            title: "Common Architectural Design",
            content: [
              {
                title: "Communication",
                content: "dontMatter",
                type: "dontMatter",
              },
              {
                title: "Deployment",
                content: "dontMatter",
                type: "dontMatter",
              },
              { title: "Domain", content: "dontMatter", type: "dontMatter" },
              { title: "Structure", content: "dontMatter", type: "dontMatter" },
            ],
            type: "List",
          },
          {
            title: "Communication",
            content: [
              {
                title: "Message bus",
                content:
                  "Prescribes use of a software system that can receive and send messages using one or more communication channels.",
                type: "InLineDefinition",
              },
              {
                title: "Service-Oriented Architecture (SOA)",
                content:
                  "Defines the applications that expose and consume functionality as a service using contracts and messages.",
                type: "InLineDefinition",
              },
            ],
            type: "List",
          },
          {
            title: " Deployment",
            content: [
              {
                title: "Client/server",
                content:
                  "Separate the system into two applications, where the client makes requests to the server.",
                type: "InLineDefinition",
              },
              {
                title: " 3-tier or N-tier",
                content:
                  "Separates the functionality into separate segments with each segment being a tier located on a physically separate computer.",
                type: "InLineDefinition",
              },
            ],
            type: "List",
          },
          {
            title: "Domain",
            content: [
              {
                title: "Domain Driven Design",
                content:
                  "Focused on modeling a business domain and defining business objects based on entities within the business domain.",
                type: "InLineDefinition",
              },
            ],
            type: "List",
          },
          {
            title: "Structure",
            content: [
              {
                title: "Component Based",
                content:
                  "Breakdown the application design into reusable functional or logical components that expose well-defined communication interfaces.",
                type: "InLineDefinition",
              },
              {
                title: "Layered",
                content:
                  "Divide the concerns of the application into stacked groups (layers).",
                type: "InLineDefinition",
              },
              {
                title: "Object oriented",
                content:
                  "Based on the division of responsibilities of an application or system into objects, each containing the data and the behavior relevant to the object.",
                type: "InLineDefinition",
              },
            ],
            type: "List",
          },
          {
            title: "Types of Architecture",
            content: [
              {
                title: "Business architecture",
                content:
                  "Defines the strategy of business, governance, organization, and key business processes within an enterprise and focuses on the analysis and design of business processes.",
                type: "InLineDefinition",
              },
              {
                title: "Application (software) architecture",
                content:
                  "Serves as the blueprint for individual application systems, their interactions, and their relationships to the business processes of the organization.",
                type: "InLineDefinition",
              },
              {
                title: " Information architecture",
                content:
                  "Defines the logical and physical data assets and data management resources.",
                type: "InLineDefinition",
              },
              {
                title: "Information technology (IT) architecture",
                content:
                  "Defines the hardware and software building blocks that make up the overall information system of the organization.",
                type: "InLineDefinition",
              },
            ],
            type: "List",
          },
        ],
      },
      {
        title: "Systems Integration Technologies",
        content: [
          {
            title: "Importance in Business Operations",
            content: [
              {
                title: "Efficiency",
                content:
                  "Systems integration streamlines processes by connecting various systems, reducing the need for manual intervention and data duplication.",
                type: "InLineDefinition",
              },
              {
                title: "Improved Data Accuracy",
                content:
                  "By integrating systems, data consistency and accuracy are enhanced as information flows seamlessly between systems.",
                type: "InLineDefinition",
              },
              {
                title: "Enhanced Decision Making",
                content:
                  "Integrated systems provide a holistic view of the organization, enabling better-informed decision-making.",
                type: "InLineDefinition",
              },
              {
                title: "Cost Savings",
                content:
                  "Eliminating redundant systems and processes can result in cost savings and increased productivity.",
                type: "InLineDefinition",
              },
              {
                title: "Competitive Advantage",
                content:
                  "Organizations with well-integrated systems are often more agile, responsive, and better positioned to adapt to changing market conditions.",
                type: "InLineDefinition",
              },
            ],
            type: "List",
          },
          {
            title: "Data Integration Architecture",
            content: [
              {
                title: "Source",
                content: "where the data originates",
                type: "InLineDefinition",
              },
              {
                title: "Lake",
                content: "stores raw, unprocessed data.",
                type: "InLineDefinition",
              },
              {
                title: "Warehouse",
                content: "organizes and processes data for analysis.",
                type: "InLineDefinition",
              },
              {
                title: "Mart",
                content: "subject-specific or team-specific datasets",
                type: "InLineDefinition",
              },
            ],
            type: "List",
          },
          {
            title: "Types of Systems Integration",
            content: [
              {
                title: "Data Integration",
                content:
                  "involves combining data from different sources and formats to provide a unified view.",
                type: "InLineDefinition",
              },
              {
                title: "Application Integration",
                content:
                  "focuses on connecting different software applications and systems to enable seamless data flow and functionality.",
                type: "InLineDefinition",
              },
              {
                title: "Process Integration",
                content:
                  "involves linking together various business processes and workflows to create a cohesive and streamlined operational environment.",
                type: "InLineDefinition",
              },
              {
                title: "Enterprise Service Bus (ESB)",
                content:
                  "a software architecture model used for integrating different applications by establishing communication between them.",
                type: "InLineDefinition",
              },
            ],
            type: "List",
          },
          {
            title: "Future Trends in Systems Integration",
            content: [
              {
                title: "AI and Machine Learning Integration",
                content: "abc",
                type: "InLineDefinition",
              },
              {
                title: "Cloud-Based Integration",
                content: "dontMatter",
                type: "dontMatter",
              },
              {
                title: "IoT Integration",
                content: "dontMatter",
                type: "dontMatter",
              },
              {
                title: "Blockchain Integration",
                content: "dontMatter",
                type: "dontMatter",
              },
            ],
            type: "List",
          },
        ],
      },
      {
        title: "Architecture Models",
        content: [
          {
            title: "Ways to define Software Architecture",
            content: [
              {
                title: "UML (Unified Modeling Language)",
                content: "dontMatter",
                type: "dontMatter",
              },
              {
                title: "Architecture View Mode (4+1 view model)",
                content: "dontMatter",
                type: "dontMatter",
              },
              {
                title: "ADL (Architecture Description Language)",
                content: "dontMatter",
                type: "dontMatter",
              },
            ],
            type: "List",
          },
          {
            title: "Unified Modeling Language (UML)",
            content:
              "standardized modeling language used in software engineering for visualizing, specifying, constructing, and documenting the artifacts of software systems. It is a general-purpose modeling language that provides a standard way to visualize the design of a system.",
            type: "Definition",
          },
          {
            title: "UML diagrams can be categorized into two main types",
            content: [
              {
                title: "structural diagrams",
                content: "dontMatter",
                type: "dontMatter",
              },
              {
                title: "behavioral diagrams",
                content: "dontMatter",
                type: "dontMatter",
              },
            ],
            type: "List",
          },
          {
            title: "Structural Diagrams",
            content:
              "used to depict the static structure of a system. They represent the components that make up a system and the relationships between these components.",
            type: "Definition",
          },
          {
            title: "Common Types of Structural Diagrams",
            content: [
              {
                title: "Class Diagram",
                content:
                  "Represents the structure of a system by showing the classes of the system, their attributes, methods, and relationships between the classes.",
                type: "InLineDefinition",
              },
              {
                title: "Object Diagram",
                content:
                  "Shows a snapshot of the instances of classes in a system at a specific point in time, along with their relationships.",
                type: "InLineDefinition",
              },
              {
                title: "Component Diagram",
                content:
                  "Illustrates the components of a system and their dependencies. It shows how the physical components are wired together.",
                type: "InLineDefinition",
              },
              {
                title: "Composite Structure Diagram",
                content:
                  "Describes the internal structure of a class and how its parts are interconnected, including the collaboration between part.",
                type: "InLineDefinition",
              },
              {
                title: "Package Diagram",
                content:
                  "Organizes the elements of a system into related groups (packages) to show the dependencies between different packages.",
                type: "InLineDefinition",
              },
              {
                title: "Profile Diagram",
                content:
                  "Defines custom stereotypes, tagged values, and constraints for UML elements, allowing for extension and customization of UML.",
                type: "InLineDefinition",
              },
              {
                title: "Deployment Diagram",
                content:
                  "Models the physical deployment of artifacts on nodes (hardware) in a distributed system, showing how software and hardware components are connected.",
                type: "InLineDefinition",
              },
            ],
            type: "List",
          },
          {
            title: "Behavioral Diagrams",
            content:
              "used to capture the dynamic aspects of a system. They illustrate how the components of a system interact with each other and how the system's behavior changes over time.",
            type: "Definition",
          },
          {
            title: "Behavioral Diagrams",
            content: [
              {
                title: "Use Case Diagram",
                content:
                  "Describes the interactions between the system and its users (actors) to represent the functional requirements of the system.",
                type: "InLineDefinition",
              },
              {
                title: "Activity Diagram",
                content:
                  "Represents the flow of control within a system, showing the sequence of activities or actions that need to be performed.",
                type: "InLineDefinition",
              },
              {
                title: "State Machine Diagram",
                content:
                  "Models the behavior of an object or system in different states and transitions between these states based on events.",
                type: "InLineDefinition",
              },
              {
                title: "Sequence Diagram",
                content:
                  "Illustrates how objects interact in a particular sequence, showing the messages exchanged between objects over time.",
                type: "InLineDefinition",
              },
              {
                title: "Communication Diagram",
                content:
                  "Similar to a sequence diagram but focuses on the interactions between objects to achieve a specific collaboration.",
                type: "InLineDefinition",
              },
              {
                title: "Interaction Overview Diagram",
                content:
                  "Provides an overview of the flow of control between interactions, combining sequence and activity diagrams.",
                type: "InLineDefinition",
              },
              {
                title: "Timing Diagram",
                content:
                  "Shows how objects collaborate over time, focusing on the timing constraints between messages.",
                type: "InLineDefinition",
              },
            ],
            type: "List",
          },
          {
            title: "Architecture View Mode (4+1 view model)",
            content:
              "a software architecture description method based on the use of multiple, concurrent views. It was proposed by Philippe Kruchten to describe the architecture of software-intensive systems. This model provides different perspectives on the system, each catering to the needs of different stakeholders involved in the software development process.",
            type: "Definition",
          },
          {
            title: "Architecture View Mode (4+1 view model)",
            content: [
              {
                title: "Logical View",
                content:
                  "focuses on the functionality that the system provides to end-users. It describes the high-level design of the system in terms of components, modules, and their interactions.",
                type: "InLineDefinition",
              },
              {
                title: "Development View",
                content:
                  "concerned with the software development process. It describes the software modules, components, and their relationships from a developer's perspective.",
                type: "InLineDefinition",
              },
              {
                title: "Process View",
                content:
                  "focuses on the dynamic aspects of the system, describing the system's runtime behavior. It includes information about concurrency, distribution, performance, and scalability.",
                type: "InLineDefinition",
              },
              {
                title: "Physical View",
                content:
                  "describes the mapping of software components onto the hardware infrastructure. It includes details about the deployment of software components on physical nodes.",
                type: "InLineDefinition",
              },
              {
                title: "Scenarios (or Use Cases)",
                content:
                  "the set of scenarios or use cases that describe sequences of interactions between users and the system. These scenarios provide concrete examples of how the system functions in different situations.",
                type: "InLineDefinition",
              },
            ],
            type: "List",
          },
          {
            title: "ADL (Architecture Description Language)",
            content:
              "a specialized language used to formally describe the architecture of a software-intensive system.",
            type: "Definition",
          },
          {
            title:
              "Key features and purposes of Architecture Description Languages",
            content: [
              {
                title: "Formalism",
                content:
                  "provide a formal structure for describing the architecture of a system, enabling precise and unambiguous representations.",
                type: "InLineDefinition",
              },
              {
                title: "Abstraction",
                content:
                  "allow architects to abstract away from implementation details and focus on the high-level structure and behavior of the system.",
                type: "InLineDefinition",
              },
              {
                title: "Analysis",
                content:
                  "support analysis activities such as performance evaluation, reliability assessment, and other architectural quality attributes.",
                type: "InLineDefinition",
              },
              {
                title: "Tool Support",
                content: "dontMatter",
                type: "dontMatter",
              },
              {
                title: "Standardization",
                content: "dontMatter",
                type: "dontMatter",
              },
            ],
            type: "List",
          },
          {
            title: "Data Flow Architecture",
            content:
              "a design pattern used in software engineering to describe the flow of data within a system.",
            type: "Definition",
          },
          {
            title: "3 types of execution sequences",
            content: [
              {
                title: "Batch sequential",
                content: "dontMatter",
                type: "dontMatter",
              },
              {
                title: "Pipe and filter or non - sequential pipeline mode",
                content: "dontMatter",
                type: "dontMatter",
              },
              {
                title: "Process control",
                content: "dontMatter",
                type: "dontMatter",
              },
            ],
            type: "List",
          },
          {
            title: "Batch sequential",
            content:
              "a classical data processing model, in which a data transformation subsystems can initiate process only after its previous subsystems completely through",
            type: "Definition",
          },
          {
            title: "The Pipe and Filter architecture",
            content:
              "a design pattern used in software engineering to process data sequentially through a series of processing steps or filters. Each filter performs a specific operation on the data and passes the result to the next filter through a communication channel called a pipe.",
            type: "Definition",
          },
          {
            title: "The Pipe and Filter architecture",
            content: [
              {
                title: "Filters",
                content: "components responsible for processing data.",
                type: "InLineDefinition",
              },
              {
                title: "Pipes",
                content: "serve as communication channels between filters.",
                type: "InLineDefinition",
              },
            ],
            type: "List",
          },
          {
            title: "Key components of the Pipe and Filter architecture",
            content: [
              {
                title: "Data Flow",
                content:
                  "flows through the system from one filter to another via pipes.",
                type: "InLineDefinition",
              },
              {
                title: "Modularity and Reusability",
                content:
                  "promotes modularity by breaking down processing tasks into smaller, independent filters.",
                type: "InLineDefinition",
              },
              {
                title: "Scalability",
                content:
                  "The modular nature of the Pipe and Filter architecture makes it scalable.",
                type: "InLineDefinition",
              },
            ],
            type: "List",
          },
          {
            title: "Process Control Architecture",
            content:
              "typically refers to the design and structure of systems that manage and control industrial processes.",
            type: "Definition",
          },
          {
            title: "Component-based architecture",
            content:
              "a design paradigm in software engineering where complex systems are decomposed into smaller, reusable pieces called components.",
            type: "Definition",
          },
          {
            title: "Component",
            content:
              "modular, portable, replaceable, and reusables set of well-defined functionality that encapsulates its implementation and exporting its as a higher-level interface.",
            type: "Definition",
          },
          {
            title: "Views of a Component",
            content: [
              {
                title: "Object-Oriented View",
                content:
                  "a component is seen as a set of one or more cooperating classes.",
                type: "InLineDefinition",
              },
              {
                title: "Conventional View",
                content:
                  "considers a component as a functional element or module of a program.",
                type: "InLineDefinition",
              },
              {
                title: "Process-Related View",
                content:
                  "the focus is on building the system from existing components maintained in a library, rather than creating each component from scratch.",
                type: "InLineDefinition",
              },
            ],
            type: "List",
          },
          //Next topic here
        ],
      },
      //Next lesson here
    ],
  },
  {
    name: "Multimedia Systems",
    code: "CTMLSYSL",
    lessons: [
      {
        title: "Principles of Design",
        content: [
          {
            title: "What is Multimedia",
            content:
              "Multimedia is a system of relaying information or entertainment that includes many different forms of communication. Multimedia might include video, audio clips, still photographs and a lot more.",
            type: "Definition",
          },
          {
            title: "4 Categories of Media",
            content: [
              {
                title: "Print Media",
                content:
                  "refers to printed materials, such as books and magazines, that contain words and images.",
                type: "InLineDefinition",
              },
              {
                title: "Broadcast Media",
                content:
                  "includes information transmitted through one of several mass communication channels, such as television and radio.",
                type: "InLineDefinition",
              },
              {
                title: "Internet Media",
                content:
                  "is content distributed online and can include emails and online publications.",
                type: "InLineDefinition",
              },
              {
                title: "Out-of-home media, or OOH",
                content:
                  "is media that reaches people when they are outside of their homes, like billboards.",
                type: "InLineDefinition",
              },
            ],
            type: "List",
          },
          {
            title: "Principles of Design",
            content:
              "Building blocks of visual artist to make a successful composition.",
            type: "Definition",
          },
          {
            title: "Principles of Design",
            content: [
              {
                title: "EMPHASIS",
                content:
                  "the focal point of a design and the order of importance of each element within a design.",
                type: "InLineDefinition",
              },
              {
                title: "BALANCE & ALIGNMENT",
                content:
                  "Every design composition has its particular weight. Color, size, and texture are all factors that account for weight. You can't stuff all your heavy elements into a specific area of your design.",
                type: "InLineDefinition",
              },
              {
                title: "CONTRAST",
                content:
                  'When someone says a design "pops," they refer to contrast. The contrast principle of design generates space and distinction between elements. To operate effectively together and be viewable, your backdrop should be different from the color of your details.',
                type: "InLineDefinition",
              },
              {
                title: "REPETITION",
                content:
                  "a principle of design that is vital for more than just one printed product. Beautiful graphic patterns are a big part of today's packaging design.",
                type: "InLineDefinition",
              },
              {
                title: "PROPORTION",
                content:
                  "The visual size and weight of parts in composition and their correlation are referred to as proportion. It's generally more effective to approach your design part by part rather than a full thing.",
                type: "InLineDefinition",
              },
              {
                title: "MOVEMENT",
                content:
                  "controlling the elements in a composition so that the eye is led to move from one to the next and the information is properly communicated to your audience. Movement creates the story or the narrative of your work.",
                type: "InLineDefinition",
              },
              {
                title: "NEGATIVE SPACE",
                content:
                  "The only one that expressly deals with what you don't contribute is white space (or negative space). The empty space around the parts in your composition is known as white space. White space isn't just empty; it helps organize and create hierarchy. White space around an element has always been related to aesthetics in viewers. It informs our eyes that objects in one area are separated from objects in other areas.",
                type: "InLineDefinition",
              },
            ],
            type: "List",
          },
        ],
      },
      {
        title: "Introduction to Multimedia",
        content: [
          {
            title: "Multimedia",
            content:
              "any combination of graphics, text, drawings, videos, animation, and audio",
            type: "Definition",
          },
          {
            title: "Advantages of Multimedia",
            content: [
              {
                title: "Creativity",
                content: "",
                type: "",
              },
              {
                title: "Variety",
                content: "",
                type: "",
              },
              {
                title: "Cost - effective",
                content: "",
                type: "",
              },
              {
                title: "Realistic approach",
                content: "",
                type: "",
              },
              {
                title: "Wide variety of support",
                content: "",
                type: "",
              },
              {
                title: "Trendy",
                content: "",
                type: "",
              },
            ],
            type: "List",
          },
          {
            title: "Disadvantages of Multimedia",
            content: [
              {
                title: "Information overload",
                content: "",
                type: "",
              },
              {
                title: "It takes time to compile",
                content: "",
                type: "",
              },
              {
                title: "It can be expensive",
                content: "",
                type: "",
              },
              {
                title: "Too much makes it unpractical",
                content: "",
                type: "",
              },
            ],
            type: "List",
          },
          {
            title: "Characteristics of Multimedia System",
            content: [
              {
                title: "Multimedia systems must be computer controlled.",
                content: "",
                type: "",
              },
              {
                title: "Multimedia systems are integrated.",
                content: "",
                type: "",
              },
              {
                title:
                  "The information they handle must be represented digitally.",
                content: "",
                type: "",
              },
              {
                title:
                  "Interface to the final presentation of media is usually interactive.",
                content: "",
                type: "",
              },
            ],
            type: "List",
          },
          {
            title: "Basic Elements of Multimedia",
            content: [
              {
                title: "Text",
                content:
                  "characters that are used to create words, sentences, and paragraphs.",
                type: "InLineDefinition",
              },
              {
                title: "Graphics",
                content:
                  "A digital representation of non-text information, such as a drawing, chart, or photograph.",
                type: "InLineDefinition",
              },
              {
                title: "Animation",
                content:
                  "Flipping through a series of still images. It is a series of graphics that create an illusion of motion.",
                type: "InLineDefinition",
              },
              {
                title: "Video",
                content:
                  "Photographic images that are played back at speeds of 15 to 30 frames a second and provides the appearance of full motion.",
                type: "InLineDefinition",
              },
              {
                title: "Audio",
                content: "Music, Speech, or any other sound.",
                type: "InLineDefinition",
              },
            ],
            type: "List",
          },
          {
            title: "Two Types of Multimedia Presentation",
            content: [
              {
                title: "Linear Presentation",
                content:
                  "progresses often without any navigational control for the viewer such as a cinema presentation.",
                type: "InLineDefinition",
              },
              {
                title: "Non-linear Interactive",
                content:
                  "uses interactivity to control progress as with a video game or self-paced computer based training. Hypermedia is an example of non-linear content.",
                type: "InLineDefinition",
              },
            ],
            type: "List",
          },
          {
            title: "Hypertext",
            content:
              "It contains other text documents as elements which are interconnected and accessible through Hyperlinks.",
            type: "Definition",
          },
          {
            title: "Hypermedia",
            content:
              "It contains text, audio, video and graphics as elements which are linked and accessible through Hyperlinks.",
            type: "Definition",
          },
        ],
      },
      {
        title: "Digital Texts",
        content: [
          {
            title: "Digital Text",
            content: [
              {
                title: "A. Unformatted Text",
                content: "dontMatter",
                type: "dontMatter",
              },
              {
                title: "B. Formatted",
                content: "dontMatter",
                type: "dontMatter",
              },
              { title: "ccc", content: "dontMatter", type: "dontMatter" },
            ],
            type: "List",
          },
          {
            title: "Font",
            content:
              "Arial, 20 pt. Arial, 12 pt., Italic Impact, 24 pt., Bold Impact, 12 pt.",
            type: "Definition",
          },
          {
            title: "Typeface",
            content: "Times New Roman Helvetica Courier",
            type: "Definition",
          },
          {
            title: "Typefaces",
            content:
              "SCRIPT Boldface Italic Underline POINT Used for measuring font size.",
            type: "Definition",
          },
          {
            title: "Font",
            content:
              "set of characters of a particular typeface, style and size.",
            type: "Definition",
          },
          {
            title: "Monospaced Fonts",
            content: "Courier is a monospaced font.",
            type: "Definition",
          },
          {
            title: "Proportional Fonts",
            content: "Palatino is a proportional font.",
            type: "Definition",
          },
          {
            title: "Case",
            content:
              "Lowercase this is all in lowercase. Uppercase THIS IS ALL IN UPPERCASE.",
            type: "Definition",
          },
          {
            title: "Weight",
            content:
              "Lighter Weight This is in Lighter Weight. Heavier Weight This is in Heavier Weight.",
            type: "Definition",
          },
          {
            title: "Kerning",
            content: "Process of adjusting the spacing between letters",
            type: "Definition",
          },
          {
            title: "Tracking",
            content: "Spacing in between all of the characters.",
            type: "Definition",
          },
          {
            title: "Condensed Text",
            content: "Refers to NARROWING the width of the characters.",
            type: "Definition",
          },
          {
            title: "Extended Text",
            content: "Refers to WIDENING the width of the characters.",
            type: "Definition",
          },
          {
            title: "Leading",
            content: "Spacing in between the lines of the text.",
            type: "Definition",
          },
          {
            title: "Alignment & Justification",
            content: "Left Aligned Right Aligned Center Aligned Justified",
            type: "Definition",
          },
          {
            title: "Categories of Typefaces",
            content: [
              {
                title: "Serif",
                content: "W",
                type: "",
              },
              {
                title: "Sans Serif",
                content: "W",
                type: "",
              },
              {
                title: "Script Typeface",
                content: "",
                type: "",
              },
              {
                title: "Symbol Typeface",
                content: "",
                type: "",
              },
            ],
            type: "List",
          },
          {
            title: "HTML",
            content:
              "HYPERTEXT MARK-UP LANGUAGE Are electronic documents displayed in the World Wide Web Tim Berners – Lee (1990) Has hyperlinks HTML + CSS",
            type: "Definition",
          },
          {
            title: "Guidelines for the Use of Text",
            content: [
              {
                title: "Be Selective",
                content: "",
                type: "",
              },
              {
                title: "Be Brief",
                content: "",
                type: "",
              },
              {
                title: "Make texts readable",
                content: "",
                type: "",
              },
              {
                title: "Be consistent",
                content: "",
                type: "",
              },
            ],
            type: "List",
          },
          {
            title: "Guidelines for the Use of Text",
            content: [
              {
                title: "Be careful",
                content: "",
                type: "",
              },
              {
                title: "Be respectful",
                content: "",
                type: "",
              },
              {
                title: "Combine text w/ other media",
                content: "",
                type: "",
              },
              {
                title: "Make text interactive",
                content: "",
                type: "",
              },
            ],
            type: "List",
          },
        ],
      },
      {
        title: "Acquiring Images Using Digital Still Camera",
        content: [
          {
            title: "Camera",
            content:
              "It is a light-proof device that has a lens through which light enters to form an image on sensitive media, such as film or an electronic image sensor.",
            type: "Definition",
          },
          {
            title: "Common Types of Camera",
            content: [
              {
                title: "Analog Camera",
                content:
                  "These type of camera capture images on film, using a chemical process to record light.",
                type: "InLineDefinition",
              },
              {
                title: "Digital Camera",
                content:
                  "This type of camera capture images electronically using sensors and store them digitally.",
                type: "InLineDefinition",
              },
            ],
            type: "List",
          },
          {
            title: "Analog Cameras",
            content: "",
            type: "Definition",
          },
          {
            title: "Dark Room",
            content:
              "Darkroom photography is a traditional process for developing photographic prints, involving several steps in a light-safe environment. It begins with setting up the darkroom, preparing chemicals, and exposing light-sensitive paper through a negative using an enlarger. The exposed paper is then developed, stopped, fixed, washed, and dried.",
            type: "Definition",
          },
          {
            title: "Types of Digital Camera",
            content: [
              {
                title: "Digital Single-Lens Reflex (DSLR)",
                content: "",
                type: "",
              },
              {
                title: "Compact Digital Camera",
                content: "",
                type: "",
              },
              {
                title: "Camera Phones",
                content: "",
                type: "",
              },
            ],
            type: "List",
          },
          {
            title: "Digital Single-Lens Reflex (DSLR)",
            content:
              "It allows photographers to manually control many of the elements that affect the outcome of an image. is a digital camera that uses mirrors to direct light from the lens to the viewfinder, which is a hole on the back of the camera that you look through to see what you are taking a picture of.",
            type: "Definition",
          },
          {
            title: "Digital Single-Lens Reflex (DSLR)",
            content: "",
            type: "Definition",
          },
          {
            title: "Compact Digital Camera",
            content:
              "It is a point-and-shoot camera designed primarily for simple operation. It uses autofocus, automatic systems for setting the exposure options, and have flash units built in",
            type: "Definition",
          },
          {
            title: "Compact Digital Camera",
            content: "",
            type: "Definition",
          },
          {
            title: "Camera Phones",
            content: "It is a cellular phone incorporating a digital camera.",
            type: "Definition",
          },
          {
            title: "Basics of Digital Photography",
            content:
              "The ability of your camera to properly capture an image largely depends on the amount of light that it sees or the amount of time it will be allowed to see, to produce a correct exposure.",
            type: "Definition",
          },
          {
            title: "Basics of Digital Photography",
            content:
              "Elements that affect exposure: 1. Shutter Speed - it is the amount of time light allowed to let in. 2. Aperture - it is the measurement of a camera’s opening. 3. ISO - it refers to the rating of how sensitive your camera sensor is to light.",
            type: "Definition",
          },
          {
            title: "Shutter Speed",
            content:
              "It is the amount of time that the shutter is open. The longer the shutter is open, the more light gets through and this can give your picture a different effect (Motion Blur) Too much light will make your picture look washed out and too little light will make your picture too dark.",
            type: "Definition",
          },
          {
            title: "Motion Blur",
            content: "",
            type: "Definition",
          },
          {
            title: "Over Exposed Image",
            content: "",
            type: "Definition",
          },
          {
            title: "Aperture",
            content:
              "Also called f-stop, it determines how wide the opening of the lens is when the picture is taken. It controls how much light can enter the camera.",
            type: "Definition",
          },
          {
            title: "Aperture",
            content:
              "It is measured in f-stops. Ex. of f-stops are f/2.8. f/4. f/5.6, f/8, f/11, and f/16. f-stop numbers are the reverse of the aperture size. Hence, as f-stop number increases, the aperture size decreases.",
            type: "Definition",
          },
          {
            title: "Aperture",
            content: "",
            type: "Definition",
          },
          {
            title: "Depth of Field (DOF)",
            content:
              "is the degree or level of focus in you image for different subjects at varying distances from the camera. Large DOF means most of the subjects in your image will be on focus. Small DOF means that only a portion of your image will be sharp and the rest will be out of focus.",
            type: "Definition",
          },
          {
            title: "ISO",
            content:
              "Another factor that affects exposure is the sensitivity of your sensor to light. more sensitive sensor noise / grainy image sharper and more detailed image HIGHER ISO = = LOWER ISO",
            type: "Definition",
          },
          {
            title: "ISO",
            content: "",
            type: "Definition",
          },
          {
            title: "DIGITAL CAMERA MODES",
            content: "",
            type: "Definition",
          },
          {
            title: "Landscape / Scenery",
            content:
              "For taking pictures of landscapes and other sceneries. Camera focuses at infinity and uses large DOF.",
            type: "Definition",
          },
          {
            title: "Portrait",
            content:
              "It is used or photographing people. It uses a large aperture to make subject clearer and the background softer.",
            type: "Definition",
          },
          {
            title: "Night Landscape",
            content:
              "Uses slower shutter speed for shooting low light scenes; but may cause image to blur.",
            type: "Definition",
          },
          {
            title: "ISO / High Sensitivity",
            content:
              "Use this if you need to shoot in low light conditions without a flash. Increased ISO causes noise to image.",
            type: "Definition",
          },
          {
            title: "Macro/ Close-up",
            content:
              "Use this to photograph small objects, such as flowers, drops, or insects. Uses small f-stop (large aperture).",
            type: "Definition",
          },
          {
            title: "Sports/ Action",
            content:
              "Allows you to shoot moving objects. It uses faster shutter speed to “freeze” moving objects.",
            type: "Definition",
          },
          {
            title: "Sunset",
            content:
              "Makes color during sunsets more vivid – brilliant oranges and red.",
            type: "Definition",
          },
          {
            title: "Tips for Beginners",
            content:
              "1. Get close. Keep camera steady and shoot many frames as possible. 2. Create Blur on purpose. 3. Use natural light. 4. Never use zoom. 5. Do not over process you photos.",
            type: "Definition",
          },
          {
            title: "THANKYou",
            content: "",
            type: "Definition",
          },
        ],
      },
      {
        title: "Rule of Thirds and Viewpoints",
        content: [
          {
            title: "Photography Composition Basics",
            content: "Rule of Thirds",
            type: "Definition",
          },
          {
            title: "Rule of Thirds",
            content:
              "Good Photographers place the subject not in the center of the photograph, but in one of the intersecting points of the nine-square grid.",
            type: "Definition",
          },
          {
            title: "Rule of Thirds",
            content:
              "The rule is to position the most important elements in your scene along these lines, or at the points where they intersect of thirds says that you should.",
            type: "Definition",
          },
          {
            title: "Rule of Thirds",
            content:
              "Implementing rules of thirds will balance and add interests to your photo.",
            type: "Definition",
          },
          {
            title: "Rule of Thirds",
            content:
              "When photographing moving subjects, position them as normal, but also pay attention to the direction they're moving. Leave more space in front of them to show where they're going.",
            type: "Definition",
          },
          {
            title: "Rule of Thirds",
            content:
              "For landscape shots, place the horizon in one of the horizontal lines and try to include an interesting object for the focal point in the scene.",
            type: "Definition",
          },
          {
            title: "Rule of Thirds",
            content:
              "Position people off to one side of the frame. It stops the photo from looking like a mugshot. Place the persons eye to one of the intersections.",
            type: "Definition",
          },
          {
            title: "Rule of Thirds",
            content:
              "Select the most important element in the photo, and try to position them at or near the lines and intersections of the grid. It doesn’t to be perfectly lined up as long as they're close.",
            type: "Definition",
          },
          {
            title: "Rule of Thirds",
            content:
              "Cropping photos to apply Rule of Thirds: this allows you to reposition the important subjects in your image, moving them into more pleasing positions.",
            type: "Definition",
          },
          {
            title: "Leading Lines",
            content:
              "Use line to focus the viewers eye on the main subject. Lines can be straight, diagonal, curvy, zigzag, radial etc. and each can be used to enhance our photo's composition.",
            type: "Definition",
          },
          {
            title: "Leading Lines",
            content: "",
            type: "Definition",
          },
          {
            title: "Leading Lines",
            content: "",
            type: "Definition",
          },
          {
            title: "Symmetry & Patterns",
            content:
              "Patterns are both natural and man-made. Another great way to use them is to break the symmetry or pattern in some way, introducing tension and a focal point to the scene.",
            type: "Definition",
          },
          {
            title: "Symmetry & Patterns",
            content: "",
            type: "Definition",
          },
          {
            title: "Symmetry & Patterns",
            content: "",
            type: "Definition",
          },
          {
            title: "Symmetry & Patterns",
            content: "",
            type: "Definition",
          },
          {
            title: "Symmetry & Patterns",
            content: "",
            type: "Definition",
          },
          {
            title: "Depth of Field",
            content:
              "You can create depth in a photo by including objects in the foreground, middle ground and background.",
            type: "Definition",
          },
          {
            title: "Depth of Field",
            content: "",
            type: "Definition",
          },
          {
            title: "Depth of Field",
            content: "",
            type: "Definition",
          },
          {
            title: "Depth of Field",
            content: "",
            type: "Definition",
          },
          {
            title: "Framing",
            content:
              "Place natural objects such as trees, archways and holes around the edge of the composition to isolate the main subject from the outside world. The result is a more focused image, which draws your eye naturally to the main point of interest.",
            type: "Definition",
          },
          {
            title: "Framing",
            content: "",
            type: "Definition",
          },
          {
            title: "View Points Bird’s Eye View",
            content: "The viewer is looking down on the subject.",
            type: "Definition",
          },
          {
            title: "Bird’s Eye View",
            content: "",
            type: "Definition",
          },
          {
            title: "Bird’s Eye View",
            content: "",
            type: "Definition",
          },
          {
            title: "View Points Worm’s Eye View",
            content: "The viewer is looking up at the subject.",
            type: "Definition",
          },
          {
            title: "Worm’s Eye View",
            content: "",
            type: "Definition",
          },
          {
            title: "Tips for Beginners",
            content:
              "1. Get close. Keep camera steady and shoot many frames as possible. 2. Create Blur on purpose. 3. Use natural light. 4. Never use zoom. 5. Do not over process you photos.",
            type: "Definition",
          },
        ],
      },
      {
        title: "Digital Images",
        content: [
          {
            title: "Objectives",
            content:
              "Identify and differentiate between common digital image file formats (e.g., JPEG, PNG, GIF), including their uses, advantages, and limitations. Learn the principles of image compression, both lossless and lossy, and their impact on image quality and file size. Gain proficiency in altering and optimizing image properties such as resolution, color depth, and transparency to suit various digital applications.",
            type: "Definition",
          },
          {
            title: "Digital Images",
            content:
              "are electronic snapshots taken of a scene or scanned from documents, such as photographs, manuscripts, printed texts, and artwork. The digital image is sampled and mapped as a grid of dots or picture elements (pixels). Each pixel is assigned a tonal value (black, white, shades of gray or color), which is represented in binary code (zeros and ones). The binary digits (bits) for each pixel are stored in a sequence by a computer and often reduced to a mathematical representation (compressed). The bits are then interpreted and read by the computer to produce an analog version for display or printing",
            type: "Definition",
          },
          {
            title: "Digital Image File Formats",
            content: "",
            type: "Definition",
          },
          {
            title: "Still Images are generated in two ways",
            content: [
              {
                title: "Bitmap (raster images)",
                content:
                  "are composed of pixels. are used for photo-realistic images and for complex drawings requiring fine detail. is a simple matrix of the tiny dots that form an image and are displayed on a computer screen or printed. Pixel art generally uses under 256 colors, while modern screens can display up to 4.2 billion distinct colors. .GIF, .BMP, .JPEG, .JPG, and .PCX.",
                type: "InLineDefinition",
              },
              {
                title: "Vector-drawn",
                content:
                  "are used for lines, boxes, circles, polygons, and other graphic shapes that can be mathematically expressed in angles, coordinates, and distances. Vector graphics can be scaled without losing the image quality. Vector art saves the image as lines with coordinates of their starting and ending points. Consists of lines, points, polygons, and curves. Adobe Illustrator and CorelDraw ends in .AI and .EPS",
                type: "InLineDefinition",
              },
            ],
            type: "List",
          },
          {
            title: "Note",
            content:
              "The appearance of both types of images depends on the display resolution and capabilities of your computer’s graphics hardware and monitor.",
            type: "Definition",
          },
          {
            title: "Image Types",
            content: [
              {
                title: "JPEG (Joint Photographic Experts Group)",
                content:
                  "Is the most popular among the image formats used on the web. JPEG discards most of the information to keep the image file size small; which means some degree of quality is also lost. The colors are paler and the lines are less defined and the picture is noisier.",
                type: "InLineDefinition",
              },
              {
                title: "GIF (Graphics Interchange Format)",
                content:
                  "is limited to the 8-bit palette with only 256 colors. GIF compresses images in two ways: first, by reducing the number of colors in rich color images, thus reducing the number of bits per pixel. Second, GIF replaces multiple occurring patterns into one.",
                type: "InLineDefinition",
              },
              {
                title: "BMP (Windows Bitmap)",
                content:
                  "The Windows Bitmap or BMP files are image files within the Microsoft Windows operating system. These files are large and uncompressed, but the images are rich in color, high in quality, simple and compatible in all Windows OS and programs. BMP files are also called raster or paint images. BMP files are made of millions and millions of dots called ‘pixels’, with different colors and arrangements to come up with an image or pattern. It might be an 8-bit, 16-bit or 24-bit image.",
                type: "InLineDefinition",
              },
              {
                title: "TIFF (Tagged Image File Format)",
                content:
                  "The TIFF image format is easy to use with software that deals with page layout, publishing and photo manipulation via fax, scanning, word processing, etc. It is capable of recording halftone image data with different pixel intensities, thus is the perfect format for graphic storage, processing and printing.",
                type: "InLineDefinition",
              },
              {
                title: "PNG (Portable Network Graphics)",
                content:
                  "It is an image format specifically designed for the web. PNG is saved with 256 colors maximum but it saves the color information more efficiently. It also supports an 8 bit transparency. PNG can support 24 bit RGB color images, grayscale images, both with and without alpha channels. RGB cannot support CMYK color spaces, and is not designed for print graphics.",
                type: "InLineDefinition",
              },
            ],
            type: "List",
          },
          {
            title: "JPEG Pros",
            content:
              "24-bit color, with up to 16 million colors Rich colors, great for photographs that needs fine attention to color detail Most used and most widely accepted image format Best for web graphics Compatible in most OS (Mac, PC, Linux)",
            type: "Definition",
          },
          {
            title: "JPEG Cons",
            content:
              "They tend to discard a lot of data Cannot be animated Does not support transparency",
            type: "Definition",
          },
          {
            title: "GIF Pros",
            content:
              "Can support transparency Can do small animation effects They contain the same amount of quality as the original, except of course it now only has 256 colors Great for images with limited colors, or with flat regions of color Best for web graphics",
            type: "Definition",
          },
          {
            title: "GIF Cons",
            content: "Only supports 256 colors",
            type: "Definition",
          },
          {
            title: "BMP Pros",
            content:
              "Works well with most Windows programs and OS, you can use it as a Windows wallpaper",
            type: "Definition",
          },
          {
            title: "BMP Cons",
            content:
              "Does not scale or compress well Very huge image files making it not web friendly No real advantage over other image formats",
            type: "Definition",
          },
          {
            title: "TIFF Pros",
            content:
              "Very flexible format, it supports several types of compression like JPEG, LZW, ZIP or no compression at all. High quality image format, all color and data information are stored TIFF format can now be saved with layers Best for Print format",
            type: "Definition",
          },
          {
            title: "TIFF Cons",
            content:
              "Very large file size–long transfer time, huge disk space consumption, and slow loading time.",
            type: "Definition",
          },
          {
            title: "PNG Pros",
            content:
              "It does not lose quality and detail after image compression Supports transparency better than GIF Best for web graphics",
            type: "Definition",
          },
          {
            title: "PNG Cons",
            content:
              "Not good for large images because they tend to generate a very large file, sometimes creating larger files than JPEG. It cannot be animated. Not all web browsers can support PNG.",
            type: "Definition",
          },
          {
            title: "Basic Color Modes",
            content:
              "The Color Mode or image mode determines how colors combine based on the number of channels in a color model. Different color modes result in different levels of color detail and file size.",
            type: "Definition",
          },
          {
            title: "Basic Color Modes",
            content: [
              {
                title: "RGB mode (millions of colors)",
                content:
                  "Red – Green – Blue is the color emitted from your computer monitor, gadgets and televisions.",
                type: "InLineDefinition",
              },
              {
                title: "CMYK mode (four-printed colors)",
                content:
                  "Cyan – Magenta – Yellow – Black The color mode used when making an image print.",
                type: "InLineDefinition",
              },
              {
                title: "Index mode (256 colors)",
                content: "",
                type: "",
              },
              {
                title: "Grayscale mode (256 grays)",
                content: "",
                type: "",
              },
              {
                title: "Bitmap mode (2 colors)",
                content: "",
                type: "",
              },
            ],
            type: "List",
          },
          {
            title: "Photo Editing Software",
            content:
              "a tool for modifying, generating, combining and optimizing digital photos and images in the computer.",
            type: "Definition",
          },
          {
            title: "Examples of Photo Editing Software",
            content: [
              {
                title: "CorelDraw",
                content: "",
                type: "",
              },
              {
                title: "PhotoScape",
                content: "",
                type: "",
              },
              {
                title: "Nik Collection",
                content: "",
                type: "",
              },
              {
                title: "Paint.net",
                content: "",
                type: "",
              },
              {
                title: "Adobe Lightroom",
                content: "",
                type: "",
              },
              {
                title: "Gimp",
                content: "",
                type: "",
              },
            ],
            type: "List",
          },
        ],
      },
    ],
  },
  //Next Course Here
];

export default CoursesList;
