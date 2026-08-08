import type { PersonalInfo, EducationItem, SkillCategory, Project, Certification, TechnicalFocus } from '../types/portfolio';

export const personalInfo: PersonalInfo = {
  name: "KARISHMA SHAIK",
  title: "Computer Science & Engineering Student",
  roleSubtitle: "JAVA Full-Stack Developer",
  location: "Nandyal, Andhra Pradesh",
  email: "karishma681shaik@gmail.com",
  phone: "+91 9347840962",
  github: "https://github.com/karishma681shaik-star",
  linkedin: "https://www.linkedin.com/in/karishmashaik681",
  bio: "Computer Science and Engineering student with hands-on experience in full-stack development using JavaScript, React.js, Node.js, Express.js, and MongoDB. Skilled in building responsive interfaces, RESTful APIs, database-driven applications, and real-time features. Strong foundation in Data Structures and Algorithms, OOP, and problem solving, with a focus on developing practical software solutions.",
  careerObjective: "Computer Science and Engineering student with hands-on experience in full-stack development using JavaScript, React.js, Node.js, Express.js, and MongoDB. Skilled in building responsive interfaces, RESTful APIs, database-driven applications, and real-time features. Strong foundation in Data Structures and Algorithms, OOP, and problem solving, with a focus on developing practical software solutions."
};

export const educationList: EducationItem[] = [
  {
    id: "btech",
    institution: "Rajiv Gandhi University of Knowledge Technologies, RK Valley",
    degree: "B.Tech in Computer Science and Engineering",
    year: "Expected 2027",
    cgpa: "8.5",
    highlight: "Primary focus on Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, and Web Engineering."
  },
  {
    id: "puc",
    institution: "Rajiv Gandhi University of Knowledge Technologies, RK Valley",
    degree: "Pre-University Course",
    year: "2023",
    cgpa: "9.6",
    highlight: "Rigorous coursework in Physics, Chemistry, and Mathematics."
  },
  {
    id: "ssc",
    institution: "Ravindra Bala Academy High School",
    degree: "SSC",
    year: "2021",
    cgpa: "10.0",
    highlight: "Secondary School Certification with perfect academic record."
  }
];

export const skillCategories: SkillCategory[] = [
  {
    id: "programming",
    name: "Programming Languages",
    description: "Foundational programming languages used for application logic and structure.",
    skills: ["Java", "JavaScript", "HTML", "CSS"]
  },
  {
    id: "frontend",
    name: "Frontend Development",
    description: "Technologies for crafting responsive, interactive client user interfaces.",
    skills: ["React.js", "HTML5", "CSS3", "Responsive UI", "React Router"]
  },
  {
    id: "backend",
    name: "Backend Development",
    description: "Server-side logic, API development, and real-time communication modules.",
    skills: ["Node.js", "Express.js", "RESTful APIs", "Socket.io"]
  },
  {
    id: "databases",
    name: "Databases & Storage",
    description: "Relational, NoSQL, and browser storage solutions.",
    skills: ["MongoDB", "MySQL", "LocalStorage"]
  },
  {
    id: "core",
    name: "Core CS Concepts",
    description: "Fundamental Computer Science principles for sound software engineering.",
    skills: ["Data Structures and Algorithms", "OOP", "DBMS", "Computer Networks"]
  },
  {
    id: "tools",
    name: "Tools & Platforms",
    description: "Development environments, version control, and productivity tools.",
    skills: ["Git", "GitHub", "VS Code"]
  },
  {
    id: "soft",
    name: "Soft Skills",
    description: "Interpersonal and professional skills essential for collaborative development.",
    skills: ["Problem Solving", "Communication", "Teamwork", "Quick Learning"]
  }
];

