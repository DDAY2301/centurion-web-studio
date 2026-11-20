import Link from 'next/link';

export const revalidate = 86400;

export default function PolitikaZasebnostiPage() {
  return (
    <>
      {/* Skip to content link */}
      <a href="#main" className="sr-only focus:not-sr-only skip-link">
        Preskoči na vsebino
      </a>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/60 border-b border-brand-border">
        <div className="container mx-auto flex items-center justify-between py-4 px-6">
          <Link href="/" className="flex items-center gap-3" prefetch={false}>
            <span className="text-2xl font-bold text-white">Centurion</span>
            <span className="text-sm text-brand-light -rotate-6 scale-105 transform opacity-75">
              Web Studio
            </span>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main id="main" className="flex-1">
        <section className="py-20 bg-brand-dark">
          <div className="container mx-auto px-6">
            <article className="max-w-3xl mx-auto">
              <h1 className="text-4xl font-bold text-white mb-8">Politika zasebnosti</h1>

              <div className="bg-brand-card rounded-2xl p-8 border border-brand-border mb-8">
                <p className="text-brand-light text-sm italic mb-4">
                  Zadnja posodobitev: {new Date().toLocaleDateString('sl-SI', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </p>
              </div>

              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">Uvod</h2>
                  <p className="text-brand-light text-lg">
                    Naša politika zasebnosti pravi, da spoštujemo vašo zasebnost in zaščítamo vaše osebne podatke.
                    S povpraševanjem za naše storitve soglasje dajete naše pooblaščilo za zbiranje in uporabo vaših
                    podatkov v skladu s tem dokumentom.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">Kdo smo</h2>
                  <p className="text-brand-light text-lg">
                    Centurion Web Studio je digitalna dejavnost povezana z Centurion d.o.o. (PD: 12345678).
                    Nas nas ustvarjajo naši člani in sodelavci. Vsi podatki obdelujemo z zaupanjem in
                      strogo pooblaščeno.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">Kakšni podatki Zbiramo</h2>
                  <p className="text-brand-light text-lg mb-4">
                    Ko pošiljate povpraševanje preko naše spletne strani, zbieramo naslednje informacije:
                  </p>
                  <ul className="space-y-3 text-brand-light">
                    <li className="flex items-start gap-3">
                      <span className="text-accent-primary">*</span>
                      <span>Ime in priimek</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent-primary">*</span>
                      <span>Naziv podjetja</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent-primary">*</span>
                      <span>Email naslov</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent-primary">*</span>
                      <span>Telefon (opcijsko)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent-primary">*</span>
                      <span>Interesirana storitev</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent-primary">*</span>
                      <span>Sporočilo/opis projekta</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent-primary">*</span>
                      <span>Kod a kupone (opcijsko)</span>
                    </li>
                  </ul>
                  <p className="text-sm text-brand-light mt-3">
                    Podatki o pregledu spleta, analitiki in pohranjene jezikovne ali jezikovne nastavitve ne zbieramo.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">Kako uporabljamo podatke</h2>
                  <p className="text-brand-light text-lg mb-4">
                    Vaši podatki služijo naslednjim namenom:
                  </p>
                  <ul className="space-y-3 text-brand-light">
                    <li className="flex items-start gap-3">
                      <span className="text-accent-primary">✓</span>
                      <span>Priprava in pošiljanje ponudbe za vaš projekt</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent-primary">✓</span>
                      <span>Komunikacija z vašim ponudbo</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent-primary">✓</span>
                      <span>Uporaba za izboljšavo naših storitev</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent-primary">*</span>
                      <span>Analitika in merjenje (z ZUPANJI) brez identifikacije</span>
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">Kdo ima dostop do vaših podatkov</h2>
                  <p className="text-brand-light text-lg">
                    Vaše podatke lahko pregledujejo samo naši notranji člani, ki imajo potrebná avtentikacijo.
                    Podatki ne izpolnjujejo za retardacijo z drugimi podjetji.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">Hranba podatkov</h2>
                  <p className="text-brand-light text-lg">
                    Podatki o povpraševanju hranimo najdlje 2 leta, razen če nas je povpraševanje zahtevalo
                    dodatno ohranitev. Zadani čas je zadovoljen z našim notranjim politike varovania.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">Vaša pravica do zaščite</h2>
                  <p className="text-brand-light text-lg mb-4">
                    Imete naslednja pravica:
                  </p>
                  <ul className="space-y-3 text-brand-light">
                    <li className="flex items-start gap-3">
                      <span className="text-accent-primary">✓</span>
                      <span>Pridenje kopije vaših podatkov</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent-primary">✓</span>
                      <span>Popravek nespremenjenih podatkov</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent-primary">✓</span>
                      <span>Zbrisanje vaših podatkov</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent-primary">✓</span>
                      <span>Onečistitev vpraševanja iz našega sistema</span>
                    </li>
                  </ul>
                  <p className="text-sm text-brand-light mt-3">
                    Če želite izkoristiti katero od teh pravic, pišite na info@centurion-web-studio.example.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">Pišite nam</h2>
                  <p className="text-brand-light text-lg">
                    Če imate vprašanja o naši politiki zasebnosti, pišite nam na:
                  </p>
                  <Link
                    href="mailto:info@centurion-web-studio.example"
                    className="inline-block mt-4 text-accent-primary hover:text-accent-primary/80 font-medium"
                  >
                    info@centurion-web-studio.example
                  </Link>
                </section>
              </div>
            </article>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black border-t border-brand-border py-12">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <p className="text-xs text-brand-light">
              &copy; {new Date().getFullYear()} Centurion Web Studio. Vsi pravice pridržani.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}