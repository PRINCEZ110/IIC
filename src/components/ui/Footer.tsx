import Link from 'next/link';
import { universityInfo } from '@/data/university';
import { MapPin, Phone, Mail,  ShieldCheck, Award } from 'lucide-react';

export function Footer() {
  const footerColumns = [
    {
      heading: 'Study at IIC',
      links: [
        { label: 'Undergraduate Courses (BSc)', href: '/study/undergraduate' },
        { label: 'Postgraduate Taught (MSc)', href: '/study/postgraduate' },
        { label: 'Postgraduate Research (PhD)', href: '/study/research' },
        { label: 'Professional Certifications', href: '/study/professional' },
        { label: 'Course Search Directory', href: '/study/courses' },
        { label: 'Book an Open Day', href: '/events?type=open-day' },
        { label: 'International Students', href: '/study/international' },
        { label: 'Entry Requirements & Fees', href: '/admissions/requirements' },
      ],
    },
    {
      heading: 'Student Life & Campus',
      links: [
        { label: 'Campus Tour & Map', href: '/life/campus' },
        { label: 'Student Housing & Living', href: '/life/accommodation' },
        { label: 'Kathmandu Student Life', href: '/life/city' },
        { label: 'Students\' Union', href: '/life' },
        { label: 'Clubs, Hackathons & Tech', href: '/life' },
        { label: 'Career Support & Placements', href: '/life' },
        { label: 'Wellbeing & Student Advice', href: '/life' },
        { label: 'Virtual 360° Tour', href: '/visit/virtual-tour' },
      ],
    },
    {
      heading: 'Research & Innovation',
      links: [
        { label: 'Research Themes Overview', href: '/research' },
        { label: 'AI & Machine Learning Lab', href: '/research/ai-ml' },
        { label: 'Cybersecurity Centre', href: '/research/cybersecurity' },
        { label: 'Sustainable Computing', href: '/research/sustainable-computing' },
        { label: 'Data Science & Analytics', href: '/research/data-science' },
        { label: 'PhD Opportunities', href: '/research/phd-opportunities' },
        { label: 'Publications Repository', href: '/research/repository' },
        { label: 'Research Facilities for Hire', href: '/collaborate' },
      ],
    },
    {
      heading: 'Business & Partners',
      links: [
        { label: 'Industry Partnerships', href: '/collaborate' },
        { label: 'Hire Our Graduates', href: '/collaborate' },
        { label: 'Joint Research & R&D', href: '/collaborate' },
        { label: 'Startup Incubator', href: '/collaborate' },
        { label: 'Consultancy Services', href: '/collaborate' },
        { label: 'Alumni Network', href: '/alumni' },
        { label: 'News & Media Office', href: '/news' },
        { label: 'Contact Admissions', href: '/contact' },
      ],
    },
  ];

  const bottomLinks = [
    { label: 'Accessibility Statement', href: '/accessibility' },
    { label: 'Privacy & Cookie Policy', href: '/privacy' },
    { label: 'Academic Regulations', href: '/about' },
    { label: 'Terms & Conditions', href: '/terms' },
    { label: 'Sitemap', href: '/study/courses' },
  ];

  return (
    <footer className="bg-navy text-white border-t-4 border-lime" role="contentinfo">
      {/* Top Pre-footer with Quick Contacts & Accreditation */}
      <div className="border-b border-white/10 py-10 bg-navy-light/70">
        <div className="container flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Brand block */}
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-navy rounded-none flex items-center justify-center relative overflow-hidden border border-white/20">
              <span className="text-white font-display font-black text-2xl relative z-10">IIC</span>
              <div className="absolute inset-0 bg-lime transform skew-x-12 -translate-x-1/2 left-1/2 opacity-90" aria-hidden="true" />
            </div>
            <div>
              <span className="font-display font-extrabold text-white text-xl block leading-tight">
                {universityInfo.name}
              </span>
              <span className="text-xs text-lime font-medium">
                {universityInfo.tagline} · {universityInfo.motto}
              </span>
            </div>
          </div>

          {/* Accreditations & Affiliations */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-white/80">
            <div className="flex items-center gap-2 px-3.5 py-2 bg-white/5 border border-white/10">
              <ShieldCheck className="w-4 h-4 text-lime" />
              <span>Affiliations: {universityInfo.affiliations.join(' & ')}</span>
            </div>
            <div className="flex items-center gap-2 px-3.5 py-2 bg-white/5 border border-white/10">
              <Award className="w-4 h-4 text-lime" />
              <span>Accreditations: {universityInfo.accreditations.join(' · ')}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="container py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12">
          {/* Column 1: Contact & Address */}
          <div className="lg:col-span-1 space-y-6">
            <h3 className="font-display font-bold text-lg text-white pb-2 border-b border-white/10">
              Campus Location
            </h3>

            <div className="space-y-4 text-sm text-white/80">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-lime flex-shrink-0 mt-0.5" />
                <address className="not-italic leading-relaxed">
                  {universityInfo.address}<br />
                  Kathmandu, Nepal
                </address>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-lime flex-shrink-0" />
                <a href={`tel:${universityInfo.phone}`} className="hover:text-lime transition-colors">
                  {universityInfo.phone}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-lime flex-shrink-0" />
                <a href={`mailto:${universityInfo.email}`} className="hover:text-lime transition-colors">
                  {universityInfo.email}
                </a>
              </div>
            </div>

            {/* Social Icons */}
            <div className="pt-2">
              <span className="text-xs font-bold uppercase tracking-wider text-white/50 block mb-3">
                Connect With Us
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={universityInfo.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-white/10 hover:bg-lime hover:text-navy text-white flex items-center justify-center transition-colors"
                  aria-label="Facebook"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                </a>
                <a
                  href={universityInfo.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-white/10 hover:bg-lime hover:text-navy text-white flex items-center justify-center transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                </a>
                <a
                  href={universityInfo.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-white/10 hover:bg-lime hover:text-navy text-white flex items-center justify-center transition-colors"
                  aria-label="Twitter / X"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg>
                </a>
                <a
                  href={universityInfo.social.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-white/10 hover:bg-lime hover:text-navy text-white flex items-center justify-center transition-colors"
                  aria-label="YouTube"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.5.46 8.5.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>
                </a>
              </div>
            </div>
          </div>

          {/* Columns 2-5: Navigation Categories */}
          {footerColumns.map((col) => (
            <div key={col.heading} className="space-y-4">
              <h3 className="font-display font-bold text-lg text-white pb-2 border-b border-white/10">
                {col.heading}
              </h3>
              <ul className="space-y-2.5 text-sm" role="list">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-white/75 hover:text-lime transition-colors inline-block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar: Copyright & Legal */}
      <div className="border-t border-white/10 py-8 bg-navy-light text-xs text-white/60">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
          <p>
            © {new Date().getFullYear()} {universityInfo.name}. All rights reserved. Registered higher education institution in Nepal.
          </p>

          <nav className="flex flex-wrap items-center gap-x-6 gap-y-2" aria-label="Legal links">
            {bottomLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="hover:text-lime transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
