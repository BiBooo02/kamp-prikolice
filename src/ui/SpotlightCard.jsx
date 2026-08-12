import React, { useRef, useState } from "react";

export default function SpotlightCard({ children, className = "" }) {
  const ref = useRef(null);
  const [pos, setPos] = useState({ x: 50, y: 30 });

  function handleMove(e) {
    const r = ref.current.getBoundingClientRect();
    setPos({
      x: ((e.clientX - r.left) / r.width) * 100,
      y: ((e.clientY - r.top) / r.height) * 100,
    });
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      className={`spotlight-card ${className}`}
      style={{ "--x": `${pos.x}%`, "--y": `${pos.y}%` }}
    >
      {children}
    </div>
  );
}