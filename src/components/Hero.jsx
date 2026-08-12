import React from "react";
import { ArrowUpRight } from "lucide-react";
import ShinyText from "../ui/ShinyText";
import MagnetButton from "../ui/MagnetButton";
import Particles from "../ui/Particles";
import { AVTO_NET_SEARCH, HERO_PLACEHOLDER_IMG } from "../data/constants";

export default function Hero() {
  function scrollTo(id) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <header className="hero" style={{ backgroundImage: `url(${HERO_PLACEHOLDER_IMG})` }}>
      <Particles />
      <div className="hero-inner">
        <div className="hero-eyebrow mono">KM 000 — ZAČETEK POTI</div>
        <h1>
          Dom na kolesih
          <br />
          <ShinyText>za vsako pot.</ShinyText>
        </h1>
        <p className="lead">
          Skrbno pregledane kamp prikolice, pripravljene na naslednjo
          pustolovščino. Celotno ponudbo sproti objavljamo na avto.net —
          vedno ažurno, s slikami in vsemi podatki.
        </p>
        <div className="hero-ctas">
          <MagnetButton href={AVTO_NET_SEARCH} primary>
            Oglejte si ponudbo <ArrowUpRight size={18} />
          </MagnetButton>
          <MagnetButton onClick={() => scrollTo("zakaj-mi")} external={false}>
            Zakaj kupiti pri nas
          </MagnetButton>
        </div>
      </div>
    </header>
  );
}