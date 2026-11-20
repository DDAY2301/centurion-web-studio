import Link from 'next/link';
import type { PortfolioProject } from '@/lib/portfolio-projects';

export default function CaseStudyPage({ project }: { project: PortfolioProject }) {
  return (
    <main id="main" className="bg-[#f8f5ef] text-[#293b34]">
      <section className="mx-auto max-w-7xl px-5 pb-16 pt-16 sm:px-8 sm:pt-24">
        <Link href="/portfolio" className="text-sm font-semibold text-[#416b59] underline-offset-4 hover:underline">← Vse reference</Link>
        <div className="mt-12 grid items-end gap-10 lg:grid-cols-[1.5fr_1fr]">
          <div>
            <p className="mb-5 text-sm font-semibold uppercase tracking-[.19em] text-[#416b59]">{project.category}</p>
            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.08] tracking-[-0.065em] sm:text-7xl">{project.name}<span className="text-[#c98686]">.</span></h1>
            <p className="mt-7 max-w-2xl text-xl leading-8 text-[#53675d]">{project.introduction}</p>
          </div>
          <div className="rounded-3xl border border-[#dce4d9] bg-white p-7">
            <p className="text-xs font-semibold uppercase tracking-[.2em] text-[#708376]">Spletni projekt</p>
            <p className="mt-3 text-lg font-semibold">{project.domain}</p>
            <a href={project.url} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex rounded-full bg-[#416b59] px-6 py-3 text-sm font-semibold text-white hover:bg-[#304f42]">Obišči spletno stran ↗</a>
          </div>
        </div>
      </section>
      <section className="border-y border-[#dce4d9] bg-[#e7eee6] px-5 py-20 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[.19em] text-[#416b59]">Izbrano delo</p>
            <h2 className="mt-5 max-w-md text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">{project.eyebrow}</h2>
          </div>
          <div>
            <p className="text-lg leading-9 text-[#425b4e]">{project.overview}</p>
            <p className="mt-7 text-sm leading-7 text-[#5c7365]">Pri prikazu uporabljamo samo preverljive informacije. Pristne posnetke spletne strani dodamo po pregledu izvirnega javnega projekta; izmišljenih zaslonskih prikazov ne uporabljamo.</p>
          </div>
        </div>
      </section>
      <section className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6 px-5 py-16 sm:px-8">
        <div>
          <p className="text-sm font-medium text-[#648072]">Nadaljuj raziskovanje</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight">Oglej si tudi druge projekte.</h2>
        </div>
        <Link href="/portfolio" className="rounded-full border border-[#416b59] px-7 py-3 font-semibold text-[#416b59] transition-colors hover:bg-[#416b59] hover:text-white">Vse reference ↗</Link>
      </section>
    </main>
  );
}
