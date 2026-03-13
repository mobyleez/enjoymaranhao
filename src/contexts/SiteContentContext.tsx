import React, { createContext, useContext, useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

export interface StatItem {
  num: string;
  suffix: string;
  label: string;
}

export interface DestinationItem {
  name: string;
  tag: string;
  sub: string;
  image: string;
}

export interface ExperienceItem {
  icon: string;
  num: string;
  title: string;
  desc: string;
  imageUrl?: string;
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

export interface GalleryItem {
  label: string;
  image: string;
}

export interface TestimonialItem {
  name: string;
  date: string;
  text: string;
  rating: number;
}

export interface SiteContent {
  logoUrl?: string;
  hero: {
    tag: string;
    title: string;
    subtitle: string;
    ctaText: string;
    bgImage: string;
  };
  stats: StatItem[];
  destinations: DestinationItem[];
  experiences: ExperienceItem[];
  testimonials: {
    heading: string;
    ratingLabel: string;
    ratingCount: string;
    items: TestimonialItem[];
  };
  manifesto: {
    quote: string;
    authorLine: string;
  };
  packages: PackageData[];
  gallery: GalleryItem[];
  cta: {
    title: string;
    description: string;
    primaryBtn: string;
    secondaryBtn: string;
    whatsappNumber: string;
    partnerLogos: string[];
  };
  footer: {
    description: string;
    email: string;
    phone: string;
    whatsapp: string;
    instagram: string;
    address: string;
    partnerLogos: string[];
    partnerLogoSize?: number;
  };
}

export const defaultContent: SiteContent = {
  logoUrl: '',
  hero: {
    tag: 'TURISMO · MARANHÃO · BRASIL',
    title: 'O Brasil que poucos conhecem. Todos deveriam.',
    subtitle: 'Das dunas brancas dos Lençóis ao ritmo do Bumba Meu Boi — descubra o Maranhão com quem verdadeiramente o ama.',
    ctaText: 'EXPLORAR DESTINOS',
    bgImage: 'https://images.unsplash.com/photo-1626010429613-0d52dcb7a14a?w=1920&q=80',
  },
  stats: [
    { num: '500', suffix: '+', label: 'Viajantes Atendidos' },
    { num: '12', suffix: '', label: 'Destinos Exclusivos' },
    { num: '98', suffix: '%', label: 'Satisfação' },
    { num: '5', suffix: '★', label: 'Avaliação Média' },
  ],
  destinations: [
    { name: 'Lençóis Maranhenses', tag: 'Imperdível', sub: 'Dunas brancas e lagoas cristalinas', image: 'https://images.unsplash.com/photo-1626010429613-0d52dcb7a14a?w=800&q=80' },
    { name: 'São Luís', tag: 'Patrimônio UNESCO', sub: 'A ilha capital com azulejos e história', image: 'https://images.unsplash.com/photo-1590486145985-f1e3cb94a4e4?w=600&q=80' },
    { name: 'Alcântara', tag: 'Histórico', sub: 'Ruínas coloniais e vista para o mar', image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=600&q=80' },
    { name: 'Delta do Parnaíba (MA/PI)', tag: 'Aventura', sub: 'Encontro do rio com o mar', image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&q=80' },
    { name: 'Jericoacoara (CE)', tag: 'Praias', sub: 'Dunas, lagoas e pôr do sol inesquecível', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80' },
    { name: 'Rota das Emoções (MA/PI/CE)', tag: 'Roteiro', sub: 'A aventura completa pelo nordeste', image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600&q=80' },
    { name: 'Travessia Lençóis Maranhenses', tag: 'Expedição', sub: 'Travessia épica pelas dunas e lagoas', image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=600&q=80' },
  ],
  experiences: [
    { icon: 'mountain', num: '01', title: 'Trekking nas Dunas', desc: 'Percorra a pé as dunas brancas dos Lençóis Maranhenses ao pôr do sol. Um espetáculo que muda para sempre a sua percepção de beleza natural.' },
    { icon: 'music', num: '02', title: 'Bumba Meu Boi', desc: 'Mergulhe no maior festival folclórico do Brasil. Cores, ritmos e histórias que revelam a alma mais profunda do povo maranhense.' },
    { icon: 'utensils', num: '03', title: 'Gastronomia Local', desc: 'Do arroz de cuxá ao torresmo de tambaqui, a culinária maranhense é um patrimônio vivo. Prove sabores que só existem aqui.' },
    { icon: 'sailboat', num: '04', title: 'Passeio de Lancha', desc: 'Navegue pelo rio Preguiças entre manguezais, restingas e comunidades quilombolas. Uma jornada ao coração mais genuíno do Maranhão.' },
    { icon: 'landmark', num: '05', title: 'Centro Histórico', desc: 'Caminhe pelos azulejos portugueses de São Luís, Patrimônio da Humanidade pela UNESCO. Arquitetura colonial que respira história em cada esquina.' },
    { icon: 'sunset', num: '06', title: 'Pôr do Sol na Lagoa', desc: 'As lagoas dos Lençóis refletem o céu em cores impossíveis no entardecer. O momento mais fotográfico do Maranhão é também o mais contemplativo.' },
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
  gallery: [
    { label: 'Lençóis ao amanhecer', image: 'https://images.unsplash.com/photo-1626010429613-0d52dcb7a14a?w=600&q=80' },
    { label: 'Bumba Meu Boi', image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=600&q=80' },
    { label: 'Manguezal do Golfão', image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600&q=80' },
    { label: 'Gastronomia maranhense', image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80' },
    { label: 'São Luís noturna', image: 'https://images.unsplash.com/photo-1514890547357-a9ee288728e0?w=600&q=80' },
    { label: 'Delta do Parnaíba', image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&q=80' },
  ],
  testimonials: {
    heading: 'O que nossos clientes dizem.',
    ratingLabel: 'EXCELENTE',
    ratingCount: 'com base em 36 avaliações Google',
    items: [
      { name: 'Analu Danieli', date: 'Março 2025', text: 'Muito boa, o atendimento foi excepcional. A Amanda, que nos atendeu, foi extremamente atenciosa e solicita. Nos ajudou em todas as demandas e respondia rapidamente, inclusive durante a madrugada.', rating: 5 },
      { name: 'Ana Paula Queiroz', date: 'Janeiro 2025', text: 'Enjoy proporcionou momentos incríveis na minha visita aos lençóis maranhenses! O roteiro ficou incrível e conseguimos aproveitar o máximo desse lugar tão lindo! Super recomendo!', rating: 5 },
      { name: 'Andressa Santos', date: 'Janeiro 2025', text: 'Simplesmente fantástico! Júlio nos proporcionou férias incríveis, férias maravilhosas. Fomos na alta temporada e, óbvio, conseguimos aproveitar tudo ao máximo.', rating: 5 },
    ],
  },
  cta: {
    title: 'Sua próxima aventura começa aqui.',
    description: 'Deixe-nos criar a viagem perfeita para você. O Maranhão espera — e nós estamos prontos para guiá-lo.',
    primaryBtn: 'PLANEJAR MINHA VIAGEM',
    secondaryBtn: 'FALAR NO WHATSAPP',
    whatsappNumber: '5598999990000',
    partnerLogos: ['', '', '', ''],
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
  saveToSupabase: () => Promise<void>;
  defaults: SiteContent;
}

const SiteContentContext = createContext<SiteContentContextType | null>(null);

export const SiteContentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [content, setContent] = useState<SiteContent>(defaultContent);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const loadContent = async () => {
      try {
        const { data, error } = await supabase
          .from('site_content')
          .select('content')
          .limit(1)
          .maybeSingle();

        if (!error && data?.content) {
          setContent(deepMerge(defaultContent, data.content as Partial<SiteContent>));
        }
      } catch {
        // Fall back to defaults silently
      }
      setLoaded(true);
    };
    loadContent();
  }, []);

  const updateContent = (newContent: SiteContent) => setContent(newContent);

  const updateSection = <K extends keyof SiteContent>(section: K, value: SiteContent[K]) => {
    setContent(prev => ({ ...prev, [section]: value }));
  };

  const resetToDefaults = () => setContent(defaultContent);

  const saveToSupabase = async () => {
    const { data: existing } = await supabase
      .from('site_content')
      .select('id')
      .limit(1)
      .maybeSingle();

    if (existing) {
      const { error } = await supabase
        .from('site_content')
        .update({ content: content as unknown as Record<string, unknown>, updated_at: new Date().toISOString() })
        .eq('id', existing.id);
      if (error) throw error;
    } else {
      const { error } = await supabase
        .from('site_content')
        .insert({ content: content as unknown as Record<string, unknown> });
      if (error) throw error;
    }
  };

  return (
    <SiteContentContext.Provider value={{ content, updateContent, updateSection, resetToDefaults, saveToSupabase, defaults: defaultContent }}>
      {loaded ? children : (
        <div className="min-h-screen bg-background flex items-center justify-center">
          <div className="text-muted-foreground text-sm">Carregando...</div>
        </div>
      )}
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
