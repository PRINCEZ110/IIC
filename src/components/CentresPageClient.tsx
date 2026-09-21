'use client';

import { motion } from 'framer-motion';
import { Hero } from '@/sections/Hero';
import { CTASection } from '@/sections/CTASection';
import Link from 'next/link';

interface Centre {
  id: string;
  name: string;
  shortDesc: string;
  description: string;
  equipment: string[];
  location: string;
  theme: string;
}

interface CentresPageClientProps {
  centres: Centre[];
}

export function CentresPageClient({ centres }: CentresPageClientProps) {
  return (
    <>
      <Hero
        headline="Research Centres\n& Labs"
        subheadline="Eight specialist centres with world-class facilities. From AI supercomputing to cybersecurity testbeds, our infrastructure powers breakthrough research."
        primaryCta={{ text: 'Book a Lab Tour', href: '/visit/campus-tour' }}
        secondaryCta={{ text: 'Collaborate', href: '/collaborate' }}
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
                      <h3 className="font-display font-bold text-navy text-2xl md:text-3xl group-hover:text-lime-deep transition-colors">{centre.name}</h3>
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
                        <Link href="/collaborate" className="inline-flex items-center gap-2 text-navy font-medium hover:text-lime-deep transition-colors group">
                          View Facilities for Hire
                          <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                          </svg>
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
              { icon: '🤝', title: 'Academic Collaboration', desc: 'Joint research projects, shared PhD supervision, and facility access for partner institutions.', link: '/collaborate' },
              { icon: '🏢', title: 'Industry Partnerships', desc: 'Facility hire, joint R&D projects, and dedicated industry research programmes.', link: '/collaborate' },
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
                <h3 className="font-display font-bold text-navy text-xl mb-2 group-hover:text-lime-deep transition-colors">{item.title}</h3>
                <p className="text-dark-grey mb-4 flex-1">{item.desc}</p>
                <Link href={item.link} className="inline-flex items-center gap-2 text-navy font-medium hover:text-lime-deep transition-colors group">
                  Learn More
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                  </svg>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Access World-Class Facilities?"
        description="Whether you're a researcher, industry partner, or student, our facilities are here to power your innovation."
        primaryCta={{ text: 'Contact Facilities Team', href: '/collaborate' }}
        secondaryCta={{ text: 'Book a Tour', href: '/visit/campus-tour' }}
        variant="navy"
      />
    </>
  );
}
