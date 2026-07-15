import skills from "../../data/skills";
import SkillBadge from "../ui/SkillBadge";
import { motion } from "framer-motion";

function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="py-28 bg-slate-950 text-white"
    >
      <div className="max-w-6xl mx-auto px-6">

        <motion.h2
          id="skills-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center"
        >
          Skills
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-gray-400 text-center mt-6 max-w-3xl mx-auto"
        >
          Technologies and tools I use to build modern web and mobile
          applications.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mt-16">
          {skills.map((group) => (
            <motion.article
              key={group.category}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="
                bg-slate-900 
                border 
                border-slate-800 
                rounded-2xl 
                p-6 
                hover:border-cyan-400
                transition-all
                duration-300"
            >
              <div className="flex items-center gap-3 mb-8 whitespace-nowrap">
                {group.icon && (
                  <group.icon
                    className="text-cyan-400 text-xl flex-shrink-0"
                    aria-hidden="true"
                  />
                )}

                <h3 className="text-xl font-bold text-cyan-400">
                  {group.category}
                </h3>
              </div>

              <div className="
              grid grid-cols-3 gap-6">
                {group.items.map((skill) => (
                  <SkillBadge
                    key={skill.name}
                    skill={skill}
                  />
                ))}
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;