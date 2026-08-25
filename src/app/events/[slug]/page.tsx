import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Header } from '@/components/ui/Header';
import { Footer } from '@/components/ui/Footer';
import { events } from '@/data/university';
import { formatDate } from '@/lib/utils';
import Link from 'next/link';
import { Calendar, MapPin, Clock, ArrowLeft, User, Tag } from 'lucide-react';
import { Button } from '@/components/ui/Button';

interface EventDetailProps {
  params: Promise<{ slug: string }>;
}

async function getEvent(slug: string) {
  return events.find(e => e.slug === slug);
}

export async function generateMetadata({ params }: EventDetailProps): Promise<Metadata> {
  const resolvedParams = await params;
  const event = await getEvent(resolvedParams.slug);
  
  if (!event) {
    return { title: 'Event Not Found' };
  }

  return {
    title: `${event.title} | IIC Events`,
    description: event.description,
    openGraph: {
      title: event.title,
      description: event.description,
      type: 'website' as const,
      images: [{ url: event.image, alt: event.title }],
    },
  };
}

export default async function EventDetailPage({ params }: EventDetailProps) {
  const resolvedParams = await params;
  const event = await getEvent(resolvedParams.slug);

  if (!event) {
    notFound();
  }

  const relatedEvents = events.filter(e => e.slug !== event.slug && e.type === event.type).slice(0, 3);

  return (
    <>
      <Header />
      <main id="main-content" className="flex-1 pt-16 md:pt-20 lg:pt-24">
        <article className="py-16 md:py-24 bg-white">
          <div className="container max-w-4xl">
            <Link href="/events" className="inline-flex items-center gap-2 text-navy/60 hover:text-lime transition-colors mb-8 group">
              <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" aria-hidden="true" />
              Back to Events
            </Link>

            <header className="mb-8 md:mb-12">
              <div className="flex flex-wrap items-center gap-3 text-sm text-medium-grey mb-4">
                <span className="px-3 py-1 bg-blue-500/10 text-blue-500 font-medium">{event.type}</span>
                {event.registrationRequired && (
                  <span className="px-3 py-1 bg-lime/10 text-lime font-medium">Registration Required</span>
                )}
              </div>

              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-6">
                <div className="flex-shrink-0 w-20 h-20 bg-navy text-white flex flex-col items-center justify-center relative">
                  <span className="font-display font-extrabold text-4xl leading-none">
                    {new Date(event.date).getDate()}
                  </span>
                  <span className="font-medium text-sm uppercase tracking-wider mt-1">
                    {new Date(event.date).toLocaleDateString('en-GB', { month: 'short' }).toUpperCase()}
                  </span>
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-4 h-4 bg-lime rotate-45" aria-hidden="true" />
                </div>

                <div className="flex-1">
                  <h1 className="font-display font-extrabold text-navy leading-tight text-3xl md:text-5xl lg:text-6xl mb-4">
                    {event.title}
                  </h1>

                  <div className="flex flex-wrap items-center gap-4 text-sm text-medium-grey mb-4">
                    <time dateTime={event.date}>
                      <Calendar className="w-4 h-4 inline mr-1" aria-hidden="true" />
                      {new Date(event.date).toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}
                    </time>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4 inline mr-1" aria-hidden="true" />
                      {event.time}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4 inline mr-1" aria-hidden="true" />
                      {event.location}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 text-sm text-medium-grey">
                    <span className="flex items-center gap-1">
                      <User className="w-4 h-4" aria-hidden="true" />
                      {event.audience}
                    </span>
                  </div>
                </div>
              </div>
            </header>

            <div className="relative aspect-[16/9] overflow-hidden bg-light-grey mb-10 md:mb-14">
              <img
                src={event.image}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>

            <div className="prose prose-lg text-dark-grey leading-relaxed max-w-none mb-10 md:mb-14">
              <p>{event.description}</p>
              <p>Join us for this exciting event where you'll have the opportunity to learn, network, and engage with experts and peers in the field.</p>
              <h3>What to Expect</h3>
              <ul>
                <li>Expert presentations and keynote sessions</li>
                <li>Interactive workshops and hands-on sessions</li>
                <li>Networking opportunities with peers and industry professionals</li>
                <li>Q&A sessions with speakers</li>
              </ul>
            </div>

            {event.registrationRequired && event.registrationUrl && (
              <div className="bg-lime/10 border-2 border-lime p-6 md:p-8 mb-10 md:mb-14">
                <h3 className="font-display font-bold text-navy text-xl mb-3">Register for This Event</h3>
                <p className="text-dark-grey mb-6">Spaces are limited. Secure your place today.</p>
                <Button variant="lime" size="lg" arrow fullWidth asChild>
                  <Link href={event.registrationUrl}>Register Now</Link>
                </Button>
              </div>
            )}

            {relatedEvents.length > 0 && (
              <section className="border-t border-light-grey pt-10 md:pt-12">
                <h2 className="font-display font-bold text-navy text-2xl md:text-3xl mb-6">Related Events</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {relatedEvents.map((item) => (
                    <Link key={item.slug} href={`/events/${item.slug}`} className="group bg-white border border-light-grey hover:border-lime hover:shadow-xl transition-all duration-300 overflow-hidden h-full flex flex-col">
                      <div className="relative aspect-video overflow-hidden">
                        <img
                          src={item.image}
                          alt=""
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-5 flex-1 flex flex-col">
                        <div className="flex items-center gap-2 text-sm text-medium-grey mb-2">
                          <span className="px-2 py-0.5 bg-blue-500/10 text-blue-500 font-medium">{item.type}</span>
                          <time dateTime={item.date}>{formatDate(item.date)}</time>
                        </div>
                        <h3 className="font-display font-bold text-navy text-lg mb-2 group-hover:text-lime transition-colors line-clamp-2">
                          {item.title}
                        </h3>
                        <p className="text-dark-grey text-sm flex-1 line-clamp-2">{item.description}</p>
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