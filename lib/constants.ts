import type {
  NavItem,
  StatItem,
  WhyItem,
  GalleryImage,
  Review,
  ContactItem,
  FaqItem,
  ChatConfig,
  ServiceCategory,
  DaySchedule,
  MenuCategory,
  ImageMap,
  HeroContent,
  ImprintData,
} from './types';
import { t } from './get-ui-text';

// Switch to true when local /images/*.webp files are ready
export const USE_LOCAL_IMAGES = false;

// ---------------------------------------------------------------------------
// HERO
// ---------------------------------------------------------------------------
export const HERO: HeroContent = {
  title: 'MYSMESERVIS',
  subtitle: 'MYSMESERVIS je rodinná garáž postavená na jednej myšlienke: opraviť to, čo treba opraviť, a povedať vám, čo nie. Transparentné cenové ponuky, certifikovaní technici.',
  layout: 'full',
};

// ---------------------------------------------------------------------------
// IMAGES
// ---------------------------------------------------------------------------
export const IMAGES: ImageMap = {
  hero: '/images/hero.webp',
  about: 'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=800&q=80',
  gallery: [
    '/images/gallery-1.webp',
    '/images/gallery-2.webp',
    '/images/gallery-3.webp',
    '/images/gallery-4.webp',
    '/images/gallery-5.webp',
    '/images/gallery-6.webp',
  ],
  logo: '',
};

// ---------------------------------------------------------------------------
// NAVIGATION
// ---------------------------------------------------------------------------
export const NAV_ITEMS: NavItem[] = [
  { label: t().nav.home,     href: '#hero'     },
  { label: t().nav.services, href: '#services' },
  { label: t().nav.reviews,  href: '#reviews'  },
  { label: t().nav.contact,  href: '#contact'  },
];

// ---------------------------------------------------------------------------
// STATS
// ---------------------------------------------------------------------------
export const STATS: StatItem[] = [];

// ---------------------------------------------------------------------------
// WHY US
// ---------------------------------------------------------------------------
export const WHY_ITEMS: WhyItem[] = [
  { id: '1', icon: '⭐', title: t().whyUs.q1Title, description: t().whyUs.q1Desc },
  { id: '2', icon: '⚡', title: t().whyUs.q2Title, description: t().whyUs.q2Desc },
  { id: '3', icon: '💰', title: t().whyUs.q3Title, description: t().whyUs.q3Desc },
  { id: '4', icon: '🛡️', title: t().whyUs.q4Title, description: t().whyUs.q4Desc },
];

// ---------------------------------------------------------------------------
// SERVICE CATEGORIES (templateType: 'services')
// ---------------------------------------------------------------------------
export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: '1',
    name: 'Diagnostika a opravy motora',
    items: [
      {
        id: '1-1',
        name: 'Počítačová diagnostika',
        description: 'Kompletná elektronická diagnostika vozidla s vyčítaním chybových kódov.',
        price: 'Od 30 €',
        icon: '🔍',
      },
      {
        id: '1-2',
        name: 'Oprava motora',
        description: 'Odborná oprava motorových komponentov vrátane výmeny tesnení a rozvodov.',
        price: 'Od 150 €',
        icon: '🔧',
      },
      {
        id: '1-3',
        name: 'Výmena oleja a filtrov',
        description: 'Výmena motorového oleja, olejového, vzduchového a palivového filtra.',
        price: 'Od 40 €',
        icon: '🛢️',
      },
    ],
  },
  {
    id: '2',
    name: 'Brzdy a podvozok',
    items: [
      {
        id: '2-1',
        name: 'Výmena brzdových platničiek a kotúčov',
        description: 'Výmena predných alebo zadných brzdových platničiek a kotúčov pre bezpečnú jazdu.',
        price: 'Od 80 €',
        icon: '🛞',
      },
      {
        id: '2-2',
        name: 'Oprava tlmičov a pružín',
        description: 'Kontrola a výmena tlmičov, pružín a ďalších prvkov podvozku.',
        price: 'Od 90 €',
        icon: '🔩',
      },
      {
        id: '2-3',
        name: 'Geometria kolies',
        description: 'Nastavenie geometrie náprav pre správne opotrebenie pneumatík a stabilitu vozidla.',
        price: 'Od 35 €',
        icon: '📐',
      },
    ],
  },
  {
    id: '3',
    name: 'Klimatizácia a elektrika',
    items: [
      {
        id: '3-1',
        name: 'Plnenie klimatizácie',
        description: 'Doplnenie chladiva a kontrola tesnosti klimatizačného systému.',
        price: 'Od 50 €',
        icon: '❄️',
      },
      {
        id: '3-2',
        name: 'Oprava elektroinštalácie',
        description: 'Diagnostika a oprava elektrickej sústavy vozidla, výmena poistiek a relé.',
        price: 'Od 45 €',
        icon: '⚡',
      },
      {
        id: '3-3',
        name: 'Výmena akumulátora',
        description: 'Kontrola a výmena autobatérie vrátane registrácie v riadiacej jednotke.',
        price: 'Od 20 €',
        icon: '🔋',
      },
    ],
  },
];

