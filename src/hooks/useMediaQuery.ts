import { useState, useEffect, useRef } from 'react';

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);
  const initialized = useRef(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const media = window.matchMedia(query);
    
    if (!initialized.current) {
      setMatches(media.matches);
      initialized.current = true;
    }

    const listener = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    media.addEventListener('change', listener);
    return () => media.removeEventListener('change', listener);
  }, [query]);

  return matches;
}

export function useBreakpoint() {
  const isMobile = useMediaQuery('(max-width: 767px)');
  const isTablet = useMediaQuery('(min-width: 768px) and (max-width: 1023px)');
  const isDesktop = useMediaQuery('(min-width: 1024px)');
  const isLargeDesktop = useMediaQuery('(min-width: 1280px)');
  const isXLargeDesktop = useMediaQuery('(min-width: 1440px)');

  return {
    isMobile,
    isTablet,
    isDesktop,
    isLargeDesktop,
    isXLargeDesktop,
  };
}

export function useReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);
  const initialized = useRef(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    if (!initialized.current) {
      setReduced(media.matches);
      initialized.current = true;
    }

    const listener = (event: MediaQueryListEvent) => {
      setReduced(event.matches);
    };

    media.addEventListener('change', listener);
    return () => media.removeEventListener('change', listener);
  }, []);

  return reduced;
}

export function useScrollPosition(): { x: number; y: number } {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    let frame = 0;
    const handleScroll = () => {
      // Coalesce rapid scroll events into one state update per frame
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        setPosition({ x: window.scrollX, y: window.scrollY });
      });
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return position;
}

export function useIntersectionObserver<T extends Element = Element>(
  options: IntersectionObserverInit = {}
): [React.RefObject<T | null>, boolean] {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef<T | null>(null);
  const optionsRef = useRef(options);

  useEffect(() => {
    optionsRef.current = options;
  }, [options]);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, {
      threshold: 0.1,
      rootMargin: '50px',
      ...optionsRef.current,
    });

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return [ref, isIntersecting];
}