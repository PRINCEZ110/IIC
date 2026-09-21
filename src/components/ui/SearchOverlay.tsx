'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Search, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useReducedMotion } from '@/hooks/useMediaQuery';
import { useRouter } from 'next/navigation';
import { courses, news, events, researchers } from '@/data/university';
import Link from 'next/link';

interface SearchResult {
  type: 'course' | 'news' | 'event' | 'researcher' | 'page';
  title: string;
  description: string;
  href: string;
  category?: string;
}

export function SearchOverlay({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const reducedMotion = useReducedMotion();
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [isLoading, setIsLoading] = useState(false);
  const isOpenRef = useRef(isOpen);

  useEffect(() => {
    isOpenRef.current = isOpen;
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      document.body.style.overflow = '';
      // Use setTimeout to avoid synchronous setState in effect
      setTimeout(() => {
        setQuery('');
        setResults([]);
        setSelectedIndex(-1);
      }, 0);
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const performSearch = useCallback(async (searchQuery: string) => {
    if (!searchQuery.trim()) {
      setResults([]);
      return;
    }

    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 150));

    const allResults: SearchResult[] = [];

    const courseMatches = courses
      .filter(c => c.name.toLowerCase().includes(searchQuery.toLowerCase()) || c.subject.toLowerCase().includes(searchQuery.toLowerCase()))
      .slice(0, 3)
      .map(c => ({
        type: 'course' as const,
        title: c.name,
        description: `${c.level} • ${c.duration} • ${c.location}`,
        href: `/study/courses/${c.id}`,
        category: c.subject,
      }));

    const newsMatches = news
      .filter(n => n.title.toLowerCase().includes(searchQuery.toLowerCase()) || n.excerpt.toLowerCase().includes(searchQuery.toLowerCase()))
      .slice(0, 2)
      .map(n => ({
        type: 'news' as const,
        title: n.title,
        description: `${n.category} • ${new Date(n.date).toLocaleDateString('en-GB', { month: 'short', day: 'numeric', year: 'numeric' })}`,
        href: `/news/${n.slug}`,
        category: n.category,
      }));

    const eventMatches = events
      .filter(e => e.title.toLowerCase().includes(searchQuery.toLowerCase()) || e.description.toLowerCase().includes(searchQuery.toLowerCase()))
      .slice(0, 2)
      .map(e => ({
        type: 'event' as const,
        title: e.title,
        description: `${e.type} • ${new Date(e.date).toLocaleDateString('en-GB', { month: 'short', day: 'numeric', year: 'numeric' })}`,
        href: `/events/${e.slug}`,
        category: e.type,
      }));

    const researcherMatches = researchers
      .filter(r => r.name.toLowerCase().includes(searchQuery.toLowerCase()) || r.department.toLowerCase().includes(searchQuery.toLowerCase()))
      .slice(0, 2)
      .map(r => ({
        type: 'researcher' as const,
        title: r.name,
        description: `${r.title} • ${r.department}`,
        href: `/research/researchers/${r.id}`,
        category: r.department,
      }));

    allResults.push(...courseMatches, ...newsMatches, ...eventMatches, ...researcherMatches);
    setResults(allResults);
    setSelectedIndex(-1);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    const debounce = setTimeout(() => {
      performSearch(query);
    }, 200);
    return () => clearTimeout(debounce);
  }, [query, performSearch]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
      return;
    }

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => Math.min(prev + 1, results.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => Math.max(prev - 1, -1));
    } else if (e.key === 'Enter' && selectedIndex >= 0) {
      e.preventDefault();
      router.push(results[selectedIndex].href);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedIndex >= 0) {
      router.push(results[selectedIndex].href);
    } else if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query)}`);
    }
  };

  const typeIcons = {
    course: '📚',
    news: '📰',
    event: '📅',
    researcher: '👨‍🔬',
    page: '📄',
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={reducedMotion ? { duration: 0 } : { duration: 0.3 }}
        className="fixed inset-0 z-[1000] bg-navy/95 backdrop-blur-sm flex flex-col"
        role="dialog"
        aria-modal="true"
        aria-label="Search"
      >
        <div className="flex-1 flex items-start justify-center pt-20 px-6 pb-12">
          <form onSubmit={handleSubmit} className="w-full max-w-4xl">
            <div className="relative">
              <label htmlFor="search-input" className="sr-only">
                Search IIC
              </label>
              <div className="relative">
                <Search
                  className="absolute left-6 top-1/2 -translate-y-1/2 text-navy/50 text-2xl"
                  aria-hidden="true"
                />
                <input
                  ref={inputRef}
                  id="search-input"
                  type="search"
                  role="combobox"
                  value={query}
                  onChange={e => setQuery(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Search courses, research, news, events, people..."
                  className={cn(
                    'w-full bg-white/5 border-2 border-white/20 rounded-none text-white text-3xl font-display',
                    'placeholder:text-navy/40 py-6 pl-16 pr-20',
                    'focus:outline-none focus:border-lime focus:bg-white/10',
                    'transition-all duration-200'
                  )}
                  autoComplete="off"
                  aria-autocomplete="list"
                  aria-controls="search-results"
                  aria-expanded={results.length > 0}
                  aria-activedescendant={selectedIndex >= 0 ? `${results[selectedIndex]?.type}-${results[selectedIndex]?.href}-${selectedIndex}` : undefined}
                />
                {isLoading && (
                  <Loader2
                    className="absolute right-6 top-1/2 -translate-y-1/2 text-lime animate-spin text-2xl"
                    aria-hidden="true"
                  />
                )}
                <button
                  type="button"
                  onClick={onClose}
                  className="absolute right-6 top-1/2 -translate-y-1/2 text-white/50 hover:text-lime transition-colors p-2"
                  aria-label="Close search"
                >
                  <X className="text-2xl" />
                </button>
              </div>
            </div>

            <AnimatePresence>
              {results.length > 0 && (
                <motion.ul
                  id="search-results"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={reducedMotion ? { duration: 0 } : { duration: 0.2 }}
                  className="mt-8 space-y-0"
                  role="listbox"
                >
                  {results.map((result, index) => (
                    <motion.li
                      key={`${result.type}-${result.href}-${index}`}
                      layout
                      className={cn(
                        'group relative bg-white/5 border border-white/10 hover:bg-white/10',
                        'transition-colors duration-150',
                        'first:rounded-t-none last:rounded-b-none',
                        selectedIndex === index && 'bg-white/10 border-l-4 border-l-lime'
                      )}
                      role="option"
                      aria-selected={selectedIndex === index}
                      onMouseEnter={() => setSelectedIndex(index)}
                      onClick={() => router.push(result.href)}
                    >
                      <Link
                        href={result.href}
                        className="flex items-center gap-5 p-5 w-full text-left"
                        onClick={e => e.stopPropagation()}
                      >
                        <span className="text-3xl" aria-hidden="true">
                          {typeIcons[result.type]}
                        </span>
                        <div className="flex-1 min-w-0">
                          <p className="text-white text-lg font-medium truncate group-hover:text-lime transition-colors">
                            {result.title}
                          </p>
                          <p className="text-white/60 text-sm mt-1 truncate">
                            {result.description}
                          </p>
                        </div>
                        {result.category && (
                          <span className="px-3 py-1 text-xs font-medium bg-lime/20 text-lime rounded-none whitespace-nowrap">
                            {result.category}
                          </span>
                        )}
                      </Link>
                    </motion.li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>

            {results.length === 0 && query.trim() && !isLoading && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-8 text-center text-white/60 text-lg"
              >
                No results found for &ldquo;{query}&rdquo;
              </motion.p>
            )}

            <div className="mt-10 pt-8 border-t border-white/10">
              <p className="text-white/40 text-sm text-center">
                Press <kbd className="px-2 py-0.5 bg-white/10 rounded text-white mx-1 font-mono">Esc</kbd> to close
                {' '}·{' '}
                <kbd className="px-2 py-0.5 bg-white/10 rounded text-white mx-1 font-mono">↑</kbd>
                <kbd className="px-2 py-0.5 bg-white/10 rounded text-white mx-1 font-mono">↓</kbd> to navigate
                {' '}·{' '}
                <kbd className="px-2 py-0.5 bg-white/10 rounded text-white mx-1 font-mono">Enter</kbd> to select
              </p>
            </div>
          </form>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
