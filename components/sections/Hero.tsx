'use client';

import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { HeroScene } from './HeroScene';
import { RevealText } from '@/components/ui/RevealText';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { buttonVariants } from '@/components/ui/Button';
import { stats } from '@/lib/data';

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-ink-gradient text-paper">
      <HeroScene />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(201,162,39,0.12),_transparent_55%)]"
        aria-hidden="true"
      />

      <div className="container-luxury relative z-10 pt-28">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="eyebrow-rule text-xs uppercase tracking-[0.25em]"
        >
          Адвокатска канцеларија Савић
        </motion.span>

        <RevealText
          as="h1"
          text="Правна сигурност заснована на знању, искуству и поверењу."
          delay={0.35}
          className="mt-8 max-w-4xl font-display text-4xl leading-[1.08] tracking-tightest text-paper balance sm:text-6xl lg:text-[4.5rem]"
        />

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 max-w-xl text-lg leading-relaxed text-paper/65"
        >
          Пружамо врхунску правну подршку физичким и правним лицима кроз
          стручан, ефикасан и индивидуалан приступ сваком случају.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.3, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center"
        >
          <MagneticButton>
            <a
              href="#contact"
              data-cursor-hover
              className={buttonVariants({ variant: 'gold', size: 'lg' })}
            >
              Закажите консултације
              <ArrowRight size={18} />
            </a>
          </MagneticButton>

          <a
            href="#contact"
            data-cursor-hover
            className={buttonVariants({
              variant: 'outline',
              size: 'lg',
              className:
                'border-paper/25 text-paper hover:border-gold hover:text-gold-200',
            })}
          >
            Контактирајте нас
          </a>
        </motion.div>

        <motion.dl
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="mt-20 grid grid-cols-3 gap-8 border-t border-paper/10 pb-16 pt-10 sm:max-w-xl"
        >
          {stats.map((stat) => (
            <div key={stat.label}>
              <dt className="sr-only">{stat.label}</dt>
              <dd className="font-display text-3xl text-gold-200 sm:text-4xl">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </dd>
              <dd className="mt-2 text-xs leading-snug text-paper/50 sm:text-sm">
                {stat.label}
              </dd>
            </div>
          ))}
        </motion.dl>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-paper/40 sm:flex"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">
          СКРОЛУЈТЕ
        </span>

        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity }}
        >
          <ChevronDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}
