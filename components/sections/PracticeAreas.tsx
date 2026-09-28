'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { RevealText } from '@/components/ui/RevealText';
import { practiceAreas } from '@/lib/data';

export function PracticeAreas() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section id="practice-areas" className="bg-accent py-28 dark:bg-primary-700 sm:py-36">
      <div className="container-luxury">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <span className="eyebrow-rule text-xs uppercase tracking-[0.25em] text-gold-700 dark:text-gold-300">
              Области права
            </span>
            <RevealText
              as="h2"
              text="Свеобухватна правна подршка из једног извора."
              className="mt-6 max-w-xl font-display text-3xl leading-[1.15] text-primary balance dark:text-paper sm:text-4xl"
            />
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-primary/55 dark:text-paper/55">
            Дванаест области права у којима наш тим редовно заступа физичка и правна лица, од саветовања до
            заступања пред судом.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-sm bg-primary/10 dark:bg-paper/10 sm:grid-cols-2 lg:grid-cols-3">
          {practiceAreas.map((area, i) => {
            const Icon = area.icon;
            const isOpen = openId === area.id;
            return (
              <motion.button
                key={area.id}
                layout
                onClick={() => setOpenId(isOpen ? null : area.id)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-10%' }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                aria-expanded={isOpen}
                className="group relative flex flex-col items-start bg-paper p-8 text-left transition-colors duration-500 hover:bg-primary hover:text-paper dark:bg-ink dark:hover:bg-gold-600/90"
              >
                <div className="flex w-full items-start justify-between">
                  <Icon
                    size={26}
                    strokeWidth={1.25}
                    className="text-gold-600 transition-colors duration-500 group-hover:text-gold-200"
                  />
                  <ArrowUpRight
                    size={18}
                    className={`text-primary/30 transition-all duration-500 group-hover:text-paper/70 ${
                      isOpen ? 'rotate-45' : ''
                    }`}
                  />
                </div>
                <h3 className="mt-6 font-display text-xl text-primary transition-colors duration-500 group-hover:text-paper dark:text-paper">
                  {area.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-primary/55 transition-colors duration-500 group-hover:text-paper/75 dark:text-paper/55">
                  {area.shortDescription}
                </p>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.p
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                      className="mt-4 overflow-hidden text-sm leading-relaxed text-primary/70 group-hover:text-paper/85 dark:text-paper/70"
                    >
                      {area.longDescription}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
