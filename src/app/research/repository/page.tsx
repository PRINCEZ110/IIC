import { Metadata } from 'next';
import RepositoryPageClient from '@/components/RepositoryPageClient';

export const metadata: Metadata = {
  title: 'Research Repository',
  description: 'Access IIC\'s open-access research repository. 150+ publications from our researchers across AI, Cybersecurity, Data Science, and Sustainable Computing.',
};

export default function RepositoryPage() {
  return <RepositoryPageClient />;
}