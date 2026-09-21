'use client';

import { motion } from 'framer-motion';
import { useReducedMotion, useIntersectionObserver } from '@/hooks/useMediaQuery';
import { researchThemes } from '@/data/university';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

interface ResearchChallengesProps {
  title?: string;
  subtitle?: string;
}

export function ResearchChallenges({ title, subtitle }: ResearchChallengesProps) {
  const reducedMotion = useReducedMotion();
  const [ref, isInView] = useIntersectionObserver<HTMLElement>({ threshold: 0.2 });

  return (
    <section
      ref={ref}
      className="relative py-16 md:py-24 lg:py-32 bg-navy text-white overflow-hidden"
      aria-labelledby={title ? 'research-heading' : undefined}
    >
      <div className="absolute inset-0 gradient-mesh" aria-hidden="true" />

      <div className="container relative">
        {(title || subtitle) && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView || reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={reducedMotion ? { duration: 0 } : { duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
          >
            {title && (
              <h2 id="research-heading" className="font-display font-extrabold leading-tight text-3xl md:text-5xl lg:text-6xl mb-4">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-lg md:text-xl leading-relaxed text-white/80">
                {subtitle}
              </p>
            )}
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView || reducedMotion ? { opacity: 1 } : { opacity: 0 }}
          transition={reducedMotion ? { duration: 0 } : { duration: 0.6, ease: [0.4, 0, 0.2, 1], delay: 0.1 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8"
          role="list"
          aria-label="Research challenges"
        >
          {researchThemes.map((theme, index) => (
            <motion.article
              key={theme.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView || reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={reducedMotion ? { duration: 0 } : { duration: 0.5, ease: [0.4, 0, 0.2, 1], delay: 0.15 + index * 0.1 }}
              className="group relative h-[400px] md:h-[450px] lg:h-[500px] overflow-hidden"
              role="listitem"
            >
              <Link href={theme.href} className="block h-full">
                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent z-10" aria-hidden="true" />
                <Image
                src={theme.image}
                alt={theme.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
                <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end z-20">
                  <div className="mb-4">
                    <span className="px-3 py-1 bg-lime text-navy text-xs font-bold uppercase tracking-wider">
                      RESEARCH THEME
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-2xl md:text-3xl lg:text-4xl mb-3 group-hover:text-lime transition-colors">
                    {theme.title}
                  </h3>
                  <p className="text-white/70 text-base md:text-lg mb-4 line-clamp-2">{theme.subtitle}</p>
                  <p className="text-white/60 text-sm md:text-base mb-6 line-clamp-3 max-w-xs">{theme.description}</p>

                  <div className="flex flex-wrap gap-3 mb-6" role="list" aria-label="Key statistics">
                    {theme.stats.map((stat, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={reducedMotion ? { duration: 0 } : { delay: 0.3 + i * 0.05, duration: 0.3 }}
                        className="flex-shrink-0 px-3 py-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-xs"
                      >
                        <span className="font-display font-bold">{stat.value}</span>
                        <span className="ml-1 text-white/70">{stat.label}</span>
                      </motion.div>
                    ))}
                  </div>

                  <div className="inline-flex items-center gap-2 text-lime font-semibold hover:text-white transition-colors group">
                    Explore this theme
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView || reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={reducedMotion ? { duration: 0 } : { duration: 0.6, ease: [0.4, 0, 0.2, 1], delay: 0.5 }}
          className="mt-12 md:mt-16 text-center"
        >
          <Link
            href="/research"
            className="inline-flex items-center gap-2 text-white font-semibold hover:text-lime transition-colors text-lg border-2 border-white/30 hover:border-lime px-6 py-3"
          >
            View All Research Themes
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
