import React, { createContext, useContext, useState, useEffect } from 'react';

export interface StatItem {
  num: string;
  suffix: string;
  label: string;
}

export interface DestinationItem {
  name: string;
  tag: string;
  sub: string;
}

export interface ExperienceItem {
  icon: string;
  num: string;
  title: string;
  desc: string;
}

export interface PackageItem {
  text: string;
  color: string;
}

export interface PackageData {
  type: 'light' | 'featured';
  badge?: string;
  name: string;
  subtitle: string;
  priceLabel: string;
  price: string;
  priceSuffix: string;
  priceSmall?: boolean;
  items: PackageItem[];
  btnText: string;
  btnStyle: 'outline' | 'grad';
}

export interface SiteContent {
  hero: {
    tag: string;
    title: string;
    subtitle: string;
    ctaText: string;
  };
  stats: StatItem[];
  destinations: DestinationItem[];
  experiences: ExperienceItem[];
  manifesto: {
    quote: string;
    authorLine: string;
  };
  packages: PackageData[];
  cta: {
    title: string;
    description: string;
    primaryBtn: string;
    secondaryBtn: string;
  };
  footer: {
    description: string;
    email: string;
    phone: string;
    whatsapp: string;
    instagram: string;
    address: string;
  };
}

const defaultContent: SiteContent = {
  hero: {
    tag: 'TURISMO · MARANHÃO · BRASIL',
    title: 'O Brasil que poucos conhecem. Todos deveriam.',
    subtitle: 'Das dunas brancas dos Lençóis ao ritmo do Bumba Meu Boi — descubra o Maranhão com quem verdadeiramente o ama.',
    ctaText: 'EXPLORAR DESTINOS',
  },
  stats: [
    { num: '500', suffix: '+', label: 'Viajantes Atendidos' },
    { num: '12', suffix: '', label: 'Destinos Exclusivos' },
    { num: '98', suffix: '%', label: 'Satisfação' },
    { num: '5', suffix: '★', label: 'Avaliação Média' },
  ],
  destinations: [
    { name: 'Lençóis Maranhenses', tag: 'Imperdível', sub: 'Dunas brancas e lagoas cristalinas' },
    { name: 'São Luís', tag: 'Patrimônio UNESCO', sub: 'A ilha capital com azulejos e história' },
    { name: 'Chapada das Mesas', tag: 'Natureza', sub: 'Cachoeiras e formações rochosas deslumbrantes' },
    { name: 'Barreirinhas', tag: 'Ecoturismo', sub: 'Portal dos Lençóis Maranhenses' },
    { name: 'Delta do Parnaíba', tag: 'Aventura', sub: 'Encontro do rio com o mar' },
  ],
  experiences: [
    { icon: '🏜️', num: '01', title: 'Trekking nas Dunas', desc: 'Percorra a pé as dunas brancas dos Lençóis Maranhenses ao pôr do sol. Um espetáculo que muda para sempre a sua percepção de beleza natural.' },
    { icon: '🥁', num: '02', title: 'Bumba Meu Boi', desc: 'Mergulhe no maior festival folclórico do Brasil. Cores, ritmos e histórias que revelam a alma mais profunda do povo maranhense.' },
    { icon: '🍽️', num: '03', title: 'Gastronomia Local', desc: 'Do arroz de cuxá ao torresmo de tambaqui, a culinária maranhense é um patrimônio vivo. Prove sabores que só existem aqui.' },
    { icon: '🛶', num: '04', title: 'Passeio de Lancha', desc: 'Navegue pelo rio Preguiças entre manguezais, restingas e comunidades quilombolas. Uma jornada ao coração mais genuíno do Maranhão.' },
    { icon: '🏛️', num: '05', title: 'Centro Histórico', desc: 'Caminhe pelos azulejos portugueses de São Luís, Patrimônio da Humanidade pela UNESCO. Arquitetura colonial que respira história em cada esquina.' },
    { icon: '🌅', num: '06', title: 'Pôr do Sol na Lagoa', desc: 'As lagoas dos Lençóis refletem o céu em cores impossíveis no entardecer. O momento mais fotográfico do Maranhão é também o mais contemplativo.' },
  ],
  manifesto: {
    quote: 'O Maranhão não é um destino.\nÉ uma descoberta que acontece\numa vez, mas fica para sempre.',
    authorLine: 'Enjoy Maranhão · Desde 2020',
  },
  packages: [
    {
      type: 'light',
      name: 'Fim de Semana\nnos Lençóis',
      subtitle: '2 dias de imersão nas dunas brancas com tudo incluído.',
      priceLabel: 'A partir de',
      price: 'R$ 890',
      priceSuffix: '/pax',
      items: [
        { color: '#1B7BB4', text: 'Transfer aeroporto incluído' },
        { color: '#7AC4E2', text: 'Pousada 3 estrelas' },
        { color: '#F5A623', text: 'Passeio nas dunas ao pôr do sol' },
        { color: '#1A7875', text: 'Guia especializado' },
      ],
      btnText: 'Saiba mais',
      btnStyle: 'outline',
    },
    {
      type: 'featured',
      badge: '✦ Mais popular',
      name: 'Maranhão\nCompleto',
      subtitle: '7 dias explorando os principais destinos do estado com experiências exclusivas.',
      priceLabel: 'A partir de',
      price: 'R$ 3.490',
      priceSuffix: '/pax',
      items: [
        { color: '#F5A623', text: 'São Luís + Lençóis + Chapada' },
        { color: '#7AC4E2', text: 'Passeio de lancha no Rio Preguiças' },
        { color: '#E85C4A', text: 'Jantares típicos incluídos' },
        { color: '#1A7875', text: 'Pousadas selecionadas' },
        { color: '#6B1E4E', text: 'Guia exclusivo em todo o roteiro' },
      ],
      btnText: 'Reservar agora',
      btnStyle: 'grad',
    },
    {
      type: 'light',
      name: 'Roteiro\nPersonalizado',
      subtitle: 'Criamos o roteiro ideal para você, do seu jeito, no seu ritmo.',
      priceLabel: 'Consulte',
      price: 'valores',
      priceSmall: true,
      priceSuffix: '',
      items: [
        { color: '#6B1E4E', text: 'Consultoria de viagem gratuita' },
        { color: '#E85C4A', text: 'Roteiro 100% personalizado' },
        { color: '#1A7875', text: 'Para grupos, famílias ou casais' },
        { color: '#1B7BB4', text: 'Suporte 24h durante a viagem' },
      ],
      btnText: 'Falar com especialista',
      btnStyle: 'outline',
    },
  ],
  cta: {
    title: 'Sua próxima aventura começa aqui.',
    description: 'Deixe-nos criar a viagem perfeita para você. O Maranhão espera — e nós estamos prontos para guiá-lo.',
    primaryBtn: 'PLANEJAR MINHA VIAGEM',
    secondaryBtn: 'FALAR NO WHATSAPP',
  },
  footer: {
    description: 'Somos apaixonados pelo Maranhão. Nossa missão é conectar viajantes às experiências mais autênticas e transformadoras deste estado único.',
    email: 'contato@enjoymaranhao.com.br',
    phone: '(98) 9 9999-0000',
    whatsapp: 'WhatsApp',
    instagram: 'Instagram',
    address: 'São Luís — MA',
  },
};

