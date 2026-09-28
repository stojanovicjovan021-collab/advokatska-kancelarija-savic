'use client';

import { useId, useState } from 'react';
import { cn } from '@/lib/utils';

interface FloatingFieldProps {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  as?: 'input' | 'textarea';
  required?: boolean;
}

export function FloatingField({
  label,
  name,
  type = 'text',
  value,
  onChange,
  error,
  as = 'input',
  required,
}: FloatingFieldProps) {
  const id = useId();
  const [isFocused, setIsFocused] = useState(false);
  const isFloating = isFocused || value.length > 0;
  const sharedClasses = cn(
    'peer w-full border-b bg-transparent pb-3 pt-7 text-primary outline-none transition-colors duration-300 dark:text-paper',
    error ? 'border-red-400' : 'border-primary/20 focus:border-gold dark:border-paper/20'
  );

  return (
    <div className="relative">
      {as === 'textarea' ? (
        <textarea
          id={id}
          name={name}
          value={value}
          required={required}
          rows={4}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onChange={(e) => onChange(e.target.value)}
          className={cn(sharedClasses, 'resize-none')}
        />
      ) : (
        <input
          id={id}
          name={name}
          type={type}
          value={value}
          required={required}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onChange={(e) => onChange(e.target.value)}
          className={sharedClasses}
        />
      )}
      <label
        htmlFor={id}
        className={cn(
          'pointer-events-none absolute left-0 origin-left text-primary/45 transition-all duration-300 dark:text-paper/45',
          isFloating ? 'top-1 text-xs tracking-wide text-gold-700 dark:text-gold-200' : 'top-7 text-base'
        )}
      >
        {label}
      </label>
      {error && <p className="mt-2 text-xs text-red-400">{error}</p>}
    </div>
  );
}
