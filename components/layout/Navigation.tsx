'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, Scale, X } from 'lucide-react';
import { navLinks } from '@/lib/data';
import { buttonVariants } from '@/components/ui/Button';
import { ThemeToggle } from '@/components/ui/ThemeToggle';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setIsScrolled(window.scrollY > 40);
    }
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
  }, [isMenuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-luxury ${
        isScrolled
          ? 'bg-paper/80 shadow-[0_1px_0_0_rgba(10,25,49,0.08)] backdrop-blur-xl dark:bg-ink/80'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-luxury flex h-20 items-center justify-between">
        <a href="#" className="flex items-center gap-2.5" data-cursor-hover>
          <Scale size={22} className="text-gold-600" strokeWidth={1.5} />
          <span className="font-display text-lg tracking-tight text-primary dark:text-paper">
            Адвокатска канцеларија
          </span>
        </a>

        <ul className="hidden items-center gap-9 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                data-cursor-hover
                className="text-sm text-primary/70 transition-colors duration-300 hover:text-gold-700 dark:text-paper/70 dark:hover:text-gold-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-4 lg:flex">
          <ThemeToggle />
          <a href="#contact" data-cursor-hover className={buttonVariants({ variant: 'gold', size: 'sm' })}>
            Закажите консултације
          </a>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <ThemeToggle />
          <button
            onClick={() => setIsMenuOpen(true)}
            aria-label="Otvori meni"
            className="flex h-10 w-10 items-center justify-center text-primary dark:text-paper"
          >
            <Menu size={22} />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] bg-ink lg:hidden"
          >
            <div className="container-luxury flex h-20 items-center justify-between">
              <span className="font-display text-lg text-paper">Meni</span>
              <button
                onClick={() => setIsMenuOpen(false)}
                aria-label="Zatvori meni"
                className="flex h-10 w-10 items-center justify-center text-paper"
              >
                <X size={22} />
              </button>
            </div>
            <ul className="container-luxury mt-10 flex flex-col gap-2">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <a
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block border-b border-paper/10 py-4 font-display text-2xl text-paper"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
            <div className="container-luxury mt-8">
              <a
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className={buttonVariants({ variant: 'gold', size: 'lg', className: 'w-full' })}
              >
                Закажите консултације
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
