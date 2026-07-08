import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import SkillBadge from "./SkillBadge";
import { useState, useEffect } from "react";

function ProjectModal({ project, onClose }) {
    const [activeImage, setActiveImage] = useState(0);
    useEffect(() => {
        setActiveImage(0);
    }, [project]);

    if (!project) return null;
    
    return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Modal */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="bg-slate-900 rounded-2xl w-full max-w-5xl max-h-[90vh] overflow-y-auto border border-slate-700"
        >
          {/* We'll add content next */}

        <div className="flex justify-end p-4">
            <button
                onClick={onClose}
                className="text-gray-400 hover:text-white"
            >
                <X size={26} />
            </button>
        </div>

        <img
            src={project.images[activeImage].image}
            alt={project.images[activeImage].label}
            className="w-full h-72 object-cover"
        />

        <div className="flex flex-wrap gap-3 mt-4">
                {project.images.map((item, index) => (
                  <button
                    key={item.label}
                    onClick={() => setActiveImage(index)}
                    className={`
                      px-4
                      py-2
                      rounded-lg
                      transition-all
                      duration-300
        
                      ${
                        activeImage === index
                          ? "bg-cyan-500 text-slate-950"
                          : "bg-slate-800 text-gray-300 hover:bg-slate-700"
                      }
                    `}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
              
        <div className="p-8">
            <h2 className="text-4xl font-bold">
                {project.title}
            </h2>

            <h3 className="text-cyan-400 mt-8 text-xl font-semibold">
                Overview
            </h3>

            <p className="text-gray-300 mt-4 leading-8">
                {project.overview}
            </p>

            <h3 className="text-cyan-400 mt-10 text-xl font-semibold">
                My Contribution
            </h3>

            <ul className="mt-4 space-y-3">
                {project.contribution.map((item) => (
                    <li
                    key={item}
                    className="text-gray-300 flex items-start gap-3"
                    >
                    <span className="text-cyan-400 mt-1">✓</span>

                    <span>{item}</span>
                    </li>
                ))}
            </ul>

            <h3 className="text-cyan-400 mt-10 text-xl font-semibold">
                Technologies
            </h3>

            <div className="flex flex-wrap gap-3 mt-4">
                {project.technologies.map((tech) => (
                    <SkillBadge
                    key={tech}
                    skill={tech}
                    small
                    />
                ))}
            </div>

            <div className="flex gap-4 mt-10">
                {project.github && (
                    <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-3 rounded-lg bg-cyan-500 text-black font-semibold hover:bg-cyan-400 transition"
                    >
                    GitHub
                    </a>
                )}

                {project.demo && (
                    <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-3 rounded-lg border border-cyan-500 hover:bg-cyan-500 hover:text-black transition"
                    >
                    Live Demo
                    </a>
                )}
            </div>
        </div>
                </motion.div>
              </motion.div>
    </AnimatePresence>
  );
}

export default ProjectModal;