import { useEffect, useState } from "react";

/**
 * Sledi napredku scrolla skozi element (0 -> 1) glede na to, kdaj vstopi
 * in izstopi iz vidnega polja. Uporablja ga RouteLine za animacijo.
 */
export function useScrollProgress(ref) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function onScroll() {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const total = rect.height + vh * 0.6;
      const passed = vh * 0.75 - rect.top;
      const pct = Math.min(Math.max(passed / total, 0), 1);
      setProgress(pct);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [ref]);

  return progress;
}