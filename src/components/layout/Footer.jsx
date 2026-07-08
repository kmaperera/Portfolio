import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 text-white">
      <div className="max-w-6xl mx-auto px-6 py-10">

        <h2 className="text-2xl font-bold text-center">
          Malith Perera
        </h2>

        <p className="text-gray-400 text-center mt-2">
          Software Engineer • Full Stack Developer
        </p>

        <div className="flex justify-center gap-6 mt-6">

          <a
            href="https://github.com/kmaperera"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-cyan-400 transition"
          >
            <FaGithub size={24} />
          </a>

          <a
            href="https://www.linkedin.com/in/kmaperera"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-cyan-400 transition"
          >
            <FaLinkedin size={24} />
          </a>

          <a
            href="mailto:malith.perera2021@gmail.com"
            className="text-gray-400 hover:text-cyan-400 transition"
          >
            <FaEnvelope size={24} />
          </a>

        </div>

        <button
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
          className="
            w-12
            h-12
            rounded-full
            bg-cyan-500
            text-slate-950
            mx-auto
            flex
            items-center
            justify-center
            hover:bg-cyan-400
            transition-all
            duration-300
          "
        >
          ↑
        </button>

        <div className="border-t border-slate-800 mt-8 pt-6">

          <p className="text-center text-sm text-gray-500">
            © {new Date().getFullYear()} Malith Perera. All rights reserved.
          </p>

        </div>
      </div>
    </footer>
  );
}

export default Footer;