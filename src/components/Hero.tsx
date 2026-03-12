import { useSiteContent } from '@/contexts/SiteContentContext';

const Hero = () => {
  const { content } = useSiteContent();
  const { hero } = content;

  return (
    <section className="min-h-screen flex flex-col justify-center px-5 lg:px-16 pt-20 lg:pt-24 pb-10 lg:pb-16 relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${hero.bgImage})` }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0.55)] via-[rgba(0,0,0,0.4)] to-[rgba(0,0,0,0.7)]" />

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


      {/* Content */}
      <div className="relative z-10 flex flex-col gap-8 lg:gap-10">
        <p className="animate-fade-up-1 text-[10px] lg:text-[11px] tracking-[4px] lg:tracking-[5px] uppercase font-semibold grad-text">
          {hero.tag}
        </p>

        <h1 className="animate-fade-up-2 font-playfair font-black leading-[0.95] lg:leading-[0.92] tracking-[-2px] lg:tracking-[-3px] max-w-full lg:max-w-[55%]" style={{ fontSize: 'clamp(32px, 7vw, 100px)' }}>
          {hero.title.split(' ').slice(0, -1).join(' ')} <em className="italic grad-text-diag">{hero.title.split(' ').at(-1)}</em>
        </h1>

        <div className="animate-fade-up-3 flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 lg:gap-8">
          <p className="text-sm lg:text-[15px] text-[rgba(255,255,255,0.6)] max-w-[380px] leading-[1.7] lg:leading-[1.8] font-light">
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
