import { useSiteContent } from '@/contexts/SiteContentContext';
import AdminField from '../AdminField';
import ImageUpload from '../ImageUpload';

const CTAEditor = () => {
  const { content, updateSection } = useSiteContent();
  const cta = content.cta;

  const update = (field: keyof typeof cta, value: string | string[]) => {
    updateSection('cta', { ...cta, [field]: value });
  };

  const updateLogo = (index: number, url: string) => {
    const logos = [...(cta.partnerLogos || ['', '', '', ''])];
    logos[index] = url;
    update('partnerLogos', logos);
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-playfair text-2xl font-bold text-foreground mb-1">Seção CTA</h2>
        <p className="text-sm text-muted-foreground">A seção de chamada para ação antes do rodapé.</p>
      </div>

      <div className="space-y-5">
        <AdminField label="Título" hint="Suporta quebras de linha naturais">
          <textarea
            value={cta.title}
            onChange={e => update('title', e.target.value)}
            rows={3}
            className="admin-input resize-none"
          />
        </AdminField>

        <AdminField label="Descrição">
          <textarea
            value={cta.description}
            onChange={e => update('description', e.target.value)}
            rows={3}
            className="admin-input resize-none"
          />
        </AdminField>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <AdminField label="Botão Principal (gradiente)">
            <input type="text" value={cta.primaryBtn} onChange={e => update('primaryBtn', e.target.value)} className="admin-input" />
          </AdminField>
          <AdminField label="Botão Secundário">
            <input type="text" value={cta.secondaryBtn} onChange={e => update('secondaryBtn', e.target.value)} className="admin-input" />
          </AdminField>
        </div>

        <AdminField label="Número do WhatsApp" hint="Formato internacional, ex: 5598999990000">
          <input type="text" value={cta.whatsappNumber} onChange={e => update('whatsappNumber', e.target.value)} placeholder="5598999990000" className="admin-input" />
        </AdminField>

        <div>
          <h3 className="text-xs tracking-[2px] uppercase font-semibold text-foreground/80 mb-3">Logos de Parceiros</h3>
          <p className="text-[11px] text-muted-foreground mb-4">4 logos exibidos abaixo da linha na seção de contato.</p>
          <div className="grid grid-cols-2 gap-4">
            {(cta.partnerLogos || ['', '', '', '']).map((logo, i) => (
              <AdminField key={i} label={`Parceiro ${i + 1}`}>
                <ImageUpload value={logo} onChange={url => updateLogo(i, url)} previewHeight="h-16" />
              </AdminField>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTAEditor;
