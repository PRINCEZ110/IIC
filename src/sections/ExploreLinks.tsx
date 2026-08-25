'use client';

import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useMediaQuery';
import { cn } from '@/lib/utils';
import Link from 'next/link';

interface ExploreLinksProps {
  title?: string;
  links: Array<{
    label: string;
    href: string;
    description?: string;
    icon?: React.ReactNode;
    featured?: boolean;
  }>;
  variant?: 'default' | 'alternating';
}

export function ExploreLinks({ title, links, variant = 'default' }: ExploreLinksProps) {
  const reducedMotion = useReducedMotion();

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-off-white" aria-labelledby={title ? 'explore-heading' : undefined}>
      <div className="container">
        {title && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={reducedMotion ? { duration: 0 } : { duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
          >
            <h2 id="explore-heading" className="font-display font-extrabold text-navy leading-tight text-3xl md:text-5xl lg:text-6xl mb-4">
              {title}
            </h2>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={reducedMotion ? { duration: 0 } : { duration: 0.6, ease: [0.4, 0, 0.2, 1], delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          role="list"
          aria-label="Explore links"
        >
          {links.map((link, index) => (
            <motion.article
              key={link.href}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={reducedMotion ? { duration: 0 } : { duration: 0.4, ease: [0.4, 0, 0.2, 1], delay: 0.15 + index * 0.07 }}
              className={cn(
                'group relative p-6 md:p-8 bg-white border border-light-grey',
                'hover:border-lime hover:shadow-xl transition-all duration-300',
                'flex flex-col h-full',
                link.featured && 'border-2 border-lime relative'
              )}
              role="listitem"
            >
              {link.featured && (
                <span className="absolute -top-3 left-6 bg-lime text-navy text-xs font-bold px-3 py-1">
                  FEATURED
                </span>
              )}

              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-lime/10 flex items-center justify-center flex-shrink-0 group-hover:bg-lime group-hover:text-white transition-colors">
                  {link.icon || (
                    <svg className="w-6 h-6 text-lime group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="font-display font-bold text-navy text-lg group-hover:text-lime transition-colors">
                    {link.label}
                  </h3>
                </div>
              </div>

              {link.description && (
                <p className="text-dark-grey text-sm mb-4 flex-1">{link.description}</p>
              )}

              <Link
                href={link.href}
                className="inline-flex items-center gap-2 text-navy font-medium hover:text-lime transition-colors mt-auto group"
              >
                Explore
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}