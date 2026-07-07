function SkillBadge({ skill }) {
  return (
    <span
      className="
        px-4
        py-2
        rounded-full
        bg-slate-800
        border
        border-slate-700
        text-gray-200
        text-sm
        hover:border-cyan-400
        hover:text-cyan-400
        transition
        duration-300
      "
    >
      {skill}
    </span>
  );
}

export default SkillBadge;