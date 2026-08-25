'use client';

import { motion } from 'framer-motion';
import { Header } from '@/components/ui/Header';
import { Footer } from '@/components/ui/Footer';
import { Hero } from '@/sections/Hero';
import { CTASection } from '@/sections/CTASection';
import { stats } from '@/data/university';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export default function ScholarshipsPageClient() {
  const scholarships = [
    {
      name: 'IIC Merit Scholarship',
      description: 'Awarded to top-performing students based on academic excellence. Covers up to 50% of tuition fees.',
      value: 'Up to 50% tuition',
      eligibility: 'Minimum 85% in +2 or equivalent; maintain 3.5 GPA',
      deadline: 'July 31',
      type: 'Merit-based',
    },
    {
      name: 'Dean\'s Excellence Award',
      description: 'For outstanding students demonstrating leadership, innovation, and community impact alongside academic achievement.',
      value: 'Rs. 200,000/year',
      eligibility: 'Minimum 80% in +2; leadership portfolio required',
      deadline: 'July 15',
      type: 'Merit + Leadership',
    },
    {
      name: 'Women in Tech Scholarship',
      description: 'Encouraging female participation in computing. Available for all undergraduate computing programmes.',
      value: '25% tuition reduction',
      eligibility: 'Female applicants to undergraduate programmes',
      deadline: 'July 31',
      type: 'Diversity',
    },
    {
      name: 'International Student Scholarship',
      description: 'Supporting talented students from SAARC and other developing nations.',
      value: 'Up to 40% tuition',
      eligibility: 'International applicants with strong academic record',
      deadline: 'June 30',
      type: 'International',
    },
    {
      name: 'Need-Based Bursary',
      description: 'Financial support for students from economically disadvantaged backgrounds who demonstrate academic potential.',
      value: 'Up to 75% tuition',
      eligibility: 'Household income below Rs. 600,000/year; academic merit',
      deadline: 'Rolling',
      type: 'Need-based',
    },
    {
      name: 'Research Excellence Scholarship',
      description: 'For postgraduate research students demonstrating exceptional research potential.',
      value: 'Full tuition + stipend',
      eligibility: 'First-class honours; research proposal; supervisor endorsement',
      deadline: 'Rolling',
      type: 'Research',
    },
  ];

  return (
    <>
      <Header />
      <main id="main-content" className="flex-1 pt-16 md:pt-20 lg:pt-24">
        <Hero
          headline="Scholarships\n& Funding"
          subheadline="We believe talent should never be limited by financial circumstances. Explore our range of scholarships, bursaries, and funding options."
          primaryCta={{ text: 'Apply for Scholarships', href: '#scholarships' }}
          secondaryCta={{ text: 'Contact Financial Aid', href: '/contact' }}
          image="/images/scholarships-hero.jpg"
          imageAlt="Students celebrating scholarship awards"
          variant="page"
        />

        <section id="scholarships" className="py-16 md:py-24 bg-white" aria-labelledby="scholarships-heading">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 id="scholarships-heading" className="font-display font-extrabold text-navy leading-tight text-3xl md:text-5xl lg:text-6xl mb-4">
                  Available Scholarships
                </h2>
                <p className="text-lg md:text-xl text-dark-grey leading-relaxed">
                  We offer a variety of scholarships and bursaries to support students at every stage of their academic journey.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {scholarships.map((scholarship, index) => (
                  <motion.article
                    key={scholarship.name}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index }}
                    className="group bg-white border border-light-grey hover:border-lime hover:shadow-xl transition-all duration-300 p-6 h-full flex flex-col"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 bg-lime text-navy text-xs font-bold uppercase tracking-wider">{scholarship.type}</span>
                      <span className="font-display font-bold text-lime text-2xl">{scholarship.value}</span>
                    </div>
                    <h3 className="font-display font-bold text-navy text-xl mb-2 group-hover:text-lime transition-colors">{scholarship.name}</h3>
                    <p className="text-dark-grey text-sm mb-4 flex-1">{scholarship.description}</p>
                    <div className="space-y-2 text-sm text-medium-grey mb-4 border-t border-light-grey pt-4">
                      <p><span className="font-medium text-navy">Eligibility:</span> {scholarship.eligibility}</p>
                      <p><span className="font-medium text-navy">Deadline:</span> {scholarship.deadline}</p>
                    </div>
                    <a href="/admissions/apply" className="inline-flex items-center gap-2 text-navy font-medium hover:text-lime transition-colors mt-auto group">
                      Apply Now
                      <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                    </a>
                  </motion.article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-off-white" aria-labelledby="funding-heading">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 id="funding-heading" className="font-display font-extrabold text-navy leading-tight text-3xl md:text-5xl lg:text-6xl mb-4">
                  Other Funding Options
                </h2>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { icon: '🏦', title: 'Student Loans', desc: 'Government-backed student loans with favorable terms. Available through partner banks with IIC endorsement.', link: '/admissions/loans' },
                  { icon: '💼', title: 'Employer Sponsorship', desc: 'Many employers sponsor employees for upskilling. We provide documentation and invoicing support.', link: '/admissions/employer-sponsorship' },
                  { icon: '💳', title: 'Payment Plans', desc: 'Flexible installment options to spread tuition fees across the academic year. Interest-free.', link: '/admissions/payment-plans' },
                  { icon: '🌍', title: 'External Scholarships', desc: 'We support applications for external funding from governments, NGOs, and international organizations.', link: '/admissions/external-funding' },
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
                    <p className="text-dark-grey text-sm mb-4 flex-1">{item.desc}</p>
                    <a href={item.link} className="inline-flex items-center gap-2 text-navy font-medium hover:text-lime transition-colors group">
                      Learn More
                      <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                    </a>
                  </motion.article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <CTASection
          title="Need Help with Funding?"
          description="Our financial aid team can help you explore all available options and guide you through the application process."
          primaryCta={{ text: 'Contact Financial Aid', href: '/contact' }}
          secondaryCta={{ text: 'Book a Consultation', href: '/admissions/consultation' }}
          variant="lime"
        />
      </main>
      <Footer />
    </>
  );
}