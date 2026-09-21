'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Header } from '@/components/ui/Header';
import { Footer } from '@/components/ui/Footer';
import { Home, Search, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <>
      <Header />
      <main id="main-content" className="flex-1 pt-20 md:pt-24 lg:pt-32 min-h-[60vh] flex items-center justify-center">
        <div className="container text-center py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="text-8xl md:text-9xl font-display font-extrabold text-lime-deep mb-6" aria-hidden="true">
              404
            </div>
            <h1 className="font-display font-extrabold text-navy text-3xl md:text-5xl lg:text-6xl mb-4">
              Page Not Found
            </h1>
            <p className="text-dark-grey text-lg md:text-xl max-w-xl mx-auto mb-10">
              Sorry, we couldn&apos;t find the page you&apos;re looking for. It might have been moved or doesn&apos;t exist.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/" className="inline-flex items-center gap-2 bg-navy text-white px-8 py-3 font-medium hover:bg-navy-light transition-colors group">
                <Home className="w-5 h-5" aria-hidden="true" />
                Back to Home
              </Link>
              <Link href="/study/courses" className="inline-flex items-center gap-2 border-2 border-navy text-navy px-8 py-3 font-medium hover:bg-navy/5 transition-colors group">
                <Search className="w-5 h-5" aria-hidden="true" />
                Browse Courses
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
          >
            {[
              { label: 'Study at IIC', href: '/study', icon: Home },
              { label: 'Latest News', href: '/news', icon: Search },
              { label: 'Contact Us', href: '/contact', icon: ArrowLeft },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="group bg-white border border-light-grey hover:border-lime hover:shadow-xl transition-all duration-300 p-6 h-full text-center"
              >
                <item.icon className="w-8 h-8 text-lime-deep mx-auto mb-4 transition-transform group-hover:scale-110" aria-hidden="true" />
                <h3 className="font-display font-bold text-navy text-lg group-hover:text-lime-deep transition-colors">{item.label}</h3>
              </Link>
            ))}
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}
