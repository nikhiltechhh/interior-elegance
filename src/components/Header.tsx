import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Home", href: "#" },
  { name: "Services", href: "#services" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "How It Works", href: "#how-it-works" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-background ${
        isScrolled ? "shadow-sm" : ""
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16 sm:h-20">
          <a href="#" className="flex items-center gap-2 sm:gap-3 group flex-shrink-0">
            <span className="text-xl sm:text-2xl md:text-3xl font-serif font-bold tracking-tight">
              <span className="text-secondary">IRA</span>
              <span className="text-primary"> Interiors</span>
            </span>
          </a>

          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="nav-link text-sm tracking-wide"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden lg:block">
            <Button variant="hero" size="default">
              Contact
            </Button>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden relative w-10 h-10 flex items-center justify-center focus:outline-none z-50"
            aria-label="Toggle menu"
          >
            <div className="flex flex-col items-center justify-center gap-1.5">
              <span
                className={`block h-0.5 bg-secondary transition-all duration-300 ease-in-out origin-center ${
                  isMenuOpen ? "w-6 rotate-45 translate-y-2" : "w-6"
                }`}
              />
              <span
                className={`block h-0.5 bg-primary transition-all duration-300 ease-in-out ${
                  isMenuOpen ? "w-0 opacity-0" : "w-3"
                }`}
              />
              <span
                className={`block h-0.5 bg-secondary transition-all duration-300 ease-in-out origin-center ${
                  isMenuOpen ? "w-6 -rotate-45 -translate-y-2" : "w-6"
                }`}
              />
            </div>
          </button>
        </nav>

        <div
          className={`lg:hidden fixed inset-x-0 top-16 sm:top-20 bottom-0 bg-background transition-all duration-500 ease-in-out ${
            isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <div className="container mx-auto px-4 sm:px-6 py-6">
            <div className="flex flex-col gap-2">
              {navLinks.map((link, index) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-foreground/80 hover:text-foreground font-medium py-3 text-lg transition-all duration-300 border-b border-border/50 ${
                    isMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                  }`}
                  style={{
                    transitionDelay: isMenuOpen ? `${index * 75}ms` : "0ms",
                  }}
                >
                  {link.name}
                </a>
              ))}
              <Button 
                variant="hero" 
                size="lg" 
                className={`mt-6 w-full transition-all duration-300 ${
                  isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{
                  transitionDelay: isMenuOpen ? `${navLinks.length * 75}ms` : "0ms",
                }}
              >
                Contact
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
