import { Metadata } from 'next';
import ProfessionalPageClient from '@/components/ProfessionalPageClient';

export const metadata: Metadata = {
  title: 'Professional & Short Courses',
  description: 'Upskill with industry-certified professional courses and bootcamps at IIC. AWS, Python, Full Stack Development, Data Analytics, and more.',
};

export default function ProfessionalPage() {
  return <ProfessionalPageClient />;
}