import React from "react";
import { Check } from "lucide-react";
import Reveal from "../ui/Reveal";
import SpotlightCard from "../ui/SpotlightCard";
import KmMarker from "../ui/KmMarker";

const FEATURES = [
  {
    title: "Preverjeno stanje",
    text: "Vsako prikolico pred objavo tehnično in vizualno pregledamo. Brez skritih napak, brez presenečenj ob prevzemu.",
  },
  {
    title: "Jasna cena",
    text: "Cena na oglasu je končna cena. Brez doplačil na koncu in brez skritih stroškov po dogovoru.",
  },
  {
    title: "Svetovanje po meri",
    text: "Pomagamo izbrati pravo velikost, težo in opremo glede na vaš avto in način potovanja.",
  },
];

export default function WhySection({ progress }) {
  return (
    <section id="zakaj-mi" className="section-pad">
      <div className="max-w-wrap">
        <Reveal>
          <KmMarker km="015" label="ZAKAJ MI" lit={progress * 100 >= 4} />
          <h2 style={{ fontSize: "clamp(2rem, 4.5vw, 3.2rem)", marginBottom: "1rem" }}>
            Zakaj kupiti prikolico&nbsp;pri&nbsp;nas
          </h2>
          <p style={{ color: "var(--cream-dim)", maxWidth: "58ch", marginBottom: "3rem", lineHeight: 1.6 }}>
            Vsaka prikolica gre skozi isti postopek, preden pristane na oglasu — brez izjem.
          </p>
        </Reveal>

        <div style={{ display: "grid", gap: "1.5rem", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
          {FEATURES.map((f, i) => (
            <Reveal key={f.title} delay={i * 90}>
              <SpotlightCard>
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 10,
                    background: "var(--panel-2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "1.25rem",
                  }}
                >
                  <Check size={20} color="var(--amber)" />
                </div>
                <h3
                  style={{
                    fontSize: "1.4rem",
                    marginBottom: "0.6rem",
                    textTransform: "none",
                    letterSpacing: "normal",
                    fontFamily: "'Work Sans', sans-serif",
                    fontWeight: 700,
                  }}
                >
                  {f.title}
                </h3>
                <p style={{ color: "var(--cream-dim)", lineHeight: 1.6, margin: 0 }}>{f.text}</p>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}