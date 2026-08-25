import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Header } from '@/components/ui/Header';
import { Footer } from '@/components/ui/Footer';
import { Hero } from '@/sections/Hero';
import { CTASection } from '@/sections/CTASection';
import { researchers } from '@/data/university';
import Link from 'next/link';
import { ArrowLeft, Award, BookOpen, Globe } from 'lucide-react';

interface ResearcherDetailProps {
  params: Promise<{ id: string }>;
}

async function getResearcher(id: string) {
  return researchers.find(r => r.id === id);
}

export async function generateMetadata({ params }: ResearcherDetailProps): Promise<Metadata> {
  const resolvedParams = await params;
  const researcher = await getResearcher(resolvedParams.id);
  
  if (!researcher) {
    return { title: 'Researcher Not Found' };
  }

  return {
    title: `${researcher.name} | IIC Research`,
    description: researcher.bio,
    openGraph: {
      title: researcher.name,
      description: researcher.bio,
      type: 'profile',
      images: [{ url: researcher.image, alt: researcher.name }],
    },
  };
}

export default async function ResearcherDetailPage({ params }: ResearcherDetailProps) {
  const resolvedParams = await params;
  const researcher = await getResearcher(resolvedParams.id);

  if (!researcher) {
    notFound();
  }

  const relatedResearchers = researchers.filter(r => r.id !== researcher.id && r.department === researcher.department).slice(0, 3);

  return (
    <>
      <Header />
      <main id="main-content" className="flex-1 pt-16 md:pt-20 lg:pt-24">
        <article className="py-16 md:py-24 bg-white">
          <div className="container max-w-4xl">
            <Link href="/research/researchers" className="inline-flex items-center gap-2 text-navy/60 hover:text-lime transition-colors mb-8 group">
              <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" aria-hidden="true" />
              Back to Researchers
            </Link>

            <header className="mb-8 md:mb-12">
              <div className="flex flex-wrap items-center gap-3 text-sm text-medium-grey mb-4">
                <span className="px-3 py-1 bg-lime text-navy font-bold uppercase tracking-wider">{researcher.department}</span>
              </div>

              <div className="flex flex-col md:flex-row md:items-center gap-8 mb-6">
                <div className="relative w-32 h-32 md:w-40 md:h-40 flex-shrink-0 overflow-hidden bg-light-grey">
                  <img
                    src={researcher.image}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex-1">
                  <h1 className="font-display font-extrabold text-navy leading-tight text-3xl md:text-5xl lg:text-6xl mb-2">
                    {researcher.name}
                  </h1>

                  <div className="flex flex-wrap items-center gap-4 text-sm text-medium-grey mb-4">
                    <span className="flex items-center gap-1">
                      <Award className="w-4 h-4" aria-hidden="true" />
                      {researcher.title}
                    </span>
                    <span className="flex items-center gap-1">
                      <Globe className="w-4 h-4" aria-hidden="true" />
                      {researcher.department}
                    </span>
                  </div>

                  <div className="flex items-center gap-4 text-sm text-medium-grey">
                    <a href={`mailto:${researcher.email}`} className="flex items-center gap-1 hover:text-lime transition-colors">
                      <span className="w-4 h-4" aria-hidden="true">📧</span>
                      {researcher.email}
                    </a>
                  </div>
                </div>
              </div>
            </header>

            <div className="prose prose-lg text-dark-grey leading-relaxed max-w-none mb-10 md:mb-14">
              <p>{researcher.bio}</p>
              <h3>Research Interests</h3>
              <ul>
                {researcher.researchAreas.map((area) => (
                  <li key={area}>{area}</li>
                ))}
              </ul>
              <h3>Academic Impact</h3>
              <p>{researcher.publications}+ peer-reviewed publications with {researcher.citations.toLocaleString()}+ citations.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10 md:mb-14">
              <div className="bg-navy text-white p-6 text-center">
                <div className="font-display font-extrabold text-3xl md:text-4xl">{researcher.publications}+</div>
                <div className="text-white/70 text-sm">Publications</div>
              </div>
              <div className="bg-lime text-navy p-6 text-center">
                <div className="font-display font-extrabold text-3xl md:text-4xl">{researcher.citations.toLocaleString()}+</div>
                <div className="text-navy/70 text-sm">Citations</div>
              </div>
              <div className="bg-off-white p-6 text-center">
                <div className="font-display font-extrabold text-3xl md:text-4xl text-navy">{researcher.researchAreas.length}</div>
                <div className="text-dark-grey text-sm">Research Areas</div>
              </div>
            </div>

            {relatedResearchers.length > 0 && (
              <section className="border-t border-light-grey pt-10 md:pt-12">
                <h2 className="font-display font-bold text-navy text-2xl md:text-3xl mb-6">Colleagues in {researcher.department}</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {relatedResearchers.map((colleague) => (
                    <Link key={colleague.id} href={`/research/researchers/${colleague.id}`} className="group bg-white border border-light-grey hover:border-lime hover:shadow-xl transition-all duration-300 overflow-hidden h-full flex flex-col">
                      <div className="relative aspect-square overflow-hidden bg-light-grey">
                        <img
                          src={colleague.image}
                          alt=""
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-5 flex-1 flex flex-col">
                        <h3 className="font-display font-bold text-navy text-lg mb-1 group-hover:text-lime transition-colors">{colleague.name}</h3>
                        <p className="text-lime text-sm font-medium mb-1">{colleague.title}</p>
                        <p className="text-dark-grey text-sm flex-1 line-clamp-2">{colleague.bio}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            )}
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}