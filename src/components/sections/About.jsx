import about from "../../data/about";
import InfoCard from "../ui/InfoCard";
import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="py-28 bg-slate-900 text-white"
    >
      <div className="max-w-6xl mx-auto px-6">

        <motion.h2
          id="about-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center"
        >
          {about.title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 text-center max-w-3xl mx-auto mt-6 leading-8"
        >
          {about.description}
        </motion.p>

        <div className="grid md:grid-cols-2 gap-6 mt-14">
          {about.highlights.map((item) => (
            <InfoCard
              key={item.title}
              title={item.title}
              value={item.value}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default About;