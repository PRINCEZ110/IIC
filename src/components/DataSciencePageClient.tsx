'use client';

import { motion } from 'framer-motion';
import { Header } from '@/components/ui/Header';
import { Footer } from '@/components/ui/Footer';
import { Hero } from '@/sections/Hero';
import { CTASection } from '@/sections/CTASection';
import { researchers } from '@/data/university';
import Link from 'next/link';

export default function DataSciencePageClient() {
  const themeResearchers = researchers.filter(r => r.department === 'Data Science');

  return (
    <>
      <Header />
      <main id="main-content" className="flex-1 pt-16 md:pt-20 lg:pt-24">
        <Hero
          headline="Data Science\n& Analytics"
          subheadline="Transforming Data into Knowledge. Big data analytics, predictive modelling, and data visualisation for social good and scientific discovery."
          primaryCta={{ text: 'View Researchers', href: '/research/researchers?dept=data' }}
          secondaryCta={{ text: 'Collaborate', href: '/collaborate/research' }}
          image="/images/research-data-hero.jpg"
          imageAlt="Data science research at IIC"
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
                  <p className="text-lg mb-6">Data is the new oil, but raw data alone creates no value. Our Data Science research theme focuses on transforming massive, complex datasets into actionable knowledge that drives decision-making and innovation.</p>
                  <p className="mb-6">We work at the intersection of statistics, machine learning, and domain expertise—developing methods that work reliably in real-world conditions with noisy, incomplete, and heterogeneous data.</p>
                  <p className="mb-6">Our applications span public health surveillance, financial risk modelling, climate science, urban planning, and business intelligence, with a strong focus on social impact.</p>
                </div>
              </motion.div>

              <h3 className="font-display font-bold text-navy text-2xl mb-6">Key Research Areas</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {[
                  { title: 'Big Data Analytics', desc: 'Scalable algorithms for processing petabyte-scale datasets', icon: '📈' },
                  { title: 'Predictive Modelling', desc: 'Time series forecasting, risk modelling, demand prediction', icon: '🔮' },
                  { title: 'Data Visualization', desc: 'Interactive visual analytics for complex multidimensional data', icon: '📊' },
                  { title: 'Statistical Learning', desc: 'High-dimensional statistics, causal inference, experimental design', icon: '📐' },
                  { title: 'Data Ethics & Privacy', desc: 'Fairness, transparency, GDPR-compliant analytics', icon: '🔒' },
                  { title: 'Real-time Analytics', desc: 'Stream processing, anomaly detection, adaptive systems', icon: '⚡' },
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
                  { value: '500TB+', label: 'Data processed annually' },
                  { value: '20+', label: 'Data science publications' },
                  { value: '7', label: 'International collaborations' },
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
          title="Unlock the Power of Your Data"
          description="Partner with our data scientists on analytics projects, predictive modelling, or data strategy consulting."
          primaryCta={{ text: 'Collaborate with Us', href: '/collaborate/research' }}
          secondaryCta={{ text: 'View All Researchers', href: '/research/researchers' }}
          variant="lime"
        />
      </main>
      <Footer />
    </>
  );
}