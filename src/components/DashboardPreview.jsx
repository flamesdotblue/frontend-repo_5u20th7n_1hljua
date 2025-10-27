export default function DashboardPreview() {
  return (
    <section id="dashboard" className="py-20 bg-gradient-to-b from-emerald-50 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">Daily nutrition at a glance</h2>
          <p className="mt-3 text-gray-600">A simple dashboard shows calories and macros with friendly gauges and tips—optimized for quick check-ins on the go.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="font-semibold text-gray-900">Today’s Macro Balance</h3>
            <div className="mt-4 grid grid-cols-3 gap-4">
              <MiniGauge label="Protein" value={62} color="emerald" />
              <MiniGauge label="Carbs" value={80} color="teal" />
              <MiniGauge label="Fat" value={40} color="amber" />
            </div>
            <div className="mt-6 rounded-xl bg-gray-50 p-4 text-sm text-gray-700">
              Tip: Consider adding 1 cup dal to improve protein balance while keeping costs low.
            </div>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="font-semibold text-gray-900">Quick meal log</h3>
            <form className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input className="w-full rounded-xl border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="Food (e.g., rice)" />
              <div className="grid grid-cols-2 gap-3">
                <input className="w-full rounded-xl border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="Qty" />
                <select className="w-full rounded-xl border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500">
                  <option>grams</option>
                  <option>ounces</option>
                  <option>cups</option>
                </select>
              </div>
              <button type="button" className="rounded-xl bg-emerald-600 text-white px-4 py-2 font-medium hover:bg-emerald-700 transition">Analyze with Groq</button>
            </form>

            <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
              <Stat label="Calories" value="520 kcal" />
              <Stat label="Protein" value="21 g" />
              <Stat label="Carbs" value="82 g" />
              <Stat label="Fat" value="12 g" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MiniGauge({ label, value, color = "emerald" }) {
  const pct = Math.max(0, Math.min(100, value));
  return (
    <div className="rounded-xl border border-gray-200 p-3">
      <svg viewBox="0 0 36 20" className="w-full h-16">
        <path d="M2,20 A18,18 0 0 1 34,20" fill="none" stroke="#E5E7EB" strokeWidth="4" />
        <path d="M2,20 A18,18 0 0 1 34,20" fill="none" stroke="currentColor" className={`text-${color}-500`} strokeWidth="4" strokeDasharray={`${(pct / 100) * 56.5} 56.5`} strokeLinecap="round" />
      </svg>
      <div className="mt-1 text-xs text-gray-600 flex items-center justify-between">
        <span>{label}</span>
        <span className="font-semibold text-gray-900">{pct}%</span>
      </div>
    </div>
  );
}

function Stat({ label, value }) {
  return (
    <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
      <div className="text-xs text-gray-500">{label}</div>
      <div className="text-lg font-semibold text-gray-900">{value}</div>
    </div>
  );
}
