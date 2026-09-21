import { Metadata } from 'next';
import { Header } from '@/components/ui/Header';
import { Footer } from '@/components/ui/Footer';
import { Hero } from '@/sections/Hero';
import { CTASection } from '@/sections/CTASection';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy & Cookie Policy',
  description: 'How the International Institute of Computer Science collects, uses, and protects your personal data, and how we use cookies.',
};

const sections = [
  {
    title: 'Information We Collect',
    body: 'We collect information you provide directly — such as your name, email address, phone number, and application details when you enquire, apply, register for events, or subscribe to updates. We also collect limited technical data (device type, pages visited) to improve our website.',
  },
  {
    title: 'How We Use Your Information',
    body: 'Your information is used to respond to enquiries, process applications, administer admissions and enrolment, send service updates you have requested, and meet legal and regulatory obligations. We never sell your personal data to third parties.',
  },
  {
    title: 'Cookies',
    body: 'We use essential cookies to make the site work (such as remembering your preferences) and, with your consent, analytics cookies to understand aggregate usage. You can control cookies through your browser settings; blocking essential cookies may affect site functionality.',
  },
  {
    title: 'Data Retention & Security',
    body: 'We retain personal data only for as long as necessary for the purposes collected, or as required by law. Access is restricted to authorised staff, and data is stored on secured systems with appropriate technical safeguards.',
  },
  {
    title: 'Your Rights',
    body: 'You may request access to, correction of, or deletion of your personal data, and you may withdraw consent for marketing communications at any time by contacting us. We respond to verified requests within 30 days.',
  },
];

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="flex-1 pt-20 md:pt-24 lg:pt-32">
        <Hero
          headline="Privacy & Cookie Policy"
          subheadline="How we collect, use, and protect your personal information when you use our website and services."
          image="/images/repository-hero.jpg"
          imageAlt="Privacy and data protection at IIC"
          variant="page"
        />

        <section className="py-16 md:py-24 bg-white" aria-labelledby="privacy-heading">
          <div className="container">
            <div className="max-w-3xl mx-auto space-y-10">
              <p className="text-dark-grey text-lg leading-relaxed">
                Last updated: January 2025. This policy explains what data the International Institute of
                Computer Science collects and how it is handled. For questions, contact us via our{' '}
                <Link href="/contact" className="text-bright-blue font-medium hover:text-lime-deep transition-colors">
                  contact page
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
          title="Questions About Your Data?"
          description="Our data protection team is happy to help with access requests, corrections, or concerns."
          primaryCta={{ text: 'Contact Us', href: '/contact' }}
          secondaryCta={{ text: 'Back to Home', href: '/' }}
          variant="navy"
        />
      </main>
      <Footer />
    </>
  );
}
