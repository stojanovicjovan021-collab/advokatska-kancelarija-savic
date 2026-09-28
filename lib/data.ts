import {
  Scale,
  Building2,
  Landmark,
  Receipt,
  Home,
  Undo2,
  FileText,
  Gavel,
  Briefcase,
  FileSignature,
  ShieldAlert,
  Handshake,
  Users,
  Lock,
  Clock,
  Brain,
  MessageSquare,
} from 'lucide-react';
import type {
  PracticeArea,
  Testimonial,
  BlogPost,
  FAQItem,
  ProcessStep,
  ValueItem,
  DifferentiatorItem,
} from '@/types';

export const practiceAreas: PracticeArea[] = [
  {
    id: 'gradjansko-pravo',
    title: 'Građansko pravo',
    shortDescription: 'Zaštita imovinskih i ličnih prava fizičkih lica.',
    longDescription:
      'Zastupamo klijente u parničnim i vanparničnim postupcima, sporovima oko svojine, nasleđivanja i ličnih prava, uz strategiju prilagođenu svakom predmetu.',
    icon: Scale,
  },
  {
    id: 'privredno-pravo',
    title: 'Privredno pravo',
    shortDescription: 'Pravna podrška privrednim društvima u svim fazama poslovanja.',
    longDescription:
      'Savetujemo privredna društva pri osnivanju, statusnim promenama, korporativnom upravljanju i privrednim sporovima pred nadležnim sudovima i arbitražama.',
    icon: Building2,
  },
  {
    id: 'bankarsko-pravo',
    title: 'Bankarsko pravo',
    shortDescription: 'Savetovanje u kreditnim, hipotekarnim i finansijskim odnosima.',
    longDescription:
      'Pružamo pravnu podršku u pregovorima sa bankama, strukturiranju finansiranja, hipotekarnim sporovima i usklađenosti sa propisima finansijskog sektora.',
    icon: Landmark,
  },
  {
    id: 'poresko-pravo',
    title: 'Poresko pravo',
    shortDescription: 'Poreska optimizacija i zastupanje u poreskim postupcima.',
    longDescription:
      'Analiziramo poresku poziciju klijenata, zastupamo u postupcima kontrole i po poreskim rešenjima, te savetujemo pri poreski osetljivim transakcijama.',
    icon: Receipt,
  },
  {
    id: 'nekretnine',
    title: 'Nekretnine',
    shortDescription: 'Pravna sigurnost u prometu i upravljanju nepokretnostima.',
    longDescription:
      'Vodimo klijente kroz kupoprodaju, zakup, uknjižbu i due diligence nepokretnosti, štiteći interese i pre i posle zaključenja posla.',
    icon: Home,
  },
  {
    id: 'restitucija',
    title: 'Restitucija',
    shortDescription: 'Vraćanje oduzete imovine i naknada za nacionalizovanu imovinu.',
    longDescription:
      'Zastupamo bivše vlasnike i naslednike u postupcima vraćanja imovine, prikupljanju dokazne dokumentacije i pred Agencijom za restituciju.',
    icon: Undo2,
  },
  {
    id: 'upravni-postupci',
    title: 'Upravni postupci',
    shortDescription: 'Zastupanje pred organima uprave u prvostepenim postupcima.',
    longDescription:
      'Pripremamo podneske, žalbe i zastupamo klijente pred upravnim organima kako bi se odluke donosile u skladu sa zakonom i u razumnom roku.',
    icon: FileText,
  },
  {
    id: 'upravni-sporovi',
    title: 'Upravni sporovi',
    shortDescription: 'Osporavanje konačnih upravnih akata pred Upravnim sudom.',
    longDescription:
      'Pokrećemo i vodimo upravne sporove kada je upravni postupak iscrpljen, sa jasnom argumentacijom i fokusom na krajnji ishod za klijenta.',
    icon: Gavel,
  },
  {
    id: 'radno-pravo',
    title: 'Radno pravo',
    shortDescription: 'Zaštita prava zaposlenih i podrška poslodavcima.',
    longDescription:
      'Savetujemo u vezi sa zasnivanjem i prestankom radnog odnosa, disciplinskim postupcima, kolektivnim ugovorima i sporovima iz radnog odnosa.',
    icon: Briefcase,
  },
  {
    id: 'ugovorno-pravo',
    title: 'Ugovorno pravo',
    shortDescription: 'Izrada i analiza ugovora koji štite vaše interese.',
    longDescription:
      'Sastavljamo, pregledamo i pregovaramo ugovore svih vrsta, vodeći računa da svaka klauzula bude jasna, izvršiva i usklađena sa ciljevima klijenta.',
    icon: FileSignature,
  },
  {
    id: 'naknada-stete',
    title: 'Naknada štete',
    shortDescription: 'Ostvarivanje prava na materijalnu i nematerijalnu štetu.',
    longDescription:
      'Zastupamo oštećene u postupcima naknade štete nastale usled saobraćajnih nezgoda, povreda na radu i drugih štetnih događaja.',
    icon: ShieldAlert,
  },
  {
    id: 'medijacija',
    title: 'Medijacija',
    shortDescription: 'Brzo i poverljivo rešavanje sporova van suda.',
    longDescription:
      'Vodimo klijente kroz postupak medijacije kao efikasnu alternativu sudskom postupku, uz očuvanje poslovnih i ličnih odnosa.',
    icon: Handshake,
  },
];

