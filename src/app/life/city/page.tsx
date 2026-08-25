import { Metadata } from 'next';
import { Header } from '@/components/ui/Header';
import { Footer } from '@/components/ui/Footer';
import { Hero } from '@/sections/Hero';
import { CTASection } from '@/sections/CTASection';
import { ExploreLinks } from '@/sections/ExploreLinks';
import { StatsSection } from '@/sections/StatsSection';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Kathmandu - Your Student City',
  description: 'Discover why Kathmandu is one of Asia\'s most exciting and affordable student cities. Culture, cost of living, transport, and entertainment.',
};

const cityStats = [
  { value: '1.5M', label: 'Population', suffix: '' },
  { value: 'Top 10', label: 'Most Affordable Asian Cities', suffix: '' },
  { value: '1,400m', label: 'Altitude', suffix: '' },
  { value: '7', label: 'UNESCO World Heritage Sites', suffix: '' },
];

const neighborhoods = [
  { name: 'Thamel', desc: 'Tourist hub with restaurants, shops, nightlife', distance: '15 min', icon: '🌙' },
  { name: 'Patan', desc: 'Ancient city with temples, museums, cafes', distance: '20 min', icon: '🏛️' },
  { name: 'Boudha', desc: 'Tibetan quarter, stupa, monasteries', distance: '25 min', icon: '🕉️' },
  { name: 'Lazimpat', desc: 'Embassy area, upscale dining, parks', distance: '10 min', icon: '🌳' },
];

