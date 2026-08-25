'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useReducedMotion, useIntersectionObserver } from '@/hooks/useMediaQuery';
import { cn } from '@/lib/utils';
import { universityInfo } from '@/data/university';

interface StatsSectionProps {
  title?: string;
  subtitle?: string;
  stats?: { value: string; label: string; suffix: string }[];
  variant?: 'default' | 'navy' | 'lime' | 'blue';
  className?: string;
}

export function StatsSection({ title, subtitle, stats = [], variant = 'default', className }: StatsSectionProps) {
  const reducedMotion = useReducedMotion();
  const [ref, isInView] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.3 });
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 50]);

  const variants = {
    default: 'bg-white',
    navy: 'bg-navy text-white',
    lime: 'bg-lime text-navy',
    blue: 'bg-bright-blue text-white',
  };

  const getVariantStyles = () => {
    switch (variant) {
      case 'navy':
        return { statColor: 'text-white', labelColor: 'text-white/70', borderColor: 'border-white/10' };
      case 'lime':
        return { statColor: 'text-navy', labelColor: 'text-navy/70', borderColor: 'border-navy/10' };
      case 'blue':
        return { statColor: 'text-white', labelColor: 'text-white/70', borderColor: 'border-white/10' };
      default:
        return { statColor: 'text-navy', labelColor: 'text-dark-grey', borderColor: 'border-light-grey' };
    }
  };

  const styles = getVariantStyles();

  if (!isInView && !reducedMotion) return <div ref={ref} className={cn('py-16 md:py-24', className)} />;

  return (
    <section
      ref={ref}
      className={cn('relative overflow-hidden', variants[variant], className)}
      aria-labelledby={title ? 'stats-heading' : undefined}
    >
      <div className="container">
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
              <p className="text-lg md:text-xl leading-relaxed" style={{ color: variant === 'navy' || variant === 'blue' ? 'rgba(255,255,255,0.8)' : 'var(--color-dark-grey)' }}>
                {subtitle}
              </p>
            )}
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView || reducedMotion ? { opacity: 1 } : { opacity: 0 }}
          transition={reducedMotion ? { duration: 0 } : { duration: 0.6, ease: [0.4, 0, 0.2, 1], delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
          role="list"
          aria-label="University statistics"
        >
          {stats.map((stat, index) => (
            <motion.article
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView || reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={reducedMotion ? { duration: 0 } : { duration: 0.5, ease: [0.4, 0, 0.2, 1], delay: 0.15 + index * 0.08 }}
              className={cn(
                'relative p-6 md:p-8 text-center',
                'border-r last:border-r-0',
                styles.borderColor
              )}
              role="listitem"
            >
              <div className="relative">
                <motion.span
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={reducedMotion ? { duration: 0 } : { delay: 0.2 + index * 0.08, duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                  className={cn(
                    'font-display font-extrabold leading-none',
                    'text-4xl md:text-5xl lg:text-6xl xl:text-7xl',
                    styles.statColor
                  )}
                  style={{ fontVariationSettings: '"wght" 900' }}
                >
                  {stat.value}
                  <span className="text-2xl md:text-3xl lg:text-4xl font-bold" style={{ fontVariationSettings: '"wght" 700' }}>
                    {stat.suffix}
                  </span>
                </motion.span>
              </div>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={reducedMotion ? { duration: 0 } : { delay: 0.4 + index * 0.08, duration: 0.4 }}
                className={cn('mt-3 font-medium text-base md:text-lg', styles.labelColor)}
              >
                {stat.label}
              </motion.p>

              {index < stats.length - 1 && (
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-px h-1/2 hidden md:block" style={{ background: styles.borderColor }} aria-hidden="true" />
              )}
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