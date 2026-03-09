const packages = [
  {
    type: 'light' as const,
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
    btnStyle: 'outline' as const,
  },
  {
    type: 'featured' as const,
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
    btnStyle: 'grad' as const,
  },
  {
    type: 'light' as const,
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
    btnStyle: 'outline' as const,
  },
];

const Packages = () => {
  return (
    <section className="bg-secondary py-20 lg:py-[120px] px-8 lg:px-16 relative" id="pacotes">
      <div className="flex flex-col lg:flex-row justify-between lg:items-end mb-16 gap-4 reveal">
        <div>
          <p className="text-[10px] tracking-[5px] uppercase font-semibold text-[#1A7875] flex items-center gap-2.5 mb-3">
            <span className="inline-block w-8 h-[3px] grad-bg rounded-sm flex-shrink-0" />
            Pacotes
          </p>
          <h2 className="font-playfair font-bold leading-[1.05] tracking-[-2px] text-secondary-foreground" style={{ fontSize: 'clamp(36px, 5vw, 66px)' }}>
            A viagem perfeita,<br /><em className="italic grad-text-diag">do seu jeito.</em>
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-[60px]">
        {packages.map((pkg, i) => {
          const isFeatured = pkg.type === 'featured';
          return (
            <div
              key={i}
              className={`rounded-3xl overflow-hidden relative transition-transform duration-400 hover:-translate-y-1.5 reveal ${
                isFeatured ? 'bg-background' : 'bg-white shadow-[0_4px_24px_rgba(0,0,0,0.07)]'
              }`}
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              <div className="absolute top-0 left-0 right-0 h-1 grad-bg" />
              <div className="p-10 pb-7">
                {pkg.badge && (
                  <span className="inline-block text-[9px] tracking-[2px] uppercase py-1 px-3 rounded-full grad-bg text-white font-semibold mb-4">
                    {pkg.badge}
                  </span>
                )}
                <p className={`font-playfair text-[26px] font-bold leading-[1.15] mb-2 whitespace-pre-line ${isFeatured ? 'text-foreground' : 'text-secondary-foreground'}`}>
                  {pkg.name}
                </p>
                <p className={`text-[13px] leading-[1.7] font-light ${isFeatured ? 'text-[rgba(255,255,255,0.45)]' : 'text-[#888]'}`}>
                  {pkg.subtitle}
                </p>
              </div>

              <div className={`px-10 py-6 flex items-baseline gap-1.5 border-t ${isFeatured ? 'border-[rgba(255,255,255,0.06)]' : 'border-[rgba(0,0,0,0.06)]'}`}>
                <span className={`text-[11px] tracking-[1px] uppercase ${isFeatured ? 'text-[rgba(255,255,255,0.35)]' : 'text-[#999]'}`}>
                  {pkg.priceLabel}
                </span>
                <span className={`font-playfair font-black grad-text tracking-[-1px] ${pkg.priceSmall ? 'text-[28px]' : 'text-[38px]'}`}>
                  {pkg.price}
                </span>
                {pkg.priceSuffix && (
                  <span className={`text-base font-semibold ${isFeatured ? 'text-[rgba(255,255,255,0.4)]' : 'text-[#aaa]'}`}>
                    {pkg.priceSuffix}
                  </span>
                )}
              </div>

              <div className="px-10 pb-10">
                {pkg.items.map((item, j) => (
                  <div
                    key={j}
                    className={`flex items-center gap-3 text-[13px] py-2 border-b ${
                      isFeatured ? 'border-[rgba(255,255,255,0.05)] text-[rgba(255,255,255,0.65)]' : 'border-[rgba(0,0,0,0.05)] text-[#444]'
                    }`}
                  >
                    <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: item.color }} />
                    {item.text}
                  </div>
                ))}
              </div>

              <div className="px-10 pb-10">
                <a
                  href="#"
                  className={`block text-center py-4 rounded-full text-xs tracking-[2px] uppercase font-semibold no-underline font-dm transition-all duration-200 cursor-none ${
                    pkg.btnStyle === 'grad'
                      ? 'grad-bg text-white shadow-[0_8px_30px_rgba(27,123,180,0.25)] hover:-translate-y-0.5 hover:shadow-[0_16px_50px_rgba(27,123,180,0.4)]'
                      : `bg-transparent border border-[rgba(0,0,0,0.15)] text-secondary-foreground hover:border-[#1A7875] hover:text-[#1A7875]`
                  }`}
                >
                  {pkg.btnText}
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Packages;
