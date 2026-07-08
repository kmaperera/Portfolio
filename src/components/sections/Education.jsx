import { motion } from "framer-motion";
import education from "../../data/education";

function Education() {
  return (
    <section
      id="education"
      className="py-28 bg-slate-900 text-white"
    >
      <div className="max-w-5xl mx-auto px-6">

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-center"
      >
        Education
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="text-gray-400 text-center mt-6 max-w-2xl mx-auto h-10"
      >
        My academic journey and educational background.
      </motion.p>

      {education.map((item) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative pl-14 pb-14"
        >
          {/* Circle */}
          <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-cyan-500 border-4 border-slate-900"></div>

          {/* Card */}
          <div className="
            bg-slate-800 
            rounded-xl 
            p-6 
            border 
            border-slate-700
            hover:-translate-y-2
            hover:border-cyan-400
            hover:shadow-cyan-500/20
            transition-all
            duration-300"
          >
            <p className="
              text-cyan-400 
              text-sm
              inline-block
              px-3
              py-1
              rounded-full
              bg-cyan-500/10
              text-cyan-400
              text-sm
              font-medium"
            >
              {item.period}
            </p>

            <h3 className="text-2xl font-bold mt-2">
              {item.degree}
            </h3>

            <p className="text-lg text-gray-300 mt-1">
              {item.institution}
            </p>

            <p className="text-gray-400 mt-4 leading-7">
              {item.description}
            </p>
          </div>
        </motion.div>
      ))}
      </div>
    </section>
  );
}

export default Education;