import { Metadata } from 'next';
import DataSciencePageClient from '@/components/DataSciencePageClient';

export const metadata: Metadata = {
  title: 'Data Science Research',
  description: 'Pioneering big data analytics, predictive modelling, and data visualisation for social good, business intelligence, and scientific discovery.',
};

export default function DataSciencePage() {
  return <DataSciencePageClient />;
}