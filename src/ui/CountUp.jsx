import React, { useEffect, useRef, useState } from "react";

export default function CountUp({ end, suffix = "" }) {
  const ref = useRef(null);
  const started = useRef(false);
  const [val, setVal] = useState(0);

  useEffect(() => {
    const el = ref.current;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const duration = 1300;
          function tick(now) {
            const p = Math.min((now - start) / duration, 1);
            setVal(Math.floor(p * end));
            if (p < 1) requestAnimationFrame(tick);
            else setVal(end);
          }
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 }
    );
    if (el) obs.observe(el);
    return () => obs.disconnect();
  }, [end]);

  return (
    <span ref={ref}>
      {val}
      {suffix}
    </span>
  );
}