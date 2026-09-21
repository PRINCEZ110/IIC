'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Header } from '@/components/ui/Header';
import { Footer } from '@/components/ui/Footer';
import { Home, RefreshCw } from 'lucide-react';

export default function Error({ reset }: { reset: () => void }) {
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
            <div className="text-8xl md:text-9xl font-display font-extrabold text-navy mb-6" aria-hidden="true">
              ⚠️
            </div>
            <h1 className="font-display font-extrabold text-navy text-3xl md:text-5xl lg:text-6xl mb-4">
              Something Went Wrong
            </h1>
            <p className="text-dark-grey text-lg md:text-xl max-w-xl mx-auto mb-10">
              An unexpected error occurred. Our team has been notified and we&apos;re working to fix it.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={reset}
                className="inline-flex items-center gap-2 bg-navy text-white px-8 py-3 font-medium hover:bg-navy-light transition-colors group"
              >
                <RefreshCw className="w-5 h-5" aria-hidden="true" />
                Try Again
              </button>
              <Link href="/" className="inline-flex items-center gap-2 border-2 border-navy text-navy px-8 py-3 font-medium hover:bg-navy/5 transition-colors group">
                <Home className="w-5 h-5" aria-hidden="true" />
                Back to Home
              </Link>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}
