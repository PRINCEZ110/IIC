'use client';

import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useMediaQuery';
import { cn } from '@/lib/utils';
import { studyCategories } from '@/data/university';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface StudyOptionsProps {
  title?: string;
  subtitle?: string;
}

export function StudyOptions({ title, subtitle }: StudyOptionsProps) {
  const reducedMotion = useReducedMotion();

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-white" aria-labelledby={title ? 'study-options-heading' : undefined}>
      <div className="container">
        {(title || subtitle) && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={reducedMotion ? { duration: 0 } : { duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
          >
            {title && (
              <h2 id="study-options-heading" className="font-display font-extrabold text-navy leading-tight text-3xl md:text-5xl lg:text-6xl mb-4">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-lg md:text-xl text-dark-grey leading-relaxed">
                {subtitle}
              </p>
            )}
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={reducedMotion ? { duration: 0 } : { duration: 0.6, ease: [0.4, 0, 0.2, 1], delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          role="list"
          aria-label="Study options"
        >
          {studyCategories.map((category, index) => (
            <motion.article
              key={category.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={reducedMotion ? { duration: 0 } : { duration: 0.5, ease: [0.4, 0, 0.2, 1], delay: 0.15 + index * 0.1 }}
              className="group relative overflow-hidden bg-white border border-light-grey hover:border-lime hover:shadow-xl transition-all duration-300 h-full flex flex-col"
              role="listitem"
            >
              <Link href={category.href} className="relative block aspect-[4/3] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true" />
                <img
                  src={category.image}
                  alt=""
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 text-white">
                  <span className="px-3 py-1 bg-lime text-navy text-xs font-bold uppercase tracking-wider mb-3 inline-block">
                    {category.courses.length} programmes
                  </span>
                  <h3 className="font-display font-bold text-xl md:text-2xl mb-2">{category.title}</h3>
                  <p className="text-white/80 text-sm md:text-base line-clamp-2">{category.description}</p>
                </div>
              </Link>

              <div className="p-5 md:p-6 flex-1 flex flex-col">
                <ul className="space-y-2 mb-4 flex-1" role="list">
                  {category.courses.slice(0, 3).map((course) => (
                    <li key={course} className="flex items-center gap-2 text-dark-grey text-sm group-hover:text-navy transition-colors">
                      <span className="w-1.5 h-1.5 bg-navy/30 rounded-full flex-shrink-0 group-hover:bg-lime transition-colors" aria-hidden="true" />
                      {course}
                    </li>
                  ))}
                  {category.courses.length > 3 && (
                    <li className="text-lime text-sm font-medium">+{category.courses.length - 3} more</li>
                  )}
                </ul>

                <Link
                  href={category.href}
                  className="inline-flex items-center gap-2 text-navy font-medium hover:text-lime transition-colors mt-auto group"
                >
                  {category.cta}
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </Link>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={reducedMotion ? { duration: 0 } : { duration: 0.6, ease: [0.4, 0, 0.2, 1], delay: 0.5 }}
          className="mt-12 md:mt-16 text-center"
        >
          <Link
            href="/study/courses"
            className="inline-flex items-center gap-2 text-navy font-semibold hover:text-lime transition-colors text-lg"
          >
            View All Courses
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}