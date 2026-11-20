export type PortfolioProject = {
  slug: string;
  name: string;
  domain: string;
  url: string;
  category: string;
  eyebrow: string;
  introduction: string;
  overview: string;
  accent: 'sage' | 'ink' | 'rose' | 'lavender';
};

export const portfolioProjects: PortfolioProject[] = [
  {
    slug: 'blog-lab',
    name: 'BlogLab',
    domain: 'bloglab.eu',
    url: 'https://bloglab.eu',
    category: 'Digitalni medij',
    eyebrow: 'Vsebina, ki dobi svoj prostor',
    introduction: 'Digitalni prostor za kulturo, zabavo, šport in zanimive zgodbe.',
    overview: 'Pri medijski spletni strani je pomembno, da bralec hitro najde vsebino, naslovnice in kategorije pa delujejo kot celota. BlogLab predstavljamo kot primer uredniško usmerjenega spletnega projekta.',
    accent: 'sage',
  },
  {
    slug: 'black-raven',
    name: 'Black Raven Solutions',
    domain: 'blackraven.solutions',
    url: 'https://blackraven.solutions',
    category: 'Predstavitvena spletna stran',
    eyebrow: 'Doživetja, zasidrana v naravi',
    introduction: 'Digitalna predstavitev Wilderness Academy in njenih programov v naravi.',
    overview: 'Black Raven Solutions predstavlja praktične tečaje, tabore in druge aktivnosti v naravi. V ospredju sta izrazita identiteta projekta in razumljivo raziskovanje programov.',
    accent: 'ink',
  },
  {
    slug: 'zavod-zzt',
    name: 'Zavod ZZT',
    domain: 'zavod-zzt.eu',
    url: 'https://zavod-zzt.eu',
    category: 'Organizacijska spletna stran',
    eyebrow: 'Prostor za zelene ideje',
    introduction: 'Spletna predstavitev Zavoda za zeleno tehnologijo.',
    overview: 'Referenca predstavlja digitalno podobo zavoda, namenjenega zeleni tehnologiji in okoljskim vsebinam. Posamezne funkcionalnosti preverimo ob vizualnem pregledu žive strani.',
    accent: 'sage',
  },
  {
    slug: 'moj-glas-steje',
    name: 'Moj Glas Šteje',
    domain: 'mojglassteje.eu',
    url: 'https://mojglassteje.eu',
    category: 'Projektna spletna stran',
    eyebrow: 'Jasen prostor za sporočilo',
    introduction: 'Spletna predstavitev projekta Moj Glas Šteje.',
    overview: 'Projekt je del izbora referenčnih spletnih strani Lumeli. Dokler ni opravljen pregled javne različice, ne navajamo nepreverjenih funkcionalnosti ali rezultatov.',
    accent: 'lavender',
  },
];

export function getPortfolioProject(slug: string): PortfolioProject | undefined {
  return portfolioProjects.find((project) => project.slug === slug);
}
