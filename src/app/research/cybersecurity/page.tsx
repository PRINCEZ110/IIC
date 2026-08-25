import { Metadata } from 'next';
import CybersecurityPageClient from '@/components/CybersecurityPageClient';

export const metadata: Metadata = {
  title: 'Cybersecurity Research',
  description: 'Advanced threat detection, privacy-preserving frameworks, and secure software development for critical infrastructure and financial systems.',
};

export default function CybersecurityPage() {
  return <CybersecurityPageClient />;
}