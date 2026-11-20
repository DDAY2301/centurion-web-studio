import type { Metadata } from 'next';
import Link from 'next/link';
import PageIntro from '@/components/PageIntro';

export const metadata: Metadata = { title: 'Zasebnost', description: 'Osnovne informacije o zasebnosti na spletni strani Lumeli.' };

export default function PrivacyPage() {
  return (
    <main id="main">
      <PageIntro eyebrow="Zasebnost" title="Vaša zasebnost šteje." description="Informacije o zasebnosti in obdelavi podatkov na spletni strani Lumeli." />
      <section className="bg-white px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-3xl space-y-10 text-base leading-8 text-[#425b4e]">
          <section>
            <h2 className="text-2xl font-semibold text-[#293b34]">Upravljavec</h2>
            <p className="mt-4">Lumeli je blagovna znamka družbe Centurion d.o.o. Kontaktni in registrski podatki upravljavca bodo dopolnjeni pred javno objavo spletne strani.</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-[#293b34]">Kontaktni obrazec</h2>
            <p className="mt-4">Oddaja spletnih povpraševanj je trenutno onemogočena. Pred omogočanjem obrazca bomo jasno predstavili namen obdelave, pravno podlago, rok hrambe, prejemnike in način uveljavljanja pravic.</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-[#293b34]">Tehnične storitve</h2>
            <p className="mt-4">Podrobnosti o gostovanju, analitiki in piškotkih so odvisne od končne produkcijske konfiguracije. Pred objavo bodo preverjene in navedene v popolni politiki zasebnosti.</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-[#293b34]">Pred javno objavo</h2>
            <p className="mt-4">Ta stran je delovna različica. Ne nadomešča dokončnega pravnega obvestila o obdelavi osebnih podatkov.</p>
          </section>
          <Link href="/kontakt" className="inline-flex rounded-full bg-[#416b59] px-7 py-3 text-sm font-semibold text-white hover:bg-[#304f42]">Nazaj na kontakt ↗</Link>
        </div>
      </section>
    </main>
  );
}
