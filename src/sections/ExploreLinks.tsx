'use client';

import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useMediaQuery';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';
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

export function ExploreLinks({ title, links }: ExploreLinksProps) {
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
                link.featured && 'border-2 border-lime'
              )}
              role="listitem"
            >
              {link.featured && (
                <span className="absolute -top-3 left-6 bg-lime text-navy text-xs font-bold px-3 py-1">
                  FEATURED
                </span>
              )}

              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-lime/10 flex items-center justify-center flex-shrink-0 group-hover:bg-lime transition-colors duration-200">
                  {link.icon ? (
                    <span className="text-lime-deep group-hover:text-navy transition-colors duration-200">
                      {link.icon}
                    </span>
                  ) : (
                    <ArrowRight
                      className="w-5 h-5 text-lime-deep group-hover:text-navy transition-colors duration-200"
                      aria-hidden="true"
                    />
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="font-display font-bold text-navy text-lg group-hover:text-lime-deep transition-colors">
                    {link.label}
                  </h3>
                </div>
              </div>

              {link.description && (
                <p className="text-dark-grey text-sm mb-4 flex-1 leading-relaxed">{link.description}</p>
              )}

              <Link
                href={link.href}
                className="inline-flex items-center gap-2 text-navy font-medium hover:text-lime-deep transition-colors mt-auto group/link"
                aria-label={`Explore ${link.label}`}
              >
                Explore
                <ArrowRight
                  className="w-4 h-4 transition-transform group-hover/link:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
