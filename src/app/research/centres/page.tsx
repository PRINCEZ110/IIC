import { Metadata } from 'next';
import { Header } from '@/components/ui/Header';
import { Footer } from '@/components/ui/Footer';
import { CentresPageClient } from '@/components/CentresPageClient';

export const metadata: Metadata = {
  title: 'Research Centres & Labs',
  description: 'Explore IIC\'s 8 specialist research centres and labs. State-of-the-art facilities for AI, cybersecurity, data science, and sustainable computing.',
};

const centres = [
  {
    id: 'ai-ml-lab',
    name: 'AI & Machine Learning Lab',
    shortDesc: 'High-performance GPU clusters for deep learning and AI research',
    description: 'Our flagship AI lab houses multiple GPU clusters with 100+ GPUs, supporting large-scale deep learning training, reinforcement learning, and computer vision research. The lab supports research in NLP, computer vision, medical AI, and ethical AI.',
    equipment: ['NVIDIA A100 GPUs (32x)', 'NVIDIA RTX 3090/4090 (20x)', 'High-speed NVMe storage (500TB)', '100 Gbps interconnect'],
    location: 'Level 3, Research Block',
    theme: 'AI & ML',
  },
  {
    id: 'cyber-lab',
    name: 'Cybersecurity Research Centre',
    shortDesc: 'Isolated networks for penetration testing and security research',
    description: 'A fully isolated network environment for penetration testing, malware analysis, and security research. Includes SCADA/ICS testbeds for critical infrastructure security research.',
    equipment: ['Isolated network racks (10x)', 'SCADA/ICS simulators', 'Malware analysis sandboxes', 'Hardware security modules'],
    location: 'Level 2, Research Block',
    theme: 'Cybersecurity',
  },
  {
    id: 'data-science-institute',
    name: 'Data Science Institute',
    shortDesc: 'High-performance computing for big data analytics and visualization',
    description: 'Dedicated HPC cluster for big data processing, predictive modelling, and interactive visual analytics. Supports research in statistical learning, data visualization, and real-time analytics.',
    equipment: ['CPU cluster (512 cores)', 'Large-memory nodes (2TB RAM)', 'Interactive visualization wall', 'Apache Spark/Flink cluster'],
    location: 'Level 3, Research Block',
    theme: 'Data Science',
  },
  {
    id: 'sustainable-computing-lab',
    name: 'Sustainable Computing Lab',
    shortDesc: 'Energy measurement and green computing testbed',
    description: 'Specialized lab for measuring and optimizing energy consumption of computing systems. Includes power measurement infrastructure, thermal imaging, and green algorithm testbeds.',
    equipment: ['Precision power meters (50x)', 'Thermal cameras', 'ARM/x86 test clusters', 'Carbon intensity monitors'],
    location: 'Level 1, Research Block',
    theme: 'Sustainable Computing',
  },
  {
    id: 'software-engineering-studio',
    name: 'Software Engineering Studio',
    shortDesc: 'Agile workspaces and CI/CD pipelines for software research',
    description: 'Modern software engineering studio with agile workspaces, device testing lab, and full CI/CD infrastructure for research in software engineering practices, DevOps, and testing.',
    equipment: ['Mobile device lab (50+ devices)', 'CI/CD pipeline infrastructure', 'Code quality analyzers', 'Usability testing lab'],
    location: 'Level 2, Research Block',
    theme: 'Software Engineering',
  },
  {
    id: 'innovation-centre',
    name: 'Innovation Centre',
    shortDesc: 'Co-working, incubation, and maker space for innovation',
    description: 'Open innovation space with co-working areas, startup incubation program, maker space with 3D printing, and industry collaboration zones. Supports student entrepreneurship and industry partnerships.',
    equipment: ['3D printers (FDM/SLA)', 'Electronics workstations', 'VR/AR development kits', 'Co-working desks (50+)'],
    location: 'Ground Floor, Innovation Wing',
    theme: 'Innovation',
  },
  {
    id: 'central-library',
    name: 'Central Library & Digital Resources',
    shortDesc: '50,000+ volumes, digital databases, and research support',
    description: 'Modern academic library with extensive print and digital collections, specialist research databases, silent and collaborative study zones, and dedicated research support services.',
    equipment: ['50,000+ print volumes', '100+ research databases', 'Digital repository', 'Research data management support'],
    location: 'Level 1-2, Library Block',
    theme: 'Library',
  },
];

export default function CentresPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="flex-1 pt-20 md:pt-24 lg:pt-32">
        <CentresPageClient centres={centres} />
      </main>
      <Footer />
    </>
  );
}