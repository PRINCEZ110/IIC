'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, ArrowRight, GraduationCap, BookOpen, Microscope, Sparkles } from 'lucide-react';
import { useReducedMotion } from '@/hooks/useMediaQuery';
import { cn } from '@/lib/utils';
import { studyCategories } from '@/data/university';
import Link from 'next/link';

const popularKeywords = [
  'BSc Computing',
  'Software Engineering',
  'Data Science',
  'Cyber Security',
  'Artificial Intelligence',
  'MSc Computing',
  'AWS Certification',
];

export function CourseSearch() {
  const reducedMotion = useReducedMotion();
  const router = useRouter();
  const [query, setQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const handleInputChange = (value: string) => {
    setQuery(value);
    setShowSuggestions(true);
    if (value.length > 1) {
      const allCourses = studyCategories.flatMap(c => c.courses);
      const filtered = allCourses
        .filter(c => c.toLowerCase().includes(value.toLowerCase()))
        .slice(0, 6);
      setSuggestions(filtered);
    } else {
      setSuggestions([]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/study/courses?q=${encodeURIComponent(query.trim())}`);
    } else {
      router.push('/study/courses');
    }
  };

  const handleKeywordClick = (kw: string) => {
    setQuery(kw);
    router.push(`/study/courses?q=${encodeURIComponent(kw)}`);
  };

  const studyGateways = [
    {
      icon: GraduationCap,
      level: 'Undergraduate',
      tag: 'Bachelor Degrees (4 Years)',
      desc: 'BSc Computing, Software Engineering, Data Science & Cyber Security.',
      href: '/study/undergraduate',
      count: '4 Degrees',
      accent: 'border-b-4 border-b-lime',
    },
    {
      icon: BookOpen,
      level: 'Postgraduate Taught',
      tag: 'Masters Degrees (2 Years)',
      desc: 'MSc Computing, MSc Artificial Intelligence, Advanced Software & Data.',
      href: '/study/postgraduate',
      count: '4 Programmes',
      accent: 'border-b-4 border-b-bright-blue',
    },
    {
      icon: Microscope,
      level: 'Postgraduate Research',
      tag: 'MPhil & PhD Studies',
      desc: 'Funded doctoral opportunities in AI/ML, green computing & cyber defense.',
      href: '/study/research',
      count: '6 Research Areas',
      accent: 'border-b-4 border-b-navy',
    },
    {
      icon: Sparkles,
      level: 'Professional & Short Courses',
      tag: 'Certifications & Bootcamps',
      desc: 'Industry certifications: AWS, Full Stack, Python & Data Analytics.',
      href: '/study/professional',
      count: '20+ Courses',
      accent: 'border-b-4 border-b-warm-accent',
    },
  ];

  return (
    <section id="find-course" className="relative py-16 md:py-24 bg-white" aria-labelledby="course-search-heading">
      <div className="container">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={reducedMotion ? { duration: 0 } : { duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-10 md:mb-12"
        >
          <span className="text-xs font-bold uppercase tracking-wider text-navy bg-lime px-3 py-1 mb-3 inline-block">
            Course Finder
          </span>
          <h2 id="course-search-heading" className="font-display font-extrabold text-navy leading-tight text-3xl md:text-5xl lg:text-6xl mb-3">
            Find Your Future at IIC
          </h2>
          <p className="text-lg text-dark-grey leading-relaxed">
            Search our industry-aligned undergraduate degrees, postgraduate qualifications, and research opportunities.
          </p>
        </motion.div>

        {/* Central Search Form (Hull benchmark) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={reducedMotion ? { duration: 0 } : { duration: 0.5, delay: 0.1 }}
          className="max-w-4xl mx-auto mb-8"
        >
          <form onSubmit={handleSubmit} className="relative bg-white shadow-2xl border-2 border-navy">
            <div className="flex flex-col md:flex-row items-stretch">
              {/* Input Field */}
              <div className="relative flex-1">
                <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-navy/40 w-6 h-6" aria-hidden="true" />
                <input
                  id="course-search"
                  type="search"
                  role="combobox"
                  aria-expanded={showSuggestions && suggestions.length > 0}
                  aria-controls="course-suggestions"
                  value={query}
                  onChange={e => handleInputChange(e.target.value)}
                  onFocus={() => setShowSuggestions(true)}
                  onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
                  placeholder="Search by subject, degree (e.g. Data Science, BSc, AI)..."
                  className="w-full bg-white text-navy font-medium text-base md:text-lg py-5 pl-14 pr-12 focus:outline-none focus:ring-0 placeholder:text-medium-grey/70"
                  autoComplete="off"
                  aria-label="Search courses"
                />
                {query && (
                  <button
                    type="button"
                    onClick={() => setQuery('')}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-navy/40 hover:text-navy p-1"
                    aria-label="Clear search"
                  >
                    <X className="w-5 h-5" />
                  </button>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="bg-navy hover:bg-navy-light text-white font-display font-bold text-base md:text-lg px-8 py-4 flex items-center justify-center gap-2 transition-colors duration-150 flex-shrink-0"
              >
                <span>Find Courses</span>
                <ArrowRight className="w-5 h-5 text-lime" />
              </button>
            </div>

            {/* Suggestions Dropdown */}
            <AnimatePresence>
              {showSuggestions && suggestions.length > 0 && (
                <motion.ul
                  id="course-suggestions"
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  className="absolute top-full left-0 right-0 bg-white border border-light-grey shadow-xl z-50 divide-y divide-light-grey"
                  role="listbox"
                >
                  {suggestions.map((sug) => (
                    <li key={sug}>
                      <button
                        type="button"
                        onClick={() => handleKeywordClick(sug)}
                        className="w-full px-5 py-3.5 text-left text-navy hover:bg-lime/10 hover:text-bright-blue font-medium flex items-center gap-3 transition-colors text-sm md:text-base"
                      >
                        <Search className="w-4 h-4 text-navy/40" />
                        <span>{sug}</span>
                      </button>
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </form>

          {/* Popular Search Pills */}
          <div className="flex flex-wrap items-center gap-2 mt-4 text-xs">
            <span className="font-bold text-navy uppercase tracking-wider">Popular searches:</span>
            {popularKeywords.map((kw) => (
              <button
                key={kw}
                type="button"
                onClick={() => handleKeywordClick(kw)}
                className="px-2.5 py-1 bg-off-white hover:bg-lime text-navy font-semibold border border-light-grey transition-colors"
              >
                {kw}
              </button>
            ))}
          </div>
        </motion.div>

        {/* 4 Study Level Gateway Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto mt-12">
          {studyGateways.map((gw, idx) => {
            const Icon = gw.icon;
            return (
              <motion.div
                key={gw.level}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={reducedMotion ? { duration: 0 } : { duration: 0.4, delay: 0.15 + idx * 0.08 }}
              >
                <Link
                  href={gw.href}
                  className={cn(
                    'group block h-full p-6 bg-off-white hover:bg-white hover:shadow-xl transition-all duration-300 border border-light-grey flex flex-col justify-between',
                    gw.accent
                  )}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-navy text-lime flex items-center justify-center group-hover:bg-lime group-hover:text-navy transition-colors">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-bold text-medium-grey">
                        {gw.count}
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-navy text-xl mb-1 group-hover:text-bright-blue transition-colors">
                      {gw.level}
                    </h3>
                    <p className="text-xs font-semibold text-bright-blue mb-2.5">
                      {gw.tag}
                    </p>
                    <p className="text-dark-grey text-xs md:text-sm leading-relaxed mb-6">
                      {gw.desc}
                    </p>
                  </div>

                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-navy group-hover:text-bright-blue transition-colors mt-auto">
                    Explore Programmes
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
