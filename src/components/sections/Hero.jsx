import profile from "../../assets/images/profile.png";
import personal from "../../data/personal";
import { TypeAnimation } from "react-type-animation";
import { 
  FaGithub,
  FaLinkedin,
 } from "react-icons/fa";
 import { MdEmail } from "react-icons/md";
 import {motion} from "framer-motion";
 import Button from "../ui/Button"; 

function Hero() {
  const roleSequence = personal.roles.flatMap((role) => [role, 2000]);
  const socialLinks = [
  {
    icon: <FaGithub />,
    url: personal.github,
  },
  {
    icon: <FaLinkedin />,
    url: personal.linkedin,
  },
  {
    icon: <MdEmail />,
    url: `mailto:${personal.email}`,
  },
];
  return (
    <section
    id="hero"
    className="relative min-h-screen bg-slate-950 overflow-hidden text-white flex items-center"
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
          <p className="text-cyan-400 text-lg mb-3">
            {personal.greeting}
          </p>

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
                transition-all
              "
            >
              Download CV
            </a>

            <Button variant="secondary">
              Contact Me
            </Button>

            <div className="flex gap-6 mt-8 text-3xl">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  aria-label={
                    social.url.includes("github")
                      ? "GitHub Profile"
                      : social.url.includes("linkedin")
                      ? "LinkedIn Profile"
                      : "Send Email"
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400 transition duration-300 hover:scale-110"
                >
                  {social.icon}
                </a>
              ))}
            </div>
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
            className="relative w-80 h-80 rounded-full object-cover border-4 border-cyan-400"
          />
          </div>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <span className="text-gray-400 text-sm">
          Scroll Down ↓
        </span>
      </div>
    </section>
  );
}

export default Hero;