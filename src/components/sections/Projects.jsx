import { motion } from "framer-motion";
import projects from "../../data/projects";
import ProjectCard from "../ui/ProjectCard";
import { useState } from "react";
import ProjectModal from "../ui/ProjectModal";

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  return (
    <section
    id="projects"
    className="py-28 bg-slate-950 text-white"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center"
        >
          Featured Projects
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 text-center max-w-3xl mx-auto mt-6"
        >
          Here are some of the projects I have developed during my academic
          journey and personal learning.
        </motion.p>

        {/* Project Cards */}
        <div className="
        grid 
        grid-cols-1
        md:grid-cols-2
        lg:grid-cols-3 
        gap-8
        mt-16">
          {
            projects
              .map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onView={setSelectedProject}
            />
            
            
          ))}
        </div>

      </div>

      <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}

export default Projects;