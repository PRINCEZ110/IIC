'use client';

import { motion } from 'framer-motion';
import { Header } from '@/components/ui/Header';
import { Footer } from '@/components/ui/Footer';
import { Hero } from '@/sections/Hero';
import { CTASection } from '@/sections/CTASection';
import { researchers } from '@/data/university';
import Link from 'next/link';

export default function AIMLPageClient() {
  const themeResearchers = researchers.filter(r => r.department === 'Artificial Intelligence');

  return (
    <>
      <Header />
      <main id="main-content" className="flex-1 pt-16 md:pt-20 lg:pt-24">
        <Hero
          headline="Artificial Intelligence\n& Machine Learning"
          subheadline="Intelligent Systems for Real-World Impact. Advancing AI/ML research in NLP, computer vision, and ethical AI for healthcare, agriculture, and education."
          primaryCta={{ text: 'View Researchers', href: '/research/researchers?dept=ai' }}
          secondaryCta={{ text: 'Collaborate', href: '/collaborate/research' }}
          image="/images/research-ai-hero.jpg"
          imageAlt="AI research at IIC"
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
                  <p className="text-lg mb-6">Our AI & Machine Learning research theme focuses on developing intelligent systems that address real-world challenges, particularly in contexts relevant to Nepal and the Global South.</p>
                  <p className="mb-6">We specialize in low-resource machine learning, developing models that work effectively with limited training data—a critical capability for languages and domains underserved by mainstream AI research.</p>
                  <p className="mb-6">Our applications span healthcare diagnostics, agricultural monitoring, educational technology, and disaster response, with a strong emphasis on ethical AI and responsible innovation.</p>
                </div>
              </motion.div>

              <h3 className="font-display font-bold text-navy text-2xl mb-6">Key Research Areas</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {[
                  { title: 'Natural Language Processing', desc: 'Low-resource NLP for Nepali and regional languages', icon: '🗣️' },
                  { title: 'Computer Vision', desc: 'Agricultural monitoring, medical imaging, disaster assessment', icon: '👁️' },
                  { title: 'Medical AI', desc: 'Diagnostic tools for resource-constrained healthcare settings', icon: '🏥' },
                  { title: 'Agricultural AI', desc: 'Crop monitoring, yield prediction, disease detection for smallholders', icon: '🌾' },
                  { title: 'Ethical AI & Fairness', desc: 'Bias detection, explainable AI, responsible AI governance', icon: '⚖️' },
                  { title: 'Edge AI', desc: 'On-device ML for low-power and offline environments', icon: '⚡' },
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
                  { value: '25+', label: 'Active research projects' },
                  { value: '12', label: 'PhD researchers' },
                  { value: '5', label: 'Patents filed' },
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
          title="Advance AI for Good"
          description="Partner with our AI researchers on projects that make a real difference in healthcare, agriculture, and education."
          primaryCta={{ text: 'Collaborate with Us', href: '/collaborate/research' }}
          secondaryCta={{ text: 'View All Researchers', href: '/research/researchers' }}
          variant="lime"
        />
      </main>
      <Footer />
    </>
  );
}