import type { Metadata } from 'next';
import Link from 'next/link';
import PageIntro from '@/components/PageIntro';

export const metadata: Metadata = { title: 'Kontakt', description: 'Začnite pogovor z Lumeli o svoji spletni strani ali digitalnem projektu.' };

export default function ContactPage() {
  return (
    <main id="main">
      <PageIntro eyebrow="Kontakt" title="Povejte kaj o vaši ideji." description="Nova spletna stran, prenova ali projekt po meri? Dobro izhodišče je pogovor o tem, kaj si želite doseči." />
      <section className="bg-white px-5 py-24 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.2fr_1fr]">
          <div className="rounded-[2rem] bg-[#e3ede3] p-9 sm:p-12">
            <p className="text-xs font-semibold uppercase tracking-[.2em] text-[#416b59]">Za začetek</p>
            <h2 className="mt-6 text-3xl font-semibold tracking-[-.05em]">Skupaj najdemo pravo smer.</h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-[#425b4e]">Pri prvem pogovoru nam pomagajo informacije o dejavnosti, ciljnih obiskovalcih, želenih podstraneh in časovnem okviru. Priprava teh podatkov ni pogoj, je pa dober začetek.</p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link href="/storitve" className="rounded-full bg-[#416b59] px-7 py-3 text-sm font-semibold text-white hover:bg-[#304f42]">Naše storitve ↗</Link>
              <Link href="/ponudba" className="rounded-full border border-[#416b59] px-7 py-3 text-sm font-semibold text-[#416b59] hover:bg-white/60">Kako sodelujemo ↗</Link>
            </div>
          </div>
          <aside className="rounded-[2rem] border border-[#dce4d9] p-9 sm:p-12">
            <p className="text-xs font-semibold uppercase tracking-[.2em] text-[#416b59]">Kontaktni kanal</p>
            <h2 className="mt-6 text-2xl font-semibold tracking-tight">Pišite nam.</h2>
            <p className="mt-6 text-base leading-8 text-[#53675d]">Za povpraševanje, ponudbo ali informacije o projektu nam pošljite e-poštno sporočilo.</p>
            <a href="mailto:dan.grmusa@gmail.com" className="mt-6 inline-block break-all text-lg font-semibold text-[#416b59] underline underline-offset-4">dan.grmusa@gmail.com</a>
            <a href="mailto:dan.grmusa@gmail.com" className="mt-5 flex w-fit rounded-lg bg-[#20362d] px-6 py-3 text-sm font-semibold text-white hover:bg-[#365245]">Pošljite e-pošto ↗</a>
            <p className="mt-7 text-sm font-medium text-[#416b59]">Lumeli · blagovna znamka Centurion d.o.o.</p>
          </aside>
        </div>
      </section>
    </main>
  );
}
