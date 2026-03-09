const Footer = () => {
  return (
    <footer className="bg-background border-t border-[rgba(255,255,255,0.06)] px-8 lg:px-16 pt-12 lg:pt-[60px] pb-8 lg:pb-10">
      <div className="h-[3px] grad-bg w-full mb-[60px] opacity-60" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr] gap-8 lg:gap-12 mb-[60px]">
        <div>
          <p className="font-playfair font-bold text-lg mb-5">
            <span className="grad-text">ENJOY</span> MARANHÃO
          </p>
          <p className="text-[13px] text-[rgba(255,255,255,0.35)] leading-[1.9] font-light max-w-[240px]">
            Somos apaixonados pelo Maranhão. Nossa missão é conectar viajantes às experiências mais autênticas e transformadoras deste estado único.
          </p>
        </div>

        <div>
          <p className="text-[10px] tracking-[3px] uppercase font-semibold mb-5 grad-text">Destinos</p>
          <ul className="list-none space-y-2.5">
            {['Lençóis Maranhenses', 'São Luís', 'Chapada das Mesas', 'Barreirinhas', 'Delta do Parnaíba'].map((item) => (
              <li key={item}>
                <a href="#" className="text-[13px] text-[rgba(255,255,255,0.4)] no-underline transition-colors duration-200 font-light hover:text-white cursor-none">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-[10px] tracking-[3px] uppercase font-semibold mb-5 grad-text">Empresa</p>
          <ul className="list-none space-y-2.5">
            {['Sobre nós', 'Nossos guias', 'Blog', 'Parceiros', 'Imprensa'].map((item) => (
              <li key={item}>
                <a href="#" className="text-[13px] text-[rgba(255,255,255,0.4)] no-underline transition-colors duration-200 font-light hover:text-white cursor-none">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-[10px] tracking-[3px] uppercase font-semibold mb-5 grad-text">Contato</p>
          <ul className="list-none space-y-2.5">
            {['contato@enjoymaranhao.com.br', '(98) 9 9999-0000', 'WhatsApp', 'Instagram', 'São Luís — MA'].map((item) => (
              <li key={item}>
                <a href="#" className="text-[13px] text-[rgba(255,255,255,0.4)] no-underline transition-colors duration-200 font-light hover:text-white cursor-none">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="pt-8 border-t border-[rgba(255,255,255,0.06)] flex flex-col lg:flex-row justify-between items-center gap-3">
        <p className="text-[11px] text-[rgba(255,255,255,0.2)] tracking-[1px]">
          © 2026 Enjoy Maranhão. Todos os direitos reservados.
        </p>
        <p className="text-[11px] text-[rgba(255,255,255,0.2)] tracking-[1px]">
          Feito com paixão pelo Maranhão ✦
        </p>
      </div>
    </footer>
  );
};

export default Footer;
