'use client';

import { motion } from 'framer-motion';
import { Header } from '@/components/ui/Header';
import { Footer } from '@/components/ui/Footer';
import { Hero } from '@/sections/Hero';
import { CTASection } from '@/sections/CTASection';
import { researchThemes } from '@/data/university';
import Link from 'next/link';

export default function PhDOpportunitiesPageClient() {
  const fundedPositions = [
    {
      title: 'Energy-Efficient Deep Learning for Edge Devices',
      theme: 'Sustainable Computing',
      supervisor: 'Dr. Rajesh Sharma',
      description: 'Develop novel compression and quantization techniques for deploying deep learning models on resource-constrained edge devices.',
      funding: 'Full tuition + Rs. 50,000/month stipend',
      duration: '3-4 years',
      requirements: 'MSc in Computer Science/Electrical Engineering; strong Python/PyTorch skills',
      deadline: 'Rolling',
    },
    {
      title: 'Low-Resource NLP for Nepali and Regional Languages',
      theme: 'AI & Machine Learning',
      supervisor: 'Dr. Suman Khadka',
      description: 'Develop NLP models and resources for low-resource languages spoken in Nepal and the Himalayan region.',
      funding: 'Full tuition + Rs. 45,000/month stipend',
      duration: '3-4 years',
      requirements: 'MSc in Computer Science/Linguistics; NLP experience preferred',
      deadline: 'March 31',
    },
    {
      title: 'Privacy-Preserving Federated Learning for Healthcare',
      theme: 'Cybersecurity',
      supervisor: 'Dr. Niraj Poudel',
      description: 'Develop federated learning frameworks that enable collaborative ML across hospitals without sharing patient data.',
      funding: 'Full tuition + Rs. 50,000/month stipend',
      duration: '3-4 years',
      requirements: 'MSc in Computer Science; cryptography/ML background',
      deadline: 'Rolling',
    },
    {
      title: 'Predictive Analytics for Agricultural Yield Forecasting',
      theme: 'Data Science',
      supervisor: 'Dr. Priya Adhikari',
      description: 'Develop predictive models for crop yield forecasting using satellite imagery, weather data, and IoT sensor fusion.',
      funding: 'Full tuition + Rs. 40,000/month stipend',
      duration: '3-4 years',
      requirements: 'MSc in Data Science/Statistics/CS; strong ML/statistics background',
      deadline: 'April 30',
    },
    {
      title: 'Ethical AI Governance Frameworks for Developing Nations',
      theme: 'AI & Machine Learning',
      supervisor: 'Dr. Bikash Regmi',
      description: 'Develop context-aware ethical AI frameworks suitable for deployment in resource-constrained environments.',
      funding: 'Full tuition + Rs. 40,000/month stipend',
      duration: '3-4 years',
      requirements: 'MSc in CS/Philosophy/Public Policy; interdisciplinary background welcome',
      deadline: 'Rolling',
    },
    {
      title: 'Post-Quantum Cryptography for Critical Infrastructure',
      theme: 'Cybersecurity',
      supervisor: 'Dr. Niraj Poudel',
      description: 'Evaluate and implement post-quantum cryptographic algorithms for Nepal\'s critical national infrastructure.',
      funding: 'Full tuition + Rs. 50,000/month stipend',
      duration: '3-4 years',
      requirements: 'MSc in CS/Math; strong cryptography background',
      deadline: 'January 31',
    },
  ];

  return (
    <>
      <Header />
      <main id="main-content" className="flex-1 pt-20 md:pt-24 lg:pt-32">
        <Hero
          headline="PhD\nOpportunities"
          subheadline="Join our vibrant research community. 15+ funded PhD positions available across AI, Cybersecurity, Data Science, and Sustainable Computing."
          primaryCta={{ text: 'View All Positions', href: '#positions' }}
          secondaryCta={{ text: 'How to Apply', href: '/admissions/apply' }}
          image="/images/phd-hero.jpg"
          imageAlt="PhD researchers at work"
          variant="research"
        />

        <section id="positions" className="py-16 md:py-24 bg-white" aria-labelledby="positions-heading">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 id="positions-heading" className="font-display font-extrabold text-navy leading-tight text-3xl md:text-5xl lg:text-6xl mb-4">
                  Funded PhD Positions
                </h2>
                <p className="text-lg md:text-xl text-dark-grey leading-relaxed">
                  Competitive fully-funded positions with generous stipends and research budgets
                </p>
              </motion.div>

              <div className="space-y-6">
                {fundedPositions.map((position, index) => (
                  <motion.article
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index }}
                    className="group bg-white border border-light-grey hover:border-lime hover:shadow-xl transition-all duration-300 p-6 md:p-8"
                  >
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="px-3 py-1 bg-lime text-navy text-xs font-bold uppercase tracking-wider">Fully Funded</span>
                          <span className="px-3 py-1 bg-blue-500/10 text-blue-500 font-medium text-xs">{position.theme}</span>
                        </div>
                        <h3 className="font-display font-bold text-navy text-xl md:text-2xl mb-2 group-hover:text-lime-deep transition-colors">{position.title}</h3>
                        <p className="text-dark-grey mb-4">{position.description}</p>
                        <div className="flex flex-wrap gap-4 text-sm text-medium-grey">
                          <span className="flex items-center gap-1"><span aria-hidden="true">👨‍🏫</span> Supervisor: {position.supervisor}</span>
                          <span className="flex items-center gap-1"><span aria-hidden="true">⏱️</span> {position.duration}</span>
                          <span className="flex items-center gap-1"><span aria-hidden="true">💰</span> {position.funding}</span>
                        </div>
                      </div>
                      <div className="md:w-64 flex-shrink-0">
                        <div className="bg-navy text-white p-4 rounded-none text-center">
                          <div className="font-display font-bold text-lg mb-1">Apply By</div>
                          <div className="font-display font-extrabold text-2xl text-lime-deep">{position.deadline}</div>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div className="bg-off-white p-4 rounded-none border border-light-grey">
                        <h4 className="font-display font-medium text-navy text-sm mb-2">Requirements</h4>
                        <p className="text-dark-grey text-sm">{position.requirements}</p>
                      </div>
                      <div className="bg-navy/5 p-4 rounded-none border border-light-grey">
                        <h4 className="font-display font-medium text-navy text-sm mb-2">Funding Package</h4>
                        <p className="text-white text-sm">{position.funding}</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t border-light-grey">
                      <Link href="/admissions/apply" className="inline-flex items-center gap-2 text-navy font-medium hover:text-lime-deep transition-colors group">
                        View Details & Apply
                        <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                      </Link>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-off-white" aria-labelledby="themes-heading">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 id="themes-heading" className="font-display font-extrabold text-navy leading-tight text-3xl md:text-5xl lg:text-6xl mb-4">
                Research Themes
              </h2>
              <p className="text-lg md:text-xl text-dark-grey leading-relaxed">
                Explore PhD opportunities across our four research themes
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {researchThemes.map((theme, index) => (
                <motion.article
                  key={theme.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                  className="group bg-white border border-light-grey hover:border-lime hover:shadow-xl transition-all duration-300 p-6 h-full"
                >
                  <div className="text-4xl mb-4" aria-hidden="true">🔬</div>
                  <h3 className="font-display font-bold text-navy text-xl mb-2 group-hover:text-lime-deep transition-colors">{theme.title}</h3>
                  <p className="text-lime-deep text-sm font-medium mb-3">{theme.subtitle}</p>
                  <p className="text-dark-grey text-sm mb-4 flex-1">{theme.description}</p>
                  <Link href={theme.href} className="inline-flex items-center gap-2 text-navy font-medium hover:text-lime-deep transition-colors group">
                    Explore PhD Topics
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-navy text-white" aria-labelledby="apply-heading">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 id="apply-heading" className="font-display font-extrabold leading-tight text-3xl md:text-5xl lg:text-6xl mb-4">
                How to Apply
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[
                { step: '01', title: 'Find a Supervisor', desc: 'Browse research themes and identify potential supervisors whose work aligns with your interests.' },
                { step: '02', title: 'Develop Proposal', desc: 'Work with your chosen supervisor to develop a research proposal (2,000-3,000 words).' },
                { step: '03', title: 'Submit Application', desc: 'Complete online application with transcripts, CV, proposal, and references.' },
                { step: '04', title: 'Interview & Decision', desc: 'Shortlisted candidates interviewed by panel. Decisions within 4-6 weeks.' },
              ].map((item, index) => (
                <motion.article
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                  className="group relative p-6 text-center"
                >
                  <span className="font-display font-extrabold text-lime text-4xl mb-4 block">{item.step}</span>
                  <h3 className="font-display font-bold text-white text-xl mb-2 group-hover:text-lime transition-colors">{item.title}</h3>
                  <p className="text-white/70">{item.desc}</p>
                </motion.article>
              ))}
            </div>

            <div className="mt-12">
              <Link href="/admissions/apply" className="inline-flex items-center gap-2 border-2 border-white/30 hover:border-lime text-white font-semibold px-8 py-4 transition-colors group">
                      Start Your Application
                      <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </Link>
            </div>
          </div>
        </section>

        <CTASection
          title="Ready to Begin Your Research Journey?"
          description="Contact our Graduate Research School for guidance on proposals, funding, and finding the right supervisor."
          primaryCta={{ text: 'Contact Graduate Research', href: '/contact' }}
          secondaryCta={{ text: 'View All Opportunities', href: '/research/phd-opportunities' }}
          variant="blue"
        />
      </main>
      <Footer />
    </>
  );
}
