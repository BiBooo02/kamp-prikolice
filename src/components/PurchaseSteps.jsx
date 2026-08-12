import React from "react";
import Reveal from "../ui/Reveal";
import KmMarker from "../ui/KmMarker";

const STEPS = [
  { n: "01", t: "Izberete prikolico", d: "Prebrskate trenutno ponudbo na avto.net in nas kontaktirate glede tiste, ki vas zanima." },
  { n: "02", t: "Dogovorimo ogled", d: "Skupaj si vzamemo čas za ogled v živo, tudi ob vikendih, po dogovoru." },
  { n: "03", t: "Preverimo dokumentacijo", d: "Pregledamo tehnično brezhibnost, dokumentacijo in stanje opreme skupaj z vami." },
  { n: "04", t: "Prevzem ključev", d: "Podpišemo pogodbo, uredimo prenos in prikolica je pripravljena za pot." },
];

export default function PurchaseSteps({ progress }) {
  return (
    <section id="nakup" className="section-pad">
      <div className="max-w-wrap">
        <Reveal>
          <KmMarker km="076" label="NAKUP" lit={progress * 100 >= 68} />
          <h2 style={{ fontSize: "clamp(2rem, 4.5vw, 3.2rem)", marginBottom: "3rem" }}>
            Kako poteka nakup
          </h2>
        </Reveal>

        <div style={{ display: "grid", gap: "1.25rem" }}>
          {STEPS.map((step, i) => (
            <Reveal key={step.n} delay={i * 80}>
              <div
                style={{
                  display: "flex",
                  gap: "1.5rem",
                  alignItems: "flex-start",
                  padding: "1.5rem 0",
                  borderBottom: i < STEPS.length - 1 ? "1px solid var(--border)" : "none",
                }}
              >
                <span className="display" style={{ fontSize: "1.6rem", color: "var(--amber-dim)", minWidth: "3ch" }}>
                  {step.n}
                </span>
                <div>
                  <h3
                    style={{
                      fontSize: "1.15rem",
                      textTransform: "none",
                      letterSpacing: "normal",
                      fontFamily: "'Work Sans', sans-serif",
                      fontWeight: 700,
                      margin: "0 0 0.35rem",
                    }}
                  >
                    {step.t}
                  </h3>
                  <p style={{ color: "var(--cream-dim)", margin: 0, lineHeight: 1.6, maxWidth: "55ch" }}>{step.d}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}