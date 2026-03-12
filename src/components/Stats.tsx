import { useSiteContent } from '@/contexts/SiteContentContext';

const Stats = () => {
  const { content } = useSiteContent();
  const stats = content.stats;

  return (
    <section className="bg-secondary py-12 lg:py-20 px-5 lg:px-16 relative overflow-hidden">
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(ellipse at 50% 120%, rgba(26,120,117,0.06), transparent 60%)'
      }} />
      <div className="grid grid-cols-2 lg:grid-cols-4 relative z-[1] gap-y-6 lg:gap-y-0">
        {stats.map((stat, i) => (
          <div
            key={i}
            className={`py-4 lg:py-10 px-4 lg:px-12 relative group ${i < stats.length - 1 ? 'lg:border-r lg:border-[rgba(0,0,0,0.08)]' : ''} ${i === 1 ? 'max-lg:border-r-0' : ''}`}
          >
            <div className="absolute top-0 left-0 right-0 h-[3px] grad-bg scale-x-0 origin-left transition-transform duration-[600ms] group-hover:scale-x-100" />
            <p className="font-playfair font-black leading-none tracking-[-1px] lg:tracking-[-2px] grad-text" style={{ fontSize: 'clamp(32px, 5vw, 72px)' }}>
              {stat.num}{stat.suffix}
            </p>
            <p className="text-[10px] lg:text-xs text-[#777] tracking-[1px] lg:tracking-[2px] uppercase mt-1 lg:mt-2 font-medium">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
