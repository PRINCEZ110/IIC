import { Metadata } from 'next';
import { Header } from '@/components/ui/Header';
import { Footer } from '@/components/ui/Footer';
import { Hero } from '@/sections/Hero';
import { CTASection } from '@/sections/CTASection';
import { ExploreLinks } from '@/sections/ExploreLinks';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Collaborate with IIC',
  description: 'Partner with IIC for business partnerships, research collaboration, talent recruitment, consultancy, and innovation. 50+ industry partners.',
};

const collaborateAreas = [
  { icon: '🤝', title: 'Business Partnerships', desc: 'Strategic alliances, joint ventures, and long-term collaboration models tailored to your needs.', link: '/collaborate' },
  { icon: '👥', title: 'Hire Our Graduates', desc: 'Access 94% employment-ready talent. Career fairs, internships, degree apprenticeships.', link: '/collaborate' },
  { icon: '🔬', title: 'Research Collaboration', desc: 'Joint research projects, funded PhDs, access to specialist labs and expertise.', link: '/collaborate' },
  { icon: '💡', title: 'Innovation Centre', desc: 'Co-working, incubation, accelerator programmes, and startup support.', link: '/collaborate' },
  { icon: '📋', title: 'Consultancy Services', desc: 'Expert advisory from our faculty in AI, cybersecurity, data science, and software engineering.', link: '/collaborate' },
  { icon: '🏢', title: 'Facilities Hire', desc: 'Specialist labs, meeting rooms, event spaces, and testbeds for hire.', link: '/collaborate' },
  { icon: '🌍', title: 'International Partners', desc: 'Global university network, research mobility, transnational education.', link: '/collaborate' },
  { icon: '📞', title: 'Contact Us', desc: 'Start a conversation with our Business Development team.', link: '/collaborate' },
];

export default function CollaboratePage() {
  return (
    <>
      <Header />
      <main id="main-content" className="flex-1 pt-20 md:pt-24 lg:pt-32">
        <Hero
          headline="Collaborate\nwith IIC"
          subheadline="Partner with Nepal's leading IT institute. Business partnerships, research collaboration, talent recruitment, consultancy, and innovation."
          primaryCta={{ text: 'Start a Conversation', href: '/collaborate' }}
          secondaryCta={{ text: 'Hire Graduates', href: '/collaborate' }}
          image="/images/collaborate-hero.jpg"
          imageAlt="Industry collaboration at IIC"
          variant="page"
        />

        <section className="py-16 md:py-24 bg-white" aria-labelledby="why-collaborate-heading">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
              <h2 id="why-collaborate-heading" className="font-display font-extrabold text-navy leading-tight text-3xl md:text-5xl lg:text-6xl mb-4">
                Why Partner with IIC?
              </h2>
              <p className="text-lg md:text-xl text-dark-grey leading-relaxed">
                We work with 50+ organisations across sectors. Here&apos;s what makes us a valued partner.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: '🎓', title: 'Top Talent', desc: '94% graduate employment rate. Graduates at Microsoft, Google, Amazon, and leading Nepali companies.' },
                { icon: '🔬', title: 'Research Excellence', desc: 'Rs. 120M+ research funding. 8 specialist centres. World-class publications.' },
                { icon: '🏆', title: 'Ranked #1', desc: 'UGC Nepal&apos;s top IT institute. Gold teaching rating. QAA certified.' },
                { icon: '🤝', title: 'Flexible Models', desc: 'Tailored partnership frameworks from one-off projects to strategic alliances.' },
                { icon: '🌱', title: 'Innovation Ecosystem', desc: 'Incubator, accelerator, testbeds, and maker spaces for co-creation.' },
                { icon: '🌐', title: 'Global Reach', desc: 'International university network. Research mobility. Transnational education.' },
              ].map((item, index) => (
                <article
                  key={index}
                  className="group bg-white border border-light-grey hover:border-lime hover:shadow-xl transition-all duration-300 p-6 h-full"
                >
                  <div className="text-4xl mb-4" aria-hidden="true">{item.icon}</div>
                  <h3 className="font-display font-bold text-navy text-xl mb-2 group-hover:text-lime-deep transition-colors">{item.title}</h3>
                  <p className="text-dark-grey">{item.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-off-white" aria-labelledby="collaboration-areas-heading">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
              <h2 id="collaboration-areas-heading" className="font-display font-extrabold text-navy leading-tight text-3xl md:text-5xl lg:text-6xl mb-4">
                Ways to Collaborate
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {collaborateAreas.map((area, index) => (
                <article
                  key={index}
                  className="group bg-white border border-light-grey hover:border-lime hover:shadow-xl transition-all duration-300 p-6 h-full"
                >
                  <div className="text-4xl mb-4" aria-hidden="true">{area.icon}</div>
                  <h3 className="font-display font-bold text-navy text-lg mb-2 group-hover:text-lime-deep transition-colors">{area.title}</h3>
                  <p className="text-dark-grey text-sm mb-4">{area.desc}</p>
                  <Link href={area.link} className="inline-flex items-center gap-2 text-navy font-medium hover:text-lime-deep transition-colors group">
                    Explore
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-navy text-white" aria-labelledby="success-stories-heading">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
              <h2 id="success-stories-heading" className="font-display font-extrabold leading-tight text-3xl md:text-5xl lg:text-6xl mb-4">
                Partnership Success Stories
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                { partner: 'Fusemachines', project: 'AI Talent Pipeline', result: '50+ graduates hired annually; joint AI research lab established' },
                { partner: 'Ncell Axiata', project: '5G & Cybersecurity', result: 'Joint cybersecurity centre; PhD sponsorships; internship programme' },
                { partner: 'World Bank', project: 'Digital Nepal', result: 'Policy research; capacity building; digital skills training for 10,000+ youth' },
              ].map((item, index) => (
                <article
                  key={index}
                  className="group bg-white/10 border border-white/20 hover:border-lime hover:bg-white/20 transition-all duration-300 p-6 h-full"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 bg-lime/20 text-lime-deep flex items-center justify-center rounded-none flex-shrink-0 group-hover:bg-lime group-hover:text-navy transition-colors">
                      <svg className="w-5 h-5 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-white text-lg">{item.partner}</h3>
                      <p className="text-lime-deep text-sm font-medium">{item.project}</p>
                    </div>
                  </div>
                  <p className="text-white/70 text-sm">{item.result}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <CTASection
          title="Let's Start a Conversation"
          description="Whether you have a specific project in mind or want to explore possibilities, our Business Development team is ready to talk."
          primaryCta={{ text: 'Contact Business Development', href: '/collaborate' }}
          secondaryCta={{ text: 'View All Partnership Options', href: '/collaborate' }}
          variant="lime"
        />

        <ExploreLinks
          title="More Collaboration Resources"
          links={[
            {
              label: 'Partnership Framework',
              href: '/collaborate',
              description: 'Our structured approach to collaboration with defined pathways.',
            },
            {
              label: 'Intellectual Property Policy',
              href: '/collaborate',
              description: 'Clear guidelines on IP ownership and commercialisation.',
            },
            {
              label: 'Facilities Brochure',
              href: '/collaborate',
              description: 'Detailed specifications of our specialist labs and spaces for hire.',
            },
            {
              label: 'Case Studies',
              href: '/collaborate',
              description: 'Detailed examples of successful partnerships across sectors.',
            },
          ]}
        />
      </main>
      <Footer />
    </>
  );
}
