'use client';

import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useMediaQuery';
import Link from 'next/link';
import { lifeCategories } from '@/data/university';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export function StudentLifeShowcase() {
  const reducedMotion = useReducedMotion();

  return (
    <section className="py-16 md:py-24 bg-white" aria-labelledby="student-life-heading">
      <div className="container">
        {/* Header */}
        <div className="max-w-3xl mb-12 md:mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-navy bg-lime px-3 py-1 mb-3 inline-block">
            Student Experience
          </span>
          <h2 id="student-life-heading" className="font-display font-extrabold text-navy leading-tight text-3xl md:text-5xl lg:text-6xl mb-4">
            Life at IIC & Beyond
          </h2>
          <p className="text-lg text-dark-grey leading-relaxed">
            University is more than just lectures. Experience a welcoming, diverse, and vibrant tech community right in the heart of Kathmandu.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {lifeCategories.slice(0, 8).map((cat, idx) => (
            <motion.article
              key={cat.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={reducedMotion ? { duration: 0 } : { duration: 0.4, delay: idx * 0.05 }}
              className="group bg-off-white border border-light-grey hover:border-lime hover:shadow-xl transition-all duration-300 flex flex-col justify-between p-6"
            >
              <div>
                <div className="w-12 h-12 bg-navy text-white flex items-center justify-center mb-4 group-hover:bg-lime group-hover:text-navy transition-colors duration-200">
                  <span className="font-display font-black text-lg">0{idx + 1}</span>
                </div>

                <h3 className="font-display font-bold text-navy text-xl mb-2 group-hover:text-bright-blue transition-colors">
                  {cat.title}
                </h3>

                <p className="text-dark-grey text-sm leading-relaxed mb-6">
                  {cat.description}
                </p>
              </div>

              <Link
                href={cat.href}
                className="inline-flex items-center gap-1.5 text-navy font-semibold text-sm hover:text-bright-blue transition-colors mt-auto group/link"
              >
                Explore {cat.title}
                <ArrowRight className="w-4 h-4 text-bright-blue group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </motion.article>
          ))}
        </div>

        {/* Virtual Campus Callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 p-8 bg-gradient-to-r from-navy via-navy-light to-bright-blue text-white flex flex-col lg:flex-row items-center justify-between gap-6"
        >
          <div className="space-y-2 text-center lg:text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-lime-deep">
              Interactive 360° Experience
            </span>
            <h3 className="font-display font-bold text-2xl md:text-3xl">
              Can&apos;t visit in person yet? Take the Virtual Campus Tour.
            </h3>
            <p className="text-white/80 text-sm md:text-base max-w-2xl">
              Walk through our high-performance AI lab, cybersecurity center, digital library, and student lounges from your phone or laptop.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Button variant="lime" size="lg" asChild>
              <Link href="/visit/virtual-tour">
                Start 360° Tour
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="text-white border-white/40 hover:bg-white/10">
              <Link href="/visit/campus-tour">
                Book Campus Visit
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
