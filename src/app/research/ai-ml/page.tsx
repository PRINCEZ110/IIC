import { Metadata } from 'next';
import AIMLPageClient from '@/components/AIMLPageClient';

export const metadata: Metadata = {
  title: 'AI & Machine Learning Research',
  description: 'Advancing AI/ML research in NLP, computer vision, and ethical AI for healthcare, agriculture, and education in Nepal.',
};

export default function AIMLPage() {
  return <AIMLPageClient />;
}