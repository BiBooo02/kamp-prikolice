import React from "react";
import { ArrowUpRight, Phone, Mail, MapPin } from "lucide-react";
import Reveal from "../ui/Reveal";
import MagnetButton from "../ui/MagnetButton";
import KmMarker from "../ui/KmMarker";
import { AVTO_NET_SEARCH } from "../data/constants";

export default function ContactSection({ progress }) {
  return (
    <section id="kontakt" className="section-pad" style={{ background: "var(--bg-soft)" }}>
      <div className="max-w-wrap">
        <Reveal>
          <KmMarker km="099" label="CILJ POTI" lit={progress * 100 >= 97} />
          <h2 style={{ fontSize: "clamp(2rem, 4.5vw, 3.2rem)", marginBottom: "1.25rem" }}>
            Se vidimo na cesti
          </h2>
          <p style={{ color: "var(--cream-dim)", maxWidth: "50ch", marginBottom: "2.5rem", lineHeight: 1.6 }}>
            Vprašanja o posamezni prikolici, ogledu ali financiranju? Pišite
            ali pokličite — odgovorimo isti dan.
          </p>
        </Reveal>
        <Reveal delay={100}>
          <div
            style={{
              display: "grid",
              gap: "1.1rem",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              marginBottom: "3rem",
            }}
          >
            <div style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
              <Phone size={18} color="var(--amber)" />
              <span>041 / 840 - 241</span>
            </div>
            <div style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
              <Mail size={18} color="var(--amber)" />
              <span>info@kampcesta.si</span>
            </div>
            <div style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
              <MapPin size={18} color="var(--amber)" />
              <span>Ortnek 6, 1316 Ortnek</span>
            </div>
          </div>
          <MagnetButton href={AVTO_NET_SEARCH} primary>
            Poglej vse prikolice na avto.net <ArrowUpRight size={18} />
          </MagnetButton>
        </Reveal>
      </div>
    </section>
  );
}