'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { isCurrentPage, siteNavigation } from '@/lib/site-navigation';

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#d9ded4] bg-[#f6f3ec]/95 backdrop-blur-xl">
      <div className="mx-auto flex h-[78px] max-w-[1440px] items-center justify-between gap-5 px-6 sm:px-10">
        <Link href="/" className="shrink-0 text-[2rem] font-semibold tracking-[-.075em] text-[#20362d]" aria-label="Lumeli – domov" onClick={() => setOpen(false)}>
          lumeli<span className="text-[#b46b56]">.</span>
        </Link>
        <nav className="hidden items-center gap-1 xl:flex" aria-label="Glavna navigacija">
          {siteNavigation.filter((item) => item.href !== '/kontakt').map((item) => {
            const active = isCurrentPage(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? 'page' : undefined}
                className={'px-3 py-3 text-[.84rem] font-semibold transition-colors hover:text-[#a65b47] ' + (active ? 'text-[#a65b47]' : 'text-[#42564b]')}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <Link href="/kontakt" className="hidden shrink-0 items-center gap-6 bg-[#20362d] px-5 py-3.5 text-xs font-semibold text-[#f6f3ec] transition-colors hover:bg-[#365245] xl:inline-flex">
          Začnimo projekt <span aria-hidden="true">↗</span>
        </Link>
        <button
          type="button"
          aria-label={open ? 'Zapri meni' : 'Odpri meni'}
          aria-expanded={open}
          aria-controls="lumeli-mobile-nav"
          onClick={() => setOpen((value) => !value)}
          className="inline-flex h-11 w-11 items-center justify-center border border-[#c6d0c4] text-[#20362d] hover:bg-[#e8ebe2] xl:hidden"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
            {open ? <path d="M5 5l14 14M19 5L5 19" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>
      {open && (
        <nav id="lumeli-mobile-nav" aria-label="Mobilna navigacija" className="border-t border-[#d9ded4] bg-[#f6f3ec] px-6 pb-6 pt-3 shadow-lg xl:hidden">
          <ul className="mx-auto grid max-w-[1440px] gap-1">
            {siteNavigation.map((item) => {
              const active = isCurrentPage(pathname, item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? 'page' : undefined}
                    onClick={() => setOpen(false)}
                    className={'block px-4 py-3 text-base font-semibold transition-colors ' + (active ? 'bg-[#e5e8df] text-[#a65b47]' : 'text-[#42564b] hover:bg-[#e8ebe2]')}
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
