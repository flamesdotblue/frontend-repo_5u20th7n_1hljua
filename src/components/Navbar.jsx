import { Rocket, Menu } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-full bg-gradient-to-tr from-emerald-500 to-teal-500 grid place-items-center text-white">
              <Rocket size={18} />
            </div>
            <span className="font-semibold text-gray-900">NutriLuxury</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-700">
            <a href="#features" className="hover:text-gray-900">Features</a>
            <a href="#dashboard" className="hover:text-gray-900">Dashboard</a>
            <a href="#contact" className="hover:text-gray-900">Contact</a>
            <a href="#get-started" className="inline-flex items-center rounded-full bg-emerald-600 px-4 py-2 font-medium text-white hover:bg-emerald-700 transition">
              Get Started
            </a>
          </nav>

          <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-lg hover:bg-gray-100 active:scale-95 transition">
            <Menu />
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 animate-in fade-in slide-in-from-top-2">
            <div className="grid gap-2 text-gray-700">
              <a href="#features" className="px-3 py-2 rounded-lg hover:bg-gray-100">Features</a>
              <a href="#dashboard" className="px-3 py-2 rounded-lg hover:bg-gray-100">Dashboard</a>
              <a href="#contact" className="px-3 py-2 rounded-lg hover:bg-gray-100">Contact</a>
              <a href="#get-started" className="px-3 py-2 rounded-lg bg-emerald-600 text-white text-center hover:bg-emerald-700 transition">Get Started</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
