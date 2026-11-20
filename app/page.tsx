import Link from 'next/link';
import BlackFridayBanner from '@/components/BlackFridayBanner';
import ProjectCard from '@/components/ProjectCard';
import { portfolioProjects } from '@/lib/portfolio-projects';

export const revalidate = 300;

const capabilities = [
  {
    number: '01',
    title: 'Zasnova',
    description: 'Najprej razjasnimo sporočilo, občinstvo in pot, ki obiskovalca pripelje do vas.',
  },
  {
    number: '02',
    title: 'Oblikovanje',
    description: 'Vizualna identiteta, tipografija in struktura, ki odražajo vaše podjetje.',
  },
  {
    number: '03',
    title: 'Razvoj',
    description: 'Hitre, odzivne spletne strani z urejeno tehnično osnovo in prostorom za rast.',
  },
];

export default function HomePage() {
  return (
    <main id="main">
      <BlackFridayBanner />

      <section className="relative overflow-hidden bg-[#f6f3ec] text-[#20362d]">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-10">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#d9ded4] py-5 text-[11px] font-semibold uppercase tracking-[.18em] text-[#57685d]">
            <span>Lumeli / Digitalni studio</span>
            <span className="hidden sm:inline">Oblikovanje &amp; razvoj spletnih strani</span>
            <span>Slovenija · 2026</span>
          </div>

          <div className="grid items-center gap-12 py-16 sm:py-24 lg:grid-cols-[minmax(0,1.18fr)_minmax(330px,.82fr)] lg:gap-20 lg:py-28">
            <div>
              <p className="mb-7 flex items-center gap-3 text-xs font-semibold uppercase tracking-[.21em] text-[#a65b47]">
                <span className="h-px w-9 bg-[#a65b47]" aria-hidden="true" />
                Za podjetja, ki razmišljajo naprej
              </p>

              <h1 className="max-w-[13ch] text-[clamp(3.55rem,7vw,7.5rem)] font-semibold leading-[.97] tracking-[-.078em]">
                Spletne strani, ki pustijo <span className="font-serif font-normal italic tracking-[-.07em] text-[#b46b56]">vtis.</span>
              </h1>

              <p className="mt-9 max-w-[37rem] text-base leading-8 text-[#566a5d] sm:text-lg sm:leading-9">
                Oblikujemo in razvijamo spletne strani, ki vaše podjetje predstavijo jasno,
                samozavestno in profesionalno. Brez generičnih predlog. S premislekom o vsaki podrobnosti.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-3">
                <Link
                  href="/portfolio"
                  className="inline-flex min-h-13 items-center justify-center gap-6 bg-[#20362d] px-7 py-4 text-sm font-semibold text-white transition-colors hover:bg-[#365245]"
                >
                  Oglejte si naše delo <span aria-hidden="true">↗</span>
                </Link>
                <Link
                  href="/storitve"
                  className="inline-flex min-h-13 items-center justify-center gap-6 border border-[#9eaa9f] px-7 py-4 text-sm font-semibold text-[#20362d] transition-colors hover:border-[#20362d] hover:bg-white/70"
                >
                  Kaj lahko ustvarimo <span aria-hidden="true">↗</span>
                </Link>
              </div>

              <p className="mt-12 border-l-2 border-[#b46b56] pl-5 text-sm leading-7 text-[#65746a]">
                Lumeli je digitalni studio pod okriljem Centurion d.o.o.
              </p>
            </div>

            <div className="relative mx-auto w-full max-w-[540px] pb-7 pl-5 sm:pl-8 lg:pb-12">
              <div className="relative flex aspect-[.89] flex-col justify-between overflow-hidden bg-[#20362d] p-7 text-[#f4f2e9] sm:p-10">
                <div className="flex items-center justify-between border-b border-[#668074]/45 pb-5 text-[11px] font-semibold uppercase tracking-[.2em]">
                  <span>Digital first</span>
                  <span>Studio / Lumeli</span>
                </div>
                <div className="relative">
                  <p className="font-serif text-[clamp(7rem,15vw,13rem)] italic leading-none tracking-[-.12em] text-[#cbd8ca]" aria-hidden="true">L.</p>
                  <p className="relative -mt-3 max-w-[15rem] text-3xl font-semibold leading-[1.08] tracking-[-.055em] sm:text-4xl">
                    Manj hrupa.<br />Več značaja.
                  </p>
                </div>
                <div className="flex flex-wrap justify-between gap-3 border-t border-[#668074]/45 pt-5 text-[11px] uppercase tracking-[.16em] text-[#c8d7cb]">
                  <span>Strategija</span>
                  <span>Oblikovanje</span>
                  <span>Razvoj</span>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 flex w-[70%] items-center justify-between bg-[#c58f78] px-5 py-5 text-xs font-semibold uppercase tracking-[.12em] text-[#20362d] sm:px-7 sm:py-6">
                <span>Digitalno, vendar osebno</span>
                <span aria-hidden="true">↗</span>
              </div>
            </div>
          </div>

          <div className="grid gap-5 border-t border-[#d9ded4] py-8 text-sm text-[#596d60] sm:grid-cols-3">
            <p><strong className="mr-3 font-semibold text-[#20362d]">01 /</strong> Spletne strani po meri</p>
            <p><strong className="mr-3 font-semibold text-[#20362d]">02 /</strong> Jasna uporabniška izkušnja</p>
            <p><strong className="mr-3 font-semibold text-[#20362d]">03 /</strong> Razvoj in dolgoročna podpora</p>
          </div>
        </div>
      </section>

      <section className="bg-[#fffefa] px-6 py-24 text-[#20362d] sm:px-10 sm:py-32">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-14 grid gap-7 border-b border-[#d9ded4] pb-10 lg:grid-cols-[.55fr_1fr]">
            <p className="text-xs font-semibold uppercase tracking-[.22em] text-[#a65b47]">01 — Izbrani projekti</p>
            <div className="flex flex-wrap items-end justify-between gap-8">
              <h2 className="max-w-[14ch] text-[clamp(2.7rem,5vw,5.2rem)] font-semibold leading-[1.02] tracking-[-.065em]">
                Naše delo pove več kot obljube.
              </h2>
              <Link href="/portfolio" className="shrink-0 border-b border-[#20362d] pb-1 text-sm font-semibold hover:text-[#a65b47]">
                Vse reference ↗
              </Link>
            </div>
          </div>

          <div className="grid gap-x-7 gap-y-14 md:grid-cols-2">
            {portfolioProjects.map((project, index) => (
              <ProjectCard key={project.slug} project={project} number={index + 1} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#e8e9df] px-6 py-24 text-[#20362d] sm:px-10 sm:py-32">
        <div className="mx-auto grid max-w-[1440px] gap-14 lg:grid-cols-[.9fr_1.1fr] lg:gap-24">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[.22em] text-[#a65b47]">02 — Kako delamo</p>
            <h2 className="mt-7 max-w-[13ch] text-[clamp(2.8rem,5vw,5.5rem)] font-semibold leading-[1.02] tracking-[-.065em]">
              Dobro spletno mesto se začne s pravo idejo.
            </h2>
            <p className="mt-7 max-w-md text-base leading-8 text-[#566a5d]">
              Ne prodajamo samo spletnih strani. Pomagamo oblikovati digitalno predstavitev, ki ima razlog, smer in značaj.
            </p>
            <Link href="/storitve" className="mt-10 inline-flex border-b border-[#20362d] pb-2 text-sm font-semibold">
              Raziščite storitve ↗
            </Link>
          </div>

          <div className="border-t border-[#c2cdc0]">
            {capabilities.map((item) => (
              <div key={item.number} className="grid gap-4 border-b border-[#c2cdc0] py-9 sm:grid-cols-[4rem_1fr] sm:gap-8">
                <span className="pt-1 text-xs font-bold tracking-[.18em] text-[#a65b47]">{item.number}</span>
                <div>
                  <h3 className="text-3xl font-semibold tracking-[-.05em]">{item.title}</h3>
                  <p className="mt-3 max-w-lg text-sm leading-7 text-[#566a5d]">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#20362d] px-6 py-24 text-[#f6f3ec] sm:px-10 sm:py-32">
        <div className="mx-auto grid max-w-[1440px] items-end gap-10 lg:grid-cols-[1fr_auto]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[.22em] text-[#c58f78]">03 — Naslednji korak</p>
            <h2 className="mt-7 max-w-[17ch] text-[clamp(2.8rem,5.6vw,6rem)] font-semibold leading-[1.02] tracking-[-.065em]">
              Imate projekt v mislih? Začnimo pri dobri osnovi.
            </h2>
          </div>
          <Link href="/kontakt" className="inline-flex items-center justify-between gap-10 bg-[#c58f78] px-8 py-5 text-sm font-semibold text-[#20362d] transition-colors hover:bg-[#ddaa94]">
            Kako začeti <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
