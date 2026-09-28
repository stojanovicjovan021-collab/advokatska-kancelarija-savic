'use client';

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

export const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm text-sm font-medium tracking-wide transition-all duration-500 ease-luxury disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary:
          'bg-primary text-paper hover:bg-primary-600 shadow-deep px-8 py-4',
        gold: 'bg-gold-gradient text-ink shadow-gold hover:brightness-105 px-8 py-4',
        outline:
          'border border-primary/20 text-primary hover:border-gold hover:text-gold-700 px-8 py-4 dark:border-paper/20 dark:text-paper dark:hover:text-gold-200',
        ghost: 'text-primary hover:text-gold-700 dark:text-paper dark:hover:text-gold-200 px-2 py-2',
      },
      size: {
        default: '',
        sm: 'px-5 py-3 text-xs',
        lg: 'px-10 py-5 text-base',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';
