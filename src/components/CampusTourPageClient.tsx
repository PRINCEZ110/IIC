'use client';

import { motion } from 'framer-motion';
import { Hero } from '@/sections/Hero';
import { CTASection } from '@/sections/CTASection';
import Link from 'next/link';

export function CampusTourPageClient() {
  return (
    <>
      <Hero
        headline="Visit Our\nCampus"
        subheadline="The best way to experience IIC is to see it for yourself. Book a personal tour, join an open day, or explore virtually."
        primaryCta={{ text: 'Book a Tour', href: '#book-tour' }}
        secondaryCta={{ text: 'Virtual Tour', href: '/visit/virtual-tour' }}
        image="/images/visit-hero.jpg"
        imageAlt="IIC campus aerial view"
        variant="page"
      />

      <section className="py-16 md:py-24 bg-white" aria-labelledby="tour-options-heading">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 id="tour-options-heading" className="font-display font-extrabold text-navy leading-tight text-3xl md:text-5xl lg:text-6xl mb-4">
              Ways to Visit
            </h2>
            <p className="text-lg md:text-xl text-dark-grey leading-relaxed">
              Choose the visit experience that works best for you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '🏫',
                title: 'Personal Campus Tour',
                desc: 'One-on-one guided tour with a student ambassador. Tailored to your interests and programme of study.',
                features: ['90-minute guided walk', 'Meet faculty in your department', 'Visit labs and facilities', 'Q&A with current students'],
                cta: 'Book Personal Tour',
                href: '#book-tour',
              },
              {
                icon: '🎪',
                title: 'Open Days',
                desc: 'Large-scale events with talks, demos, and activities. Experience the full IIC community atmosphere.',
                features: ['Programme showcases', 'Sample lectures', 'Accommodation tours', 'Application workshops'],
                cta: 'View Open Days',
                href: '/events?type=open-day',
              },
              {
                icon: '💻',
                title: 'Virtual Tour',
                desc: 'Explore our campus from anywhere in the world. 360° views of all key facilities and interactive map.',
                features: ['360° campus views', 'Lab and facility walkthroughs', 'Student testimonial videos', 'Available 24/7'],
                cta: 'Start Virtual Tour',
                href: '/visit/virtual-tour',
              },
            ].map((item, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
                className="group bg-white border border-light-grey hover:border-lime hover:shadow-xl transition-all duration-300 p-6 h-full flex flex-col"
              >
                <div className="text-4xl mb-4" aria-hidden="true">{item.icon}</div>
                <h3 className="font-display font-bold text-navy text-xl mb-2 group-hover:text-lime-deep transition-colors">{item.title}</h3>
                <p className="text-dark-grey mb-4 flex-1">{item.desc}</p>
                <ul className="space-y-2 mb-6 flex-1" role="list">
                  {item.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-dark-grey">
                      <span className="w-1.5 h-1.5 bg-lime rounded-full flex-shrink-0" aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link href={item.href} className="inline-flex items-center gap-2 text-navy font-medium hover:text-lime-deep transition-colors mt-auto group/link">
                    {item.cta}
                    <svg className="w-4 h-4 transition-transform group-hover/link:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="book-tour" className="py-16 md:py-24 bg-off-white" aria-labelledby="book-heading">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h2 id="book-heading" className="font-display font-extrabold text-navy leading-tight text-3xl md:text-5xl lg:text-6xl mb-4">
                Book Your Personal Tour
              </h2>
              <p className="text-lg md:text-xl text-dark-grey leading-relaxed">
                Fill out the form below and our team will contact you within 24 hours to confirm your visit.
              </p>
            </motion.div>

            <form className="bg-white border border-light-grey p-6 md:p-8 space-y-6" noValidate>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-navy mb-1">First Name *</label>
                  <input type="text" id="firstName" name="firstName" required className="w-full bg-white border-2 border-light-grey focus:border-lime focus:ring-2 focus:ring-lime/20 text-navy py-3 px-4 transition-all duration-200" />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-navy mb-1">Last Name *</label>
                  <input type="text" id="lastName" name="lastName" required className="w-full bg-white border-2 border-light-grey focus:border-lime focus:ring-2 focus:ring-lime/20 text-navy py-3 px-4 transition-all duration-200" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-navy mb-1">Email Address *</label>
                  <input type="email" id="email" name="email" required className="w-full bg-white border-2 border-light-grey focus:border-lime focus:ring-2 focus:ring-lime/20 text-navy py-3 px-4 transition-all duration-200" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-navy mb-1">Phone Number</label>
                  <input type="tel" id="phone" name="phone" className="w-full bg-white border-2 border-light-grey focus:border-lime focus:ring-2 focus:ring-lime/20 text-navy py-3 px-4 transition-all duration-200" />
                </div>
              </div>

              <div>
                <label htmlFor="programme" className="block text-sm font-medium text-navy mb-1">Programme of Interest *</label>
                <select id="programme" name="programme" required className="w-full bg-white border-2 border-light-grey focus:border-lime focus:ring-2 focus:ring-lime/20 text-navy py-3 px-4 appearance-none transition-all duration-200">
                  <option value="">Select a programme</option>
                  <option value="undergraduate">Undergraduate Programmes</option>
                  <option value="postgraduate-taught">Postgraduate Taught</option>
                  <option value="postgraduate-research">Postgraduate Research</option>
                  <option value="professional">Professional Courses</option>
                </select>
              </div>

              <div>
                <label htmlFor="date" className="block text-sm font-medium text-navy mb-1">Preferred Date *</label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  required
                  className="w-full bg-white border-2 border-light-grey focus:border-lime focus:ring-2 focus:ring-lime/20 text-navy py-3 px-4 transition-all duration-200"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-navy mb-1">Additional Information</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full bg-white border-2 border-light-grey focus:border-lime focus:ring-2 focus:ring-lime/20 text-navy py-3 px-4 transition-all duration-200 resize-y"
                  placeholder="Any specific areas you'd like to see? Questions for faculty? Accessibility requirements?"
                />
              </div>

              <button type="submit" className="w-full bg-navy text-white py-4 px-8 font-medium hover:bg-navy-light transition-colors flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                Request Tour Booking
              </button>
            </form>
          </div>
        </div>
      </section>

      <CTASection
        title="Can't Visit in Person?"
        description="Explore our campus virtually with our immersive 360° tour. Available anytime, from anywhere."
        primaryCta={{ text: 'Start Virtual Tour', href: '/visit/virtual-tour' }}
        secondaryCta={{ text: 'Contact Us', href: '/contact' }}
        variant="blue"
      />
    </>
  );
}
