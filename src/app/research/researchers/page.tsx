import type { Metadata } from 'next';
import { ResearchersPageClient } from './ResearchersPageClient';

export const metadata: Metadata = {
  title: 'Our Researchers',
  description: 'Meet the 45+ researchers driving AI, cybersecurity, sustainable computing, and data science at IIC.',
};

export default function ResearchersPage() {
  return <ResearchersPageClient />;
}
