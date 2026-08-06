import type { ReactNode } from "react";
import { useInView } from "../hooks/useInView";

export default function RevealOnScroll({ children }: { children: ReactNode }) {
  const { ref, isInView } = useInView();

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
      isInView ? "translate-y-0 opacity-100" : "translate-y-[24px] opacity-0"
      }`}>
      {children}
    </div>
  );
}