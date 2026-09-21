'use client';

import { motion } from 'framer-motion';
import { useReducedMotion, useIntersectionObserver } from '@/hooks/useMediaQuery';
import { cn } from '@/lib/utils';

// University-wide headline stats for the homepage
const defaultStats = [
  { value: '3,000', label: 'Graduates & Counting', suffix: '+' },
  { value: '94', label: 'Graduate Employment Rate', suffix: '%' },
  { value: '50', label: 'Industry Partners', suffix: '+' },
  { value: '25', label: 'Years of Excellence', suffix: '' },
];

interface StatsSectionProps {
  title?: string;
  subtitle?: string;
  stats?: { value: string; label: string; suffix: string }[];
  variant?: 'default' | 'navy' | 'lime' | 'blue';
  className?: string;
}

export function StatsSection({ title, subtitle, stats = defaultStats, variant = 'default', className }: StatsSectionProps) {
  const reducedMotion = useReducedMotion();
  const [ref, isInView] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.3 });

  const variants = {
    default: 'bg-white',
    navy: 'bg-navy text-white',
    lime: 'bg-lime text-navy',
    blue: 'bg-bright-blue text-white',
  };

  const getVariantStyles = () => {
    switch (variant) {
      case 'navy':
        return { statColor: 'text-white', labelColor: 'text-white/70', borderColor: 'border-white/10', dividerBg: 'rgba(255,255,255,0.1)' };
      case 'lime':
        return { statColor: 'text-navy', labelColor: 'text-navy/70', borderColor: 'border-navy/10', dividerBg: 'rgba(8,11,61,0.1)' };
      case 'blue':
        return { statColor: 'text-white', labelColor: 'text-white/70', borderColor: 'border-white/10', dividerBg: 'rgba(255,255,255,0.1)' };
      default:
        return { statColor: 'text-navy', labelColor: 'text-dark-grey', borderColor: 'border-light-grey', dividerBg: 'rgba(233,233,228,1)' };
    }
  };

  const styles = getVariantStyles();

  return (
    <section
      ref={ref}
      className={cn('relative overflow-hidden', variants[variant], className)}
      aria-labelledby={title ? 'stats-heading' : undefined}
    >
      <div className="container py-16 md:py-24 lg:py-32">
        {(title || subtitle) && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView || reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={reducedMotion ? { duration: 0 } : { duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
          >
            {title && (
              <h2 id="stats-heading" className="font-display font-extrabold leading-tight text-3xl md:text-5xl lg:text-6xl mb-4">
                {title}
              </h2>
            )}
            {subtitle && (
              <p
                className="text-lg md:text-xl leading-relaxed"
                style={{ color: variant === 'navy' || variant === 'blue' ? 'rgba(255,255,255,0.8)' : 'var(--color-dark-grey)' }}
              >
                {subtitle}
              </p>
            )}
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView || reducedMotion ? { opacity: 1 } : { opacity: 0 }}
          transition={reducedMotion ? { duration: 0 } : { duration: 0.6, ease: [0.4, 0, 0.2, 1], delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4"
          role="list"
          aria-label="University statistics"
        >
          {stats.map((stat, index) => (
            <motion.article
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView || reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={reducedMotion ? { duration: 0 } : { duration: 0.5, ease: [0.4, 0, 0.2, 1], delay: 0.15 + index * 0.1 }}
              className={cn(
                'relative p-6 md:p-10 text-center',
                index < stats.length - 1 ? cn('border-r', styles.borderColor) : '',
                // On mobile, add bottom border to first row
                index < 2 ? cn('border-b md:border-b-0', styles.borderColor) : '',
              )}
              role="listitem"
            >
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={isInView || reducedMotion ? { scale: 1, opacity: 1 } : { scale: 0.5, opacity: 0 }}
                transition={reducedMotion ? { duration: 0 } : { delay: 0.2 + index * 0.1, duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                className={cn(
                  'font-display font-extrabold leading-none',
                  'text-4xl md:text-5xl lg:text-6xl xl:text-7xl',
                  styles.statColor
                )}
              >
                {stat.value}
                {stat.suffix && (
                  <span className="text-2xl md:text-3xl lg:text-4xl font-bold">{stat.suffix}</span>
                )}
              </motion.div>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={isInView || reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={reducedMotion ? { duration: 0 } : { delay: 0.4 + index * 0.1, duration: 0.4 }}
                className={cn('mt-3 font-medium text-base md:text-lg', styles.labelColor)}
              >
                {stat.label}
              </motion.p>
            </motion.article>
          ))}
        </motion.div>
      </div>

      {variant === 'navy' && (
        <div className="absolute inset-0 gradient-mesh" aria-hidden="true" />
      )}

      {variant === 'lime' && (
        <div className="absolute inset-0 bg-gradient-to-br from-lime/20 via-transparent to-blue/10" aria-hidden="true" />
      )}
    </section>
  );
}
