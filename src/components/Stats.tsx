const stats = [
  { num: '500', suffix: '+', label: 'Viajantes Atendidos' },
  { num: '12', suffix: '', label: 'Destinos Exclusivos' },
  { num: '98', suffix: '%', label: 'Satisfação' },
  { num: '5', suffix: '★', label: 'Avaliação Média' },
];

const Stats = () => {
  return (
    <section className="bg-secondary py-20 px-8 lg:px-16 relative overflow-hidden">
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(ellipse at 50% 120%, rgba(26,120,117,0.06), transparent 60%)'
      }} />
      <div className="grid grid-cols-2 lg:grid-cols-4 relative z-[1]">
        {stats.map((stat, i) => (
          <div
            key={i}
            className={`py-10 px-6 lg:px-12 relative group ${i < stats.length - 1 ? 'lg:border-r lg:border-[rgba(0,0,0,0.08)]' : ''} ${i === 1 ? 'max-lg:border-r-0' : ''}`}
          >
            <div className="absolute top-0 left-0 right-0 h-[3px] grad-bg scale-x-0 origin-left transition-transform duration-[600ms] group-hover:scale-x-100" />
            <p className="font-playfair font-black leading-none tracking-[-2px] text-secondary-foreground" style={{ fontSize: 'clamp(42px, 5vw, 72px)' }}>
              {stat.num}<span className="grad-text">{stat.suffix}</span>
            </p>
            <p className="text-xs text-[#777] tracking-[2px] uppercase mt-2 font-medium">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
