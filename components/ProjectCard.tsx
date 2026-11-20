import Link from 'next/link';
import type { PortfolioProject } from '@/lib/portfolio-projects';

const tones = {
  sage: {
    surface: 'bg-[#dbe4d4] text-[#20362d]',
    line: 'border-[#aebca9]',
    secondary: 'text-[#435e4f]',
  },
  ink: {
    surface: 'bg-[#202c2a] text-[#f5f2e9]',
    line: 'border-[#70817a]',
    secondary: 'text-[#c6d4ca]',
  },
  rose: {
    surface: 'bg-[#ebd5ca] text-[#3d2928]',
    line: 'border-[#d2ac9f]',
    secondary: 'text-[#795d58]',
  },
  lavender: {
    surface: 'bg-[#e4e1eb] text-[#302d42]',
    line: 'border-[#c0bcca]',
    secondary: 'text-[#625d77]',
  },
};

export default function ProjectCard({ project, number }: { project: PortfolioProject; number: number }) {
  const href = '/portfolio/' + project.slug;
  const tone = tones[project.accent];

  return (
    <article className="group">
      <Link href={href} aria-label={'Preberite več o projektu ' + project.name} className="block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#20362d]">
        <div className={'relative flex min-h-[310px] flex-col justify-between overflow-hidden p-7 transition-transform duration-300 group-hover:-translate-y-1 sm:min-h-[380px] sm:p-10 ' + tone.surface}>
          <div className={'flex items-center justify-between gap-4 border-b pb-5 text-[11px] font-semibold uppercase tracking-[.18em] ' + tone.line}>
            <span>{project.category}</span>
            <span>{String(number).padStart(2, '0')} / 04</span>
          </div>
          <div className="relative z-10 py-10">
            <p className={'mb-5 text-sm font-medium ' + tone.secondary}>{project.eyebrow}</p>
            <h3 className="max-w-[14ch] text-4xl font-semibold leading-[1.06] tracking-[-.07em] sm:text-6xl">
              {project.name}
            </h3>
          </div>
          <div className={'flex items-center justify-between gap-4 border-t pt-5 text-sm font-medium ' + tone.line}>
            <span>{project.domain}</span>
            <span className="text-2xl transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden="true">↗</span>
          </div>
        </div>
      </Link>
      <div className="flex flex-wrap items-start justify-between gap-6 border-b border-[#d9ded4] py-6">
        <p className="max-w-md flex-1 text-sm leading-7 text-[#566a5d]">{project.introduction}</p>
        <div className="flex flex-col gap-3 text-sm font-semibold text-[#20362d]">
          <Link href={href} className="underline-offset-4 hover:underline">Predstavitev ↗</Link>
          <a href={project.url} target="_blank" rel="noopener noreferrer" className="underline-offset-4 hover:underline">Spletna stran ↗</a>
        </div>
      </div>
    </article>
  );
}
