import type { Metadata } from 'next';
import { EventsPageClient } from './EventsPageClient';

export const metadata: Metadata = {
  title: 'Events',
  description: 'Open days, career fairs, workshops, and conferences at IIC. Find an event and book your place.',
};

export default function EventsPage() {
  return <EventsPageClient />;
}
