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
      className={`animate-orbit-3d absolute left-1/2 top-1/2 pointer-events-none -translate-x-1/2 -translate-y-1/2 ${className}`}
      style={{
        animationDuration: `${duration}s`,
        animationDelay: `${delay}s`,
      }}
    >
      <div className="soap-bubble">
        {/* Iridescent Refraction Sheen Layers */}
        <span className="sheen-blue" />
        <span className="sheen-pink" />
        <span className="sheen-yellow" />
        <span className="sheen-white" />

        {/* The Icon inside the bubble */}
        <div className="relative z-20 flex items-center justify-center p-1.5">
          {children}
        </div>
      </div>
    </div>
  );
}