import { Metadata } from 'next';
import PhDOpportunitiesPageClient from '@/components/PhDOpportunitiesPageClient';

export const metadata: Metadata = {
  title: 'PhD Opportunities',
  description: 'Explore funded and self-funded PhD positions at IIC. Work with world-class supervisors in AI, Cybersecurity, Data Science, and Sustainable Computing.',
};

export default function PhDOpportunitiesPage() {
  return <PhDOpportunitiesPageClient />;
}