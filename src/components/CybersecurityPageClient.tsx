'use client';

import { motion } from 'framer-motion';
import { Header } from '@/components/ui/Header';
import { Footer } from '@/components/ui/Footer';
import { Hero } from '@/sections/Hero';
import { CTASection } from '@/sections/CTASection';
import { researchers } from '@/data/university';
import Link from 'next/link';
import Image from 'next/image';

export default function CybersecurityPageClient() {
  const themeResearchers = researchers.filter(r => r.department === 'Cybersecurity');

  return (
    <>
      <Header />
      <main id="main-content" className="flex-1 pt-20 md:pt-24 lg:pt-32">
        <Hero
          headline="Cybersecurity\n& Privacy"
          subheadline="Protecting Digital Assets in a Connected World. Advanced threat detection, privacy-preserving frameworks, and secure software development."
          primaryCta={{ text: 'View Researchers', href: '/research/researchers?dept=cyber' }}
          secondaryCta={{ text: 'Collaborate', href: '/collaborate' }}
          image="/images/research-cyber-hero.jpg"
          imageAlt="Cybersecurity research at IIC"
          variant="research"
        />

        <section className="py-16 md:py-24 bg-white" aria-labelledby="overview-heading">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 id="overview-heading" className="font-display font-extrabold text-navy leading-tight text-3xl md:text-5xl lg:text-6xl mb-4">
                  Research Overview
                </h2>
                <div className="prose prose-lg text-dark-grey leading-relaxed max-w-none">
                  <p className="text-lg mb-6">As digital systems become critical to every aspect of society, our Cybersecurity research theme focuses on building resilient, trustworthy, and privacy-preserving digital infrastructure.</p>
                  <p className="mb-6">We work across the full security stack—from hardware-level protections to application-layer defenses, from network monitoring to cryptographic protocols. Our research directly supports Nepal&apos;s critical infrastructure, banking sector, and government digital transformation.</p>
                  <p className="mb-6">We maintain active collaborations with government agencies, financial institutions, and international security research communities.</p>
                </div>
              </motion.div>

              <h3 className="font-display font-bold text-navy text-2xl mb-6">Key Research Areas</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {[
                  { title: 'Network Security & Monitoring', desc: 'Real-time threat detection, intrusion prevention, traffic analysis', icon: '🛡️' },
                  { title: 'Cryptography & Privacy', desc: 'Post-quantum cryptography, zero-knowledge proofs, secure multi-party computation', icon: '🔐' },
                  { title: 'Critical Infrastructure Protection', desc: 'Power grid, banking, government systems security', icon: '⚡' },
                  { title: 'Secure Software Development', desc: 'Vulnerability detection, secure coding practices, DevSecOps', icon: '💻' },
                  { title: 'Digital Forensics', desc: 'Incident response, malware analysis, evidence preservation', icon: '🔍' },
                  { title: 'Privacy-Preserving Technologies', desc: 'Differential privacy, federated learning, data anonymization', icon: '🕵️' },
                ].map((item, index) => (
                  <motion.article
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index }}
                    className="group bg-white border border-light-grey hover:border-lime hover:shadow-xl transition-all duration-300 p-6 h-full"
                  >
                    <div className="text-4xl mb-4" aria-hidden="true">{item.icon}</div>
                    <h4 className="font-display font-bold text-navy text-xl mb-2 group-hover:text-lime-deep transition-colors">{item.title}</h4>
                    <p className="text-dark-grey">{item.desc}</p>
                  </motion.article>
                ))}
              </div>

              <h3 className="font-display font-bold text-navy text-2xl mb-6">Key Achievements</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                {[
                  { value: '18', label: 'Security vulnerabilities disclosed' },
                  { value: '10+', label: 'Government collaborations' },
                  { value: '3', label: 'Security tools open-sourced' },
                ].map((stat, index) => (
                  <motion.article
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index }}
                    className="bg-navy text-white p-6 text-center"
                  >
                    <div className="font-display font-extrabold text-3xl md:text-4xl mb-1">{stat.value}</div>
                    <div className="text-white/80">{stat.label}</div>
                  </motion.article>
                ))}
              </div>

              <h3 className="font-display font-bold text-navy text-2xl mb-6">Our Researchers</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {themeResearchers.map((researcher, index) => (
                  <motion.article
                    key={researcher.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index }}
                    className="group bg-white border border-light-grey hover:border-lime hover:shadow-xl transition-all duration-300 overflow-hidden"
                  >
                    <Link href={`/research/researchers/${researcher.id}`} className="block">
                      <div className="relative aspect-square overflow-hidden bg-light-grey">
                        <Image
                src={researcher.image}
                alt={researcher.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
              />
                      </div>
                      <div className="p-5">
                        <h4 className="font-display font-bold text-navy text-lg mb-1 group-hover:text-lime-deep transition-colors">{researcher.name}</h4>
                        <p className="text-lime-deep text-sm font-medium mb-1">{researcher.title}</p>
                        <p className="text-dark-grey text-sm line-clamp-2">{researcher.bio}</p>
                      </div>
                    </Link>
                  </motion.article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <CTASection
          title="Strengthen Your Security Posture"
          description="Partner with our cybersecurity researchers on threat assessment, secure architecture, and incident response."
          primaryCta={{ text: 'Collaborate with Us', href: '/collaborate' }}
          secondaryCta={{ text: 'View All Researchers', href: '/research/researchers' }}
          variant="lime"
        />
      </main>
      <Footer />
    </>
  );
}
