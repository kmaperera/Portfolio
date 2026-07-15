import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import TechBadge from "./TechBadge";
import { FaGithub } from "react-icons/fa";
import { useState, useEffect } from "react";
import { ExternalLink } from "lucide-react";

function ProjectModal({ project, onClose }) {
    const [activeImage, setActiveImage] = useState(0);
    useEffect(() => {
        if (!project) return;

        setActiveImage(0);

        // Lock background scrolling
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [project]);

    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === "Escape") {
                onClose();
            }
        };

        window.addEventListener("keydown", handleEsc);

        return () => {
            window.removeEventListener("keydown", handleEsc);
        };
    }, [onClose]);

    if (!project) return null;
    
    return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        {/* Modal */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
          transition={{ duration: 0.25 }}
          className="bg-slate-900 rounded-2xl w-full max-w-5xl max-h-[90vh] overflow-y-auto border border-slate-700"
        >
          {/* We'll add content next */}

        <div className="flex justify-end p-4">
            <button
                aria-label="Close project details"
                onClick={onClose}
                className="
                    p-2
                    rounded-full
                    text-gray-400
                    hover:bg-slate-800
                    hover:text-white
                    transition"
            >
                <X size={26} />
            </button>
        </div>

        <div className="p-8">
            <div className="mb-8">

                <span
                    className="
                        inline-block
                        px-4
                        py-1
                        rounded-full
                        bg-cyan-500/20
                        text-cyan-400
                        text-sm
                        font-medium
                    "
                >
                    {project.category}
                </span>

                <h2 className="text-4xl font-bold mt-4">
                    {project.title}
                </h2>

            </div>

            <div className="flex gap-4 mt-10">
                {Array.isArray(project.github) &&
                    project.github.map((repo) => (
                        <a
                        key={repo.name}
                        href={repo.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                            inline-flex items-center gap-2
                            px-5 py-3
                            rounded-lg
                            border border-slate-600
                            text-gray-200
                            hover:border-cyan-400
                            hover:text-cyan-400
                            hover:-translate-y-2
                            transition-all duration-300
                            focus:outline-none
                            focus-visible:ring-2
                            focus-visible:ring-cyan-400
                            focus-visible:ring-offset-2
                            focus-visible:ring-offset-slate-900
                        "
                        >
                        <FaGithub size={20} />
                        <span>{repo.name}</span>
                        </a>
                    ))}

                {project.demo && (
                    <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                            inline-flex items-center gap-2
                            px-5 py-3
                            rounded-lg
                            bg-cyan-500
                            text-slate-950
                            font-medium
                            hover:bg-cyan-400
                            hover:-translate-y-2
                            transition-all duration-300
                            shadow-lg shadow-cyan-500/20
                            focus:outline-none
                            focus-visible:ring-2
                            focus-visible:ring-cyan-400
                            focus-visible:ring-offset-2
                            focus-visible:ring-offset-slate-900"
                    >
                        <ExternalLink size={18} />
                        <span>Live Demo</span>
                    </a>
                )}
            </div>

            <div className="border-t border-slate-700 my-6"></div>

            <h3 className="text-cyan-400 mt-8 text-xl font-semibold">
                Overview
            </h3>

            <p className="text-gray-300 mt-4 leading-8">
                {project.overview}
            </p>

            <div className="border-t border-slate-700 my-6"></div>

            <h3 className="text-cyan-400 mt-8 text-xl font-semibold">
                Gallery
            </h3>

            <div
            className="
                mt-6
                rounded-xl
                overflow-hidden
                border
                border-slate-700
                shadow-2xl
                bg-slate-900
            "
            >
                
            {/* Browser Header */}
            <div className="flex items-center gap-2 px-4 py-3 bg-slate-800 border-b border-slate-700">

                <span className="w-3 h-3 rounded-full bg-red-500"></span>

                <span className="w-3 h-3 rounded-full bg-yellow-500"></span>

                <span className="w-3 h-3 rounded-full bg-green-500"></span>

                <span className="ml-4 text-xs text-gray-400 truncate">
                {project.title}
                </span>

            </div>

            <AnimatePresence mode="wait">
                <motion.img
                key={activeImage}
                src={project.images[activeImage].image}
                alt={project.images[activeImage].label}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.01 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3 }}
                loading="lazy"
                draggable="false"
                className="
                    w-full
                    max-h-[300px]
                    md:max-h-[450px]
                    lg:max-h-[550px]
                    object-contain
                    bg-slate-950"
                />
            </AnimatePresence>
        </div>

        <div className="flex flex-wrap gap-3 mt-4">
                {project.images.map((item, index) => (
                  <button
                    key={item.label}
                    onClick={() => setActiveImage(index)}
                    className={`
                        px-5
                        py-2
                        rounded-full
                        text-sm
                        font-medium
                        transition-all
                        duration-300
                        border
        
                      ${
                        activeImage === index
                          ? "bg-cyan-500 text-slate-950 border-cyan-500 shadow-lg shadow-cyan-500/30"
                          : "bg-slate-800 text-gray-300 border-slate-700 hover:border-cyan-400 hover:text-white"
                      }
                    `}
                  >
                    {item.label}
                  </button>
                ))}
        </div>

        <div className="border-t border-slate-700 my-6"></div>

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

            <div className="border-t border-slate-700 my-6"></div>

            <h3 className="text-cyan-400 text-xl font-semibold">
            Technical Challenges
            </h3>

            <ul className="mt-4 space-y-3">
            {project.challenges.map((item) => (
                <li key={item} className="flex gap-3 text-gray-300">
                <span className="text-cyan-400">✓</span>
                <span>{item}</span>
                </li>
            ))}
            </ul>

            <div className="border-t border-slate-700 my-6"></div>

            <h3 className="text-cyan-400 text-xl font-semibold">
            What I Learned
            </h3>

            <ul className="mt-4 space-y-3">
            {project.learned.map((item) => (
                <li key={item} className="flex gap-3 text-gray-300">
                <span className="text-cyan-400">✓</span>
                <span>{item}</span>
                </li>
            ))}
            </ul>

            <div className="border-t border-slate-700 my-6"></div>

            <h3 className="text-cyan-400 mt-10 text-xl font-semibold">
                Technologies
            </h3>

            <div className="flex flex-wrap gap-3 mt-4">
                {project.technologies.map((tech) => (
                    <TechBadge
                    key={tech}
                    tech={tech}
                    />
                ))}
            </div>
        </div>
                </motion.div>
              </motion.div>
    </AnimatePresence>
  );
}

export default ProjectModal;