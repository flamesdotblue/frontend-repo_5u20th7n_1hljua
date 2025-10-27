import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import DashboardPreview from "./components/DashboardPreview";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <DashboardPreview />

        <section id="get-started" className="py-20 bg-white">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-2xl font-bold">Ready to bring NutriLuxury to your community?</h3>
            <p className="mt-2 text-gray-600">Run a pilot with offline-first nutrition guidance powered by Groq. We’ll help you set up localized foods, simple goals, and secure data sync.</p>
            <a href="#contact" className="mt-6 inline-flex items-center rounded-full bg-emerald-600 px-6 py-3 text-white font-medium hover:bg-emerald-700 transition">
              Request Pilot Access
            </a>
          </div>
        </section>

        <footer id="contact" className="border-t border-gray-200 py-10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-sm text-gray-600">© {new Date().getFullYear()} NutriLuxury. All rights reserved.</div>
            <div className="text-sm text-gray-600">Contact: hello@nutriluxury.org</div>
          </div>
        </footer>
      </main>
    </div>
  );
}
