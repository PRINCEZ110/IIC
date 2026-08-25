import { Metadata } from 'next';
import ApplyPageClient from '@/components/ApplyPageClient';

export const metadata: Metadata = {
  title: 'Apply to IIC',
  description: 'Start your application to International Institute of Computer Science. Simple online application process for undergraduate and postgraduate programmes.',
};

export default function ApplyPage() {
  return <ApplyPageClient />;
}