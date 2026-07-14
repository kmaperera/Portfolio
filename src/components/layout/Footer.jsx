import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer
      className="bg-slate-900 border-t border-slate-800/80 text-white"
      aria-label="Site footer"
    >
      <div className="max-w-6xl mx-auto px-6 py-6">

        <div className="flex flex-col md:flex-row items-center justify-between gap-5">

          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Malith Perera
            <span className="text-gray-600"> • </span>
            Built with React & Tailwind CSS
          </p>

          <div className="flex items-center gap-3">

            <a
              href="https://github.com/kmaperera"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="
                w-10 h-10
                rounded-full
                flex items-center justify-center
                text-gray-400
                hover:text-cyan-400
                hover:bg-slate-800
                transition-all
                duration-300
              "
            >
              <FaGithub size={20} />
            </a>

            <a
              href="https://www.linkedin.com/in/kmaperera"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="
                w-10 h-10
                rounded-full
                flex items-center justify-center
                text-gray-400
                hover:text-cyan-400
                hover:bg-slate-800
                transition-all
                duration-300
              "
            >
              <FaLinkedin size={20} />
            </a>

            <a
              href="mailto:malith.perera2021@gmail.com"
              aria-label="Email"
              className="
                w-10 h-10
                rounded-full
                flex items-center justify-center
                text-gray-400
                hover:text-cyan-400
                hover:bg-slate-800
                transition-all
                duration-300
              "
            >
              <FaEnvelope size={20} />
            </a>

          </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;