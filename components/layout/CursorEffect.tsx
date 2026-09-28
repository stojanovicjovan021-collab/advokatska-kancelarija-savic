'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export function CursorEffect() {
  const [isEnabled, setIsEnabled] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 500, damping: 40, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 500, damping: 40, mass: 0.4 });

  useEffect(() => {
    const isFinePointer = window.matchMedia('(pointer: fine)').matches;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!isFinePointer || reduceMotion) return;
    setIsEnabled(true);

    function handleMove(e: MouseEvent) {
      x.set(e.clientX);
      y.set(e.clientY);
      const target = e.target as HTMLElement;
      setIsHovering(Boolean(target.closest('a, button, [data-cursor-hover]')));
    }

    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, [x, y]);

  if (!isEnabled) return null;

  return (
    <motion.div
      style={{ left: springX, top: springY }}
      animate={{ scale: isHovering ? 2.2 : 1 }}
      transition={{ scale: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } }}
      className="pointer-events-none fixed z-[70] h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full border border-gold mix-blend-difference"
      aria-hidden="true"
    />
  );
}
