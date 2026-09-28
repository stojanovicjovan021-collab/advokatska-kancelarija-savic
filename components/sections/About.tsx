'use client';

import { motion } from 'framer-motion';
import { Scale } from 'lucide-react';
import { RevealText } from '@/components/ui/RevealText';
import { values } from '@/lib/data';

const milestones = [
  { label: 'Оснивање канцеларије', description: 'Канцеларија почиње са радом уз јасну посвећеност струци.' },
  { label: 'Првих 100 решених предмета', description: 'Изграђен је поверљив однос са првим генерацијама клијената.' },
  { label: 'Проширење тима', description: 'Специјализација за привредно, банкарско и радно право.' },
  { label: 'Преко 1000 предмета', description: 'Континуитет поверења клијената из целе Србије.' },
];

export function About() {
  return (
    <section id="about" className="bg-paper py-28 dark:bg-ink sm:py-36">
      <div className="container-luxury grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
        <div className="order-2 lg:order-1">
          <span className="eyebrow-rule text-xs uppercase tracking-[0.25em] text-gold-700 dark:text-gold-300">
            О нама
          </span>

          <RevealText
            as="h2"
            text="Адвокатура која се мери резултатима, не обећањима."
            className="mt-6 max-w-lg font-display text-3xl leading-[1.15] text-primary balance dark:text-paper sm:text-4xl"
          />

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 max-w-lg text-base leading-relaxed text-primary/65 dark:text-paper/65"
          >
            Више од једне деценије градимо поверење кроз предане предмете и прецизну правну аргументацију. Наш тим
            спаја теоријско знање са практичним искуством, како би сваки клијент добио стратегију која одговара
            његовој конкретној ситуацији.
          </motion.p>

          <ul className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {values.map((value, i) => (
              <motion.li
                key={value.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="border-l-2 border-gold/40 pl-4"
              >
                <h3 className="font-display text-lg text-primary dark:text-paper">
                  {value.title}
                </h3>

                <p className="mt-1 text-sm leading-relaxed text-primary/55 dark:text-paper/55">
                  {value.description}
                </p>
              </motion.li>
            ))}
          </ul>
        </div>

        <div className="order-1 flex flex-col gap-10 lg:order-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative aspect-[4/5] overflow-hidden rounded-sm bg-ink-gradient shadow-deep"
          >
            <div
              className="absolute inset-0 opacity-40"
              style={{
                backgroundImage:
                  'radial-gradient(circle at 30% 20%, rgba(201,162,39,0.35), transparent 55%)',
              }}
            />

            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-paper/70">
              <Scale size={40} strokeWidth={1} className="text-gold-300" />
              <span className="font-display text-sm tracking-[0.2em] text-paper/50">
                ПОРТРЕТ АДВОКАТА
              </span>
            </div>

            <div className="absolute inset-6 border border-paper/10" />
          </motion.div>

          <div className="relative pl-8">
            <div className="absolute left-[3px] top-2 h-[calc(100%-1rem)] w-px bg-primary/10 dark:bg-paper/10" />

            <ol className="space-y-8">
              {milestones.map((m, i) => (
                <motion.li
                  key={m.label}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.12 }}
                  className="relative"
                >
                  <span className="absolute -left-8 top-1.5 h-2 w-2 rounded-full bg-gold" />

                  <h4 className="font-display text-base text-primary dark:text-paper">
                    {m.label}
                  </h4>

                  <p className="mt-1 text-sm text-primary/55 dark:text-paper/55">
                    {m.description}
                  </p>
                </motion.li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
