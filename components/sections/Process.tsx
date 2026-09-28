'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { RevealText } from '@/components/ui/RevealText';
import { processSteps } from '@/lib/data';

export function Process() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 70%', 'end 40%'],
  });

  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="process" ref={sectionRef} className="bg-paper py-28 dark:bg-ink sm:py-36">
      <div className="container-luxury">
        <span className="eyebrow-rule text-xs uppercase tracking-[0.25em] text-gold-700 dark:text-gold-300">
          Процес
        </span>

        <RevealText
          as="h2"
          text="Јасан пут од прве консултације до решења."
          className="mt-6 max-w-xl font-display text-3xl leading-[1.15] text-primary balance dark:text-paper sm:text-4xl"
        />

        <div className="relative mt-20">
          <div className="absolute left-0 right-0 top-5 hidden h-px bg-primary/10 dark:bg-paper/10 lg:block" />

          <motion.div
            style={{ scaleX: lineScale }}
            className="absolute left-0 right-0 top-5 hidden h-px origin-left bg-gold-gradient lg:block"
          />

          <ol className="grid grid-cols-1 gap-10 lg:grid-cols-5 lg:gap-6">
            {processSteps.map((step, i) => (
              <motion.li
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-15%' }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative pl-0 lg:pl-0"
              >
                <span className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-gold bg-paper font-display text-sm text-gold-700 dark:bg-ink dark:text-gold-200">
                  {step.number}
                </span>

                <h3 className="mt-5 font-display text-lg text-primary dark:text-paper">
                  {step.title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-primary/55 dark:text-paper/55">
                  {step.description}
                </p>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
