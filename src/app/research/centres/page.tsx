import { Metadata } from 'next';
import { Header } from '@/components/ui/Header';
import { Footer } from '@/components/ui/Footer';
import { Hero } from '@/sections/Hero';
import { CTASection } from '@/sections/CTASection';
import { researchThemes } from '@/data/university';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Research Centres & Labs',
  description: 'Explore IIC\'s 8 specialist research centres and labs. State-of-the-art facilities for AI, cybersecurity, data science, and sustainable computing.',
};

const centres = [
  {
    id: 'ai-ml-lab',
    name: 'AI & Machine Learning Lab',
    shortDesc: 'High-performance GPU clusters for deep learning and AI research',
    description: 'Our flagship AI lab houses multiple GPU clusters with 100+ GPUs, supporting large-scale deep learning training, reinforcement learning, and computer vision research. The lab supports research in NLP, computer vision, medical AI, and ethical AI.',
    equipment: ['NVIDIA A100 GPUs (32x)', 'NVIDIA RTX 3090/4090 (20x)', 'High-speed NVMe storage (500TB)', '100 Gbps interconnect'],
    location: 'Level 3, Research Block',
    theme: 'AI & ML',
  },
  {
    id: 'cyber-lab',
    name: 'Cybersecurity Research Centre',
    shortDesc: 'Isolated networks for penetration testing and security research',
    description: 'A fully isolated network environment for penetration testing, malware analysis, and security research. Includes SCADA/ICS testbeds for critical infrastructure security research.',
    equipment: ['Isolated network racks (10x)', 'SCADA/ICS simulators', 'Malware analysis sandboxes', 'Hardware security modules'],
    location: 'Level 2, Research Block',
    theme: 'Cybersecurity',
  },
  {
    id: 'data-science-institute',
    name: 'Data Science Institute',
    shortDesc: 'High-performance computing for big data analytics and visualization',
    description: 'Dedicated HPC cluster for big data processing, predictive modelling, and interactive visual analytics. Supports research in statistical learning, data visualization, and real-time analytics.',
    equipment: ['CPU cluster (512 cores)', 'Large-memory nodes (2TB RAM)', 'Interactive visualization wall', 'Apache Spark/Flink cluster'],
    location: 'Level 3, Research Block',
    theme: 'Data Science',
  },
  {
    id: 'sustainable-computing-lab',
    name: 'Sustainable Computing Lab',
    shortDesc: 'Energy measurement and green computing testbed',
    description: 'Specialized lab for measuring and optimizing energy consumption of computing systems. Includes power measurement infrastructure, thermal imaging, and green algorithm testbeds.',
    equipment: ['Precision power meters (50x)', 'Thermal cameras', 'ARM/x86 test clusters', 'Carbon intensity monitors'],
    location: 'Level 1, Research Block',
    theme: 'Sustainable Computing',
  },
  {
    id: 'software-engineering-studio',
    name: 'Software Engineering Studio',
    shortDesc: 'Agile workspaces and CI/CD pipelines for software research',
    description: 'Modern software engineering studio with agile workspaces, device testing lab, and full CI/CD infrastructure for research in software engineering practices, DevOps, and testing.',
    equipment: ['Mobile device lab (50+ devices)', 'CI/CD pipeline infrastructure', 'Code quality analyzers', 'Usability testing lab'],
    location: 'Level 2, Research Block',
    theme: 'Software Engineering',
  },
  {
    id: 'innovation-centre',
    name: 'Innovation Centre',
    shortDesc: 'Co-working, incubation, and maker space for innovation',
    description: 'Open innovation space with co-working areas, startup incubation program, maker space with 3D printing, and industry collaboration zones. Supports student entrepreneurship and industry partnerships.',
    equipment: ['3D printers (FDM/SLA)', 'Electronics workstations', 'VR/AR development kits', 'Co-working desks (50+)'],
    location: 'Ground Floor, Innovation Wing',
    theme: 'Innovation',
  },
  {
    id: 'central-library',
    name: 'Central Library & Digital Resources',
    shortDesc: '50,000+ volumes, digital databases, and research support',
    description: 'Modern academic library with extensive print and digital collections, specialist research databases, silent and collaborative study zones, and dedicated research support services.',
    equipment: ['50,000+ print volumes', '100+ research databases', 'Digital repository', 'Research data management support'],
    location: 'Level 1-2, Library Block',
    theme: 'Library',
  },
];

