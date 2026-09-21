'use client';

import { motion } from 'framer-motion';
import { Header } from '@/components/ui/Header';
import { Footer } from '@/components/ui/Footer';
import { Hero } from '@/sections/Hero';
import { CTASection } from '@/sections/CTASection';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export default function ProfessionalPageClient() {
  const professionalCourses = [
    {
      category: 'Cloud & DevOps',
      icon: '☁️',
      courses: [
        { name: 'AWS Certified Solutions Architect', duration: '8 weeks', level: 'Associate', price: 'Rs. 45,000', cert: 'AWS Certified' },
        { name: 'AWS Certified Developer', duration: '6 weeks', level: 'Associate', price: 'Rs. 40,000', cert: 'AWS Certified' },
        { name: 'Docker & Kubernetes Fundamentals', duration: '6 weeks', level: 'Intermediate', price: 'Rs. 35,000', cert: 'IIC Certificate' },
        { name: 'CI/CD with GitHub Actions & Jenkins', duration: '4 weeks', level: 'Intermediate', price: 'Rs. 25,000', cert: 'IIC Certificate' },
      ],
    },
    {
      category: 'Data & AI',
      icon: '📊',
      courses: [
        { name: 'Python for Data Science', duration: '8 weeks', level: 'Beginner', price: 'Rs. 35,000', cert: 'IIC Certificate' },
        { name: 'Machine Learning with Python', duration: '10 weeks', level: 'Intermediate', price: 'Rs. 50,000', cert: 'IIC Certificate' },
        { name: 'Data Visualization with Tableau & Power BI', duration: '6 weeks', level: 'Beginner', price: 'Rs. 30,000', cert: 'IIC Certificate' },
        { name: 'SQL for Data Analysis', duration: '4 weeks', level: 'Beginner', price: 'Rs. 20,000', cert: 'IIC Certificate' },
      ],
    },
    {
      category: 'Software Development',
      icon: '💻',
      courses: [
        { name: 'Full Stack Web Development (MERN)', duration: '16 weeks', level: 'Beginner to Advanced', price: 'Rs. 120,000', cert: 'IIC Certificate' },
        { name: 'React & Next.js Advanced', duration: '8 weeks', level: 'Advanced', price: 'Rs. 55,000', cert: 'IIC Certificate' },
        { name: 'Mobile App Development with Flutter', duration: '10 weeks', level: 'Intermediate', price: 'Rs. 60,000', cert: 'IIC Certificate' },
        { name: 'Test Automation with Cypress & Playwright', duration: '6 weeks', level: 'Intermediate', price: 'Rs. 35,000', cert: 'IIC Certificate' },
      ],
    },
    {
      category: 'Cybersecurity',
      icon: '🔒',
      courses: [
        { name: 'Ethical Hacking & Penetration Testing', duration: '12 weeks', level: 'Intermediate', price: 'Rs. 80,000', cert: 'CEH Prep' },
        { name: 'Network Security Fundamentals', duration: '8 weeks', level: 'Beginner', price: 'Rs. 45,000', cert: 'IIC Certificate' },
        { name: 'Security Operations (SOC) Analyst', duration: '10 weeks', level: 'Intermediate', price: 'Rs. 60,000', cert: 'IIC Certificate' },
        { name: 'Cloud Security with AWS & Azure', duration: '8 weeks', level: 'Advanced', price: 'Rs. 55,000', cert: 'IIC Certificate' },
      ],
    },
  ];

  return (
    <>
      <Header />
      <main id="main-content" className="flex-1 pt-20 md:pt-24 lg:pt-32">
        <Hero
          headline="Professional &\nShort Courses"
          subheadline="Upskill with industry-certified courses and bootcamps at IIC. AWS, Python, Full Stack Development, Data Analytics, and more."
          primaryCta={{ text: 'Browse All Courses', href: '#courses' }}
          secondaryCta={{ text: 'Corporate Training', href: '/collaborate' }}
          image="/images/professional-hero.jpg"
          imageAlt="Professional training at IIC"
          variant="page"
        />

        <section id="courses" className="py-16 md:py-24 bg-white" aria-labelledby="pro-courses-heading">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 id="pro-courses-heading" className="font-display font-extrabold text-navy leading-tight text-3xl md:text-5xl lg:text-6xl mb-4">
                Course Categories
              </h2>
              <p className="text-lg md:text-xl text-dark-grey leading-relaxed">
                Choose from 20+ industry-aligned courses across four specializations
              </p>
            </motion.div>

            {professionalCourses.map((category, catIndex) => (
              <motion.section
                key={category.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * catIndex }}
                className="mb-16"
              >
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-3xl">{category.icon}</span>
                  <h3 className="font-display font-extrabold text-navy text-2xl md:text-3xl">{category.category}</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {category.courses.map((course, index) => (
                    <motion.article
                      key={course.name}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * catIndex + 0.05 * index }}
                      className="group bg-white border border-light-grey hover:border-lime hover:shadow-xl transition-all duration-300 p-6 h-full flex flex-col"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <span className="px-2 py-1 bg-lime text-navy text-xs font-bold uppercase tracking-wider">{course.level}</span>
                        <span className="font-display font-bold text-lime-deep text-xl">{course.price}</span>
                      </div>
                      <h3 className="font-display font-bold text-navy text-xl mb-2 group-hover:text-lime-deep transition-colors">{course.name}</h3>
                      <p className="text-dark-grey text-sm mb-4 flex-1">{course.duration} • {course.cert} certification</p>
                      <Link href="/admissions/apply" className="inline-flex items-center gap-2 text-navy font-medium hover:text-lime-deep transition-colors mt-auto group">
                      Enroll Now
                      <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </Link>
                    </motion.article>
                  ))}
                </div>
              </motion.section>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12 text-center"
            >
              <Button variant="outline" size="lg" arrow asChild>
                <Link href="/study/professional">View All Courses</Link>
              </Button>
            </motion.div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-off-white" aria-labelledby="benefits-heading">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 id="benefits-heading" className="font-display font-extrabold text-navy leading-tight text-3xl md:text-5xl lg:text-6xl mb-4">
                Why Choose IIC Professional Courses?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: '🏆', title: 'Industry-Recognized', desc: 'Certifications aligned with AWS, Microsoft, and industry standards' },
                { icon: '👨‍🏫', title: 'Expert Instructors', desc: 'Taught by IIC faculty and industry practitioners with real-world experience' },
                { icon: '🛠️', title: 'Hands-On Projects', desc: 'Real-world projects and capstone assignments for your portfolio' },
                { icon: '📅', title: 'Flexible Schedules', desc: 'Evening, weekend, and intensive bootcamp formats available' },
                { icon: '🤝', title: 'Industry Connections', desc: 'Guest lectures, hiring partners, and networking events' },
                { icon: '📜', title: 'Lifetime Access', desc: 'Course materials and updates available indefinitely' },
                { icon: '💼', title: 'Career Support', desc: 'Resume reviews, interview prep, and job placement assistance' },
                { icon: '🏢', title: 'Corporate Training', desc: 'Customized training programs for organizations and teams' },
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
                    <h3 className="font-display font-bold text-navy text-xl mb-2 group-hover:text-lime-deep transition-colors">{item.title}</h3>
                    <p className="text-dark-grey">{item.desc}</p>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-navy text-white" aria-labelledby="corporate-heading">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 id="corporate-heading" className="font-display font-extrabold leading-tight text-3xl md:text-5xl lg:text-6xl mb-4">
                Corporate Training Solutions
              </h2>
              <p className="text-lg md:text-xl text-white/80 leading-relaxed">
                Customized upskilling programs for your team. Delivered on-site, virtual, or at our campus.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                { icon: '🎯', title: 'Custom Curriculum', desc: 'Tailored content aligned with your business objectives and tech stack' },
                { icon: '📊', title: 'Progress Tracking', desc: 'Detailed analytics and skill assessments for each participant' },
                { icon: '🏢', title: 'Flexible Delivery', desc: 'On-site, virtual instructor-led, or hybrid at our campus' },
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

            <div className="mt-12 text-center">
              <Link href="/collaborate" className="inline-flex items-center gap-2 border-2 border-white/30 hover:border-lime text-white font-semibold px-6 py-3 transition-colors group">
                      Discuss Your Training Needs
                      <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </Link>
            </div>
          </div>
        </section>

        <CTASection
          title="Ready to Upskill?"
          description="Join thousands of professionals who have advanced their careers with IIC courses."
          primaryCta={{ text: 'Browse All Courses', href: '#courses' }}
          secondaryCta={{ text: 'Contact Us', href: '/contact' }}
          variant="blue"
        />
      </main>
      <Footer />
    </>
  );
}
