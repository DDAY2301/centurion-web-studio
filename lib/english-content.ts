export type ContentCard = { title: string; text: string; items?: string[]; link?: string; linkLabel?: string };
export type EnglishPage = { title: string; eyebrow: string; heading: string; description: string; cards: ContentCard[]; action?: { label: string; href: string } };
export const englishPages: Record<string, EnglishPage> = {
  '': { title: 'Lumeli — websites and digital solutions', eyebrow: 'Lumeli / Digital studio', heading: 'Websites that make an impression.', description: 'We design and develop websites that present your business clearly, confidently and professionally. No generic templates. Every detail considered.', cards: [
    { title: 'Strategy', text: 'We clarify your message, audience and the journey that brings visitors to you.' },
    { title: 'Design', text: 'Visual identity, typography and structure that reflect your business.' },
    { title: 'Development', text: 'Fast, responsive websites with a solid technical foundation and room to grow.' },
    { title: 'Selected projects', text: 'Our work speaks louder than promises. Explore our four website projects.', link: '/en/portfolio', linkLabel: 'Explore our work' },
    { title: 'A great website starts with the right idea.', text: 'We do more than build websites. We help shape a digital presence with purpose, direction and character.', link: '/en/storitve', linkLabel: 'Explore services' }
  ], action: { label: 'Request a quote', href: '/en/ponudba' } },
  'storitve': { title: 'Services', eyebrow: 'Our services', heading: 'Everything a strong online presence needs.', description: 'From the first idea to the final detail. We choose the approach that fits your project, not the other way around.', cards: [
    { title: 'Business websites', text: 'A clear, attractive website that works on phones, tablets and desktops.' },
    { title: 'Landing pages', text: 'A focused presentation of an offer, event or service with a clear next step.' },
    { title: 'Website redesign', text: 'A fresh perspective on your existing website, from visual identity to the user journey.' },
    { title: 'Digital products', text: 'Custom web functionality and user experiences when a standard website is not enough.' },
    { title: 'SEO and accessibility', text: 'A sound technical structure, readable content and a strong foundation for search engines.' },
    { title: 'Maintenance and improvements', text: 'Updates, technical fixes and gradual growth, even after launch.' }
  ], action: { label: 'Explore packages', href: '/en/paketi' } },
  'paketi': { title: 'Packages', eyebrow: 'Packages', heading: 'The right starting point for every idea.', description: 'Scope and pricing depend on your project goals. These packages describe different ways of working together, rather than fixed quotations.', cards: [
    { title: 'Start', text: 'A clear, attractive web presence for smaller projects.', items: ['Core content structure', 'Responsive design', 'Launch preparation'] },
    { title: 'Business', text: 'A multi-page website focused on services and the user journey.', items: ['Information architecture', 'Multiple content pages', 'Technical SEO foundation', 'Cross-device testing'] },
    { title: 'Custom', text: 'Solutions that need a unique approach and custom functionality.', items: ['Development to an agreed scope', 'Custom user flows', 'Gradual project expansion'] }
  ], action: { label: 'How quotations work', href: '/en/ponudba' } },
  'ponudba': { title: 'Get a quote', eyebrow: 'How we work together', heading: 'A great project starts with a conversation.', description: 'No complicated processes or vague promises. We get to know your project, then define the right solution together.', cards: [
    { title: 'Discuss your idea', text: 'First we understand your goals and your intended audience.' },
    { title: 'Agree on the scope', text: 'We agree on the pages, content and features your project genuinely needs.' },
    { title: 'Prepare a proposal', text: 'We present a suitable approach, project phases and a tailored quotation.' },
    { title: 'Build and verify', text: 'Development includes content review and technical checks before launch.' }
  ], action: { label: 'Contact us', href: '/en/kontakt' } },
  'portfolio': { title: 'Portfolio', eyebrow: 'Selected projects', heading: 'Every great story has its own digital identity.', description: 'Four different projects, four different starting points. Explore their case studies and visit the actual websites.', cards: [
    { title: 'BlogLab', text: 'A digital publication for culture, entertainment, sports and interesting stories.', link: '/en/portfolio/blog-lab', linkLabel: 'Case study' },
    { title: 'Black Raven Solutions', text: 'A digital presentation of the Wilderness Academy and its outdoor programmes.', link: '/en/portfolio/black-raven', linkLabel: 'Case study' },
    { title: 'Zavod ZZT', text: 'A website for the Institute for Green Technology.', link: '/en/portfolio/zavod-zzt', linkLabel: 'Case study' },
    { title: 'Moj Glas Šteje', text: 'A website for the Moj Glas Šteje project.', link: '/en/portfolio/moj-glas-steje', linkLabel: 'Case study' }
  ], action: { label: 'Start a conversation', href: '/en/kontakt' } },
  'portfolio/blog-lab': { title: 'BlogLab — case study', eyebrow: 'Digital publication', heading: 'BlogLab.', description: 'A digital space for culture, entertainment, sports and interesting stories.', cards: [{ title: 'A place for meaningful content', text: 'A media website should help readers find content quickly, with headlines and categories working together. BlogLab illustrates an editorially focused web project.', link: 'https://bloglab.eu', linkLabel: 'Visit website' }], action: { label: 'All projects', href: '/en/portfolio' } },
  'portfolio/black-raven': { title: 'Black Raven Solutions — case study', eyebrow: 'Business presentation website', heading: 'Black Raven Solutions.', description: 'A digital presentation of the Wilderness Academy and its outdoor programmes.', cards: [{ title: 'Experiences rooted in nature', text: 'Black Raven Solutions presents practical courses, camps and other outdoor activities, with a distinctive identity and clear programme discovery.', link: 'https://blackraven.solutions', linkLabel: 'Visit website' }], action: { label: 'All projects', href: '/en/portfolio' } },
  'portfolio/zavod-zzt': { title: 'Zavod ZZT — case study', eyebrow: 'Organisation website', heading: 'Zavod ZZT.', description: 'A website for the Institute for Green Technology.', cards: [{ title: 'A space for green ideas', text: 'The project presents the digital identity of an institute focused on green technology and environmental topics. Specific functionality is assessed through review of the live website.', link: 'https://zavod-zzt.eu', linkLabel: 'Visit website' }], action: { label: 'All projects', href: '/en/portfolio' } },
  'portfolio/moj-glas-steje': { title: 'Moj Glas Šteje — case study', eyebrow: 'Project website', heading: 'Moj Glas Šteje.', description: 'A website for the Moj Glas Šteje project.', cards: [{ title: 'A clear space for a message', text: 'The project is part of our selected website portfolio. We do not claim unverified features or results before reviewing the public version.', link: 'https://mojglassteje.eu', linkLabel: 'Visit website' }], action: { label: 'All projects', href: '/en/portfolio' } },
  'o-nas': { title: 'About us', eyebrow: 'About Lumeli', heading: 'Small details. A big difference.', description: 'Lumeli is a creative digital studio operated by Centurion d.o.o., focused on thoughtful websites and useful digital solutions.', cards: [
    { title: 'Our approach', text: 'Design should say something. Technology should make something possible. We believe in straightforward communication, clear structure and solutions that are a pleasure to use. We start with your project goals and content, not ready-made templates.' },
    { title: 'Maj Klemec', text: 'Director of Centurion d.o.o.' },
    { title: 'Dan F. Grmuša', text: 'Marketing Consultant & Client Relations. Marketing advisory services and client relationships.' }
  ], action: { label: 'Contact us', href: '/en/kontakt' } },
  'kontakt': { title: 'Contact', eyebrow: 'Contact', heading: 'Tell us about your idea.', description: 'A new website, redesign or bespoke project? A conversation about your goals is a good place to start.', cards: [
    { title: 'Together we will find the right direction.', text: 'For our first conversation, it helps to know your business, target audience, desired pages and timeframe. You do not need to prepare everything in advance.' },
    { title: 'Contact channel', text: 'Our online enquiry form is not yet available. We will enable it after end-to-end delivery is configured and verified.' }
  ], action: { label: 'Explore services', href: '/en/storitve' } },
  'politika-zasebnosti': { title: 'Privacy', eyebrow: 'Privacy', heading: 'Your privacy matters.', description: 'Information about privacy and data processing on the Lumeli website.', cards: [
    { title: 'Data controller', text: 'Lumeli is a brand of Centurion d.o.o. The controller’s contact and registration details are pending completion.' },
    { title: 'Contact form', text: 'Online enquiries are currently disabled. Before enabling the form, we will explain the processing purpose, legal basis, retention period, recipients and how to exercise your rights.' },
    { title: 'Technical services', text: 'Hosting, analytics and cookie details depend on the final production configuration. They will be verified and included in the complete privacy policy.' },
    { title: 'Notice status', text: 'This page is a draft. It does not replace the final legal notice concerning personal data processing.' }
  ], action: { label: 'Back to contact', href: '/en/kontakt' } },
  'kuponi': { title: 'Black Friday coupons', eyebrow: 'Lumeli · Black Friday', heading: '30% off. Four possibilities.', description: 'Choose a coupon for your project and mention BLACKFRIDAY30 when requesting a quotation. The discount applies to the agreed service price.', cards: [
    { title: 'How to use your coupon', text: 'Choose the relevant coupon, save it and mention BLACKFRIDAY30 when requesting a quotation. Third-party costs are excluded unless otherwise agreed.' }
  ], action: { label: 'Explore packages', href: '/en/paketi' } }
};
