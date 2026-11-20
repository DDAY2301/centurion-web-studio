'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { isCurrentPage, siteNavigation } from '@/lib/site-navigation';

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#dce4d9] bg-[#f8f5ef]/95 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 px-5 sm:px-8">
        <Link href="/" className="shrink-0 text-[2rem] font-semibold tracking-[-0.065em] text-[#293b34]" aria-label="Lumeli – domov" onClick={() => setOpen(false)}>
          lumeli<span className="text-[#c98686]">.</span>
        </Link>
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Glavna navigacija">
          {siteNavigation.map((item) => {
            const active = isCurrentPage(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? 'page' : undefined}
                className={`rounded-full px-3.5 py-2 text-[0.88rem] font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#416b59] ${active ? 'bg-[#dce9df] text-[#293b34]' : 'text-[#50655b] hover:bg-[#e9eee7] hover:text-[#293b34]'}`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <button
          type="button"
          aria-label={open ? 'Zapri meni' : 'Odpri meni'}
          aria-expanded={open}
          aria-controls="lumeli-mobile-nav"
          onClick={() => setOpen((value) => !value)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#c8d5c9] text-[#293b34] hover:bg-[#dce9df] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#416b59] lg:hidden"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
            {open ? <path d="M5 5l14 14M19 5L5 19" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>
      {open && (
        <nav id="lumeli-mobile-nav" aria-label="Mobilna navigacija" className="border-t border-[#dce4d9] bg-[#f8f5ef] px-5 pb-5 pt-3 shadow-lg lg:hidden">
          <ul className="mx-auto grid max-w-7xl gap-1">
            {siteNavigation.map((item) => {
              const active = isCurrentPage(pathname, item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? 'page' : undefined}
                    onClick={() => setOpen(false)}
                    className={`block rounded-xl px-4 py-3 text-base font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#416b59] ${active ? 'bg-[#dce9df] text-[#293b34]' : 'text-[#50655b] hover:bg-[#e9eee7]'}`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </header>
  );
}
