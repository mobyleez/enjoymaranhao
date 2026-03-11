import { useSiteContent } from '@/contexts/SiteContentContext';
import AdminField from '../AdminField';
import ImageUpload from '../ImageUpload';

const ExperiencesEditor = () => {
  const { content, updateSection } = useSiteContent();
  const experiences = content.experiences;

  const update = (index: number, field: 'icon' | 'title' | 'desc' | 'imageUrl', value: string) => {
    const updated = experiences.map((e, i) => i === index ? { ...e, [field]: value } : e);
    updateSection('experiences', updated);
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-playfair text-2xl font-bold text-foreground mb-1">Experiências</h2>
        <p className="text-sm text-muted-foreground">Os 6 cards de experiências únicas do Maranhão.</p>
      </div>

      <div className="space-y-4">
        {experiences.map((exp, i) => (
          <div key={i} className="bg-muted/20 border border-border rounded-xl p-5 space-y-4">
            <p className="text-xs tracking-[2px] uppercase font-semibold grad-text">Experiência {exp.num}</p>

            <AdminField label="Imagem (opcional)">
              <ImageUpload
                value={exp.imageUrl ?? ''}
                onChange={url => update(i, 'imageUrl', url)}
                previewHeight="h-24"
              />
            </AdminField>

            <div className="grid grid-cols-[80px_1fr] gap-4">
              <AdminField label="Ícone (emoji)">
                <input
                  type="text"
                  value={exp.icon}
                  onChange={e => update(i, 'icon', e.target.value)}
                  className="admin-input text-center text-2xl"
                />
              </AdminField>
              <AdminField label="Título">
                <input
                  type="text"
                  value={exp.title}
                  onChange={e => update(i, 'title', e.target.value)}
                  className="admin-input"
                />
              </AdminField>
            </div>
            <AdminField label="Descrição">
              <textarea
                value={exp.desc}
                onChange={e => update(i, 'desc', e.target.value)}
                rows={3}
                className="admin-input resize-none"
              />
            </AdminField>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperiencesEditor;
