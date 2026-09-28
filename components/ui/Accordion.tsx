'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AccordionItemData {
  id: string;
  question: string;
  answer: string;
}

export function Accordion({ items }: { items: AccordionItemData[] }) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);

  return (
    <div className="divide-y divide-primary/10 dark:divide-paper/10">
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div key={item.id} className="py-2">
            <button
              onClick={() => setOpenId(isOpen ? null : item.id)}
              aria-expanded={isOpen}
              aria-controls={`faq-panel-${item.id}`}
              className="flex w-full items-center justify-between gap-6 py-6 text-left"
            >
              <span className="font-display text-xl text-primary dark:text-paper sm:text-2xl">
                {item.question}
              </span>
              <span
                className={cn(
                  'flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gold/40 text-gold-600 transition-transform duration-500 ease-luxury dark:text-gold-200',
                  isOpen && 'rotate-45 bg-gold text-ink'
                )}
              >
                <Plus size={16} />
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={`faq-panel-${item.id}`}
                  role="region"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="max-w-2xl pb-6 text-base leading-relaxed text-primary/70 dark:text-paper/70">
                    {item.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
