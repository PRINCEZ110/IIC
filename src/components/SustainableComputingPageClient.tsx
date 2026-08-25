'use client';

import { motion } from 'framer-motion';
import { Header } from '@/components/ui/Header';
import { Footer } from '@/components/ui/Footer';
import { Hero } from '@/sections/Hero';
import { CTASection } from '@/sections/CTASection';
import { researchers } from '@/data/university';
import Link from 'next/link';

export default function SustainableComputingPageClient() {
  const themeResearchers = researchers.filter(r => r.department === 'Sustainable Computing');

  return (
    <>
      <Header />
      <main id="main-content" className="flex-1 pt-16 md:pt-20 lg:pt-24">
        <Hero
          headline="Sustainable\nComputing"
          subheadline="Green Technology for a Better Future. Developing energy-efficient algorithms, green data centres, and sustainable software engineering practices."
          primaryCta={{ text: 'View Researchers', href: '/research/researchers?dept=sustainable' }}
          secondaryCta={{ text: 'Collaborate', href: '/collaborate/research' }}
          image="/images/research-sustainable-hero.jpg"
          imageAlt="Sustainable computing research"
          variant="research"
        />

        <section className="py-16 md:py-24 bg-white" aria-labelledby="overview-heading">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 id="overview-heading" className="font-display font-extrabold text-navy leading-tight text-3xl md:text-5xl lg:text-6xl mb-4">
                  Research Overview
                </h2>
                <div className="prose prose-lg text-dark-grey leading-relaxed max-w-none">
                  <p className="text-lg mb-6">Computing's environmental footprint is growing rapidly. Our Sustainable Computing research theme tackles this challenge head-on by developing fundamentally more efficient approaches to computation.</p>
                  <p className="mb-6">From green algorithms that reduce energy consumption by 40% to sustainable software engineering practices that extend hardware lifespan, our work spans the full computing stack.</p>
                  <p className="mb-6">We collaborate with major cloud providers, government agencies, and international research institutions to translate our findings into real-world impact.</p>
                </div>
              </motion.div>

              <h3 className="font-display font-bold text-navy text-2xl mb-6">Key Research Areas</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {[
                  { title: 'Green Algorithms', desc: 'Energy-optimal algorithmic design for common computational tasks', icon: '🌿' },
                  { title: 'Green Data Centres', desc: 'Workload scheduling and resource management for energy efficiency', icon: '🏢' },
                  { title: 'Sustainable Software Engineering', desc: 'Development practices that minimize computational waste', icon: '💻' },
                  { title: 'Edge Computing Efficiency', desc: 'Low-power computing for IoT and mobile devices', icon: '📱' },
                  { title: 'Carbon-Aware Computing', desc: 'Workload scheduling based on grid carbon intensity', icon: '🌍' },
                  { title: 'Hardware Lifecycle Extension', desc: 'Software techniques to extend device lifespan', icon: '♻️' },
                ].map((item, index) => (
                  <motion.article
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index }}
                    className="group bg-white border border-light-grey hover:border-lime hover:shadow-xl transition-all duration-300 p-6 h-full"
                  >
                    <div className="text-4xl mb-4" aria-hidden="true">{item.icon}</div>
                    <h4 className="font-display font-bold text-navy text-xl mb-2 group-hover:text-lime transition-colors">{item.title}</h4>
                    <p className="text-dark-grey">{item.desc}</p>
                  </motion.article>
                ))}
              </div>

              <h3 className="font-display font-bold text-navy text-2xl mb-6">Key Achievements</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                {[
                  { value: '40%', label: 'Energy reduction in cloud workloads' },
                  { value: '15+', label: 'Research papers published (2023-24)' },
                  { value: '8', label: 'Industry partnerships' },
                ].map((stat, index) => (
                  <motion.article
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index }}
                    className="bg-navy text-white p-6 text-center"
                  >
                    <div className="font-display font-extrabold text-3xl md:text-4xl mb-1">{stat.value}</div>
                    <div className="text-white/80">{stat.label}</div>
                  </motion.article>
                ))}
              </div>

              <h3 className="font-display font-bold text-navy text-2xl mb-6">Our Researchers</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {themeResearchers.map((researcher, index) => (
                  <motion.article
                    key={researcher.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index }}
                    className="group bg-white border border-light-grey hover:border-lime hover:shadow-xl transition-all duration-300 overflow-hidden"
                  >
                    <Link href={`/research/researchers/${researcher.id}`} className="block">
                      <div className="relative aspect-square overflow-hidden bg-light-grey">
                        <img
                          src={researcher.image}
                          alt=""
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-5">
                        <h4 className="font-display font-bold text-navy text-lg mb-1 group-hover:text-lime transition-colors">{researcher.name}</h4>
                        <p className="text-lime text-sm font-medium mb-1">{researcher.title}</p>
                        <p className="text-dark-grey text-sm line-clamp-2">{researcher.bio}</p>
                      </div>
                    </Link>
                  </motion.article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <CTASection
          title="Collaborate on Sustainable Computing"
          description="Partner with our researchers on green technology projects, fund a PhD studentship, or access our expertise."
          primaryCta={{ text: 'Collaborate with Us', href: '/collaborate/research' }}
          secondaryCta={{ text: 'View All Researchers', href: '/research/researchers' }}
          variant="lime"
        />
      </main>
      <Footer />
    </>
  );
}