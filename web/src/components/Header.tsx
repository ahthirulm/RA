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
