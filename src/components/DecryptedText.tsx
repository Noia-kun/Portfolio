import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

interface DecryptedTextProps {
  text: string;
  speed?: number;
  maxIterations?: number;
  sequential?: boolean;
  revealDirection?: 'start' | 'end' | 'center';
  useOriginalCharsOnly?: boolean;
  characters?: string;
  className?: string;
  parentClassName?: string;
  encryptedClassName?: string;
  animateOn?: 'view' | 'hover';
  enableHoverEffect?: boolean;
}

export default function DecryptedText({
  text,
  speed = 50,
  maxIterations = 10,
  sequential = false,
  revealDirection = 'start',
  useOriginalCharsOnly = false,
  characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+',
  className = '',
  parentClassName = '',
  encryptedClassName = '',
  animateOn = 'view',
  enableHoverEffect = false,
}: DecryptedTextProps) {
  const [displayText, setDisplayText] = useState(text);
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLSpanElement>(null);

  const getNextChar = (originalChar: string) => {
    if (originalChar === ' ') return ' ';
    if (useOriginalCharsOnly) {
      const chars = text.replace(/\s/g, '');
      return chars[Math.floor(Math.random() * chars.length)];
    }
    return characters[Math.floor(Math.random() * characters.length)];
  };

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    let currentIteration = 0;

    const startDecrypt = () => {
      currentIteration = 0;
      interval = setInterval(() => {
        setDisplayText(() => {
          return text
            .split('')
            .map((char, index) => {
              if (char === ' ') return ' ';

              let shouldReveal = false;
              const totalLen = text.length;

              if (sequential) {
                if (revealDirection === 'start') {
                  shouldReveal = index < (currentIteration / maxIterations) * totalLen;
                } else if (revealDirection === 'end') {
                  shouldReveal = index >= totalLen - (currentIteration / maxIterations) * totalLen;
                } else if (revealDirection === 'center') {
                  const center = totalLen / 2;
                  const progress = (currentIteration / maxIterations) * center;
                  shouldReveal = Math.abs(index - center) <= progress;
                }
              } else {
                shouldReveal = currentIteration >= maxIterations;
              }

              if (shouldReveal) return char;
              return getNextChar(char);
            })
            .join('');
        });

        currentIteration++;
        if (currentIteration > maxIterations) {
          clearInterval(interval);
          setDisplayText(text);
        }
      }, speed);
    };

    if (animateOn === 'view') {
      startDecrypt();
    } else if (animateOn === 'hover' && isHovered) {
      startDecrypt();
    }

    return () => clearInterval(interval);
  }, [text, speed, maxIterations, sequential, revealDirection, animateOn, isHovered]);

  return (
    <motion.span
      ref={containerRef}
      className={`inline ${parentClassName}`}
      onMouseEnter={() => enableHoverEffect && setIsHovered(true)}
      onMouseLeave={() => enableHoverEffect && setIsHovered(false)}
    >
      <span className={displayText === text ? className : (encryptedClassName || className)}>
        {displayText}
      </span>
    </motion.span>
  );
}