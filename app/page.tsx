import Link from 'next/link';
import BlackFridayBanner from '@/components/BlackFridayBanner';

export const revalidate = 3600;

export default function HomePage() {
  return (
    <>
      {/* Skip to content link */}
      <a href="#main" className="sr-only focus:not-sr-only skip-link">
        Preskoči na vsebino
      </a>

      {/* Black Friday Banner */}
      <BlackFridayBanner />

      {/* Main Content */}
      <main id="main" className="flex-1">
        {/* Services Section */}
        <section id="services" className="py-20 bg-brand-subtle">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-brand-dark mb-4">Our services</h2>
              <p className="text-lg text-brand-light max-w-2xl mx-auto">
                Complete solutions for your digital presence - from strategy to maintenance
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Web Design',
                  description: 'Beautiful, user-focused designs that reflect your brand identity.',
                },
                {
                  title: 'Web Development',
                  description: 'Clean, performant code built with modern technologies.',
                },
                {
                  title: 'Landing Pages',
                  description: 'Conversion-focused pages that drive results.',
                },
                {
                  title: 'Website Redesign',
                  description: 'Transform your existing site into a modern experience.',
                },
                {
                  title: 'SEO & Performance',
                  description: 'Optimize for search engines and lightning-fast loading.',
                },
                {
                  title: 'Maintenance',
                  description: 'Ongoing care to keep your site secure and updated.',
                },
              ].map((service) => (
                <div
                  key={service.title}
                  className="bg-white rounded-xl p-6 border border-brand-border hover:border-accent-primary/30 transition-all"
                >
                  <h3 className="text-xl font-semibold text-brand-dark mb-3">{service.title}</h3>
                  <p className="text-brand-light text-sm">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-brand-dark mb-4">Our work</h2>
              <p className="text-lg text-brand-light max-w-2xl mx-auto">
                Preglejte naše uspešne realizacije za različne panogske sektorje
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* BlogLab Project */}
              <article className="group bg-white rounded-2xl overflow-hidden border border-brand-border hover:border-accent-primary/30 transition-all">
                <div className="aspect-video relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-dark to-brand-darker flex items-center justify-center">
                    <div className="text-center p-6">
                      <div className="text-xs text-brand-light mb-2">Portfolio</div>
                      <h3 className="text-2xl font-bold text-white mb-3">BlogLab.eu</h3>
                      <p className="text-brand-light text-sm max-w-xs">
                        React aplikacija z Vite za peneracijo in objavljanje člankov.
                        Vključeno AI pomoč za ureditev vsebine.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4 justify-center">
                        <span className="px-2 py-1 text-xs rounded bg-accent-primary/10 text-accent-primary">React</span>
                        <span className="px-2 py-1 text-xs rounded bg-accent-primary/10 text-accent-primary">Vite</span>
                        <span className="px-2 py-1 text-xs rounded bg-accent-primary/10 text-accent-primary">AI integracija</span>
                      </div>
                      <Link
                        href="https://bloglab.eu"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-accent-primary hover:text-accent-primary/80 font-medium text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary"
                      >
                        Poglej projekt
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6l4 4m0 0l-4 4m4-4H6"></path>
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </article>

              {/* Black Raven Project */}
              <article className="group bg-white rounded-2xl overflow-hidden border border-brand-border hover:border-accent-primary/30 transition-all">
                <div className="aspect-video relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-dark to-brand-darker flex items-center justify-center">
                    <div className="text-center p-6">
                      <div className="text-xs text-brand-light mb-2">Portfolio</div>
                      <h3 className="text-2xl font-bold text-white mb-3">Black Raven Solutions</h3>
                      <p className="text-brand-light text-sm max-w-xs">
                        Bilingual prezentacijska stran za wilderness akademijo.
                        S pomocjo Node.js backenda za kontakt oblike.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4 justify-center">
                        <span className="px-2 py-1 text-xs rounded bg-accent-primary/10 text-accent-primary">HTML/CSS/JS</span>
                        <span className="px-2 py-1 text-xs rounded bg-accent-primary/10 text-accent-primary">Node.js</span>
                        <span className="px-2 py-1 text-xs rounded bg-accent-primary/10 text-accent-primary">Bilingual</span>
                      </div>
                      <Link
                        href="https://blackraven.solutions"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-accent-primary hover:text-accent-primary/80 font-medium text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary"
                      >
                        Poglej projekt
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6l4 4m0 0l-4 4m4-4H6"></path>
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-brand-subtle">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-brand-dark mb-4">Get in touch</h2>
                <p className="text-lg text-brand-light">
                  Ready to start your project with a <strong>-30% Black Friday discount</strong>?
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-brand-border">
                <form
                  action="/api/contact"
                  method="POST"
                  className="space-y-6"
                  onSubmit={async (e) => {
                    e.preventDefault();
                    const form = e.target as HTMLFormElement;
                    const formData = new FormData(form);
                    const data = Object.fromEntries(formData.entries());

                    try {
                      const response = await fetch('/api/contact', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(data),
                      });

                      if (response.ok) {
                        form.reset();
                        alert('Thank you! Please mention code BLACKFRIDAY30 for your discount.');
                      } else {
                        const error = await response.json();
                        alert(`Error: ${error.error || 'Something went wrong'}`);
                      }
                    } catch (error) {
                      alert('Please try again later.');
                    }
                  }}
                >
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-brand-light mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full rounded-lg bg-brand-subtle border border-brand-border px-4 py-3 text-brand-dark placeholder:text-brand-light focus:border-accent-primary focus:ring-0 transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-brand-light mb-2">
                        Company *
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        required
                        className="w-full rounded-lg bg-brand-subtle border border-brand-border px-4 py-3 text-brand-dark placeholder:text-brand-light focus:border-accent-primary focus:ring-0 transition-colors"
                        placeholder="Company name"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-brand-light mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full rounded-lg bg-brand-subtle border border-brand-border px-4 py-3 text-brand-dark placeholder:text-brand-light focus:border-accent-primary focus:ring-0 transition-colors"
                      placeholder="email@company.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-brand-light mb-2">
                      Interested in *
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      className="w-full rounded-lg bg-brand-subtle border border-brand-border px-4 py-3 text-brand-dark focus:border-accent-primary focus:ring-0 transition-colors"
                    >
                      <option value="">Select a service</option>
                      <option value="web-design">Web Design</option>
                      <option value="web-development">Web Development</option>
                      <option value="landing-pages">Landing Pages</option>
                      <option value="redesign">Website Redesign</option>
                      <option value="seo">SEO & Performance</option>
                      <option value="maintenance">Maintenance</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="coupon" className="block text-sm font-medium text-brand-light mb-2">
                      Coupon code (optional)
                    </label>
                    <input
                      type="text"
                      id="coupon"
                      name="couponCode"
                      className="w-full rounded-lg bg-brand-subtle border border-brand-border px-4 py-3 text-brand-dark placeholder:text-brand-light focus:border-accent-primary focus:ring-0 transition-colors"
                      placeholder="BLACKFRIDAY30"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-brand-light mb-2">
                      Project description
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      className="w-full rounded-lg bg-brand-subtle border border-brand-border px-4 py-3 text-brand-dark placeholder:text-brand-light focus:border-accent-primary focus:ring-0 transition-colors resize-y"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="consent"
                      name="consent"
                      required
                      className="mt-1 rounded border-brand-border bg-white"
                    />
                    <label htmlFor="consent" className="text-xs text-brand-light">
                      I agree to the <Link href="/privacy-policy" className="text-accent-primary hover:text-accent-primary/80">Privacy Policy</Link>
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-full bg-accent-primary px-6 py-3 text-base font-semibold text-white hover:bg-accent-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:ring-offset-2"
                  >
                    Send message
                  </button>

                  <p className="text-xs text-brand-light text-center">
                    * Required fields. Mention code BLACKFRIDAY30 for -30% discount.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-brand-dark border-t border-brand-border py-12">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <p className="text-xs text-brand-light">
              &copy; {new Date().getFullYear()} lumeli. Vsi pravice pridržani.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}