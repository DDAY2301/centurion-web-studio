/** Public navigation only contains real, independently rendered Next.js pages. */
export const siteNavigation = [
  { href: '/', label: 'Domov' },
  { href: '/storitve', label: 'Storitve' },
  { href: '/portfolio', label: 'Reference' },
  { href: '/paketi', label: 'Paketi' },
  { href: '/ponudba', label: 'Ponudba' },
  { href: '/o-nas', label: 'O nas' },
  { href: '/kontakt', label: 'Kontakt' },
] as const;

export function isCurrentPage(pathname: string, href: string): boolean {
  if (href === '/') return pathname === '/';
  return pathname === href || pathname.startsWith(href + '/');
}
