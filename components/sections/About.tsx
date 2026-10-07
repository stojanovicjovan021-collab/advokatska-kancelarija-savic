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
            text="О Адвокатској канцеларији Савић"
            className="mt-6 max-w-lg font-display text-3xl leading-[1.15] text-primary balance dark:text-paper sm:text-4xl"
          />

          <motion.div
  initial={{ opacity: 0, y: 16 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8, delay: 0.2 }}
  className="mt-6 max-w-lg space-y-5 text-base leading-relaxed text-primary/65 dark:text-paper/65"
>
  <p>
    Адвокатска канцеларија налази се у Новом Саду, главном граду Аутономне покрајине
    Војводине, који представља веома важан економски, историјски, стратешки и културни
    центар Републике Србије.
  </p>

  <p>
    Оснивач адвокатске канцеларије је адвокат маст. прав. Владимир В. Савић, који је исту
    основао након обављене приправничке вежбе, коју је обављао код адвоката Срђана
    Миљковића из Новог Сада. Преостали део тима чине адвокати, адвокатски приправници,
    консултатни и административни сарадници.
  </p>

  <p>
    Ценећи дубоко поверење наших клијената, трудимо се да свакодневно будемо на услузи
    нашим клијентима, тако што ћемо им пружити благовремену, конкретну, проверену и
    тачну информацију.
  </p>

  <p>
    Схватајући да свакодневно пословање, животне ситуације и глобална дешавања пред наше
    клијенте стављају низ изазова и непредвидљивих ситуација, трудимо се да као
    професионалци пре свега разумемо насталу ситуацију, након чега као тим настојимо да
    пронађемо најбоље правно решење за наше клијенте.
  </p>

  <p>
    Наши клијенти су физичка и правна лица, одређене установе, као и компаније из разних
    области привреде.
  </p>

  <p>
    Као адвокатска канцеларија, односно адвокатски тим, стојимо Вам на располагању за
    сваку врсту сарадње која ће се пре свега заснивати на поштовању и поверењу.
  </p>
</motion.div>

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
