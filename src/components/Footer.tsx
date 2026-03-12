import { useSiteContent } from '@/contexts/SiteContentContext';

const Footer = () => {
  const { content } = useSiteContent();
  const { footer } = content;

  const contactItems = [
    footer.email,
    footer.phone,
    footer.whatsapp,
    footer.instagram,
    footer.address,
  ];

  return (
    <footer className="bg-background border-t border-[rgba(255,255,255,0.06)] px-5 lg:px-16 pt-10 lg:pt-[60px] pb-6 lg:pb-10">
      <div className="h-[3px] grad-bg w-full mb-10 lg:mb-[60px] opacity-60" />

      <div className="grid grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr] gap-8 lg:gap-12 mb-10 lg:mb-[60px]">
        <div className="col-span-2 lg:col-span-1">
          {content.logoUrl ? (
            <img src={content.logoUrl} alt="Logo" className="h-10 lg:h-12 mb-4 lg:mb-5 object-contain" />
          ) : (
            <p className="font-playfair font-bold text-lg mb-4 lg:mb-5">
              <span className="grad-text">ENJOY</span> MARANHÃO
            </p>
          )}
          <p className="text-sm lg:text-[13px] text-[rgba(255,255,255,0.35)] leading-[1.8] lg:leading-[1.9] font-light max-w-[280px] lg:max-w-[240px]">
            {footer.description}
          </p>
        </div>

        <div>
          <p className="text-[10px] tracking-[3px] uppercase font-semibold mb-4 lg:mb-5 grad-text">Destinos</p>
          <ul className="list-none space-y-1 lg:space-y-2.5">
            {['Lençóis Maranhenses', 'São Luís', 'Chapada das Mesas', 'Barreirinhas', 'Delta do Parnaíba'].map((item) => (
              <li key={item}>
                <a href="#" className="text-sm lg:text-[13px] text-[rgba(255,255,255,0.4)] no-underline transition-colors duration-200 font-light hover:text-white min-h-[44px] flex items-center">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-[10px] tracking-[3px] uppercase font-semibold mb-4 lg:mb-5 grad-text">Empresa</p>
          <ul className="list-none space-y-1 lg:space-y-2.5">
            {['Sobre nós', 'Nossos guias', 'Blog', 'Parceiros', 'Imprensa'].map((item) => (
              <li key={item}>
                <a href="#" className="text-sm lg:text-[13px] text-[rgba(255,255,255,0.4)] no-underline transition-colors duration-200 font-light hover:text-white min-h-[44px] flex items-center">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="col-span-2 lg:col-span-1">
          <p className="text-[10px] tracking-[3px] uppercase font-semibold mb-4 lg:mb-5 grad-text">Contato</p>
          <ul className="list-none space-y-1 lg:space-y-2.5">
            {contactItems.map((item) => (
              <li key={item}>
                <a href="#" className="text-sm lg:text-[13px] text-[rgba(255,255,255,0.4)] no-underline transition-colors duration-200 font-light hover:text-white min-h-[44px] flex items-center">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="pt-6 lg:pt-8 border-t border-[rgba(255,255,255,0.06)] flex flex-col lg:flex-row justify-between items-center gap-3 text-center lg:text-left">
        <p className="text-[11px] text-[rgba(255,255,255,0.2)] tracking-[1px]">
          © 2026 Enjoy Maranhão. Todos os direitos reservados.
        </p>
        <p className="text-[11px] text-[rgba(255,255,255,0.2)] tracking-[1px]">
          Desenvolvido por{' '}
          <a
            href="https://mobyleez.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[rgba(255,255,255,0.35)] hover:text-white transition-colors duration-200"
          >
            Mobyleez
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
