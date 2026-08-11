import type { ReactNode } from "react";
import { useInView } from "../hooks/useInView";

type Direction = "left" | "right" | "up";

export default function RevealOnScroll({
  children,
  direction = "up",
  threshold = 0.15,
  rootMargin = "-64px 0px -10% 0px",
  once = true,
}: {
  children: ReactNode;
  direction?: Direction;
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
}) {
  const { ref, isInView } = useInView(threshold, rootMargin, once);

  const hiddenTransform =
    direction === "left"
      ? "translate-y-[24px] md:-translate-x-[40px] md:translate-y-0"
      : direction === "right"
      ? "translate-y-[24px] md:translate-x-[40px] md:translate-y-0"
      : "translate-y-[24px]";

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isInView
          ? "translate-x-0 translate-y-0 opacity-100 blur-none"
          : `${hiddenTransform} opacity-0 blur-sm`
      }`}>
      {children}
    </div>
  );
}
