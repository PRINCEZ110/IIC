import { Metadata } from 'next';
import { Header } from '@/components/ui/Header';
import { Footer } from '@/components/ui/Footer';
import { Hero } from '@/sections/Hero';
import { CTASection } from '@/sections/CTASection';
import { ExploreLinks } from '@/sections/ExploreLinks';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Student Accommodation',
  description: 'Find your home at IIC. Guaranteed on-campus halls for first years, approved private providers, costs, and how to apply.',
};

const halls = [
  { name: 'Kamaladi Hall', type: 'On-campus', rooms: '350', catering: 'Self-catered', price: 'Rs. 180,000/year', features: ['24/7 security', 'Common rooms', 'Study spaces', 'Laundry', 'WiFi'] },
  { name: 'Tech View Residence', type: 'On-campus', rooms: '280', catering: 'Catered option', price: 'Rs. 220,000/year', features: ['En-suite rooms', 'Meal plan', 'Gym access', '24/7 security', 'WiFi'] },
  { name: 'Green Valley Halls', type: 'Partner - 5 min walk', rooms: '200', catering: 'Self-catered', price: 'Rs. 160,000/year', features: ['Modern apartments', 'Shared kitchens', 'Social spaces', 'Secure entry', 'WiFi'] },
  { name: 'City Central Apartments', type: 'Partner - 10 min bus', rooms: '150', catering: 'Self-catered', price: 'Rs. 140,000/year', features: ['City centre location', 'Fully furnished', 'Bills included', '24/7 concierge', 'WiFi'] },
];

