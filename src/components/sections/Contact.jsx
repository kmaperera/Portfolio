import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="py-28 bg-slate-950 text-white"
    >
      <div className="max-w-6xl mx-auto px-6 ">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center"
        >
          Get In Touch
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-400 text-center mt-6 max-w-2xl mx-auto"
        >
          I'm currently seeking Software Engineering internship and entry-level opportunities. If you'd like to discuss a role, collaboration, or simply connect, I'd be happy to hear from you.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-6 mt-16">
          <a
            href="mailto:malith.perera2021@gmail.com"
            aria-label="Send email to Malith Perera"
            className="
              bg-slate-900
              rounded-xl
              p-6
              border
              border-slate-800
              hover:border-cyan-400
              hover:-translate-y-2
              text-gray-300
              duration-300
              block"
          >

          <FaEnvelope className="text-cyan-400 text-3xl" />

          <h3 className="text-xl font-semibold mt-4">
            Email
          </h3>

            malith.perera2021@gmail.com
          </a>

          <a
            href="tel:+94769867801"
            aria-label="Call Malith Perera"
            className="
              bg-slate-900
              rounded-xl
              p-6
              border
              border-slate-800
              hover:border-cyan-400
              hover:-translate-y-2
              text-gray-300
              duration-300
              block"
          >
          <FaPhone className="text-cyan-400 text-3xl" />

          <h3 className="text-xl font-semibold mt-4">
            Phone
          </h3>

            +94 76 986 7801
          </a>

          <a
            href="https://maps.google.com/?q=Panadura,Sri Lanka"
            aria-label="Open Panadura location in Google Maps"
            className="
              bg-slate-900
              rounded-xl
              p-6
              border
              border-slate-800
              hover:border-cyan-400
              hover:-translate-y-2
              text-gray-300
              duration-300
              block"
            target="_blank"
            rel="noopener noreferrer"
          >
          <FaMapMarkerAlt className="text-cyan-400 text-3xl" />

          <h3 className="text-xl font-semibold mt-4">
            Location
          </h3>

            Panadura
          </a>
        </div>

      </div>
    </section>
  );
}

export default Contact;