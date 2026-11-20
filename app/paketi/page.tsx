import type { Metadata } from 'next';
import Link from 'next/link';
import PageIntro from '@/components/PageIntro';

export const metadata: Metadata = { title: 'Paketi', description: 'Primerjajte tri izhodišča za spletni projekt pri Lumeli.' };

const packages = [
  { title: 'Start', subtitle: 'Za prvi korak v splet', summary: 'Jasna in privlačna spletna predstavitev za manjše projekte.', features: ['Osnovna vsebinska struktura', 'Odzivna oblikovna izvedba', 'Priprava za objavo'] },
  { title: 'Business', subtitle: 'Za podjetja v razvoju', summary: 'Večstranska predstavitev s poudarkom na storitvah in uporabniški poti.', features: ['Načrtovanje informacij', 'Več vsebinskih podstrani', 'Osnova tehničnega SEO', 'Preverjanje na različnih napravah'] },
  { title: 'Custom', subtitle: 'Za posebne zamisli', summary: 'Rešitve, ki potrebujejo lasten pristop in prilagojene funkcionalnosti.', features: ['Razvoj po dogovorjenem obsegu', 'Uporabniški tokovi po meri', 'Postopna nadgradnja projekta'] },
];

export default function PaketiPage() {
  return (
    <main id="main">
      <PageIntro eyebrow="Paketi" title="Pravo izhodišče za vsako idejo." description="Obseg in cena se določita glede na cilje projekta. Spodnji paketi predstavljajo različne tipe sodelovanja, ne vnaprej določene ponudbe." />
      <section className="bg-white px-5 py-20 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-3">
          {packages.map((item, index) => (
            <article key={item.title} className={`flex flex-col rounded-[2rem] border p-8 ${index === 1 ? 'border-[#94b4a0] bg-[#edf3eb]' : 'border-[#dce4d9] bg-white'}`}>
              <p className="text-xs font-bold uppercase tracking-[.19em] text-[#648172]">{item.subtitle}</p>
              <h2 className="mt-6 text-4xl font-semibold tracking-[-.06em]">{item.title}<span className="text-[#c98686]">.</span></h2>
              <p className="mt-5 min-h-24 text-sm leading-7 text-[#53675d]">{item.summary}</p>
              <ul className="my-8 flex-1 space-y-4 border-t border-[#dce4d9] pt-7">
                {item.features.map((feature) => <li key={feature} className="flex gap-3 text-sm text-[#425b4e]"><span className="text-[#416b59]" aria-hidden="true">✓</span>{feature}</li>)}
              </ul>
              <Link href="/kontakt" className="rounded-full bg-[#416b59] px-6 py-3 text-center text-sm font-semibold text-white hover:bg-[#304f42]">Pogovorimo se ↗</Link>
            </article>
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <h2 className="text-3xl font-semibold tracking-[-.05em]">Želite bolj prilagojeno rešitev?</h2>
        <p className="mt-4 max-w-xl leading-8 text-[#53675d]">Poglejte še, kako pripravimo ponudbo, in izberimo obseg, ki ima za vas največ smisla.</p>
        <Link href="/ponudba" className="mt-7 inline-flex rounded-full border border-[#416b59] px-7 py-3 text-sm font-semibold text-[#416b59] hover:bg-[#dce9df]">Kako poteka ponudba ↗</Link>
      </section>
    </main>
  );
}
