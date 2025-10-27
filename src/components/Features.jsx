import { Brain, Database, PieChart, Activity, MessageCircle, Wifi } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Groq Nutrition Engine",
    desc: "Instant macro breakdowns and portion feedback with LPU acceleration.",
  },
  {
    icon: PieChart,
    title: "Macro Dashboard",
    desc: "Clear daily goals with pie and gauges for calories, protein, carbs, and fat.",
  },
  {
    icon: Database,
    title: "Localized Food Database",
    desc: "Preloaded staples like rice, lentils, maize, and dal stored offline.",
  },
  {
    icon: Wifi,
    title: "Offline-first Sync",
    desc: "Log meals offline and sync to the cloud when the network returns.",
  },
  {
    icon: MessageCircle,
    title: "Agentic Chat",
    desc: "Ask natural questions like ‘What’s a healthier dinner using lentils?’",
  },
  {
    icon: Activity,
    title: "Health Tracker",
    desc: "Track weight, activity, and wellness goals over time.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">What makes NutriLuxury different</h2>
          <p className="mt-3 text-gray-600">Built for rural and semi-rural communities with reliability, speed, and cultural relevance at the core.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition">
              <div className="h-12 w-12 rounded-xl bg-emerald-50 text-emerald-700 grid place-items-center">
                <Icon />
              </div>
              <div className="mt-4 font-semibold text-gray-900">{title}</div>
              <div className="mt-1 text-gray-600 text-sm leading-relaxed">{desc}</div>
              <div className="mt-4 text-xs text-emerald-700 font-medium">Learn more →</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
