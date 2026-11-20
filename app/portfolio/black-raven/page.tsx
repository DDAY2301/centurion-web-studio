import type { Metadata } from 'next';
import CaseStudyPage from '@/components/CaseStudyPage';
import { getPortfolioProject } from '@/lib/portfolio-projects';

const project = getPortfolioProject('black-raven')!;

export const metadata: Metadata = {
  title: 'Black Raven Solutions — referenca',
  description: 'Predstavitev spletnega projekta Black Raven Solutions, Wilderness Academy.',
};

export default function PortfolioCaseStudy() {
  return <CaseStudyPage project={project} />;
}
