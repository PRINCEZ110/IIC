'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Search, Filter, ChevronDown, X } from 'lucide-react';
import { useReducedMotion } from '@/hooks/useMediaQuery';
import { cn } from '@/lib/utils';
import { studyCategories } from '@/data/university';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

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
        .slice(0, 5);
      setSuggestions(filtered);
    } else {
      setSuggestions([]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/study/courses?q=${encodeURIComponent(query)}`);
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setQuery(suggestion);
    setShowSuggestions(false);
    router.push(`/study/courses?q=${encodeURIComponent(suggestion)}`);
  };

  const studyOptions = [
    { label: 'Undergraduate', href: '/study/undergraduate', count: '12 programmes' },
    { label: 'Postgraduate Taught', href: '/study/postgraduate', count: '8 programmes' },
    { label: 'Postgraduate Research', href: '/study/research', count: '6 programmes' },
    { label: 'Funded PhD Opportunities', href: '/study/research/funded', count: '15+ positions' },
    { label: 'Short Courses', href: '/study/professional', count: '20+ courses' },
    { label: 'Online Learning', href: '/study/online', count: 'Flexible options' },
    { label: 'International Students', href: '/study/international', count: '25+ countries' },
    { label: 'Apprenticeships', href: '/study/apprenticeships', count: 'Earn while you learn' },
  ];

  return (
    <section className="relative py-16 md:py-24 lg:py-32 bg-off-white" aria-labelledby="course-search-heading">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="max-w-3xl mx-auto text-center mb-12 md:mb-16"
        >
          <h2 id="course-search-heading" className="font-display font-extrabold text-navy leading-tight text-3xl md:text-5xl lg:text-6xl mb-4">
            Find a course for any direction
          </h2>
          <p className="text-lg md:text-xl text-dark-grey leading-relaxed">
            Discover the course that could shape your future. Search by subject, level, or keyword.
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1], delay: 0.1 }}
          className="relative max-w-4xl mx-auto mb-12 md:mb-16"
        >
          <label htmlFor="course-search" className="sr-only">
            Search for a course or subject
          </label>
          <div className="relative">
            <div className="relative">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-navy/40 text-2xl" aria-hidden="true" />
              <input
                id="course-search"
                type="search"
                value={query}
                onChange={e => handleInputChange(e.target.value)}
                onFocus={() => setShowSuggestions(true)}
                onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
                placeholder="Search for a course or subject..."
                className="w-full bg-white border-2 border-light-grey focus:border-lime focus:ring-2 focus:ring-lime/20 text-navy text-lg md:text-xl py-5 pl-14 pr-16 transition-all duration-200"
                autoComplete="off"
                aria-autocomplete="list"
                aria-controls="course-suggestions"
                aria-expanded={showSuggestions && suggestions.length > 0}
              />
              {query && (
                <button
                  type="button"
                  onClick={() => setQuery('')}
                  className="absolute right-5 top-1/2 -translate-y-1/2 text-navy/40 hover:text-lime transition-colors p-1"
                  aria-label="Clear search"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>

            <AnimatePresence>
              {showSuggestions && suggestions.length > 0 && (
                <motion.ul
                  id="course-suggestions"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={reducedMotion ? { duration: 0 } : { duration: 0.2 }}
                  className="absolute top-full left-0 right-0 mt-2 bg-white border border-light-grey shadow-xl rounded-none overflow-hidden z-50 max-h-60 overflow-y-auto"
                  role="listbox"
                >
                  {suggestions.map((suggestion, index) => (
                    <motion.li
                      key={suggestion}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.03 }}
                    >
                      <button
                        type="button"
                        onClick={() => handleSuggestionClick(suggestion)}
                        className="w-full px-5 py-3 text-left text-navy hover:bg-lime/10 hover:text-lime transition-colors flex items-center gap-3"
                        role="option"
                      >
                        <Search className="w-5 h-5 text-navy/40" aria-hidden="true" />
                        <span>{suggestion}</span>
                      </button>
                    </motion.li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </div>

          <button
            type="submit"
            className="absolute right-2 top-2 bottom-2 bg-navy text-white px-6 font-medium hover:bg-navy-light transition-colors hidden md:block"
            aria-label="Search"
          >
            Search
          </button>
        </motion.form>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1], delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto"
          role="list"
          aria-label="Study options"
        >
          {studyOptions.map((option, index) => (
            <motion.article
              key={option.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + index * 0.05, duration: 0.4 }}
              className="group relative bg-white border border-light-grey hover:border-lime hover:shadow-xl transition-all duration-300 overflow-hidden"
              role="listitem"
            >
              <Link
                href={option.href}
                className="block p-6 h-full flex flex-col"
              >
                <div className="flex items-start justify-between mb-3">
                  <span className="text-lime font-display font-bold text-2xl">0{index + 1}</span>
                  <Filter className="w-5 h-5 text-navy/30 group-hover:text-lime transition-colors" aria-hidden="true" />
                </div>
                <h3 className="font-display font-bold text-navy text-xl mb-2 group-hover:text-lime transition-colors">
                  {option.label}
                </h3>
                <p className="text-medium-grey text-sm mb-4 flex-1">{option.count}</p>
                <Button variant="ghost" size="sm" arrow fullWidth className="mt-auto">
                  Explore
                </Button>
              </Link>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1], delay: 0.5 }}
          className="mt-12 md:mt-16 text-center"
        >
          <Button variant="outline" size="lg" arrow asChild>
            <Link href="/study/courses">Browse All Courses</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

import { AnimatePresence } from 'framer-motion';