import { useRef, useState } from 'react';

const items = [
  {
    label: 'Lençóis ao amanhecer',
    bg: 'linear-gradient(160deg,#1B7BB4,#7AC4E2,#EDEAE3)',
    svg: (
      <svg width="100%" height="100%" viewBox="0 0 300 400" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
        <defs><radialGradient id="g1" cx="50%" cy="70%"><stop offset="0%" stopColor="#EDEAE3" stopOpacity="0.9" /><stop offset="100%" stopColor="#1B7BB4" stopOpacity="0.3" /></radialGradient></defs>
        <rect width="300" height="400" fill="url(#g1)" />
        <path d="M0,280 Q75,230 150,260 Q225,290 300,240 L300,400 L0,400 Z" fill="rgba(237,234,227,0.5)" />
        <path d="M0,310 Q100,270 200,300 Q260,315 300,290 L300,400 L0,400 Z" fill="rgba(237,234,227,0.4)" />
        <ellipse cx="100" cy="320" rx="60" ry="20" fill="rgba(27,123,180,0.3)" />
      </svg>
    ),
  },
  {
    label: 'Bumba Meu Boi',
    bg: 'linear-gradient(160deg,#6B1E4E,#E85C4A,#F5A623)',
    svg: (
      <svg width="100%" height="100%" viewBox="0 0 300 400" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="150" cy="220" rx="90" ry="70" fill="rgba(255,255,255,0.1)" />
        <circle cx="150" cy="150" r="50" fill="rgba(255,255,255,0.1)" />
        <path d="M100,120 Q90,80 70,90" stroke="rgba(255,255,255,0.4)" strokeWidth="6" fill="none" strokeLinecap="round" />
        <path d="M200,120 Q210,80 230,90" stroke="rgba(255,255,255,0.4)" strokeWidth="6" fill="none" strokeLinecap="round" />
        <rect x="50" y="50" width="8" height="8" fill="#F5A623" opacity="0.7" transform="rotate(20,54,54)" />
        <rect x="200" y="80" width="6" height="6" fill="#7AC4E2" opacity="0.7" transform="rotate(45,203,83)" />
        <circle cx="180" cy="40" r="5" fill="#7AC4E2" opacity="0.6" />
      </svg>
    ),
  },
  {
    label: 'Manguezal do Golfão',
    bg: 'linear-gradient(160deg,#1A7875,#2a9e6e,#F5A623)',
    svg: (
      <svg width="100%" height="100%" viewBox="0 0 300 400" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
        <rect x="0" y="280" width="300" height="120" fill="rgba(27,123,180,0.3)" />
        <rect x="20" y="150" width="18" height="140" fill="rgba(0,0,0,0.25)" />
        <rect x="80" y="120" width="14" height="170" fill="rgba(0,0,0,0.2)" />
        <rect x="200" y="110" width="18" height="180" fill="rgba(0,0,0,0.2)" />
        <ellipse cx="29" cy="140" rx="28" ry="18" fill="rgba(26,120,117,0.5)" transform="rotate(-20,29,140)" />
        <ellipse cx="87" cy="110" rx="24" ry="16" fill="rgba(26,120,117,0.45)" transform="rotate(15,87,110)" />
        <ellipse cx="209" cy="100" rx="28" ry="18" fill="rgba(26,120,117,0.45)" transform="rotate(20,209,100)" />
      </svg>
    ),
  },
  {
    label: 'Gastronomia maranhense',
    bg: 'linear-gradient(160deg,#F5A623,#E85C4A,#6B1E4E)',
    svg: (
      <svg width="100%" height="100%" viewBox="0 0 300 400" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="200" r="100" fill="rgba(255,255,255,0.08)" />
        <circle cx="150" cy="200" r="80" fill="rgba(255,255,255,0.06)" />
        <circle cx="150" cy="200" r="55" fill="rgba(255,255,255,0.1)" />
        <ellipse cx="165" cy="205" rx="20" ry="14" fill="rgba(232,92,74,0.4)" />
        <ellipse cx="148" cy="215" rx="15" ry="10" fill="rgba(26,120,117,0.5)" />
      </svg>
    ),
  },
  {
    label: 'São Luís noturna',
    bg: 'linear-gradient(160deg,#0D0D0D,#1B7BB4,#7AC4E2)',
    svg: (
      <svg width="100%" height="100%" viewBox="0 0 300 400" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
        <rect x="30" y="150" width="240" height="250" fill="rgba(255,255,255,0.04)" />
        <polygon points="30,150 270,150 150,80" fill="rgba(255,255,255,0.07)" />
        <rect x="72" y="222" width="26" height="46" fill="rgba(245,166,35,0.35)" />
        <rect x="142" y="222" width="26" height="46" fill="rgba(245,166,35,0.3)" />
        <rect x="212" y="222" width="26" height="46" fill="rgba(245,166,35,0.35)" />
        <circle cx="50" cy="40" r="2" fill="white" opacity="0.6" />
        <circle cx="120" cy="20" r="1.5" fill="white" opacity="0.5" />
        <circle cx="200" cy="35" r="2" fill="white" opacity="0.7" />
        <circle cx="170" cy="50" r="2" fill="white" opacity="0.6" />
      </svg>
    ),
  },
  {
    label: 'Delta do Parnaíba',
    bg: 'linear-gradient(160deg,#7AC4E2,#1A7875,#0D0D0D)',
    svg: (
      <svg width="100%" height="100%" viewBox="0 0 300 400" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
        <rect x="0" y="0" width="300" height="400" fill="rgba(26,120,117,0.15)" />
        <path d="M40,180 Q100,140 160,170 Q200,185 180,220 Q150,250 100,240 Q50,230 40,180 Z" fill="rgba(26,120,117,0.5)" />
        <path d="M160,220 Q220,190 260,220 Q280,240 250,270 Q210,290 180,270 Q155,250 160,220 Z" fill="rgba(26,120,117,0.45)" />
        <path d="M0,200 Q50,210 40,180" stroke="rgba(122,196,226,0.5)" strokeWidth="20" fill="none" />
      </svg>
    ),
  },
];

