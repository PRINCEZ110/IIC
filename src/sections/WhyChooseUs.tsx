'use client';

import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useMediaQuery';
import Link from 'next/link';
import {
  GraduationCap,
  Briefcase,
  Cpu,
  FlaskConical,
  Users2,
  ShieldCheck,
  ArrowRight
} from 'lucide-react';

const reasons = [
  {
    icon: GraduationCap,
    title: 'Top Computing Excellence',
    stat: 'Est. 2000',
    description: 'Over 25 years of academic leadership affiliated with Tribhuvan and Pokhara Universities, producing future-ready technologists.',
    link: '/about',
    linkText: 'Our Academic Heritage',
  },
  {
    icon: Briefcase,
    title: '94% Graduate Employment',
    stat: '94% Employability',
    description: 'Direct industry hiring pipelines with 50+ tech partners including Microsoft, Amazon Web Services, and leading software firms.',
    link: '/life',
    linkText: 'Career Support & Placements',
  },
  {
    icon: Cpu,
    title: 'Advanced AI & Research Labs',
    stat: 'Rs. 120M+ Funding',
    description: 'Dedicated GPU compute clusters, isolated cybersecurity testbeds, and green computing research facilities in Kathmandu.',
    link: '/research/centres',
    linkText: 'Explore Research Labs',
  },
  {
    icon: Users2,
    title: '3,000+ Global Alumni',
    stat: '25+ Countries',
    description: 'Our alumni build core infrastructure and lead engineering teams worldwide at Google, Microsoft, Fusemachines, and high-growth startups.',
    link: '/alumni',
    linkText: 'Meet Our Alumni',
  },
  {
    icon: FlaskConical,
    title: 'Project-Driven Curriculum',
    stat: '100% Practical',
    description: 'Hands-on coursework, annual hackathons, and real-world capstone projects solving national and international technology challenges.',
    link: '/study/courses',
    linkText: 'Explore Degree Programs',
  },
  {
    icon: ShieldCheck,
    title: 'Comprehensive Student Support',
    stat: '360° Mentoring',
    description: 'Personal academic tutors, mental health wellbeing services, merit scholarships, and an active Students’ Union with 100+ activities.',
    link: '/life',
    linkText: 'Student Support Services',
  },
];

export function WhyChooseUs() {
  const reducedMotion = useReducedMotion();

  return (
    <section className="py-16 md:py-24 bg-white" aria-labelledby="why-choose-heading">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={reducedMotion ? { duration: 0 } : { duration: 0.5 }}
          className="max-w-3xl mb-12 md:mb-16"
        >
          <span className="text-xs font-bold uppercase tracking-wider text-bright-blue bg-bright-blue/10 px-3 py-1 mb-3 inline-block">
            Why Study at IIC
          </span>
          <h2 id="why-choose-heading" className="font-display font-extrabold text-navy leading-tight text-3xl md:text-5xl lg:text-6xl mb-4">
            Education Designed for the Digital Future
          </h2>
          <p className="text-lg text-dark-grey leading-relaxed">
            Discover why students choose IIC for their undergraduate degrees, postgraduate research, and professional careers.
          </p>
        </motion.div>

        {/* Reason Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {reasons.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={reducedMotion ? { duration: 0 } : { duration: 0.5, delay: idx * 0.08 }}
                className="group relative bg-off-white/60 hover:bg-white border border-light-grey hover:border-navy hover:shadow-xl transition-all duration-300 p-7 md:p-8 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 bg-navy text-lime flex items-center justify-center group-hover:bg-lime group-hover:text-navy transition-colors duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-display font-extrabold text-xs text-navy/70 bg-light-grey/80 px-2.5 py-1">
                      {item.stat}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-navy text-xl md:text-2xl mb-3 group-hover:text-bright-blue transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-dark-grey text-sm md:text-base leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                <Link
                  href={item.link}
                  className="inline-flex items-center gap-2 text-navy font-semibold text-sm hover:text-bright-blue transition-colors pt-4 border-t border-light-grey group/link"
                >
                  {item.linkText}
                  <ArrowRight className="w-4 h-4 text-bright-blue group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
