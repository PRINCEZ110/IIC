'use client';

import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useMediaQuery';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import {
  Search,
  FileCheck,
  Calendar,
  Home,
  Award,
  Globe2,
  HeartHandshake,
  Mail,
  ArrowUpRight
} from 'lucide-react';

const quickActions = [
  {
    icon: Search,
    title: 'Find a Course',
    description: 'Browse undergraduate, postgraduate & research programmes.',
    href: '/study/courses',
    badge: 'Popular',
    accent: 'border-b-4 border-b-bright-blue',
  },
  {
    icon: FileCheck,
    title: 'Apply for 2025/26',
    description: 'Direct applications, requirements & intake dates.',
    href: '/admissions/apply',
    badge: 'Open',
    accent: 'border-b-4 border-b-lime',
  },
  {
    icon: Calendar,
    title: 'Book an Open Day',
    description: 'Meet professors, explore labs and experience student life.',
    href: '/events?type=open-day',
    badge: null,
    accent: 'border-b-4 border-b-navy',
  },
  {
    icon: Award,
    title: 'Scholarships & Fees',
    description: 'Merit-based financial aid & affordable fee schedules.',
    href: '/admissions/scholarships',
    badge: null,
    accent: 'border-b-4 border-b-warm-accent',
  },
  {
    icon: Globe2,
    title: 'International Students',
    description: 'Visas, entry qualifications & student support for 25+ nations.',
    href: '/study/international',
    badge: null,
    accent: 'border-b-4 border-b-cool-accent',
  },
  {
    icon: Home,
    title: 'Campus & Housing',
    description: 'Explore campus facilities, housing & Kathmandu student life.',
    href: '/life/campus',
    badge: null,
    accent: 'border-b-4 border-b-bright-blue',
  },
  {
    icon: HeartHandshake,
    title: 'Student Support',
    description: 'Career guidance, mentoring, wellbeing & academic tutoring.',
    href: '/life',
    badge: null,
    accent: 'border-b-4 border-b-lime',
  },
  {
    icon: Mail,
    title: 'Contact Admissions',
    description: 'Get one-on-one counsel from our admissions advisors.',
    href: '/contact',
    badge: null,
    accent: 'border-b-4 border-b-navy',
  },
];

export function QuickActions() {
  const reducedMotion = useReducedMotion();

  return (
    <section className="relative z-20 -mt-8 md:-mt-12 mb-12 md:mb-20" aria-labelledby="quick-actions-heading">
      <div className="container">
        <h2 id="quick-actions-heading" className="sr-only">
          Quick Access & Essential Services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 shadow-xl bg-white p-4 md:p-6 border border-light-grey">
          {quickActions.map((action, idx) => {
            const Icon = action.icon;
            return (
              <motion.div
                key={action.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={reducedMotion ? { duration: 0 } : { duration: 0.4, delay: idx * 0.05 }}
              >
                <Link
                  href={action.href}
                  className={cn(
                    'group block h-full p-5 bg-off-white/80 hover:bg-white hover:shadow-md transition-all duration-200 relative border border-light-grey/60',
                    action.accent
                  )}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="w-10 h-10 bg-navy text-white flex items-center justify-center group-hover:bg-lime group-hover:text-navy transition-colors duration-200">
                      <Icon className="w-5 h-5" />
                    </div>

                    <div className="flex items-center gap-1.5">
                      {action.badge && (
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 bg-lime text-navy">
                          {action.badge}
                        </span>
                      )}
                      <ArrowUpRight className="w-4 h-4 text-medium-grey group-hover:text-bright-blue group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>

                  <h3 className="font-display font-bold text-navy text-base md:text-lg mb-1 group-hover:text-bright-blue transition-colors">
                    {action.title}
                  </h3>
                  <p className="text-dark-grey text-xs md:text-sm leading-relaxed">
                    {action.description}
                  </p>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
