import skills from "../../data/skills";
import SkillBadge from "../ui/SkillBadge";
import { motion } from "framer-motion";

function Skills() {
  return (
    <section
      id="skills"
      className="py-28 bg-slate-950 text-white"
    >
      <div className="max-w-6xl mx-auto px-6">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
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

        <div className="grid md:grid-cols-2 gap-8 mt-16">
          {skills.map((group) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-slate-900 border border-slate-800 rounded-xl p-6"
            >
              <h3 className="text-xl font-semibold text-cyan-400 mb-5">
                {group.category}
              </h3>

              <div className="flex flex-wrap gap-3">
                {group.items.map((skill) => (
                  <SkillBadge
                    key={skill}
                    skill={skill}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;