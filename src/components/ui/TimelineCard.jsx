function TimelineCard({
  position,
  company,
  period,
  responsibilities,
  logo,
}) {
  return (
    <div className="
      bg-slate-900 
      border 
      border-slate-800 
      rounded-xl 
      p-6 
      hover:border-cyan-400 
      transition
    ">

      <div className="flex items-center gap-4">

        {logo && (
          <img
            src={logo}
            alt={`${company} logo`}
            className="
              w-12
              h-12
              rounded-lg
              object-contain
              bg-white
              p-1
            "
          />
        )}

        <div>
          <h3 className="text-2xl font-semibold">
            {position}
          </h3>

          <p className="text-cyan-400">
            {company}
          </p>
        </div>

      </div>

      <p className="text-gray-500 text-sm mt-4">
        {period}
      </p>

      <ul className="mt-5 space-y-2">
        {responsibilities.map((item) => (
          <li
            key={item}
            className="text-gray-300"
          >
            • {item}
          </li>
        ))}
      </ul>

    </div>
  );
}

export default TimelineCard;