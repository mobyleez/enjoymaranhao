import { Star } from 'lucide-react';
import { useSiteContent } from '@/contexts/SiteContentContext';

const Testimonials = () => {
  const { content } = useSiteContent();
  const { testimonials } = content;

  return (
    <section className="bg-background py-16 lg:py-[120px] px-5 lg:px-16 relative overflow-hidden">
      <div className="flex flex-col lg:flex-row justify-between lg:items-start mb-10 lg:mb-16 gap-8 reveal">
        <div>
          <p className="text-[10px] tracking-[4px] lg:tracking-[5px] uppercase font-semibold grad-text flex items-center gap-2.5 mb-3">
            <span className="inline-block w-8 h-[3px] grad-bg rounded-sm flex-shrink-0" />
            Avaliações
          </p>
          <h2 className="font-playfair font-bold leading-[1.05] tracking-[-1px] lg:tracking-[-2px]" style={{ fontSize: 'clamp(28px, 5vw, 66px)' }}>
            O que nossos <em className="italic grad-text-diag">clientes</em><br />dizem.
          </h2>
        </div>

        <div className="text-right flex-shrink-0">
          <p className="font-playfair font-black tracking-[3px] grad-text" style={{ fontSize: 'clamp(24px, 4vw, 48px)' }}>
            {testimonials.ratingLabel}
          </p>
          <p className="text-[11px] tracking-[2px] uppercase text-[rgba(255,255,255,0.4)] mt-1">
            {testimonials.ratingCount}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
        {testimonials.items.map((item, i) => (
          <div
            key={i}
            className="border border-[rgba(255,255,255,0.08)] rounded-2xl p-6 lg:p-8 flex flex-col justify-between transition-all duration-300 hover:border-[rgba(255,255,255,0.15)] bg-[rgba(255,255,255,0.02)]"
          >
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full grad-bg text-[10px] tracking-[2px] uppercase font-semibold text-white mb-5">
                GOOGLE ★ VERIFICADO
              </div>

              <div className="flex gap-1 mb-4">
                {Array.from({ length: item.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-[#F5A623] text-[#F5A623]" />
                ))}
              </div>

              <p className="text-sm text-[rgba(255,255,255,0.5)] leading-[1.8] font-light mb-6">
                "{item.text}"
              </p>
            </div>

            <div>
              <p className="text-sm font-semibold text-foreground">{item.name}</p>
              <p className="text-xs text-[rgba(255,255,255,0.35)]">{item.date}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
