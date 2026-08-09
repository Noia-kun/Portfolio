import type { ReactNode } from "react";
import { useInView } from "../hooks/useInView";

type Direction = "left" | "right" | "up";

export default function RevealOnScroll({
  children,
  direction = "up",
  enterThreshold = 0.65,
  exitThreshold = 0.5,
}: {
  children: ReactNode;
  direction?: Direction;
  enterThreshold?: number;
  exitThreshold?: number;
}) {
  const { ref, isInView } = useInView(enterThreshold, exitThreshold);

  const hiddenTransform =
    direction === "left"
      ? "-translate-x-[40px]"
      : direction === "right"
      ? "translate-x-[40px]"
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