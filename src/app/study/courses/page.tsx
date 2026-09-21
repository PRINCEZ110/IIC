import type { Metadata } from 'next';
import { CoursesPageClient } from './CoursesPageClient';

export const metadata: Metadata = {
  title: 'Find a Course',
  description: 'Browse undergraduate, postgraduate, and professional computing programmes at IIC.',
};

export default function CoursesPage() {
  return <CoursesPageClient />;
}
