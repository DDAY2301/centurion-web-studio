import type { Metadata } from 'next';
import Link from 'next/link';
import ProjectCard from '@/components/ProjectCard';
import { portfolioProjects } from '@/lib/portfolio-projects';

export const metadata: Metadata = {
  title: 'Reference',
  description: 'Izbor spletnih projektov Lumeli: BlogLab, Black Raven Solutions, Zavod ZZT in Moj Glas Šteje.',
};

export default function PortfolioPage() {
  return (
    <main id="main" className="bg-[#f8f5ef]">
      <section className="mx-auto max-w-7xl px-5 pb-20 pt-20 sm:px-8 sm:pt-28">
        <p className="text-xs font-semibold uppercase tracking-[.2em] text-[#416b59]">Izbrane reference</p>
        <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-[1.08] tracking-[-.07em] sm:text-7xl">Vsaka dobra zgodba ima svojo digitalno podobo<span className="text-[#c98686]">.</span></h1>
        <p className="mt-8 max-w-2xl text-lg leading-9 text-[#53675d]">Štirje različni projekti, štiri različna izhodišča. Oglejte si njihove predstavitve in obiščite resnične spletne strani.</p>
      </section>
      <section className="border-t border-[#e1e5dd] bg-white px-5 py-20 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-7 md:grid-cols-2">
          {portfolioProjects.map((project, index) => <ProjectCard key={project.slug} project={project} number={index + 1} />)}
        </div>
      </section>
      <section className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-7 px-5 py-20 sm:px-8">
        <h2 className="max-w-2xl text-3xl font-semibold tracking-[-.05em] sm:text-4xl">Naslednji projekt bi lahko bil vaš.</h2>
        <Link href="/kontakt" className="rounded-full bg-[#416b59] px-8 py-4 text-sm font-semibold text-white hover:bg-[#304f42]">Začnimo pogovor ↗</Link>
      </section>
    </main>
  );
}
