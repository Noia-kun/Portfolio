import { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';

interface TrueFocusProps {
  sentence?: string;
  separator?: string;
  blurAmount?: number;
  borderColor?: string;
  glowColor?: string;
  animationDuration?: number;
  pauseBetweenAnimations?: number;
  // Target indices that the focus box will jump/move between
  targetIndices?: number[];
}

interface FocusRect {
  x: number;
  y: number;
  width: number;
  height: number;
}

const TrueFocus: React.FC<TrueFocusProps> = ({
  sentence = 'RR but you can call me NoiA',
  separator = ' ',
  blurAmount = 3,
  borderColor = 'var(--color-cyan)',
  glowColor = 'var(--color-cyan-glow)',
  animationDuration = 0.6,
  pauseBetweenAnimations = 1.2,
  targetIndices = [0, 6] // Default: index 0 ("RR") and index 6 ("NoiA")
}) => {
  const words = sentence.split(separator);
  const [targetStep, setTargetStep] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const wordRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const [focusRect, setFocusRect] = useState<FocusRect>({ x: 0, y: 0, width: 0, height: 0 });

  const currentIndex = targetIndices[targetStep];

  useEffect(() => {
    const interval = setInterval(
      () => {
        setTargetStep(prev => (prev + 1) % targetIndices.length);
      },
      (animationDuration + pauseBetweenAnimations) * 1000
    );

    return () => clearInterval(interval);
  }, [animationDuration, pauseBetweenAnimations, targetIndices.length]);

  useEffect(() => {
    if (currentIndex === undefined || !wordRefs.current[currentIndex] || !containerRef.current) return;

    const parentRect = containerRef.current.getBoundingClientRect();
    const activeRect = wordRefs.current[currentIndex]!.getBoundingClientRect();

    setFocusRect({
      x: activeRect.left - parentRect.left,
      y: activeRect.top - parentRect.top,
      width: activeRect.width,
      height: activeRect.height
    });
  }, [currentIndex]);

  return (
    <div
      className="relative flex gap-1.5 justify-start items-center flex-wrap inline-flex"
      ref={containerRef}
      style={{ outline: 'none', userSelect: 'none' }}
    >
      {words.map((word, index) => {
        const isTarget = targetIndices.includes(index);
        const isActive = index === currentIndex;

        return (
        <span
            key={index}
            ref={el => {
            wordRefs.current[index] = el;
            }}
            className={`relative cursor-pointer transition-all text-[var(--color-text-primary)] ${
            isTarget ? 'font-bold' : 'font-medium'
            }`}
            style={{
            filter: isTarget ? (isActive ? 'blur(0px)' : `blur(${blurAmount}px)`) : 'blur(0px)',
            transition: `filter ${animationDuration}s ease`,
            outline: 'none',
            userSelect: 'none'
            }}
        >
            {word}
        </span>
        );
      })}

      {/* Focus Box */}
      <motion.div
        className="absolute top-0 left-0 pointer-events-none box-border border-0"
        animate={{
          x: focusRect.x,
          y: focusRect.y,
          width: focusRect.width,
          height: focusRect.height,
          opacity: 1
        }}
        transition={{
          duration: animationDuration,
          ease: 'easeInOut'
        }}
        style={{
          '--border-color': borderColor,
          '--glow-color': glowColor
        } as React.CSSProperties}
      >
        <span
          className="absolute w-2.5 h-2.5 border-[2px] rounded-[2px] top-[-4px] left-[-4px] border-r-0 border-b-0"
          style={{
            borderColor: 'var(--border-color)',
            filter: 'drop-shadow(0 0 4px var(--border-color))'
          }}
        />
        <span
          className="absolute w-2.5 h-2.5 border-[2px] rounded-[2px] top-[-4px] right-[-4px] border-l-0 border-b-0"
          style={{
            borderColor: 'var(--border-color)',
            filter: 'drop-shadow(0 0 4px var(--border-color))'
          }}
        />
        <span
          className="absolute w-2.5 h-2.5 border-[2px] rounded-[2px] bottom-[-4px] left-[-4px] border-r-0 border-t-0"
          style={{
            borderColor: 'var(--border-color)',
            filter: 'drop-shadow(0 0 4px var(--border-color))'
          }}
        />
        <span
          className="absolute w-2.5 h-2.5 border-[2px] rounded-[2px] bottom-[-4px] right-[-4px] border-l-0 border-t-0"
          style={{
            borderColor: 'var(--border-color)',
            filter: 'drop-shadow(0 0 4px var(--border-color))'
          }}
        />
      </motion.div>
    </div>
  );
};

export default TrueFocus;