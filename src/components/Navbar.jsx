import React, { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import MagnetButton from "../ui/MagnetButton";
import { AVTO_NET_SEARCH } from "../data/constants";

const LINKS = [
  { id: "zakaj-mi", label: "Zakaj mi" },
  { id: "ponudba", label: "Ponudba" },
  { id: "nakup", label: "Nakup" },
  { id: "kontakt", label: "Kontakt" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 40);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function scrollTo(id) {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
      <nav className={`kc-nav ${scrolled ? "kc-nav--scrolled" : ""}`}>
        <div className="kc-logo">
          <span className="kc-logo__mark" />
          Kamp Prikolice
        </div>

        <div className="kc-navlinks">
          {LINKS.map((l) => (
            <button key={l.id} onClick={() => scrollTo(l.id)}>
              {l.label}
            </button>
          ))}
          <MagnetButton href={AVTO_NET_SEARCH} primary>
            Prikolice na avto.net <ArrowUpRight size={17} />
          </MagnetButton>
        </div>

        <button className="kc-menu-btn" onClick={() => setMenuOpen((v) => !v)} aria-label="Meni">
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {menuOpen && (
        <div className="kc-mobile-panel">
          {LINKS.map((l) => (
            <button key={l.id} onClick={() => scrollTo(l.id)}>
              {l.label}
            </button>
          ))}
          <MagnetButton href={AVTO_NET_SEARCH} primary>
            Prikolice na avto.net <ArrowUpRight size={17} />
          </MagnetButton>
        </div>
      )}
    </>
  );
}