export default function CityPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="flex-1 pt-16 md:pt-20 lg:pt-24">
        <Hero
          headline="Kathmandu.\nYour Student City."
          subheadline="Ancient temples meet modern tech scene. Affordable living, incredible food, and the Himalayas on your doorstep."
          primaryCta={{ text: 'Explore Neighbourhoods', href: '/life/city#neighbourhoods' }}
          secondaryCta={{ text: 'Cost of Living', href: '/life/city#costs' }}
          image="/images/kathmandu-hero.jpg"
          imageAlt="Kathmandu cityscape with temples and mountains"
          variant="life"
        />

        <StatsSection
          stats={cityStats}
          variant="navy"
        />

        <section className="py-16 md:py-24 bg-white" aria-labelledby="neighbourhoods-heading" id="neighbourhoods">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
              <h2 id="neighbourhoods-heading" className="font-display font-extrabold text-navy leading-tight text-3xl md:text-5xl lg:text-6xl mb-4">
                Neighbourhoods to Explore
              </h2>
              <p className="text-lg md:text-xl text-dark-grey leading-relaxed">
                Each area of Kathmandu has its own character. All within easy reach of campus.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {neighborhoods.map((area, index) => (
                <article
                  key={index}
                  className="group bg-white border border-light-grey hover:border-lime hover:shadow-xl transition-all duration-300 p-6 h-full"
                >
                  <div className="text-4xl mb-4" aria-hidden="true">{area.icon}</div>
                  <h3 className="font-display font-bold text-navy text-xl mb-2 group-hover:text-lime transition-colors">{area.name}</h3>
                  <p className="text-dark-grey text-sm mb-3">{area.desc}</p>
                  <div className="flex items-center gap-2 text-sm text-lime font-medium">
                    <span aria-hidden="true">📍</span>
                    <span>{area.distance} from campus</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-off-white" aria-labelledby="culture-heading">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="relative aspect-[4/3] bg-light-grey overflow-hidden">
                <img
                  src="/images/kathmandu-culture.jpg"
                  alt="Cultural festival in Kathmandu"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-6">
                <h2 id="culture-heading" className="font-display font-extrabold text-navy leading-tight text-3xl md:text-5xl lg:text-6xl">
                  Culture at Your Doorstep
                </h2>
                <div className="space-y-4 text-dark-grey leading-relaxed">
                  <p>Kathmandu is a living museum. Seven UNESCO World Heritage Sites sit within the valley, from the ancient squares of Patan and Bhaktapur to the sacred stupas of Swayambhu and Boudha.</p>
                  <p>But it&apos;s not just history. The city pulses with contemporary culture: art galleries in Patan, live music in Thamel, film festivals, tech meetups, and a thriving startup scene.</p>
                </div>
                <ul className="space-y-3" role="list">
                  {[
                    '7 UNESCO World Heritage Sites in the valley',
                    'Year-round festivals: Dashain, Tihar, Holi, Indra Jatra',
                    'Contemporary art scene: galleries, studios, street art',
                    'Live music: jazz, rock, traditional, electronic',
                    'Tech meetups & hackathons every week',
                    'Film festivals: KIMFF, Kathmandu International Film Festival',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-lime rounded-full mt-2 flex-shrink-0" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-white" aria-labelledby="costs-heading" id="costs">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
              <h2 id="costs-heading" className="font-display font-extrabold text-navy leading-tight text-3xl md:text-5xl lg:text-6xl mb-4">
                Cost of Living
              </h2>
              <p className="text-lg md:text-xl text-dark-grey leading-relaxed">
                One of Asia&apos;s most affordable capital cities. Your money goes further here.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[
                { category: 'Accommodation', items: ['Halls: Rs. 15,000-18,000/mo', 'Shared flat: Rs. 10,000-15,000/mo', 'Private studio: Rs. 20,000-30,000/mo'] },
                { category: 'Food', items: ['Dal bhat (local meal): Rs. 150-300', 'Restaurant meal: Rs. 400-800', 'Groceries/month: Rs. 15,000-25,000'] },
                { category: 'Transport', items: ['Bus: Rs. 15-30 per ride', 'Taxi (short): Rs. 200-400', 'Monthly bus pass: Rs. 1,500'] },
                { category: 'Entertainment', items: ['Cinema: Rs. 300-500', 'Gym: Rs. 2,000-4,000/mo', 'Weekend trip: Rs. 5,000-15,000'] },
              ].map((category, index) => (
                <article
                  key={index}
                  className="bg-white border border-light-grey hover:border-lime hover:shadow-xl transition-all duration-300 p-6 h-full"
                >
                  <h3 className="font-display font-bold text-navy text-lg mb-4">{category.category}</h3>
                  <ul className="space-y-2 text-dark-grey text-sm" role="list">
                    {category.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-lime rounded-full flex-shrink-0" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-dark-grey mb-4">Estimated monthly budget (excluding tuition): <span className="font-display font-bold text-lime text-2xl">Rs. 35,000 - 55,000</span></p>
              <Link href="/life/city/budget-calculator" className="inline-flex items-center gap-2 text-navy font-semibold hover:text-lime transition-colors">
                Try Our Budget Calculator
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-navy text-white" aria-labelledby="getting-around-heading">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
              <h2 id="getting-around-heading" className="font-display font-extrabold leading-tight text-3xl md:text-5xl lg:text-6xl mb-4">
                Getting Around
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: '🚌', title: 'Public Bus', desc: 'Extensive network, very cheap (Rs. 15-30), connects all major areas' },
                { icon: '🚕', title: 'Ride Apps', desc: 'Pathao, Tootle - motorbike taxis and cars, affordable and convenient' },
                { icon: '🚶', title: 'Walkable Campus', desc: 'Campus is central - most amenities within 15 min walk' },
              ].map((item, index) => (
                <article
                  key={index}
                  className="group bg-white/10 border border-white/20 hover:border-lime hover:bg-white/20 transition-all duration-300 p-6 h-full text-center"
                >
                  <div className="text-4xl mb-4" aria-hidden="true">{item.icon}</div>
                  <h3 className="font-display font-bold text-white text-xl mb-2 group-hover:text-lime transition-colors">{item.title}</h3>
                  <p className="text-white/70">{item.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-white" aria-labelledby="weekend-heading">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
              <h2 id="weekend-heading" className="font-display font-extrabold text-navy leading-tight text-3xl md:text-5xl lg:text-6xl mb-4">
                Weekend Adventures
              </h2>
              <p className="text-lg md:text-xl text-dark-grey leading-relaxed">
                From Himalayan treks to ancient cities, adventure is always close.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'Nagarkot', desc: 'Sunrise over Everest, 1.5 hrs', icon: '🏔️' },
                { title: 'Pokhara', desc: 'Lakeside city, adventure sports, 6 hrs', icon: '🛶' },
                { title: 'Chitwan', desc: 'Jungle safari, rhinos & tigers, 5 hrs', icon: '🦏' },
                { title: 'Bhaktapur', desc: 'Medieval city, pottery, 30 mins', icon: '🏺' },
              ].map((item, index) => (
                <article
                  key={index}
                  className="group bg-white border border-light-grey hover:border-lime hover:shadow-xl transition-all duration-300 p-6 h-full text-center"
                >
                  <div className="text-4xl mb-4" aria-hidden="true">{item.icon}</div>
                  <h3 className="font-display font-bold text-navy text-xl mb-2 group-hover:text-lime transition-colors">{item.title}</h3>
                  <p className="text-dark-grey">{item.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <CTASection
          title="Ready to Explore?"
          description="Visit Kathmandu and see why students fall in love with this city."
          primaryCta={{ text: 'Book a Campus Tour', href: '/visit/campus-tour' }}
          secondaryCta={{ text: 'Virtual City Tour', href: '/life/city/virtual-tour' }}
          variant="blue"
        />

        <ExploreLinks
          title="More About Kathmandu"
          links={[
            {
              label: 'International Student Guide',
              href: '/life/city/international-guide',
              description: 'Visa, registration, banking, and settling in for international students.',
            },
            {
              label: 'Health & Safety',
              href: '/life/city/health-safety',
              description: 'Hospitals, pharmacies, emergency numbers, and staying safe.',
            },
            {
              label: 'Food Guide',
              href: '/life/city/food',
              description: 'Best student-friendly restaurants, cafes, and street food.',
            },
            {
              label: 'Weekend Trip Planner',
              href: '/life/city/weekends',
              description: 'Curated itineraries for 1-3 day trips from Kathmandu.',
            },
          ]}
        />
      </main>
      <Footer />
    </>
  );
}