const Gallery = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const onMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    startX.current = e.pageX - (scrollRef.current?.offsetLeft || 0);
    scrollLeft.current = scrollRef.current?.scrollLeft || 0;
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 2;
    scrollRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const onMouseUp = () => setIsDragging(false);

  return (
    <section className="bg-background pb-16 lg:pb-[120px] overflow-hidden">
      <div className="px-5 lg:px-16 pt-10 lg:pt-[60px] flex flex-col lg:flex-row justify-between lg:items-end gap-3 lg:gap-4 mb-0">
        <div>
          <p className="text-[10px] tracking-[4px] lg:tracking-[5px] uppercase font-semibold grad-text flex items-center gap-2.5 mb-3">
            <span className="inline-block w-8 h-[3px] grad-bg rounded-sm flex-shrink-0" />
            Galeria
          </p>
          <h2 className="font-playfair font-bold leading-[1.05] tracking-[-1px] lg:tracking-[-2px]" style={{ fontSize: 'clamp(28px, 4vw, 54px)' }}>
            Instantes <em className="italic grad-text-diag">reais.</em>
          </h2>
        </div>
        <p className="text-xs text-[rgba(255,255,255,0.3)] tracking-[1px]">
          <span className="hidden lg:inline">← Arraste para explorar →</span>
          <span className="lg:hidden">← Deslize para explorar →</span>
        </p>
      </div>

      <div
        ref={scrollRef}
        className={`gallery-scroll flex gap-3 lg:gap-4 px-5 lg:px-16 py-8 lg:py-[60px] overflow-x-auto snap-x snap-mandatory lg:snap-none ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
        style={{ WebkitOverflowScrolling: 'touch' }}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
      >
        {items.map((item, i) => (
          <div key={i} className="flex-shrink-0 w-[260px] sm:w-[280px] lg:w-[300px] h-[340px] sm:h-[360px] lg:h-[400px] rounded-2xl overflow-hidden relative transition-transform duration-300 hover:scale-[1.02] snap-start">
            <div className="absolute inset-0" style={{ background: item.bg }}>
              {item.svg}
            </div>
            <p className="absolute bottom-4 lg:bottom-5 left-4 lg:left-5 font-playfair text-base lg:text-lg text-white font-bold drop-shadow-[0_2px_12px_rgba(0,0,0,0.5)]">
              {item.label}
            </p>
            <div className="absolute bottom-0 left-0 right-0 h-[3px] grad-bg" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
