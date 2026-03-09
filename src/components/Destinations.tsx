import { useSiteContent } from '@/contexts/SiteContentContext';

const svgs = [
  (
    <svg width="100%" height="100%" viewBox="0 0 600 560" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="lg1" cx="50%" cy="80%"><stop offset="0%" stopColor="#EDEAE3" stopOpacity="0.8" /><stop offset="100%" stopColor="#1B7BB4" stopOpacity="0.2" /></radialGradient>
      </defs>
      <rect width="600" height="560" fill="url(#lg1)" />
      <path d="M0,380 Q150,320 300,360 Q450,400 600,340 L600,560 L0,560 Z" fill="rgba(237,234,227,0.5)" />
      <path d="M0,420 Q200,370 400,410 Q500,430 600,390 L600,560 L0,560 Z" fill="rgba(237,234,227,0.35)" />
      <ellipse cx="200" cy="440" rx="80" ry="25" fill="rgba(27,123,180,0.35)" />
      <ellipse cx="420" cy="420" rx="60" ry="20" fill="rgba(27,123,180,0.3)" />
      <ellipse cx="320" cy="460" rx="50" ry="16" fill="rgba(122,196,226,0.3)" />
    </svg>
  ),
  (
    <svg width="100%" height="100%" viewBox="0 0 300 260" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
      <rect x="40" y="60" width="60" height="200" fill="rgba(255,255,255,0.08)" />
      <rect x="120" y="40" width="60" height="220" fill="rgba(255,255,255,0.1)" />
      <rect x="200" y="70" width="60" height="190" fill="rgba(255,255,255,0.07)" />
      <rect x="50" y="100" width="14" height="20" fill="rgba(245,166,35,0.4)" rx="2" />
      <rect x="70" y="100" width="14" height="20" fill="rgba(245,166,35,0.3)" rx="2" />
      <rect x="130" y="80" width="14" height="20" fill="rgba(122,196,226,0.4)" rx="2" />
      <rect x="155" y="80" width="14" height="20" fill="rgba(122,196,226,0.3)" rx="2" />
      <rect x="210" y="110" width="14" height="20" fill="rgba(26,120,117,0.4)" rx="2" />
      <rect x="235" y="110" width="14" height="20" fill="rgba(26,120,117,0.3)" rx="2" />
    </svg>
  ),
  (
    <svg width="100%" height="100%" viewBox="0 0 300 260" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
      <rect x="40" y="100" width="220" height="160" fill="rgba(0,0,0,0.2)" />
      <polygon points="40,100 260,100 240,60 60,60" fill="rgba(0,0,0,0.15)" />
      <rect x="110" y="100" width="8" height="80" fill="rgba(122,196,226,0.6)" />
      <rect x="125" y="110" width="6" height="70" fill="rgba(122,196,226,0.4)" />
      <ellipse cx="50" cy="100" rx="30" ry="20" fill="rgba(26,120,117,0.5)" />
      <ellipse cx="250" cy="95" rx="25" ry="18" fill="rgba(26,120,117,0.4)" />
    </svg>
  ),
  (
    <svg width="100%" height="100%" viewBox="0 0 300 260" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="160" width="300" height="100" fill="rgba(27,123,180,0.4)" />
      <path d="M0,175 Q50,165 100,175 Q150,185 200,175 Q250,165 300,175" stroke="rgba(255,255,255,0.3)" strokeWidth="2" fill="none" />
      <path d="M60,155 L100,155 L95,165 L65,165 Z" fill="rgba(255,255,255,0.7)" />
      <rect x="75" y="140" width="3" height="15" fill="rgba(255,255,255,0.6)" />
      <path d="M78,140 L90,148 L78,148 Z" fill="rgba(245,166,35,0.8)" />
      <circle cx="150" cy="91" r="35" fill="rgba(245,166,35,0.4)" />
      <circle cx="150" cy="91" r="20" fill="rgba(245,166,35,0.5)" />
    </svg>
  ),
  (
    <svg width="100%" height="100%" viewBox="0 0 300 260" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="300" height="260" fill="rgba(26,120,117,0.15)" />
      <path d="M40,120 Q100,80 160,110 Q200,125 180,160 Q150,190 100,180 Q50,170 40,120 Z" fill="rgba(26,120,117,0.5)" />
      <path d="M160,150 Q220,120 260,150 Q280,170 250,200 Q210,220 180,200 Q155,180 160,150 Z" fill="rgba(26,120,117,0.45)" />
      <path d="M0,140 Q50,150 40,120" stroke="rgba(122,196,226,0.5)" strokeWidth="15" fill="none" />
    </svg>
  ),
];

const bgs = [
  'linear-gradient(135deg, #1B7BB4 0%, #7AC4E2 40%, #EDEAE3 100%)',
  'linear-gradient(135deg, #6B1E4E 0%, #E85C4A 50%, #F5A623 100%)',
  'linear-gradient(135deg, #1A7875 0%, #2a9e6e 50%, #F5A623 100%)',
  'linear-gradient(135deg, #F5A623 0%, #E85C4A 50%, #6B1E4E 100%)',
  'linear-gradient(135deg, #7AC4E2 0%, #1A7875 50%, #0D0D0D 100%)',
];

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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr] lg:grid-rows-2 gap-3 lg:gap-4">
        {destinations.map((dest, i) => (
          <div
            key={i}
            className={`rounded-2xl lg:rounded-[20px] overflow-hidden relative group ${
              i === 0 ? 'sm:col-span-2 lg:col-span-1 lg:row-span-2 min-h-[280px] lg:min-h-[560px]' : 'min-h-[200px] lg:min-h-[260px]'
            }`}
          >
            <div
              className="absolute inset-0 transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-105"
              style={{ background: bgs[i] ?? bgs[0], minHeight: '100%' }}
            >
              <div className="absolute inset-0">{svgs[i]}</div>
            </div>
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
