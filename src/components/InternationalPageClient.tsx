'use client';

import { motion } from 'framer-motion';
import { Header } from '@/components/ui/Header';
import { Footer } from '@/components/ui/Footer';
import { Hero } from '@/sections/Hero';
import { CTASection } from '@/sections/CTASection';
import { lifeCategories } from '@/data/university';

export default function InternationalPageClient() {
  return (
    <>
      <Header />
      <main id="main-content" className="flex-1 pt-16 md:pt-20 lg:pt-24">
        <Hero
          headline="International\nStudents"
          subheadline="Join students from 25+ countries at Nepal's premier IT institute. Comprehensive support from application to graduation."
          primaryCta={{ text: 'Apply as International Student', href: '/admissions/apply' }}
          secondaryCta={{ text: 'Download Guide', href: '/admissions/international-guide' }}
          image="/images/international-hero.jpg"
          imageAlt="International students at IIC"
          variant="page"
        />

        <section className="py-16 md:py-24 bg-white" aria-labelledby="why-iic-heading">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 id="why-iic-heading" className="font-display font-extrabold text-navy leading-tight text-3xl md:text-5xl lg:text-6xl mb-4">
                Why International Students Choose IIC
              </h2>
              <p className="text-lg md:text-xl text-dark-grey leading-relaxed">
                A global education in the heart of the Himalayas
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: '🌍', title: 'Global Recognition', desc: 'UGC Nepal ranked #1; degrees recognized worldwide' },
                { icon: '💰', title: 'Affordable Excellence', desc: 'World-class education at a fraction of Western costs' },
                { icon: '🤝', title: 'Industry Connections', desc: '50+ global tech partners for internships and jobs' },
                { icon: '🏠', title: 'Guaranteed Housing', desc: 'On-campus accommodation for all first-year students' },
                { icon: '🎓', title: 'Lifelong Career Support', desc: 'Career services for life, wherever you go' },
                { icon: '🌐', title: 'Global Alumni Network', desc: '3,000+ graduates in 50+ countries' },
                { icon: '🛡️', title: 'Safe & Welcoming', desc: 'Dedicated international student support team' },
                { icon: '🏔️', title: 'Adventure Awaits', desc: 'Himalayas, culture, and adventure on your doorstep' },
              ].map((item, index) => {
                return (
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
                );
            })}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-off-white" aria-labelledby="visa-heading">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 id="visa-heading" className="font-display font-extrabold text-navy leading-tight text-3xl md:text-5xl lg:text-6xl mb-4">
                  Visa & Immigration Support
                </h2>
                <p className="text-lg md:text-xl text-dark-grey leading-relaxed mb-8">
                  Our dedicated International Office guides you through every step of the visa process.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
{[
                { title: 'Student Visa Application', desc: 'Step-by-step guidance for Nepal student visa application. We provide all required documentation including acceptance letters and financial statements.', icon: '📋' },
                { title: 'Pre-Arrival Support', desc: 'Airport pickup service, temporary accommodation assistance, and orientation programme scheduling.', icon: '✈️' },
                { title: 'Documentation Assistance', desc: 'Help with police registration, visa extensions, and work permit applications for part-time work.', icon: '📄' },
                { title: 'Compliance Monitoring', desc: 'Regular check-ins to ensure visa compliance and academic progress reporting to immigration authorities.', icon: '✅' },
              ].map((item, index) => {
                return (
                  <motion.article
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index }}
                    className="group bg-white border border-light-grey hover:border-lime hover:shadow-xl transition-all duration-300 p-6 h-full"
                  >
                    <div className="text-4xl mb-4" aria-hidden="true">{item.icon}</div>
                    <h3 className="font-display font-bold text-navy text-xl mb-2 group-hover:text-lime transition-colors">{item.title}</h3>
                    <p className="text-dark-grey">{item.desc}</p>
                  </motion.article>
                );
              })}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-white" aria-labelledby="scholarships-heading">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 id="scholarships-heading" className="font-display font-extrabold text-navy leading-tight text-3xl md:text-5xl lg:text-6xl mb-4">
                International Scholarships
              </h2>
              <p className="text-lg md:text-xl text-dark-grey leading-relaxed mb-8">
                Dedicated funding opportunities for international students
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { name: 'International Merit Scholarship', value: 'Up to 40% tuition', criteria: 'Academic excellence (85%+); open to all nationalities', deadline: 'July 31' },
                { name: 'SAARC Regional Scholarship', value: 'Up to 50% tuition', criteria: 'Students from SAARC member nations with strong academic record', deadline: 'June 30' },
                { name: 'Developing Nations Bursary', value: 'Up to 75% tuition', criteria: 'Students from UN-listed developing nations with financial need', deadline: 'Rolling' },
                { name: 'Research Excellence Award', value: 'Full tuition + stipend', criteria: 'Postgraduate research applicants with exceptional proposals', deadline: 'Rolling' },
              ].map((item, index) => {
                return (
                  <motion.article
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index }}
                    className="group bg-white border border-light-grey hover:border-lime hover:shadow-xl transition-all duration-300 p-6 h-full"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 bg-lime text-navy text-xs font-bold uppercase tracking-wider">International</span>
                      <span className="font-display font-bold text-lime text-2xl">{item.value}</span>
                    </div>
                    <h3 className="font-display font-bold text-navy text-xl mb-2 group-hover:text-lime transition-colors">{item.name}</h3>
                    <p className="text-dark-grey text-sm mb-4 flex-1">{item.criteria}</p>
                    <div className="flex items-center justify-between text-sm text-medium-grey border-t border-light-grey pt-4">
                      <span>Deadline: <span className="font-medium text-navy">{item.deadline}</span></span>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-navy text-white" aria-labelledby="support-heading">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 id="support-heading" className="font-display font-extrabold leading-tight text-3xl md:text-5xl lg:text-6xl mb-4">
                Dedicated Support Services
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                { icon: '👥', title: 'International Student Advisors', desc: 'Dedicated advisors for academic, personal, and immigration matters' },
                { icon: '🗣️', title: 'Language Support', desc: 'English language workshops, conversation clubs, and academic writing support' },
                { icon: '🎉', title: 'Cultural Integration', desc: 'Orientation week, cultural events, buddy programme, and festival celebrations' },
                { icon: '🏥', title: 'Health & Wellbeing', desc: 'Medical insurance guidance, counseling services, and 24/7 emergency support' },
                { icon: '💼', title: 'Career Services', desc: 'Global job board, visa-compliant internships, and alumni mentoring' },
                { icon: '🤝', title: 'Community Networks', desc: 'National student associations, faith groups, and interest-based communities' },
              ].map((item, index) => {
                return (
                  <motion.article
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index }}
                    className="group bg-white/10 border border-white/20 hover:border-lime hover:bg-white/20 transition-all duration-300 p-6 h-full text-center"
                  >
                    <div className="text-4xl mb-4" aria-hidden="true">{item.icon}</div>
                    <h3 className="font-display font-bold text-white text-xl mb-2 group-hover:text-lime transition-colors">{item.title}</h3>
                    <p className="text-white/70">{item.desc}</p>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </section>

        <CTASection
          title="Ready to Join Our Global Community?"
          description="Start your application today. Our international admissions team is ready to help you every step of the way."
          primaryCta={{ text: 'Start Application', href: '/admissions/apply' }}
          secondaryCta={{ text: 'Contact International Office', href: '/contact' }}
          variant="blue"
        />
      </main>
      <Footer />
    </>
  );
}