export const values: ValueItem[] = [
  {
    title: 'Integritet',
    description: 'Svaki savet koji dajemo zasnovan je na struci, a ne na onome što je najlakše čuti.',
  },
  {
    title: 'Poverenje',
    description: 'Dugoročni odnosi sa klijentima grade se na doslednosti i ispunjenim obećanjima.',
  },
  {
    title: 'Diskrecija',
    description: 'Poverljivost podataka klijenata čuvamo kao osnovno pravilo naše struke.',
  },
  {
    title: 'Profesionalnost',
    description: 'Precizna dokumentacija i jasna komunikacija u svakoj fazi predmeta.',
  },
  {
    title: 'Efikasnost',
    description: 'Poštujemo vreme klijenata i postupke vodimo bez nepotrebnog odlaganja.',
  },
];

export const differentiators: DifferentiatorItem[] = [
  {
    title: 'Individualni pristup',
    description: 'Svaki predmet dobija strategiju krojenu prema konkretnim okolnostima klijenta.',
    icon: Users,
  },
  {
    title: 'Strateško razmišljanje',
    description: 'Sagledavamo predmet u celini, uključujući rizike i posledice koje nisu odmah očigledne.',
    icon: Brain,
  },
  {
    title: 'Brza komunikacija',
    description: 'Klijenti dobijaju odgovore u razumnom roku, bez čekanja i nejasnoća.',
    icon: MessageSquare,
  },
  {
    title: 'Pravna stručnost',
    description: 'Višegodišnje iskustvo u složenim predmetima iz više grana prava.',
    icon: Scale,
  },
  {
    title: 'Poverljivost',
    description: 'Podaci i dokumentacija klijenata čuvaju se uz najviši nivo diskrecije.',
    icon: Lock,
  },
  {
    title: 'Dugoročna podrška',
    description: 'Ostajemo dostupni klijentima i nakon okončanja predmeta, za svako naredno pitanje.',
    icon: Clock,
  },
];

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Konsultacije',
    description: 'Upoznajemo se sa vašim slučajem, saslušamo činjenice i postavljamo prva pravna pitanja.',
  },
  {
    number: '02',
    title: 'Analiza predmeta',
    description: 'Detaljno proučavamo dokumentaciju i procenjujemo pravnu poziciju i moguće ishode.',
  },
  {
    number: '03',
    title: 'Pravna strategija',
    description: 'Definišemo jasan plan postupanja, uz rokove, rizike i predložene korake.',
  },{
  number: '04',
  title: 'Zastupanje',
  description: 'Zastupamo vaše interese pred sudovima, organima uprave ili u pregovorima.',
},
{
  number: '05',
  title: 'Rešenje',
  description: 'Vodimo predmet do konačnog ishoda i informišemo vas o svakom narednom koraku.',
},
];

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Klijent',
    role: 'Pravna usluga',
    quote: 'Profesionalna pravna pomoć i odlična komunikacija tokom celog postupka.',
    rating: 5,
  },
];


