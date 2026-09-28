import { contactInfo } from '@/lib/data';

export function StructuredData() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Attorney',
    name: 'Advokatska kancelarija',
    description:
      'Advokatska kancelarija koja pruža pravnu podršku fizičkim i pravnim licima iz oblasti građanskog, privrednog, bankarskog i radnog prava.',
    image: 'https://www.advokatskakancelarija.rs/og-image.jpg',
    url: 'https://www.advokatskakancelarija.rs',
    telephone: contactInfo.phone,
    email: contactInfo.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Knez Mihailova 10',
      addressLocality: 'Beograd',
      postalCode: '11000',
      addressCountry: 'RS',
    },
    priceRange: '$$$',
    areaServed: {
      '@type': 'Country',
      name: 'Srbija',
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '17:00',
    },
    sameAs: [],
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