export default function CentresPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="flex-1 pt-16 md:pt-20 lg:pt-24">
        <Hero
          headline="Research Centres\n& Labs"
          subheadline="Eight specialist centres with world-class facilities. From AI supercomputing to cybersecurity testbeds, our infrastructure powers breakthrough research."
          primaryCta={{ text: 'Book a Lab Tour', href: '/visit/campus-tour' }}
          secondaryCta={{ text: 'Collaborate', href: '/collaborate/research' }}
          image="/images/centres-hero.jpg"
          imageAlt="Research centres at IIC"
          variant="page"
        />

        <section className="py-16 md:py-24 bg-white" aria-labelledby="centres-heading">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 id="centres-heading" className="font-display font-extrabold text-navy leading-tight text-3xl md:text-5xl lg:text-6xl mb-4">
                  Our Research Centres
                </h2>
                <p className="text-lg md:text-xl text-dark-grey leading-relaxed">
                  Eight specialist centres with over Rs. 200M in research infrastructure
                </p>
              </motion.div>

              <div className="space-y-8">
                {centres.map((centre, index) => (
                  <motion.article
                    key={centre.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index }}
                    className="group bg-white border border-light-grey hover:border-lime hover:shadow-xl transition-all duration-300 overflow-hidden"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                      <div className="lg:col-span-1 relative aspect-[4/3] overflow-hidden bg-light-grey">
                        <div className="w-full h-full flex items-center justify-center text-navy/30 text-6xl" aria-hidden="true">
                          🏢
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent text-white">
                          <span className="px-2 py-1 bg-lime text-navy text-xs font-bold uppercase tracking-wider mb-2 inline-block">{centre.theme}</span>
                          <h3 className="font-display font-bold text-lg md:text-xl">{centre.name}</h3>
                        </div>
                      </div>
                      <div className="lg:col-span-2 p-6 md:p-8 space-y-4">
                        <div className="flex items-center gap-3">
                          <span className="px-3 py-1 bg-lime text-navy text-xs font-bold uppercase tracking-wider">{centre.theme}</span>
                          <span className="px-3 py-1 bg-white/90 text-navy text-xs font-medium">{centre.location}</span>
                        </div>
                        <h3 className="font-display font-bold text-navy text-2xl md:text-3xl group-hover:text-lime transition-colors">{centre.name}</h3>
                        <p className="text-dark-grey leading-relaxed">{centre.description}</p>
                        <h4 className="font-display font-medium text-navy text-sm uppercase tracking-wider mt-4 mb-2">Key Equipment</h4>
                        <ul className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm text-dark-grey" role="list">
                          {centre.equipment.map((item, i) => (
                            <li key={i} className="flex items-center gap-2">
                              <span className="w-1.5 h-1.5 bg-lime rounded-full flex-shrink-0" aria-hidden="true" />
                              {item}
                            </li>
                          ))}
                        </ul>
                        <div className="pt-4 border-t border-light-grey">
                          <Link href="/collaborate/facilities" className="inline-flex items-center gap-2 text-navy font-medium hover:text-lime transition-colors group">
                            View Facilities for Hire
                            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-off-white" aria-labelledby="access-heading">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 id="access-heading" className="font-display font-extrabold text-navy leading-tight text-3xl md:text-5xl lg:text-6xl mb-4">
                Access & Collaboration
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                { icon: '🤝', title: 'Academic Collaboration', desc: 'Joint research projects, shared PhD supervision, and facility access for partner institutions.', link: '/collaborate/research' },
                { icon: '🏢', title: 'Industry Partnerships', desc: 'Facility hire, joint R&D projects, and dedicated industry research programmes.', link: '/collaborate/facilities' },
                { icon: '🎓', title: 'Student Access', desc: 'Undergraduate and postgraduate students access labs through coursework and research projects.', link: '/study' },
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
                  <p className="text-dark-grey mb-4 flex-1">{item.desc}</p>
                  <a href={item.link} className="inline-flex items-center gap-2 text-navy font-medium hover:text-lime transition-colors group">
                    Learn More
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                  </a>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <CTASection
          title="Ready to Access World-Class Facilities?"
          description="Whether you're a researcher, industry partner, or student, our facilities are here to power your innovation."
          primaryCta={{ text: 'Contact Facilities Team', href: '/collaborate/facilities' }}
          secondaryCta={{ text: 'Book a Tour', href: '/visit/campus-tour' }}
          variant="navy"
        />
      </main>
      <Footer />
    </>
  );
}

import { motion } from 'framer-motion';