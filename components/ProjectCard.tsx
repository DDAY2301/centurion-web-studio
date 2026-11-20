import Link from 'next/link';
import type { PortfolioProject } from '@/lib/portfolio-projects';

const tones = {
  sage: 'from-[#dce9df] to-[#f5f2e9]',
  ink: 'from-[#c8d4cd] to-[#eef0eb]',
  rose: 'from-[#e9b8b0] to-[#f9eee9]',
  lavender: 'from-[#eae5f2] to-[#faf7f5]',
};

export default function ProjectCard({ project, number }: { project: PortfolioProject; number: number }) {
  const href = `/portfolio/${project.slug}`;
  return (
    <article className="group overflow-hidden rounded-[2rem] border border-[#dce2d8] bg-white shadow-[0_14px_35px_rgba(41,59,52,.04)] transition-transform duration-300 hover:-translate-y-1">
      <Link href={href} aria-label={`Oglej si projekt ${project.name}`} className="block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-[#416b59]">
        <div className={`relative flex min-h-[250px] flex-col justify-between overflow-hidden bg-gradient-to-br p-7 sm:min-h-[320px] sm:p-10 ${tones[project.accent]}`}>
          <span className="text-xs font-semibold uppercase tracking-[.23em] text-[#416b59]">Projekt {String(number).padStart(2, '0')}</span>
          <div>
            <p className="mb-2 text-sm font-medium text-[#5d7166]">{project.category}</p>
            <h3 className="max-w-lg text-4xl font-semibold tracking-[-0.055em] text-[#293b34] sm:text-5xl">{project.name}</h3>
            <p className="mt-3 text-sm text-[#53675d]">{project.domain}</p>
          </div>
          <div className="pointer-events-none absolute -bottom-12 -right-8 h-48 w-48 rounded-full border-[28px] border-white/40 transition-transform duration-500 group-hover:scale-110" aria-hidden="true" />
        </div>
      </Link>
      <div className="space-y-5 p-7 sm:p-8">
        <p className="text-sm leading-7 text-[#53675d]">{project.introduction}</p>
        <div className="flex flex-wrap items-center gap-5">
          <Link href={href} className="inline-flex items-center gap-2 text-sm font-semibold text-[#416b59] underline-offset-4 hover:underline">Oglej si projekt <span aria-hidden="true">↗</span></Link>
          <a href={project.url} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-[#53675d] underline-offset-4 hover:underline">Obišči spletno stran <span aria-hidden="true">↗</span></a>
        </div>
      </div>
    </article>
  );
}
