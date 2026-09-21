import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Header } from '@/components/ui/Header';
import { Footer } from '@/components/ui/Footer';
import { news } from '@/data/university';
import { formatDate } from '@/lib/utils';
import Link from 'next/link';
import { Calendar,  ArrowLeft} from 'lucide-react';
import Image from 'next/image';

interface NewsDetailProps {
  params: Promise<{ slug: string }>;
}

async function getNewsArticle(slug: string) {
  return news.find(n => n.slug === slug);
}

export async function generateMetadata({ params }: NewsDetailProps): Promise<Metadata> {
  const resolvedParams = await params;
  const article = await getNewsArticle(resolvedParams.slug);
  
  if (!article) {
    return { title: 'Article Not Found' };
  }

  return {
    title: `${article.title} | IIC News`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: 'article',
      publishedTime: article.date,
      authors: [article.author],
      images: [{ url: article.image, alt: article.title }],
    },
  };
}

export default async function NewsDetailPage({ params }: NewsDetailProps) {
  const resolvedParams = await params;
  const article = await getNewsArticle(resolvedParams.slug);

  if (!article) {
    notFound();
  }

  const relatedNews = news.filter(n => n.slug !== article.slug && n.category === article.category).slice(0, 3);

  return (
    <>
      <Header />
      <main id="main-content" className="flex-1 pt-20 md:pt-24 lg:pt-32">
        <article className="py-16 md:py-24 bg-white">
          <div className="container max-w-4xl">
            <Link href="/news" className="inline-flex items-center gap-2 text-navy/60 hover:text-lime-deep transition-colors mb-8 group">
              <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" aria-hidden="true" />
              Back to News
            </Link>

            <header className="mb-8 md:mb-12">
              <div className="flex flex-wrap items-center gap-3 text-sm text-medium-grey mb-4">
                <span className="px-3 py-1 bg-lime text-navy font-bold uppercase tracking-wider">{article.category}</span>
                <time dateTime={article.date}>
                  <Calendar className="w-4 h-4 inline mr-1" aria-hidden="true" />
                  {formatDate(article.date)}
                </time>
                <span aria-hidden="true">·</span>
                <span>{article.readTime}</span>
              </div>

              <h1 className="font-display font-extrabold text-navy leading-tight text-3xl md:text-5xl lg:text-6xl mb-4">
                {article.title}
              </h1>

              <div className="flex items-center gap-4 text-sm text-medium-grey">
                <span className="flex items-center gap-1">
                  <span aria-hidden="true">👤</span>
                  {article.author}
                </span>
              </div>
            </header>

            <div className="relative aspect-[16/9] overflow-hidden bg-light-grey mb-10 md:mb-14">
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover"
                sizes="100vw"
              />
            </div>

            <div className="prose prose-lg text-dark-grey leading-relaxed max-w-none" dangerouslySetInnerHTML={{ __html: article.content }} />

            {relatedNews.length > 0 && (
              <section className="mt-16 md:mt-20 border-t border-light-grey pt-10 md:pt-12">
                <h2 className="font-display font-bold text-navy text-2xl md:text-3xl mb-6">Related Articles</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {relatedNews.map((item) => (
                    <Link key={item.slug} href={`/news/${item.slug}`} className="group bg-white border border-light-grey hover:border-lime hover:shadow-xl transition-all duration-300 overflow-hidden h-full flex flex-col">
                      <div className="relative aspect-video overflow-hidden">
                        <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
              />
                      </div>
                      <div className="p-5 flex-1 flex flex-col">
                        <div className="flex items-center gap-2 text-sm text-medium-grey mb-2">
                          <span className="px-2 py-0.5 bg-lime/10 text-lime-deep font-medium">{item.category}</span>
                          <time dateTime={item.date}>{formatDate(item.date)}</time>
                        </div>
                        <h3 className="font-display font-bold text-navy text-lg mb-2 group-hover:text-lime-deep transition-colors line-clamp-2">
                          {item.title}
                        </h3>
                        <p className="text-dark-grey text-sm flex-1 line-clamp-2">{item.excerpt}</p>
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
