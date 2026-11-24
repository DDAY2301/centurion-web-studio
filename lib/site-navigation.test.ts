import { existsSync } from 'node:fs';
import { join } from 'node:path';
import { isCurrentPage, siteNavigation } from './site-navigation';
import { portfolioProjects } from './portfolio-projects';

describe('public site navigation', () => {
  it('only links to real standalone pages, never anchor placeholders', () => {
    for (const item of siteNavigation) {
      expect(item.href).toMatch(/^\/(?:[\w-]+)?$/);
      const location = item.href === '/' ? join(process.cwd(), 'app', 'page.tsx') : join(process.cwd(), 'app', item.href.slice(1), 'page.tsx');
      expect(existsSync(location)).toBe(true);
    }
  });
  it('includes all eight public menu options in order', () => {
    expect(siteNavigation.map((item) => item.label)).toEqual(['Domov', 'Storitve', 'Reference', 'Paketi', 'Ponudba', 'Kuponi', 'O nas', 'Kontakt']);
  });
  it('does not have duplicate routes', () => {
    expect(new Set(siteNavigation.map((item) => item.href)).size).toBe(siteNavigation.length);
  });
  it('marks nested portfolio case studies as selected', () => {
    expect(isCurrentPage('/portfolio/blog-lab', '/portfolio')).toBe(true);
    expect(isCurrentPage('/portfolio', '/')).toBe(false);
  });
  it('defines exactly four case studies with real internal paths', () => {
    expect(portfolioProjects).toHaveLength(4);
    for (const project of portfolioProjects) {
      expect(existsSync(join(process.cwd(), 'app', 'portfolio', project.slug, 'page.tsx'))).toBe(true);
      expect(project.url).toMatch(/^https:\/\//);
    }
  });
});
