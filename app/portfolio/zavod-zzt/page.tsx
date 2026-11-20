import type { Metadata } from 'next';
import CaseStudyPage from '@/components/CaseStudyPage';
import { getPortfolioProject } from '@/lib/portfolio-projects';

const project = getPortfolioProject('zavod-zzt')!;

export const metadata: Metadata = {
  title: 'Zavod ZZT — referenca',
  description: 'Predstavitev spletnega projekta Zavod ZZT.',
};

export default function ZavodZZTCaseStudy() {
  return <CaseStudyPage project={project} />;
}
