import { Metadata } from 'next';
import { Header } from '@/components/ui/Header';
import { Footer } from '@/components/ui/Footer';
import { Hero } from '@/sections/Hero';
import { CourseSearch } from '@/sections/CourseSearch';
import { CTASection } from '@/sections/CTASection';
import { ExploreLinks } from '@/sections/ExploreLinks';
import { courses } from '@/data/university';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Undergraduate Study',
  description: 'Explore our undergraduate computing programmes including BSc Computing, Software Engineering, Data Science, and Cyber Security.',
};

const ugCourses = courses.filter(c => c.level === 'Undergraduate');

export default function UndergraduatePage() {
  return (
    <>
      <Header />
      <main id="main-content" className="flex-1 pt-20 md:pt-24 lg:pt-32">
        <Hero
          headline="Undergraduate\nStudy at IIC"
          subheadline="Begin your journey in computing with our industry-aligned bachelor's programmes. Choose from Computing, Software Engineering, Data Science, or Cyber Security."
          primaryCta={{ text: 'Explore Courses', href: '/study/courses?level=Undergraduate' }}
          secondaryCta={{ text: 'Entry Requirements', href: '/admissions/requirements' }}
          image="/images/ug-hero.jpg"
          imageAlt="Undergraduate students at IIC"
          variant="study"
        />

        <CourseSearch />

        <section className="py-16 md:py-24 bg-white" aria-labelledby="ug-courses-heading">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
              <h2 id="ug-courses-heading" className="font-display font-extrabold text-navy leading-tight text-3xl md:text-5xl lg:text-6xl mb-4">
                Our Undergraduate Programmes
              </h2>
              <p className="text-lg md:text-xl text-dark-grey leading-relaxed">
                Four-year honours degrees designed with industry input to give you the skills employers want.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8" role="list">
              {ugCourses.map((course) => (
                <article
                  key={course.id}
                  className="group bg-white border border-light-grey hover:border-lime hover:shadow-xl transition-all duration-300 overflow-hidden h-full flex flex-col"
                  role="listitem"
                >
                  <Link href={`/study/courses/${course.id}`} className="relative aspect-video overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true" />
                    <Image
                      src={`/images/course-${course.id}.jpg`}
                      alt={course.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                      <h3 className="font-display font-bold text-xl mb-2">{course.name}</h3>
                      <p className="text-white/80 text-sm">{course.duration} • {course.mode} • {course.location}</p>
                    </div>
                  </Link>
                  <div className="p-5 flex-1 flex flex-col">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-2 py-0.5 bg-blue-500/10 text-blue-500 text-xs font-medium">{course.subject}</span>
                      <span className="px-2 py-0.5 bg-lime/10 text-lime-deep text-xs font-medium">{course.qualification}</span>
                    </div>
                    <h3 className="font-display font-bold text-navy text-lg mb-2 group-hover:text-lime-deep transition-colors">
                      <Link href={`/study/courses/${course.id}`}>{course.name}</Link>
                    </h3>
                    <p className="text-dark-grey text-sm mb-4 flex-1 line-clamp-2">{course.description}</p>
                    <Link
                      href={`/study/courses/${course.id}`}
                      className="inline-flex items-center gap-2 text-navy font-medium hover:text-lime-deep transition-colors mt-auto group"
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

        <CTASection
          title="Ready to Apply?"
          description="Applications for September 2024 entry are now open. Start your journey today."
          primaryCta={{ text: 'Apply Now', href: '/admissions/apply' }}
          secondaryCta={{ text: 'Book a Campus Tour', href: '/visit/campus-tour' }}
          variant="lime"
        />

        <ExploreLinks
          title="More Undergraduate Information"
          links={[
            {
              label: 'Entry Requirements',
              href: '/admissions/requirements',
              description: 'Academic and English language requirements for undergraduate study.',
            },
            {
              label: 'Scholarships & Funding',
              href: '/admissions/scholarships',
              description: 'Merit-based and need-based financial support available.',
            },
            {
              label: 'International Students',
              href: '/study/international',
              description: 'Specific information for students applying from outside Nepal.',
            },
            {
              label: 'Accommodation Guarantee',
              href: '/life/accommodation',
              description: 'Guaranteed on-campus housing for all first-year undergraduates.',
            },
            {
              label: 'Open Days',
              href: '/events?type=open-day',
              description: 'Visit our campus and meet current students and staff.',
            },
            {
              label: 'Student Life',
              href: '/life',
              description: 'Discover what it\'s like to study at IIC.',
            },
          ]}
        />
      </main>
      <Footer />
    </>
  );
}
