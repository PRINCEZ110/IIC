'use client';

import { forwardRef, ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';
import { Slot } from '@radix-ui/react-slot';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'lime';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  arrow?: boolean;
  arrowOnly?: boolean;
  fullWidth?: boolean;
  loading?: boolean;
  asChild?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = 'primary',
      size = 'md',
      arrow = false,
      arrowOnly = false,
      fullWidth = false,
      loading = false,
      asChild = false,
      className,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles = `
      inline-flex items-center justify-center font-medium transition-all duration-200
      focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 focus-visible:ring-offset-white
      disabled:opacity-50 disabled:cursor-not-allowed
      whitespace-nowrap
    `;

    const variants = {
      primary: `
        bg-navy text-white border-2 border-navy hover:bg-navy-light hover:border-navy-light
        active:bg-navy-light
      `,
      secondary: `
        bg-white text-navy border-2 border-navy hover:bg-navy/5
        active:bg-navy/10
      `,
      outline: `
        bg-transparent text-navy border-2 border-navy hover:bg-navy/5
        active:bg-navy/10
      `,
      ghost: `
        bg-transparent text-navy hover:bg-navy/5
        active:bg-navy/10
      `,
      lime: `
        bg-lime text-navy border-2 border-lime hover:bg-lime-dark hover:border-lime-dark
        active:bg-lime-darker
      `,
    };

    const sizes = {
      sm: 'px-4 py-2 text-sm gap-1.5',
      md: 'px-6 py-3 text-base gap-2',
      lg: 'px-8 py-4 text-lg gap-2.5',
      xl: 'px-10 py-5 text-xl gap-3',
    };

    const widthStyles = fullWidth ? 'w-full' : '';

    const arrowIcon = arrow && (
      <ArrowRight
        className={cn(
          'flex-shrink-0 transition-transform duration-200',
          arrowOnly ? 'text-lg' : 'text-base',
          loading ? 'animate-spin' : ''
        )}
        aria-hidden="true"
      />
    );

    if (asChild) {
      return (
        <Slot
          ref={ref}
          className={cn(baseStyles, variants[variant], sizes[size], widthStyles, className)}
          {...props}
        >
          {children}
        </Slot>
      );
    }

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], widthStyles, className)}
        disabled={disabled || loading}
        aria-busy={loading}
        {...props}
      >
        {loading ? (
          <svg
            className="animate-spin h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        ) : (
          <>
            {arrowOnly ? null : children}
            {arrowIcon}
          </>
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';

export interface LinkButtonProps {
  href: string;
  variant?: ButtonProps['variant'];
  size?: ButtonProps['size'];
  arrow?: boolean;
  arrowOnly?: boolean;
  fullWidth?: boolean;
  className?: string;
  children: ReactNode;
  external?: boolean;
}

export function LinkButton({
  href,
  variant = 'primary',
  size = 'md',
  arrow = false,
  arrowOnly = false,
  fullWidth = false,
  className,
  children,
  external = false,
  ...props
}: LinkButtonProps) {
  const baseStyles = `
    inline-flex items-center justify-center font-medium transition-all duration-200
    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 focus-visible:ring-offset-white
    whitespace-nowrap
  `;

  const variants = {
    primary: `
      bg-navy text-white border-2 border-navy hover:bg-navy-light hover:border-navy-light
      active:bg-navy-light
    `,
    secondary: `
      bg-white text-navy border-2 border-navy hover:bg-navy/5
      active:bg-navy/10
    `,
    outline: `
      bg-transparent text-navy border-2 border-navy hover:bg-navy/5
      active:bg-navy/10
    `,
    ghost: `
      bg-transparent text-navy hover:bg-navy/5
      active:bg-navy/10
    `,
    lime: `
      bg-lime text-navy border-2 border-lime hover:bg-lime-dark hover:border-lime-dark
      active:bg-lime-darker
    `,
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm gap-1.5',
    md: 'px-6 py-3 text-base gap-2',
    lg: 'px-8 py-4 text-lg gap-2.5',
    xl: 'px-10 py-5 text-xl gap-3',
  };

  const widthStyles = fullWidth ? 'w-full' : '';

  return (
    <a
      href={href}
      className={cn(baseStyles, variants[variant], sizes[size], widthStyles, className)}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      {...props}
    >
      {children}
      {arrow && (
        <ArrowRight
          className={cn('flex-shrink-0 transition-transform duration-200', arrowOnly ? 'text-lg' : 'text-base')}
          aria-hidden="true"
        />
      )}
    </a>
  );
}