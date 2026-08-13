import { useEffect, useState } from "react";

export function useScrollProgress(ref) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const el = ref.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Koliko je element "prepotoval" skozi viewport, od 0 (šele prišel) do 1 (v celoti minil)
      const total = rect.height - viewportHeight;
      const scrolled = -rect.top;

      let value = total > 0 ? scrolled / total : 0;
      value = Math.min(1, Math.max(0, value));

      setProgress(value);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [ref]);

  return progress;
}