import { Metadata } from 'next';
import { Header } from '@/components/ui/Header';
import { Footer } from '@/components/ui/Footer';
import { Hero } from '@/sections/Hero';
import { CTASection } from '@/sections/CTASection';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description: 'Terms of use for the International Institute of Computer Science website.',
};

const sections = [
  {
    title: 'Using This Website',
    body: 'This website provides general information about IIC programmes, admissions, research, and campus life. Programme details, fees, and dates may change; the authoritative source is your offer letter and enrolment documentation.',
  },
  {
    title: 'Intellectual Property',
    body: 'Text, images, logos, and design on this site belong to IIC or its licensors (including photography credited to their creators). You may view and print pages for personal, non-commercial use. Any other reproduction requires written permission.',
  },
  {
    title: 'Applications & Enquiries',
    body: 'Submitting an enquiry or application does not guarantee an offer of admission. All admissions decisions are made according to published entry requirements and the availability of places.',
  },
  {
    title: 'External Links',
    body: 'Links to third-party sites are provided for convenience. IIC is not responsible for the content, accuracy, or availability of external websites.',
  },
  {
    title: 'Liability',
    body: 'We work to keep information accurate and the site available, but provide it without warranties to the extent permitted by law. Nothing in these terms limits liability that cannot legally be limited.',
  },
];

export default function TermsPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="flex-1 pt-20 md:pt-24 lg:pt-32">
        <Hero
          headline="Terms & Conditions"
          subheadline="The rules for using this website and its content."
          image="/images/about-hero.jpg"
          imageAlt="Terms of use"
          variant="page"
        />

        <section className="py-16 md:py-24 bg-white" aria-labelledby="terms-heading">
          <div className="container">
            <div className="max-w-3xl mx-auto space-y-10">
              <p className="text-dark-grey text-lg leading-relaxed">
                Last updated: January 2025. By using this website you agree to these terms. Questions?{' '}
                <Link href="/contact" className="text-bright-blue font-medium hover:text-lime-deep transition-colors">
                  Contact us
                </Link>
                .
              </p>
              {sections.map((s, i) => (
                <article key={s.title} className="border-t border-light-grey pt-8">
                  <h2 className="font-display font-bold text-navy text-2xl mb-3">
                    {i + 1}. {s.title}
                  </h2>
                  <p className="text-dark-grey leading-relaxed">{s.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <CTASection
          title="Ready to Apply?"
          description="Start your application today and join Nepal's leading IT institute."
          primaryCta={{ text: 'Apply Now', href: '/admissions/apply' }}
          secondaryCta={{ text: 'Entry Requirements', href: '/admissions/requirements' }}
          variant="navy"
        />
      </main>
      <Footer />
    </>
  );
}
