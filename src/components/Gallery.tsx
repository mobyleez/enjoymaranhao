import { useRef, useState } from 'react';
import { useSiteContent } from '@/contexts/SiteContentContext';

const Gallery = () => {
  const { content } = useSiteContent();
  const items = content.gallery;
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
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${item.image})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.6)] to-transparent" />
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
