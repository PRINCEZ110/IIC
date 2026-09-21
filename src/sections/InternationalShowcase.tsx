'use client';

import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useMediaQuery';
import Link from 'next/link';
import {  Plane, BookCheck, Award, HeartHandshake, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';

const internationalHighlights = [
  {
    icon: BookCheck,
    title: 'Global Entry Recognition',
    description: 'We accept A-Levels, IB Diploma, CBSE/ISC, High School Diplomas, and international bachelor’s degrees.',
    link: '/study/international',
  },
  {
    icon: Award,
    title: 'International Scholarships',
    description: 'Generous merit-based tuition grants available for high-achieving international applicants.',
    link: '/admissions/scholarships',
  },
  {
    icon: Plane,
    title: 'Visa & Arrival Support',
    description: 'Dedicated International Student Office assisting with student visa processing, airport pickup, and local registration.',
    link: '/study/international',
  },
  {
    icon: HeartHandshake,
    title: 'Community & Housing',
    description: 'Guaranteed student accommodation support and cultural integration programs in historic Kathmandu.',
    link: '/life/accommodation',
  },
];

export function InternationalShowcase() {
  const reducedMotion = useReducedMotion();

  return (
    <section className="py-16 md:py-24 bg-white" aria-labelledby="international-heading">
      <div className="container">
        <div className="bg-navy text-white p-8 md:p-12 lg:p-16 relative overflow-hidden">
          {/* Subtle accent glow */}
          <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-bright-blue/20 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 relative z-10 items-center">
            {/* Left intro */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-navy bg-lime px-3 py-1 inline-block">
                Global Admissions
              </span>
              <h2 id="international-heading" className="font-display font-extrabold text-white leading-tight text-3xl md:text-5xl">
                Welcoming Students from 25+ Countries
              </h2>
              <p className="text-white/80 text-base md:text-lg leading-relaxed">
                Join a dynamic, multicultural learning environment in Nepal&apos;s tech hub. We support international students at every step from application to graduation.
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                <Button variant="lime" size="lg" asChild>
                  <Link href="/study/international">
                    International Guide
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild className="text-white border-white/40 hover:bg-white/10">
                  <Link href="/contact">
                    Speak to International Team
                  </Link>
                </Button>
              </div>
            </div>

            {/* Right 4 cards */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {internationalHighlights.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={reducedMotion ? { duration: 0 } : { duration: 0.4, delay: idx * 0.08 }}
                    className="p-5 bg-white/5 border border-white/10 hover:border-lime/50 transition-colors"
                  >
                    <div className="w-10 h-10 bg-lime text-navy flex items-center justify-center mb-3">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-display font-bold text-white text-lg mb-2">
                      {item.title}
                    </h3>
                    <p className="text-white/70 text-xs md:text-sm leading-relaxed mb-3">
                      {item.description}
                    </p>
                    <Link
                      href={item.link}
                      className="inline-flex items-center gap-1 text-xs font-bold text-lime hover:underline"
                    >
                      Learn More <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
