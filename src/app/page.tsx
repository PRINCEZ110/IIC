import { Header } from '@/components/ui/Header';
import { Footer } from '@/components/ui/Footer';
import { Hero } from '@/sections/Hero';
import { CourseSearch } from '@/sections/CourseSearch';
import { StudyOptions } from '@/sections/StudyOptions';
import { ResearchChallenges } from '@/sections/ResearchChallenges';
import { ResearchImpact } from '@/sections/ResearchImpact';
import { PeopleCarousel } from '@/sections/PeopleCarousel';
import { StatsSection } from '@/sections/StatsSection';
import { CTASection } from '@/sections/CTASection';
import { NewsEvents } from '@/sections/NewsEvents';
import { ExploreLinks } from '@/sections/ExploreLinks';
import { news, events, researchers } from '@/data/university';
import { CarouselPerson } from '@/sections/PeopleCarousel';

const homepagePeople: CarouselPerson[] = researchers.slice(0, 6).map(r => ({
  id: r.id,
  name: r.name,
  image: r.image,
  title: r.title,
  subtitle: r.department,
  description: r.bio,
  link: `/research/researchers/${r.id}`,
}));

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content" className="flex-1 pt-16 md:pt-20 lg:pt-24">
        <Hero
          headline="Excellence in IT\nEducation Since 2000"
          subheadline="International Institute of Computer Science (IIC) is Nepal's premier institution for computing education, research, and innovation. Join 3000+ graduates shaping the future of technology."
          primaryCta={{ text: 'Explore Courses', href: '/study/courses' }}
          secondaryCta={{ text: 'Apply Now', href: '/admissions/apply' }}
          image="/images/hero-home.jpg"
          imageAlt="IIC campus and students"
          variant="home"
        />

        <CourseSearch />

        <StudyOptions
          title="Choose Your Path"
          subtitle="From undergraduate degrees to doctoral research, find the programme that matches your ambition."
        />

        <ResearchChallenges
          title="Why We Do What We Do"
          subtitle="Tackling the challenges facing our world head on through computing research and innovation."
        />

        <ResearchImpact
          title="Research Impact"
          subtitle="Our research makes a measurable difference to society, industry, and the environment."
          variant="navy"
        />

        <PeopleCarousel
          title="Working Together for Humanity's Future"
          subtitle="Our people drive innovation through collaboration, curiosity, and commitment to excellence."
          people={homepagePeople}
          ctaLink="/research/researchers"
          ctaText="View All Researchers"
        />

        <StatsSection
          title="Teaching People to Think Differently"
          subtitle="Two decades of academic excellence, industry partnerships, and graduate success."
          variant="default"
        />

        <CTASection
          title="Visit Our Campus"
          description="Experience IIC first-hand. Book a personal tour or join one of our open days to explore our facilities and meet our community."
          primaryCta={{ text: 'Book a Campus Tour', href: '/visit/campus-tour' }}
          secondaryCta={{ text: 'Upcoming Open Days', href: '/events?type=open-day' }}
          variant="lime"
        />

        <NewsEvents
          featuredNews={news[0]}
          newsItems={news.slice(1, 4)}
          eventItems={events.slice(0, 3)}
        />

        <ExploreLinks
          title="More to Explore"
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
              label: 'Industry Partnerships',
              href: '/collaborate/business',
              description: 'Collaborate with IIC on research, recruitment, and innovation projects.',
            },
            {
              label: 'Alumni Network',
              href: '/alumni',
              description: 'Connect with 3000+ graduates working at leading tech companies worldwide.',
            },
            {
              label: 'Research Repository',
              href: '/research/repository',
              description: 'Access 150+ open-access publications from our researchers.',
            },
            {
              label: 'Continuing Education',
              href: '/study/professional',
              description: 'Professional certifications and short courses for working professionals.',
            },
            {
              label: 'Student Life in Kathmandu',
              href: '/life/city',
              description: 'Discover why Kathmandu is one of Asia\'s most exciting student cities.',
            },
            {
              label: 'Careers & Employability',
              href: '/life/careers',
              description: '94% graduate employment rate with support for life.',
            },
          ]}
        />
      </main>
      <Footer />
    </>
  );
}