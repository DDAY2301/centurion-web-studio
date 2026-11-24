export const englishLabels = ['Home', 'Services', 'Portfolio', 'Packages', 'Get a quote', 'Coupons', 'About us', 'Contact'] as const;
export function localePath(pathname: string) {
  const english = pathname === '/en' || pathname.startsWith('/en/');
  const path = (english ? pathname.slice(3) : pathname).replace(/\/$/, '') || '/';
  return { english, path, href: (route: string) => english ? englishPath(route) : route };
}
export function englishPath(route: string) { return '/en' + (route === '/' ? '' : route); }
