import type { IconName } from "./icons";

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
  liveLink: string | null;
}

export const profile = {
  name: "Muhammad Abdullah Adnan",
  shortName: "Abdullah Adnan",
  role: "Software Engineering undergraduate",
  tagline: "Building full stack applications with AI integration",
  photo: { src: "/profile.png", width: 1122, height: 1402 },
  cv: { src: "/CV.pdf", fileName: "Muhammad-Abdullah-Adnan-CV.pdf" },
  availability: "Open to opportunities",
  email: "chabdullah3506@gmail.com",
  github: "https://github.com/Abdullah-SE-bit",
  githubHandle: "Abdullah-SE-bit",
  linkedin: "https://www.linkedin.com/in/abdullah-adnan-660bb1350/",
  linkedinHandle: "abdullah-adnan",
} as const;

export const projects: Project[] = [
  {
    id: "cat-connect",
    title: "Cat Connect",
    context: "Cat welfare management platform",
    problemStatement:
      "Running a cat shelter spans the registry, intake and discharge, medical records, vet appointments, adoption, fostering, lost and found, donations, and messaging, across Super Admin, Shelter Admin, Vet, and Volunteer roles.",
    solution:
      "Django REST Framework API organised into 18 Django apps on PostgreSQL, with a React 19 and Vite single-page front end. JWT authentication through SimpleJWT with token blacklisting, and email verification gating login for every role except Super Admin. Celery workers and Celery Beat on Redis run scheduled jobs: vaccination and appointment reminders, closing expired donation campaigns, and a lost-and-found matching engine. The API is documented in OpenAPI through drf-spectacular, and maps are built with Leaflet.",
    techStack: ["Django", "Django REST Framework", "React", "PostgreSQL", "Celery", "Redis"],
    demoMedia: null,
    githubLink: "https://github.com/Abdullah-SE-bit/Cat_Connect",
    liveLink: null,
  },
  {
    id: "sabaq-ai",
    title: "Sabaq AI",
    context: "Team project, Bano Qabil AI Hackathon 2026",
    problemStatement:
      "Board exams are marked against one specific textbook, but general AI chatbots answer from a global corpus: often right in general, wrong for the exam, and occasionally invented. Students cannot tell an exam-correct answer from a plausible one, and get no signal about where they are weak.",
    solution:
      "Syllabus-grounded study companion for FBISE classes 9 to 12. Questions are embedded with Jina AI and matched by pgvector search in Supabase, filtered by board, class, and subject. A confidence guardrail refuses low-similarity questions without calling the LLM at all; otherwise Gemini answers only from the retrieved chunks, with citations validated server-side and shown as the chapter and page. Quizzes are graded server-side, per-chapter mastery is computed from quiz attempts, and a deterministic revision plan is rebuilt around the exam date on every load. Works in English, Urdu, and Roman Urdu, with Urdu voice input through Whisper on Groq. A weekly GitHub Actions crawler parses or OCRs FBISE papers and textbooks into the corpus.",
    techStack: ["Next.js", "TypeScript", "Supabase", "pgvector", "Gemini", "Jina AI"],
    demoMedia: null,
    githubLink: "https://github.com/TahaSohail-Goat/SabaqAI",
    liveLink: "https://sabaq-ai-three.vercel.app",
  },
  {
    id: "shelter-os",
    title: "Shelter OS",
    context: "Role-aware shelter management console",
    problemStatement:
      "Shelter management serves different jobs by role: a SaaS operator onboarding shelters, a shelter admin running intake and adoptions, an employee working assigned cases, an adopter browsing pets. Most admin templates give every role the same sidebar and hide the rest behind permission checks.",
    solution:
      "Navigation, dashboards, and available actions are built per role for Super Admin, Shelter Admin, Employee, and Customer, from a single navigation config. Covers the animal registry, intake, discharge, medical history, rescue and lost-and-found reports, adoption and foster, donations and finance, inventory, analytics, an audit log, threaded messaging, notifications, and an interactive shelter map. Front end only: every page runs on mock datasets with mock role-based sign-in, and there is no backend, database, or real authentication.",
    techStack: ["Next.js", "React", "Tailwind CSS", "Radix UI", "TanStack Table", "Leaflet"],
    demoMedia: null,
    githubLink: "https://github.com/Abdullah-SE-bit/shelter-os",
    liveLink: "https://shelter-os-seven.vercel.app",
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
    liveLink: null,
  },
];

export interface TimelineEntry {
  year: string;
  title: string;
  courses: string[];
}

export const education = {
  degree: "BS Software Engineering",
  institution: "FAST-NUCES",
  status: "Expected 2028",
  timeline: [
    {
      year: "2026",
      title: "Advanced Systems",
      courses: ["Artificial Intelligence", "Software Quality Assurance (QA)"],
    },
    {
      year: "2025",
      title: "Data & Architecture",
      courses: [
        "Data Structures & Algorithms (DSA)",
        "Database Systems",
        "Software Design",
        "Requirement Engineering",
      ],
    },
    {
      year: "2024",
      title: "Fundamentals",
      courses: [
        "Object-Oriented Programming (OOP)",
        "Programming Fundamentals",
        "Software Engineering Principles",
      ],
    },
  ] satisfies TimelineEntry[],
};

export const stack: { label: string; items: IconName[] }[] = [
  {
    label: "Languages",
    items: ["Python", "JavaScript", "HTML5", "CSS3"],
  },
  {
    label: "Frameworks",
    items: ["React", "Node.js", "Express", "Next.js", "Django", "Flask"],
  },
  {
    label: "Databases",
    items: ["MySQL", "SQL Server", "PostgreSQL", "Supabase", "SQLite"],
  },
  {
    label: "Tools",
    items: ["Git", "GitHub", "Docker", "Kubernetes"],
  },
];
