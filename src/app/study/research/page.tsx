import { Metadata } from 'next';
import { Header } from '@/components/ui/Header';
import { Footer } from '@/components/ui/Footer';
import { Hero } from '@/sections/Hero';
import { CTASection } from '@/sections/CTASection';
import { ExploreLinks } from '@/sections/ExploreLinks';
import { researchers } from '@/data/university';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Postgraduate Research Degrees',
  description: 'Contribute to cutting-edge research with our MPhil and PhD programmes. Work with world-leading researchers in AI, Cybersecurity, Data Science, and Sustainable Computing.',
};

export default function ResearchDegreesPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="flex-1 pt-20 md:pt-24 lg:pt-32">
        <Hero
          headline="Postgraduate\nResearch Degrees"
          subheadline="Push the boundaries of knowledge with our MPhil and PhD programmes. Join a vibrant research community tackling global challenges through computing."
          primaryCta={{ text: 'Find a Supervisor', href: '/research/researchers' }}
          secondaryCta={{ text: 'Funded Opportunities', href: '/research/phd-opportunities' }}
          image="/images/research-hero.jpg"
          imageAlt="Research at IIC"
          variant="research"
        />

        <section className="py-16 md:py-24 bg-white" aria-labelledby="research-degrees-heading">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
              <h2 id="research-degrees-heading" className="font-display font-extrabold text-navy leading-tight text-3xl md:text-5xl lg:text-6xl mb-4">
                Research Degree Programmes
              </h2>
              <p className="text-lg md:text-xl text-dark-grey leading-relaxed">
                Choose the research pathway that matches your ambition and experience.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              <article className="bg-white border border-light-grey hover:border-lime transition-all duration-300 p-8 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-12 h-12 bg-lime/10 text-lime-deep font-display font-bold text-2xl flex items-center justify-center">MPhil</span>
                </div>
                <h3 className="font-display font-bold text-navy text-2xl mb-4">Master of Philosophy (MPhil)</h3>
                <ul className="space-y-3 text-dark-grey" role="list">
                  <li className="flex items-start gap-3"><span className="w-2 h-2 bg-lime rounded-full mt-2 flex-shrink-0" aria-hidden="true" /><span>Duration: 2 years full-time / 4 years part-time</span></li>
                  <li className="flex items-start gap-3"><span className="w-2 h-2 bg-lime rounded-full mt-2 flex-shrink-0" aria-hidden="true" /><span>Research thesis of up to 50,000 words</span></li>
                  <li className="flex items-start gap-3"><span className="w-2 h-2 bg-lime rounded-full mt-2 flex-shrink-0" aria-hidden="true" /><span>Can upgrade to PhD after successful review</span></li>
                  <li className="flex items-start gap-3"><span className="w-2 h-2 bg-lime rounded-full mt-2 flex-shrink-0" aria-hidden="true" /><span>Ideal for those exploring research before committing to PhD</span></li>
                </ul>
                <Link href="/study/courses/mphil-cs" className="inline-flex items-center gap-2 text-navy font-medium hover:text-lime-deep transition-colors mt-6 group">
                  Learn More
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </Link>
              </article>

              <article className="bg-navy text-white p-8 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-12 h-12 bg-lime text-navy font-display font-bold text-2xl flex items-center justify-center">PhD</span>
                </div>
                <h3 className="font-display font-bold text-white text-2xl mb-4">Doctor of Philosophy (PhD)</h3>
                <ul className="space-y-3 text-white/80" role="list">
                  <li className="flex items-start gap-3"><span className="w-2 h-2 bg-lime rounded-full mt-2 flex-shrink-0" aria-hidden="true" /><span>Duration: 3-4 years full-time / 5-6 years part-time</span></li>
                  <li className="flex items-start gap-3"><span className="w-2 h-2 bg-lime rounded-full mt-2 flex-shrink-0" aria-hidden="true" /><span>Original research thesis of up to 100,000 words</span></li>
                  <li className="flex items-start gap-3"><span className="w-2 h-2 bg-lime rounded-full mt-2 flex-shrink-0" aria-hidden="true" /><span>Make an original contribution to knowledge</span></li>
                  <li className="flex items-start gap-3"><span className="w-2 h-2 bg-lime rounded-full mt-2 flex-shrink-0" aria-hidden="true" /><span>Opportunity to teach and present at conferences</span></li>
                </ul>
                <Link href="/study/courses/phd-cs" className="inline-flex items-center gap-2 text-white font-medium hover:text-lime transition-colors mt-6 group">
                  Learn More
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </Link>
              </article>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-navy text-white" aria-labelledby="research-areas-heading">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
              <h2 id="research-areas-heading" className="font-display font-extrabold leading-tight text-3xl md:text-5xl lg:text-6xl mb-4">
                Research Areas
              </h2>
              <p className="text-lg md:text-xl text-white/80 leading-relaxed">
                Our research spans four key themes. Find a supervisor whose work aligns with your interests.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'Sustainable Computing', desc: 'Green algorithms, energy-efficient systems, sustainable software', count: '8 researchers', href: '/research/sustainable-computing' },
                { title: 'AI & Machine Learning', desc: 'NLP, computer vision, ethical AI, healthcare applications', count: '12 researchers', href: '/research/ai-ml' },
                { title: 'Cybersecurity', desc: 'Network security, cryptography, privacy, critical infrastructure', count: '10 researchers', href: '/research/cybersecurity' },
                { title: 'Data Science', desc: 'Big data analytics, predictive modelling, visualisation', count: '7 researchers', href: '/research/data-science' },
              ].map((area, index) => (
                <article
                  key={index}
                  className="group bg-white/10 border border-white/20 hover:border-lime hover:bg-white/20 transition-all duration-300 p-6 h-full"
                >
                  <h3 className="font-display font-bold text-white text-xl mb-2 group-hover:text-lime transition-colors">{area.title}</h3>
                  <p className="text-white/60 text-sm mb-3">{area.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-lime-deep text-sm font-medium">{area.count}</span>
                    <Link href={area.href} className="text-white font-medium hover:text-lime transition-colors inline-flex items-center gap-1 text-sm group">
                      Explore
                      <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-white" aria-labelledby="potential-supervisors-heading">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
              <h2 id="potential-supervisors-heading" className="font-display font-extrabold text-navy leading-tight text-3xl md:text-5xl lg:text-6xl mb-4">
                Potential Supervisors
              </h2>
              <p className="text-lg md:text-xl text-dark-grey leading-relaxed">
                Our research-active faculty are looking for motivated PhD candidates. Explore their profiles and research interests.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {researchers.slice(0, 6).map((researcher) => (
                <article
                  key={researcher.id}
                  className="group bg-white border border-light-grey hover:border-lime hover:shadow-xl transition-all duration-300 overflow-hidden h-full"
                >
                  <Link href={`/research/researchers/${researcher.id}`} className="block">
                    <div className="relative aspect-square overflow-hidden bg-light-grey">
                      <Image
                src={researcher.image}
                alt={researcher.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
              />
                    </div>
                    <div className="p-5">
                      <h3 className="font-display font-bold text-navy text-lg mb-1 group-hover:text-lime-deep transition-colors">{researcher.name}</h3>
                      <p className="text-lime-deep text-sm font-medium mb-2">{researcher.title}</p>
                      <p className="text-medium-grey text-sm mb-3">{researcher.department}</p>
                      <p className="text-dark-grey text-sm line-clamp-2">{researcher.bio}</p>
                    </div>
                  </Link>
                </article>
              ))}
            </div>

            <div className="text-center mt-10">
              <Link href="/research/researchers" className="inline-flex items-center gap-2 text-navy font-semibold hover:text-lime-deep transition-colors text-lg">
                View All Researchers ({researchers.length}+)
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-off-white" aria-labelledby="funded-heading">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
              <h2 id="funded-heading" className="font-display font-extrabold text-navy leading-tight text-3xl md:text-5xl lg:text-6xl mb-4">
                Funded PhD Opportunities
              </h2>
              <p className="text-lg md:text-xl text-dark-grey leading-relaxed">
                We offer a range of fully-funded PhD studentships covering tuition fees and providing a competitive stipend.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: 'IIC Doctoral Scholarships', desc: 'Full tuition waiver + monthly stipend for 3 years. Open to all nationalities.', deadline: 'Rolling', href: '/research/phd-opportunities' },
                { title: 'Government Research Grants', desc: 'Funded by Nepal Research Council and Ministry of Education for priority areas.', deadline: 'Annual', href: '/research/phd-opportunities' },
                { title: 'Industry-Sponsored PhDs', desc: 'Collaborative projects with partner companies including stipend and industry placement.', deadline: 'Varies', href: '/research/phd-opportunities' },
                { title: 'International Funding', desc: 'Commonwealth, DAAD, and other international scholarship programmes.', deadline: 'Annual', href: '/research/phd-opportunities' },
              ].map((funding, index) => (
                <article
                  key={index}
                  className="bg-white border border-light-grey hover:border-lime hover:shadow-xl transition-all duration-300 p-6 h-full"
                >
                  <h3 className="font-display font-bold text-navy text-xl mb-2">{funding.title}</h3>
                  <p className="text-dark-grey mb-3">{funding.desc}</p>
                  <div className="flex items-center justify-between text-sm text-medium-grey mb-4">
                    <span>Deadline: <span className="font-medium text-navy">{funding.deadline}</span></span>
                  </div>
                  <Link href={funding.href} className="inline-flex items-center gap-2 text-lime-deep font-medium hover:text-lime-deep transition-colors group">
                    View Details
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <CTASection
          title="Ready to Start Your Research Journey?"
          description="Contact our Graduate Research School for guidance on proposals, funding, and finding the right supervisor."
          primaryCta={{ text: 'Contact Graduate Research', href: '/contact' }}
          secondaryCta={{ text: 'View All Opportunities', href: '/research/phd-opportunities' }}
          variant="lime"
        />

        <ExploreLinks
          title="Research Degree Resources"
          links={[
            {
              label: 'How to Apply',
              href: '/admissions/apply',
              description: 'Step-by-step guide to the research degree application process.',
            },
            {
              label: 'Research Proposal Guidelines',
              href: '/contact',
              description: 'Tips and templates for writing a strong research proposal.',
            },
            {
              label: 'Current PhD Students',
              href: '/research/researchers?type=phd-students',
              description: 'Meet our current doctoral researchers and their projects.',
            },
            {
              label: 'Research Facilities',
              href: '/life/campus',
              description: 'Explore our specialist labs and research centres.',
            },
          ]}
        />
      </main>
      <Footer />
    </>
  );
}
