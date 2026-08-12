import React from "react";

export default function KmMarker({ km, label, lit }) {
  return (
    <div className={`km-marker ${lit ? "km-marker--lit" : ""}`}>
      <span className="km-marker__dot" />
      <span className="km-marker__text">
        KM {km} — {label}
      </span>
    </div>
  );
}