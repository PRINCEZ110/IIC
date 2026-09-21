import { Metadata } from 'next';
import { Header } from '@/components/ui/Header';
import { Footer } from '@/components/ui/Footer';
import { Hero } from '@/sections/Hero';
import { CourseSearch } from '@/sections/CourseSearch';
import { StudyOptions } from '@/sections/StudyOptions';
import { CTASection } from '@/sections/CTASection';
import { ExploreLinks } from '@/sections/ExploreLinks';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Study at IIC',
  description: 'Explore undergraduate, postgraduate, and research programmes at Nepal\'s leading IT institute. Find your course and apply today.',
};

export default function StudyPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="flex-1 pt-20 md:pt-24 lg:pt-32">
        <Hero
          headline="Looking for\nWhat's Next?"
          subheadline="Study at International Institute of Computer Science and join a community of innovators, researchers, and future technology leaders."
          primaryCta={{ text: 'Find Your Course', href: '/study/courses' }}
          secondaryCta={{ text: 'How to Apply', href: '/admissions/apply' }}
          image="/images/study-hero.jpg"
          imageAlt="Students studying at IIC"
          variant="study"
        />

        <CourseSearch />

        <StudyOptions
          title="Choose Your Study Path"
          subtitle="From undergraduate degrees to doctoral research, find the programme that matches your ambition."
        />

        <section className="py-16 md:py-24 lg:py-32 bg-off-white" aria-labelledby="learning-heading">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
              <h2 id="learning-heading" className="font-display font-extrabold text-navy leading-tight text-3xl md:text-5xl lg:text-6xl mb-4">
                Learn It. Live It. Do It.
              </h2>
              <p className="text-lg md:text-xl text-dark-grey leading-relaxed">
                Our distinctive approach combines academic rigour with real-world experience, preparing you for a career that makes an impact.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="relative aspect-[4/3] bg-light-grey overflow-hidden">
                <Image
                src="/images/learning-experience.jpg"
                alt="Students collaborating in a modern classroom"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              </div>
              <div className="space-y-6">
                <h3 className="font-display font-bold text-navy text-2xl md:text-3xl">
                  Education That Goes Beyond the Classroom
                </h3>
                <div className="space-y-4 text-dark-grey leading-relaxed">
                  <p>At IIC, we believe the best learning happens when theory meets practice. Our programmes are designed with industry input and delivered by academics who are active researchers and practitioners.</p>
                  <p>Every student completes at least one major industry project, internship, or research placement before graduating. This hands-on experience is why 94% of our graduates are employed or in further study within six months.</p>
                </div>
                <ul className="space-y-3" role="list">
                  {[
                    'Industry-aligned curriculum co-designed with 50+ partner companies',
                    'Mandatory internship or industry project for every programme',
                    'Access to 8 specialist research labs and innovation centres',
                    'Regular guest lectures from industry leaders and alumni',
                    'Hackathons, competitions, and real-world challenge projects',
                    'Entrepreneurship support through our Innovation Centre',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-lime rounded-full mt-2 flex-shrink-0" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/study" className="inline-flex items-center gap-2 text-navy font-semibold hover:text-lime-deep transition-colors mt-4">
                  Discover Our Learning Approach
                  <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <CTASection
          title="Visit Our Campus"
          description="Book a personal tour or join one of our open days to explore our facilities and meet our community."
          primaryCta={{ text: 'Book a Campus Tour', href: '/visit/campus-tour' }}
          secondaryCta={{ text: 'Upcoming Open Days', href: '/events?type=open-day' }}
          variant="lime"
        />

        <ExploreLinks
          title="More Study Information"
          links={[
            {
              label: 'International Students',
              href: '/study/international',
              description: 'Entry requirements, visas, and support for students from 25+ countries.',
            },
            {
              label: 'Scholarships & Funding',
              href: '/admissions/scholarships',
              description: 'Merit-based and need-based financial support for eligible students.',
            },
            {
              label: 'Virtual Campus Tour',
              href: '/visit/virtual-tour',
              description: 'Explore our campus facilities from anywhere in the world.',
            },
            {
              label: 'Accommodation Options',
              href: '/life/accommodation',
              description: 'Guaranteed housing for first-year students and approved private providers.',
            },
            {
              label: 'Student Support Services',
              href: '/life',
              description: 'Academic, personal, and career support throughout your studies.',
            },
            {
              label: 'Careers & Employability',
              href: '/life',
              description: '94% graduate employment rate with lifelong career support.',
            },
          ]}
        />
      </main>
      <Footer />
    </>
  );
}
