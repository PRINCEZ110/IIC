import type { Metadata } from 'next';
import { NewsPageClient } from './NewsPageClient';

export const metadata: Metadata = {
  title: 'News',
  description: 'Latest news, rankings, research breakthroughs, and student achievements from IIC.',
};

export default function NewsPage() {
  return <NewsPageClient />;
}
