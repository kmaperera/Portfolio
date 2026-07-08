function TimelineCard({
  position,
  company,
  period,
  responsibilities,
}) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-cyan-400 transition">

      <h3 className="text-2xl font-semibold">
        {position}
      </h3>

      <p className="text-cyan-400 mt-1">
        {company}
      </p>

      <p className="text-gray-500 text-sm mt-2">
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