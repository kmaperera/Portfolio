function SkillBadge({ skill }) {
  return (
    <div
      className="
        flex
        flex-col
        items-center
        gap-2
        text-gray-300
        hover:text-cyan-400
        transition-all
        duration-300
      "
    >
      {skill.icon && (
        <skill.icon
          className="text-4xl"
          aria-hidden="true"
        />
      )}

      <span className="text-sm text-center">
        {skill.name}
      </span>
    </div>
  );
}

export default SkillBadge;