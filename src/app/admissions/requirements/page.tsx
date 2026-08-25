import { Metadata } from 'next';
import RequirementsPageClient from '@/components/RequirementsPageClient';

export const metadata: Metadata = {
  title: 'Entry Requirements',
  description: 'View entry requirements for all IIC programmes. Academic qualifications, English language requirements, and portfolio guidelines.',
};

export default function RequirementsPage() {
  return <RequirementsPageClient />;
}