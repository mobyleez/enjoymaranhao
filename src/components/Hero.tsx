import { useSiteContent } from '@/contexts/SiteContentContext';

const Hero = () => {
  const { content } = useSiteContent();
  const { hero } = content;

  return (
    <section className="min-h-screen flex flex-col justify-center px-5 lg:px-16 pt-20 lg:pt-24 pb-10 lg:pb-16 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background" style={{
        backgroundImage: 'radial-gradient(circle at 15% 85%, rgba(26,120,117,0.18) 0%, transparent 40%), radial-gradient(circle at 85% 20%, rgba(27,123,180,0.15) 0%, transparent 40%), radial-gradient(circle at 50% 50%, rgba(107,30,78,0.08) 0%, transparent 50%)'
      }} />

      {/* Dots grid */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }} />

      {/* Decorative number */}
      <div className="absolute right-[-20px] top-1/2 -translate-y-1/2 font-playfair font-black text-transparent leading-none select-none pointer-events-none tracking-[-20px] hidden md:block" style={{
        fontSize: 'clamp(200px, 28vw, 420px)',
        WebkitTextStroke: '1px rgba(255,255,255,0.04)'
      }}>
        01
      </div>

      {/* Floating symbol - hidden on mobile */}
      <div className="absolute right-[10%] top-[35%] -translate-y-1/2 animate-float pointer-events-none hidden lg:block" style={{
        width: 'clamp(180px, 18vw, 280px)',
        filter: 'drop-shadow(0 0 80px rgba(27,123,180,0.15))'
      }}>
        <svg viewBox="0 0 340 340" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="symGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1B7BB4" />
              <stop offset="25%" stopColor="#7AC4E2" />
              <stop offset="50%" stopColor="#F5A623" />
              <stop offset="75%" stopColor="#E85C4A" />
              <stop offset="100%" stopColor="#1A7875" />
            </linearGradient>
          </defs>
          <path d="M170,20 L320,170 L170,320 L20,170 Z" fill="none" stroke="url(#symGrad)" strokeWidth="1.5" opacity="0.6" />
          <circle cx="170" cy="170" r="80" fill="none" stroke="url(#symGrad)" strokeWidth="1" opacity="0.4" />
          <circle cx="170" cy="170" r="4" fill="url(#symGrad)" />
          <line x1="170" y1="90" x2="170" y2="250" stroke="url(#symGrad)" strokeWidth="0.5" opacity="0.3" />
          <line x1="90" y1="170" x2="250" y2="170" stroke="url(#symGrad)" strokeWidth="0.5" opacity="0.3" />
        </svg>
      </div>

      {/* Gradient line - moved to bottom area */}
      <div className="absolute left-0 right-0 h-[2px] grad-bg opacity-40 bottom-[120px] animate-line-reveal hidden md:block" />

      {/* Content */}
      <div className="relative z-10 flex flex-col gap-8 lg:gap-10">
        {/* Tag */}
        <p className="animate-fade-up-1 text-[10px] lg:text-[11px] tracking-[4px] lg:tracking-[5px] uppercase font-semibold grad-text">
          {hero.tag}
        </p>

        {/* Title */}
        <h1 className="animate-fade-up-2 font-playfair font-black leading-[0.95] lg:leading-[0.92] tracking-[-2px] lg:tracking-[-3px] max-w-full lg:max-w-[55%]" style={{ fontSize: 'clamp(32px, 7vw, 100px)' }}>
          {hero.title.split(' ').slice(0, -1).join(' ')} <em className="italic grad-text-diag">{hero.title.split(' ').at(-1)}</em>
        </h1>

        {/* Bottom section */}
        <div className="animate-fade-up-3 flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 lg:gap-8">
          <p className="text-sm lg:text-[15px] text-[rgba(255,255,255,0.45)] max-w-[380px] leading-[1.7] lg:leading-[1.8] font-light">
            {hero.subtitle}
          </p>

          <div className="flex flex-col items-start lg:items-end gap-4 w-full lg:w-auto">
            <a href="#destinos" className="inline-flex items-center justify-center gap-3 py-4 lg:py-[18px] px-8 lg:px-10 rounded-full grad-bg text-white text-xs lg:text-[13px] tracking-[2px] uppercase font-semibold no-underline font-dm relative overflow-hidden transition-all duration-300 hover:-translate-y-[3px] shadow-[0_8px_40px_rgba(27,123,180,0.25)] hover:shadow-[0_16px_60px_rgba(27,123,180,0.4)] w-full sm:w-auto min-h-[52px]">
              {hero.ctaText}
              <span className="w-5 h-5 rounded-full bg-[rgba(255,255,255,0.2)] flex items-center justify-center text-[10px]">→</span>
            </a>

            <div className="flex items-center gap-2 text-[10px] tracking-[3px] uppercase text-[rgba(255,255,255,0.25)]">
              <span className="w-10 h-[1px] grad-bg inline-block animate-scroll-pulse" />
              <span className="hidden sm:inline">ROLE PARA DESCOBRIR</span>
              <span className="sm:hidden">DESLIZE PARA DESCOBRIR</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 grad-bg" />
    </section>
  );
};

export default Hero;
