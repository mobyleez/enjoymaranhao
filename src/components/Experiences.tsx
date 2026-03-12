import { useSiteContent } from '@/contexts/SiteContentContext';
import { Mountain, Music, UtensilsCrossed, Sailboat, Landmark, Sun, Compass, Camera, TreePine, Waves, Tent, Star } from 'lucide-react';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  mountain: Mountain,
  music: Music,
  utensils: UtensilsCrossed,
  sailboat: Sailboat,
  landmark: Landmark,
  sunset: Sun,
  compass: Compass,
  camera: Camera,
  tree: TreePine,
  waves: Waves,
  tent: Tent,
  star: Star,
};

const Experiences = () => {
  const { content } = useSiteContent();
  const experiences = content.experiences;

  return (
    <section className="bg-secondary py-16 lg:py-[120px] px-5 lg:px-16 relative" id="experiencias">
      <div className="flex flex-col lg:flex-row justify-between lg:items-end mb-10 lg:mb-16 gap-4 reveal">
        <div>
          <p className="text-[10px] tracking-[4px] lg:tracking-[5px] uppercase font-semibold text-[#1A7875] flex items-center gap-2.5 mb-3">
            <span className="inline-block w-8 h-[3px] grad-bg rounded-sm flex-shrink-0" />
            Experiências
          </p>
          <h2 className="font-playfair font-bold leading-[1.05] tracking-[-1px] lg:tracking-[-2px] text-secondary-foreground" style={{ fontSize: 'clamp(28px, 5vw, 66px)' }}>
            Mais do que uma viagem,<br />uma <em className="italic grad-text-diag">transformação.</em>
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 mt-8 lg:mt-[60px]">
        {experiences.map((exp, i) => {
          const IconComponent = iconMap[exp.icon] || Compass;

          return (
            <div
              key={i}
              className="bg-white rounded-2xl lg:rounded-[20px] p-6 lg:p-10 relative overflow-hidden transition-all duration-400 shadow-[0_4px_24px_rgba(0,0,0,0.06)] hover:-translate-y-2 hover:shadow-[0_24px_60px_rgba(0,0,0,0.12)] group reveal"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div className="absolute top-0 left-0 right-0 h-1 grad-bg scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100" />
              {exp.imageUrl ? (
                <div className="w-full h-32 rounded-xl mb-4 lg:mb-6 overflow-hidden">
                  <img src={exp.imageUrl} alt={exp.title} className="w-full h-full object-cover" />
                </div>
              ) : (
                <div
                  className="w-12 h-12 lg:w-14 lg:h-14 rounded-xl lg:rounded-[14px] flex items-center justify-center mb-4 lg:mb-6"
                  style={{
                    background: 'linear-gradient(white, white) padding-box, linear-gradient(135deg, #1B7BB4 0%, #7AC4E2 18%, #F5A623 36%, #E85C4A 55%, #6B1E4E 76%, #1A7875 100%) border-box',
                    border: '2px solid transparent',
                  }}
                >
                  <IconComponent className="w-5 h-5 lg:w-6 lg:h-6 text-[#1B7BB4]" />
                </div>
              )}
              <span className="font-playfair text-[12px] lg:text-[13px] font-bold grad-text block mb-2 lg:mb-3">{exp.num}</span>
              <h3 className="font-playfair text-lg lg:text-[22px] font-bold text-secondary-foreground mb-2 lg:mb-3 leading-[1.25]">{exp.title}</h3>
              <p className="text-sm text-[#666] leading-[1.7] lg:leading-[1.8] font-light">{exp.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Experiences;
