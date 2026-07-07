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
  return (
    <section
      id="hero"
      className="relative min-h-screen bg-slate-950 overflow-hidden text-white flex items-center"
    >
      <div className="absolute inset-0 overflow-hidden">
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
              sequence={[
                "Full Stack Developer",
                2000,
                "Backend Developer",
                2000,
                "Software Engineer",
                2000,
              ]}
              wrapper="span"
              speed={40}
              repeat={Infinity}
              className="text-cyan-400 text-2xl md:text-3xl font-semibold"
            />
          </h2>

          <p className="text-gray-400 mt-6 max-w-lg leading-8">
            {personal.description}
          </p>

          <div className="flex flex-wrap gap-5 mt-10">
            <Button>
              Download CV
            </Button>

            <Button variant="secondary">
              Contact Me
            </Button>

            <div className="flex gap-6 mt-10 text-3xl">

              <a href={personal.github}>
                <FaGithub className="hover:text-cyan-400 transition" />
              </a>

              <a href={personal.linkedin}>
                <FaLinkedin className="hover:text-cyan-400 transition" />
              </a>

              <a href={`mailto:${personal.email}`}>
                <MdEmail className="hover:text-cyan-400 transition" />
              </a>

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
          <img
            src={profile}
            alt="Malith Perera"
            className="w-80 h-80 rounded-full object-cover border-4 border-cyan-500 shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;