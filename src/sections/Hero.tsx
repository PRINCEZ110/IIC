'use client';

import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useMediaQuery';
import { Button } from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

interface HeroProps {
  headline: string;
  subheadline?: string;
  primaryCta?: { text: string; href: string };
  secondaryCta?: { text: string; href: string };
  image?: string;
  imageAlt?: string;
  variant?: 'home' | 'page' | 'study' | 'research' | 'life';
  className?: string;
}

export function Hero({
  headline,
  subheadline,
  primaryCta,
  secondaryCta,
  image,
  imageAlt,
  variant = 'home',
  className,
}: HeroProps) {
  const reducedMotion = useReducedMotion();

  const variants = {
    home: {
      container: 'relative min-h-[90vh] md:min-h-[100vh] flex items-center overflow-hidden',
      content: 'relative z-10 w-full lg:w-1/2 pr-8',
      image: 'absolute right-0 top-0 h-full w-1/2 lg:w-1/2 hidden lg:block',
    },
    page: {
      container: 'relative min-h-[60vh] md:min-h-[70vh] flex items-center justify-center text-center overflow-hidden',
      content: 'relative z-10 max-w-4xl px-6',
      image: 'absolute inset-0 -z-10 opacity-20',
    },
    study: {
      container: 'relative min-h-[70vh] md:min-h-[80vh] flex items-center overflow-hidden',
      content: 'relative z-10 w-full lg:w-3/5 pr-8',
      image: 'absolute right-0 top-0 h-full w-2/3 lg:w-2/3 hidden lg:block',
    },
    research: {
      container: 'relative min-h-[70vh] md:min-h-[80vh] flex items-center overflow-hidden bg-navy',
      content: 'relative z-10 w-full lg:w-3/5 pr-8 text-white',
      image: 'absolute right-0 top-0 h-full w-2/3 lg:w-2/3 hidden lg:block opacity-30',
    },
    life: {
      container: 'relative min-h-[70vh] md:min-h-[80vh] flex items-center overflow-hidden',
      content: 'relative z-10 w-full lg:w-1/2 pr-8',
      image: 'absolute right-0 top-0 h-full w-1/2 lg:w-1/2 hidden lg:block',
    },
  };

  const v = variants[variant];

  return (
    <section className={v.container} aria-labelledby="hero-heading">
      {image && (
        <div className={v.image} aria-hidden="true">
          <Image
            src={image}
            alt={imageAlt || ''}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-white via-white/50 to-transparent lg:from-navy/10 lg:via-navy/5 lg:to-transparent" />
        </div>
      )}

      <div className="container">
        <motion.div
          className={v.content}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={reducedMotion ? { duration: 0 } : { duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        >
          {variant === 'home' && (
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={reducedMotion ? { duration: 0 } : { delay: 0.2, duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
              className="inline-block px-4 py-2 bg-lime text-navy font-display font-bold text-sm md:text-base rounded-none mb-6"
            >
              Undergraduate Admissions Open for 2024/25
            </motion.span>
          )}

          <motion.h1
            id="hero-heading"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={reducedMotion ? { duration: 0 } : { delay: 0.3, duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className={cn(
              'font-display font-extrabold leading-[0.85] tracking-tight',
              variant === 'home' ? 'text-5xl md:text-7xl lg:text-8xl xl:text-9xl' : 'text-4xl md:text-6xl lg:text-7xl',
              variant === 'research' ? 'text-white' : 'text-navy'
            )}
          >
            {headline.split('\n').map((line, i) => (
              <span key={i} className="block">{line}</span>
            ))}
          </motion.h1>

          {subheadline && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={reducedMotion ? { duration: 0 } : { delay: 0.5, duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
              className={cn(
                'mt-6 md:mt-8 text-lg md:text-xl leading-relaxed max-w-xl',
                variant === 'research' ? 'text-white/80' : 'text-dark-grey'
              )}
            >
              {subheadline}
            </motion.p>
          )}

          {(primaryCta || secondaryCta) && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={reducedMotion ? { duration: 0 } : { delay: 0.7, duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
              className="mt-8 md:mt-12 flex flex-wrap gap-4"
            >
              {primaryCta && (
                <Button
                  variant={variant === 'research' ? 'lime' : 'primary'}
                  size="lg"
                  arrow
                  asChild
                >
                  <a href={primaryCta.href}>{primaryCta.text}</a>
                </Button>
              )}
              {secondaryCta && (
                <Button
                  variant={variant === 'research' ? 'outline' : 'secondary'}
                  size="lg"
                  asChild
                >
                  <a href={secondaryCta.href}>{secondaryCta.text}</a>
                </Button>
              )}
            </motion.div>
          )}

          {variant === 'home' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={reducedMotion ? { duration: 0 } : { delay: 0.9, duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
              className="mt-16 flex flex-wrap items-center gap-8 text-sm text-medium-grey"
            >
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-lime rounded-full" aria-hidden="true" />
                <span>94% Graduate Employment</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full" aria-hidden="true" />
                <span>Top IT Institute in Nepal</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-purple-500 rounded-full" aria-hidden="true" />
                <span>50+ Industry Partners</span>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block animate-bounce" aria-hidden="true">
        <svg className="w-6 h-6 text-navy/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}

import { cn } from '@/lib/utils';