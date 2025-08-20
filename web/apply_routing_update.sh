set -euo pipefail

echo "→ Ensuring folders exist"
mkdir -p src/pages src/components

timestamp=$(date +%s)

backup() {
  local f="$1"
  if [ -f "$f" ]; then
    cp "$f" "$f.bak.$timestamp"
    echo "  • Backed up $f -> $f.bak.$timestamp"
  fi
}

echo "→ Backing up possible existing files"
backup src/main.tsx
backup src/components/Header.tsx
backup src/pages/About.tsx
backup src/pages/Contact.tsx

echo "→ Writing src/main.tsx (HashRouter + routes)"
cat > src/main.tsx <<'TS'
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { HashRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import About from "./pages/About";
import Contact from "./pages/Contact";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<App />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
TS

echo "→ Writing src/components/Header.tsx (NavLink + mobile menu + scroll lock)"
cat > src/components/Header.tsx <<'TS'
import { Button } from "@/components/ui/button";
import { Menu, X, Leaf } from "lucide-react";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMenuOpen]);

  const items = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <header className="bg-eco-green-900/95 backdrop-blur-sm fixed w-full top-0 z-50 border-b border-eco-green-700 shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <Leaf className="h-8 w-8 text-eco-green-400" />
            <h2 className="text-2xl font-bold text-white">EcoScrap UAE</h2>
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center space-x-8 text-eco-green-100">
            {items.map((it) => (
              <NavLink
                key={it.to}
                to={it.to}
                className={({ isActive }) =>
                  `transition-colors ${isActive ? "text-white" : "hover:text-eco-green-400"}`
                }
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                {it.label}
              </NavLink>
            ))}
            <Button className="bg-eco-green-500 hover:bg-eco-green-400 text-eco-green-950">
              Get Started
            </Button>
          </nav>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-eco-green-100"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsMenuOpen((v) => !v)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <nav id="mobile-nav" className="md:hidden mt-4 pb-4 space-y-2">
            {items.map((it) => (
              <NavLink
                key={it.to}
                to={it.to}
                className="block text-eco-green-100 hover:text-eco-green-400 transition-colors py-2"
                onClick={() => {
                  setIsMenuOpen(false);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                {it.label}
              </NavLink>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
TS

echo "→ Writing src/pages/About.tsx"
cat > src/pages/About.tsx <<'TS'
import { useEffect } from "react";
import { Leaf } from "lucide-react";

export default function About() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <main className="pt-28 pb-20 bg-gradient-to-b from-eco-green-900 to-eco-green-950">
      <section className="container mx-auto px-4 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-eco-green-800/60 border border-eco-green-600 text-eco-green-200">
          <Leaf className="h-4 w-4" /> About Us
        </div>
        <h1 className="mt-4 text-4xl font-extrabold text-white">About EcoScrap UAE</h1>
        <p className="mt-4 text-eco-green-200 max-w-2xl mx-auto">
          EcoScrap UAE provides sustainable, compliant, and reliable scrap
          collection & recycling across the UAE—serving households and industry
          with traceable, responsible processes.
        </p>
      </section>
    </main>
  );
}
TS

echo "→ Writing src/pages/Contact.tsx"
cat > src/pages/Contact.tsx <<'TS'
import { useEffect } from "react";

export default function Contact() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <main className="pt-28 pb-20 bg-gradient-to-b from-eco-green-900 to-eco-green-950">
      <section className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-extrabold text-white">Contact EcoScrap UAE</h1>
        <p className="mt-4 text-eco-green-200">
          Email: <strong>contact@ecoscrap.ae</strong>
        </p>
        <p className="text-eco-green-200">
          Phone: <strong>+971-5X-XXX-XXXX</strong>
        </p>
        <p className="mt-2 text-eco-green-200">
          We’re available 7 days a week for pickups and quotes.
        </p>
      </section>
    </main>
  );
}
TS

echo "→ Done writing files."
