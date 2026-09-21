'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useMediaQuery';
import { cn } from '@/lib/utils';
import { courses } from '@/data/university';
import Link from 'next/link';
import { Clock, MapPin, Award, ArrowRight,  CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export function FeaturedCourses() {
  const reducedMotion = useReducedMotion();
  const [selectedLevel, setSelectedLevel] = useState<string>('all');

  const levels = [
    { id: 'all', label: 'All Programmes' },
    { id: 'Undergraduate', label: 'Undergraduate Degrees' },
    { id: 'Postgraduate Taught', label: 'Postgraduate (Masters)' },
  ];

  const filteredCourses = selectedLevel === 'all'
    ? courses
    : courses.filter(c => c.level === selectedLevel);

  return (
    <section className="py-16 md:py-24 bg-off-white" aria-labelledby="featured-courses-heading">
      <div className="container">
        {/* Header and Level Tabs */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 md:mb-14">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-navy bg-lime px-3 py-1 mb-3 inline-block">
              Academic Directory
            </span>
            <h2 id="featured-courses-heading" className="font-display font-extrabold text-navy leading-tight text-3xl md:text-5xl lg:text-6xl mb-3">
              Explore Our Degree Programmes
            </h2>
            <p className="text-lg text-dark-grey max-w-2xl">
              Industry-certified undergraduate and master&apos;s degrees developed in partnership with tech employers.
            </p>
          </div>

          <Link
            href="/study/courses"
            className="inline-flex items-center gap-2 text-navy font-bold hover:text-bright-blue transition-colors group"
          >
            View All Courses & Short Courses
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Level Filters */}
        <div className="flex flex-wrap gap-2 mb-8 border-b border-light-grey pb-4" role="tablist">
          {levels.map((level) => (
            <button
              key={level.id}
              onClick={() => setSelectedLevel(level.id)}
              role="tab"
              aria-selected={selectedLevel === level.id}
              className={cn(
                'px-5 py-2.5 text-sm font-bold transition-all duration-200',
                selectedLevel === level.id
                  ? 'bg-navy text-white shadow-sm'
                  : 'bg-white text-navy hover:bg-light-grey/60 border border-light-grey'
              )}
            >
              {level.label}
            </button>
          ))}
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="wait">
            {filteredCourses.map((course, idx) => (
              <motion.article
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={reducedMotion ? { duration: 0 } : { duration: 0.35, delay: idx * 0.05 }}
                className="bg-white border border-light-grey hover:border-lime hover:shadow-xl transition-all duration-300 flex flex-col justify-between p-6 md:p-7 relative group"
              >
                <div>
                  {/* Top metadata tags */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 bg-navy/5 text-navy">
                      {course.qualification}
                    </span>
                    <span className="text-xs font-semibold text-medium-grey">
                      {course.level}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-navy text-xl md:text-2xl mb-3 group-hover:text-bright-blue transition-colors">
                    <Link href={`/study/courses/${course.id}`}>
                      {course.name}
                    </Link>
                  </h3>

                  <p className="text-dark-grey text-sm leading-relaxed mb-5 line-clamp-3">
                    {course.description}
                  </p>

                  {/* Course key details */}
                  <div className="grid grid-cols-2 gap-3 text-xs text-dark-grey py-3 border-y border-light-grey mb-5">
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-bright-blue" />
                      <span>{course.duration} ({course.mode})</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-bright-blue" />
                      <span>{course.location}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5 text-bright-blue" />
                      <span>{course.accreditation}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-lime-darker" />
                      <span>Intake: {course.startDate}</span>
                    </div>
                  </div>

                  {/* Sample career paths */}
                  <div className="mb-6">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-medium-grey block mb-1.5">
                      Target Careers:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {course.careerPaths.slice(0, 3).map((cp) => (
                        <span key={cp} className="text-xs bg-off-white text-navy font-medium px-2 py-0.5 border border-light-grey/80">
                          {cp}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="flex items-center gap-3 pt-2">
                  <Button variant="primary" size="sm" asChild fullWidth className="text-xs font-semibold">
                    <Link href={`/study/courses/${course.id}`}>
                      View Course
                    </Link>
                  </Button>
                  <Button variant="outline" size="sm" asChild fullWidth className="text-xs font-semibold">
                    <Link href="/admissions/apply">
                      Apply Now
                    </Link>
                  </Button>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        {/* Bottom CTA bar */}
        <div className="mt-12 p-6 md:p-8 bg-navy text-white flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-lime text-navy flex items-center justify-center flex-shrink-0 font-display font-extrabold text-xl">
              ?
            </div>
            <div>
              <h4 className="font-display font-bold text-lg md:text-xl">
                Unsure which degree fits your career goals?
              </h4>
              <p className="text-white/80 text-sm">
                Speak directly with an academic advisor or attend an online course consultation session.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 flex-shrink-0">
            <Button variant="lime" size="md" asChild>
              <Link href="/contact">Book Consultation</Link>
            </Button>
            <Button variant="outline" size="md" asChild className="text-white border-white/40 hover:bg-white/10">
              <Link href="/admissions/requirements">Entry Requirements</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
