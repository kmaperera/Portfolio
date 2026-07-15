import profile from "../../assets/images/profile.png";
import personal from "../../data/personal";
import { TypeAnimation } from "react-type-animation";
import { 
  FaGithub,
  FaLinkedin,
 } from "react-icons/fa";
 import {motion} from "framer-motion";

function About() {
  const roleSequence = personal.roles.flatMap((role) => [role, 2000]);
  const socialLinks = [
  {
    icon: <FaGithub aria-hidden="true" />,
    url: personal.github,
    label: "GitHub Profile",
  },
  {
    icon: <FaLinkedin aria-hidden="true" />,
    url: personal.linkedin,
    label: "LinkedIn Profile",
  },
];
  return (
    <section
    id="about"
    className="relative min-h-screen py-24 bg-slate-950 overflow-hidden text-white flex items-center"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-40 left-20 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl"></div>

      <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl"></div>
      </div>
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            {personal.name}
          </h1>

          <h2 className="text-2xl text-gray-300 mt-6">
            <TypeAnimation
              sequence={roleSequence}
              wrapper="span"
              speed={45}
              repeat={Infinity}
              className="text-cyan-400 text-2xl md:text-3xl font-semibold"
            />
          </h2>

          <p className="text-gray-400 mt-6 max-w-lg leading-8">
            {personal.description}
          </p>

          <div className="flex flex-wrap gap-5 mt-10">
            <a
              href="/resume.pdf"
              download="Malith_Perera_CV.pdf"
              aria-label="Download Malith Perera's CV as a PDF"
              className="
                inline-flex
                items-center
                justify-center
                px-6
                py-3
                rounded-lg
                bg-cyan-500
                text-slate-950
                font-semibold
                hover:bg-cyan-400
                hover:scale-105
                transition-all
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-cyan-400
                focus-visible:ring-offset-2
                focus-visible:ring-offset-slate-950
              "
            >
              Download CV
            </a>
          </div>

            <div className="flex gap-6 mt-8 text-2xl">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    w-10
                    h-10
                    flex
                    items-center
                    justify-center
                    rounded-full
                    text-gray-300
                    hover:bg-slate-800
                    hover:text-cyan-400
                    transition-all
                    duration-300
                    focus-visible:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-cyan-400
                    focus-visible:ring-offset-2
                    focus-visible:ring-offset-slate-950
                    "
                >
                  {social.icon}
                </a>
              ))}
            </div>
        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center"
        >
          <motion.div
            animate={{ 
              y: [0, -12, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}>
              <div className="relative">
              <div className="absolute inset-0 bg-cyan-500/20 rounded-full blur-3xl"></div>
          <img
            src={profile}
            alt="Portrait of Malith Perera"
            className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-cyan-400"
          />
          </div>
          </motion.div>
        </motion.div>
      </div>

      <div 
        aria-hidden="true"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <span className="text-gray-400 text-sm">
          Scroll Down ↓
        </span>
      </div>
    </section>
  );
}

export default About;