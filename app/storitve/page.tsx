import type { Metadata } from 'next';
import Link from 'next/link';
import PageIntro from '@/components/PageIntro';

export const metadata: Metadata = { title: 'Storitve', description: 'Oblikovanje, izdelava in izboljševanje spletnih strani z Lumeli.' };

const services = [
  { title: 'Spletne strani za podjetja', description: 'Pregledna in privlačna spletna predstavitev, ki deluje na telefonu, tablici in računalniku.', icon: '01' },
  { title: 'Spletne pristajalne strani', description: 'Osredotočena predstavitev ponudbe, dogodka ali storitve z jasnim naslednjim korakom.', icon: '02' },
  { title: 'Prenova obstoječih strani', description: 'Novi pogled na obstoječo spletno stran — od vizualnega jezika do uporabniške poti.', icon: '03' },
  { title: 'Digitalni produkti', description: 'Prilagojene spletne funkcionalnosti in uporabniške izkušnje, kjer običajna predstavitev ni dovolj.', icon: '04' },
  { title: 'SEO in dostopnost', description: 'Tehnično premišljena struktura, berljiva vsebina in dobra osnova za iskalnike.', icon: '05' },
  { title: 'Vzdrževanje in izboljšave', description: 'Posodobitve, tehnični popravki in postopna rast, tudi po prvi objavi spletne strani.', icon: '06' },
];

export default function ServicesPage() {
  return (
    <main id="main">
      <PageIntro eyebrow="Naše storitve" title="Vse, kar potrebuje dobra spletna prisotnost." description="Od prve zamisli do zadnje podrobnosti. Izberemo pristop, ki ustreza vašemu projektu, ne obratno." />
      <section className="bg-white px-5 py-20 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article key={service.icon} className="rounded-[1.75rem] border border-[#dce4d9] p-8">
              <span className="text-xs font-bold tracking-[.2em] text-[#648172]">{service.icon}</span>
              <h2 className="mt-10 text-2xl font-semibold tracking-[-.04em] text-[#293b34]">{service.title}</h2>
              <p className="mt-5 text-sm leading-7 text-[#53675d]">{service.description}</p>
              <Link href="/kontakt" className="mt-8 inline-flex text-sm font-semibold text-[#416b59] underline-offset-4 hover:underline">Pogovor o projektu ↗</Link>
            </article>
          ))}
        </div>
      </section>
      <section className="bg-[#e6eee4] px-5 py-20 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6">
          <div><p className="text-sm font-semibold text-[#416b59]">Izberite pravo izhodišče</p><h2 className="mt-3 text-3xl font-semibold tracking-[-.05em]">Različni projekti. Pristop po meri.</h2></div>
          <Link href="/paketi" className="rounded-full bg-[#416b59] px-8 py-4 text-sm font-semibold text-white hover:bg-[#304f42]">Oglej si pakete ↗</Link>
        </div>
      </section>
    </main>
  );
}
