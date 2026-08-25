'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useMediaQuery';
import { cn } from '@/lib/utils';
import { researchers } from '@/data/university';
import { Header } from '@/components/ui/Header';
import { Footer } from '@/components/ui/Footer';
import { Hero } from '@/sections/Hero';
import { CTASection } from '@/sections/CTASection';
import Link from 'next/link';
import { Search, Filter, X, ChevronDown } from 'lucide-react';

const departments = ['All', 'Sustainable Computing', 'Artificial Intelligence', 'Cybersecurity', 'Data Science', 'Software Engineering'];

export default function ResearchersPage() {
  const reducedMotion = useReducedMotion();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDept, setSelectedDept] = useState('All');
  const [showFilters, setShowFilters] = useState(false);

  const filteredResearchers = researchers.filter(r => {
    const matchesSearch = r.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.researchAreas.some(area => area.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesDept = selectedDept === 'All' || r.department === selectedDept;
    return matchesSearch && matchesDept;
  });

  return (
    <>
      <Header />
      <main id="main-content" className="flex-1 pt-16 md:pt-20 lg:pt-24">
        <Hero
          headline="Our\nResearchers"
          subheadline="Meet the academics driving innovation at IIC. 45+ researchers across four interdisciplinary themes."
          image="/images/researchers-hero.jpg"
          imageAlt="Researchers at work"
          variant="page"
        />

        <section className="py-8 md:py-12 lg:py-16 bg-white" aria-labelledby="researchers-list-heading">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={reducedMotion ? { duration: 0 } : { duration: 0.5 }}
              className="max-w-4xl mx-auto mb-12"
            >
              <div className="relative mb-6">
                <label htmlFor="researcher-search" className="sr-only">Search researchers</label>
                <div className="relative">
                  <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-navy/40 text-2xl" aria-hidden="true" />
                  <input
                    id="researcher-search"
                    type="search"
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    placeholder="Search researchers by name, department, or research area..."
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

              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <label htmlFor="filter-dept" className="sr-only">Filter by department</label>
                  <select
                    id="filter-dept"
                    value={selectedDept}
                    onChange={e => setSelectedDept(e.target.value)}
                    className="w-full bg-white border-2 border-light-grey focus:border-lime focus:ring-2 focus:ring-lime/20 text-navy text-base py-3 px-4 appearance-none bg-no-repeat bg-right pr-10"
                    style={{ backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236B6B6B' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")` }}
                  >
                    {departments.map(dept => (
                      <option key={dept} value={dept}>{dept}</option>
                    ))}
                  </select>
                </div>
                <p className="self-center text-sm text-medium-grey">
                  Showing {filteredResearchers.length} of {researchers.length} researchers
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={reducedMotion ? { duration: 0 } : { duration: 0.5, delay: 0.1 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              role="list"
              aria-label="Researcher profiles"
            >
              {filteredResearchers.map((researcher, index) => (
                <motion.article
                  key={researcher.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={reducedMotion ? { duration: 0 } : { duration: 0.3, delay: 0.05 * index }}
                  className="group bg-white border border-light-grey hover:border-lime hover:shadow-xl transition-all duration-300 overflow-hidden h-full flex flex-col"
                  role="listitem"
                >
                  <Link href={`/research/researchers/${researcher.id}`} className="relative aspect-square overflow-hidden">
                    <img
                      src={researcher.image}
                      alt=""
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true" />
                    <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                      <span className="px-2 py-1 bg-lime text-navy text-xs font-bold uppercase tracking-wider mb-2 inline-block">{researcher.department}</span>
                      <h3 className="font-display font-bold text-xl">{researcher.name}</h3>
                    </div>
                  </Link>

                  <div className="p-5 flex-1 flex flex-col">
                    <h3 className="font-display font-bold text-navy text-lg mb-1 group-hover:text-lime transition-colors">
                      <Link href={`/research/researchers/${researcher.id}`}>{researcher.name}</Link>
                    </h3>
                    <p className="text-lime text-sm font-medium mb-2">{researcher.title}</p>
                    <p className="text-medium-grey text-sm mb-3">{researcher.department}</p>
                    <p className="text-dark-grey text-sm mb-4 flex-1 line-clamp-2">{researcher.bio}</p>

                    <div className="flex flex-wrap gap-1 mb-4" role="list" aria-label="Research areas">
                      {researcher.researchAreas.map((area, i) => (
                        <span key={i} className="px-2 py-1 bg-off-white border border-light-grey text-xs text-dark-grey">{area}</span>
                      ))}
                    </div>

                    <div className="flex items-center gap-4 text-sm text-medium-grey border-t border-light-grey pt-4 mt-auto">
                      <span className="flex items-center gap-1">
                        <span aria-hidden="true">📄</span>
                        {researcher.publications} papers
                      </span>
                      <span className="flex items-center gap-1">
                        <span aria-hidden="true">📊</span>
                        {researcher.citations.toLocaleString()} citations
                      </span>
                    </div>

                    <Link
                      href={`/research/researchers/${researcher.id}`}
                      className="inline-flex items-center gap-2 text-navy font-medium hover:text-lime transition-colors mt-auto group"
                    >
                      View Profile
                      <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </Link>
                  </div>
                </motion.article>
              ))}

              {filteredResearchers.length === 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="col-span-full text-center py-16"
                >
                  <div className="text-6xl mb-4" aria-hidden="true">🔍</div>
                  <h3 className="font-display font-bold text-navy text-2xl mb-2">No researchers found</h3>
                  <p className="text-dark-grey mb-6">Try adjusting your search or filters</p>
                  <button onClick={() => { setSearchQuery(''); setSelectedDept('All'); }} className="px-4 py-2 bg-lime text-navy font-bold hover:bg-lime-dark transition-colors">Clear Filters</button>
                </motion.div>
              )}
            </motion.div>
          </div>
        </section>

        <CTASection
          title="Interested in PhD Research?"
          description="Explore funded PhD opportunities and find a supervisor whose work aligns with your interests."
          primaryCta={{ text: 'PhD Opportunities', href: '/study/research' }}
          secondaryCta={{ text: 'Contact Graduate Research', href: '/study/research/contact' }}
          variant="navy"
        />
      </main>
      <Footer />
    </>
  );
}