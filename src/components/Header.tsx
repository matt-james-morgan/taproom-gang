import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "About", id: "about" },
  { label: "Discography", id: "discography" },
  { label: "Shows", id: "shows" },
  { label: "Media", id: "media" },
  { label: "Contact", id: "contact" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock page scroll and allow Escape to close while the mobile menu is open
  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMobileOpen(false);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [mobileOpen]);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    // Wait for the scroll lock to release before scrolling
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        const offset = el.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top: offset, behavior: "smooth" });
      }
    }, 0);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-sm border-b border-primary/10"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-5 md:px-16 h-16 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollTo("home")}
            className="py-2 hover:opacity-80 transition-opacity"
            aria-label="The Tap Room Gang — home"
          >
            <img
              src="/images/taproom/logo-primary-white.png"
              alt="The Tap Room Gang"
              className="h-12 w-auto"
            />
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="py-2 text-[0.85rem] font-sans font-medium tracking-[0.2em] uppercase text-foreground/80 hover:text-foreground transition-colors"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden -mr-2 flex h-11 w-11 items-center justify-center text-foreground/80 hover:text-primary transition-colors"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
            aria-expanded={mobileOpen}
          >
            <Menu size={26} />
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[60] bg-background flex flex-col md:hidden" role="dialog" aria-modal="true" aria-label="Menu">
          <div className="flex justify-between items-center px-5 h-16">
            <img
              src="/images/taproom/logo-primary-white.png"
              alt="The Tap Room Gang"
              className="h-12 w-auto"
            />
            <button
              onClick={() => setMobileOpen(false)}
              className="-mr-2 flex h-11 w-11 items-center justify-center text-foreground/80 hover:text-primary transition-colors"
              aria-label="Close menu"
            >
              <X size={26} />
            </button>
          </div>
          <nav className="flex flex-col px-5 pt-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="py-4 font-serif text-3xl text-left text-foreground/85 hover:text-primary border-b border-primary/10 transition-colors"
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
