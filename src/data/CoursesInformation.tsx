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
      //Next lesson here
    ],
  },
  //Next Course Here
];

export default CoursesList;
