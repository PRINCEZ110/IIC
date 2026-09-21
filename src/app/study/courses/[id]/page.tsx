import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Header } from '@/components/ui/Header';
import { Footer } from '@/components/ui/Footer';
import { Hero } from '@/sections/Hero';
import { CTASection } from '@/sections/CTASection';
import { courses } from '@/data/university';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { Calendar, MapPin, Clock, DollarSign, Award, BookOpen } from 'lucide-react';

interface CoursePageProps {
  params: Promise<{ id: string }>;
}

async function getCourse(id: string) {
  return courses.find(c => c.id === id);
}

export async function generateMetadata({ params }: CoursePageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const course = await getCourse(resolvedParams.id);
  
  if (!course) {
    return { title: 'Course Not Found' };
  }

  return {
    title: `${course.name} | IIC`,
    description: course.description,
    openGraph: {
      title: `${course.name} | IIC`,
      description: course.description,
      type: 'website',
    },
  };
}

export default async function CoursePage({ params }: CoursePageProps) {
  const resolvedParams = await params;
  const course = await getCourse(resolvedParams.id);

  if (!course) {
    notFound();
  }

  return (
    <>
      <Header />
      <main id="main-content" className="flex-1 pt-20 md:pt-24 lg:pt-32">
        <Hero
          headline={course.name}
          subheadline={`${course.qualification} • ${course.level} • ${course.subject}`}
          image={`/images/course-${course.id}-hero.jpg`}
          imageAlt={`Students in ${course.name} programme`}
          variant="page"
        />

        <section className="py-16 md:py-24 bg-white" aria-labelledby="course-overview-heading">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
              <div className="lg:col-span-2 space-y-10">
                <div>
                  <h2 id="course-overview-heading" className="font-display font-extrabold text-navy text-3xl md:text-4xl mb-6">
                    Course Overview
                  </h2>
                  <div className="prose prose-lg text-dark-grey leading-relaxed max-w-none">
                    <p className="text-lg mb-6">{course.description}</p>
                    <p className="mb-6">This programme is designed to provide you with the knowledge, skills, and practical experience needed to excel in the rapidly evolving field of {course.subject.toLowerCase()}. Through a combination of theoretical learning, hands-on projects, and industry engagement, you&apos;ll develop the expertise that employers value.</p>
                    <p className="mb-6">The curriculum is regularly updated in consultation with our industry advisory board to ensure it remains relevant and aligned with current industry needs. You&apos;ll learn from academics who are active researchers and practitioners, bringing real-world insights into the classroom.</p>
                  </div>
                </div>

                <div className="border-t border-light-grey pt-10">
                  <h3 className="font-display font-bold text-navy text-2xl mb-6">What You&apos;ll Study</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {course.modules.map((module, index) => (
                      <div key={index} className="flex items-start gap-3 p-4 bg-off-white border border-light-grey hover:border-lime transition-colors">
                        <span className="flex-shrink-0 w-8 h-8 bg-lime text-navy font-display font-bold flex items-center justify-center text-lg">
                          {index + 1}
                        </span>
                        <span className="font-medium text-navy">{module}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border-t border-light-grey pt-10">
                  <h3 className="font-display font-bold text-navy text-2xl mb-6">Career Pathways</h3>
                  <p className="text-dark-grey mb-6">Graduates from this programme go on to diverse and rewarding careers:</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3" role="list">
                    {course.careerPaths.map((path, index) => (
                      <li key={index} className="flex items-center gap-3 p-3 bg-off-white border border-light-grey">
                        <Award className="w-5 h-5 text-lime-deep flex-shrink-0" aria-hidden="true" />
                        <span className="font-medium text-navy">{path}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <aside className="space-y-6">
                <div className="bg-navy text-white p-6 sticky top-24">
                  <h3 className="font-display font-bold text-white text-xl mb-4">Key Information</h3>
                  <dl className="space-y-4 text-sm">
                    <div className="flex items-start gap-3">
                      <Award className="w-5 h-5 text-lime flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <div>
                        <dt className="text-white/60">Qualification</dt>
                        <dd className="font-medium">{course.qualification}</dd>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <BookOpen className="w-5 h-5 text-lime flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <div>
                        <dt className="text-white/60">Level</dt>
                        <dd className="font-medium">{course.level}</dd>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-lime flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <div>
                        <dt className="text-white/60">Duration</dt>
                        <dd className="font-medium">{course.duration}</dd>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-lime flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <div>
                        <dt className="text-white/60">Location</dt>
                        <dd className="font-medium">{course.location}</dd>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Calendar className="w-5 h-5 text-lime flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <div>
                        <dt className="text-white/60">Start Date</dt>
                        <dd className="font-medium">{course.startDate}</dd>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <DollarSign className="w-5 h-5 text-lime flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <div>
                        <dt className="text-white/60">Annual Fees</dt>
                        <dd className="font-medium">{course.fees}</dd>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Calendar className="w-5 h-5 text-lime flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <div>
                        <dt className="text-white/60">Application Deadline</dt>
                        <dd className="font-medium">{course.applicationDeadline}</dd>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Award className="w-5 h-5 text-lime flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <div>
                        <dt className="text-white/60">Accreditation</dt>
                        <dd className="font-medium">{course.accreditation}</dd>
                      </div>
                    </div>
                  </dl>

                  <div className="mt-6 pt-6 border-t border-white/20 space-y-3">
                    <Button variant="lime" size="lg" arrow fullWidth asChild>
                      <Link href="/admissions/apply">Apply Now</Link>
                    </Button>
                    <Button variant="outline" size="lg" fullWidth asChild>
                      <Link href="/admissions/requirements">Entry Requirements</Link>
                    </Button>
                    <Button variant="ghost" size="lg" fullWidth asChild>
                      <Link href="/contact">Request Prospectus</Link>
                    </Button>
                  </div>
                </div>

                <div className="bg-off-white p-6 border border-light-grey">
                  <h3 className="font-display font-bold text-navy text-lg mb-4">Entry Requirements</h3>
                  <p className="text-dark-grey text-sm mb-4">{course.entryRequirements}</p>
                  <Link href="/admissions/requirements" className="inline-flex items-center gap-1 text-lime-deep font-medium hover:text-lime-deep transition-colors text-sm">
                    View detailed requirements
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                  </Link>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <CTASection
          title="Ready to Apply?"
          description="Start your application today and take the first step towards your future in technology."
          primaryCta={{ text: 'Apply Now', href: '/admissions/apply' }}
          secondaryCta={{ text: 'Contact Admissions', href: '/contact' }}
          variant="navy"
        />
      </main>
      <Footer />
    </>
  );
}
