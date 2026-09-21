import { Metadata } from 'next';
import { Header } from '@/components/ui/Header';
import { Footer } from '@/components/ui/Footer';
import { Hero } from '@/sections/Hero';
import { CTASection } from '@/sections/CTASection';
import { ExploreLinks } from '@/sections/ExploreLinks';
import { lifeCategories } from '@/data/university';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Life at IIC',
  description: 'Discover student life at International Institute of Computer Science. Campus facilities, accommodation, Kathmandu city life, clubs, sports, careers and support.',
};

export default function LifePage() {
  return (
    <>
      <Header />
      <main id="main-content" className="flex-1 pt-20 md:pt-24 lg:pt-32">
        <Hero
          headline="Life at IIC"
          subheadline="Your university experience goes far beyond the classroom. Discover a vibrant community, world-class facilities, and the excitement of living in Kathmandu."
          primaryCta={{ text: 'Book a Campus Tour', href: '/visit/campus-tour' }}
          secondaryCta={{ text: 'Virtual Tour', href: '/visit/virtual-tour' }}
          image="/images/life-hero.jpg"
          imageAlt="Student life at IIC"
          variant="life"
        />

        <section className="py-16 md:py-24 bg-white" aria-labelledby="life-categories-heading">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
              <h2 id="life-categories-heading" className="font-display font-extrabold text-navy leading-tight text-3xl md:text-5xl lg:text-6xl mb-4">
                Explore Life at IIC
              </h2>
              <p className="text-lg md:text-xl text-dark-grey leading-relaxed">
                Eight aspects of student life that make your IIC experience unique.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" role="list">
              {lifeCategories.map((category) => (
                <article
                  key={category.id}
                  className="group relative overflow-hidden bg-white border border-light-grey hover:border-lime hover:shadow-xl transition-all duration-300 h-full"
                  role="listitem"
                >
                  <Link href={category.href} className="block h-full">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                src={category.image}
                alt={category.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
              />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true" />
                    </div>
                    <div className="p-5">
                      <h3 className="font-display font-bold text-navy text-xl mb-2 group-hover:text-lime-deep transition-colors">
                        {category.title}
                      </h3>
                      <p className="text-dark-grey text-sm">{category.description}</p>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-off-white" aria-labelledby="why-iic-heading">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
              <h2 id="why-iic-heading" className="font-display font-extrabold text-navy leading-tight text-3xl md:text-5xl lg:text-6xl mb-4">
                Why Students Choose IIC
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: '🏆', title: 'Top-Ranked', desc: 'Nepal\'s #1 IT institute (UGC 2024)' },
                { icon: '💼', title: '94% Employment', desc: 'Graduates employed within 6 months' },
                { icon: '🌍', title: 'Global Community', desc: 'Students from 25+ countries' },
                { icon: '🏠', title: 'Guaranteed Housing', desc: 'On-campus accommodation for first years' },
                { icon: '🎓', title: 'Lifelong Careers', desc: 'Career support for life after graduation' },
                { icon: '🏥', title: 'Comprehensive Support', desc: 'Wellbeing, academic, and disability services' },
                { icon: '🏙️', title: 'Kathmandu Living', desc: 'Affordable, vibrant, connected city' },
                { icon: '🤝', title: 'Industry Connected', desc: '50+ partners for internships and jobs' },
              ].map((item, index) => (
                <article
                  key={index}
                  className="group bg-white border border-light-grey hover:border-lime hover:shadow-xl transition-all duration-300 p-6 text-center"
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
          title="Experience IIC for Yourself"
          description="The best way to understand life at IIC is to visit. Book a personal tour or join an open day."
          primaryCta={{ text: 'Book a Tour', href: '/visit/campus-tour' }}
          secondaryCta={{ text: 'Upcoming Open Days', href: '/events?type=open-day' }}
          variant="lime"
        />

        <ExploreLinks
          title="More About Student Life"
          links={[
            {
              label: 'International Student Support',
              href: '/study/international',
              description: 'Visa guidance, orientation programmes, and cultural integration.',
            },
            {
              label: 'Disability & Accessibility',
              href: '/accessibility',
              description: 'Inclusive learning environments and tailored support.',
            },
            {
              label: 'Student Voices',
              href: '/life',
              description: 'Hear directly from current students about their IIC experience.',
            },
            {
              label: 'Parents & Guardians',
              href: '/life',
              description: 'Information for families supporting students at IIC.',
            },
          ]}
        />
      </main>
      <Footer />
    </>
  );
}
