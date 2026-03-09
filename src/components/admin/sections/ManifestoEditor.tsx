import { useSiteContent } from '@/contexts/SiteContentContext';
import AdminField from '../AdminField';

const ManifestoEditor = () => {
  const { content, updateSection } = useSiteContent();
  const manifesto = content.manifesto;

  const update = (field: keyof typeof manifesto, value: string) => {
    updateSection('manifesto', { ...manifesto, [field]: value });
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-playfair text-2xl font-bold text-foreground mb-1">Manifesto</h2>
        <p className="text-sm text-muted-foreground">A citação central em destaque entre as seções.</p>
      </div>

      <div className="space-y-5">
        <AdminField label="Citação" hint="Use \n para quebras de linha">
          <textarea
            value={manifesto.quote}
            onChange={e => update('quote', e.target.value)}
            rows={5}
            className="admin-input resize-none"
          />
        </AdminField>

        <AdminField label="Linha do Autor">
          <input
            type="text"
            value={manifesto.authorLine}
            onChange={e => update('authorLine', e.target.value)}
            className="admin-input"
          />
        </AdminField>

        <div className="bg-muted/20 border border-border rounded-xl p-5">
          <p className="text-xs tracking-[2px] uppercase text-muted-foreground mb-3">Pré-visualização</p>
          <p className="font-playfair italic text-foreground/70 text-sm leading-relaxed whitespace-pre-line">
            "{manifesto.quote}"
          </p>
          <p className="text-xs text-muted-foreground mt-3 tracking-[2px] uppercase">{manifesto.authorLine}</p>
        </div>
      </div>
    </div>
  );
};

export default ManifestoEditor;
