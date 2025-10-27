import { Brain, Wifi, Shield, PieChart } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-teal-50" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-3 py-1 text-emerald-700 text-xs font-medium">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              Pilot v1.0 • Groq-accelerated nutrition
            </div>
            <h1 className="mt-5 text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 leading-tight">
              Nutrition guidance that works offline, designed for real life
            </h1>
            <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-prose">
              NutriLuxury helps rural families improve health with instant, localized feedback on meals—fast, simple, and reliable with or without internet.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href="#get-started" className="inline-flex items-center rounded-full bg-emerald-600 px-5 py-3 text-white font-medium hover:bg-emerald-700 transition">
                Start a Community Pilot
              </a>
              <a href="#features" className="inline-flex items-center rounded-full border border-gray-300 px-5 py-3 font-medium text-gray-700 hover:bg-gray-50">
                Explore Features
              </a>
            </div>

            <dl className="mt-8 grid grid-cols-2 gap-4 text-sm">
              <FeatureItem icon={<Brain className="text-emerald-600" size={18} />} title="Groq Nutrition Engine" desc="Instant macro insights" />
              <FeatureItem icon={<Wifi className="text-emerald-600" size={18} />} title="Offline-first" desc="Works without internet" />
              <FeatureItem icon={<PieChart className="text-emerald-600" size={18} />} title="Macro dashboard" desc="Clear goals & gauges" />
              <FeatureItem icon={<Shield className="text-emerald-600" size={18} />} title="Secure by design" desc="Local encryption" />
            </dl>
          </div>

          <PhoneMockup />
        </div>
      </div>
    </section>
  );
}

function FeatureItem({ icon, title, desc }) {
  return (
    <div className="flex items-start gap-2 bg-white/70 backdrop-blur rounded-lg p-3 border border-gray-100">
      <div className="shrink-0 mt-0.5">{icon}</div>
      <div>
        <div className="font-semibold text-gray-900">{title}</div>
        <div className="text-gray-600">{desc}</div>
      </div>
    </div>
  );
}

function PhoneMockup() {
  return (
    <div className="mx-auto w-full max-w-md">
      <div className="relative mx-auto h-[520px] w-[260px] rounded-[2.25rem] border border-gray-300 bg-gray-900 shadow-2xl">
        <div className="absolute inset-0 rounded-[2.25rem] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-emerald-600 to-teal-600" />
          <div className="absolute inset-x-0 top-0 h-10 bg-black/40" />
          <div className="absolute inset-4 rounded-3xl bg-white p-4 flex flex-col">
            <div className="text-xs text-gray-500">Today</div>
            <div className="mt-1 text-lg font-semibold">Macro Balance</div>
            <div className="mt-3 grid grid-cols-3 gap-3">
              <Gauge label="Protein" value={65} color="emerald" />
              <Gauge label="Carbs" value={78} color="teal" />
              <Gauge label="Fat" value={42} color="amber" />
            </div>
            <div className="mt-4">
              <div className="text-xs text-gray-500">Today’s Meals</div>
              <ul className="mt-2 space-y-2 text-sm">
                <li className="flex justify-between"><span>Rice & dal</span><span className="text-gray-500">520 kcal</span></li>
                <li className="flex justify-between"><span>Maize roti</span><span className="text-gray-500">310 kcal</span></li>
                <li className="flex justify-between"><span>Lentil soup</span><span className="text-gray-500">190 kcal</span></li>
              </ul>
            </div>
            <div className="mt-auto grid grid-cols-2 gap-2">
              <button className="rounded-xl bg-emerald-600 text-white py-2 text-sm font-medium">Log Meal</button>
              <button className="rounded-xl border border-gray-300 py-2 text-sm font-medium">Ask Groq</button>
            </div>
          </div>
        </div>
        <div className="absolute left-1/2 -translate-x-1/2 top-0 w-24 h-6 bg-black/80 rounded-b-2xl" />
      </div>
    </div>
  );
}

function Gauge({ label, value, color = "emerald" }) {
  const pct = Math.max(0, Math.min(100, value));
  const colorMap = {
    emerald: "from-emerald-500 to-emerald-400",
    teal: "from-teal-500 to-teal-400",
    amber: "from-amber-500 to-amber-400",
  };
  return (
    <div className="rounded-2xl border border-gray-200 p-3 bg-white">
      <div className="relative h-20 w-full">
        <svg viewBox="0 0 36 20" className="w-full h-full">
          <defs>
            <linearGradient id={`grad-${color}`} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="currentColor" />
              <stop offset="100%" stopColor="currentColor" />
            </linearGradient>
          </defs>
          <path d="M2,20 A18,18 0 0 1 34,20" fill="none" stroke="#E5E7EB" strokeWidth="4" />
          <path
            d="M2,20 A18,18 0 0 1 34,20"
            fill="none"
            stroke="currentColor"
            className={`text-${color}-500`}
            strokeWidth="4"
            strokeDasharray={`${(pct / 100) * 56.5} 56.5`}
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute inset-0 grid place-items-center text-sm font-semibold text-gray-900">
          {pct}%
        </div>
      </div>
      <div className="mt-1 text-xs text-gray-600 text-center">{label}</div>
    </div>
  );
}
