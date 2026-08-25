import { Metadata } from 'next';
import SustainableComputingPageClient from '@/components/SustainableComputingPageClient';

export const metadata: Metadata = {
  title: 'Sustainable Computing Research',
  description: 'Green technology research at IIC. Energy-efficient algorithms, green data centres, and sustainable software engineering practices.',
};

export default function SustainableComputingPage() {
  return <SustainableComputingPageClient />;
}