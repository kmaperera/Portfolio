function InfoCard({ title, value }) {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900 p-6 hover:border-cyan-400 transition duration-300">
      <h3 className="text-cyan-400 font-semibold">
        {title}
      </h3>

      <p className="mt-2 text-gray-300">
        {value}
      </p>
    </div>
  );
}

export default InfoCard;