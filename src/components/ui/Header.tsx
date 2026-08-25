'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Search, ChevronDown } from 'lucide-react';
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
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(scrollY > 20);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollY]);

  const handleMenuHover = (menu: string | null) => {
    if (menu) {
      setActiveMenu(menu);
    } else {
      setActiveMenu(null);
    }
  };

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
            ? 'bg-white/95 backdrop-blur-md border-b border-light-grey shadow-sm'
            : 'bg-transparent'
        )}
        onMouseLeave={handleMouseLeave}
      >
        <nav className="container" aria-label="Main navigation">
          <div className="flex items-center justify-between h-16 md:h-20 lg:h-24">
            <Link
              href="/"
              className="flex items-center gap-3 flex-shrink-0 z-10"
              aria-label={`${universityInfo.name} - Home`}
            >
              <div className="w-10 h-10 md:w-12 md:h-12 bg-navy rounded-none flex items-center justify-center relative overflow-hidden">
                <span className="text-white font-display font-extrabold text-xl md:text-2xl relative z-10">
                  IIC
                </span>
                <div className="absolute inset-0 bg-lime transform skew-x-12 -translate-x-1/2 left-1/2" aria-hidden="true" />
              </div>
              <span className="hidden md:block font-display font-bold text-navy text-lg leading-tight">
                International Institute<br />
                <span className="font-normal text-sm text-dark-grey">of Computer Science</span>
              </span>
            </Link>

            <div className="hidden lg:flex items-center gap-8">
              {navigationItems.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => handleMenuHover(item.megaMenu || null)}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    className={cn(
                      'flex items-center gap-1.5 px-3 py-2 text-navy font-medium text-base',
                      'hover:text-lime transition-colors duration-150',
                      'relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-lime after:scale-x-0 after:origin-bottom-right',
                      'hover:after:scale-x-100 hover:after:origin-bottom-left transition-transform duration-300'
                    )}
                    aria-haspopup="true"
                    aria-expanded={activeMenu === item.megaMenu}
                    aria-controls={`mega-menu-${item.megaMenu}`}
                  >
                    {item.label}
                    {item.megaMenu && <ChevronDown className="w-4 h-4 text-navy/50 transition-transform" />}
                  </button>
                </div>
              ))}

              <button
                onClick={() => setIsSearchOpen(true)}
                className="p-2 text-navy/60 hover:text-lime hover:bg-navy/5 rounded-none transition-colors"
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>
            </div>

            <div className="flex items-center gap-4 lg:hidden">
              <button
                onClick={() => setIsSearchOpen(true)}
                className="p-2 text-navy hover:text-lime"
                aria-label="Search"
              >
                <Search className="w-6 h-6" />
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="p-2 text-navy hover:text-lime"
                aria-label="Open menu"
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </nav>

        <MegaMenu
          isOpen={!!activeMenu}
          activeMenu={activeMenu}
          onClose={() => setActiveMenu(null)}
          onMenuChange={setActiveMenu}
        />
      </header>

      <SearchOverlay isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={reducedMotion ? { duration: 0 } : { duration: 0.2 }}
            className="fixed inset-0 z-[400] bg-navy/95 backdrop-blur-sm lg:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile menu"
          >
            <div className="flex h-full flex-col">
              <div className="flex items-center justify-between p-4 border-b border-white/10">
                <Link href="/" className="flex items-center gap-3" aria-label="IIC Home">
                  <div className="w-10 h-10 bg-navy rounded-none flex items-center justify-center relative overflow-hidden">
                    <span className="text-white font-display font-extrabold text-xl relative z-10">IIC</span>
                    <div className="absolute inset-0 bg-lime transform skew-x-12 -translate-x-1/2 left-1/2" aria-hidden="true" />
                  </div>
                </Link>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 text-white/70 hover:text-lime transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-7 h-7" />
                </button>
              </div>

              <nav className="flex-1 overflow-y-auto p-6 space-y-1" aria-label="Mobile navigation">
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

                <div className="pt-6 mt-6 border-t border-white/10 space-y-4">
                  <button
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setIsSearchOpen(true);
                    }}
                    className="w-full flex items-center gap-4 p-4 text-white hover:text-lime bg-white/5 transition-colors text-left"
                  >
                    <Search className="w-6 h-6" />
                    <span className="text-lg font-medium">Search</span>
                  </button>

                  <div className="flex items-center gap-4 pt-4">
                    <a href={universityInfo.social.facebook} className="text-white/60 hover:text-lime transition-colors" aria-label="Facebook" target="_blank" rel="noopener">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                    </a>
                    <a href={universityInfo.social.twitter} className="text-white/60 hover:text-lime transition-colors" aria-label="Twitter" target="_blank" rel="noopener">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg>
                    </a>
                    <a href={universityInfo.social.linkedin} className="text-white/60 hover:text-lime transition-colors" aria-label="LinkedIn" target="_blank" rel="noopener">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                    </a>
                    <a href={universityInfo.social.instagram} className="text-white/60 hover:text-lime transition-colors" aria-label="Instagram" target="_blank" rel="noopener">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                    </a>
                    <a href={universityInfo.social.youtube} className="text-white/60 hover:text-lime transition-colors" aria-label="YouTube" target="_blank" rel="noopener">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.5.46 8.5.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>
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
        className="block px-4 py-4 text-white/80 hover:text-lime hover:bg-white/5 transition-colors font-medium"
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div className="border-b border-white/10">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-4 py-4 text-white/80 hover:text-lime transition-colors font-medium text-left"
        aria-expanded={isOpen}
        aria-controls={`mobile-submenu-${item.megaMenu}`}
      >
        <span>{item.label}</span>
        <svg
          className={cn('w-5 h-5 transition-transform', isOpen && 'rotate-180')}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.ul
            id={`mobile-submenu-${item.megaMenu}`}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={reducedMotion ? { duration: 0 } : { duration: 0.2 }}
            className="overflow-hidden bg-white/5"
          >
            <li>
              <Link
                href={item.href}
                onClick={onClose}
                className="block px-8 py-3 text-lime font-semibold hover:text-white transition-colors border-l-2 border-l-lime pl-6"
              >
                All {item.label}
              </Link>
            </li>
            <li className="px-4 py-2">
              <nav className="grid grid-cols-2 gap-2" aria-label={`${item.label} submenu`}>
                {getMobileSubmenuItems(item.megaMenu).map((subItem) => (
                  <Link
                    key={subItem.href}
                    href={subItem.href}
                    onClick={onClose}
                    className="block px-4 py-3 text-white/70 hover:text-lime hover:bg-white/5 transition-colors text-sm"
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
      { label: 'Undergraduate Courses', href: '/study/undergraduate' },
      { label: 'Postgraduate Taught', href: '/study/postgraduate' },
      { label: 'Postgraduate Research', href: '/study/research' },
      { label: 'Professional Courses', href: '/study/professional' },
      { label: 'Course Search', href: '/study/courses' },
      { label: 'Open Days', href: '/events?type=open-day' },
      { label: 'International Students', href: '/study/international' },
      { label: 'How to Apply', href: '/admissions/apply' },
    ],
    life: [
      { label: 'Campus Tour', href: '/life/campus' },
      { label: 'Accommodation', href: '/life/accommodation' },
      { label: 'Kathmandu Life', href: '/life/city' },
      { label: 'Students\' Union', href: '/life/students-union' },
      { label: 'Clubs & Societies', href: '/life/clubs' },
      { label: 'Sport & Fitness', href: '/life/sport' },
      { label: 'Careers Support', href: '/life/careers' },
      { label: 'Wellbeing', href: '/life/wellbeing' },
    ],
    research: [
      { label: 'Research Themes', href: '/research' },
      { label: 'Our Researchers', href: '/research/researchers' },
      { label: 'Research Centres', href: '/research/centres' },
      { label: 'PhD Opportunities', href: '/research/phd-opportunities' },
      { label: 'Publications', href: '/research/repository' },
      { label: 'Funding & Grants', href: '/research/funding' },
      { label: 'Industry Partners', href: '/collaborate/research' },
      { label: 'Research Impact', href: '/research/impact' },
    ],
    collaborate: [
      { label: 'Business Partnerships', href: '/collaborate/business' },
      { label: 'Hire Graduates', href: '/collaborate/hire' },
      { label: 'Research Collaboration', href: '/collaborate/research' },
      { label: 'Innovation Centre', href: '/collaborate/innovation-centre' },
      { label: 'Consultancy', href: '/collaborate/consultancy' },
      { label: 'Facilities Hire', href: '/collaborate/facilities' },
      { label: 'International Partners', href: '/collaborate/international' },
      { label: 'Contact Us', href: '/collaborate/contact' },
    ],
    news: [
      { label: 'Latest News', href: '/news' },
      { label: 'Upcoming Events', href: '/events' },
      { label: 'Research News', href: '/news?category=research' },
      { label: 'Student Stories', href: '/news?category=student' },
      { label: 'Open Days', href: '/events?type=open-day' },
      { label: 'Workshops', href: '/events?type=workshop' },
      { label: 'Newsletter', href: '/newsletter' },
      { label: 'Press Office', href: '/about/press' },
    ],
    alumni: [
      { label: 'Alumni Stories', href: '/alumni/stories' },
      { label: 'Find Alumni', href: '/alumni/directory' },
      { label: 'Events & Reunions', href: '/alumni/events' },
      { label: 'Benefits & Services', href: '/alumni/benefits' },
      { label: 'Volunteer', href: '/alumni/volunteer' },
      { label: 'Give Back', href: '/alumni/giving' },
      { label: 'Update Details', href: '/alumni/update' },
      { label: 'Contact Us', href: '/alumni/contact' },
    ],
    about: [
      { label: 'Welcome from Director', href: '/about/director' },
      { label: 'History & Heritage', href: '/about/history' },
      { label: 'Vision & Values', href: '/about/vision' },
      { label: 'Governance', href: '/about/governance' },
      { label: 'Rankings & Awards', href: '/about/rankings' },
      { label: 'Campus Info', href: '/about/campus' },
      { label: 'Policies', href: '/about/policies' },
      { label: 'Contact', href: '/contact' },
    ],
  };
  return items[menu] || [];
}