import { Metadata } from 'next';
import { Header } from '@/components/ui/Header';
import { Footer } from '@/components/ui/Footer';
import { Hero } from '@/sections/Hero';
import { CTASection } from '@/sections/CTASection';

export const metadata: Metadata = {
  title: 'Virtual Campus Tour',
  description: 'Explore IIC campus virtually with our immersive 360° tour. Navigate through labs, libraries, classrooms, and student spaces from anywhere.',
};

export default function VirtualTourPage() {
  const tourStops = [
    { name: 'Main Entrance & Reception', location: 'Ground Floor', description: 'Modern reception area with student services desk and digital information displays.', image: '/images/tour-entrance.jpg' },
    { name: 'AI & Machine Learning Lab', location: 'Level 3', description: 'State-of-the-art GPU clusters and deep learning workstations for cutting-edge research.', image: '/images/tour-ai-lab.jpg' },
    { name: 'Cybersecurity Research Centre', location: 'Level 2', description: 'Isolated network environments for penetration testing and security research.', image: '/images/tour-cyber-lab.jpg' },
    { name: 'Central Library', location: 'Level 1-2', description: '50,000+ volumes, digital databases, silent study zones, and collaborative spaces.', image: '/images/tour-library.jpg' },
    { name: 'Software Engineering Studio', location: 'Level 3', description: 'Agile workspaces, CI/CD pipelines, device testing lab for industry-standard development.', image: '/images/tour-se-studio.jpg' },
    { name: 'Innovation Centre', location: 'Ground Floor', description: 'Co-working spaces, incubator, maker space, and 3D printing for student startups.', image: '/images/tour-innovation.jpg' },
    { name: 'Student Hub & Café', location: 'Ground Floor', description: 'Social spaces, student union offices, event venue, and diverse dining options.', image: '/images/tour-hub.jpg' },
    { name: 'Lecture Theatres', location: 'Level 1', description: 'Modern lecture halls with recording facilities, interactive displays, and hybrid teaching support.', image: '/images/tour-lecture.jpg' },
  ];

  return (
    <>
      <Header />
      <main id="main-content" className="flex-1 pt-16 md:pt-20 lg:pt-24">
        <Hero
          headline="Virtual Campus\nTour"
          subheadline="Explore IIC's state-of-the-art facilities from anywhere in the world. Navigate through our labs, library, and student spaces with our immersive 360° experience."
          primaryCta={{ text: 'Start Tour', href: '#tour' }}
          secondaryCta={{ text: 'Book In-Person Tour', href: '/visit/campus-tour' }}
          image="/images/virtual-tour-hero.jpg"
          imageAlt="Virtual tour interface showing campus"
          variant="page"
        />

        <section id="tour" className="py-16 md:py-24 bg-white" aria-labelledby="tour-heading">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 id="tour-heading" className="font-display font-extrabold text-navy leading-tight text-3xl md:text-5xl lg:text-6xl mb-4">
                  Explore Campus Highlights
                </h2>
                <p className="text-lg md:text-xl text-dark-grey leading-relaxed">
                  Click on any location to explore a 360° view and learn more about our facilities.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {tourStops.map((stop, index) => (
                  <motion.article
                    key={stop.name}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index }}
                    className="group bg-white border border-light-grey hover:border-lime hover:shadow-xl transition-all duration-300 overflow-hidden"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden bg-light-grey">
                      <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true" />
                      <div className="w-full h-full flex items-center justify-center text-navy/30 text-6xl" aria-hidden="true">
                        🏫
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                        <span className="px-2 py-1 bg-lime text-navy text-xs font-bold uppercase tracking-wider mb-2 inline-block">{stop.location}</span>
                        <h3 className="font-display font-bold text-lg md:text-xl">{stop.name}</h3>
                      </div>
                    </div>
                    <div className="p-5">
                      <p className="text-dark-grey text-sm mb-4 line-clamp-2">{stop.description}</p>
                      <button className="inline-flex items-center gap-2 text-navy font-medium hover:text-lime transition-colors group w-full">
                        Explore 360° View
                        <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                      </button>
                    </div>
                  </motion.article>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="mt-12 text-center"
              >
                <p className="text-dark-grey mb-6">Want the full immersive experience? Launch our full-screen virtual tour.</p>
                <a href="#full-tour" className="inline-flex items-center gap-2 bg-navy text-white px-8 py-3 font-medium hover:bg-navy-light transition-colors group">
                  Launch Full Tour
                  <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-navy text-white" aria-labelledby="features-heading">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 id="features-heading" className="font-display font-extrabold leading-tight text-3xl md:text-5xl lg:text-6xl mb-4">
                Virtual Tour Features
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: '🔍', title: '360° Panoramic Views', desc: 'Full spherical views of every space' },
                { icon: '📍', title: 'Interactive Map', desc: 'Click to navigate between locations' },
                { icon: 'ℹ️', title: 'Info Hotspots', desc: 'Click for details on equipment and facilities' },
                { icon: '🎥', title: 'Video Guides', desc: 'Student-led tours of key facilities' },
                { icon: '📱', title: 'Mobile Optimized', desc: 'Works seamlessly on all devices' },
                { icon: '♿', title: 'Accessibility Info', desc: 'Details on accessible routes and facilities' },
                { icon: '🌐', title: 'Multi-language', desc: 'Available in English and Nepali' },
                { icon: '📤', title: 'Shareable Links', desc: 'Send specific views to friends and family' },
              ].map((item, index) => (
                <motion.article
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                  className="group bg-white/10 border border-white/20 hover:border-lime hover:bg-white/20 transition-all duration-300 p-6 h-full text-center"
                >
                  <div className="text-4xl mb-4" aria-hidden="true">{item.icon}</div>
                  <h3 className="font-display font-bold text-white text-xl mb-2 group-hover:text-lime transition-colors">{item.title}</h3>
                  <p className="text-white/70">{item.desc}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <CTASection
          title="Ready to Visit in Person?"
          description="Experience the energy of our campus firsthand. Book a personal tour or join our next open day."
          primaryCta={{ text: 'Book Campus Tour', href: '/visit/campus-tour' }}
          secondaryCta={{ text: 'Upcoming Open Days', href: '/events?type=open-day' }}
          variant="lime"
        />
      </main>
      <Footer />
    </>
  );
}

import { motion } from 'framer-motion';