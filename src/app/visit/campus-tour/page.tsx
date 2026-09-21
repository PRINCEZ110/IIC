import { Metadata } from 'next';
import { Header } from '@/components/ui/Header';
import { Footer } from '@/components/ui/Footer';
import { CampusTourPageClient } from '@/components/CampusTourPageClient';

export const metadata: Metadata = {
  title: 'Visit Campus',
  description: 'Book a campus tour or join an open day at IIC. Experience our state-of-the-art facilities and vibrant campus community.',
};

export default function VisitPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="flex-1 pt-20 md:pt-24 lg:pt-32">
        <CampusTourPageClient />
      </main>
      <Footer />
    </>
  );
}