'use client';

import { motion } from 'framer-motion';
import { RevealText } from '@/components/ui/RevealText';
import { differentiators } from '@/lib/data';

export function WhyUs() {
  return (
    <section id="why-us" className="bg-ink py-28 text-paper sm:py-36">
      <div className="container-luxury">
        <span className="eyebrow-rule text-xs uppercase tracking-[0.25em] text-gold-300">
          Зашто ми
        </span>

        <RevealText
          as="h2"
          text="Клијенти нам верују из разлога који се осећају од првог разговора."
          className="mt-6 max-w-2xl font-display text-3xl leading-[1.15] text-paper balance sm:text-4xl"
        />

        <div className="mt-16 grid grid-cols-1 gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {differentiators.map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-10%' }}
                transition={{
                  duration: 0.6,
                  delay: (i % 3) * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="border-t border-paper/10 pt-6"
              >
                <Icon
                  size={24}
                  strokeWidth={1.25}
                  className="text-gold-300"
                />

                <h3 className="mt-5 font-display text-lg text-paper">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-paper/55">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
