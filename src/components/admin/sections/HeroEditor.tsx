import { useSiteContent } from '@/contexts/SiteContentContext';
import AdminField from '../AdminField';
import ImageUpload from '../ImageUpload';

const HeroEditor = () => {
  const { content, updateSection, updateContent } = useSiteContent();
  const hero = content.hero;

  const update = (field: keyof typeof hero, value: string) => {
    updateSection('hero', { ...hero, [field]: value });
  };

  const updateLogo = (url: string) => {
    updateContent({ ...content, logoUrl: url });
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-playfair text-2xl font-bold text-foreground mb-1">Hero</h2>
        <p className="text-sm text-muted-foreground">Primeira seção visível da landing page.</p>
      </div>

      <div className="space-y-5">
        <AdminField label="Logo do Site" hint="Aparece no header e no rodapé. Deixe vazio para usar o texto padrão.">
          <ImageUpload value={content.logoUrl ?? ''} onChange={updateLogo} previewHeight="h-16" />
        </AdminField>

        <AdminField label="Imagem de Fundo">
          <ImageUpload value={hero.bgImage} onChange={url => update('bgImage', url)} />
        </AdminField>

        <AdminField label="Tag Line" hint="Texto pequeno acima do título">
          <input type="text" value={hero.tag} onChange={e => update('tag', e.target.value)} className="admin-input" />
        </AdminField>

        <AdminField label="Título Principal" hint="Frase de impacto principal">
          <textarea value={hero.title} onChange={e => update('title', e.target.value)} rows={3} className="admin-input resize-none" />
        </AdminField>

        <AdminField label="Subtítulo" hint="Texto descritivo abaixo do título">
          <textarea value={hero.subtitle} onChange={e => update('subtitle', e.target.value)} rows={3} className="admin-input resize-none" />
        </AdminField>

        <AdminField label="Texto do Botão CTA">
          <input type="text" value={hero.ctaText} onChange={e => update('ctaText', e.target.value)} className="admin-input" />
        </AdminField>
      </div>
    </div>
  );
};

export default HeroEditor;
