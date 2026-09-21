import { Metadata } from 'next';
import { Header } from '@/components/ui/Header';
import { Footer } from '@/components/ui/Footer';
import { Hero } from '@/sections/Hero';
import { StatsSection } from '@/sections/StatsSection';
import { CTASection } from '@/sections/CTASection';
import { ExploreLinks } from '@/sections/ExploreLinks';
import {  stats } from '@/data/university';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'About IIC',
  description: 'Learn about International Institute of Computer Science - Nepal\'s premier IT institute since 2000. History, vision, governance, and achievements.',
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="flex-1 pt-20 md:pt-24 lg:pt-32">
        <Hero
          headline="Since 2000."
          subheadline="Over two decades of excellence in computing education, research, and innovation. Thinking differently about technology education in Nepal."
          image="/images/about-hero.jpg"
          imageAlt="IIC campus and history"
          variant="page"
        />

        <section className="py-16 md:py-24 bg-white" aria-labelledby="welcome-heading">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
              <div>
                <h2 id="welcome-heading" className="font-display font-extrabold text-navy leading-tight text-3xl md:text-5xl lg:text-6xl mb-6">
                  Welcome to IIC
                </h2>
                <div className="space-y-6 text-dark-grey leading-relaxed text-lg">
                  <p>International Institute of Computer Science (IIC) was founded in 2000 with a bold vision: to create a world-class institution for computing education in Nepal that could compete on the global stage.</p>
                  <p>Today, we are Nepal&apos;s premier IT institute, ranked #1 by the University Grants Commission. Our 3,000+ alumni work at leading technology companies worldwide, from Microsoft and Google to innovative Nepali startups.</p>
                  <p>But rankings and statistics only tell part of the story. What truly defines IIC is our community: curious students, passionate researchers, dedicated staff, and engaged industry partners, all united by a belief in the transformative power of technology.</p>
                </div>
                <Link href="/about" className="inline-flex items-center gap-2 text-navy font-semibold hover:text-lime-deep transition-colors mt-4 group">
                  Message from the Director
                  <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </Link>
              </div>

              <div className="relative aspect-[4/3] bg-light-grey overflow-hidden">
                <Image
                src="/images/about-welcome.jpg"
                alt="IIC campus community"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-navy text-white" aria-labelledby="vision-heading">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
              <h2 id="vision-heading" className="font-display font-extrabold leading-tight text-3xl md:text-5xl lg:text-6xl mb-4">
                Vision, Mission & Values
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                { icon: '🎯', title: 'Vision', desc: 'To be a globally recognised leader in computing education and research, driving innovation and societal impact in Nepal and beyond.' },
                { icon: '🚀', title: 'Mission', desc: 'To educate exceptional technology leaders, conduct world-class research, and foster innovation that addresses real-world challenges.' },
                { icon: '💎', title: 'Values', desc: 'Excellence • Integrity • Innovation • Inclusion • Impact • Sustainability' },
              ].map((item, index) => (
                <article
                  key={index}
                  className="group bg-white/10 border border-white/20 hover:border-lime hover:bg-white/20 transition-all duration-300 p-8 h-full text-center"
                >
                  <div className="text-4xl mb-4" aria-hidden="true">{item.icon}</div>
                  <h3 className="font-display font-bold text-white text-2xl mb-4 group-hover:text-lime transition-colors">{item.title}</h3>
                  <p className="text-white/80 leading-relaxed">{item.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <StatsSection
          title="Teaching People to Think Differently"
          subtitle="Two decades of academic excellence, industry partnerships, and graduate success."
          stats={stats}
          variant="default"
        />

        <section className="py-16 md:py-24 bg-white" aria-labelledby="history-heading">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
              <h2 id="history-heading" className="font-display font-extrabold text-navy leading-tight text-3xl md:text-5xl lg:text-6xl mb-4">
                Our History
              </h2>
              <p className="text-lg md:text-xl text-dark-grey leading-relaxed">
                Key milestones in IIC&apos;s journey from startup to Nepal&apos;s leading IT institute.
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <ol className="space-y-8" role="list">
                {[
                  { year: '2000', title: 'Founded', desc: 'IIC established as Nepal&apos;s first dedicated computing institute with 50 students' },
                  { year: '2003', title: 'First Graduates', desc: 'First cohort of BSc Computing graduates enter the workforce' },
                  { year: '2008', title: 'University Partnership', desc: 'Affiliation with Tribhuvan University for degree programmes' },
                  { year: '2012', title: 'Research Centres Launch', desc: 'First dedicated research centres in AI and Cybersecurity established' },
                  { year: '2015', title: 'New Campus', desc: 'Move to purpose-built Kamaladi campus with specialist labs' },
                  { year: '2018', title: 'Postgraduate Expansion', desc: 'MSc programmes launched; first PhD candidates enrolled' },
                  { year: '2020', title: 'Pandemic Response', desc: 'Rapid transition to online learning; zero disruption to teaching' },
                  { year: '2022', title: 'Innovation Centre', desc: 'Launch of incubation and entrepreneurship support facility' },
                  { year: '2024', title: 'Top Ranked', desc: 'Ranked #1 IT Institute in Nepal by UGC; 3,000th graduate' },
                ].map((item, index) => (
                  <li
                    key={index}
                    className="group relative pl-10 md:pl-16 pb-8 border-l border-light-grey last:border-0"
                  >
                    <div className="absolute left-0 md:left-4 top-0 w-6 h-6 bg-lime border-4 border-white rounded-full flex items-center justify-center z-10">
                      <span className="font-display font-bold text-navy text-sm">{index + 1}</span>
                    </div>
                    <div className="absolute left-2 md:left-2 top-1 w-1 h-full bg-light-grey last:hidden" aria-hidden="true" />
                    <div className="flex items-baseline gap-4 mb-2">
                      <time className="font-display font-extrabold text-lime-deep text-2xl md:text-3xl" dateTime={item.year}>{item.year}</time>
                      <h3 className="font-display font-bold text-navy text-xl md:text-2xl">{item.title}</h3>
                    </div>
                    <p className="text-dark-grey ml-10 md:ml-16">{item.desc}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-off-white" aria-labelledby="excellence-heading">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
              <h2 id="excellence-heading" className="font-display font-extrabold text-navy leading-tight text-3xl md:text-5xl lg:text-6xl mb-4">
                Excellence Recognised
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {[
                { title: '#1 IT Institute', desc: 'UGC Nepal Ranking 2024', icon: '🏆' },
                { title: 'Gold Rating', desc: 'Teaching Excellence Framework', icon: '🥇' },
                { title: 'QAA Certified', desc: 'Quality Assurance Agency', icon: '✅' },
                { title: '94% Employment', desc: 'Graduate Outcomes Survey', icon: '📈' },
              ].map((item, index) => (
                <article
                  key={index}
                  className="group bg-white border border-light-grey hover:border-lime hover:shadow-xl transition-all duration-300 p-6 h-full text-center"
                >
                  <div className="text-4xl mb-4" aria-hidden="true">{item.icon}</div>
                  <h3 className="font-display font-bold text-navy text-xl mb-2 group-hover:text-lime-deep transition-colors">{item.title}</h3>
                  <p className="text-dark-grey">{item.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <CTASection
          title="Discover More About IIC"
          description="Explore our governance, policies, campus development plans, and sustainability commitments."
          primaryCta={{ text: 'Governance & Leadership', href: '/about' }}
          secondaryCta={{ text: 'Campus Development', href: '/about' }}
          variant="navy"
        />

        <ExploreLinks
          title="More About IIC"
          links={[
            {
              label: 'Governance & Leadership',
              href: '/about',
              description: 'Board of Governors, Academic Council, and senior leadership team.',
            },
            {
              label: 'Policies & Regulations',
              href: '/about',
              description: 'Academic regulations, student policies, and institutional documents.',
            },
            {
              label: 'Campus Development',
              href: '/about',
              description: 'Masterplan, sustainability, and future development projects.',
            },
            {
              label: 'Freedom of Information',
              href: '/about',
              description: 'Public access to information scheme and requests.',
            },
            {
              label: 'Modern Slavery Statement',
              href: '/about',
              description: 'Our commitment to ethical supply chains and labour practices.',
            },
            {
              label: 'Press & Media',
              href: '/news',
              description: 'Media resources, press releases, and brand guidelines.',
            },
          ]}
        />
      </main>
      <Footer />
    </>
  );
}
