import Link from 'next/link';
import { universityInfo, navigationItems } from '@/data/university';
import { MapPin, Phone, Mail, ArrowRight } from 'lucide-react';

export function Footer() {
  const footerColumns = [
    {
      heading: 'Study',
      links: [
        { label: 'Undergraduate Courses', href: '/study/undergraduate' },
        { label: 'Postgraduate Taught', href: '/study/postgraduate' },
        { label: 'Postgraduate Research', href: '/study/research' },
        { label: 'Professional Courses', href: '/study/professional' },
        { label: 'Course Search', href: '/study/courses' },
        { label: 'Open Days', href: '/events?type=open-day' },
        { label: 'International Students', href: '/study/international' },
        { label: 'How to Apply', href: '/admissions/apply' },
      ],
    },
    {
      heading: 'Life at IIC',
      links: [
        { label: 'Campus & Facilities', href: '/life/campus' },
        { label: 'Accommodation', href: '/life/accommodation' },
        { label: 'Kathmandu Life', href: '/life/city' },
        { label: 'Students\' Union', href: '/life/students-union' },
        { label: 'Clubs & Societies', href: '/life/clubs' },
        { label: 'Sport & Fitness', href: '/life/sport' },
        { label: 'Careers Support', href: '/life/careers' },
        { label: 'Wellbeing & Support', href: '/life/wellbeing' },
      ],
    },
    {
      heading: 'Research',
      links: [
        { label: 'Research Themes', href: '/research' },
        { label: 'Our Researchers', href: '/research/researchers' },
        { label: 'Research Centres', href: '/research/centres' },
        { label: 'PhD Opportunities', href: '/research/phd-opportunities' },
        { label: 'Publications', href: '/research/repository' },
        { label: 'Funding & Grants', href: '/research/funding' },
        { label: 'Industry Partners', href: '/collaborate/research' },
        { label: 'Research Impact', href: '/research/impact' },
      ],
    },
    {
      heading: 'Collaborate',
      links: [
        { label: 'Business Partnerships', href: '/collaborate/business' },
        { label: 'Hire Our Graduates', href: '/collaborate/hire' },
        { label: 'Research Collaboration', href: '/collaborate/research' },
        { label: 'Innovation Centre', href: '/collaborate/innovation-centre' },
        { label: 'Consultancy Services', href: '/collaborate/consultancy' },
        { label: 'Facilities Hire', href: '/collaborate/facilities' },
        { label: 'International Partners', href: '/collaborate/international' },
        { label: 'Contact Us', href: '/collaborate/contact' },
      ],
    },
    {
      heading: 'About IIC',
      links: [
        { label: 'Welcome from Director', href: '/about/director' },
        { label: 'History & Heritage', href: '/about/history' },
        { label: 'Vision & Values', href: '/about/vision' },
        { label: 'Governance', href: '/about/governance' },
        { label: 'Rankings & Awards', href: '/about/rankings' },
        { label: 'Campus Information', href: '/about/campus' },
        { label: 'Policies & Regulations', href: '/about/policies' },
        { label: 'Contact', href: '/contact' },
      ],
    },
  ];

  const socialLinks = [
    {
      name: 'Facebook',
      href: universityInfo.social.facebook,
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
      ),
    },
    {
      name: 'X',
      href: universityInfo.social.twitter,
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      href: universityInfo.social.linkedin,
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      href: universityInfo.social.instagram,
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      ),
    },
    {
      name: 'YouTube',
      href: universityInfo.social.youtube,
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.5.46 8.5.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
          <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
        </svg>
      ),
    },
  ];

  const bottomLinks = [
    { label: 'Help Centre', href: '/help' },
    { label: 'Accessibility', href: '/accessibility' },
    { label: 'Privacy & Cookies', href: '/privacy' },
    { label: 'Policies & Regulations', href: '/about/policies' },
    { label: 'Freedom of Information', href: '/about/foi' },
    { label: 'Modern Slavery Statement', href: '/about/modern-slavery' },
    { label: 'Terms & Conditions', href: '/terms' },
  ];

  return (
    <footer className="bg-navy text-white" role="contentinfo">
      <div className="container py-16 md:py-24 lg:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 md:gap-12 mb-16">
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="flex items-center gap-3" aria-label="IIC Home">
              <div className="w-12 h-12 bg-white/10 rounded-none flex items-center justify-center relative overflow-hidden">
                <span className="text-white font-display font-extrabold text-2xl relative z-10">IIC</span>
                <div className="absolute inset-0 bg-lime transform skew-x-12 -translate-x-1/2 left-1/2" aria-hidden="true" />
              </div>
              <span className="font-display font-bold text-white text-lg leading-tight">
                International Institute<br />
                <span className="font-normal text-sm text-white/60">of Computer Science</span>
              </span>
            </Link>

            <p className="text-white/60 text-base leading-relaxed max-w-xs">
              Nepal&apos;s premier institution for IT and Computer Science education since 2000.
              Empowering the next generation of technology leaders.
            </p>

            <address className="not-italic space-y-4 text-white/60">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5 text-lime" aria-hidden="true" />
                <div>
                  <p className="font-medium text-white">Get in Touch</p>
                  <p>{universityInfo.address}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 flex-shrink-0 text-lime" aria-hidden="true" />
                <a href={`tel:${universityInfo.phone}`} className="hover:text-lime transition-colors">
                  {universityInfo.phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 flex-shrink-0 text-lime" aria-hidden="true" />
                <a href={`mailto:${universityInfo.email}`} className="hover:text-lime transition-colors">
                  {universityInfo.email}
                </a>
              </div>
            </address>

            <div className="flex items-center gap-4 pt-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-none flex items-center justify-center text-white/70 hover:text-lime hover:bg-white/20 transition-all duration-200 group"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {footerColumns.map((column) => (
            <nav key={column.heading} aria-labelledby={`footer-${column.heading.toLowerCase()}`}>
              <h2 id={`footer-${column.heading.toLowerCase()}`} className="font-semibold text-white text-base uppercase tracking-wider mb-4">
                {column.heading}
              </h2>
              <ul className="space-y-3" role="list">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-white/60 hover:text-lime transition-colors text-sm flex items-center gap-2 group"
                    >
                      {link.label}
                      <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" aria-hidden="true" />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="flex flex-wrap items-center gap-4 text-white/50 text-sm">
              {bottomLinks.map((link, index) => (
                <span key={link.href} className="flex items-center gap-2">
                  <Link href={link.href} className="hover:text-lime transition-colors">
                    {link.label}
                  </Link>
                  {index < bottomLinks.length - 1 && <span aria-hidden="true">·</span>}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-4 text-white/50 text-sm">
              <p>&copy; {new Date().getFullYear()} {universityInfo.name}. All rights reserved.</p>
              <Link href="/accessibility" className="hover:text-lime transition-colors">
                Accessibility Statement
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}