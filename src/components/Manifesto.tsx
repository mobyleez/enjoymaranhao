import { useSiteContent } from '@/contexts/SiteContentContext';

const Manifesto = () => {
  const { content } = useSiteContent();
  const { manifesto } = content;

  // Split the quote to highlight the middle part with gradient
  const lines = manifesto.quote.split('\n');

  return (
    <section className="bg-background py-[100px] lg:py-[140px] px-8 lg:px-16 relative overflow-hidden text-center">
      <div className="absolute inset-0 grad-bg-diag opacity-[0.04]" />
      <div className="absolute top-0 left-0 right-0 h-1 grad-bg" />

      <span className="font-playfair text-[120px] leading-[0.6] grad-text-diag block mb-10 opacity-40">"</span>

      <p className="font-playfair font-normal italic leading-[1.3] text-foreground max-w-[900px] mx-auto mb-10 tracking-[-0.5px] reveal" style={{ fontSize: 'clamp(24px, 4vw, 54px)' }}>
        {lines.map((line, i) => (
          <span key={i}>
            {i === 1
              ? line.split('descoberta que acontece').length > 1
                ? (<>{line.split('descoberta que acontece')[0]}<strong className="not-italic font-bold grad-text">descoberta que acontece</strong>{line.split('descoberta que acontece')[1]}</>)
                : <strong className="not-italic font-bold grad-text">{line}</strong>
              : line}
            {i < lines.length - 1 && <br />}
          </span>
        ))}
      </p>

      <div className="w-20 h-[3px] grad-bg rounded-sm mx-auto mb-5" />
      <p className="text-xs tracking-[3px] uppercase text-[rgba(255,255,255,0.3)]">
        {manifesto.authorLine}
      </p>

      <div className="absolute bottom-0 left-0 right-0 h-1 grad-bg" />
    </section>
  );
};

export default Manifesto;
