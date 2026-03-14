import { useEffect, useState } from 'react';
import { useSiteContent } from '@/contexts/SiteContentContext';
import MobileMenu from './MobileMenu';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const { content } = useSiteContent();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] px-5 lg:px-16 h-[72px] flex items-center justify-between transition-all duration-400 ${
        scrolled ? 'bg-[rgba(13,13,13,0.85)] backdrop-blur-[20px] border-b border-[rgba(255,255,255,0.06)]' : ''
      }`}
    >
      {content.logoUrl ? (
        <img src={content.logoUrl} alt="Logo" className="h-8 lg:h-10 object-contain" />
      ) : (
        <div className="font-playfair text-lg font-bold tracking-wider">
          <span className="grad-text">ENJOY</span>
          <span className="text-foreground ml-1">MARANHÃO</span>
        </div>
      )}

      <ul className="hidden lg:flex gap-10 list-none">
        {['Destinos', 'Experiências', 'Pacotes', 'Contato'].map((item) => (
          <li key={item}>
            <a
              href={`#${item.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')}`}
              className="text-xs tracking-[2px] uppercase text-[rgba(255,255,255,0.55)] no-underline transition-colors duration-200 font-medium hover:text-white"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>

      <a
        href="/admin"
        className="hidden lg:inline-flex text-xs tracking-[2px] uppercase text-[rgba(255,255,255,0.55)] no-underline transition-colors duration-200 font-medium hover:text-white"
      >
        Área Admin
      </a>

      <button className="hidden lg:block relative overflow-hidden border border-[rgba(255,255,255,0.2)] text-foreground py-2.5 px-7 rounded-full text-xs tracking-[2px] uppercase font-dm font-medium transition-all duration-300 group bg-transparent">
        <span className="absolute inset-0 grad-bg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <span className="relative z-10">Planejar Viagem</span>
      </button>

      <MobileMenu />
    </nav>
  );
};

export default Navbar;