export default function AccommodationPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="flex-1 pt-20 md:pt-24 lg:pt-32">
        <Hero
          headline="Your Home\nat IIC"
          subheadline="Safe, comfortable, and convenient accommodation options. Guaranteed housing for all first-year undergraduates."
          primaryCta={{ text: 'Apply for Accommodation', href: '/contact' }}
          secondaryCta={{ text: 'Virtual Tour', href: '/visit/virtual-tour' }}
          image="/images/accommodation-hero.jpg"
          imageAlt="Student accommodation at IIC"
          variant="life"
        />

        <section className="py-16 md:py-24 bg-white" aria-labelledby="guarantee-heading">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
              <h2 id="guarantee-heading" className="font-display font-extrabold text-navy leading-tight text-3xl md:text-5xl lg:text-6xl mb-4">
                Accommodation Guarantee
              </h2>
              <p className="text-lg md:text-xl text-dark-grey leading-relaxed">
                All first-year undergraduate students who apply by the deadline are guaranteed a place in IIC-managed halls.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                { icon: '✅', title: 'Guaranteed Place', desc: 'For all first-year undergraduates applying by July 31' },
                { icon: '🔒', title: 'Safe & Secure', desc: '24/7 security, keycard access, CCTV, resident wardens' },
                { icon: '💰', title: 'All-Inclusive', desc: 'Rent includes utilities, WiFi, contents insurance' },
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

        <section className="py-16 md:py-24 bg-off-white" aria-labelledby="halls-heading">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
              <h2 id="halls-heading" className="font-display font-extrabold text-navy leading-tight text-3xl md:text-5xl lg:text-6xl mb-4">
                Our Halls of Residence
              </h2>
              <p className="text-lg md:text-xl text-dark-grey leading-relaxed">
                Four distinct communities, each with its own character and facilities.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {halls.map((hall, index) => (
                <article
                  key={index}
                  className="group bg-white border border-light-grey hover:border-lime hover:shadow-xl transition-all duration-300 overflow-hidden h-full flex flex-col"
                >
                  <div className="relative aspect-video overflow-hidden bg-light-grey">
                    <Image
                      src={`/images/hall-${hall.name.toLowerCase().replace(/\s+/g, '-')}.jpg`}
                      alt={hall.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-lime text-navy text-xs font-bold uppercase tracking-wider">{hall.type}</span>
                      <span className="px-2 py-1 bg-white/90 text-navy text-xs font-medium">{hall.rooms} rooms</span>
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="font-display font-bold text-navy text-2xl mb-2">{hall.name}</h3>
                    <div className="flex items-center gap-4 text-sm text-medium-grey mb-4">
                      <span className="flex items-center gap-1"><span aria-hidden="true">🍽️</span> {hall.catering}</span>
                      <span className="flex items-center gap-1 font-display font-bold text-lime-deep">{hall.price}</span>
                    </div>

                    <ul className="flex flex-wrap gap-2 mb-6 flex-1" role="list">
                      {hall.features.map((feature, i) => (
                        <li key={i} className="px-3 py-1 bg-off-white border border-light-grey text-sm text-dark-grey">{feature}</li>
                      ))}
                    </ul>

                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 text-navy font-medium hover:text-lime-deep transition-colors mt-auto group"
                    >
                      View Details
                      <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-white" aria-labelledby="costs-heading">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
              <h2 id="costs-heading" className="font-display font-extrabold text-navy leading-tight text-3xl md:text-5xl lg:text-6xl mb-4">
                Costs & What&apos;s Included
              </h2>
            </div>

            <div className="max-w-3xl mx-auto">
              <div className="bg-navy text-white p-8 mb-8">
                <h3 className="font-display font-bold text-white text-xl mb-4">Typical Annual Costs (2024/25)</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div className="space-y-3">
                    <p><span className="font-medium">IIC Halls (self-catered):</span> Rs. 180,000 - 220,000</p>
                    <p><span className="font-medium">Partner Halls:</span> Rs. 140,000 - 180,000</p>
                    <p><span className="font-medium">Private rental (shared):</span> Rs. 120,000 - 200,000</p>
                  </div>
                  <div className="space-y-3">
                    <p><span className="font-medium">Utilities & WiFi:</span> Included in IIC halls</p>
                    <p><span className="font-medium">Contents insurance:</span> Included in IIC halls</p>
                    <p><span className="font-medium">Meal plan (optional):</span> Rs. 60,000/year</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-off-white p-6 border border-light-grey">
                  <h4 className="font-display font-bold text-navy text-lg mb-3">What&apos;s Included in IIC Halls</h4>
                  <ul className="space-y-2 text-dark-grey" role="list">
                    {[
                      'Furnished bedroom (bed, desk, chair, wardrobe)',
                      'Shared kitchen and living spaces',
                      'High-speed WiFi throughout',
                      'All utilities (electricity, water, heating)',
                      'Contents insurance for personal belongings',
                      '24/7 security and resident warden support',
                      'Regular cleaning of common areas',
                      'Access to laundry facilities',
                      'Maintenance and repair service',
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-lime rounded-full mt-2 flex-shrink-0" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-off-white p-6 border border-light-grey">
                  <h4 className="font-display font-bold text-navy text-lg mb-3">Additional Costs to Budget</h4>
                  <ul className="space-y-2 text-dark-grey" role="list">
                    {[
                      'Food & groceries: ~Rs. 30,000-50,000/month',
                      'Transport: ~Rs. 5,000-10,000/month',
                      'Course materials: ~Rs. 20,000-40,000/year',
                      'Personal expenses: Variable',
                      'Visa/immigration (international): As applicable',
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-navy text-white" aria-labelledby="apply-heading">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
              <h2 id="apply-heading" className="font-display font-extrabold leading-tight text-3xl md:text-5xl lg:text-6xl mb-4">
                How to Apply
              </h2>
              <p className="text-lg md:text-xl text-white/80 leading-relaxed">
                Simple online application process. Early application recommended for best choice.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[
                { step: '01', title: 'Receive Offer', desc: 'Accept your academic offer from IIC' },
                { step: '02', title: 'Apply Online', desc: 'Complete accommodation application portal' },
                { step: '03', title: 'Pay Deposit', desc: 'Secure your room with refundable deposit' },
                { step: '04', title: 'Move In', desc: 'Collect keys at welcome week' },
              ].map((item, index) => (
                <article
                  key={index}
                  className="group relative p-6 text-center"
                >
                  <span className="font-display font-extrabold text-lime text-4xl mb-4 block">{item.step}</span>
                  <h3 className="font-display font-bold text-white text-xl mb-2 group-hover:text-lime transition-colors">{item.title}</h3>
                  <p className="text-white/70">{item.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <CTASection
          title="Secure Your Room"
          description="Applications for September 2024 open in March. Apply early for your preferred hall."
          primaryCta={{ text: 'Apply for Accommodation', href: '/contact' }}
          secondaryCta={{ text: 'Book a Tour', href: '/visit/campus-tour' }}
          variant="lime"
        />

        <ExploreLinks
          title="More Accommodation Information"
          links={[
            {
              label: 'Virtual Accommodation Tour',
              href: '/visit/virtual-tour',
              description: 'Explore our halls from anywhere with 360° views.',
            },
            {
              label: 'Private Rented Accommodation',
              href: '/life/accommodation',
              description: 'Approved providers and advice on private renting.',
            },
            {
              label: 'International Students',
              href: '/study/international',
              description: 'Airport pickup, early arrival, and cultural support.',
            },
            {
              label: 'Accessibility Needs',
              href: '/accessibility#accommodation',
              description: 'Adapted rooms and tailored support for disabilities.',
            },
            {
              label: 'FAQs',
              href: '/life/accommodation',
              description: 'Common questions about contracts, guests, and more.',
            },
          ]}
        />
      </main>
      <Footer />
    </>
  );
}
