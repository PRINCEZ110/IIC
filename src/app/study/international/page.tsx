import { Metadata } from 'next';
import InternationalPageClient from '@/components/InternationalPageClient';

export const metadata: Metadata = {
  title: 'International Students',
  description: 'Information for international students applying to IIC. Visa guidance, entry requirements, scholarships, and support services.',
};

export default function InternationalPage() {
  return <InternationalPageClient />;
}