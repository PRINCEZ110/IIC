'use client';

import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronRight } from 'lucide-react';
import { useReducedMotion } from '@/hooks/useMediaQuery';
import { researchThemes, news, events } from '@/data/university';
import Link from 'next/link';
import Image from 'next/image';

interface MegaMenuProps {
  isOpen: boolean;
  activeMenu: string | null;
  onClose: () => void;
}

const megaMenuContent: Record<string, {
  title: string;
  columns: { heading: string; links: { label: string; href: string; description?: string }[] }[];
  featured?: {
    title: string;
    description: string;
    image: string;
    cta: { text: string; href: string };
  };
}> = {
  study: {
    title: 'Study',
    columns: [
      {
        heading: 'Undergraduate',
        links: [
          { label: 'BSc (Hons) Computing', href: '/study/courses/bsc-computing', description: '4 years • Full-time' },
          { label: 'BSc (Hons) Software Engineering', href: '/study/courses/bsc-software-engineering', description: '4 years • Full-time' },
          { label: 'BSc (Hons) Data Science', href: '/study/courses/bsc-data-science', description: '4 years • Full-time' },
          { label: 'BSc (Hons) Cyber Security', href: '/study/courses/bsc-cybersecurity', description: '4 years • Full-time' },
          { label: 'All Undergraduate Courses', href: '/study/undergraduate', description: 'View all 12 programmes' },
        ],
      },
      {
        heading: 'Postgraduate Taught',
        links: [
          { label: 'MSc Computing', href: '/study/courses/msc-computing', description: '2 years • Full-time' },
          { label: 'MSc Artificial Intelligence', href: '/study/courses/msc-ai', description: '2 years • Full-time' },
          { label: 'MSc Data Science', href: '/study/courses/msc-data-science', description: '2 years • Full-time' },
          { label: 'MSc Software Engineering', href: '/study/courses/msc-software-engineering', description: '2 years • Full-time' },
          { label: 'All Postgraduate Courses', href: '/study/postgraduate', description: 'View all 8 programmes' },
        ],
      },
      {
        heading: 'Postgraduate Research',
        links: [
          { label: 'MPhil Computer Science', href: '/study/courses/mphil-cs', description: '2 years • Full-time' },
          { label: 'PhD Computer Science', href: '/study/courses/phd-cs', description: '3-4 years • Full-time' },
          { label: 'PhD Data Science', href: '/study/courses/phd-ds', description: '3-4 years • Full-time' },
          { label: 'Funded PhD Opportunities', href: '/research/phd-opportunities', description: 'Scholarships available' },
        ],
      },
      {
        heading: 'More Study Options',
        links: [
          { label: 'Professional & Short Courses', href: '/study/professional', description: 'Certifications & Bootcamps' },
          { label: 'Online & Distance Learning', href: '/study', description: 'Flexible study options' },
          { label: 'International Students', href: '/study/international', description: 'Entry requirements & visas' },
          { label: 'Open Days & Events', href: '/events?type=open-day', description: 'Visit our campus' },
        ],
      },
    ],
    featured: {
      title: 'Find Your Course',
      description: 'Use our course finder to discover the perfect programme for your career goals.',
      image: '/images/mega-study.jpg',
      cta: { text: 'Search All Courses', href: '/study/courses' },
    },
  },
  life: {
    title: 'Life at IIC',
    columns: [
      {
        heading: 'Campus & Facilities',
        links: [
          { label: 'Our Campus', href: '/life/campus', description: 'Modern facilities in Kathmandu' },
          { label: 'Library & Learning Resources', href: '/life/campus', description: '50,000+ volumes & digital access' },
          { label: 'Labs & Research Centres', href: '/life/campus', description: '8 specialised laboratories' },
          { label: 'Student Spaces', href: '/life/campus', description: 'Collaborative & social areas' },
        ],
      },
      {
        heading: 'Accommodation',
        links: [
          { label: 'On-Campus Halls', href: '/life/accommodation', description: 'Guaranteed for first years' },
          { label: 'Private Accommodation', href: '/life/accommodation', description: 'Approved partner providers' },
          { label: 'Costs & Applications', href: '/life/accommodation', description: 'Fees & how to apply' },
          { label: 'Virtual Accommodation Tour', href: '/visit/virtual-tour', description: 'Explore from anywhere' },
        ],
      },
      {
        heading: 'Student Experience',
        links: [
          { label: 'Students\' Union', href: '/life', description: 'Your voice, your community' },
          { label: 'Clubs & Societies', href: '/life', description: '100+ student-led groups' },
          { label: 'Sport & Fitness', href: '/life', description: 'Teams, classes & facilities' },
          { label: 'Events & Social Life', href: '/events', description: 'What\'s on this term' },
        ],
      },
      {
        heading: 'Support & Careers',
        links: [
          { label: 'Careers & Employability', href: '/life', description: '94% graduate employment' },
          { label: 'Wellbeing & Support', href: '/life', description: 'Health, counselling & advice' },
          { label: 'International Student Support', href: '/study/international', description: 'Visa, orientation & community' },
          { label: 'Disability & Accessibility', href: '/accessibility', description: 'Inclusive learning support' },
        ],
      },
    ],
    featured: {
      title: 'Kathmandu: Your Student City',
      description: 'Experience the vibrant culture, affordable living, and tech scene of Nepal\'s capital.',
      image: '/images/mega-life.jpg',
      cta: { text: 'Explore Kathmandu', href: '/life/city' },
    },
  },
  research: {
    title: 'Research',
    columns: [
      {
        heading: 'Research Themes',
        links: researchThemes.map(t => ({
          label: t.title,
          href: t.href,
          description: t.subtitle,
        })),
      },
      {
        heading: 'Research Centres',
        links: [
          { label: 'Centre for Sustainable Computing', href: '/research/centres', description: 'Green technology research' },
          { label: 'AI & Machine Learning Lab', href: '/research/centres', description: 'Intelligent systems' },
          { label: 'Cybersecurity Research Centre', href: '/research/centres', description: 'Digital protection' },
          { label: 'Data Science Institute', href: '/research/centres', description: 'Analytics & insights' },
        ],
      },
      {
        heading: 'Researchers & Projects',
        links: [
          { label: 'Our Researchers', href: '/research/researchers', description: '45+ active researchers' },
          { label: 'Current Projects', href: '/research', description: '25+ funded projects' },
          { label: 'PhD Opportunities', href: '/research/phd-opportunities', description: 'Funded positions available' },
          { label: 'Research Repository', href: '/research/repository', description: 'Open access publications' },
        ],
      },
      {
        heading: 'Collaborate & Impact',
        links: [
          { label: 'Industry Partnerships', href: '/collaborate', description: '25+ industry partners' },
          { label: 'Funding & Grants', href: '/research/funding', description: 'Rs. 120M+ secured' },
          { label: 'Knowledge Exchange', href: '/collaborate', description: 'Impact & innovation' },
          { label: 'Research Ethics', href: '/research', description: 'Governance & compliance' },
        ],
      },
    ],
    featured: {
      title: 'Research Impact',
      description: 'Our research tackles global challenges from climate change to healthcare innovation.',
      image: '/images/mega-research.jpg',
      cta: { text: 'View Research Impact', href: '/research/impact' },
    },
  },
  collaborate: {
    title: 'Collaborate',
    columns: [
      {
        heading: 'Work with Us',
        links: [
          { label: 'Business Partnerships', href: '/collaborate', description: 'Tailored collaboration models' },
          { label: 'Research Collaboration', href: '/collaborate', description: 'Joint research projects' },
          { label: 'Knowledge Exchange', href: '/collaborate', description: 'Innovation & commercialisation' },
          { label: 'Consultancy Services', href: '/collaborate', description: 'Expert advisory services' },
        ],
      },
      {
        heading: 'Talent & Recruitment',
        links: [
          { label: 'Hire Our Graduates', href: '/collaborate', description: '94% employment rate' },
          { label: 'Internships & Placements', href: '/collaborate', description: 'Industry experience programmes' },
          { label: 'Degree Apprenticeships', href: '/collaborate', description: 'Earn while you learn' },
          { label: 'Career Fairs & Events', href: '/events', description: 'Connect with talent' },
        ],
      },
      {
        heading: 'Facilities & Innovation',
        links: [
          { label: 'Innovation Centre', href: '/collaborate', description: 'Co-working & incubation' },
          { label: 'Specialist Facilities', href: '/collaborate', description: 'Labs & equipment hire' },
          { label: 'Testbeds & Living Labs', href: '/collaborate', description: 'Real-world environments' },
          { label: 'Data & Analytics Services', href: '/collaborate', description: 'Business intelligence' },
        ],
      },
      {
        heading: 'Global Engagement',
        links: [
          { label: 'International Partnerships', href: '/collaborate', description: 'Global university network' },
          { label: 'Research Mobility', href: '/collaborate', description: 'Staff & student exchange' },
          { label: 'Transnational Education', href: '/collaborate', description: 'Joint programmes abroad' },
          { label: 'Development Projects', href: '/collaborate', description: 'Capacity building worldwide' },
        ],
      },
    ],
    featured: {
      title: 'Partner with IIC',
      description: 'Join 50+ organisations collaborating with our researchers and accessing our talent pipeline.',
      image: '/images/mega-collaborate.jpg',
      cta: { text: 'Start a Conversation', href: '/collaborate' },
    },
  },
  news: {
    title: 'News & Events',
    columns: [
      {
        heading: 'Latest News',
        links: news.slice(0, 5).map(n => ({
          label: n.title,
          href: `/news/${n.slug}`,
          description: `${n.category} • ${new Date(n.date).toLocaleDateString('en-GB', { month: 'short', day: 'numeric' })}`,
        })),
      },
      {
        heading: 'Upcoming Events',
        links: events.slice(0, 5).map(e => ({
          label: e.title,
          href: `/events/${e.slug}`,
          description: `${e.type} • ${new Date(e.date).toLocaleDateString('en-GB', { month: 'short', day: 'numeric' })}`,
        })),
      },
      {
        heading: 'News Categories',
        links: [
          { label: 'All News', href: '/news', description: 'Browse complete archive' },
          { label: 'Research Breakthroughs', href: '/news?category=research', description: 'Latest discoveries' },
          { label: 'Student Success', href: '/news?category=student', description: 'Achievements & awards' },
          { label: 'Rankings & Awards', href: '/news?category=rankings', description: 'Institutional recognition' },
        ],
      },
      {
        heading: 'Event Types',
        links: [
          { label: 'All Events', href: '/events', description: 'Complete calendar' },
          { label: 'Open Days', href: '/events?type=open-day', description: 'Visit our campus' },
          { label: 'Workshops & Training', href: '/events?type=workshop', description: 'Skill development' },
          { label: 'Conferences & Symposia', href: '/events?type=conference', description: 'Academic gatherings' },
        ],
      },
    ],
    featured: {
      title: 'Stay Connected',
      description: 'Never miss an update. Subscribe to our newsletter for the latest news and events.',
      image: '/images/mega-news.jpg',
      cta: { text: 'Subscribe to Newsletter', href: '/contact' },
    },
  },
  alumni: {
    title: 'Alumni',
    columns: [
      {
        heading: 'Alumni Community',
        links: [
          { label: 'Alumni Stories', href: '/alumni', description: 'Inspiring graduate journeys' },
          { label: 'Find Alumni', href: '/alumni', description: 'Connect with 3000+ graduates' },
          { label: 'Alumni Events', href: '/alumni', description: 'Reunions & networking' },
          { label: 'Volunteer & Mentor', href: '/alumni', description: 'Give back to IIC' },
        ],
      },
      {
        heading: 'Benefits & Services',
        links: [
          { label: 'Lifelong Learning', href: '/alumni', description: 'Course discounts & access' },
          { label: 'Career Support', href: '/alumni', description: 'Lifelong career services' },
          { label: 'Library Access', href: '/alumni', description: 'Continued resource access' },
          { label: 'Email for Life', href: '/alumni', description: 'Keep your @iic.edu.np address' },
        ],
      },
      {
        heading: 'Giving Back',
        links: [
          { label: 'Donate to IIC', href: '/alumni', description: 'Support future generations' },
          { label: 'Scholarship Funds', href: '/alumni', description: 'Fund student opportunities' },
          { label: 'Research Support', href: '/alumni', description: 'Enable innovation' },
          { label: 'Legacy Giving', href: '/alumni', description: 'Lasting impact' },
        ],
      },
      {
        heading: 'Stay in Touch',
        links: [
          { label: 'Update Your Details', href: '/alumni', description: 'Keep your profile current' },
          { label: 'Alumni Newsletter', href: '/alumni', description: 'Monthly updates' },
          { label: 'Social Media Groups', href: '/alumni', description: 'LinkedIn, Facebook, WhatsApp' },
          { label: 'Contact Alumni Relations', href: '/alumni', description: 'We\'re here to help' },
        ],
      },
    ],
    featured: {
      title: 'Global Alumni Network',
      description: 'Join 3,000+ graduates working at leading technology companies worldwide.',
      image: '/images/mega-alumni.jpg',
      cta: { text: 'Read Alumni Stories', href: '/alumni' },
    },
  },
  about: {
    title: 'About IIC',
    columns: [
      {
        heading: 'Our University',
        links: [
          { label: 'Welcome from the Director', href: '/about', description: 'Leadership message' },
          { label: 'History & Heritage', href: '/about', description: 'Since 2000' },
          { label: 'Vision, Mission & Values', href: '/about', description: 'Our guiding principles' },
          { label: 'Governance & Leadership', href: '/about', description: 'Board & committees' },
        ],
      },
      {
        heading: 'Excellence & Recognition',
        links: [
          { label: 'Rankings & Awards', href: '/about', description: 'Top IT institute in Nepal' },
          { label: 'Teaching Excellence', href: '/about', description: 'Gold rating' },
          { label: 'Research Excellence', href: '/about', description: 'World-class impact' },
          { label: 'Accreditations', href: '/about', description: 'UGC, QAA certified' },
        ],
      },
      {
        heading: 'Campus & Location',
        links: [
          { label: 'Kamaladi Campus', href: '/about', description: 'Heart of Kathmandu' },
          { label: 'Campus Development', href: '/about', description: 'Future plans' },
          { label: 'Sustainability', href: '/about', description: 'Green campus initiative' },
          { label: 'Visit Us', href: '/visit/campus-tour', description: 'Directions & maps' },
        ],
      },
      {
        heading: 'Information',
        links: [
          { label: 'Policies & Regulations', href: '/about', description: 'Key documents' },
          { label: 'Freedom of Information', href: '/about', description: 'Public access scheme' },
          { label: 'Modern Slavery Statement', href: '/about', description: 'Ethical commitments' },
          { label: 'Privacy & Cookies', href: '/privacy', description: 'Data protection' },
        ],
      },
    ],
    featured: {
      title: 'Since 2000',
      description: 'Over two decades of excellence in computing education, research, and innovation.',
      image: '/images/mega-about.jpg',
      cta: { text: 'Explore Our History', href: '/about' },
    },
  },
};