// ---------------------------------------------------------------------------
// SCHEDULE (templateType: 'schedule')
// ---------------------------------------------------------------------------
export const SCHEDULE: DaySchedule[] = [];

// ---------------------------------------------------------------------------
// MENU CATEGORIES (templateType: 'menu')
// ---------------------------------------------------------------------------
export const MENU_CATEGORIES: MenuCategory[] = [];

// ---------------------------------------------------------------------------
// REVIEWS
// ---------------------------------------------------------------------------
export const REVIEWS: Review[] = [];

// ---------------------------------------------------------------------------
// CONTACT
// ---------------------------------------------------------------------------
export const CONTACT_ITEMS: ContactItem[] = [
  { icon: '📍', title: t().contact.address, lines: ['Jána Psotného 12, Nové Zlatovce, 911 05 Trenčín'] },
  { icon: '📞', title: t().contact.phone,   lines: ['+421902535035'] },
  { icon: '✉️', title: t().contact.email,   lines: ['ubmarket2022@gmail.com'] },
  { icon: '🕐', title: t().contact.hours,   lines: ['Pondelok – Piatok: 09:00 – 18:00', 'Sobota – Nedeľa: Zatvorené'] },
];

// ---------------------------------------------------------------------------
// FAQ
// ---------------------------------------------------------------------------
export const FAQ_ITEMS: FaqItem[] = [
  {
    id: '1',
    question: 'Ako si môžem dohodnúť termín opravy?',
    answer: 'Termín si môžete dohodnúť telefonicky na čísle +421902535035 alebo e-mailom na ubmarket2022@gmail.com. Radi vám nájdeme vhodný čas počas pracovných hodín.',
  },
  {
    id: '2',
    question: 'Poskytujete cenovú ponuku pred začatím opravy?',
    answer: 'Áno, vždy pred začatím akejkoľvek práce vám poskytneme transparentnú cenovú ponuku. Nezačneme s opravou bez vášho súhlasu.',
  },
  {
    id: '3',
    question: 'Aké značky vozidiel opravujete?',
    answer: 'Opravujeme všetky bežné značky osobných automobilov – európske, ázijské aj americké. V prípade otázok nás neváhajte kontaktovať.',
  },
  {
    id: '4',
    question: 'Ako dlho trvá bežná oprava alebo servis?',
    answer: 'Dĺžka opravy závisí od typu zásahu. Výmena oleja alebo diagnostika trvá zvyčajne do hodiny, rozsiahlejšie opravy môžu trvať dlhší čas. Vždy vás budeme informovať o odhadovanom čase.',
  },
  {
    id: '5',
    question: 'Používate originálne alebo náhradné diely?',
    answer: 'Používame kvalitné originálne alebo certifikované náhradné diely od overených dodávateľov. O použitých dieloch vás vždy informujeme vopred.',
  },
];

// ---------------------------------------------------------------------------
// CHAT CONFIG
// ---------------------------------------------------------------------------
export const CHAT_CONFIG: ChatConfig = {
  greeting: 'Dobrý deň! Vitajte v MYSMESERVIS. Ako vám môžeme pomôcť?',
  quickReplies: [
    {
      id: '1',
      label: 'Dohodnúť termín',
      response: 'Termín si môžete dohodnúť na telefónnom čísle +421902535035 alebo e-mailom na ubmarket2022@gmail.com. Pracujeme pondelok až piatok od 09:00 do 18:00.',
    },
    {
      id: '2',
      label: 'Cenník služieb',
      response: 'Ceny sa líšia podľa typu opravy a vozidla. Vždy vám poskytneme presnú cenovú ponuku pred začatím práce. Kontaktujte nás pre podrobnosti.',
    },
    {
      id: '3',
      label: 'Kde sa nachádzate?',
      response: 'Nájdete nás na adrese Jána Psotného 12, Nové Zlatovce, 911 05 Trenčín. Tešíme sa na vašu návštevu!',
    },
    {
      id: '4',
      label: 'Pracovné hodiny',
      response: 'Sme otvorení každý pracovný deň od pondelka do piatku, od 09:00 do 18:00. Cez víkend máme zatvorené.',
    },
  ],
  fallbackResponse: 'Ďakujeme za vašu správu. Pre rýchlejšiu odpoveď nás prosím kontaktujte telefonicky na +421902535035 alebo e-mailom na ubmarket2022@gmail.com.',
};

// ---------------------------------------------------------------------------
// IMPRINT
// ---------------------------------------------------------------------------
export const IMPRINT: ImprintData | null = null;