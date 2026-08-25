export interface NavigationItem {
  label: string;
  href: string;
  megaMenu?: string;
}

export interface MegaMenuContent {
  id: string;
  title: string;
  columns: MegaMenuColumn[];
  featuredContent?: FeaturedContent;
}

export interface MegaMenuColumn {
  heading: string;
  links: MegaMenuLink[];
}

export interface MegaMenuLink {
  label: string;
  href: string;
  description?: string;
}

export interface FeaturedContent {
  title: string;
  description: string;
  image: string;
  cta: { text: string; href: string };
}

export interface Course {
  id: string;
  code: string;
  name: string;
  level: string;
  duration: string;
  mode: string;
  location: string;
  subject: string;
  qualification: string;
  description: string;
  entryRequirements: string;
  fees: string;
  startDate: string;
  applicationDeadline: string;
  modules: string[];
  careerPaths: string[];
  accreditation: string;
  featured: boolean;
}

export interface ResearchTheme {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  stats: Stat[];
  researchers: string[];
  cta: string;
  href: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface Researcher {
  id: string;
  name: string;
  title: string;
  department: string;
  image: string;
  bio: string;
  email: string;
  publications: number;
  citations: number;
  researchAreas: string[];
}

export interface NewsArticle {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  image: string;
  author: string;
  readTime: string;
  featured: boolean;
  content: string;
}

export interface Event {
  id: string;
  slug: string;
  title: string;
  description: string;
  type: string;
  date: string;
  time: string;
  location: string;
  audience: string;
  image: string;
  registrationRequired: boolean;
  registrationUrl?: string;
  featured: boolean;
}

export interface Alumni {
  id: string;
  name: string;
  graduationYear: number;
  degree: string;
  currentRole: string;
  company: string;
  location: string;
  image: string;
  quote: string;
  achievement: string;
}

export interface UniversityStats {
  value: string;
  label: string;
  suffix: string;
}

export interface CTASection {
  id: string;
  title: string;
  description: string;
  primaryCta: { text: string; href: string };
  secondaryCta: { text: string; href: string };
  background: 'navy' | 'lime' | 'blue' | 'white';
}

export interface StudyCategory {
  id: string;
  title: string;
  description: string;
  image: string;
  href: string;
  cta: string;
  courses: string[];
}

export interface LifeCategory {
  id: string;
  title: string;
  description: string;
  image: string;
  href: string;
}

export interface UniversityInfo {
  name: string;
  shortName: string;
  established: number;
  tagline: string;
  motto: string;
  address: string;
  phone: string;
  email: string;
  website: string;
  social: {
    facebook: string;
    twitter: string;
    linkedin: string;
    instagram: string;
    youtube: string;
  };
  affiliations: string[];
  accreditations: string[];
}