export function MegaMenu({ isOpen, activeMenu, onClose }: MegaMenuProps) {
  const reducedMotion = useReducedMotion();
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      setTimeout(() => document.addEventListener('mousedown', handleClickOutside), 100);
    }

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen, onClose]);

  if (!isOpen || !activeMenu) return null;

  const content = megaMenuContent[activeMenu];
  if (!content) return null;

  return (
    <AnimatePresence>
      <motion.div
        ref={menuRef}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={reducedMotion ? { duration: 0 } : { duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
        className="fixed top-full left-0 right-0 z-[900] bg-white border-b border-light-grey shadow-2xl"
        role="navigation"
        aria-label={`${content.title} menu`}
      >
        <div className="container py-8 md:py-12 lg:py-16">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            <div className="flex-1 lg:w-3/5 space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={reducedMotion ? { duration: 0 } : { delay: 0.1, duration: 0.3 }}
                className="flex items-start gap-4 lg:gap-8"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-lime rounded-none flex items-center justify-center">
                  <span className="text-2xl font-display font-extrabold text-navy">
                    {activeMenu.charAt(0).toUpperCase()}
                  </span>
                </div>
                <div>
                  <h2 className="text-3xl md:text-4xl font-display font-extrabold text-navy leading-tight">
                    {content.title}
                  </h2>
                  <p className="mt-2 text-lg text-dark-grey max-w-xl">
                    Explore everything IIC has to offer in {content.title.toLowerCase()}.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={reducedMotion ? { duration: 0 } : { delay: 0.15, duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
              >
                {content.columns.map((column, colIndex) => (
                  <motion.div
                    key={column.heading}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={reducedMotion ? { duration: 0 } : { delay: 0.2 + colIndex * 0.05, duration: 0.3 }}
                    className="space-y-4"
                  >
                    <h3 className="text-sm font-semibold text-navy uppercase tracking-wider pb-2 border-b border-light-grey">
                      {column.heading}
                    </h3>
                    <ul className="space-y-3" role="list">
                      {column.links.map((link, linkIndex) => (
                        <motion.li
                          key={link.href}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={reducedMotion ? { duration: 0 } : { delay: 0.25 + colIndex * 0.05 + linkIndex * 0.02, duration: 0.2 }}
                        >
                          <Link
                            href={link.href}
                            onClick={onClose}
                            className="flex items-start gap-3 group text-navy hover:text-lime-deep transition-colors duration-150"
                          >
                            <span className="flex-shrink-0 mt-1 w-1.5 h-1.5 bg-navy/30 group-hover:bg-lime group-hover:w-4 rounded-none transition-all duration-150" aria-hidden="true" />
                            <div className="min-w-0">
                              <p className="font-medium text-base truncate">{link.label}</p>
                              {link.description && (
                                <p className="text-sm text-medium-grey truncate">{link.description}</p>
                              )}
                            </div>
                          </Link>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {content.featured && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={reducedMotion ? { duration: 0 } : { delay: 0.2, duration: 0.3 }}
                className="flex-1 lg:w-2/5"
              >
                <div className="relative aspect-[4/3] bg-light-grey overflow-hidden">
                  <Image
                    src={content.featured.image}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/40 via-transparent to-transparent" aria-hidden="true" />
                  <div className="absolute inset-0 flex items-end p-6">
                    <div className="w-full bg-white/95 backdrop-blur-sm p-6">
                      <h3 className="text-2xl md:text-3xl font-display font-bold text-navy mb-3">
                        {content.featured.title}
                      </h3>
                      <p className="text-dark-grey mb-5">{content.featured.description}</p>
                      <Link
                        href={content.featured.cta.href}
                        onClick={onClose}
                        className="inline-flex items-center gap-2 text-navy font-semibold hover:text-lime-deep transition-colors"
                      >
                        {content.featured.cta.text}
                        <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>

        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-navy/50 hover:text-lime-deep hover:bg-white/50 transition-colors rounded-none lg:hidden"
          aria-label="Close menu"
        >
          <X className="w-6 h-6" />
        </button>
      </motion.div>
    </AnimatePresence>
  );
}
