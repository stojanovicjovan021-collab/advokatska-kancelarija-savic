'use client';

import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldBeDark = stored ? stored === 'dark' : prefersDark;
    setIsDark(shouldBeDark);
    document.documentElement.classList.toggle('dark', shouldBeDark);
  }, []);

  function toggleTheme() {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle('dark', next);
    window.localStorage.setItem('theme', next ? 'dark' : 'light');
  }

  return (
    <button
      onClick={toggleTheme}
      aria-label={isDark ? 'Uključi svetlu temu' : 'Uključi tamnu temu'}
      data-cursor-hover
      className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/15 text-primary transition-colors duration-300 hover:border-gold hover:text-gold-600 dark:border-paper/15 dark:text-paper dark:hover:text-gold-200"
    >
      {isDark ? <Sun size={17} /> : <Moon size={17} />}
    </button>
  );
}
