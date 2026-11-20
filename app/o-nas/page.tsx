import type { Metadata } from 'next';
import Link from 'next/link';
import PageIntro from '@/components/PageIntro';

export const metadata: Metadata = { title: 'O nas', description: 'Spoznajte Lumeli, kreativni digitalni studio pod okriljem Centurion d.o.o.' };

export default function AboutPage() {
  return (
    <main id="main">
      <PageIntro eyebrow="O Lumeli" title="Majhne podrobnosti. Velika razlika." description="Lumeli je kreativni digitalni studio pod okriljem Centurion d.o.o., usmerjen v premišljene spletne predstavitve in uporabne digitalne rešitve." />
      <section className="bg-white px-5 py-24 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div className="flex min-h-[350px] items-center rounded-[2.5rem] bg-[#e2eade] p-12"><p className="max-w-lg text-5xl font-semibold leading-tight tracking-[-.07em] text-[#416b59]">Lovely design.<br />Clever technology<span className="text-[#c98686]">.</span></p></div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[.2em] text-[#416b59]">Naš pristop</p>
            <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-[-.05em]">Oblikovanje mora nekaj povedati. Tehnologija mora nekaj omogočiti.</h2>
            <p className="mt-7 text-base leading-8 text-[#53675d]">Verjamemo v preprosto komunikacijo, pregledno strukturo in rešitve, ki jih je lepo uporabljati. Izhajamo iz ciljev projekta in vsebine, ne iz pripravljenih predlog.</p>
            <Link href="/portfolio" className="mt-8 inline-flex text-sm font-semibold text-[#416b59] underline-offset-4 hover:underline">Poglejte naše reference ↗</Link>
          </div>
        </div>
      </section>
      <section className="bg-[#edf2e9] px-5 py-20 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-8">
          <h2 className="max-w-xl text-4xl font-semibold tracking-[-.05em]">Imate projekt, pri katerem lahko pomagamo?</h2>
          <Link href="/kontakt" className="rounded-full bg-[#416b59] px-8 py-4 text-sm font-semibold text-white hover:bg-[#304f42]">Kontakt ↗</Link>
        </div>
      </section>
    </main>
  );
}
