import SkillBadge from "./SkillBadge";
import { FaGithub } from "react-icons/fa";
import { HiOutlineExternalLink } from "react-icons/hi";

function ProjectCard({ project, onView }) {
  return (
    <div 
      onClick={()=>onView(project)}
      className="
          rounded-xl
          overflow-hidden 
          bg-slate-900
          cursor-pointer 
          hover:border-cyan-400 
          hover:-translate-y-2
          shadow-lg
          hover:shadow-cyan-500/20
          transition-all
          duration-300
          group 
          border 
          border-slate-800
          flex
          flex-col
          h-full
        ">
      <div className="overflow-hidden">
      <img
        src={project.coverImage}
        alt={project.title}
        className="
          w-full 
          h-52 
          object-cover
          transition
          duration-300
          hover:scale-110"
      />
      
      </div>

      <div className="p-6 p-6 flex flex-col flex-1">
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

        <div className="mt-auto pt-8 flex items-center justify-between">
          <span className="text-cyan-400 font-medium">
              Click to view project
          </span>

          <span className="text-xl transition-transform duration-300 group-hover:translate-x-1">
              →
          </span>
      </div>
        
      </div>
    </div>
  );
}

export default ProjectCard;