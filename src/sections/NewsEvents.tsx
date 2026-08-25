'use client';

import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useMediaQuery';
import { cn } from '@/lib/utils';
import { news, events } from '@/data/university';
import { formatDate } from '@/lib/utils';
import Link from 'next/link';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';

interface NewsEventsProps {
  featuredNews?: typeof news[0];
  newsItems?: typeof news;
  eventItems?: typeof events;
}

export function NewsEvents({ featuredNews, newsItems = news.slice(1, 4), eventItems = events.slice(0, 3) }: NewsEventsProps) {
  const reducedMotion = useReducedMotion();

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-white" aria-labelledby="news-events-heading">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={reducedMotion ? { duration: 0 } : { duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="mb-12 md:mb-16"
        >
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8">
            <div>
              <h2 id="news-events-heading" className="font-display font-extrabold text-navy leading-tight text-3xl md:text-5xl lg:text-6xl">
                Latest News & Events
              </h2>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link href="/news" className="inline-flex items-center gap-2 text-navy font-semibold hover:text-lime transition-colors">
                All News
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Link>
              <Link href="/events" className="inline-flex items-center gap-2 text-navy font-semibold hover:text-lime transition-colors">
                All Events
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={reducedMotion ? { duration: 0 } : { duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          >
            <h3 className="font-display font-bold text-navy text-2xl md:text-3xl mb-6 flex items-center gap-3">
              <span className="w-1 h-8 bg-lime" aria-hidden="true" />
              Latest News
            </h3>

            {featuredNews && (
              <article className="mb-8 group">
                <Link href={`/news/${featuredNews.slug}`} className="block h-full">
                  <div className="relative aspect-video overflow-hidden bg-light-grey mb-4">
                    <img
                      src={featuredNews.image}
                      alt=""
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-lime text-navy text-xs font-bold uppercase tracking-wider">
                        {featuredNews.category}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-medium-grey mb-3">
                    <time dateTime={featuredNews.date}>{formatDate(featuredNews.date)}</time>
                    <span aria-hidden="true">·</span>
                    <span>{featuredNews.readTime}</span>
                  </div>
                  <h4 className="font-display font-bold text-navy text-xl md:text-2xl mb-2 group-hover:text-lime transition-colors line-clamp-2">
                    {featuredNews.title}
                  </h4>
                  <p className="text-dark-grey text-sm line-clamp-2">{featuredNews.excerpt}</p>
                </Link>
              </article>
            )}

            <div className="space-y-6" role="list" aria-label="More news">
              {newsItems.map((item, index) => (
                <motion.article
                  key={item.slug}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={reducedMotion ? { duration: 0 } : { duration: 0.4, delay: 0.2 + index * 0.1 }}
                  className="group flex gap-4"
                  role="listitem"
                >
                  <Link href={`/news/${item.slug}`} className="flex-shrink-0 relative w-24 h-24 md:w-28 md:h-28 overflow-hidden bg-light-grey">
                    <img
                      src={item.image}
                      alt=""
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </Link>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 text-xs text-medium-grey mb-2">
                      <span className="px-2 py-0.5 bg-lime/10 text-lime font-medium">{item.category}</span>
                      <time dateTime={item.date}>{formatDate(item.date)}</time>
                    </div>
                    <h4 className="font-display font-semibold text-navy text-base md:text-lg mb-1 group-hover:text-lime transition-colors line-clamp-2">
                      <Link href={`/news/${item.slug}`}>{item.title}</Link>
                    </h4>
                    <p className="text-dark-grey text-sm line-clamp-1">{item.excerpt}</p>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={reducedMotion ? { duration: 0 } : { duration: 0.6, ease: [0.4, 0, 0.2, 1], delay: 0.1 }}
          >
            <h3 className="font-display font-bold text-navy text-2xl md:text-3xl mb-6 flex items-center gap-3">
              <span className="w-1 h-8 bg-blue-500" aria-hidden="true" />
              Upcoming Events
            </h3>

            <div className="space-y-4" role="list" aria-label="Upcoming events">
              {eventItems.map((event, index) => (
                <motion.article
                  key={event.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={reducedMotion ? { duration: 0 } : { duration: 0.4, delay: 0.2 + index * 0.1 }}
                  className="group relative bg-white border border-light-grey hover:border-lime hover:shadow-lg transition-all duration-300 overflow-hidden"
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
                        </div>
                        <h4 className="font-display font-semibold text-navy text-lg md:text-xl mb-1 group-hover:text-lime transition-colors">
                          {event.title}
                        </h4>
                        <p className="text-dark-grey text-sm mb-2 line-clamp-1">{event.description}</p>
                        <div className="flex items-center gap-4 text-sm text-medium-grey">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3.5 h-3.5" aria-hidden="true" />
                            {new Date(event.date).toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
                            {event.time}
                          </span>
                        </div>
                      </div>

                      <div className="flex-shrink-0 ml-auto md:ml-0">
                        <span className="inline-flex items-center gap-1 text-navy font-medium hover:text-lime transition-colors group">
                          View Details
                          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Link href="/events" className="inline-flex items-center gap-2 text-navy font-semibold hover:text-lime transition-colors">
                View All Events
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}