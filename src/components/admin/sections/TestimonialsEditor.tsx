import { useSiteContent } from '@/contexts/SiteContentContext';
import AdminField from '../AdminField';

const TestimonialsEditor = () => {
  const { content, updateSection } = useSiteContent();
  const testimonials = content.testimonials;

  const updateField = (field: 'heading' | 'ratingLabel' | 'ratingCount', value: string) => {
    updateSection('testimonials', { ...testimonials, [field]: value });
  };

  const updateItem = (index: number, field: 'name' | 'date' | 'text', value: string) => {
    const updated = testimonials.items.map((item, i) =>
      i === index ? { ...item, [field]: value } : item
    );
    updateSection('testimonials', { ...testimonials, items: updated });
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-playfair text-2xl font-bold text-foreground mb-1">Avaliações</h2>
        <p className="text-sm text-muted-foreground">Depoimentos de clientes exibidos na seção de avaliações.</p>
      </div>

      <div className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <AdminField label="Label de destaque" hint="Ex: EXCELENTE">
            <input type="text" value={testimonials.ratingLabel} onChange={e => updateField('ratingLabel', e.target.value)} className="admin-input" />
          </AdminField>
          <AdminField label="Contagem de avaliações">
            <input type="text" value={testimonials.ratingCount} onChange={e => updateField('ratingCount', e.target.value)} className="admin-input" />
          </AdminField>
        </div>
      </div>

      <div className="space-y-4">
        {testimonials.items.map((item, i) => (
          <div key={i} className="bg-muted/20 border border-border rounded-xl p-5 space-y-4">
            <p className="text-xs tracking-[2px] uppercase font-semibold grad-text">
              Avaliação {i + 1}
            </p>

            <AdminField label="Depoimento">
              <textarea
                value={item.text}
                onChange={e => updateItem(i, 'text', e.target.value)}
                rows={3}
                className="admin-input resize-none"
              />
            </AdminField>

            <div className="grid grid-cols-2 gap-4">
              <AdminField label="Nome">
                <input type="text" value={item.name} onChange={e => updateItem(i, 'name', e.target.value)} className="admin-input" />
              </AdminField>
              <AdminField label="Data">
                <input type="text" value={item.date} onChange={e => updateItem(i, 'date', e.target.value)} className="admin-input" />
              </AdminField>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsEditor;
