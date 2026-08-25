'use client';

import { motion } from 'framer-motion';
import { Header } from '@/components/ui/Header';
import { Footer } from '@/components/ui/Footer';
import { Hero } from '@/sections/Hero';
import { CTASection } from '@/sections/CTASection';
import { news } from '@/data/university';

export default function RepositoryPageClient() {
  const publications = [
    { title: 'Energy-Efficient Transformer Architectures for Edge Deployment', authors: 'Sharma, R. et al.', year: 2024, venue: 'ACM SIGOPS', theme: 'Sustainable Computing', doi: '10.1145/3620665.3640382', openAccess: true },
    { title: 'Low-Resource Neural Machine Translation for Nepali-English', authors: 'Khadka, S. et al.', year: 2024, venue: 'ACL Findings', theme: 'AI & ML', doi: '10.18653/v1/2024.findings-acl.123', openAccess: true },
    { title: 'Privacy-Preserving Federated Learning for Medical Imaging', authors: 'Poudel, N. et al.', year: 2024, venue: 'IEEE S&P', theme: 'Cybersecurity', doi: '10.1109/SP46215.2024.00045', openAccess: true },
    { title: 'Satellite-Based Crop Yield Prediction Using Multi-Modal Fusion', authors: 'Adhikari, P. et al.', year: 2024, venue: 'Nature Scientific Reports', theme: 'Data Science', doi: '10.1038/s41598-024-56789-0', openAccess: true },
    { title: 'Green Compiler Optimizations for ARM-based Edge Devices', authors: 'Sharma, R. et al.', year: 2023, venue: 'ASPLOS', theme: 'Sustainable Computing', doi: '10.1145/3575693.3575701', openAccess: true },
    { title: 'Ethical AI Frameworks for Low-Resource Settings', authors: 'Regmi, B. et al.', year: 2023, venue: 'AAAI AI Ethics', theme: 'AI & ML', doi: '10.1609/aaai.v37i1.25432', openAccess: true },
    { title: 'Post-Quantum Key Exchange for SCADA Systems', authors: 'Poudel, N. et al.', year: 2023, venue: 'NDSS', theme: 'Cybersecurity', doi: '10.14722/ndss.2023.24012', openAccess: false },
    { title: 'Federated Learning for Tuberculosis Detection in Resource-Limited Settings', authors: 'Khadka, S. et al.', year: 2023, venue: 'MICCAI', theme: 'AI & ML', doi: '10.1007/978-3-031-43990-2_15', openAccess: true },
    { title: 'Carbon-Aware Scheduling for Kubernetes Clusters', authors: 'Sharma, R. et al.', year: 2023, venue: 'EuroSys', theme: 'Sustainable Computing', doi: '10.1145/3552321.3587654', openAccess: true },
    { title: 'Differential Privacy for Nepali Census Data Release', authors: 'Adhikari, P. et al.', year: 2023, venue: 'PETS', theme: 'Data Science', doi: '10.2478/pet-2023-0012', openAccess: true },
  ];

  return (
    <>
      <Header />
      <main id="main-content" className="flex-1 pt-16 md:pt-20 lg:pt-24">
        <Hero
          headline="Research\nRepository"
          subheadline="Open-access publications from IIC researchers. 150+ papers across AI, Cybersecurity, Data Science, and Sustainable Computing."
          primaryCta={{ text: 'Browse Publications', href: '#publications' }}
          secondaryCta={{ text: 'Submit Your Paper', href: '/research/submit' }}
          image="/images/repository-hero.jpg"
          imageAlt="Research repository"
          variant="page"
        />

        <section id="publications" className="py-16 md:py-24 bg-white" aria-labelledby="publications-heading">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <h2 id="publications-heading" className="font-display font-extrabold text-navy leading-tight text-3xl md:text-5xl lg:text-6xl mb-4">
                  Publications
                </h2>
                <p className="text-lg md:text-xl text-dark-grey leading-relaxed">
                  Browse our latest research outputs. Open-access papers are freely available for download.
                </p>
              </motion.div>

              <div className="flex flex-wrap gap-4 mb-8" role="group" aria-label="Filter by theme">
                {['All', 'Sustainable Computing', 'AI & ML', 'Cybersecurity', 'Data Science'].map((filter) => (
                  <button
                    key={filter}
                    className="px-4 py-2 bg-white border-2 border-light-grey hover:border-lime hover:bg-lime/5 transition-colors text-navy font-medium"
                  >
                    {filter}
                  </button>
                ))}
              </div>

              <div className="space-y-4">
                {publications.map((pub, index) => (
                  <motion.article
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.05 * index }}
                    className="group bg-white border border-light-grey hover:border-lime hover:shadow-xl transition-all duration-300 p-6"
                  >
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                      <div className="flex-1 min-w-0">
                        <h3 className="font-display font-bold text-navy text-lg md:text-xl mb-2 group-hover:text-lime transition-colors">
                          {pub.title}
                        </h3>
                        <p className="text-medium-grey text-sm mb-2">{pub.authors}</p>
                        <p className="text-medium-grey text-sm">
                          <span className="font-medium">{pub.venue}</span>, {pub.year} •
                          <a href={`https://doi.org/${pub.doi}`} target="_blank" rel="noopener noreferrer" className="text-lime hover:underline ml-2">
                            DOI: {pub.doi}
                          </a>
                        </p>
                      </div>
                      <div className="flex flex-wrap items-center gap-3 md:w-auto">
                        <span className="px-3 py-1 bg-lime text-navy text-xs font-bold uppercase tracking-wider">{pub.theme}</span>
                        {pub.openAccess && (
                          <span className="px-2 py-1 bg-green-500/10 text-green-600 text-xs font-medium">Open Access</span>
                        )}
                        <a href={`https://doi.org/${pub.doi}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-navy font-medium hover:text-lime transition-colors group">
                          View Paper
                          <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                        </a>
                      </div>
                    </div>
                    <div className="text-dark-grey text-sm border-t border-light-grey pt-4">
                      {pub.authors}, <em>{pub.title}</em>, {pub.venue} {pub.year}.
                    </div>
                  </motion.article>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="mt-12 text-center"
              >
                <p className="text-dark-grey mb-6">Showing 10 of 150+ publications. <a href="/research/repository/all" className="text-lime font-medium hover:underline">View all publications</a></p>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-off-white" aria-labelledby="stats-heading">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 id="stats-heading" className="font-display font-extrabold text-navy leading-tight text-3xl md:text-5xl lg:text-6xl mb-4">
                Repository Statistics
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[
                { value: '150+', label: 'Total Publications' },
                { value: '85%', label: 'Open Access' },
                { value: '5,000+', label: 'Total Citations' },
                { value: '25+', label: 'Research Themes' },
              ].map((stat, index) => (
                <motion.article
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                  className="bg-white border border-light-grey hover:border-lime hover:shadow-xl transition-all duration-300 p-6 text-center"
                >
                  <div className="font-display font-extrabold text-navy text-3xl md:text-4xl mb-1">{stat.value}</div>
                  <div className="text-dark-grey">{stat.label}</div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-navy text-white" aria-labelledby="metrics-heading">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 id="metrics-heading" className="font-display font-extrabold leading-tight text-3xl md:text-5xl lg:text-6xl mb-4">
                Research Impact Metrics
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                { icon: '📊', title: 'h-index', value: '45', desc: 'Average faculty h-index' },
                { icon: '📚', title: 'Citations', value: '5,000+', desc: 'Total citations (2020-2024)' },
                { icon: '🌍', title: 'Global Reach', value: '85', desc: 'Countries citing IIC research' },
              ].map((item, index) => (
                <motion.article
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                  className="group bg-white/10 border border-white/20 hover:border-lime hover:bg-white/20 transition-all duration-300 p-6 h-full text-center"
                >
                  <div className="text-4xl mb-4" aria-hidden="true">{item.icon}</div>
                  <div className="font-display font-extrabold text-3xl md:text-4xl mb-2">{item.value}</div>
                  <h3 className="font-display font-bold text-white text-xl mb-2 group-hover:text-lime transition-colors">{item.title}</h3>
                  <p className="text-white/70">{item.desc}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <CTASection
          title="Submit Your Research"
          description="IIC researchers can submit their publications to the repository. Contact the library for submission guidelines."
          primaryCta={{ text: 'Submission Guidelines', href: '/research/submit' }}
          secondaryCta={{ text: 'Contact Library', href: '/life/campus/library' }}
          variant="lime"
        />
      </main>
      <Footer />
    </>
  );
}