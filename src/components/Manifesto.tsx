const Manifesto = () => {
  return (
    <section className="bg-background py-[100px] lg:py-[140px] px-8 lg:px-16 relative overflow-hidden text-center">
      <div className="absolute inset-0 grad-bg-diag opacity-[0.04]" />
      <div className="absolute top-0 left-0 right-0 h-1 grad-bg" />

      <span className="font-playfair text-[120px] leading-[0.6] grad-text-diag block mb-10 opacity-40">"</span>

      <p className="font-playfair font-normal italic leading-[1.3] text-foreground max-w-[900px] mx-auto mb-10 tracking-[-0.5px] reveal" style={{ fontSize: 'clamp(24px, 4vw, 54px)' }}>
        O Maranhão não é um destino.<br />
        É uma <strong className="not-italic font-bold grad-text">descoberta que acontece</strong><br />
        uma vez, mas fica para sempre.
      </p>

      <div className="w-20 h-[3px] grad-bg rounded-sm mx-auto mb-5" />
      <p className="text-xs tracking-[3px] uppercase text-[rgba(255,255,255,0.3)]">
        Enjoy Maranhão · Desde 2020
      </p>

      <div className="absolute bottom-0 left-0 right-0 h-1 grad-bg" />
    </section>
  );
};

export default Manifesto;
