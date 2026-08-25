'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useMediaQuery';
import { cn } from '@/lib/utils';
import { courses, studyCategories } from '@/data/university';
import { Header } from '@/components/ui/Header';
import { Footer } from '@/components/ui/Footer';
import { Hero } from '@/sections/Hero';
import { Button } from '@/components/ui/Button';
import { ChevronDown, Filter, X, Search } from 'lucide-react';
import Link from 'next/link';

const levels = ['All', 'Undergraduate', 'Postgraduate Taught', 'Postgraduate Research'];
const subjects = ['All', 'Computer Science', 'Software Engineering', 'Data Science', 'Artificial Intelligence', 'Cyber Security'];
const modes = ['All', 'Full-time', 'Part-time', 'Online'];

export default function CoursesPage() {
  const reducedMotion = useReducedMotion();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('All');
  const [selectedSubject, setSelectedSubject] = useState('All');
  const [selectedMode, setSelectedMode] = useState('All');
  const [sortBy, setSortBy] = useState('name');
  const [showFilters, setShowFilters] = useState(false);

  const filteredCourses = useMemo(() => {
    return courses.filter(course => {
      const matchesSearch = course.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesLevel = selectedLevel === 'All' || course.level === selectedLevel;
      const matchesSubject = selectedSubject === 'All' || course.subject === selectedSubject;
      const matchesMode = selectedMode === 'All' || course.mode === selectedMode;
      return matchesSearch && matchesLevel && matchesSubject && matchesMode;
    }).sort((a, b) => {
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      if (sortBy === 'level') return a.level.localeCompare(b.level);
      if (sortBy === 'fees') return parseInt(a.fees.replace(/[^0-9]/g, '')) - parseInt(b.fees.replace(/[^0-9]/g, ''));
      return 0;
    });
  }, [searchQuery, selectedLevel, selectedSubject, selectedMode, sortBy]);

  interface ActiveFilter {
  label: string;
  value: 'level' | 'subject' | 'mode';
}

const activeFilters: ActiveFilter[] = [
  selectedLevel !== 'All' && { label: `Level: ${selectedLevel}`, value: 'level' },
  selectedSubject !== 'All' && { label: `Subject: ${selectedSubject}`, value: 'subject' },
  selectedMode !== 'All' && { label: `Mode: ${selectedMode}`, value: 'mode' },
].filter((f): f is ActiveFilter => Boolean(f));

  const clearFilter = (filter: string) => {
    if (filter === 'level') setSelectedLevel('All');
    if (filter === 'subject') setSelectedSubject('All');
    if (filter === 'mode') setSelectedMode('All');
  };

  const clearAllFilters = () => {
    setSelectedLevel('All');
    setSelectedSubject('All');
    setSelectedMode('All');
    setSearchQuery('');
  };

  return (
    <>
      <Header />
      <main id="main-content" className="flex-1 pt-16 md:pt-20 lg:pt-24">
        <Hero
          headline="Find Your\nPerfect Course"
          subheadline="Search and filter our programmes to discover the right path for your future."
          image="/images/courses-hero.jpg"
          imageAlt="Course search"
          variant="page"
        />

        <section className="py-8 md:py-12 lg:py-16 bg-white" aria-labelledby="course-finder-heading">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={reducedMotion ? { duration: 0 } : { duration: 0.5 }}
              className="max-w-4xl mx-auto"
            >
              <div className="relative mb-8">
                <label htmlFor="course-search" className="sr-only">Search courses</label>
                <div className="relative">
                  <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-navy/40 text-2xl" aria-hidden="true" />
                  <input
                    id="course-search"
                    type="search"
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    placeholder="Search courses by name, subject, or keyword..."
                    className="w-full bg-white border-2 border-light-grey focus:border-lime focus:ring-2 focus:ring-lime/20 text-navy text-lg py-4 pl-14 pr-16 transition-all duration-200"
                    autoComplete="off"
                  />
                  {searchQuery && (
                    <button
                      type="button"
                      onClick={() => setSearchQuery('')}
                      className="absolute right-5 top-1/2 -translate-y-1/2 text-navy/40 hover:text-lime transition-colors p-1"
                      aria-label="Clear search"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  )}
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="flex-1">
                  <label htmlFor="sort-by" className="sr-only">Sort by</label>
                  <select
                    id="sort-by"
                    value={sortBy}
                    onChange={e => setSortBy(e.target.value)}
                    className="w-full bg-white border-2 border-light-grey focus:border-lime focus:ring-2 focus:ring-lime/20 text-navy text-base py-3 px-4 appearance-none bg-no-repeat bg-right pr-10"
                    style={{ backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236B6B6B' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")` }}
                  >
                    <option value="name">Sort by Name (A-Z)</option>
                    <option value="level">Sort by Level</option>
                    <option value="fees">Sort by Fees (Low to High)</option>
                  </select>
                </div>
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="inline-flex items-center gap-2 px-4 py-3 bg-white border-2 border-light-grey hover:border-lime hover:bg-lime/5 transition-colors text-navy font-medium"
                >
                  <Filter className="w-5 h-5" aria-hidden="true" />
                  Filters
                  {activeFilters.length > 0 && (
                    <span className="bg-lime text-navy text-xs font-bold px-2 py-0.5 rounded-full">
                      {activeFilters.length}
                    </span>
                  )}
                  <ChevronDown className={cn('w-4 h-4 transition-transform', showFilters && 'rotate-180')} aria-hidden="true" />
                </button>
              </div>

              <AnimatePresence>
                {showFilters && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={reducedMotion ? { duration: 0 } : { duration: 0.3 }}
                    className="overflow-hidden bg-off-white p-6 rounded-none border border-light-grey"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                      <div>
                        <label htmlFor="filter-level" className="block text-sm font-medium text-navy mb-1">Study Level</label>
                        <select
                          id="filter-level"
                          value={selectedLevel}
                          onChange={e => setSelectedLevel(e.target.value)}
                          className="w-full bg-white border border-light-grey focus:border-lime focus:ring-2 focus:ring-lime/20 text-navy py-2 px-3"
                        >
                          {levels.map(level => (
                            <option key={level} value={level}>{level}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label htmlFor="filter-subject" className="block text-sm font-medium text-navy mb-1">Subject</label>
                        <select
                          id="filter-subject"
                          value={selectedSubject}
                          onChange={e => setSelectedSubject(e.target.value)}
                          className="w-full bg-white border border-light-grey focus:border-lime focus:ring-2 focus:ring-lime/20 text-navy py-2 px-3"
                        >
                          {subjects.map(subject => (
                            <option key={subject} value={subject}>{subject}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label htmlFor="filter-mode" className="block text-sm font-medium text-navy mb-1">Study Mode</label>
                        <select
                          id="filter-mode"
                          value={selectedMode}
                          onChange={e => setSelectedMode(e.target.value)}
                          className="w-full bg-white border border-light-grey focus:border-lime focus:ring-2 focus:ring-lime/20 text-navy py-2 px-3"
                        >
                          {modes.map(mode => (
                            <option key={mode} value={mode}>{mode}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                    {activeFilters.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {activeFilters.map(filter => (
                          <span key={filter.value} className="inline-flex items-center gap-1 px-3 py-1 bg-lime text-navy text-sm font-medium">
                            {filter.label}
                            <button
                              onClick={() => clearFilter(filter.value)}
                              className="hover:text-navy/70"
                              aria-label={`Remove ${filter.label} filter`}
                            >
                              <X className="w-3.5 h-3.5" aria-hidden="true" />
                            </button>
                          </span>
                        ))}
                        <button
                          onClick={clearAllFilters}
                          className="px-3 py-1 text-navy/60 hover:text-lime text-sm font-medium"
                        >
                          Clear all
                        </button>
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>

              <p className="text-sm text-medium-grey mt-4">
                Showing {filteredCourses.length} of {courses.length} courses
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={reducedMotion ? { duration: 0 } : { duration: 0.5, delay: 0.1 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              role="list"
              aria-label="Course listings"
            >
              {filteredCourses.map((course, index) => (
                <motion.article
                  key={course.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={reducedMotion ? { duration: 0 } : { duration: 0.3, delay: 0.05 * index }}
                  className="group bg-white border border-light-grey hover:border-lime hover:shadow-xl transition-all duration-300 overflow-hidden h-full flex flex-col"
                  role="listitem"
                >
                  <Link href={`/study/courses/${course.id}`} className="relative aspect-video overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true" />
                    <img
                      src={`/images/course-${course.id}.jpg`}
                      alt=""
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-lime text-navy text-xs font-bold uppercase tracking-wider">{course.level}</span>
                      <span className="px-2 py-1 bg-white/90 text-navy text-xs font-medium">{course.mode}</span>
                    </div>
                  </Link>

                  <div className="p-5 flex-1 flex flex-col">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2 py-0.5 bg-blue-500/10 text-blue-500 text-xs font-medium">{course.subject}</span>
                      <span className="px-2 py-0.5 bg-lime/10 text-lime text-xs font-medium">{course.qualification}</span>
                    </div>
                    <h3 className="font-display font-bold text-navy text-xl mb-2 group-hover:text-lime transition-colors line-clamp-2">
                      <Link href={`/study/courses/${course.id}`}>{course.name}</Link>
                    </h3>
                    <p className="text-dark-grey text-sm mb-4 flex-1 line-clamp-2">{course.description}</p>

                    <div className="space-y-2 mb-4 text-sm text-medium-grey">
                      <div className="flex items-center gap-2">
                        <span className="w-5 h-5 text-lime flex-shrink-0" aria-hidden="true">⏱</span>
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-5 h-5 text-lime flex-shrink-0" aria-hidden="true">📍</span>
                        <span>{course.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-5 h-5 text-lime flex-shrink-0" aria-hidden="true">💰</span>
                        <span>{course.fees}</span>
                      </div>
                    </div>

                    <Link
                      href={`/study/courses/${course.id}`}
                      className="inline-flex items-center gap-2 text-navy font-medium hover:text-lime transition-colors mt-auto group"
                    >
                      View Course Details
                      <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </motion.article>
              ))}

              {filteredCourses.length === 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="col-span-full text-center py-16"
                >
                  <div className="text-6xl mb-4" aria-hidden="true">🔍</div>
                  <h3 className="font-display font-bold text-navy text-2xl mb-2">No courses found</h3>
                  <p className="text-dark-grey mb-6">Try adjusting your search or filters</p>
                  <Button variant="outline" onClick={clearAllFilters}>Clear All Filters</Button>
                </motion.div>
              )}
            </motion.div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-navy text-white" aria-labelledby="study-categories-heading">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
              <h2 id="study-categories-heading" className="font-display font-extrabold leading-tight text-3xl md:text-5xl lg:text-6xl mb-4">
                Explore by Study Category
              </h2>
              <p className="text-lg md:text-xl text-white/80 leading-relaxed">
                Browse our programmes organised by study level and interest area.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {studyCategories.map((category, index) => (
                <motion.article
                  key={category.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={reducedMotion ? { duration: 0 } : { duration: 0.4, delay: 0.1 * index }}
                  className="group relative overflow-hidden bg-white/10 border border-white/20 hover:border-lime hover:bg-white/20 transition-all duration-300 p-6 h-full flex flex-col"
                >
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-lime font-display font-bold text-3xl">0{index + 1}</span>
                    <Filter className="w-6 h-6 text-white/30 group-hover:text-lime transition-colors" aria-hidden="true" />
                  </div>
                  <h3 className="font-display font-bold text-white text-2xl mb-2 group-hover:text-lime transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-white/60 text-sm mb-4 flex-1">{category.description}</p>
                  <ul className="space-y-1 mb-6 flex-1" role="list">
                    {category.courses.slice(0, 3).map((course) => (
                      <li key={course} className="text-white/70 text-sm group-hover:text-white transition-colors flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-white/30 rounded-full flex-shrink-0 group-hover:bg-lime transition-colors" aria-hidden="true" />
                        {course}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={category.href}
                    className="inline-flex items-center gap-2 text-white font-medium hover:text-lime transition-colors mt-auto group"
                  >
                    {category.cta}
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

import { AnimatePresence } from 'framer-motion';