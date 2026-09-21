'use client';

import { motion } from 'framer-motion';
import { Header } from '@/components/ui/Header';
import { Footer } from '@/components/ui/Footer';
import { Hero } from '@/sections/Hero';
import { StatsSection } from '@/sections/StatsSection';
import { CTASection } from '@/sections/CTASection';
import { researchStats } from '@/data/university';

export default function ImpactPageClient() {
  const impactStories = [
    {
      title: 'AI-Powered Crop Disease Detection for Smallholder Farmers',
      theme: 'AI & ML',
      problem: 'Smallholder farmers in Nepal lose 30-40% of crops to diseases they cannot identify or treat in time.',
      solution: 'Mobile app using on-device computer vision to diagnose crop diseases from photos, working offline with 92% accuracy.',
      impact: 'Deployed in 5 districts; 15,000+ farmers using app; 35% reduction in crop losses.',
      metrics: ['15,000+ farmers', '35% less crop loss', '92% accuracy', 'Works offline'],
      image: '/images/impact-agri.jpg',
    },
    {
      title: 'Green Cloud Computing: 40% Energy Reduction',
      theme: 'Sustainable Computing',
      problem: 'Data centres consume 2% of global electricity, growing rapidly with AI workloads.',
      solution: 'Carbon-aware Kubernetes scheduler that shifts workloads to regions/times with cleaner energy, plus green compiler optimizations.',
      impact: 'Deployed in partner cloud; 40% energy reduction; adopted by 2 major cloud providers.',
      metrics: ['40% energy reduction', '2 cloud partners', '3 patents', 'Open source'],
      image: '/images/impact-green.jpg',
    },
    {
      title: 'Federated Learning for Tuberculosis Detection',
      theme: 'Cybersecurity / AI',
      problem: 'TB kills 1.5M annually; patient data cannot leave hospitals due to privacy laws, preventing collaborative ML.',
      solution: 'Federated learning framework enabling hospitals to collaboratively train TB detection models without sharing patient data.',
      impact: 'Pilot in 8 hospitals across Nepal and India; 94% detection accuracy; privacy preserved.',
      metrics: ['8 hospitals', '94% accuracy', 'Zero data sharing', 'Wellcome funded'],
      image: '/images/impact-tb.jpg',
    },
  ];

  return (
    <>
      <Header />
      <main id="main-content" className="flex-1 pt-20 md:pt-24 lg:pt-32">
        <Hero
          headline="Research\nImpact"
          subheadline="Our research makes a measurable difference to society, industry, and the environment. Real solutions for real-world challenges."
          primaryCta={{ text: 'Read Impact Stories', href: '#stories' }}
          secondaryCta={{ text: 'Collaborate', href: '/collaborate' }}
          image="/images/impact-hero.jpg"
          imageAlt="Research impact"
          variant="research"
        />

        <StatsSection
          stats={researchStats}
          title="Research Impact in Numbers"
          subtitle="Measurable outcomes from our research investments"
          variant="navy"
        />

        <section id="stories" className="py-16 md:py-24 bg-white" aria-labelledby="stories-heading">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 id="stories-heading" className="font-display font-extrabold text-navy leading-tight text-3xl md:text-5xl lg:text-6xl mb-4">
                  Impact Stories
                </h2>
                <p className="text-lg md:text-xl text-dark-grey leading-relaxed">
                  Real-world problems solved through computing research
                </p>
              </motion.div>

              <div className="space-y-12">
                {impactStories.map((story, index) => (
                  <motion.article
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index }}
                    className="group grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden bg-light-grey">
                      <div className="w-full h-full flex items-center justify-center text-navy/30 text-6xl" aria-hidden="true">
                        📸
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent text-white">
                        <span className="px-2 py-1 bg-lime text-navy text-xs font-bold uppercase tracking-wider mb-2 inline-block">{story.theme}</span>
                        <h3 className="font-display font-bold text-xl md:text-2xl">{story.title}</h3>
                      </div>
                    </div>
                    <div className="space-y-6">
                      <div>
                        <h3 className="font-display font-bold text-navy text-xl mb-2 group-hover:text-lime-deep transition-colors">The Challenge</h3>
                        <p className="text-dark-grey">{story.problem}</p>
                      </div>
                      <div>
                        <h3 className="font-display font-bold text-navy text-xl mb-2">Our Solution</h3>
                        <p className="text-dark-grey">{story.solution}</p>
                      </div>
                      <div>
                        <h3 className="font-display font-bold text-navy text-xl mb-2">Real-World Impact</h3>
                        <p className="text-dark-grey mb-4">{story.impact}</p>
                        <div className="flex flex-wrap gap-3">
                          {story.metrics.map((metric, i) => (
                            <span key={i} className="px-3 py-1 bg-lime/10 text-lime-deep text-xs font-bold uppercase tracking-wider">{metric}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-off-white" aria-labelledby="sdg-heading">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 id="sdg-heading" className="font-display font-extrabold text-navy leading-tight text-3xl md:text-5xl lg:text-6xl mb-4">
                Aligned with UN Sustainable Development Goals
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 max-w-5xl mx-auto">
              {[
                { goal: 3, title: 'Good Health', icon: '🏥' },
                { goal: 4, title: 'Quality Education', icon: '📚' },
                { goal: 7, title: 'Clean Energy', icon: '☀️' },
                { goal: 8, title: 'Decent Work', icon: '💼' },
                { goal: 9, title: 'Innovation', icon: '💡' },
                { goal: 11, title: 'Sustainable Cities', icon: '🏙️' },
                { goal: 13, title: 'Climate Action', icon: '🌍' },
                { goal: 17, title: 'Partnerships', icon: '🤝' },
              ].map((sdg, index) => (
                <motion.article
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.05 * index }}
                  className="group bg-white border border-light-grey hover:border-lime hover:shadow-xl transition-all duration-300 p-4 text-center"
                >
                  <div className="text-3xl mb-2" aria-hidden="true">{sdg.icon}</div>
                  <div className="font-display font-extrabold text-navy text-lg">SDG {sdg.goal}</div>
                  <p className="text-dark-grey text-sm">{sdg.title}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <CTASection
          title="Create Impact Together"
          description="Partner with our researchers to solve real-world challenges. From joint projects to funded PhDs, there are many ways to collaborate."
          primaryCta={{ text: 'Explore Collaboration', href: '/collaborate' }}
          secondaryCta={{ text: 'Contact Research Office', href: '/contact' }}
          variant="lime"
        />
      </main>
      <Footer />
    </>
  );
}
