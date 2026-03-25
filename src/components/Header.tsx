import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "About", id: "about" },
  { label: "Discography", id: "discography" },
  { label: "Shows", id: "shows" },
  { label: "Press", id: "press" },
  { label: "Media", id: "media" },
  { label: "Contact", id: "contact" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setIsScrolled(currentY > 50);
      setIsHidden(currentY > lastScrollY && currentY > 300);
      setLastScrollY(currentY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) {
      const offset = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: offset, behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isHidden ? "-translate-y-full" : "translate-y-0"
        } ${
          isScrolled
            ? "bg-background/95 backdrop-blur-sm border-b border-primary/10"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-8 md:px-16 h-16 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollTo("home")}
            className="font-serif italic text-sm tracking-[0.15em] text-foreground/90 hover:text-primary transition-colors"
          >
            Matt Smith
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="label-caps text-foreground/60 hover:text-primary transition-colors"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-foreground/70 hover:text-primary transition-colors"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={20} />
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 bg-background/98 backdrop-blur-sm flex flex-col">
          <div className="flex justify-between items-center px-8 h-16">
            <span className="font-serif italic text-sm tracking-[0.15em] text-foreground/90">
              Matt Smith
            </span>
            <button
              onClick={() => setMobileOpen(false)}
              className="text-foreground/70 hover:text-primary transition-colors"
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
          </div>
          <nav className="flex flex-col px-8 pt-8 gap-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="label-caps text-foreground/60 hover:text-primary transition-colors text-left border-l-2 border-transparent hover:border-primary pl-3"
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </>
  );
};

export default Header;
