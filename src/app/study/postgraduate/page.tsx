import { Metadata } from 'next';
import { Header } from '@/components/ui/Header';
import { Footer } from '@/components/ui/Footer';
import { Hero } from '@/sections/Hero';
import { CourseSearch } from '@/sections/CourseSearch';
import { CTASection } from '@/sections/CTASection';
import { ExploreLinks } from '@/sections/ExploreLinks';
import { courses } from '@/data/university';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Postgraduate Taught Study',
  description: 'Advance your expertise with our specialised master\'s programmes in Computing, AI, Data Science, and Software Engineering.',
};

const pgCourses = courses.filter(c => c.level === 'Postgraduate Taught');

export default function PostgraduatePage() {
  return (
    <>
      <Header />
      <main id="main-content" className="flex-1 pt-16 md:pt-20 lg:pt-24">
        <Hero
          headline="Postgraduate\nTaught Study"
          subheadline="Advance your expertise with our specialised master's programmes. Designed for graduates and professionals ready to lead in technology."
          primaryCta={{ text: 'Explore Courses', href: '/study/courses?level=Postgraduate Taught' }}
          secondaryCta={{ text: 'How to Apply', href: '/admissions/apply' }}
          image="/images/pg-hero.jpg"
          imageAlt="Postgraduate students at IIC"
          variant="study"
        />

        <CourseSearch />

        <section className="py-16 md:py-24 bg-white" aria-labelledby="pg-courses-heading">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
              <h2 id="pg-courses-heading" className="font-display font-extrabold text-navy leading-tight text-3xl md:text-5xl lg:text-6xl mb-4">
                Our Master&apos;s Programmes
              </h2>
              <p className="text-lg md:text-xl text-dark-grey leading-relaxed">
                Two-year full-time programmes combining advanced theory with practical application and research.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8" role="list">
              {pgCourses.map((course, index) => (
                <article
                  key={course.id}
                  className="group bg-white border border-light-grey hover:border-lime hover:shadow-xl transition-all duration-300 overflow-hidden h-full flex flex-col"
                  role="listitem"
                >
                  <Link href={`/study/courses/${course.id}`} className="relative aspect-video overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true" />
                    <img
                      src={`/images/course-${course.id}.jpg`}
                      alt=""
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                      <h3 className="font-display font-bold text-xl mb-2">{course.name}</h3>
                      <p className="text-white/80 text-sm">{course.duration} • {course.mode} • {course.location}</p>
                    </div>
                  </Link>
                  <div className="p-5 flex-1 flex flex-col">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-2 py-0.5 bg-blue-500/10 text-blue-500 text-xs font-medium">{course.subject}</span>
                      <span className="px-2 py-0.5 bg-lime/10 text-lime text-xs font-medium">{course.qualification}</span>
                    </div>
                    <h3 className="font-display font-bold text-navy text-lg mb-2 group-hover:text-lime transition-colors">
                      <Link href={`/study/courses/${course.id}`}>{course.name}</Link>
                    </h3>
                    <p className="text-dark-grey text-sm mb-4 flex-1 line-clamp-2">{course.description}</p>
                    <Link
                      href={`/study/courses/${course.id}`}
                      className="inline-flex items-center gap-2 text-navy font-medium hover:text-lime transition-colors mt-auto group"
                    >
                      View Course
                      <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-off-white" aria-labelledby="pg-research-heading">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
              <h2 id="pg-research-heading" className="font-display font-extrabold text-navy leading-tight text-3xl md:text-5xl lg:text-6xl mb-4">
                Research-Led Teaching
              </h2>
              <p className="text-lg md:text-xl text-dark-grey leading-relaxed">
                Our master&apos;s programmes are informed by world-class research. You&apos;ll learn from academics working at the cutting edge of their fields.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: 'Research-Active Faculty',
                  description: 'Learn from professors publishing in top-tier conferences and journals.',
                  icon: '📚',
                },
                {
                  title: 'Industry Partnerships',
                  description: 'Projects and dissertations with 50+ industry partners.',
                  icon: '🤝',
                },
                {
                  title: 'State-of-the-Art Facilities',
                  description: 'Access to AI Lab, Cybersecurity Centre, and Data Science Institute.',
                  icon: '🔬',
                },
              ].map((item, index) => (
                <article
                  key={index}
                  className="group bg-white border border-light-grey hover:border-lime hover:shadow-xl transition-all duration-300 p-6 h-full"
                >
                  <div className="text-4xl mb-4" aria-hidden="true">{item.icon}</div>
                  <h3 className="font-display font-bold text-navy text-xl mb-2 group-hover:text-lime transition-colors">{item.title}</h3>
                  <p className="text-dark-grey">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <CTASection
          title="Take the Next Step"
          description="Ready to advance your career? Our admissions team is here to help."
          primaryCta={{ text: 'Start Application', href: '/admissions/apply' }}
          secondaryCta={{ text: 'Contact Us', href: '/contact' }}
          variant="navy"
        />

        <ExploreLinks
          title="More Postgraduate Information"
          links={[
            {
              label: 'Entry Requirements',
              href: '/admissions/requirements',
              description: 'Academic requirements and portfolio guidelines for master\'s programmes.',
            },
            {
              label: 'Funding & Scholarships',
              href: '/admissions/scholarships',
              description: 'Government loans, university scholarships, and employer sponsorship.',
            },
            {
              label: 'Research Degrees',
              href: '/study/research',
              description: 'Explore MPhil and PhD opportunities at IIC.',
            },
            {
              label: 'Professional Courses',
              href: '/study/professional',
              description: 'Short courses and certifications for working professionals.',
            },
          ]}
        />
      </main>
      <Footer />
    </>
  );
}