export const projects: Project[] = [
  {
    id: "vibe-chat",
    title: "VIBE CHAT",
    subtitle: "Real-Time Chat Application",
    description: "Developed a real-time chat application using React.js, Node.js, Express.js, MongoDB, and Socket.io.",
    category: "Full-Stack Application",
    techBadges: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.io"],
    keyFeatures: [
      "Real-time messaging with instantaneous response",
      "WebSocket-based full-duplex communication via Socket.io",
      "Responsive and modern UI built with React.js",
      "REST APIs for user authentication and chat management",
      "User management and persistent chat operations"
    ],
    githubUrl: "https://github.com/karishma681shaik-star/Vibe-Chat.git",
    gradient: "from-blue-600/20 via-indigo-600/20 to-purple-600/20"
  },
  {
    id: "online-complaint-system",
    title: "ONLINE COMPLAINT SYSTEM",
    subtitle: "Complaint Management Platform",
    description: "Developed a full-stack complaint registration and tracking platform using modern web technologies.",
    category: "Full-Stack Application",
    techBadges: ["Node.js", "Express.js", "MongoDB", "REST APIs"],
    keyFeatures: [
      "Complaint registration and ticket logging system",
      "Real-time status tracking for submitted complaints",
      "Responsive user interface and administrator management interface",
      "RESTful APIs for complaint status management and workflow",
      "User management and structured data storage in MongoDB"
    ],
    githubUrl: "https://github.com/karishma681shaik-star/online-complaint-system",
    gradient: "from-emerald-600/20 via-teal-600/20 to-cyan-600/20"
  }
];

export const certifications: Certification[] = [
  {
    id: "nptel-ir",
    title: "NPTEL Elite Certification",
    issuer: "Introduction to Information Retrieval",
    score: "78%",
    description: "Developed a strong foundation in Information Retrieval, including document indexing, query processing, search models, and retrieval techniques.",
    verifyUrl: "https://drive.google.com/file/d/1wOMFaYVyp4ZP1l0fY_fGpsI4PgHIyuKV/view?usp=drivesdk",
    concepts: [
      "Boolean Retrieval",
      "Vector Space Model",
      "TF-IDF",
      "Document Ranking",
      "Retrieval Evaluation",
      "Search Systems",
      "Query Processing",
      "Document Indexing"
    ]
  },
  {
    id: "nptel-cloud",
    title: "NPTEL Certification",
    issuer: "Cloud Computing",
    description: "Built knowledge of cloud architecture, virtualization, distributed systems, and resource management.",
    verifyUrl: "https://drive.google.com/file/d/1e4kABI9znmTyJ6QoiyQQ89b1voq6XskF/view?usp=drivesdk",
    concepts: [
      "IaaS",
      "PaaS",
      "SaaS",
      "Cloud Architecture",
      "Virtualization",
      "Distributed Systems",
      "Resource Management",
      "Scalability",
      "Elasticity",
      "Fault Tolerance",
      "Public Cloud",
      "Private Cloud",
      "Hybrid Cloud"
    ]
  }
];

export const technicalFocusAreas: TechnicalFocus[] = [
  {
    title: "JAVA Full-Stack Web Development",
    description: "Building responsive client interfaces with React.js and scalable backend REST APIs with Node.js & Express.js.",
    icon: "Layout"
  },
  {
    title: "Data Structures & Algorithms",
    description: "Applying fundamental data structures and algorithmic techniques for optimal problem solving.",
    icon: "Code2"
  },
  {
    title: "Object-Oriented Programming",
    description: "Designing modular, extensible software components following object-oriented principles in Java & JavaScript.",
    icon: "Cpu"
  },
  {
    title: "RESTful API Development",
    description: "Designing structured, predictable HTTP endpoints with express routing and JSON payloads.",
    icon: "Server"
  },
  {
    title: "Database-Driven Applications",
    description: "Modeling document schemas in MongoDB and relational tables in MySQL with efficient CRUD operations.",
    icon: "Database"
  },
  {
    title: "Real-Time Web Applications",
    description: "Implementing bi-directional WebSocket channels with Socket.io for real-time messaging.",
    icon: "Zap"
  }
];
