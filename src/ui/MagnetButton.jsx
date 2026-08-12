import React, { useRef, useState } from "react";

export default function MagnetButton({
  children,
  href,
  onClick,
  primary = false,
  external = true,
}) {
  const ref = useRef(null);
  const [t, setT] = useState({ x: 0, y: 0 });

  function handleMove(e) {
    const r = ref.current.getBoundingClientRect();
    const mx = e.clientX - (r.left + r.width / 2);
    const my = e.clientY - (r.top + r.height / 2);
    setT({ x: mx * 0.2, y: my * 0.25 });
  }
  function reset() {
    setT({ x: 0, y: 0 });
  }

  const Comp = href ? "a" : "button";
  return (
    <Comp
      ref={ref}
      href={href}
      onClick={onClick}
      target={href && external ? "_blank" : undefined}
      rel={href && external ? "noopener noreferrer" : undefined}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className={`magnet-btn ${primary ? "magnet-btn--primary" : "magnet-btn--ghost"}`}
      style={{ transform: `translate(${t.x}px, ${t.y}px)` }}
    >
      {children}
    </Comp>
  );
}