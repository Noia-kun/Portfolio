import React from "react";

interface OrbitingIconProps {
  children: React.ReactNode;
  duration?: number;
  index: number;
  total: number;
  className?: string;
}

export function OrbitingIcon({
  children,
  duration = 20,
  index,
  total,
  className = "",
}: OrbitingIconProps) {
  const delay = -((index / total) * duration);

  return (
    <div
      className={`animate-orbit-3d absolute left-1/2 top-1/2 flex h-[40px] w-[40px] -translate-x-1/2 -translate-y-1/2 cursor-pointer items-center justify-center rounded-[var(--radius-cards)] border border-[var(--color-border)] bg-[var(--color-carbon)] shadow-xl transition-colors hover:border-[var(--color-cyan)] md:h-[48px] md:w-[48px] ${className}`}
      style={{
        animationDuration: `${duration}s`,
        animationDelay: `${delay}s`,
      }}
    >
      {children}
    </div>
  );
}