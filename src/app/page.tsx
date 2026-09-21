import { Header } from '@/components/ui/Header';
import { Footer } from '@/components/ui/Footer';
import { Hero } from '@/sections/Hero';
import { CourseSearch } from '@/sections/CourseSearch';
import { QuickActions } from '@/sections/QuickActions';
import { WhyChooseUs } from '@/sections/WhyChooseUs';
import { FeaturedCourses } from '@/sections/FeaturedCourses';
import { StatsSection } from '@/sections/StatsSection';
import { StudentLifeShowcase } from '@/sections/StudentLifeShowcase';
import { ResearchChallenges } from '@/sections/ResearchChallenges';
import { ResearchImpact } from '@/sections/ResearchImpact';
import { InternationalShowcase } from '@/sections/InternationalShowcase';
import { AlumniStories } from '@/sections/AlumniStories';
import { NewsEvents } from '@/sections/NewsEvents';
import { CTASection } from '@/sections/CTASection';
import { ExploreLinks } from '@/sections/ExploreLinks';
import { news, events } from '@/data/university';

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content" className="flex-1 pt-20 md:pt-24 lg:pt-32">
        {/* 1. Full-width Hero Section */}
        <Hero
          headline="Shape the Future of\nTechnology & Innovation"
          subheadline="International Institute of Computer Science (IIC) is Nepal's premier institution for IT, software engineering, and artificial intelligence education. Join 3,000+ graduates leading tech globally."
          primaryCta={{ text: 'Explore Degree Courses', href: '#find-course' }}
          secondaryCta={{ text: 'Apply for 2025/26', href: '/admissions/apply' }}
          image="/images/hero-home.jpg"
          imageAlt="IIC modern computing campus and students"
          variant="home"
        />

        {/* 2. Quick Actions Bar */}
        <QuickActions />

        {/* 3. Central Course Finder & Study Gateways */}
        <CourseSearch />

        {/* 4. Why Choose IIC Section */}
        <WhyChooseUs />

        {/* 5. Interactive Course Directory Showcase */}
        <FeaturedCourses />

        {/* 6. University Statistics Ribbon */}
        <StatsSection
          title="Two Decades of Academic Leadership"
          subtitle="Empowering graduates to build world-class software, lead engineering teams, and drive technological innovation."
          variant="navy"
        />

        {/* 7. Student Life & Campus Experience */}
        <StudentLifeShowcase />

        {/* 8. Research & Innovation Themes */}
        <ResearchChallenges
          title="Research That Solves Real-World Challenges"
          subtitle="From energy-efficient green computing to deep learning for healthcare, our research powers tangible societal impact."
        />

        {/* 9. Research Impact Metrics */}
        <ResearchImpact
          title="Measurable Research Impact"
          subtitle="Over Rs. 120 million in competitive research grants and 150+ annual peer-reviewed publications."
          variant="default"
        />

        {/* 10. International Students Experience */}
        <InternationalShowcase />

        {/* 11. Alumni Success Stories & Outcomes */}
        <AlumniStories />

        {/* 12. Open Day / Campus Visit CTA Banner */}
        <CTASection
          title="Experience IIC First-Hand"
          description="Attend our upcoming Undergraduate Open Day or book a private one-on-one campus tour with faculty and student ambassadors."
          primaryCta={{ text: 'Book Campus Tour', href: '/visit/campus-tour' }}
          secondaryCta={{ text: 'Upcoming Open Days', href: '/events?type=open-day' }}
          variant="lime"
        />

        {/* 13. Latest News & Upcoming Events */}
        <NewsEvents
          featuredNews={news[0]}
          newsItems={news.slice(1, 4)}
          eventItems={events.slice(0, 3)}
        />

        {/* 14. More to Explore Quick Directory */}
        <ExploreLinks
          title="Explore More at IIC"
          links={[
            {
              label: 'International Student Guide',
              href: '/study/international',
              description: 'Entry qualifications, student visas, housing, and arrival orientation.',
            },
            {
              label: 'Scholarships & Financial Aid',
              href: '/admissions/scholarships',
              description: 'Merit-based scholarships and financial assistance for eligible students.',
            },
            {
              label: '360° Virtual Campus Tour',
              href: '/visit/virtual-tour',
              description: 'Explore our AI lab, library, and collaborative tech spaces online.',
            },
            {
              label: 'Industry Partnerships & Hiring',
              href: '/collaborate',
              description: 'Recruit top software talent and collaborate on applied R&D.',
            },
            {
              label: 'Global Alumni Network',
              href: '/alumni',
              description: 'Connect with 3,000+ graduates working across 25+ countries.',
            },
            {
              label: 'Research Publications Repository',
              href: '/research/repository',
              description: 'Browse 150+ open-access papers and faculty publications.',
            },
          ]}
        />

        {/* 15. Final High-Impact Apply CTA */}
        <CTASection
          title="Ready to Begin Your Journey?"
          description="Applications are now open for the 2025/26 academic year. Discover entry requirements, intake dates, and how to apply online."
          primaryCta={{ text: 'Start Online Application', href: '/admissions/apply' }}
          secondaryCta={{ text: 'View Entry Requirements', href: '/admissions/requirements' }}
          variant="gradient"
        />
      </main>
      <Footer />
    </>
  );
}