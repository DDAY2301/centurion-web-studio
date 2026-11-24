'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { isCurrentPage, siteNavigation } from '@/lib/site-navigation';
import { englishLabels, englishPath, localePath } from '@/lib/locales';

export default function SiteHeader() {
  const pathname = usePathname();
  const { english, path, href } = localePath(pathname);
  useEffect(() => { document.documentElement.lang = english ? 'en' : 'sl'; }, [english]);
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    function handleEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setOpen(false);
        toggleRef.current?.focus();
      }
    }
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-[#d9ded4] bg-[#fbfaf6]/95 shadow-[0_4px_24px_rgba(32,54,45,.035)] backdrop-blur-xl">
      <div className="mx-auto flex min-h-[72px] max-w-[1440px] items-center justify-between gap-3 px-3 sm:px-8 lg:gap-5">
        <Link href={href("/")} className="shrink-0 text-[1.8rem] sm:text-[2rem] font-semibold leading-none tracking-[-.075em] text-[#20362d]" aria-label={english ? "Lumeli – home" : "Lumeli – domov"} onClick={() => setOpen(false)}>
          lumeli<span className="text-[#b46b56]">.</span>
        </Link>

        <div className="flex items-center gap-2 sm:gap-3">
        <div aria-label="Language / Jezik" className="flex shrink-0 items-center rounded-lg border border-[#c6d0c4] p-1 text-xs font-semibold">
          <Link href={path} hrefLang="sl" lang="sl" aria-current={!english ? "true" : undefined} onClick={() => setOpen(false)} className={"rounded px-2 py-2 " + (!english ? "bg-[#20362d] text-white" : "text-[#42564b]")}>SL</Link>
          <Link href={englishPath(path)} hrefLang="en" lang="en" aria-current={english ? "true" : undefined} onClick={() => setOpen(false)} className={"rounded px-2 py-2 " + (english ? "bg-[#20362d] text-white" : "text-[#42564b]")}>EN</Link>
        </div>
        <Link href={href("/kontakt")} className="hidden shrink-0 items-center gap-4 rounded-lg bg-[#20362d] px-5 py-3.5 text-sm font-semibold text-[#f6f3ec] transition-colors hover:bg-[#365245] sm:inline-flex">
          {english ? "Start a project" : "Začnimo projekt"} <span aria-hidden="true">↗</span>
        </Link>

        <button
          ref={toggleRef}
          type="button"
          aria-label={english ? (open ? "Close menu" : "Open menu") : (open ? "Zapri meni" : "Odpri meni")}
          aria-expanded={open}
          aria-controls="lumeli-menu"
          onClick={() => setOpen((value) => !value)}
          className="inline-flex min-h-[44px] items-center gap-2 rounded-lg border border-[#c6d0c4] px-3 text-sm font-semibold text-[#20362d] transition-colors hover:bg-[#e8ebe2]"
        >
          <span>{english ? (open ? 'Close' : 'Menu') : (open ? 'Zapri' : 'Meni')}</span>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
            {open ? <path d="M5 5l14 14M19 5L5 19" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
        </div>
      </div>
      <nav id="lumeli-menu" aria-label={english ? "Main navigation" : "Glavna navigacija"} hidden={!open} className="max-h-[calc(100dvh-72px)] overflow-y-auto border-t border-[#d9ded4] bg-[#fbfaf6] px-5 pb-5 pt-4 shadow-lg">
        <ul className="mx-auto grid max-w-5xl gap-2 sm:grid-cols-2 lg:grid-cols-4">
          {siteNavigation.map((item, index) => {
            const active = isCurrentPage(path, item.href);
            return (
              <li key={item.href}>
                <Link
                  href={href(item.href)}
                  aria-current={active ? 'page' : undefined}
                  onClick={() => setOpen(false)}
                  className={'flex min-h-[48px] items-center justify-between rounded-lg px-4 py-3 text-base font-semibold transition-colors ' + (active ? 'bg-[#e5ebe1] text-[#20362d]' : 'text-[#42564b] hover:bg-[#eff1ea]')}
                >
                  <span>{english ? englishLabels[index] : item.label}</span>
                  <span aria-hidden="true" className="text-[#a65b47]">↗</span>
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="mx-auto mt-4 max-w-5xl border-t border-[#d9ded4] pt-4">
          <Link href={href("/kontakt")} onClick={() => setOpen(false)} className="flex min-h-[48px] items-center justify-between rounded-lg bg-[#20362d] px-4 py-3 font-semibold text-[#f6f3ec] hover:bg-[#365245]">
            {english ? "Start a project" : "Začnimo projekt"} <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </nav>
    </header>
  );
}
