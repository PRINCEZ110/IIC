import { Metadata } from 'next';
import ImpactPageClient from '@/components/ImpactPageClient';

export const metadata: Metadata = {
  title: 'Research Impact',
  description: 'IIC research makes a measurable difference. From climate change to healthcare, our research tackles global challenges with real-world solutions.',
};

export default function ImpactPage() {
  return <ImpactPageClient />;
}