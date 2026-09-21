'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useMediaQuery';
import { cn } from '@/lib/utils';
import { Header } from '@/components/ui/Header';
import { Footer } from '@/components/ui/Footer';
import { Hero } from '@/sections/Hero';
import { Button } from '@/components/ui/Button';
import { universityInfo } from '@/data/university';
import { MapPin, Phone, Mail, Send, CheckCircle,  Loader2 } from 'lucide-react';
import Link from 'next/link';

export function ContactPageClient() {
  const reducedMotion = useReducedMotion();
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Please enter your full name';
    if (!formData.email.trim()) newErrors.email = 'Please enter your email address';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Please enter a valid email address';
    if (!formData.subject.trim()) newErrors.subject = 'Please choose a subject';
    if (!formData.message.trim()) newErrors.message = 'Please enter your message';
    else if (formData.message.trim().length < 20) newErrors.message = 'Please tell us a little more (at least 20 characters)';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setFormState('submitting');
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setFormState('success');
    setFormData({ name: '', email: '', subject: '', message: '' });
    
    setTimeout(() => setFormState('idle'), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const contactMethods = [
    { icon: MapPin, label: 'Visit Us', value: universityInfo.address, href: '/visit/campus-tour', linkText: 'Get Directions' },
    { icon: Phone, label: 'Call Us', value: universityInfo.phone, href: `tel:${universityInfo.phone}`, linkText: 'Call Now' },
    { icon: Mail, label: 'Email Us', value: universityInfo.email, href: `mailto:${universityInfo.email}`, linkText: 'Send Email' },
  ];

  const subjects = [
    { value: 'general', label: 'General Enquiry' },
    { value: 'admissions', label: 'Admissions & Applications' },
    { value: 'study', label: 'Study Options & Courses' },
    { value: 'research', label: 'Research Collaboration' },
    { value: 'business', label: 'Business Partnerships' },
    { value: 'alumni', label: 'Alumni Relations' },
    { value: 'press', label: 'Press & Media' },
    { value: 'other', label: 'Other' },
  ];

  return (
    <>
      <Header />
      <main id="main-content" className="flex-1 pt-20 md:pt-24 lg:pt-32">
        <Hero
          headline="Get in Touch"
          subheadline="Have questions? Our team is here to help. Choose the best way to reach us below."
          variant="page"
        />

        <section className="py-16 md:py-24 bg-white" aria-labelledby="contact-methods-heading">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {contactMethods.map((method, index) => (
                <motion.article
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={reducedMotion ? { duration: 0 } : { duration: 0.4, delay: 0.1 * index }}
                  className="group bg-white border border-light-grey hover:border-lime hover:shadow-xl transition-all duration-300 p-8 h-full text-center"
                >
                  <div className="w-14 h-14 bg-lime/10 text-lime-deep flex items-center justify-center mx-auto mb-4 rounded-none group-hover:bg-lime group-hover:text-navy transition-colors">
                    <method.icon className="w-7 h-7 mx-auto" aria-hidden="true" />
                  </div>
                  <h3 className="font-display font-bold text-navy text-xl mb-2">{method.label}</h3>
                  <p className="text-dark-grey mb-4">{method.value}</p>
                  <a
                    href={method.href}
                    className="inline-flex items-center gap-2 text-navy font-medium hover:text-lime-deep transition-colors group"
                  >
                    {method.linkText}
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </a>
                </motion.article>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={reducedMotion ? { duration: 0 } : { duration: 0.6 }}
                className="bg-navy text-white p-8 md:p-12"
              >
                <h2 className="font-display font-extrabold leading-tight text-3xl md:text-4xl mb-6">
                  Send Us a Message
                </h2>
                <p className="text-white/80 mb-8">
                  Fill out the form and we&apos;ll get back to you within 2 business days.
                </p>

                {formState === 'success' ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center p-8 bg-green-500/20 border border-green-500/50"
                  >
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" aria-hidden="true" />
                    <h3 className="font-display font-bold text-white text-2xl mb-2">Message Sent!</h3>
                    <p className="text-white/80">Thank you for contacting us. We&apos;ll respond within 2 business days.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-1">Full Name *</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className={cn(
                            'w-full bg-white/10 border-2 text-white placeholder:text-white/40 py-3 px-4 transition-colors',
                            'focus:outline-none focus:border-lime focus:bg-white/20',
                            errors.name && 'border-red-500'
                          )}
                          aria-invalid={errors.name ? 'true' : 'false'}
                          aria-describedby={errors.name ? 'name-error' : undefined}
                          disabled={formState === 'submitting'}
                        />
                        {errors.name && (
                          <p id="name-error" className="mt-1 text-sm text-red-400" role="alert">{errors.name}</p>
                        )}
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-1">Email Address *</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={cn(
                            'w-full bg-white/10 border-2 text-white placeholder:text-white/40 py-3 px-4 transition-colors',
                            'focus:outline-none focus:border-lime focus:bg-white/20',
                            errors.email && 'border-red-500'
                          )}
                          aria-invalid={errors.email ? 'true' : 'false'}
                          aria-describedby={errors.email ? 'email-error' : undefined}
                          disabled={formState === 'submitting'}
                        />
                        {errors.email && (
                          <p id="email-error" className="mt-1 text-sm text-red-400" role="alert">{errors.email}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-white/80 mb-1">Subject *</label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className={cn(
                          'w-full bg-white/10 border-2 text-white py-3 px-4 transition-colors appearance-none bg-no-repeat bg-right pr-10',
                          '[&>option]:bg-white [&>option]:text-navy',
                          'focus:outline-none focus:border-lime focus:bg-white/20',
                          errors.subject && 'border-red-500'
                        )}
                        aria-invalid={errors.subject ? 'true' : 'false'}
                        aria-describedby={errors.subject ? 'subject-error' : undefined}
                        disabled={formState === 'submitting'}
                        style={{ backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='white' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")` }}
                      >
                        <option value="" disabled>Select a subject</option>
                        {subjects.map(opt => (
                          <option key={opt.value} value={opt.value}>{opt.label}</option>
                        ))}
                      </select>
                      {errors.subject && (
                        <p id="subject-error" className="mt-1 text-sm text-red-400" role="alert">{errors.subject}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-1">Message *</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        className={cn(
                          'w-full bg-white/10 border-2 text-white placeholder:text-white/40 py-3 px-4 transition-colors resize-y min-h-[120px]',
                          'focus:outline-none focus:border-lime focus:bg-white/20',
                          errors.message && 'border-red-500'
                        )}
                        aria-invalid={errors.message ? 'true' : 'false'}
                        aria-describedby={errors.message ? 'message-error' : undefined}
                        disabled={formState === 'submitting'}
                      />
                      {errors.message && (
                        <p id="message-error" className="mt-1 text-sm text-red-400" role="alert">{errors.message}</p>
                      )}
                    </div>

                    <Button
                      variant="lime"
                      size="lg"
                      arrow
                      fullWidth
                      loading={formState === 'submitting'}
                      type="submit"
                    >
                      {formState === 'submitting' ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" aria-hidden="true" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="w-5 h-5" aria-hidden="true" />
                        </>
                      )}
                    </Button>
                  </form>
                )}

                <p className="text-white/50 text-sm mt-4 text-center">
                  By submitting this form, you agree to our <Link href="/privacy" className="underline hover:text-lime">Privacy Policy</Link>.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={reducedMotion ? { duration: 0 } : { duration: 0.6, delay: 0.1 }}
                className="bg-off-white p-8 md:p-12"
              >
                <h3 className="font-display font-bold text-navy text-2xl md:text-3xl mb-6">Other Ways to Connect</h3>

                <div className="space-y-6">
                  <div className="flex flex-col md:flex-row md:items-center gap-4 p-4 bg-white border border-light-grey">
                    <div className="w-12 h-12 bg-lime/10 text-lime-deep flex items-center justify-center rounded-none flex-shrink-0">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                    </div>
                    <div>
                      <h4 className="font-display font-semibold text-navy">Facebook</h4>
                      <p className="text-dark-grey text-sm">Follow for news, events, and community updates</p>
                    </div>
                    <a href={universityInfo.social.facebook} target="_blank" rel="noopener" className="ml-auto inline-flex items-center gap-2 text-navy font-medium hover:text-lime-deep transition-colors group">
                      Follow
                      <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </a>
                  </div>

                  <div className="flex flex-col md:flex-row md:items-center gap-4 p-4 bg-white border border-light-grey">
                    <div className="w-12 h-12 bg-blue-500/10 text-blue-500 flex items-center justify-center rounded-none flex-shrink-0">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg>
                    </div>
                    <div>
                      <h4 className="font-display font-semibold text-navy">X (Twitter)</h4>
                      <p className="text-dark-grey text-sm">Real-time updates and announcements</p>
                    </div>
                    <a href={universityInfo.social.twitter} target="_blank" rel="noopener" className="ml-auto inline-flex items-center gap-2 text-navy font-medium hover:text-lime-deep transition-colors group">
                      Follow
                      <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </a>
                  </div>

                  <div className="flex flex-col md:flex-row md:items-center gap-4 p-4 bg-white border border-light-grey">
                    <div className="w-12 h-12 bg-blue-700/10 text-blue-700 flex items-center justify-center rounded-none flex-shrink-0">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                    </div>
                    <div>
                      <h4 className="font-display font-semibold text-navy">LinkedIn</h4>
                      <p className="text-dark-grey text-sm">Professional network, alumni connections, jobs</p>
                    </div>
                    <a href={universityInfo.social.linkedin} target="_blank" rel="noopener" className="ml-auto inline-flex items-center gap-2 text-navy font-medium hover:text-lime-deep transition-colors group">
                      Connect
                      <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </a>
                  </div>

                  <div className="flex flex-col md:flex-row md:items-center gap-4 p-4 bg-white border border-light-grey">
                    <div className="w-12 h-12 bg-pink-500/10 text-pink-500 flex items-center justify-center rounded-none flex-shrink-0">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                    </div>
                    <div>
                      <h4 className="font-display font-semibold text-navy">Instagram</h4>
                      <p className="text-dark-grey text-sm">Campus life, student stories, behind the scenes</p>
                    </div>
                    <a href={universityInfo.social.instagram} target="_blank" rel="noopener" className="ml-auto inline-flex items-center gap-2 text-navy font-medium hover:text-lime-deep transition-colors group">
                      Follow
                      <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
