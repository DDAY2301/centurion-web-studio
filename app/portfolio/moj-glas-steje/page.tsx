import type { Metadata } from 'next';
import CaseStudyPage from '@/components/CaseStudyPage';
import { getPortfolioProject } from '@/lib/portfolio-projects';

const project = getPortfolioProject('moj-glas-steje')!;

export const metadata: Metadata = {
  title: 'Moj Glas Šteje — referenca',
  description: 'Predstavitev spletnega projekta Moj Glas Šteje.',
};

export default function MojGlasStejeCaseStudy() {
  return <CaseStudyPage project={project} />;
}
