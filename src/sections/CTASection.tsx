'use client';

import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useMediaQuery';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import Image from 'next/image';

interface CTASectionProps {
  title: string;
  description?: string;
  primaryCta: { text: string; href: string };
  secondaryCta?: { text: string; href: string };
  variant?: 'navy' | 'lime' | 'blue' | 'white' | 'gradient';
  className?: string;
  image?: string;
  imageAlt?: string;
}

export function CTASection({
  title,
  description,
  primaryCta,
  secondaryCta,
  variant = 'navy',
  className,
  image,
  imageAlt,
}: CTASectionProps) {
  const reducedMotion = useReducedMotion();

  const variants = {
    navy: 'bg-navy text-white',
    lime: 'bg-lime text-navy',
    blue: 'bg-bright-blue text-white',
    white: 'bg-white text-navy border-t border-light-grey',
    gradient: 'bg-gradient-to-br from-navy via-bright-blue to-deep-blue text-white relative overflow-hidden',
  };

  const getButtonVariant = (v: string, isPrimary: boolean) => {
    if (v === 'white') return isPrimary ? 'primary' : 'outline';
    if (v === 'lime') return isPrimary ? 'primary' : 'secondary';
    return isPrimary ? 'lime' : 'outline';
  };

  // Description text colour: on dark backgrounds use near-white, on lime use navy/70
  const descriptionColor =
    variant === 'lime'
      ? 'rgba(8,11,61,0.75)'
      : variant === 'white'
      ? 'var(--color-dark-grey)'
      : 'rgba(255,255,255,0.9)';

  return (
    <section
      className={cn('relative overflow-hidden py-16 md:py-24 lg:py-32', variants[variant], className)}
      aria-labelledby="cta-heading"
    >
      {variant === 'gradient' && (
        <>
          <div className="absolute inset-0 gradient-mesh" aria-hidden="true" />
          <div
            className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-lime/10 via-transparent to-transparent"
            aria-hidden="true"
          />
        </>
      )}

      {image && (
        <div className="absolute inset-0 -z-10 opacity-10" aria-hidden="true">
          <Image
                src={image}
                alt={imageAlt ?? ''}
                fill
                className="object-cover"
                sizes="100vw"
              />
        </div>
      )}

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={reducedMotion ? { duration: 0 } : { duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 id="cta-heading" className="font-display font-extrabold leading-tight text-3xl md:text-5xl lg:text-6xl mb-4">
            {title}
          </h2>
          {description && (
            <p
              className="text-lg md:text-xl leading-relaxed mb-8 md:mb-10"
              style={{ color: descriptionColor }}
            >
              {description}
            </p>
          )}

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant={getButtonVariant(variant, true)}
              size="lg"
              arrow
              asChild
            >
              <Link href={primaryCta.href}>{primaryCta.text}</Link>
            </Button>
            {secondaryCta && (
              <Button
                variant={getButtonVariant(variant, false)}
                size="lg"
                asChild
              >
                <Link href={secondaryCta.href}>{secondaryCta.text}</Link>
              </Button>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}