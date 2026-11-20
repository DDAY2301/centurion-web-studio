import Link from 'next/link';
import ProjectCard from '@/components/ProjectCard';
import { portfolioProjects } from '@/lib/portfolio-projects';

const serviceHighlights = [
  { number: '01', title: 'Spletne strani', text: 'Estetika in struktura, ki obiskovalca prepričata brez nepotrebnega hrupa.' },
  { number: '02', title: 'Digitalne izkušnje', text: 'Uporabne, odzivne rešitve za podjetja in projekte vseh velikosti.' },
  { number: '03', title: 'Razvoj in podpora', text: 'Čista izvedba, skrb za podrobnosti in premišljeno nadaljnje izboljševanje.' },
];

export default function HomePage() {
  return (
    <main id="main">
      <section className="relative overflow-hidden bg-[#f8f5ef]">
        <div className="pointer-events-none absolute -right-24 top-4 h-96 w-96 rounded-full bg-[#dce9df] blur-3xl" aria-hidden="true" />
        <div className="mx-auto grid max-w-7xl gap-12 px-5 pb-24 pt-20 sm:px-8 sm:pt-28 lg:grid-cols-[1.5fr_0.8fr] lg:items-end lg:pb-32">
          <div className="relative z-10">
            <p className="mb-8 inline-flex rounded-full border border-[#bfd0c2] bg-white/60 px-5 py-2 text-xs font-semibold uppercase tracking-[.2em] text-[#416b59]">Lumeli · Creative digital studio</p>
            <h1 className="max-w-5xl text-5xl font-semibold leading-[1.08] tracking-[-.075em] text-[#293b34] sm:text-7xl xl:text-[6.5rem]">
              Lepe spletne strani.<br /><span className="text-[#668979]">Pametne</span> rešitve<span className="text-[#ca888c]">.</span>
            </h1>
            <p className="mt-9 max-w-2xl text-lg leading-9 text-[#53675d] sm:text-xl">Oblikujemo digitalne izkušnje, ki so prijetne za uporabo, jasne v sporočilu in narejene za ljudi.</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/portfolio" className="rounded-full bg-[#416b59] px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-[#304f42]">Oglej si naše delo ↗</Link>
              <Link href="/storitve" className="rounded-full border border-[#a8bdb0] px-8 py-4 text-sm font-semibold text-[#293b34] transition-colors hover:bg-[#dce9df]">Naše storitve</Link>
            </div>
          </div>
          <div className="relative hidden min-h-[340px] overflow-hidden rounded-[3rem] border border-[#d7e0d4] bg-[#e2eade] p-10 lg:flex lg:flex-col lg:justify-between">
            <div className="flex justify-between text-xs font-semibold uppercase tracking-[.19em] text-[#587463]"><span>Design with care</span><span>↗</span></div>
            <div><p className="text-6xl font-semibold tracking-[-.08em] text-[#416b59]">lovely<br />by design<span className="text-[#c98686]">.</span></p><p className="mt-5 max-w-[18rem] text-sm leading-7 text-[#53675d]">Lovely design. Clever technology.</p></div>
            <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full border-[42px] border-white/40" aria-hidden="true" />
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-7">
            <div><p className="text-xs font-semibold uppercase tracking-[.2em] text-[#416b59]">Izbrano delo</p><h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-.06em] sm:text-6xl">Najprej naj spregovorijo projekti.</h2></div>
            <Link href="/portfolio" className="text-sm font-semibold text-[#416b59] underline-offset-4 hover:underline">Vse reference ↗</Link>
          </div>
          <div className="grid gap-7 md:grid-cols-2">
            {portfolioProjects.map((project, index) => <ProjectCard key={project.slug} project={project} number={index + 1} />)}
          </div>
        </div>
      </section>

      <section className="bg-[#e8eee5] py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <p className="text-xs font-semibold uppercase tracking-[.2em] text-[#416b59]">Kaj počnemo</p>
          <div className="mt-5 flex flex-wrap items-end justify-between gap-7">
            <h2 className="max-w-2xl text-4xl font-semibold tracking-[-.06em] sm:text-6xl">Dober dizajn je šele začetek.</h2>
            <Link href="/storitve" className="text-sm font-semibold text-[#416b59] underline-offset-4 hover:underline">Razišči storitve ↗</Link>
          </div>
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {serviceHighlights.map((service) => (
              <div key={service.number} className="rounded-[1.7rem] border border-[#d3ddd1] bg-white/85 p-8">
                <span className="text-xs font-bold tracking-[.19em] text-[#628272]">{service.number}</span>
                <h3 className="mt-12 text-2xl font-semibold tracking-tight">{service.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[#53675d]">{service.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#293b34] px-5 py-24 text-[#f8f5ef] sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-10">
          <div><p className="text-xs font-semibold uppercase tracking-[.18em] text-[#b4cbb9]">Naslednji korak</p><h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-.06em] sm:text-6xl">Vaša ideja si zasluži odlično spletno stran.</h2></div>
          <Link href="/kontakt" className="inline-flex rounded-full bg-[#e9b8b0] px-9 py-4 text-sm font-semibold text-[#293b34] hover:bg-[#f1cac4]">Pogovorimo se ↗</Link>
        </div>
      </section>
    </main>
  );
}
