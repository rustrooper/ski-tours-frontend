import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const inputVariants = cva(
  'w-full min-w-0 bg-transparent transition-colors outline-none file:inline-flex file:h-6 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-input/50 disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40',
  {
    variants: {
      variant: {
        default:
          'h-8 rounded-lg border border-input px-2.5 py-1 text-base focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 md:text-sm dark:bg-input/30 dark:disabled:bg-input/80',
        pill: 'h-14 rounded-full border border-hairline-strong bg-white/6 px-6 text-base text-fg-0 placeholder:text-fg-3 focus-visible:border-ice focus-visible:bg-white/10 focus-visible:ring-4 focus-visible:ring-ice/20',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

function Input({
  className,
  type,
  variant,
  ...props
}: React.ComponentProps<'input'> & VariantProps<typeof inputVariants>) {
  return (
    <input
      type={type}
      data-slot="input"
      data-variant={variant ?? 'default'}
      className={cn(inputVariants({ variant }), className)}
      {...props}
    />
  );
}

export { Input, inputVariants };
