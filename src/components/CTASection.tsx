const CTASection = () => {
  return (
    <section className="bg-background py-20 lg:py-[160px] px-5 lg:px-16 relative overflow-hidden text-center" id="contato">
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(ellipse at 20% 50%, rgba(26,120,117,0.12) 0%, transparent 50%), radial-gradient(ellipse at 80% 50%, rgba(27,123,180,0.1) 0%, transparent 50%)'
      }} />
      <div className="absolute top-0 left-0 right-0 h-1 grad-bg" />

      {/* Logo */}
      <div className="relative z-[1] mx-auto mb-8 lg:mb-10 w-[200px] lg:w-[240px]">
        <svg viewBox="0 0 240 60" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="ctaLogoGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1B7BB4" />
              <stop offset="20%" stopColor="#7AC4E2" />
              <stop offset="40%" stopColor="#F5A623" />
              <stop offset="60%" stopColor="#E85C4A" />
              <stop offset="80%" stopColor="#6B1E4E" />
              <stop offset="100%" stopColor="#1A7875" />
            </linearGradient>
          </defs>
          <text x="120" y="38" textAnchor="middle" fontFamily="Playfair Display, serif" fontSize="28" fontWeight="700" fill="url(#ctaLogoGrad)">
            ENJOY MARANHÃO
          </text>
          <line x1="0" y1="55" x2="240" y2="55" stroke="url(#ctaLogoGrad)" strokeWidth="2" opacity="0.4" />
        </svg>
      </div>

      <h2 className="font-playfair font-black leading-none tracking-[-1px] lg:tracking-[-2px] mb-5 lg:mb-6 relative z-[1] reveal" style={{ fontSize: 'clamp(28px, 6vw, 80px)' }}>
        Sua próxima<br /><em className="italic grad-text-diag">aventura</em> começa aqui.
      </h2>

      <p className="text-sm lg:text-base text-[rgba(255,255,255,0.4)] max-w-[400px] lg:max-w-[480px] mx-auto mb-8 lg:mb-12 leading-[1.7] lg:leading-[1.8] font-light relative z-[1] px-4 lg:px-0">
        Deixe-nos criar a viagem perfeita para você. O Maranhão espera — e nós estamos prontos para guiá-lo.
      </p>

      <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center relative z-[1]">
        <a href="#" className="inline-flex items-center justify-center gap-3 min-h-[52px] py-4 lg:py-[18px] px-8 lg:px-10 rounded-full grad-bg text-white text-xs lg:text-[13px] tracking-[2px] uppercase font-semibold no-underline font-dm transition-all duration-300 hover:-translate-y-[3px] shadow-[0_8px_40px_rgba(27,123,180,0.25)] hover:shadow-[0_16px_60px_rgba(27,123,180,0.4)]">
          PLANEJAR MINHA VIAGEM
          <span className="w-5 h-5 rounded-full bg-[rgba(255,255,255,0.2)] flex items-center justify-center text-[10px]">→</span>
        </a>
        <a href="#" className="inline-flex items-center justify-center min-h-[52px] py-4 lg:py-[18px] px-8 lg:px-10 rounded-full border border-[rgba(255,255,255,0.15)] text-[rgba(255,255,255,0.6)] text-xs lg:text-[13px] tracking-[2px] uppercase font-medium no-underline font-dm transition-all duration-300 hover:border-[rgba(255,255,255,0.4)] hover:text-white">
          FALAR NO WHATSAPP
        </a>
      </div>
    </section>
  );
};

export default CTASection;