interface SiteContentContextType {
  content: SiteContent;
  updateContent: (newContent: SiteContent) => void;
  updateSection: <K extends keyof SiteContent>(section: K, value: SiteContent[K]) => void;
  resetToDefaults: () => void;
  defaults: SiteContent;
}

const SiteContentContext = createContext<SiteContentContextType | null>(null);

const STORAGE_KEY = 'enjoy-maranhao-content';

export const SiteContentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [content, setContent] = useState<SiteContent>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        // Deep merge to handle new fields added to defaults
        return deepMerge(defaultContent, parsed);
      }
    } catch {}
    return defaultContent;
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(content));
  }, [content]);

  const updateContent = (newContent: SiteContent) => {
    setContent(newContent);
  };

  const updateSection = <K extends keyof SiteContent>(section: K, value: SiteContent[K]) => {
    setContent(prev => ({ ...prev, [section]: value }));
  };

  const resetToDefaults = () => {
    localStorage.removeItem(STORAGE_KEY);
    setContent(defaultContent);
  };

  return (
    <SiteContentContext.Provider value={{ content, updateContent, updateSection, resetToDefaults, defaults: defaultContent }}>
      {children}
    </SiteContentContext.Provider>
  );
};

export const useSiteContent = () => {
  const ctx = useContext(SiteContentContext);
  if (!ctx) throw new Error('useSiteContent must be used within SiteContentProvider');
  return ctx;
};

function deepMerge<T extends object>(defaults: T, overrides: Partial<T>): T {
  const result = { ...defaults };
  for (const key in overrides) {
    const k = key as keyof T;
    if (overrides[k] !== undefined && overrides[k] !== null) {
      if (typeof overrides[k] === 'object' && !Array.isArray(overrides[k])) {
        result[k] = deepMerge(defaults[k] as object, overrides[k] as object) as T[typeof k];
      } else {
        result[k] = overrides[k] as T[typeof k];
      }
    }
  }
  return result;
}
