'use client';

import { RevealText } from '@/components/ui/RevealText';
import { Accordion } from '@/components/ui/Accordion';
import { faqItems } from '@/lib/data';

export function FAQ() {
  return (
    <section id="faq" className="bg-paper py-28 dark:bg-ink sm:py-36">
      <div className="container-luxury grid grid-cols-1 gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
        <div>
          <span className="eyebrow-rule text-xs uppercase tracking-[0.25em] text-gold-700 dark:text-gold-300">
            Pitanja
          </span>
          <RevealText
            as="h2"
            text="Odgovori na pitanja koja nam klijenti najčešće postavljaju."
            className="mt-6 max-w-sm font-display text-3xl leading-[1.15] text-primary balance dark:text-paper sm:text-4xl"
          />
        </div>
        <Accordion items={faqItems} />
      </div>
    </section>
  );
}
