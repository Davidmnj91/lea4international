import { MetadataRoute } from 'next';
import { languages } from '@/i18n';

export default function sitemap(): MetadataRoute.Sitemap {
  const domain = process.env.APP_DOMAIN;
  const pages = [
    { path: '', priority: 1 },
    { path: 'about', priority: 0.5 },
    { path: 'contact', priority: 0.5 },
    { path: 'destinations', priority: 0.5 },
    { path: 'services', priority: 0.5 },
  ];

  return languages.flatMap((lang) =>
    pages.map(({ path, priority }) => ({
      url: `${domain}/${lang}/${path}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: priority,
    }))
  );
}
