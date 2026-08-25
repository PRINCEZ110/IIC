import { Metadata } from 'next';
import { Header } from '@/components/ui/Header';
import { Footer } from '@/components/ui/Footer';
import { Hero } from '@/sections/Hero';
import { CTASection } from '@/sections/CTASection';
import { ExploreLinks } from '@/sections/ExploreLinks';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Campus & Facilities',
  description: 'Explore IIC\'s modern campus in the heart of Kathmandu. Specialist labs, library, collaborative spaces, and innovative learning environments.',
};

export default function CampusPage() {
  const facilities = [
    { name: 'AI & Machine Learning Lab', desc: 'GPU clusters, deep learning workstations, research-grade hardware', icon: '🤖' },
    { name: 'Cybersecurity Research Centre', desc: 'Isolated networks, penetration testing labs, forensic workstations', icon: '🔒' },
    { name: 'Data Science Institute', desc: 'High-performance computing, big data platforms, visualisation wall', icon: '📊' },
    { name: 'Sustainable Computing Lab', desc: 'Energy measurement, green algorithms, cloud optimisation testbed', icon: '🌱' },
    { name: 'Software Engineering Studio', desc: 'Agile workspaces, CI/CD pipelines, device testing lab', icon: '💻' },
    { name: 'Innovation Centre', desc: 'Co-working, incubation, maker space, 3D printing', icon: '💡' },
    { name: 'Central Library', desc: '50,000+ volumes, digital databases, silent & collaborative zones', icon: '📚' },
    { name: 'Student Hub', desc: 'Café, social spaces, SU offices, event venue', icon: '☕' },
  ];

  return (
    <>
      <Header />
      <main id="main-content" className="flex-1 pt-16 md:pt-20 lg:pt-24">
        <Hero
          headline="One Campus.\nEverything You Need."
          subheadline="Our single-site campus in Kamaladi puts world-class facilities, green spaces, and a vibrant community right on your doorstep."
          primaryCta={{ text: 'Book a Tour', href: '/visit/campus-tour' }}
          secondaryCta={{ text: 'Virtual Tour', href: '/visit/virtual-tour' }}
          image="/images/campus-hero.jpg"
          imageAlt="IIC campus aerial view"
          variant="life"
        />

        <section className="py-16 md:py-24 bg-white" aria-labelledby="facilities-heading">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
              <h2 id="facilities-heading" className="font-display font-extrabold text-navy leading-tight text-3xl md:text-5xl lg:text-6xl mb-4">
                Specialist Facilities
              </h2>
              <p className="text-lg md:text-xl text-dark-grey leading-relaxed">
                Eight dedicated labs and centres give you hands-on experience with industry-standard technology.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" role="list">
              {facilities.map((facility, index) => (
                <article
                  key={index}
                  className="group bg-white border border-light-grey hover:border-lime hover:shadow-xl transition-all duration-300 p-6 h-full"
                  role="listitem"
                >
                  <div className="text-4xl mb-4" aria-hidden="true">{facility.icon}</div>
                  <h3 className="font-display font-bold text-navy text-lg mb-2 group-hover:text-lime transition-colors">{facility.name}</h3>
                  <p className="text-dark-grey text-sm">{facility.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-off-white" aria-labelledby="campus-map-heading">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
              <h2 id="campus-map-heading" className="font-display font-extrabold text-navy leading-tight text-3xl md:text-5xl lg:text-6xl mb-4">
                Interactive Campus Map
              </h2>
              <p className="text-lg md:text-xl text-dark-grey leading-relaxed">
                Explore our campus virtually. Click on buildings to learn more about each facility.
              </p>
            </div>

            <div className="relative aspect-[16/9] bg-light-grey overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center text-navy/30 text-8xl" aria-hidden="true">
                🗺️
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white/95 backdrop-blur-sm p-8 text-center max-w-md">
                  <p className="text-dark-grey mb-4">Interactive campus map coming soon</p>
                  <Link href="/visit/virtual-tour" className="inline-flex items-center gap-2 text-navy font-semibold hover:text-lime transition-colors">
                    Try Virtual Tour Instead
                    <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </Link>
                </div>
              </div>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              {[
                { title: 'Virtual Tour', desc: '360° walkthrough of all buildings', href: '/visit/virtual-tour', icon: '🎥' },
                { title: 'Campus Map PDF', desc: 'Download printable campus map', href: '/assets/campus-map.pdf', icon: '📄' },
                { title: 'Accessibility Map', desc: 'Step-free routes and facilities', href: '/life/accessibility#map', icon: '♿' },
              ].map((item, index) => (
                <article key={index} className="group bg-white border border-light-grey hover:border-lime hover:shadow-xl transition-all duration-300 p-6 h-full">
                  <div className="text-3xl mb-3" aria-hidden="true">{item.icon}</div>
                  <h3 className="font-display font-bold text-navy text-lg mb-1 group-hover:text-lime transition-colors">{item.title}</h3>
                  <p className="text-dark-grey text-sm mb-4">{item.desc}</p>
                  <Link href={item.href} className="inline-flex items-center gap-1 text-lime font-medium hover:text-lime-dark transition-colors text-sm group">
                    Access
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-white" aria-labelledby="green-campus-heading">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="relative aspect-[4/3] bg-light-grey overflow-hidden">
                <img
                  src="/images/green-campus.jpg"
                  alt="Green campus with solar panels and gardens"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-6">
                <h2 id="green-campus-heading" className="font-display font-extrabold text-navy leading-tight text-3xl md:text-5xl lg:text-6xl">
                  A Greener Campus
                </h2>
                <div className="space-y-4 text-dark-grey leading-relaxed">
                  <p>Sustainability is at the heart of our campus development. We&apos;re committed to reducing our environmental impact while creating a healthy, inspiring environment for learning.</p>
                  <p>Our Kamaladi campus features solar panels providing 30% of our energy, rainwater harvesting, extensive green spaces, and a commitment to zero waste to landfill by 2026.</p>
                </div>
                <ul className="space-y-3" role="list">
                  {[
                    'Solar PV array generating 30% of campus electricity',
                    'Rainwater harvesting for irrigation and greywater',
                    'Biodiversity gardens with native Nepali species',
                    'Zero single-use plastics in catering outlets',
                    'Electric vehicle charging points across campus',
                    'Target: Net zero carbon by 2030',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-lime rounded-full mt-2 flex-shrink-0" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/about/sustainability" className="inline-flex items-center gap-2 text-navy font-semibold hover:text-lime transition-colors mt-4">
                  Our Sustainability Strategy
                  <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <CTASection
          title="See It for Yourself"
          description="Words and pictures can only tell you so much. Experience our campus in person or virtually."
          primaryCta={{ text: 'Book a Campus Tour', href: '/visit/campus-tour' }}
          secondaryCta={{ text: 'Virtual Tour', href: '/visit/virtual-tour' }}
          variant="navy"
        />

        <ExploreLinks
          title="More Campus Information"
          links={[
            {
              label: 'Library & Learning Resources',
              href: '/life/campus/library',
              description: '50,000+ volumes, 24/7 digital access, specialist collections.',
            },
            {
              label: 'Food & Dining',
              href: '/life/campus/dining',
              description: 'Cafés, restaurants, and dietary options across campus.',
            },
            {
              label: 'Sports Facilities',
              href: '/life/sport',
              description: 'Gym, courts, fitness classes, and team sports.',
            },
            {
              label: 'Getting Here',
              href: '/visit/directions',
              description: 'Directions, parking, and public transport options.',
            },
          ]}
        />
      </main>
      <Footer />
    </>
  );
}