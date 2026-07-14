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
    "..."
    ],

    learned: [
      "..."
    ],

    technologies: [
      "React",
      "Node.js",
      "MySQL",
    ],

    github: "",

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
    ""
    ],

    challenges: [
    "..."
    ],

    learned: [
      "..."
    ],

    technologies: [
      "Dart",
      "Flutter",
      "Firebase",
    ],

    github: "",

    demo: "",

  },
];

export default projects;