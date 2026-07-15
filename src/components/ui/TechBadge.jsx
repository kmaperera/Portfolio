import { Code2 } from "lucide-react";

function TechBadge({ tech }) {
  return (
    <span
      className="
        inline-flex
        items-center
        gap-2
        px-4
        py-2
        rounded-full

        bg-white/5
        backdrop-blur-md
        border border-white/10

        text-cyan-300
        text-sm
        font-medium

        shadow-lg shadow-cyan-500/5
        transition-all duration-300

        hover:-translate-y-0.5
        hover:bg-cyan-500/10
        hover:border-cyan-400/40
        hover:shadow-cyan-500/20
      "
    >
      <Code2 size={14} />
      {tech}
    </span>
  );
}

export default TechBadge;