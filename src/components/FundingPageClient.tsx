'use client';

import { motion } from 'framer-motion';
import { Header } from '@/components/ui/Header';
import { Footer } from '@/components/ui/Footer';
import { Hero } from '@/sections/Hero';
import { CTASection } from '@/sections/CTASection';

export default function FundingPageClient() {
  const fundingSources = [
    {
      name: 'IIC Internal Research Grants',
      description: 'Competitive internal funding for early-stage research projects, pilot studies, and proof-of-concept work.',
      amount: 'Up to Rs. 2,000,000',
      duration: '1-2 years',
      eligibility: 'All full-time faculty',
      deadline: 'Quarterly (Mar, Jun, Sep, Dec)',
      type: 'Internal',
    },
    {
      name: 'Nepal Research Council Grants',
      description: 'National competitive grants for research aligned with national priorities.',
      amount: 'Up to Rs. 10,000,000',
      duration: '2-3 years',
      eligibility: 'Faculty with PhD; PI must be Nepali citizen',
      deadline: 'Annual (typically February)',
      type: 'Government',
    },
    {
      name: 'University Grants Commission (UGC) Nepal',
      description: 'Major research grants, equipment grants, and faculty development programmes.',
      amount: 'Up to Rs. 25,000,000',
      duration: '3 years',
      eligibility: 'Recognized research institutions; collaborative projects encouraged',
      deadline: 'Annual (typically March)',
      type: 'Government',
    },
    {
      name: 'International Development Grants',
      description: 'Funding from World Bank, ADB, UN agencies for development-oriented research.',
      amount: 'Variable (often $100K-$1M+)',
      duration: '2-5 years',
      eligibility: 'Multi-institutional consortia; development focus',
      deadline: 'Varies by programme',
      type: 'International',
    },
    {
      name: 'Industry-Sponsored Research',
      description: 'Direct funding from industry partners for applied research and innovation projects.',
      amount: 'Negotiable (typically Rs. 1M-50M)',
      duration: '1-3 years',
      eligibility: 'Aligned with industry partner priorities',
      deadline: 'Rolling',
      type: 'Industry',
    },
    {
      name: 'International Research Collaborations',
      description: 'Joint funding programmes with international partners (e.g., DAAD, British Council, Fulbright).',
      amount: 'Variable',
      duration: '1-3 years',
      eligibility: 'Joint proposals with international partners',
      deadline: 'Varies by programme',
      type: 'International',
    },
  ];

  return (
    <>
      <Header />
      <main id="main-content" className="flex-1 pt-16 md:pt-20 lg:pt-24">
        <Hero
          headline="Research Funding\n& Grants"
          subheadline="Explore diverse funding opportunities for your research. Internal grants, national programmes, and international collaborations."
          primaryCta={{ text: 'View Current Calls', href: '#calls' }}
          secondaryCta={{ text: 'Grant Writing Support', href: '/research/grant-support' }}
          image="/images/funding-hero.jpg"
          imageAlt="Research funding"
          variant="page"
        />

        <section id="calls" className="py-16 md:py-24 bg-white" aria-labelledby="calls-heading">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 id="calls-heading" className="font-display font-extrabold text-navy leading-tight text-3xl md:text-5xl lg:text-6xl mb-4">
                  Current Funding Opportunities
                </h2>
                <p className="text-lg md:text-xl text-dark-grey leading-relaxed">
                  Diverse funding sources to support your research ambitions
                </p>
              </motion.div>

              <div className="space-y-6">
                {fundingSources.map((funding, index) => (
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
                          <span className="px-3 py-1 bg-lime text-navy text-xs font-bold uppercase tracking-wider">{funding.type}</span>
                        </div>
                        <h3 className="font-display font-bold text-navy text-xl md:text-2xl mb-2 group-hover:text-lime transition-colors">{funding.name}</h3>
                        <p className="text-dark-grey mb-4">{funding.description}</p>
                        <div className="flex flex-wrap gap-4 text-sm text-medium-grey">
                          <span className="flex items-center gap-1"><span aria-hidden="true">💰</span> {funding.amount}</span>
                          <span className="flex items-center gap-1"><span aria-hidden="true">⏱️</span> {funding.duration}</span>
                          <span className="flex items-center gap-1"><span aria-hidden="true">🎓</span> {funding.eligibility}</span>
                        </div>
                      </div>
                      <div className="md:w-48 flex-shrink-0">
                        <div className="bg-navy text-white p-4 rounded-none text-center">
                          <div className="font-display font-bold text-lg mb-1">Deadline</div>
                          <div className="font-display font-extrabold text-xl text-lime">{funding.deadline}</div>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div className="bg-off-white p-4 rounded-none border border-light-grey">
                        <h4 className="font-display font-medium text-navy text-sm mb-2">How to Apply</h4>
                        <p className="text-dark-grey text-sm">Contact the Research Office for application guidelines and internal review process.</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t border-light-grey">
                      <a href="/research/grant-support" className="inline-flex items-center gap-2 text-navy font-medium hover:text-lime transition-colors group">
                        Grant Writing Support
                        <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                      </a>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-off-white" aria-labelledby="support-heading">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 id="support-heading" className="font-display font-extrabold text-navy leading-tight text-3xl md:text-5xl lg:text-6xl mb-4">
                Grant Writing & Support Services
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: '📝', title: 'Proposal Review', desc: 'Internal peer review of draft proposals before submission' },
                { icon: '💰', title: 'Budget Development', desc: 'Assistance with costing, justification, and financial compliance' },
                { icon: '🤝', title: 'Partner Matching', desc: 'Connecting with academic and industry collaborators' },
                { icon: '📊', title: 'Impact Planning', desc: 'Developing research impact pathways and KPIs' },
                { icon: '✍️', title: 'Writing Workshops', desc: 'Regular grant writing workshops and bootcamps' },
                { icon: '📋', title: 'Compliance Support', desc: 'Ethics approval, data management plans, GDPR compliance' },
                { icon: '🌍', title: 'International Partnerships', desc: 'Support for multi-country consortium building' },
                { icon: '📈', title: 'Post-Award Management', desc: 'Financial reporting, progress tracking, audit preparation' },
              ].map((item, index) => (
                <motion.article
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                  className="group bg-white border border-light-grey hover:border-lime hover:shadow-xl transition-all duration-300 p-6 h-full text-center"
                >
                  <div className="text-4xl mb-4" aria-hidden="true">{item.icon}</div>
                  <h3 className="font-display font-bold text-navy text-xl mb-2 group-hover:text-lime transition-colors">{item.title}</h3>
                  <p className="text-dark-grey">{item.desc}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-navy text-white" aria-labelledby="success-heading">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 id="success-heading" className="font-display font-extrabold leading-tight text-3xl md:text-5xl lg:text-6xl mb-4">
                Recent Funding Successes
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                { project: 'Green AI for Edge Computing', funder: 'Nepal Research Council', amount: 'Rs. 8M', duration: '2024-2026' },
                { project: 'Federated Learning for TB Detection', funder: 'Wellcome Trust', amount: '£450K', duration: '2023-2026' },
                { project: 'Post-Quantum Crypto for SCADA', funder: 'World Bank', amount: '$200K', duration: '2024-2025' },
              ].map((item, index) => (
                <motion.article
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                  className="group bg-white/10 border border-white/20 hover:border-lime hover:bg-white/20 transition-all duration-300 p-6 h-full"
                >
                  <h3 className="font-display font-bold text-white text-xl mb-2 group-hover:text-lime transition-colors">{item.project}</h3>
                  <p className="text-white/70 mb-2"><span className="font-medium text-lime">Funder:</span> {item.funder}</p>
                  <p className="text-white/70 mb-2"><span className="font-medium text-lime">Amount:</span> {item.amount}</p>
                  <p className="text-white/70"><span className="font-medium text-lime">Duration:</span> {item.duration}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <CTASection
          title="Ready to Fund Your Research?"
          description="Our Research Office provides end-to-end support from idea to funded project."
          primaryCta={{ text: 'Contact Research Office', href: '/research/grant-support' }}
          secondaryCta={{ text: 'Grant Writing Workshop', href: '/events?type=workshop' }}
          variant="lime"
        />
      </main>
      <Footer />
    </>
  );
}