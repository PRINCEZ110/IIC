'use client';

import { motion } from 'framer-motion';
import { Header } from '@/components/ui/Header';
import { Footer } from '@/components/ui/Footer';
import { Hero } from '@/sections/Hero';
import { CTASection } from '@/sections/CTASection';
import { courses } from '@/data/university';

export default function RequirementsPageClient() {
  return (
    <>
      <Header />
      <main id="main-content" className="flex-1 pt-20 md:pt-24 lg:pt-32">
        <Hero
          headline="Entry\nRequirements"
          subheadline="Find the academic and English language requirements for your chosen programme. We consider each application holistically."
          image="/images/requirements-hero.jpg"
          imageAlt="Entry requirements"
          variant="page"
        />

        <section className="py-16 md:py-24 bg-white" aria-labelledby="requirements-heading">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 id="requirements-heading" className="font-display font-extrabold text-navy leading-tight text-3xl md:text-5xl lg:text-6xl mb-6">
                  Academic Requirements by Programme
                </h2>
                <p className="text-lg md:text-xl text-dark-grey leading-relaxed mb-8">
                  We welcome applications from students with diverse educational backgrounds. The table below outlines the standard entry requirements for our programmes. We also consider equivalent qualifications and relevant work experience.
                </p>
              </motion.div>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse" role="table">
                  <thead>
                    <tr className="bg-navy text-white">
                      <th className="text-left p-4 font-semibold">Programme</th>
                      <th className="text-left p-4 font-semibold">Academic Requirements</th>
                      <th className="text-left p-4 font-semibold">English Language</th>
                      <th className="text-left p-4 font-semibold">Additional</th>
                    </tr>
                  </thead>
                  <tbody>
                    {courses.map((course) => (
                      <tr key={course.id} className="border-b border-light-grey hover:bg-off-white transition-colors">
                        <td className="p-4 font-medium text-navy">{course.name}</td>
                        <td className="p-4 text-dark-grey">{course.entryRequirements}</td>
                        <td className="p-4 text-dark-grey">
                          IELTS 6.0 overall (no band below 5.5) or equivalent
                        </td>
                        <td className="p-4 text-dark-grey">
                          {course.level === 'Undergraduate' ? 'Mathematics compulsory at +2 level' : "Relevant bachelor's degree (2:2 or above)"}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-off-white" aria-labelledby="english-heading">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 id="english-heading" className="font-display font-extrabold text-navy leading-tight text-3xl md:text-5xl lg:text-6xl mb-4">
                  English Language Requirements
                </h2>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  { title: 'IELTS Academic', score: '6.0 overall (no band below 5.5)', accepted: true },
                  { title: 'TOEFL iBT', score: '72 overall (min. 17 in each section)', accepted: true },
                  { title: 'PTE Academic', score: '50 overall (no section below 42)', accepted: true },
                  { title: 'Duolingo English Test', score: '95 overall', accepted: true },
                  { title: 'Cambridge English', score: 'C1 Advanced / C2 Proficiency (169+)', accepted: true },
                  { title: 'English Medium Education', score: 'Completed 2+ years in English-medium institution', accepted: true },
                ].map((item, index) => (
                  <motion.article
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index }}
                    className="bg-white border border-light-grey hover:border-lime hover:shadow-xl transition-all duration-300 p-6"
                  >
                    <h3 className="font-display font-bold text-navy text-xl mb-2">{item.title}</h3>
                    <p className="text-dark-grey mb-4">{item.score}</p>
                    <span className="inline-flex items-center gap-2 text-lime-deep font-medium">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/></svg>
                      Accepted
                    </span>
                  </motion.article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-white" aria-labelledby="documents-heading">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 id="documents-heading" className="font-display font-extrabold text-navy leading-tight text-3xl md:text-5xl lg:text-6xl mb-4">
                Required Documents
              </h2>
              <p className="text-lg md:text-xl text-dark-grey leading-relaxed">
                Prepare these documents before starting your application
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {[
                { icon: '📄', title: 'Academic Transcripts', desc: 'Certified copies of all secondary and tertiary academic records', required: true },
                { icon: '🎓', title: 'Certificates & Diplomas', desc: 'Certified copies of completion certificates for all qualifications listed', required: true },
                { icon: '🆔', title: 'Passport / Citizenship', desc: 'Valid passport bio page or citizenship certificate', required: true },
                { icon: '📝', title: 'English Test Results', desc: 'Official IELTS, TOEFL, PTE or equivalent certificate (if applicable)', required: false },
                { icon: '📋', title: 'Personal Statement', desc: '500-word statement explaining your interest in the programme', required: true },
                { icon: '👥', title: 'References', desc: 'Two academic or professional references with contact details', required: true },
              ].map((item, index) => (
                <motion.article
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                  className="group bg-white border border-light-grey hover:border-lime hover:shadow-xl transition-all duration-300 p-6"
                >
                  <div className="text-4xl mb-4" aria-hidden="true">{item.icon}</div>
                  <h3 className="font-display font-bold text-navy text-xl mb-2 group-hover:text-lime-deep transition-colors">{item.title}</h3>
                  <p className="text-dark-grey text-sm mb-4">{item.desc}</p>
                  <span className="inline-flex items-center gap-1 text-sm font-medium">
                    {item.required ? (
                      <>
                        <span className="w-2 h-2 bg-lime rounded-full" aria-hidden="true" />
                        Required
                      </>
                    ) : (
                      <>
                        <span className="w-2 h-2 bg-blue-500 rounded-full" aria-hidden="true" />
                        Recommended
                      </>
                    )}
                  </span>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <CTASection
          title="Ready to Apply?"
          description="Start your application today and take the first step towards your future in technology."
          primaryCta={{ text: 'Apply Now', href: '/admissions/apply' }}
          secondaryCta={{ text: 'Contact Admissions', href: '/contact' }}
          variant="navy"
        />
      </main>
      <Footer />
    </>
  );
}