export const blogPosts: BlogPost[] = [
  {
    id: 'b1',
    category: 'Nekretnine',
    title: 'Šta proveriti pre kupovine nepokretnosti u Srbiji',
    excerpt:
      'Pregled ključnih koraka pravne provere nepokretnosti — od uvida u list nepokretnosti do tereta koji nisu odmah vidljivi.',
    date: '12. septembar 2026.',
    readTime: '6 min čitanja',
    featured: true,
image: '/blog/slika7.png',
content: `
Kupovina nepokretnosti zahteva detaljnu pravnu proveru.

Pre svega potrebno je izvršiti uvid u list nepokretnosti kako bi se utvrdilo vlasništvo.

Takođe treba proveriti da li postoje hipoteke, zabeležbe sporova ili druga ograničenja.

Pravna analiza dokumentacije može sprečiti ozbiljne probleme nakon kupovine.

Angažovanje advokata pre zaključenja ugovora značajno smanjuje rizik.
`,
  },
  {
    id: 'b2',
    category: 'Privredno pravo',
    title: 'Statusne promene privrednih društava: na šta obratiti pažnju',
    excerpt:
      'Spajanje, podela i promena pravne forme nose specifične rizike — objašnjavamo kako se pravovremeno pripremiti.',
    date: '28. avgust 2026.',
    readTime: '5 min čitanja',
image: '/blog/slika2.png',
content: `
Statusne promene privrednih društava predstavljaju složene pravne postupke koji mogu značajno uticati na poslovanje kompanije.

Najčešće statusne promene uključuju spajanje, pripajanje, podelu i promenu pravne forme društva.

Pre sprovođenja promene potrebno je analizirati poreske posledice, status zaposlenih, postojeće ugovore i eventualne obaveze prema poveriocima.

Posebno je važno obezbediti urednu korporativnu dokumentaciju i blagovremeno obavestiti sve zainteresovane strane.

Stručna pravna podrška omogućava da se postupak sprovede efikasno i u skladu sa zakonom, uz minimiziranje poslovnih rizika.
`
  },
  {
    id: 'b3',
    category: 'Radno pravo',
    title: 'Otkaz ugovora o radu: prava zaposlenog i obaveze poslodavca',
    excerpt:
      'Koji su zakonski uslovi za zakonit otkaz i koje korake zaposleni može preduzeti ukoliko smatra da su mu prava povređena.',
    date: '14. avgust 2026.',
    readTime: '7 min čitanja',
image: '/blog/slika3.png',
content: `
Prestanak radnog odnosa mora biti sproveden u skladu sa Zakonom o radu kako bi bio zakonit.

Poslodavac je dužan da poštuje propisanu proceduru i da zaposlenom omogući ostvarivanje svih zakonom garantovanih prava.

U zavisnosti od razloga za otkaz, mogu postojati obaveze upozorenja zaposlenog, vođenja disciplinskog postupka ili isplate određenih naknada.

Zaposleni koji smatra da je otkaz nezakonit može pokrenuti odgovarajući sudski postupak radi zaštite svojih prava.

Pravovremeni pravni savet može značajno doprineti pravilnom rešavanju spora između zaposlenog i poslodavca.
`
  },
  {
    id: 'b4',
    category: 'Restitucija',
    title: 'Postupak restitucije: dokumentacija koja ubrzava rešavanje',
    excerpt:
      'Koja dokumenta najčešće nedostaju podnosiocima zahteva i kako pravovremeno prikupljanje dokaza skraćuje postupak.',
    date: '30. jul 2026.',
    readTime: '5 min čitanja',
image: '/blog/slika5.png',
content: `
Postupci restitucije često zahtevaju obimnu dokumentaciju i pažljivo prikupljanje dokaza.

Podnosioci zahteva neretko nailaze na poteškoće zbog nedostajućih istorijskih dokumenata, neusklađenih podataka ili nepotpune arhivske građe.

Važno je pribaviti sve raspoložive dokaze koji potvrđuju pravo svojine prethodnih vlasnika, kao i okolnosti pod kojima je imovina oduzeta.

Pravilno pripremljena dokumentacija može značajno ubrzati postupak i smanjiti mogućnost dodatnih zahteva od strane nadležnih organa.

Stručna pravna pomoć olakšava snalaženje kroz složene administrativne procedure i povećava izglede za uspešno ostvarivanje prava.
`

  },
  {
    id: 'b5',
    category: 'Naknada štete',
    title: 'Naknada nematerijalne štete posle saobraćajne nezgode',
    excerpt:
      'Kako se utvrđuje visina naknade za pretrpljeni strah, bol i umanjenje životne aktivnosti, i koji dokazi su presudni.',
    date: '9. jul 2026.',
    readTime: '6 min čitanja',
image: '/blog/slika1.png',
content: `
Nakon saobraćajne nezgode oštećeno lice može imati pravo na naknadu materijalne i nematerijalne štete.

Nematerijalna šteta obuhvata fizičke bolove, pretrpljeni strah, umanjenje životne aktivnosti i druge posledice koje utiču na kvalitet života.

Visina naknade određuje se na osnovu medicinske dokumentacije, veštačenja i okolnosti konkretnog slučaja.

Prikupljanje dokaza odmah nakon nezgode od ključnog je značaja za uspešno ostvarivanje zahteva.

Pravna podrška može pomoći u pregovorima sa osiguravajućim društvom i zaštiti interesa oštećenog lica.
`

  },
  {
    id: 'b6',
    category: 'Medijacija',
    title: 'Kada je medijacija bolji izbor od sudskog postupka',
    excerpt:
      'Prednosti medijacije u poslovnim i porodičnim sporovima — brzina, poverljivost i očuvanje odnosa strana.',
    date: '22. jun 2026.',
    readTime: '4 min čitanja',
image: '/blog/slika6.png',
content: `
Medijacija predstavlja alternativni način rešavanja sporova koji omogućava stranama da postignu sporazum bez dugotrajnog sudskog postupka.

Postupak vodi neutralni posrednik koji pomaže učesnicima da pronađu obostrano prihvatljivo rešenje.

Prednosti medijacije uključuju brže rešavanje sporova, niže troškove i veću poverljivost u odnosu na klasičan sudski postupak.

Ovaj model se često koristi u poslovnim, porodičnim i imovinskim sporovima gde je važno očuvati odnose između strana.

U mnogim slučajevima medijacija omogućava efikasnije i praktičnije rešenje nego dugotrajna sudska procedura.
`

  },
];

