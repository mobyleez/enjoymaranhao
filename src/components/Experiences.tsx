const experiences = [
  { icon: '🏜️', num: '01', title: 'Trekking nas Dunas', desc: 'Percorra a pé as dunas brancas dos Lençóis Maranhenses ao pôr do sol. Um espetáculo que muda para sempre a sua percepção de beleza natural.' },
  { icon: '🥁', num: '02', title: 'Bumba Meu Boi', desc: 'Mergulhe no maior festival folclórico do Brasil. Cores, ritmos e histórias que revelam a alma mais profunda do povo maranhense.' },
  { icon: '🍽️', num: '03', title: 'Gastronomia Local', desc: 'Do arroz de cuxá ao torresmo de tambaqui, a culinária maranhense é um patrimônio vivo. Prove sabores que só existem aqui.' },
  { icon: '🛶', num: '04', title: 'Passeio de Lancha', desc: 'Navegue pelo rio Preguiças entre manguezais, restingas e comunidades quilombolas. Uma jornada ao coração mais genuíno do Maranhão.' },
  { icon: '🏛️', num: '05', title: 'Centro Histórico', desc: 'Caminhe pelos azulejos portugueses de São Luís, Patrimônio da Humanidade pela UNESCO. Arquitetura colonial que respira história em cada esquina.' },
  { icon: '🌅', num: '06', title: 'Pôr do Sol na Lagoa', desc: 'As lagoas dos Lençóis refletem o céu em cores impossíveis no entardecer. O momento mais fotográfico do Maranhão é também o mais contemplativo.' },
];

const Experiences = () => {
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
        {experiences.map((exp, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl lg:rounded-[20px] p-6 lg:p-10 relative overflow-hidden transition-all duration-400 shadow-[0_4px_24px_rgba(0,0,0,0.06)] hover:-translate-y-2 hover:shadow-[0_24px_60px_rgba(0,0,0,0.12)] group reveal"
            style={{ transitionDelay: `${i * 0.08}s` }}
          >
            <div className="absolute top-0 left-0 right-0 h-1 grad-bg scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100" />
            <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-xl lg:rounded-[14px] grad-bg-diag flex items-center justify-center text-xl lg:text-2xl mb-4 lg:mb-6">
              {exp.icon}
            </div>
            <span className="font-playfair text-[12px] lg:text-[13px] font-bold grad-text block mb-2 lg:mb-3">{exp.num}</span>
            <h3 className="font-playfair text-lg lg:text-[22px] font-bold text-secondary-foreground mb-2 lg:mb-3 leading-[1.25]">{exp.title}</h3>
            <p className="text-sm text-[#666] leading-[1.7] lg:leading-[1.8] font-light">{exp.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experiences;
