import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaJava,
  FaGitAlt
} from "react-icons/fa";

import { 
  SiTailwindcss,
  SiExpress,
  SiMysql,
  SiFirebase,
  SiPostman,
  SiFigma,
  SiDart,
  SiC
} from "react-icons/si";

const skills = [
  {
    category: "Programming",
    items: [
      {
        name: "Java",
        icon: FaJava,
      },
      {
        name: "JavaScript",
        icon: FaJs,
      },
      { 
        name: "C",
        icon: SiC
      },
      {
        name: "Dart",
        icon: SiDart,
      },
    ],
  },
  {
    category: "Frontend",
    items: [
      {
        name: "React",
        icon: FaReact,
      },
      {
        name: "HTML",
        icon: FaHtml5,
      },
      {
        name: "CSS",
        icon: FaCss3Alt,
      },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
      },
    ],
  },
  {
    category: "Backend & Database",
    items: [
      {
        name: "Node.js",
        icon: FaNodeJs,
      },
      {
        name: "Express.js",
        icon: SiExpress,
      },
      {
        name: "MySQL",
        icon: SiMysql,
      },
      { 
        name: "MS SQL Server",
      },
      {
        name: "Firebase",
        icon: SiFirebase
      },
    ],
  },
  {
    category: "Tools & Others",
    items: [
      {
        name: "Git",
        icon: FaGitAlt,
      },
      {
        name: "Postman",
        icon : SiPostman,
      },
      {
        name: "Figma",
        icon: SiFigma,
      },
    ],
  },
];

export default skills;