function StatsCard({ title, value, icon, color }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 hover:shadow-lg transition-all duration-300">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-slate-500 text-sm">{title}</p>

          <h2 className="text-3xl font-bold mt-2 text-slate-800">
            {value}
          </h2>
        </div>

        <div
          className={`h-14 w-14 rounded-xl flex items-center justify-center ${color}`}
        >
          {icon}
        </div>
      </div>
    </div>
  );
}

export default StatsCard;