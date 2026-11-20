import type { MetadataRoute } from 'next';

const domain = 'https://lumeli.net';
const paths = [
  '/',
  '/storitve',
  '/portfolio',
  '/portfolio/blog-lab',
  '/portfolio/black-raven',
  '/portfolio/zavod-zzt',
  '/portfolio/moj-glas-steje',
  '/paketi',
  '/ponudba',
  '/kuponi',
  '/o-nas',
  '/kontakt',
  '/politika-zasebnosti',
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map((path) => ({
    url: domain + path,
    changeFrequency: path === '/' ? 'weekly' : 'monthly',
    priority: path === '/' ? 1 : 0.6,
  }));
}
