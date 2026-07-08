import SkillBadge from "./SkillBadge";
import { FaGithub } from "react-icons/fa";
import { HiOutlineExternalLink } from "react-icons/hi";
import { useState, useEffect } from "react";

function ProjectCard({ project, onView }) {
  const [activeImage, setActiveImage] = useState(0);
  return (
    <div className="
          rounded-xl
          overflow-hidden 
          bg-slate-900 
          hover:border-cyan-400 
          hover:-translate-y-2
          shadow-lg
          hover:shadow-cyan-500/20
          transition:all
          duration-300 
          border 
          border-slate-800">
      <div className="overflow-hidden">
      <img
        src={project.images[activeImage].image}
        alt={project.images[activeImage].label}
        className="
          w-full 
          h-52 
          object-cover
          transition
          duration-500
          hover:scale-110"
      />
      
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-bold">
          {project.title}
        </h3>

        <p className="
          text-gray-400 
          mt-4
          line-clamp-3"
        >
          {project.shortDescription}
        </p>

        <div className="flex flex-wrap gap-2 mt-6">
          {project.technologies.map((tech) => (
            <SkillBadge
              key={tech}
              skill={tech}
              small
            />
          ))}
        </div>

        <div className="flex gap-4 mt-8">

          <a
            href={project.github}
            className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300"
          >
            <FaGithub />

            GitHub
          </a>

          <a
            href={project.demo}
            className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300"
          >
            <HiOutlineExternalLink />

            Live Demo
          </a>

          <button
              onClick={() => onView(project)}
              className="
                relative
                inline-block
                cursor-pointer
                text-white
                hover:text-cyan-300
                transition-colors
                duration-300

                after:absolute
                after:left-0
                after:bottom-0
                after:h-[2px]
                after:w-full
                after:origin-left
                after:scale-x-0
                after:bg-cyan-300
                after:transition-transform
                after:duration-300
                hover:after:scale-x-100
              "
          >
              View Details
          </button>

        </div>
      </div>
    </div>
  );
}

export default ProjectCard;