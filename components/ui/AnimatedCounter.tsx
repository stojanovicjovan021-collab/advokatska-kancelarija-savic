'use client';

import { useEffect, useRef } from 'react';
import { animate, motion, useInView, useMotionValue, useTransform } from 'framer-motion';
import { formatCounter } from '@/lib/utils';

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  className?: string;
}

export function AnimatedCounter({ value, suffix = '', className }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-10% 0px' });
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (latest) => formatCounter(Math.round(latest)));

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(motionValue, value, {
      duration: 2,
      ease: [0.22, 1, 0.36, 1],
    });
    return controls.stop;
  }, [isInView, motionValue, value]);

  return (
    <span ref={ref} className={className}>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}
