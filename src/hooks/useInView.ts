import { useEffect, useRef, useState } from "react";

export function useInView(enterThreshold = 0.65, exitThreshold = 0.5) {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const isInViewRef = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const thresholds = [...new Set([0, exitThreshold, enterThreshold, 1])].sort((a, b) => a - b);

    const observer = new IntersectionObserver(
      ([entry]) => {
        const ratio = entry.intersectionRatio;

        if (!isInViewRef.current && ratio >= enterThreshold) {
          isInViewRef.current = true;
          setIsInView(true);
        } else if (isInViewRef.current && ratio <= exitThreshold) {
          isInViewRef.current = false;
          setIsInView(false);
        }
      },
      { threshold: thresholds }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [enterThreshold, exitThreshold]);

  return { ref, isInView };
}