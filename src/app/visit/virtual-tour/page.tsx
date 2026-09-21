import { Metadata } from 'next';
import { Header } from '@/components/ui/Header';
import { Footer } from '@/components/ui/Footer';
import { VirtualTourPageClient } from '@/components/VirtualTourPageClient';

export const metadata: Metadata = {
  title: 'Virtual Campus Tour',
  description: 'Explore IIC campus virtually with our immersive 360° tour. Navigate through labs, libraries, classrooms, and student spaces from anywhere.',
};

const tourStops = [
  { name: 'Main Entrance & Reception', location: 'Ground Floor', description: 'Modern reception area with student services desk and digital information displays.', image: '/images/tour-entrance.jpg' },
  { name: 'AI & Machine Learning Lab', location: 'Level 3', description: 'State-of-the-art GPU clusters and deep learning workstations for cutting-edge research.', image: '/images/tour-ai-lab.jpg' },
  { name: 'Cybersecurity Research Centre', location: 'Level 2', description: 'Isolated network environments for penetration testing and security research.', image: '/images/tour-cyber-lab.jpg' },
  { name: 'Central Library', location: 'Level 1-2', description: '50,000+ volumes, digital databases, silent study zones, and collaborative spaces.', image: '/images/tour-library.jpg' },
  { name: 'Software Engineering Studio', location: 'Level 3', description: 'Agile workspaces, CI/CD pipelines, device testing lab for industry-standard development.', image: '/images/tour-se-studio.jpg' },
  { name: 'Innovation Centre', location: 'Ground Floor', description: 'Co-working spaces, incubator, maker space, and 3D printing for student startups.', image: '/images/tour-innovation.jpg' },
  { name: 'Student Hub & Café', location: 'Ground Floor', description: 'Social spaces, student union offices, event venue, and diverse dining options.', image: '/images/tour-hub.jpg' },
  { name: 'Lecture Theatres', location: 'Level 1', description: 'Modern lecture halls with recording facilities, interactive displays, and hybrid teaching support.', image: '/images/tour-lecture.jpg' },
];

export default function VirtualTourPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="flex-1 pt-20 md:pt-24 lg:pt-32">
        <VirtualTourPageClient tourStops={tourStops} />
      </main>
      <Footer />
    </>
  );
}