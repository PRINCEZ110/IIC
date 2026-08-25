'use client';

import { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useReducedMotion } from '@/hooks/useMediaQuery';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';

export interface CarouselPerson {
  id: string;
  name: string;
  image: string;
  title?: string;
  subtitle?: string;
  description?: string;
  link?: string;
  linkText?: string;
}

interface PeopleCarouselProps {
  title: string;
  subtitle?: string;
  people: CarouselPerson[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
  ctaLink?: string;
  ctaText?: string;
}

export function PeopleCarousel({
  title,
  subtitle,
  people,
  autoPlay = true,
  autoPlayInterval = 5000,
  ctaLink,
  ctaText = 'View All',
}: PeopleCarouselProps) {
  const reducedMotion = useReducedMotion();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth < 640) setItemsPerView(1);
      else if (window.innerWidth < 1024) setItemsPerView(2);
      else setItemsPerView(3);
    };
    updateItemsPerView();
    window.addEventListener('resize', updateItemsPerView);
    return () => window.removeEventListener('resize', updateItemsPerView);
  }, []);

  const maxIndex = Math.max(0, people.length - itemsPerView);

  const goToNext = useCallback(() => {
    setCurrentIndex(prev => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const goToPrev = useCallback(() => {
    setCurrentIndex(prev => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(Math.max(0, Math.min(index, maxIndex)));
  }, [maxIndex]);

  useEffect(() => {
    if (!autoPlay || reducedMotion) return;
    const interval = setInterval(goToNext, autoPlayInterval);
    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval, goToNext, reducedMotion]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const touchEnd = e.touches[0].clientX;
    const diff = touchStart - touchEnd;
    if (Math.abs(diff) > 50) {
      if (diff > 0) goToNext();
      else goToPrev();
      setTouchStart(null);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      goToPrev();
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      goToNext();
    }
  };

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-white" aria-labelledby="people-heading">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="max-w-3xl mx-auto text-center mb-12 md:mb-16"
        >
          <h2 id="people-heading" className="font-display font-extrabold text-navy leading-tight text-3xl md:text-5xl lg:text-6xl mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-lg md:text-xl text-dark-grey leading-relaxed">
              {subtitle}
            </p>
          )}
        </motion.div>

        <div className="relative" onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onKeyDown={handleKeyDown} role="region" aria-label={`${title} carousel`}>
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-6"
              style={{ transform: `translateX(-${(currentIndex / Math.max(1, people.length - itemsPerView)) * 100}%)` }}
              transition={reducedMotion ? { duration: 0 } : { duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
            >
              {people.map((person, index) => (
                <article
                  key={person.id}
                  className={cn(
                    'flex-shrink-0 w-full',
                    'sm:max-w-[calc(50%-1.5rem)]',
                    'md:max-w-[calc(33.333%-2rem)]',
                    'lg:max-w-[calc(33.333%-2rem)]'
                  )}
                >
                  {person.link ? (
                    <Link href={person.link} className="group block h-full">
                      <div className="relative aspect-square overflow-hidden bg-light-grey mb-4">
                        <Image
                          src={person.image}
                          alt=""
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true" />
                      </div>
                      <h3 className="font-display font-bold text-navy text-xl mb-1 group-hover:text-lime transition-colors">
                        {person.name}
                      </h3>
                      {person.title && (
                        <p className="text-medium-grey text-sm mb-1">{person.title}</p>
                      )}
                      {person.subtitle && (
                        <p className="text-lime font-medium text-sm mb-3">{person.subtitle}</p>
                      )}
                      {person.description && (
                        <p className="text-dark-grey text-sm line-clamp-2">{person.description}</p>
                      )}
                    </Link>
                  ) : (
                    <div className="h-full">
                      <div className="relative aspect-square overflow-hidden bg-light-grey mb-4">
                        <Image
                          src={person.image}
                          alt=""
                          fill
                          className="object-cover"
                          sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                        />
                      </div>
                      <h3 className="font-display font-bold text-navy text-xl mb-1">{person.name}</h3>
                      {person.title && (
                        <p className="text-medium-grey text-sm mb-1">{person.title}</p>
                      )}
                      {person.subtitle && (
                        <p className="text-lime font-medium text-sm mb-3">{person.subtitle}</p>
                      )}
                      {person.description && (
                        <p className="text-dark-grey text-sm line-clamp-2">{person.description}</p>
                      )}
                    </div>
                  )}
                </article>
              ))}
            </motion.div>
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={goToPrev}
              disabled={people.length <= itemsPerView}
              className={cn(
                'w-12 h-12 bg-white border-2 border-light-grey hover:border-lime hover:bg-lime/10',
                'flex items-center justify-center rounded-none transition-all',
                'disabled:opacity-30 disabled:cursor-not-allowed'
              )}
              aria-label="Previous person"
              aria-disabled={people.length <= itemsPerView}
            >
              <ChevronLeft className="w-6 h-6 text-navy" aria-hidden="true" />
            </button>

            <div className="flex items-center gap-2" role="tablist" aria-label={`${title} slides`}>
              {Array.from({ length: Math.max(1, people.length - itemsPerView + 1) }, (_, i) => (
                <button
                  key={i}
                  onClick={() => goToSlide(i)}
                  className={cn(
                    'w-2.5 h-2.5 rounded-full transition-all duration-200',
                    i === currentIndex
                      ? 'bg-lime w-8'
                      : 'bg-navy/20 hover:bg-navy/40'
                  )}
                  role="tab"
                  aria-selected={i === currentIndex}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={goToNext}
              disabled={people.length <= itemsPerView}
              className={cn(
                'w-12 h-12 bg-white border-2 border-light-grey hover:border-lime hover:bg-lime/10',
                'flex items-center justify-center rounded-none transition-all',
                'disabled:opacity-30 disabled:cursor-not-allowed'
              )}
              aria-label="Next person"
              aria-disabled={people.length <= itemsPerView}
            >
              <ChevronRight className="w-6 h-6 text-navy" aria-hidden="true" />
            </button>
          </div>
        </div>

        {ctaLink && ctaText && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1], delay: 0.3 }}
            className="mt-12 text-center"
          >
            <Link
              href={ctaLink}
              className="inline-flex items-center gap-2 text-navy font-semibold hover:text-lime transition-colors"
            >
              {ctaText}
              <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
}