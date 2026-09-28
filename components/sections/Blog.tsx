'use client';

import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { RevealText } from '@/components/ui/RevealText';
import { blogPosts } from '@/lib/data';

export function Blog() {
  const categories = useMemo(
    () => ['Све', ...Array.from(new Set(blogPosts.map((p) => p.category)))],
    []
  );

  const [activeCategory, setActiveCategory] = useState('Све');

  const featured = blogPosts.find((p) => p.featured);
  const rest = blogPosts.filter((p) => !p.featured);

  const filtered =
    activeCategory === 'Све'
      ? rest
      : rest.filter((p) => p.category === activeCategory);

  return (
    <section id="blog" className="bg-accent py-28 dark:bg-primary-700 sm:py-36">
      <div className="container-luxury">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <span className="eyebrow-rule text-xs uppercase tracking-[0.25em] text-gold-700 dark:text-gold-300">
              Правни савети
            </span>

            <RevealText
              as="h2"
              text="Увиди који вам помажу да доносите информисане одлуке."
              className="mt-6 max-w-xl font-display text-3xl leading-[1.15] text-primary balance dark:text-paper sm:text-4xl"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full border px-4 py-2 text-xs transition-colors duration-300 ${
                  activeCategory === cat
                    ? 'border-gold bg-gold text-ink'
                    : 'border-primary/15 text-primary/60 hover:border-gold/60 dark:border-paper/15 dark:text-paper/60'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {featured && (
          <motion.a
            href={`/blog/${featured.id}`}
            data-cursor-hover
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="group mt-14 grid grid-cols-1 gap-8 border-b border-primary/10 pb-14 dark:border-paper/10 lg:grid-cols-[1.1fr_1fr] lg:items-center"
          >
            <div className="relative aspect-[16/10] overflow-hidden rounded-sm">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                className="object-cover"
              />
            </div>

            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-gold-700 dark:text-gold-300">
                Издвојено · {featured.category}
              </span>

              <h3 className="mt-4 font-display text-2xl leading-snug text-primary balance dark:text-paper sm:text-3xl">
                {featured.title}
              </h3>

              <p className="mt-4 max-w-lg text-sm leading-relaxed text-primary/60 dark:text-paper/60">
                {featured.excerpt}
              </p>

              <div className="mt-6 flex items-center gap-4 text-xs text-primary/45 dark:text-paper/45">
                <span>{featured.date}</span>
                <span>·</span>
                <span>{featured.readTime}</span>
              </div>

              <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors group-hover:text-gold-700 dark:text-paper dark:group-hover:text-gold-200">
                Прочитајте чланак
                <ArrowRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </span>
            </div>
          </motion.a>
        )}

        <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((post, i) => (
            <motion.a
              key={post.id}
              href={`/blog/${post.id}`}
              data-cursor-hover
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="group flex flex-col"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <span className="mt-5 text-xs uppercase tracking-[0.2em] text-gold-700 dark:text-gold-300">
                {post.category}
              </span>

              <h3 className="mt-2 font-display text-lg leading-snug text-primary balance dark:text-paper">
                {post.title}
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-primary/55 dark:text-paper/55">
                {post.excerpt}
              </p>

              <div className="mt-4 flex items-center gap-3 text-xs text-primary/40 dark:text-paper/40">
                <span>{post.date}</span>
                <span>·</span>
                <span>{post.readTime}</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
