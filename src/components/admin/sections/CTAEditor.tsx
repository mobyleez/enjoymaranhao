import { useSiteContent } from '@/contexts/SiteContentContext';
import AdminField from '../AdminField';

const CTAEditor = () => {
  const { content, updateSection } = useSiteContent();
  const cta = content.cta;

  const update = (field: keyof typeof cta, value: string) => {
    updateSection('cta', { ...cta, [field]: value });
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
            <input
              type="text"
              value={cta.primaryBtn}
              onChange={e => update('primaryBtn', e.target.value)}
              className="admin-input"
            />
          </AdminField>

          <AdminField label="Botão Secundário">
            <input
              type="text"
              value={cta.secondaryBtn}
              onChange={e => update('secondaryBtn', e.target.value)}
              className="admin-input"
            />
          </AdminField>
        </div>
      </div>
    </div>
  );
};

export default CTAEditor;
