import experience from "../../data/experience";
import TimelineCard from "../ui/TimelineCard";
import { motion } from "framer-motion";

function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="py-28 bg-slate-900 text-white"
    >
      <div className="max-w-6xl mx-auto px-6">

        <motion.h2
          id="experience-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center"
        >
          Experience
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-gray-400 text-center mt-6 max-w-3xl mx-auto"
        >
          My professional journey through internships and industry
          experience.
        </motion.p>

        <div className="mt-16 space-y-8">

          {experience.map((job) => (
            <TimelineCard
              key={`${job.company}-${job.position}`}
              {...job}
            />
          ))}

        </div>

      </div>
    </section>
  );
}

export default Experience;