import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaJava,
  FaGitAlt,
  FaFigma
} from "react-icons/fa";

import { 
  SiTailwindcss,
  SiExpress,
  SiMysql,
  SiFirebase,
  SiPostman,
  SiDart,
  SiC,
} from "react-icons/si";

import {
  DiJavascript
} from "react-icons/di"

import MssqlServer from "../assets/icons/sql-server.svg?react";

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
        icon: DiJavascript,
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
        icon: MssqlServer,
      },
      {
        name: "Firebase",
        icon: SiFirebase,
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
        icon: FaFigma,
      },
    ],
  },
];

export default skills;