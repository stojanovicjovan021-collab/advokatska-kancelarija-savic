'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { RevealText } from '@/components/ui/RevealText';
import { testimonials } from '@/lib/data';

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setDirection(1);
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused]);

  function go(step: number) {
    setDirection(step);
    setIndex((prev) => (prev + step + testimonials.length) % testimonials.length);
  }

  const current = testimonials[index];

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-ink-gradient py-28 text-paper sm:py-36"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(201,162,39,0.14),_transparent_50%)]"
        aria-hidden="true"
      />
      <div className="container-luxury relative">
        <span className="eyebrow-rule text-xs uppercase tracking-[0.25em] text-gold-300">Iskustva klijenata</span>
        <RevealText
          as="h2"
          text="Reč klijenata govori više od bilo kog obećanja."
          className="mt-6 max-w-xl font-display text-3xl leading-[1.15] text-paper balance sm:text-4xl"
        />

        <div
          className="relative mt-16 flex justify-center"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="relative w-full max-w-2xl">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.figure
                key={current.id}
                custom={direction}
                initial={{ opacity: 0, x: 40 * direction }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 * direction }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-sm border border-paper/15 bg-paper/[0.06] p-10 backdrop-blur-xl sm:p-14"
              >
                <div className="flex gap-1 text-gold-300" aria-hidden="true">
                  {Array.from({ length: current.rating }).map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
                <blockquote className="mt-6 font-display text-xl leading-relaxed text-paper/90 balance sm:text-2xl">
                  „{current.quote}“
                </blockquote>
                <figcaption className="mt-8">
                  <div className="font-medium text-paper">{current.name}</div>
                  <div className="text-sm text-paper/50">{current.role}</div>
                </figcaption>
              </motion.figure>
            </AnimatePresence>

            <div className="mt-8 flex items-center justify-center gap-6">
              <button
                onClick={() => go(-1)}
                aria-label="Prethodna izjava"
                data-cursor-hover
                className="flex h-11 w-11 items-center justify-center rounded-full border border-paper/20 transition-colors hover:border-gold hover:text-gold-200"
              >
                <ChevronLeft size={18} />
              </button>
              <div className="flex gap-2">
                {testimonials.map((t, i) => (
                  <button
                    key={t.id}
                    onClick={() => {
                      setDirection(i > index ? 1 : -1);
                      setIndex(i);
                    }}
                    aria-label={`Prikaži izjavu ${i + 1}`}
                    className={`h-1.5 rounded-full transition-all duration-500 ${
                      i === index ? 'w-8 bg-gold' : 'w-1.5 bg-paper/25'
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={() => go(1)}
                aria-label="Sledeća izjava"
                data-cursor-hover
                className="flex h-11 w-11 items-center justify-center rounded-full border border-paper/20 transition-colors hover:border-gold hover:text-gold-200"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
