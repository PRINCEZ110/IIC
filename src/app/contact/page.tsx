import type { Metadata } from 'next';
import { ContactPageClient } from './ContactPageClient';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Contact the International Institute of Computer Science: admissions enquiries, campus visits, and general questions.',
};

export default function ContactPage() {
  return <ContactPageClient />;
}
