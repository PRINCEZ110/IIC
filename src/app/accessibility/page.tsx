import { Metadata } from 'next';
import { Header } from '@/components/ui/Header';
import { Footer } from '@/components/ui/Footer';
import { Hero } from '@/sections/Hero';
import { CTASection } from '@/sections/CTASection';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Accessibility Statement',
  description: 'Our commitment to an accessible website and inclusive campus: support services, accessible accommodation, and campus access information.',
};

export default function AccessibilityPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="flex-1 pt-20 md:pt-24 lg:pt-32">
        <Hero
          headline="Accessibility Statement"
          subheadline="IIC is committed to inclusion: an accessible website, accessible facilities, and support for every student."
          image="/images/campus-hero.jpg"
          imageAlt="Accessible IIC campus"
          variant="page"
        />

        <section className="py-16 md:py-24 bg-white" aria-labelledby="a11y-heading">
          <div className="container">
            <div className="max-w-3xl mx-auto space-y-12">
              <article>
                <h2 id="a11y-heading" className="font-display font-bold text-navy text-2xl mb-3">
                  Our Commitment
                </h2>
                <p className="text-dark-grey leading-relaxed">
                  We aim to conform to WCAG 2.1 AA wherever possible: keyboard-navigable pages, visible
                  focus states, skip links, text alternatives for images, and reduced-motion support. If
                  you encounter a barrier, please{' '}
                  <Link href="/contact" className="text-bright-blue font-medium hover:text-lime-deep transition-colors">
                    tell us
                  </Link>{' '}
                  so we can fix it promptly.
                </p>
              </article>

              <article id="accommodation" className="border-t border-light-grey pt-10 scroll-mt-28">
                <h2 className="font-display font-bold text-navy text-2xl mb-3">
                  Accessible Accommodation
                </h2>
                <p className="text-dark-grey leading-relaxed mb-4">
                  Step-free rooms, adapted bathrooms, visual fire alarms, and assistance-dog-friendly halls
                  are available across our residences. Tell us about your access needs on the housing form
                  and our team will arrange a suitable room before you arrive.
                </p>
                <Link
                  href="/life/accommodation"
                  className="inline-flex items-center gap-2 text-navy font-semibold hover:text-lime-deep transition-colors"
                >
                  Explore accommodation options
                </Link>
              </article>

              <article id="map" className="border-t border-light-grey pt-10 scroll-mt-28">
                <h2 className="font-display font-bold text-navy text-2xl mb-3">
                  Campus Map & Step-Free Routes
                </h2>
                <p className="text-dark-grey leading-relaxed mb-4">
                  Our Kamaladi campus provides step-free access to teaching buildings, the library, and
                  student spaces, with accessible parking near the main entrance. For a guided accessible
                  visit or a map in an alternative format, book a tour and mention your requirements.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/visit/campus-tour"
                    className="inline-flex items-center gap-2 text-navy font-semibold hover:text-lime-deep transition-colors"
                  >
                    Book an accessible campus visit
                  </Link>
                  <Link
                    href="/visit/virtual-tour"
                    className="inline-flex items-center gap-2 text-navy font-semibold hover:text-lime-deep transition-colors"
                  >
                    Preview campus online
                  </Link>
                </div>
              </article>

              <article className="border-t border-light-grey pt-10">
                <h2 className="font-display font-bold text-navy text-2xl mb-3">
                  Learning Support
                </h2>
                <p className="text-dark-grey leading-relaxed">
                  Disabled students can access reasonable adjustments including extra time in assessments,
                  assistive technology loans, note-taking support, and exam arrangements. Contact the
                  admissions team early so support is ready from day one.
                </p>
              </article>
            </div>
          </div>
        </section>

        <CTASection
          title="Need an Adjustment?"
          description="Tell us what you need and our support team will arrange it with you confidentially."
          primaryCta={{ text: 'Contact Support', href: '/contact' }}
          secondaryCta={{ text: 'Student Life', href: '/life' }}
          variant="lime"
        />
      </main>
      <Footer />
    </>
  );
}
