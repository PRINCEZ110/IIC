'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useMediaQuery';
import { cn } from '@/lib/utils';
import { events } from '@/data/university';
import { formatDate } from '@/lib/utils';
import { Header } from '@/components/ui/Header';
import { Footer } from '@/components/ui/Footer';
import { Hero } from '@/sections/Hero';
import { CTASection } from '@/sections/CTASection';
import Link from 'next/link';
import { Search, Filter, X, Calendar, MapPin, Clock, ChevronDown, Tag } from 'lucide-react';

const eventTypes = ['All', 'Open Day', 'Career Fair', 'Workshop', 'Conference', 'Alumni Event', 'Short Course'];

export default function EventsPage() {
  const reducedMotion = useReducedMotion();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState('All');
  const [showFilters, setShowFilters] = useState(false);

  const filteredEvents = useMemo(() => {
    return events.filter(event => {
      const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.type.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesType = selectedType === 'All' || event.type === selectedType;
      return matchesSearch && matchesType;
    }).sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  }, [searchQuery, selectedType]);

  const upcomingEvents = filteredEvents.filter(e => new Date(e.date) >= new Date());
  const pastEvents = filteredEvents.filter(e => new Date(e.date) < new Date());

  return (
    <>
      <Header />
      <main id="main-content" className="flex-1 pt-16 md:pt-20 lg:pt-24">
        <Hero
          headline="Upcoming\nEvents"
          subheadline="Open days, career fairs, workshops, conferences, and more. Find events that match your interests."
          image="/images/events-hero.jpg"
          imageAlt="Events at IIC"
          variant="page"
        />

        <section className="py-8 md:py-12 lg:py-16 bg-white" aria-labelledby="events-list-heading">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={reducedMotion ? { duration: 0 } : { duration: 0.5 }}
              className="max-w-4xl mx-auto mb-12"
            >
              <div className="relative mb-6">
                <label htmlFor="event-search" className="sr-only">Search events</label>
                <div className="relative">
                  <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-navy/40 text-2xl" aria-hidden="true" />
                  <input
                    id="event-search"
                    type="search"
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    placeholder="Search events by title, type, or keyword..."
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
                  <label htmlFor="event-type" className="sr-only">Filter by type</label>
                  <select
                    id="event-type"
                    value={selectedType}
                    onChange={e => setSelectedType(e.target.value)}
                    className="w-full bg-white border-2 border-light-grey focus:border-lime focus:ring-2 focus:ring-lime/20 text-navy text-base py-3 px-4 appearance-none bg-no-repeat bg-right pr-10"
                    style={{ backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236B6B6B' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")` }}
                  >
                    {eventTypes.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
                <p className="self-center text-sm text-medium-grey">
                  Showing {filteredEvents.length} of {events.length} events
                </p>
              </div>
            </motion.div>

            {upcomingEvents.length > 0 && (
              <section aria-labelledby="upcoming-heading" className="mb-16">
                <h2 id="upcoming-heading" className="font-display font-extrabold text-navy text-3xl md:text-4xl mb-8 flex items-center gap-3">
                  <span className="w-1 h-10 bg-lime" aria-hidden="true" />
                  Upcoming Events
                </h2>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={reducedMotion ? { duration: 0 } : { duration: 0.5, delay: 0.1 }}
                  className="space-y-4"
                  role="list"
                  aria-label="Upcoming events"
                >
                  {upcomingEvents.map((event, index) => (
                    <motion.article
                      key={event.slug}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={reducedMotion ? { duration: 0 } : { duration: 0.3, delay: 0.05 * index }}
                      className="group bg-white border border-light-grey hover:border-lime hover:shadow-xl transition-all duration-300 overflow-hidden"
                      role="listitem"
                    >
                      <Link href={`/events/${event.slug}`} className="block p-5 md:p-6">
                        <div className="flex flex-col md:flex-row md:items-center gap-5">
                          <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 bg-navy text-white flex flex-col items-center justify-center relative">
                            <span className="font-display font-extrabold text-3xl md:text-4xl leading-none">
                              {new Date(event.date).getDate()}
                            </span>
                            <span className="font-medium text-xs md:text-sm uppercase tracking-wider mt-1">
                              {new Date(event.date).toLocaleDateString('en-GB', { month: 'short' }).toUpperCase()}
                            </span>
                            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-lime rotate-45" aria-hidden="true" />
                          </div>

                          <div className="flex-1 min-w-0">
                            <div className="flex flex-wrap items-center gap-3 text-sm text-medium-grey mb-2">
                              <span className="px-2 py-1 bg-blue-500/10 text-blue-500 font-medium text-xs">{event.type}</span>
                              <span className="flex items-center gap-1">
                                <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
                                {event.location}
                              </span>
                              {event.registrationRequired && (
                                <span className="px-2 py-1 bg-lime/10 text-lime font-medium text-xs">Registration Required</span>
                              )}
                            </div>
                            <h3 className="font-display font-semibold text-navy text-lg md:text-xl mb-1 group-hover:text-lime transition-colors">
                              {event.title}
                            </h3>
                            <p className="text-dark-grey text-sm mb-2 line-clamp-1">{event.description}</p>
                            <div className="flex flex-wrap items-center gap-4 text-sm text-medium-grey">
                              <span className="flex items-center gap-1">
                                <Calendar className="w-3.5 h-3.5" aria-hidden="true" />
                                {new Date(event.date).toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}
                              </span>
                              <span className="flex items-center gap-1">
                                <Clock className="w-3.5 h-3.5" aria-hidden="true" />
                                {event.time}
                              </span>
                            </div>
                          </div>

                          <div className="flex-shrink-0 ml-auto md:ml-0">
                            <span className="inline-flex items-center gap-1 text-navy font-medium hover:text-lime transition-colors group">
                              View Details
                              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                            </span>
                          </div>
                        </div>
                      </Link>
                    </motion.article>
                  ))}
                </motion.div>
              </section>
            )}

            {pastEvents.length > 0 && (
              <section aria-labelledby="past-heading">
                <h2 id="past-heading" className="font-display font-extrabold text-navy text-3xl md:text-4xl mb-8 flex items-center gap-3">
                  <span className="w-1 h-10 bg-medium-grey" aria-hidden="true" />
                  Past Events
                </h2>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={reducedMotion ? { duration: 0 } : { duration: 0.5, delay: 0.1 }}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                  role="list"
                  aria-label="Past events"
                >
                  {pastEvents.map((event, index) => (
                    <motion.article
                      key={event.slug}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={reducedMotion ? { duration: 0 } : { duration: 0.3, delay: 0.05 * index }}
                      className="group bg-white border border-light-grey hover:border-lime hover:shadow-xl transition-all duration-300 overflow-hidden h-full flex flex-col opacity-60"
                      role="listitem"
                    >
                      <Link href={`/events/${event.slug}`} className="relative aspect-video overflow-hidden">
                        <img
                          src={event.image}
                          alt=""
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-navy/50" aria-hidden="true" />
                        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                          <span className="px-2 py-1 bg-lime text-navy text-xs font-bold uppercase tracking-wider mb-2 inline-block">{event.type}</span>
                          <h3 className="font-display font-bold text-lg">{event.title}</h3>
                        </div>
                      </Link>
                      <div className="p-4">
                        <div className="flex items-center gap-2 text-sm text-medium-grey mb-2">
                          <Tag className="w-3.5 h-3.5" aria-hidden="true" />
                          <span>{event.type}</span>
                        </div>
                        <h3 className="font-display font-bold text-navy text-base mb-1 group-hover:text-lime transition-colors">{event.title}</h3>
                        <p className="text-dark-grey text-sm">{formatDate(event.date)} • {event.location}</p>
                      </div>
                    </motion.article>
                  ))}
                </motion.div>
              </section>
            )}

            {filteredEvents.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16"
              >
                <div className="text-6xl mb-4" aria-hidden="true">📅</div>
                <h3 className="font-display font-bold text-navy text-2xl mb-2">No events found</h3>
                <p className="text-dark-grey mb-6">Try adjusting your search or filters</p>
                <button onClick={() => { setSearchQuery(''); setSelectedType('All'); }} className="px-4 py-2 bg-lime text-navy font-bold hover:bg-lime-dark transition-colors">Clear Filters</button>
              </motion.div>
            )}
          </div>
        </section>

        <CTASection
          title="Stay Updated on Events"
          description="Subscribe to our events newsletter to get notified about upcoming open days, workshops, and more."
          primaryCta={{ text: 'Subscribe to Events', href: '/newsletter?type=events' }}
          secondaryCta={{ text: 'Host an Event', href: '/collaborate/events' }}
          variant="lime"
        />
      </main>
      <Footer />
    </>
  );
}