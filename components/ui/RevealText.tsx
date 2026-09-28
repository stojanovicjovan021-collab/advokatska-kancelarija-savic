'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface RevealTextProps {
  text: string;
  as?: 'h1' | 'h2' | 'h3' | 'p';
  className?: string;
  delay?: number;
  once?: boolean;
}

const container = {
  hidden: {},
  visible: (delay: number) => ({
    transition: { staggerChildren: 0.045, delayChildren: delay },
  }),
};

const word = {
  hidden: { y: '110%', opacity: 0 },
  visible: {
    y: '0%',
    opacity: 1,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
};

export function RevealText({ text, as = 'h2', className, delay = 0, once = true }: RevealTextProps) {
  const Tag = motion[as];
  const words = text.split(' ');

  return (
    <Tag
      className={cn('flex flex-wrap', className)}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: '-10% 0px -10% 0px' }}
      custom={delay}
    >
      {words.map((w, i) => (
        <span key={i} className="overflow-hidden pb-1 pr-[0.28em]">
          <motion.span className="inline-block" variants={word}>
            {w}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
