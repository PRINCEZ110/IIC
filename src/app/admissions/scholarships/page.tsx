import { Metadata } from 'next';
import ScholarshipsPageClient from '@/components/ScholarshipsPageClient';

export const metadata: Metadata = {
  title: 'Scholarships & Funding',
  description: 'Explore scholarships, bursaries, and funding opportunities at IIC. Merit-based, need-based, and international student scholarships available.',
};

export default function ScholarshipsPage() {
  return <ScholarshipsPageClient />;
}