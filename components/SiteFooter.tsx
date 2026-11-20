import Link from 'next/link';
import { siteNavigation } from '@/lib/site-navigation';

export default function SiteFooter() {
  return (
    <footer className="border-t border-[#cfdace] bg-[#e7ede4] text-[#293b34]">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 lg:grid-cols-[1fr_2fr]">
        <div>
          <Link href="/" className="text-3xl font-semibold tracking-[-0.06em]">lumeli<span className="text-[#c98686]">.</span></Link>
          <p className="mt-4 max-w-sm text-sm leading-7 text-[#53675d]">Lepe spletne strani. Pametne digitalne rešitve. Izdelane s premislekom.</p>
        </div>
        <nav aria-label="Povezave v nogi strani">
          <div className="grid grid-cols-2 gap-x-8 gap-y-3 sm:grid-cols-3">
            {siteNavigation.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm font-medium text-[#425b4e] underline-offset-4 hover:underline">{item.label}</Link>
            ))}
            <Link href="/politika-zasebnosti" className="text-sm font-medium text-[#425b4e] underline-offset-4 hover:underline">Zasebnost</Link>
          </div>
        </nav>
      </div>
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 border-t border-[#cfdace] px-5 py-5 text-xs text-[#53675d] sm:px-8">
        <span>© {new Date().getFullYear()} Lumeli · digitalni studio</span>
        <span>Blagovna znamka Centurion d.o.o.</span>
      </div>
    </footer>
  );
}
