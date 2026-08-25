import { Metadata } from 'next';
import { Header } from '@/components/ui/Header';
import { Footer } from '@/components/ui/Footer';
import { Hero } from '@/sections/Hero';
import { PeopleCarousel } from '@/sections/PeopleCarousel';
import { CTASection } from '@/sections/CTASection';
import { ExploreLinks } from '@/sections/ExploreLinks';
import { alumni } from '@/data/university';
import Link from 'next/link';
import { CarouselPerson } from '@/sections/PeopleCarousel';

export const metadata: Metadata = {
  title: 'Alumni Network',
  description: 'Join 3,000+ IIC graduates worldwide. Alumni stories, events, benefits, volunteering, and giving back opportunities.',
};

const alumniCarouselData: CarouselPerson[] = alumni.map(a => ({
  id: a.id,
  name: a.name,
  image: a.image,
  title: a.currentRole,
  subtitle: a.company,
  description: a.quote,
  link: `/alumni/stories/${a.id}`,
}));

export default function AlumniPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="flex-1 pt-16 md:pt-20 lg:pt-24">
        <Hero
          headline="Global Alumni\nNetwork"
          subheadline="3,000+ graduates working at leading technology companies worldwide. Your IIC connection lasts a lifetime."
          primaryCta={{ text: 'Read Alumni Stories', href: '/alumni/stories' }}
          secondaryCta={{ text: 'Find Alumni', href: '/alumni/directory' }}
          image="/images/alumni-hero.jpg"
          imageAlt="IIC alumni"
          variant="life"
        />

        <section className="py-16 md:py-24 bg-white" aria-labelledby="alumni-stats-heading">
          <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto text-center">
              {[
                { value: '3,000+', label: 'Graduates Worldwide', icon: '🌍' },
                { value: '94%', label: 'Employment Rate', icon: '💼' },
                { value: '50+', label: 'Countries Represented', icon: '🏳️' },
                { value: 'Lifetime', label: 'Career Support', icon: '🎓' },
              ].map((stat, index) => (
                <article key={index} className="group p-6">
                  <div className="text-4xl mb-3" aria-hidden="true">{stat.icon}</div>
                  <div className="font-display font-extrabold text-navy text-3xl md:text-4xl mb-1">{stat.value}</div>
                  <div className="text-dark-grey font-medium">{stat.label}</div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <PeopleCarousel
          title="Alumni Success Stories"
          subtitle="From Microsoft to local startups, our graduates are making an impact worldwide."
          people={alumniCarouselData}
          ctaLink="/alumni/stories"
          ctaText="Read All Stories"
        />

        <section className="py-16 md:py-24 bg-off-white" aria-labelledby="benefits-heading">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
              <h2 id="benefits-heading" className="font-display font-extrabold text-navy leading-tight text-3xl md:text-5xl lg:text-6xl mb-4">
                Alumni Benefits & Services
              </h2>
              <p className="text-lg md:text-xl text-dark-grey leading-relaxed">
                Your relationship with IIC doesn&apos;t end at graduation. Enjoy lifelong benefits and support.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: '📚', title: 'Lifelong Learning', desc: 'Discounted courses, library access, online resources' },
                { icon: '💼', title: 'Career Support', desc: 'Job board, career coaching, networking events' },
                { icon: '📧', title: 'Email for Life', desc: 'Keep your @iic.edu.np email address forever' },
                { icon: '🏛️', title: 'Library Access', desc: 'Physical and digital library resources' },
                { icon: '🎫', title: 'Event Access', desc: 'Alumni reunions, lectures, networking receptions' },
                { icon: '🤝', title: 'Mentoring', desc: 'Mentor current students or find a mentor' },
                { icon: '🌐', title: 'Global Network', desc: '3,000+ alumni in 50+ countries' },
                { icon: '💚', title: 'Giving Back', desc: 'Scholarship funds, volunteering, legacy giving' },
              ].map((item, index) => (
                <article
                  key={index}
                  className="group bg-white border border-light-grey hover:border-lime hover:shadow-xl transition-all duration-300 p-6 h-full text-center"
                >
                  <div className="text-4xl mb-4" aria-hidden="true">{item.icon}</div>
                  <h3 className="font-display font-bold text-navy text-xl mb-2 group-hover:text-lime transition-colors">{item.title}</h3>
                  <p className="text-dark-grey text-sm">{item.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-navy text-white" aria-labelledby="giving-heading">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
              <h2 id="giving-heading" className="font-display font-extrabold leading-tight text-3xl md:text-5xl lg:text-6xl mb-4">
                Give Back to IIC
              </h2>
              <p className="text-lg md:text-xl text-white/80 leading-relaxed">
                Support the next generation of technology leaders through scholarships, research funding, and volunteering.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                { icon: '🎓', title: 'Scholarship Funds', desc: 'Fund a student&apos;s education. Named scholarships from Rs. 500,000/year.', link: '/alumni/scholarships' },
                { icon: '🔬', title: 'Research Support', desc: 'Enable cutting-edge research. Equipment, PhD studentships, project funding.', link: '/alumni/research-funding' },
                { icon: '🏛️', title: 'Legacy Giving', desc: 'Leave a lasting impact through your will. Estate planning guidance available.', link: '/alumni/legacy' },
              ].map((item, index) => (
                <article
                  key={index}
                  className="group bg-white/10 border border-white/20 hover:border-lime hover:bg-white/20 transition-all duration-300 p-6 h-full text-center"
                >
                  <div className="text-4xl mb-4" aria-hidden="true">{item.icon}</div>
                  <h3 className="font-display font-bold text-white text-xl mb-2 group-hover:text-lime transition-colors">{item.title}</h3>
                  <p className="text-white/70 mb-4">{item.desc}</p>
                  <Link href={item.link} className="inline-flex items-center gap-2 text-lime font-medium hover:text-white transition-colors group">
                    Learn More
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <CTASection
          title="Stay Connected"
          description="Update your details, join our LinkedIn group, or attend the next reunion."
          primaryCta={{ text: 'Update Your Details', href: '/alumni/update' }}
          secondaryCta={{ text: 'Join LinkedIn Group', href: 'https://linkedin.com/groups/iic-alumni' }}
          variant="blue"
        />

        <ExploreLinks
          title="More Alumni Resources"
          links={[
            {
              label: 'Alumni Events Calendar',
              href: '/alumni/events',
              description: 'Reunions, networking, and professional development events.',
            },
            {
              label: 'Volunteer Opportunities',
              href: '/alumni/volunteer',
              description: 'Mentor students, speak at events, serve on advisory boards.',
            },
            {
              label: 'Alumni Newsletter',
              href: '/alumni/newsletter',
              description: 'Monthly updates on alumni news, achievements, and events.',
            },
            {
              label: 'Contact Alumni Relations',
              href: '/alumni/contact',
              description: 'We\'re here to help you stay connected with IIC.',
            },
          ]}
        />
      </main>
      <Footer />
    </>
  );
}