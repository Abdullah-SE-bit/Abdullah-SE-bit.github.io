export interface DemoMedia {
  src: string;
  alt: string;
  type: "image" | "video";
}

export interface Project {
  id: string;
  title: string;
  context: string;
  problemStatement: string;
  solution: string;
  techStack: string[];
  demoMedia: DemoMedia | null;
  githubLink: string | null;
}

export const profile = {
  name: "Muhammad Abdullah Adnan",
  shortName: "Abdullah Adnan",
  role: "Software Engineering undergraduate",
  tagline: "Building full stack applications with AI integration",
  photo: { src: "/profile.png", width: 1122, height: 1402 },
  availability: "Open to opportunities",
  email: "chabdullah3506@gmail.com",
  github: "https://github.com/Abdullah-SE-bit",
  githubHandle: "Abdullah-SE-bit",
  linkedin: "https://www.linkedin.com/in/abdullah-adnan-660bb1350/",
  linkedinHandle: "abdullah-adnan",
} as const;

export const projects: Project[] = [
  {
    id: "ocean-route-navigation",
    title: "Ocean Route Navigation",
    context: "Maritime navigation system",
    problemStatement:
      "Optimal routing across a global port network requires evaluating real maritime routes against real-world cost and distance data.",
    solution:
      "Modelled the port network as a weighted graph and implemented BFS, Dijkstra, and A* for pathfinding. Queues simulate port docking sequences; linked lists represent multi-port voyage paths. A real-time SFML simulation renders vessels traversing computed routes across a world map built from a file-based database of actual global ports.",
    techStack: ["C++", "SFML", "DSA"],
    demoMedia: null,
    githubLink: "https://github.com/Abdullah-SE-bit",
  },
  {
    id: "bogo",
    title: "BOGO",
    context: "Public bus transport platform",
    problemStatement:
      "No digital transit guide existed for the bus network. Commuters depended on word-of-mouth and in-bus maps for route discovery.",
    solution:
      "Desktop navigation app on a strict five-layer architecture (UI, Controller, Service, Domain, Repository) following GRASP and GoF patterns, with JDBC and MS SQL for persistence. DSA-driven map construction and pathfinding modules serve real-time route and stop lookup. Role-based access separates Admins, who add, remove, and deactivate stops and manage drivers and routes, from Drivers, who view daily assigned routes and log operational issues. All activity is logged through the portal.",
    techStack: ["Java", "JavaFX", "MS SQL Server", "JDBC"],
    demoMedia: null,
    githubLink: "https://github.com/Abdullah-SE-bit",
  },
  {
    id: "sdr-mis",
    title: "SDR_MIS",
    context: "Disaster management information system",
    problemStatement:
      "Disaster response spans emergency reporting, resource logistics, rescue team deployment, hospital coordination, and financial tracking, across five distinct operational roles.",
    solution:
      "Full-stack MIS pairing a Spring Boot 3.2 REST API with a React 18 SPA. JWT stateless authentication enforces role-based access control across five roles via Spring Security and @PreAuthorize method-level authorization. A 13-table MS SQL schema uses database-level triggers for inventory and team-status automation, views for role-scoped data abstraction, and composite indexes for query performance. Approval-based workflows for resource allocation, team dispatch, and financial transactions enforce ACID properties with rollback support across 10+ REST controller modules documented via Swagger UI.",
    techStack: ["Spring Boot", "React", "MS SQL Server", "Spring Security", "JWT"],
    demoMedia: null,
    githubLink: "https://github.com/Abdullah-SE-bit",
  },
  {
    id: "flake",
    title: "FLAKE",
    context: "University student portal",
    problemStatement:
      "University workflows were split across multiple disconnected systems, leaving students dependent on several platforms for attendance, grades, registration, and timetables.",
    solution:
      "Unified portal consolidating attendance tracking, grade viewing, course registration, timetable management, and Google Classroom-style academic workflows behind one authenticated platform. Session-based authentication drives role-based access for Students, Teachers, and Admins, each with distinct capabilities: marking attendance, uploading materials, editing timetables, managing faculty records. A built-in mail system carries direct communication between students, teaching assistants, teachers, and admins, replacing fragmented external channels. Semester-based classroom enrollment and course registration are automated.",
    techStack: ["Python", "Flask", "SQLite", "JavaScript", "HTML/CSS"],
    demoMedia: null,
    githubLink: "https://github.com/Abdullah-SE-bit",
  },
];

export interface ExperienceEntry {
  period: string;
  title: string;
  organisation: string;
  detail: string;
}

/* Intentionally empty. No experience, leadership, or startup data exists in the
   source portfolio, and nothing here may be invented. Populate this array and
   render <Experience /> in app/page.tsx to switch the section on. */
export const experience: ExperienceEntry[] = [];

export const stack = [
  { label: "Languages", items: ["Java", "C++", "C", "C#", "Python", "JavaScript"] },
  {
    label: "Frameworks",
    items: ["Spring Boot", "React", ".NET", "Flask", "JavaFX", "SFML"],
  },
  { label: "Data & Tools", items: ["MS SQL Server", "SQLite", "Git", "GitHub"] },
  {
    label: "Architecture",
    items: [
      "Layered",
      "MVC",
      "MVVM",
      "Client-Server",
      "Repository",
      "GRASP",
      "GoF",
      "User Stories & Use Cases",
      "Sequence Diagrams",
      "System Sequence Diagrams",
    ],
  },
] as const;
