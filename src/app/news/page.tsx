'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useMediaQuery';
import { cn } from '@/lib/utils';
import { news } from '@/data/university';
import { formatDate } from '@/lib/utils';
import { Header } from '@/components/ui/Header';
import { Footer } from '@/components/ui/Footer';
import { Hero } from '@/sections/Hero';
import { CTASection } from '@/sections/CTASection';
import Link from 'next/link';
import { Search, Filter, X, Calendar, Tag, ChevronDown } from 'lucide-react';

const categories = ['All', 'Rankings', 'Research', 'Student Success', 'Partnerships', 'Events', 'Awards'];

export default function NewsPage() {
  const reducedMotion = useReducedMotion();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showFilters, setShowFilters] = useState(false);

  const filteredNews = useMemo(() => {
    return news.filter(item => {
      const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <>
      <Header />
      <main id="main-content" className="flex-1 pt-16 md:pt-20 lg:pt-24">
        <Hero
          headline="Latest\nNews"
          subheadline="Stay up to date with the latest developments, achievements, and stories from IIC."
          image="/images/news-hero.jpg"
          imageAlt="News at IIC"
          variant="page"
        />

        <section className="py-8 md:py-12 lg:py-16 bg-white" aria-labelledby="news-list-heading">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={reducedMotion ? { duration: 0 } : { duration: 0.5 }}
              className="max-w-4xl mx-auto mb-12"
            >
              <div className="relative mb-6">
                <label htmlFor="news-search" className="sr-only">Search news</label>
                <div className="relative">
                  <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-navy/40 text-2xl" aria-hidden="true" />
                  <input
                    id="news-search"
                    type="search"
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    placeholder="Search news by title, category, or keyword..."
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
                  <label htmlFor="news-category" className="sr-only">Filter by category</label>
                  <select
                    id="news-category"
                    value={selectedCategory}
                    onChange={e => setSelectedCategory(e.target.value)}
                    className="w-full bg-white border-2 border-light-grey focus:border-lime focus:ring-2 focus:ring-lime/20 text-navy text-base py-3 px-4 appearance-none bg-no-repeat bg-right pr-10"
                    style={{ backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236B6B6B' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")` }}
                  >
                    {categories.map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>
                <p className="self-center text-sm text-medium-grey">
                  Showing {filteredNews.length} of {news.length} articles
                </p>
              </div>
            </motion.div>

            {news.find(n => n.featured) && (
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={reducedMotion ? { duration: 0 } : { duration: 0.5 }}
                className="mb-12"
              >
                <Link href={`/news/${news.find(n => n.featured)!.slug}`} className="block h-full">
                  <div className="relative aspect-[16/9] overflow-hidden bg-light-grey mb-6">
                    <img
                      src={news.find(n => n.featured)!.image}
                      alt=""
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-lime text-navy text-xs font-bold uppercase tracking-wider">{news.find(n => n.featured)!.category}</span>
                      <span className="px-3 py-1 bg-white/90 text-navy text-xs font-medium">FEATURED</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-medium-grey mb-3">
                    <time dateTime={news.find(n => n.featured)!.date}>
                      <Calendar className="w-4 h-4 inline mr-1" aria-hidden="true" />
                      {formatDate(news.find(n => n.featured)!.date)}
                    </time>
                    <span aria-hidden="true">·</span>
                    <span>{news.find(n => n.featured)!.readTime}</span>
                  </div>
                  <h2 className="font-display font-extrabold text-navy text-3xl md:text-4xl mb-4 hover:text-lime transition-colors line-clamp-2">
                    {news.find(n => n.featured)!.title}
                  </h2>
                  <p className="text-dark-grey text-lg leading-relaxed mb-4">{news.find(n => n.featured)!.excerpt}</p>
                  <div className="inline-flex items-center gap-2 text-navy font-semibold hover:text-lime transition-colors group">
                    Read Article
                    <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </div>
                </Link>
              </motion.article>
            )}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={reducedMotion ? { duration: 0 } : { duration: 0.5, delay: 0.1 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              role="list"
              aria-label="News articles"
            >
              {news.filter(n => !n.featured).map((item, index) => (
                <motion.article
                  key={item.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={reducedMotion ? { duration: 0 } : { duration: 0.3, delay: 0.05 * index }}
                  className="group bg-white border border-light-grey hover:border-lime hover:shadow-xl transition-all duration-300 overflow-hidden h-full flex flex-col"
                  role="listitem"
                >
                  <Link href={`/news/${item.slug}`} className="relative aspect-video overflow-hidden">
                    <img
                      src={item.image}
                      alt=""
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-lime text-navy text-xs font-bold uppercase tracking-wider">{item.category}</span>
                    </div>
                  </Link>

                  <div className="p-5 flex-1 flex flex-col">
                    <div className="flex items-center gap-4 text-sm text-medium-grey mb-3">
                      <time dateTime={item.date}>
                        <Calendar className="w-4 h-4 inline mr-1" aria-hidden="true" />
                        {formatDate(item.date)}
                      </time>
                      <span aria-hidden="true">·</span>
                      <span>{item.readTime}</span>
                    </div>
                    <h3 className="font-display font-bold text-navy text-xl mb-2 group-hover:text-lime transition-colors line-clamp-2">
                      <Link href={`/news/${item.slug}`}>{item.title}</Link>
                    </h3>
                    <p className="text-dark-grey text-sm mb-4 flex-1 line-clamp-2">{item.excerpt}</p>

                    <Link
                      href={`/news/${item.slug}`}
                      className="inline-flex items-center gap-2 text-navy font-medium hover:text-lime transition-colors mt-auto group"
                    >
                      Read More
                      <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </Link>
                  </div>
                </motion.article>
              ))}
            </motion.div>

            {filteredNews.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="col-span-full text-center py-16"
              >
                <div className="text-6xl mb-4" aria-hidden="true">📰</div>
                <h3 className="font-display font-bold text-navy text-2xl mb-2">No articles found</h3>
                <p className="text-dark-grey mb-6">Try adjusting your search or filters</p>
                <button onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }} className="px-4 py-2 bg-lime text-navy font-bold hover:bg-lime-dark transition-colors">Clear Filters</button>
              </motion.div>
            )}
          </div>
        </section>

        <CTASection
          title="Stay Informed"
          description="Never miss an update. Subscribe to our newsletter for the latest news delivered to your inbox."
          primaryCta={{ text: 'Subscribe to Newsletter', href: '/newsletter' }}
          secondaryCta={{ text: 'Press Office', href: '/about/press' }}
          variant="navy"
        />
      </main>
      <Footer />
    </>
  );
}