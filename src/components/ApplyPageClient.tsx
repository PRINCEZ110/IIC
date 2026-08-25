'use client';

import { motion } from 'framer-motion';
import { Header } from '@/components/ui/Header';
import { Footer } from '@/components/ui/Footer';
import { Hero } from '@/sections/Hero';
import { CTASection } from '@/sections/CTASection';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export default function ApplyPageClient() {
  return (
    <>
      <Header />
      <main id="main-content" className="flex-1 pt-16 md:pt-20 lg:pt-24">
        <Hero
          headline="Apply to IIC"
          subheadline="Your journey to a world-class technology education starts here. Our streamlined application process takes just a few minutes."
          primaryCta={{ text: 'Start Application', href: '#application-form' }}
          secondaryCta={{ text: 'Entry Requirements', href: '/admissions/requirements' }}
          image="/images/admissions-hero.jpg"
          imageAlt="Students applying to IIC"
          variant="page"
        />

        <section id="application-form" className="py-16 md:py-24 bg-white" aria-labelledby="apply-heading">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 id="apply-heading" className="font-display font-extrabold text-navy leading-tight text-3xl md:text-5xl lg:text-6xl mb-4">
                  Online Application
                </h2>
                <p className="text-lg md:text-xl text-dark-grey leading-relaxed mb-8">
                  Complete your application in three simple steps. You can save your progress and return at any time.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                {[
                  { step: '01', title: 'Create Account', desc: 'Register with your email and create a secure password' },
                  { step: '02', title: 'Complete Form', desc: 'Fill in your personal details, academic history, and programme choices' },
                  { step: '03', title: 'Submit & Track', desc: 'Upload documents, pay the application fee, and track your application status' },
                ].map((item, index) => (
                  <motion.article
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index }}
                    className="group relative p-6 bg-off-white border border-light-grey hover:border-lime hover:shadow-xl transition-all duration-300"
                  >
                    <span className="font-display font-extrabold text-lime text-3xl mb-4 block">{item.step}</span>
                    <h3 className="font-display font-bold text-navy text-xl mb-2 group-hover:text-lime transition-colors">{item.title}</h3>
                    <p className="text-dark-grey">{item.desc}</p>
                  </motion.article>
                ))}
              </div>

              <div className="bg-navy text-white p-8 md:p-12 rounded-none mb-12">
                <h3 className="font-display font-bold text-white text-2xl md:text-3xl mb-6">Ready to Begin?</h3>
                <p className="text-white/80 mb-8 max-w-xl">Join 3,000+ graduates who have launched successful careers in technology. Applications for September 2025 entry are now open.</p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="lime" size="lg" arrow fullWidth asChild>
                    <a href="#application-form">Start Your Application</a>
                  </Button>
                  <Button variant="outline" size="lg" fullWidth asChild>
                    <a href="/admissions/requirements">View Entry Requirements</a>
                  </Button>
                </div>
              </div>

              <section className="mt-16" aria-labelledby="faq-heading">
                <h2 id="faq-heading" className="font-display font-extrabold text-navy leading-tight text-3xl md:text-4xl mb-6 text-center">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-4 max-w-3xl mx-auto">
                  {[
                    { q: 'When is the application deadline?', a: 'Applications for September entry close on July 31st. Late applications may be considered for remaining places.' },
                    { q: 'Is there an application fee?', a: 'Yes, a non-refundable application fee of Rs. 2,000 applies for all programmes.' },
                    { q: 'Can I apply for multiple programmes?', a: 'Yes, you can select up to three programme choices in order of preference on a single application.' },
                    { q: 'What documents do I need?', a: 'Academic transcripts, certificates, passport copy, and English language test results (if applicable).' },
                    { q: 'How long does the process take?', a: 'Decisions are typically communicated within 4-6 weeks of receiving a complete application.' },
                    { q: 'Can I defer my offer?', a: 'Yes, successful applicants can defer their place for up to one academic year.' },
                  ].map((faq, index) => (
                    <motion.details
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.05 * index }}
                      className="group bg-white border border-light-grey hover:border-lime transition-colors"
                    >
                      <summary className="flex items-center justify-between p-5 font-medium text-navy cursor-pointer list-none">
                        {faq.q}
                        <svg className="w-5 h-5 text-navy/50 group-hover:text-lime transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </summary>
                      <div className="px-5 pb-5 text-dark-grey border-t border-light-grey">
                        {faq.a}
                      </div>
                    </motion.details>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </section>

        <CTASection
          title="Need Help with Your Application?"
          description="Our admissions team is here to guide you through every step of the process."
          primaryCta={{ text: 'Contact Admissions', href: '/contact' }}
          secondaryCta={{ text: 'Live Chat', href: '/admissions/live-chat' }}
          variant="lime"
        />
      </main>
      <Footer />
    </>
  );
}