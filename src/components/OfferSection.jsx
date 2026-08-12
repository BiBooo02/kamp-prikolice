import React from "react";
import { ArrowUpRight } from "lucide-react";
import Reveal from "../ui/Reveal";
import ShinyText from "../ui/ShinyText";
import MagnetButton from "../ui/MagnetButton";
import CountUp from "../ui/CountUp";
import KmMarker from "../ui/KmMarker";
import { AVTO_NET_SEARCH } from "../data/constants";
import adriaImg from "../assets/adria.png";

const STATS = [
  { end: 12, suffix: "+", label: "let izkušenj" },
  { end: 300, suffix: "+", label: "prodanih prikolic" },
  { end: 4.9, suffix: "", label: "povprečna ocena kupcev", decimal: true },
];

export default function OfferSection({ progress }) {
  return (
    <section id="ponudba" className="offer-section">
      <div className="offer-section__content">
        <Reveal>
          <KmMarker km="048" label="PONUDBA" lit={progress * 100 >= 36} />
          <h2 style={{ fontSize: "clamp(2rem, 4.5vw, 3.2rem)", marginBottom: "1.25rem", maxWidth: "16ch" }}>
            Celotna ponudba je na <ShinyText as="span">avto.net</ShinyText>
          </h2>
          <p style={{ color: "var(--cream-dim)", maxWidth: "56ch", marginBottom: "2.5rem", lineHeight: 1.6, fontSize: "1.05rem" }}>
            Vse trenutno razpoložljive prikolice objavljamo sproti na avto.net,
            kjer lahko filtrirate po znamki, letniku, ceni in si ogledate vse
            fotografije ter opremo posamezne prikolice.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
            <MagnetButton href={AVTO_NET_SEARCH} primary>
              Odpri ponudbo na avto.net <ArrowUpRight size={18} />
            </MagnetButton>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="offer-section__stats">
            {STATS.map((s) => (
              <div key={s.label}>
                <div className="display" style={{ fontSize: "2.4rem", color: "var(--amber)" }}>
                  {s.decimal ? "4.9" : <CountUp end={s.end} suffix={s.suffix} />}
                </div>
                <div className="mono" style={{ fontSize: "0.78rem", color: "var(--sage)", letterSpacing: "0.06em" }}>
                  {s.label.toUpperCase()}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      <div className="offer-section__media">
        <img src={adriaImg} alt="Adria prikolica" />
      </div>
    </section>
  );
}