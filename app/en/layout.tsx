import type { Metadata } from 'next';
export const metadata: Metadata = { title: { default: 'Lumeli — websites and digital solutions', template: '%s | Lumeli' }, description: 'Lumeli is a creative digital studio for website design and development.', openGraph: { title: 'Lumeli — digital studio', description: 'Thoughtful websites and digital solutions.', locale: 'en_GB', siteName: 'Lumeli', type: 'website' } };
export default function EnglishLayout({ children }: { children: React.ReactNode }) { return <div lang="en">{children}</div>; }
