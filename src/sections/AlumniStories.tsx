'use client';

import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useMediaQuery';
import Link from 'next/link';
import { alumni } from '@/data/university';
import { Quote, ArrowRight,  MapPin, Award } from 'lucide-react';

export function AlumniStories() {
  const reducedMotion = useReducedMotion();

  return (
    <section className="py-16 md:py-24 bg-navy text-white relative overflow-hidden" aria-labelledby="alumni-stories-heading">
      {/* Background ambient pattern */}
      <div className="absolute inset-0 opacity-10 bg-grid" aria-hidden="true" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-lime/10 rounded-full blur-3xl" aria-hidden="true" />

      <div className="container relative z-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 md:mb-16">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-navy bg-lime px-3 py-1 mb-3 inline-block">
              Graduate Outcomes & Success
            </span>
            <h2 id="alumni-stories-heading" className="font-display font-extrabold text-white leading-tight text-3xl md:text-5xl lg:text-6xl mb-3">
              Where Our Graduates Lead
            </h2>
            <p className="text-lg text-white/80 leading-relaxed">
              From global tech giants to high-growth startups, IIC graduates are engineering the software and intelligence powering tomorrow.
            </p>
          </div>

          <Link
            href="/alumni"
            className="inline-flex items-center gap-2 text-lime font-bold hover:text-white transition-colors group"
          >
            Explore Alumni Network & Stories
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {alumni.slice(0, 3).map((person, idx) => (
            <motion.article
              key={person.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={reducedMotion ? { duration: 0 } : { duration: 0.5, delay: idx * 0.1 }}
              className="bg-white/5 border border-white/10 hover:border-lime/60 p-7 md:p-8 flex flex-col justify-between transition-all duration-300 relative group"
            >
              <div>
                <Quote className="w-10 h-10 text-lime/40 mb-4" />

                <p className="text-white/90 text-sm md:text-base leading-relaxed mb-6 italic">
                  &quot;{person.quote}&quot;
                </p>

                <div className="p-3 bg-white/5 border border-white/10 text-xs text-lime mb-6 flex items-center gap-2">
                  <Award className="w-4 h-4 text-lime flex-shrink-0" />
                  <span>{person.achievement}</span>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div>
                  <h3 className="font-display font-bold text-white text-lg">
                    {person.name}
                  </h3>
                  <p className="text-xs text-lime font-medium">
                    {person.currentRole} · <span className="text-white font-semibold">{person.company}</span>
                  </p>
                  <p className="text-[11px] text-white/50 mt-0.5 flex items-center gap-1">
                    <MapPin className="w-3 h-3" /> {person.location} · Class of {person.graduationYear} ({person.degree})
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Employability Stats Ribbon */}
        <div className="mt-12 p-6 md:p-8 bg-white/5 border border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="font-display font-extrabold text-3xl md:text-4xl text-lime mb-1">
              94%
            </div>
            <div className="text-xs text-white/70">
              Employment within 6 Months
            </div>
          </div>

          <div>
            <div className="font-display font-extrabold text-3xl md:text-4xl text-lime mb-1">
              50+
            </div>
            <div className="text-xs text-white/70">
              Tech Placement Partners
            </div>
          </div>

          <div>
            <div className="font-display font-extrabold text-3xl md:text-4xl text-lime mb-1">
              3,000+
            </div>
            <div className="text-xs text-white/70">
              Graduates Worldwide
            </div>
          </div>

          <div>
            <div className="font-display font-extrabold text-3xl md:text-4xl text-lime mb-1">
              25+
            </div>
            <div className="text-xs text-white/70">
              Global Alumni Chapters
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
