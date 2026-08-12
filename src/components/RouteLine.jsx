import React from "react";
import { ROUTE_STOPS } from "../data/constants";

// Dekorativna "cestna" črta, ki po scrollu spremlja napredek skozi sekcije.
export default function RouteLine({ progress }) {
  return (
    <div className="route-line" aria-hidden="true">
      <div className="route-line__fill" style={{ height: `${progress * 100}%` }} />
      {ROUTE_STOPS.map((s) => (
        <div
          key={s.km}
          className={`route-stop ${progress * 100 >= s.pct ? "route-stop--lit" : ""}`}
          style={{ top: `${s.pct}%` }}
        />
      ))}
    </div>
  );
}