import { useEffect, useRef } from "react";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

const resolveColor = (color: string) => {
  if (color.startsWith("var(")) {
    const name = color.replace(/var\((--[^,)]+).*/, "$1").trim();
    return getComputedStyle(document.documentElement).getPropertyValue(name).trim() || color;
  }
  return color;
};

export default function ParallaxNodes({
  density = 45,
  linkDistance = 130,
  speed = 0.15,
  parallaxStrength = 0.15,
  nodeColor = "var(--color-cyan-ink)",
  lineColor = "var(--color-border)",
}: {
  density?: number;
  linkDistance?: number;
  speed?: number;
  parallaxStrength?: number;
  nodeColor?: string;
  lineColor?: string;
}) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const nodesRef = useRef<Node[]>([]);
  const rafRef = useRef<number | null>(null);
  const scrollOffsetRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrapper = wrapperRef.current;
    if (!canvas || !wrapper) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;

    const resize = () => {
      const rect = wrapper.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = width;
      canvas.height = height;

      const count = Math.max(12, Math.round((width * height) / (1000000 / density)));
      nodesRef.current = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * speed,
        vy: (Math.random() - 0.5) * speed,
      }));
    };

    const onScroll = () => {
      const top = wrapper.getBoundingClientRect().top;
      scrollOffsetRef.current = -top * parallaxStrength;
    };

    const draw = () => {
      if (!ctx) return;
      const dot = resolveColor(nodeColor);
      const line = resolveColor(lineColor);
      ctx.clearRect(0, 0, width, height);
      ctx.save();
      ctx.translate(0, scrollOffsetRef.current % height);

      const nodes = nodesRef.current;
      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;
      }

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.hypot(dx, dy);
          if (dist < linkDistance) {
            ctx.globalAlpha = 1 - dist / linkDistance;
            ctx.strokeStyle = line;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      ctx.globalAlpha = 0.8;
      ctx.fillStyle = dot;
      for (const n of nodes) {
        ctx.beginPath();
        ctx.arc(n.x, n.y, 2, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.restore();
      rafRef.current = requestAnimationFrame(draw);
    };

    const ro = new ResizeObserver(resize);
    ro.observe(wrapper);
    resize();

    let isVisible = false;
    const io = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
        if (isVisible && rafRef.current === null) rafRef.current = requestAnimationFrame(draw);
        if (!isVisible && rafRef.current !== null) {
          cancelAnimationFrame(rafRef.current);
          rafRef.current = null;
        }
      },
      { threshold: 0 }
    );
    io.observe(wrapper);

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      ro.disconnect();
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, [density, linkDistance, speed, parallaxStrength, nodeColor, lineColor]);

  return (
    <div ref={wrapperRef} aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <canvas ref={canvasRef} className="block h-full w-full" />
    </div>
  );
}