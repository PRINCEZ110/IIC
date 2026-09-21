'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Search, ChevronDown,  Globe, Calendar, Phone,  BookOpen, Compass } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useReducedMotion, useScrollPosition } from '@/hooks/useMediaQuery';
import { navigationItems, universityInfo } from '@/data/university';
import { MegaMenu } from './MegaMenu';
import { SearchOverlay } from './SearchOverlay';
import { Button } from './Button';

export function Header() {
  const reducedMotion = useReducedMotion();
  const { y: scrollY } = useScrollPosition();
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const isScrolled = scrollY > 30;

  const handleMenuHover = (menu: string | null) => {
    setActiveMenu(menu);
  };

  // Lock background scroll while the mobile drawer is open
  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isMobileMenuOpen]);

  const handleMouseLeave = () => {
    setActiveMenu(null);
  };

  return (
    <>
      <header
        ref={headerRef}
        className={cn(
          'fixed top-0 left-0 right-0 z-[500] transition-all duration-300',
          isScrolled
            ? 'bg-white/98 backdrop-blur-md shadow-md border-b border-light-grey'
            : 'bg-white border-b border-light-grey/80'
        )}
        onMouseLeave={handleMouseLeave}
      >
        {/* Top Utility Bar (Hull benchmark: quick audience & action access) */}
        <div className="hidden lg:block bg-navy text-white text-xs py-2 border-b border-white/10">
          <div className="container flex items-center justify-between">
            <div className="flex items-center gap-6 text-white/80">
              <span className="flex items-center gap-1.5 font-medium text-lime">
                <span className="w-2 h-2 rounded-full bg-lime animate-pulse" />
                Admissions Open 2025/26
              </span>
              <span className="text-white/30">|</span>
              <Link href="/visit/campus-tour" className="hover:text-lime transition-colors flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" /> Book Open Day
              </Link>
              <Link href="/visit/virtual-tour" className="hover:text-lime transition-colors flex items-center gap-1">
                <Compass className="w-3.5 h-3.5" /> Virtual 360° Tour
              </Link>
              <Link href="/study/international" className="hover:text-lime transition-colors flex items-center gap-1">
                <Globe className="w-3.5 h-3.5" /> International Students
              </Link>
            </div>

            <div className="flex items-center gap-5 text-white/80 font-medium">
              <Link href="/life" className="hover:text-lime transition-colors">
                Current Students
              </Link>
              <Link href="/alumni" className="hover:text-lime transition-colors">
                Alumni
              </Link>
              <Link href="/collaborate" className="hover:text-lime transition-colors">
                Business & Partners
              </Link>
              <Link href="/contact" className="hover:text-lime transition-colors flex items-center gap-1">
                <Phone className="w-3 h-3" /> Contact
              </Link>
            </div>
          </div>
        </div>

        {/* Main Navigation Bar */}
        <nav className="container" aria-label="Main navigation">
          <div className="flex items-center justify-between h-20 md:h-22">
            {/* University Logo */}
            <Link
              href="/"
              className="flex items-center gap-3.5 flex-shrink-0 z-10 group"
              aria-label={`${universityInfo.name} - Home`}
            >
              <div className="w-12 h-12 md:w-14 md:h-14 bg-navy rounded-none flex items-center justify-center relative overflow-hidden shadow-sm group-hover:scale-[1.02] transition-transform">
                <span className="text-white font-display font-black text-2xl tracking-tighter relative z-10">
                  IIC
                </span>
                <div className="absolute inset-0 bg-lime transform skew-x-12 -translate-x-1/2 left-1/2 opacity-90" aria-hidden="true" />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-extrabold text-navy text-lg md:text-xl leading-tight tracking-tight">
                  International Institute
                </span>
                <span className="font-sans font-semibold text-xs tracking-wider uppercase text-medium-grey">
                  of Computer Science
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-6 xl:gap-8">
              {navigationItems.map((item) => (
                <div
                  key={item.label}
                  className="relative py-6"
                  onMouseEnter={() => handleMenuHover(item.megaMenu || null)}
                  onFocus={() => handleMenuHover(item.megaMenu || null)}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      'flex items-center gap-1 font-semibold text-sm xl:text-base text-navy hover:text-bright-blue transition-colors duration-150 relative py-1',
                      activeMenu === item.megaMenu && 'text-bright-blue'
                    )}
                    aria-haspopup="true"
                    aria-expanded={activeMenu === item.megaMenu}
                    aria-controls={item.megaMenu ? `mega-menu-${item.megaMenu}` : undefined}
                  >
                    {item.label}
                    {item.megaMenu && (
                      <ChevronDown
                        className={cn(
                          'w-3.5 h-3.5 text-navy/50 transition-transform duration-200',
                          activeMenu === item.megaMenu && 'rotate-180 text-bright-blue'
                        )}
                      />
                    )}
                    <span
                      className={cn(
                        'absolute bottom-0 left-0 w-full h-[2px] bg-lime transform scale-x-0 transition-transform duration-200 origin-left',
                        activeMenu === item.megaMenu && 'scale-x-100'
                      )}
                    />
                  </Link>
                </div>
              ))}
            </div>

            {/* Action Buttons: Search & Apply */}
            <div className="hidden lg:flex items-center gap-3">
              <button
                onClick={() => setIsSearchOpen(true)}
                className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-navy hover:text-bright-blue hover:bg-off-white border border-light-grey rounded-none transition-colors"
                aria-label="Search courses and website"
              >
                <Search className="w-4 h-4 text-navy/70" />
                <span className="hidden xl:inline">Search</span>
              </button>

              <Button variant="primary" size="sm" arrow asChild className="font-semibold shadow-sm">
                <Link href="/admissions/apply">Apply Now</Link>
              </Button>
            </div>

            {/* Mobile Header Controls */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={() => setIsSearchOpen(true)}
                className="p-2.5 text-navy hover:bg-off-white transition-colors"
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>

              <Link
                href="/admissions/apply"
                className="bg-navy text-white text-xs font-bold px-3 py-2 hover:bg-navy-light transition-colors"
              >
                Apply
              </Link>

              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="p-2.5 text-navy hover:bg-off-white transition-colors"
                aria-label="Open navigation menu"
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </nav>

        {/* Desktop Mega Menu Dropdown */}
        <MegaMenu
          isOpen={!!activeMenu}
          activeMenu={activeMenu}
          onClose={() => setActiveMenu(null)}
        />
      </header>

      {/* Global Search Overlay */}
      <SearchOverlay isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={reducedMotion ? { duration: 0 } : { duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="fixed inset-0 z-[600] bg-navy text-white lg:hidden overflow-y-auto"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            <div className="flex flex-col min-h-full">
              {/* Mobile Drawer Header */}
              <div className="flex items-center justify-between p-5 border-b border-white/10 bg-navy-light">
                <Link
                  href="/"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-3"
                  aria-label="IIC Home"
                >
                  <div className="w-10 h-10 bg-navy rounded-none flex items-center justify-center relative overflow-hidden">
                    <span className="text-white font-display font-extrabold text-xl relative z-10">IIC</span>
                    <div className="absolute inset-0 bg-lime transform skew-x-12 -translate-x-1/2 left-1/2" aria-hidden="true" />
                  </div>
                  <span className="font-display font-bold text-white text-base leading-tight">
                    International Institute
                  </span>
                </Link>

                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 text-white/80 hover:text-lime transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-7 h-7" />
                </button>
              </div>

              {/* Mobile Quick Action Strip */}
              <div className="p-4 bg-navy-light/60 border-b border-white/10 grid grid-cols-2 gap-2">
                <Link
                  href="/study/courses"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 py-2.5 px-3 bg-white/10 hover:bg-lime hover:text-navy text-xs font-semibold text-white transition-colors"
                >
                  <BookOpen className="w-3.5 h-3.5" /> Find a Course
                </Link>
                <Link
                  href="/admissions/apply"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 py-2.5 px-3 bg-lime text-navy hover:bg-lime-dark text-xs font-bold transition-colors"
                >
                  Apply for 2025/26
                </Link>
              </div>

              {/* Mobile Nav Links */}
              <nav className="flex-1 p-5 space-y-1" aria-label="Mobile main navigation">
                {navigationItems.map((item) => (
                  <MobileMenuItem
                    key={item.label}
                    item={item}
                    isOpen={activeMenu === item.megaMenu}
                    onToggle={() => setActiveMenu(activeMenu === item.megaMenu ? null : item.megaMenu || null)}
                    onClose={() => {
                      setIsMobileMenuOpen(false);
                      setActiveMenu(null);
                    }}
                  />
                ))}

                {/* Mobile Quick Audience Links */}
                <div className="pt-6 mt-6 border-t border-white/10 space-y-2">
                  <span className="text-xs uppercase tracking-wider font-semibold text-white/40 px-3 block">
                    Quick Links
                  </span>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <Link
                      href="/study/international"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="px-3 py-2 text-white/80 hover:text-lime transition-colors"
                    >
                      International Students
                    </Link>
                    <Link
                      href="/admissions/scholarships"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="px-3 py-2 text-white/80 hover:text-lime transition-colors"
                    >
                      Scholarships & Funding
                    </Link>
                    <Link
                      href="/visit/virtual-tour"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="px-3 py-2 text-white/80 hover:text-lime transition-colors"
                    >
                      360° Virtual Tour
                    </Link>
                    <Link
                      href="/contact"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="px-3 py-2 text-white/80 hover:text-lime transition-colors"
                    >
                      Contact Admissions
                    </Link>
                  </div>
                </div>

                {/* Mobile Social Links */}
                <div className="pt-6 border-t border-white/10 flex items-center justify-between px-3 text-xs text-white/50">
                  <span>{universityInfo.name}</span>
                  <div className="flex items-center gap-4">
                    <a href={universityInfo.social.facebook} className="text-white/60 hover:text-lime" target="_blank" rel="noopener" aria-label="Facebook">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                    </a>
                    <a href={universityInfo.social.linkedin} className="text-white/60 hover:text-lime" target="_blank" rel="noopener" aria-label="LinkedIn">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                    </a>
                  </div>
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

interface MobileMenuItemProps {
  item: typeof navigationItems[0];
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
}

function MobileMenuItem({ item, isOpen, onToggle, onClose }: MobileMenuItemProps) {
  const reducedMotion = useReducedMotion();

  if (!item.megaMenu) {
    return (
      <Link
        href={item.href}
        onClick={onClose}
        className="block px-4 py-3.5 text-white/90 hover:text-lime hover:bg-white/5 transition-colors font-semibold text-lg border-b border-white/5"
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div className="border-b border-white/5">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-4 py-3.5 text-white/90 hover:text-lime transition-colors font-semibold text-lg text-left"
        aria-expanded={isOpen}
        aria-controls={`mobile-submenu-${item.megaMenu}`}
      >
        <span>{item.label}</span>
        <ChevronDown
          className={cn('w-5 h-5 text-white/50 transition-transform duration-200', isOpen && 'rotate-180 text-lime')}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.ul
            id={`mobile-submenu-${item.megaMenu}`}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={reducedMotion ? { duration: 0 } : { duration: 0.2 }}
            className="overflow-hidden bg-white/5 pb-3"
          >
            <li>
              <Link
                href={item.href}
                onClick={onClose}
                className="block px-6 py-2.5 text-lime font-bold hover:text-white transition-colors text-sm border-l-2 border-lime pl-5 my-1"
              >
                Overview: {item.label} →
              </Link>
            </li>
            <li className="px-3 py-1">
              <nav className="grid grid-cols-1 gap-1" aria-label={`${item.label} submenu`}>
                {getMobileSubmenuItems(item.megaMenu).map((subItem) => (
                  <Link
                    key={subItem.href}
                    href={subItem.href}
                    onClick={onClose}
                    className="block px-4 py-2 text-white/70 hover:text-lime hover:bg-white/5 transition-colors text-sm font-medium"
                  >
                    {subItem.label}
                  </Link>
                ))}
              </nav>
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}

function getMobileSubmenuItems(menu: string) {
  const items: Record<string, { label: string; href: string }[]> = {
    study: [
      { label: 'Undergraduate Courses (BSc)', href: '/study/undergraduate' },
      { label: 'Postgraduate Taught (MSc)', href: '/study/postgraduate' },
      { label: 'Postgraduate Research (MPhil & PhD)', href: '/study/research' },
      { label: 'Professional & Short Courses', href: '/study/professional' },
      { label: 'Browse All Programmes', href: '/study/courses' },
      { label: 'Entry Requirements', href: '/admissions/requirements' },
      { label: 'Scholarships & Funding', href: '/admissions/scholarships' },
      { label: 'International Student Guide', href: '/study/international' },
      { label: 'How to Apply', href: '/admissions/apply' },
    ],
    life: [
      { label: 'Campus & Facilities', href: '/life/campus' },
      { label: 'Accommodation & Housing', href: '/life/accommodation' },
      { label: 'Kathmandu Student Life', href: '/life/city' },
      { label: 'Students\' Union & Societies', href: '/life' },
      { label: 'Sports, Clubs & Activities', href: '/life' },
      { label: 'Careers & Employability', href: '/life' },
      { label: 'Wellbeing & Student Support', href: '/life' },
    ],
    research: [
      { label: 'Research Themes Overview', href: '/research' },
      { label: 'AI & Machine Learning', href: '/research/ai-ml' },
      { label: 'Sustainable Computing', href: '/research/sustainable-computing' },
      { label: 'Cybersecurity & Privacy', href: '/research/cybersecurity' },
      { label: 'Data Science & Analytics', href: '/research/data-science' },
      { label: 'Research Centres & Labs', href: '/research/centres' },
      { label: 'PhD Opportunities', href: '/research/phd-opportunities' },
      { label: 'Faculty Researchers', href: '/research/researchers' },
      { label: 'Publications Repository', href: '/research/repository' },
      { label: 'Research Impact', href: '/research/impact' },
    ],
    collaborate: [
      { label: 'Business & Industry Partnerships', href: '/collaborate' },
      { label: 'Hire Graduate Talent', href: '/collaborate' },
      { label: 'Joint Research & R&D', href: '/collaborate' },
      { label: 'Innovation Centre & Incubator', href: '/collaborate' },
      { label: 'Lab & Facilities Hire', href: '/collaborate' },
      { label: 'Contact Business Team', href: '/collaborate' },
    ],
    news: [
      { label: 'All University News', href: '/news' },
      { label: 'Upcoming Events & Open Days', href: '/events' },
      { label: 'Research Discoveries', href: '/news?category=research' },
      { label: 'Student Achievements', href: '/news?category=student' },
      { label: 'Open Days Schedule', href: '/events?type=open-day' },
    ],
    alumni: [
      { label: 'Alumni Network & Stories', href: '/alumni' },
      { label: 'Alumni Profiles', href: '/alumni' },
      { label: 'Events & Reunions', href: '/alumni' },
      { label: 'Career Services for Alumni', href: '/alumni' },
      { label: 'Update Your Details', href: '/alumni' },
    ],
    about: [
      { label: 'About IIC Overview', href: '/about' },
      { label: 'Director\'s Welcome', href: '/about' },
      { label: 'Heritage & Vision', href: '/about' },
      { label: 'Accreditation & Affiliations', href: '/about' },
      { label: 'Campus Location & Contact', href: '/contact' },
    ],
  };
  return items[menu] || [];
}
