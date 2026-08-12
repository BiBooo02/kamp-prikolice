import React, { useRef } from "react";

export default function Particles({ count = 22 }) {
  const particles = useRef(
    Array.from({ length: count }).map(() => ({
      left: Math.random() * 100,
      delay: Math.random() * 12,
      duration: 10 + Math.random() * 12,
      size: 2 + Math.random() * 3,
      drift: (Math.random() - 0.5) * 60,
    }))
  ).current;

  return (
    <div className="particles" aria-hidden="true">
      {particles.map((p, i) => (
        <span
          key={i}
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            "--drift": `${p.drift}px`,
          }}
        />
      ))}
    </div>
  );
}