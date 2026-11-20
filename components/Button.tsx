import Link, { LinkProps } from 'next/link';
import { cn } from '@/lib/utils';
import { VariantProps, cva } from 'class-variance-authority';
import { ReactNode } from 'react';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-full font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-accent-primary text-white hover:bg-accent-600 focus-visible:ring-accent-primary',
        destructive: 'bg-red-500 text-white hover:bg-red-600 focus-visible:ring-red-500',
        outline: 'border border-brand-border bg-brand-card text-brand-light hover:bg-brand-subtle focus-visible:ring-accent-primary',
        secondary: 'bg-brand-card text-white hover:bg-brand-subtle focus-visible:ring-accent-primary',
        ghost: 'hover:bg-brand-subtle hover:text-white focus-visible:ring-accent-primary',
        link: 'text-accent-primary hover:underline focus-visible:ring-accent-primary',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        xl: 'h-12 rounded-md px-10 text-base',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  children: ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Link : 'button';
    const classes = buttonVariants({ variant, size, className, 'aria-disabled': props.disabled });

    if (asChild) {
      return (
        <Link ref={ref} className={classes} {...(props as LinkProps & { 'aria-disabled': boolean })}>
          {props.children}
        </Link>
      );
    }

    return (
      <button
        ref={ref}
        className={classes}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };