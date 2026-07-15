import erpLogin from "../assets/images/projects/erp/login.jpeg";
import erpUser from "../assets/images/projects/erp/user.jpeg";
import erpAdmin from "../assets/images/projects/erp/admin.jpeg";
import erpCourse from "../assets/images/projects/erp/course.jpeg";
import erpExam from "../assets/images/projects/erp/exam.jpeg";
import erpLecturer from "../assets/images/projects/erp/lecturer.jpeg";
import worknestApplyJob from "../assets/images/projects/worknest/apply.jpeg";
import worknestFindJob from "../assets/images/projects/worknest/find.jpeg";
import worknestViewJob from "../assets/images/projects/worknest/view.jpeg";
import worknestSaveJob from "../assets/images/projects/worknest/save.jpeg";
import worknestDashboard from "../assets/images/projects/worknest/dashboard.jpeg";
import worknestApplication from "../assets/images/projects/worknest/application.jpeg";
import safedriveDashboard from "../assets/images/projects/safedrive/dashboard.jpeg";
import safedriveHistory from "../assets/images/projects/safedrive/history.jpeg";
import safedriveSettings from "../assets/images/projects/safedrive/setting.jpeg";
import erpCover from "../assets/images/projects/erp/cover.png";
import worknestCover from "../assets/images/projects/worknest/cover.png";
import safedriveCover from "../assets/images/projects/safedrive/cover.png";


const projects = [
  {
    id: 1,
    title: "University ERP System",

    category: "Academic Group Project",

    coverImage: erpCover,

    images: [
      {
        label: "Login",
        image: erpLogin,
      },
      {
        label: "Admin",
        image: erpAdmin,
      },
      {
        label: "Lecturer",
        image: erpLecturer,
      },
      {
        label: "User",
        image: erpUser,
      },
      {
        label: "Exam",
        image: erpExam,
      },
      {
        label: "Course",
        image: erpCourse,
      }
    ],

    shortDescription:
    "A role-based university management system for managing students, lecturers, courses, and academic operations.",

    overview:
    "The University ERP System is a full-stack application developed to digitize university operations. The system provides secure authentication, lecturer management, course management, and role-based access control.",

    contribution: [
    "Developed backend REST APIs using Node.js",
    "Implemented JWT Authentication and Role-Based Access Control",
    "Integrated Microsoft SQL Server stored procedures",
    "Built Lecturer Management module (CRUD)",
    "Designed secure authentication workflow",
    "Connected backend APIs with SQL Server database"
    ],

    challenges: [
      "Designing relational database tables with foreign key constraints.",
      "Implementing secure authentication with JWT.",
      "Managing SQL Server stored procedures and complex joins.",
      "Synchronizing backend APIs with frontend requirements."
    ],

    learned: [
      "Building scalable REST APIs.",
      "Database design using SQL Server.",
      "Authentication and authorization.",
      "Collaborative Git workflow.",
      "Backend architecture for enterprise applications."
    ],

    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "MS SQL Server",
    ],

    github: [
      {
        name: "Frontend",
        url: "https://github.com/kmaperera"
      },
      {
        name: "Backend",
        url: "https://github.com/kmaperera/university-erp-backend"
      }
    ],

    demo: "https://github.com/kmaperera",
  },

  {
    id: 2,
    title: "WorkNest",

    category: "Academic Group Project",

    coverImage: worknestCover,

    images: [
      {
        label: "Apply Job",
        image: worknestApplyJob,
      },
      {
        label: "Find Job",
        image: worknestFindJob,
      },
      {
        label: "View Job",
        image: worknestViewJob,
      },
      {
        label: "Save Job",
        image: worknestSaveJob,
      },
      {
        label: "Dashboard",
        image: worknestDashboard,
      },
      {
        label: "Application",
        image: worknestApplication,
      }
    ],

    shortDescription:
      "Job recruitment platform connecting employers and job seekers with authentication, role-based access control, and application management.",

    overview:
    "WorkNest is a full-stack job recruitment platform that connects employers and job seekers. The system provides secure authentication, role-based access control, job posting, and application management features.",

    contribution: [
    "Developed backend APIs",
    "Implemented JWT Authentication",
    "Role-Based Access Control",
    "Job CRUD APIs",
    "Employer Profile APIs",
    "Job Seeker Profile APIs",
    "Application Management"
    ],

    challenges: [
      "Designing a secure authentication system with JWT and role-based access control.",
      "Managing relationships between employers, job seekers, job postings, and applications in the MySQL database.",
      "Developing REST APIs that efficiently handled filtering, searching, and CRUD operations.",
      "Ensuring smooth communication between the React frontend and Node.js backend while maintaining data consistency."
    ],

    learned: [
      "Building scalable REST APIs using Node.js and Express.",
      "Implementing secure authentication and authorization using JWT.",
      "Designing relational databases and optimizing SQL queries in MySQL.",
      "Collaborating effectively in a team using Git and GitHub.",
      "Developing a complete full-stack web application from backend to frontend integration."
    ],

    technologies: [
      "React",
      "Node.js",
      "MySQL",
    ],

    github: [
      {
        name: "Code",
        url: "https://github.com/kmaperera/Job-listing-website"
      },
    ],

    demo: "",

  },

  {
    id: 3,
    title: "SafeDrive",

    category: "Academic Group Project",

    coverImage: safedriveCover,

    images: [
      {
        label: "Dashboard",
        image: safedriveDashboard,
      },
      {
        label: "History",
        image: safedriveHistory,
      },
      {
        label: "Settings",
        image: safedriveSettings,
      }
    ],

    shortDescription:
      "Flutter application that detects driver drowsiness using facial landmark detection and provides real-time alerts.",
    
    overview:
    "SafeDrive is a mobile application developed using Flutter that detects driver drowsiness using facial landmark detection. The app provides real-time alerts to prevent accidents caused by drowsy driving.",

    contribution: [
      "Developed the Login and Sign Up screens using Flutter.",
      "Implemented Dark Mode functionality to improve the user experience.",
      "Enhanced the mobile UI with responsive layouts for different screen sizes.",
      "Collaborated with team members to integrate the UI with the application's existing features."
    ],

    challenges: [
      "Creating responsive UI layouts that worked consistently across different mobile screen sizes.",
      "Implementing Dark Mode while maintaining a consistent design throughout the application.",
      "Designing user-friendly authentication screens that aligned with the overall application design.",
      "Integrating UI components smoothly with the project's existing Flutter codebase."
    ],

    learned: [
      "Developing modern and responsive mobile user interfaces using Flutter.",
      "Implementing theme management with Light and Dark Mode.",
      "Building authentication screens following mobile UI/UX best practices.",
      "Working collaboratively in a team using Git and GitHub.",
      "Improving Flutter development and responsive design skills."
    ],

    technologies: [
      "Dart",
      "Flutter",
      "Firebase",
    ],

    github: [
      {
        name: "Code",
        url: "https://github.com/kmaperera/Safe-Drive"
      },
    ],

    demo: "",

  },
];

export default projects;