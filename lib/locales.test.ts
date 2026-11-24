import { localePath, englishPath } from './locales';
import { siteNavigation } from './site-navigation';
import { englishPages } from './english-content';
describe('English localization', () => {
  it('preserves equivalent pages when switching languages', () => { expect(localePath('/en/portfolio/blog-lab/').path).toBe('/portfolio/blog-lab'); expect(englishPath('/')).toBe('/en'); expect(localePath('/en').href('/kontakt')).toBe('/en/kontakt'); });
  it('covers every navigation page, privacy and case studies', () => { for(const item of siteNavigation) expect(englishPages[item.href.slice(1)]).toBeDefined(); expect(englishPages['politika-zasebnosti']).toBeDefined(); for(const slug of ['blog-lab','black-raven','zavod-zzt','moj-glas-steje']) expect(englishPages['portfolio/'+slug]).toBeDefined(); });
});
