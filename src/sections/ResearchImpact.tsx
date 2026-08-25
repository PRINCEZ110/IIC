'use client';

import { motion } from 'framer-motion';
import { useReducedMotion, useIntersectionObserver } from '@/hooks/useMediaQuery';
import { cn } from '@/lib/utils';
import { researchStats } from '@/data/university';

interface ResearchImpactProps {
  title?: string;
  subtitle?: string;
  stats?: typeof researchStats;
  variant?: 'default' | 'navy' | 'lime';
}

export function ResearchImpact({ title, subtitle, stats = researchStats, variant = 'default' }: ResearchImpactProps) {
  const reducedMotion = useReducedMotion();
  const [ref, isInView] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.2 });

  const variants = {
    default: 'bg-white',
    navy: 'bg-navy text-white',
    lime: 'bg-lime text-navy',
  };

  const getStyles = () => {
    switch (variant) {
      case 'navy':
        return { numberColor: 'text-white', labelColor: 'text-white/70', borderColor: 'border-white/10', iconColor: 'text-lime' };
      case 'lime':
        return { numberColor: 'text-navy', labelColor: 'text-navy/70', borderColor: 'border-navy/10', iconColor: 'text-navy' };
      default:
        return { numberColor: 'text-navy', labelColor: 'text-dark-grey', borderColor: 'border-light-grey', iconColor: 'text-blue-500' };
    }
  };

  const styles = getStyles();

  if (!isInView && !reducedMotion) return <div ref={ref} className={variants[variant]} />;

  return (
    <section
      ref={ref}
      className={cn('relative overflow-hidden py-16 md:py-24 lg:py-32', variants[variant])}
      aria-labelledby={title ? 'impact-heading' : undefined}
    >
      {variant === 'navy' && <div className="absolute inset-0 gradient-mesh" aria-hidden="true" />}

      <div className="container relative">
        {(title || subtitle) && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView || reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={reducedMotion ? { duration: 0 } : { duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
          >
            {title && (
              <h2 id="impact-heading" className="font-display font-extrabold leading-tight text-3xl md:text-5xl lg:text-6xl mb-4">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-lg md:text-xl leading-relaxed" style={{ color: variant === 'navy' ? 'rgba(255,255,255,0.8)' : 'var(--color-dark-grey)' }}>
                {subtitle}
              </p>
            )}
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView || reducedMotion ? { opacity: 1 } : { opacity: 0 }}
          transition={reducedMotion ? { duration: 0 } : { duration: 0.6, ease: [0.4, 0, 0.2, 1], delay: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          role="list"
          aria-label="Research impact statistics"
        >
          {stats.map((stat, index) => (
            <motion.article
              key={stat.label}
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              animate={isInView || reducedMotion ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 40, scale: 0.9 }}
              transition={reducedMotion ? { duration: 0 } : { duration: 0.5, ease: [0.4, 0, 0.2, 1], delay: 0.15 + index * 0.1 }}
              className={cn(
                'relative p-6 md:p-8 text-center',
                'bg-white/50 backdrop-blur-sm border',
                styles.borderColor,
                variant === 'default' ? 'hover:border-lime hover:shadow-xl' : 'hover:border-lime/50 hover:shadow-xl',
                'transition-all duration-300'
              )}
              role="listitem"
            >
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={reducedMotion ? { duration: 0 } : { delay: 0.2 + index * 0.1, duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 mb-4"
                style={{ background: variant === 'navy' ? 'rgba(255,255,255,0.1)' : variant === 'lime' ? 'rgba(8,11,61,0.1)' : 'var(--color-off-white)' }}
              >
                <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: styles.iconColor }} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={reducedMotion ? { duration: 0 } : { delay: 0.3 + index * 0.1, duration: 0.4 }}
                className={cn('font-display font-extrabold leading-none text-3xl md:text-4xl lg:text-5xl mb-2', styles.numberColor)}
              >
                {stat.value}
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={reducedMotion ? { duration: 0 } : { delay: 0.4 + index * 0.1, duration: 0.4 }}
                className={cn('font-medium text-base md:text-lg', styles.labelColor)}
              >
                {stat.label}
              </motion.p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}