import { useSiteContent } from '@/contexts/SiteContentContext';

const Destinations = () => {
  const { content } = useSiteContent();
  const destinations = content.destinations;

  return (
    <section className="bg-background py-16 lg:py-[120px] px-5 lg:px-16 relative overflow-hidden" id="destinos">
      <div className="flex flex-col lg:flex-row justify-between lg:items-end mb-10 lg:mb-16 gap-4 reveal">
        <div>
          <p className="text-[10px] tracking-[4px] lg:tracking-[5px] uppercase font-semibold grad-text flex items-center gap-2.5 mb-3">
            <span className="inline-block w-8 h-[3px] grad-bg rounded-sm flex-shrink-0" />
            Destinos
          </p>
          <h2 className="font-playfair font-bold leading-[1.05] tracking-[-1px] lg:tracking-[-2px]" style={{ fontSize: 'clamp(28px, 5vw, 66px)' }}>
            Onde cada paisagem<br />conta uma <em className="italic grad-text-diag">história.</em>
          </h2>
        </div>
        <a href="#" className="text-xs tracking-[2px] uppercase text-[rgba(255,255,255,0.4)] no-underline flex items-center gap-2 transition-colors duration-200 whitespace-nowrap hover:text-white min-h-[44px]">
          Ver todos <span className="text-base transition-transform duration-200">→</span>
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr] lg:grid-rows-3 gap-3 lg:gap-4">
        {destinations.map((dest, i) => (
          <div
            key={i}
            className={`rounded-2xl lg:rounded-[20px] overflow-hidden relative group ${
              i === 0 ? 'sm:col-span-2 lg:col-span-1 lg:row-span-2 min-h-[280px] lg:min-h-[560px]' : 'min-h-[200px] lg:min-h-[260px]'
            }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-105"
              style={{ backgroundImage: `url(${dest.image})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.8)] via-[rgba(0,0,0,0.1)] to-transparent transition-all duration-400 group-hover:from-[rgba(0,0,0,0.9)] group-hover:via-[rgba(0,0,0,0.2)]" />
            <div className="absolute bottom-0 left-0 right-0 p-5 lg:p-7 translate-y-1 transition-transform duration-300 group-hover:translate-y-0">
              <span className="inline-block text-[10px] tracking-[2px] uppercase py-1.5 px-3 rounded-full bg-[rgba(255,255,255,0.12)] backdrop-blur-[8px] mb-2 lg:mb-2.5 text-[rgba(255,255,255,0.8)] font-medium">
                {dest.tag}
              </span>
              <p className="font-playfair font-bold text-white leading-[1.15]" style={{ fontSize: 'clamp(18px, 2.5vw, 32px)' }}>
                {dest.name}
              </p>
              <p className="text-xs text-[rgba(255,255,255,0.55)] mt-1.5 max-h-0 overflow-hidden opacity-0 transition-all duration-400 group-hover:max-h-10 group-hover:opacity-100">
                {dest.sub}
              </p>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-[3px] grad-bg scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Destinations;
