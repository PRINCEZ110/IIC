import { Metadata } from 'next';
import { Header } from '@/components/ui/Header';
import { Footer } from '@/components/ui/Footer';
import { Hero } from '@/sections/Hero';
import { ResearchChallenges } from '@/sections/ResearchChallenges';
import { ResearchImpact } from '@/sections/ResearchImpact';
import { PeopleCarousel } from '@/sections/PeopleCarousel';
import { CTASection } from '@/sections/CTASection';
import { ExploreLinks } from '@/sections/ExploreLinks';
import { researchStats, researchers } from '@/data/university';

export const metadata: Metadata = {
  title: 'Research & Innovation',
  description: 'World-leading research at IIC. Sustainable Computing, AI & Machine Learning, Cybersecurity, Data Science. 45+ researchers, Rs. 120M+ funding.',
};

export default function ResearchPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="flex-1 pt-20 md:pt-24 lg:pt-32">
        <Hero
          headline="On the Frontline of\nResearch & Innovation"
          subheadline="We're tackling the challenges facing our world head-on. From climate change to healthcare, our researchers are making a measurable difference."
          primaryCta={{ text: 'Explore Research Themes', href: '/research/centres' }}
          secondaryCta={{ text: 'View Our Researchers', href: '/research/researchers' }}
          image="/images/research-hero.jpg"
          imageAlt="Research at IIC"
          variant="research"
        />

        <ResearchChallenges
          title="Why We Do What We Do"
          subtitle="Tackling the challenges facing our world head on."
        />

        <ResearchImpact
          title="Research Impact in Numbers"
          subtitle="Our research makes a measurable difference to society, industry, and the environment."
          stats={researchStats}
          variant="navy"
        />

        <PeopleCarousel
          title="Working Together for Humanity's Future"
          subtitle="Our people drive innovation through collaboration, curiosity, and commitment to excellence."
          people={researchers}
        />

        <CTASection
          title="Collaborate with Our Researchers"
          description="Partner with IIC on research projects, access our facilities, or fund a PhD studentship."
          primaryCta={{ text: 'Business Partnerships', href: '/collaborate' }}
          secondaryCta={{ text: 'Fund a PhD', href: '/research/phd-opportunities' }}
          variant="lime"
        />

        <ExploreLinks
          title="More Research at IIC"
          links={[
            {
              label: 'Research Centres & Labs',
              href: '/research/centres',
              description: '8 specialist centres with world-class facilities.',
            },
            {
              label: 'PhD Opportunities',
              href: '/study/research',
              description: 'Funded and self-funded doctoral positions available.',
            },
            {
              label: 'Publications Repository',
              href: '/research/repository',
              description: '150+ open-access papers published annually.',
            },
            {
              label: 'Research Funding & Grants',
              href: '/research/funding',
              description: 'Current opportunities and application guidance.',
            },
            {
              label: 'Research Ethics & Governance',
              href: '/research',
              description: 'Policies, compliance, and integrity framework.',
            },
            {
              label: 'Knowledge Exchange',
              href: '/collaborate',
              description: 'Commercialisation, IP, and industry engagement.',
            },
          ]}
        />
      </main>
      <Footer />
    </>
  );
}
