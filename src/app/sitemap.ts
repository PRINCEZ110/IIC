import type { MetadataRoute } from 'next';
import { news, events, courses, researchers } from '@/data/university';

const BASE = 'https://iic.edu.np';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    '',
    '/about',
    '/admissions/apply',
    '/admissions/requirements',
    '/admissions/scholarships',
    '/alumni',
    '/collaborate',
    '/contact',
    '/events',
    '/life',
    '/life/accommodation',
    '/life/campus',
    '/life/city',
    '/news',
    '/research',
    '/research/ai-ml',
    '/research/centres',
    '/research/cybersecurity',
    '/research/data-science',
    '/research/funding',
    '/research/impact',
    '/research/phd-opportunities',
    '/research/repository',
    '/research/researchers',
    '/research/sustainable-computing',
    '/study',
    '/study/courses',
    '/study/international',
    '/study/postgraduate',
    '/study/professional',
    '/study/research',
    '/study/undergraduate',
    '/visit/campus-tour',
    '/visit/virtual-tour',
    '/privacy',
    '/accessibility',
    '/terms',
  ];

  const now = new Date();
  const entries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${BASE}${route}`,
    lastModified: now,
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.7,
  }));

  for (const item of news) {
    entries.push({ url: `${BASE}/news/${item.slug}`, lastModified: new Date(item.date), changeFrequency: 'yearly', priority: 0.5 });
  }
  for (const item of events) {
    entries.push({ url: `${BASE}/events/${item.slug}`, lastModified: now, changeFrequency: 'yearly', priority: 0.5 });
  }
  for (const course of courses) {
    entries.push({ url: `${BASE}/study/courses/${course.id}`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 });
  }
  for (const person of researchers) {
    entries.push({ url: `${BASE}/research/researchers/${person.id}`, lastModified: now, changeFrequency: 'yearly', priority: 0.5 });
  }

  return entries;
}
