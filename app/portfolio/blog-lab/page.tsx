import type { Metadata } from 'next';
import CaseStudyPage from '@/components/CaseStudyPage';
import { getPortfolioProject } from '@/lib/portfolio-projects';

const project = getPortfolioProject('blog-lab')!;

export const metadata: Metadata = {
  title: 'BlogLab — referenca',
  description: 'Digitalni medij BlogLab, predstavljen v portfelju Lumeli.',
};

export default function PortfolioCaseStudy() {
  return <CaseStudyPage project={project} />;
}
