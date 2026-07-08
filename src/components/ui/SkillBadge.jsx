function SkillBadge({ 
    skill,
    small = false,
}) {
  return (
    <span
      className={`
        rounded-full
        bg-slate-800
        border
        border-slate-700
        text-gray-200
        transition
        duration-300
        hover:border-cyan-400
        hover:text-cyan-400
        ${
          small
            ? "text-xs px-3 py-1"
            : "text-sm px-4 py-2"
        }
      `}
    >
      {skill}
    </span>
  );
}

export default SkillBadge;