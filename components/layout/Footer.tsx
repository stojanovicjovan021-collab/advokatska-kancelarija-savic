import { Scale } from 'lucide-react';
import { navLinks, contactInfo, practiceAreas } from '@/lib/data';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-paper">
      <div className="container-luxury grid grid-cols-1 gap-12 py-20 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2 lg:col-span-1">
          <a href="#" className="flex items-center gap-2.5">
            <Scale size={22} className="text-gold-300" strokeWidth={1.5} />
            <span className="font-display text-lg">Advokatska Kancelarija</span>
          </a>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-paper/55">
            Pravna sigurnost zasnovana na znanju, iskustvu i poverenju — za fizička i pravna lica širom Srbije.
          </p>
        </div>

        <div>
          <h3 className="font-display text-base text-gold-200">Navigacija</h3>
          <ul className="mt-5 space-y-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-sm text-paper/55 transition-colors hover:text-gold-200">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-base text-gold-200">Oblasti prava</h3>
          <ul className="mt-5 space-y-3">
            {practiceAreas.slice(0, 6).map((area) => (
              <li key={area.id}>
                <a href="#practice-areas" className="text-sm text-paper/55 transition-colors hover:text-gold-200">
                  {area.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-base text-gold-200">Kontakt</h3>
          <ul className="mt-5 space-y-3 text-sm text-paper/55">
            <li>{contactInfo.address}</li>
            <li>{contactInfo.phone}</li>
            <li>{contactInfo.email}</li>
            <li>{contactInfo.workingHours}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-paper/10">
        <div className="container-luxury flex flex-col items-center justify-between gap-4 py-8 text-xs text-paper/40 sm:flex-row">
          <p>© {year} Advokatska Kancelarija. Sva prava zadržana.</p>
          <div className="flex gap-6">
            <a href="#" className="transition-colors hover:text-gold-200">
              Politika privatnosti
            </a>
            <a href="#" className="transition-colors hover:text-gold-200">
              Uslovi korišćenja
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
