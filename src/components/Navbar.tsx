import { useEffect, useRef, useState } from "react";
import { Moon, Sun } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Journey", href: "#academics" },
  { label: "Resume", href: "#resume" },
  { label: "Hackathons", href: "#hackathons" },
  { label: "Certs", href: "#certifications" },
  { label: "Agile", href: "#agile" },
  { label: "Reflections", href: "#reflections" },
  { label: "Contact", href: "#contact" },
];

const useSASTClock = () => {
  const [time, setTime] = useState("");
  useEffect(() => {
    const fmt = () =>
      new Date().toLocaleTimeString("en-ZA", {
        timeZone: "Africa/Johannesburg",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      });
    setTime(fmt());
    const id = setInterval(() => setTime(fmt()), 1000);
    return () => clearInterval(id);
  }, []);
  return time;
};

const Navbar = () => {
  const [visible, setVisible] = useState(true);
  const [isLight, setIsLight] = useState(false);
  const lastScroll = useRef(0);
  const time = useSASTClock();

  useEffect(() => {
    const onScroll = () => {
      const curr = window.scrollY;
      setVisible(curr < 100 || curr < lastScroll.current);
      lastScroll.current = curr;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleTheme = () => {
    setIsLight((p) => {
      document.documentElement.classList.toggle("light", !p);
      return !p;
    });
  };

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 transition-transform duration-300 ${visible ? "translate-y-0" : "-translate-y-full"}`}
      style={{ backdropFilter: "blur(12px)", backgroundColor: "hsl(var(--background) / 0.85)" }}
    >
      <div className="font-display text-2xl text-accent tracking-wider cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
        Hlomla Magopeni
      </div>
      <div className="hidden md:flex gap-6">
        {navLinks.map((l) => (
          <button key={l.href} onClick={() => scrollTo(l.href)} className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors tracking-wide uppercase">
            {l.label}
          </button>
        ))}
      </div>
      <div className="flex items-center gap-3">
        {time && (
          <span className="hidden md:block font-body text-[11px] text-muted-foreground/60 tracking-widest tabular-nums">
            {time} SAST
          </span>
        )}
        <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-secondary transition-colors" aria-label="Toggle theme">
          {isLight ? <Moon size={18} /> : <Sun size={18} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