export const faqItems: FAQItem[] = [
  {
    id: 'f1',
    question: 'Kako zakazati prve konsultacije?',
    answer:
      'Konsultacije možete zakazati putem kontakt forme na sajtu, telefonom ili imejlom. Odgovaramo u toku istog radnog dana i dogovaramo termin koji vam odgovara.',
  },
  {
    id: 'f2',
    question: 'Da li nudite besplatne prve konsultacije?',
    answer:
      'Uvodni razgovor u kom procenjujemo prirodu vašeg predmeta je bez obaveze. Detaljna analiza i dalje zastupanje naplaćuju se prema jasno definisanom cenovniku.',
  },
  {
    id: 'f3',
    question: 'Koliko traje rešavanje pravnog predmeta?',
    answer:
      'Trajanje zavisi od vrste postupka, opterećenosti nadležnog organa i složenosti dokaznog postupka. Nakon analize predmeta dajemo realnu procenu rokova.',
  },
  {
    id: 'f4',
    question: 'Da li zastupate klijente van Novog Sada?',
    answer:
      'Da, zastupamo fizička i pravna lica širom Srbije, uz mogućnost onlajn konsultacija i komunikacije tokom celog trajanja postupka.',
  },
  {
    id: 'f5',
    question: 'Kako se formira cena pravnih usluga?',
    answer:
      'Cena zavisi od vrste predmeta, procenjenog obima rada i hitnosti. Pre preuzimanja predmeta uvek dostavljamo jasnu i pismenu ponudu.',
  },
  {
    id: 'f6',
    question: 'Da li čuvate poverljivost podataka klijenata?',
    answer:
      'Poverljivost je osnovno profesionalno i etičko pravilo advokature. Svi podaci i dokumentacija klijenata čuvaju se uz strogu diskreciju.',
  },
];

export const stats = [
  { value: 1000, suffix: '+', label: 'Uspešno završenih predmeta' },
  { value: 10, suffix: '+', label: 'Godina iskustva' },
  { value: 500, suffix: '+', label: 'Zadovoljnih klijenata' },
];

export const contactInfo = {
  address: 'Футошка бр. 1А, Нови Сад, Србија',
  phone: '063 40 11 04 / 021 382 40 48',
  email: 'advokatskakancelarijavsavic@gmail.com',
  workingHours: 'Ponedeljak – petak: 08:00 – 16:00',
};

export const navLinks = [
  { href: '#about', label: 'O nama' },
  { href: '#practice-areas', label: 'Oblasti prava' },
  { href: '#why-us', label: 'Zašto mi' },
  { href: '#process', label: 'Proces' },
  { href: '#testimonials', label: 'Iskustva' },
  { href: '#blog', label: 'Pravni saveti' },
  { href: '#faq', label: 'Pitanja' },
  { href: '#contact', label: 'Kontakt' },
];
