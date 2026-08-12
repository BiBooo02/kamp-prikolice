import React from "react";

export default function Footer() {
  return (
    <footer style={{ padding: "2.5rem 1.5rem", borderTop: "1px solid var(--border)" }}>
      <div
        className="max-w-wrap"
        style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "space-between", alignItems: "center" }}
      >
        <div className="kc-logo" style={{ fontSize: "1.05rem" }}>
          <span className="kc-logo__mark" />
          Kamp Prikolice
        </div>
        <p className="mono" style={{ fontSize: "0.75rem", color: "var(--sage)", margin: 0 }}>
          © {new Date().getFullYear()} KAMP PRIKOLICE · PONUDBA NA AVTO.NET
        </p>
      </div>
    </footer>
  );
}