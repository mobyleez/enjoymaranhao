import { useSiteContent } from '@/contexts/SiteContentContext';
import AdminField from '../AdminField';
import ImageUpload from '../ImageUpload';

const GalleryEditor = () => {
  const { content, updateSection } = useSiteContent();
  const gallery = content.gallery;

  const update = (index: number, field: 'label' | 'image', value: string) => {
    const updated = gallery.map((item, i) => i === index ? { ...item, [field]: value } : item);
    updateSection('gallery', updated);
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-playfair text-2xl font-bold text-foreground mb-1">Galeria</h2>
        <p className="text-sm text-muted-foreground">Imagens do carrossel horizontal da galeria.</p>
      </div>

      <div className="space-y-4">
        {gallery.map((item, i) => (
          <div key={i} className="bg-muted/20 border border-border rounded-xl p-5 space-y-4">
            <p className="text-xs tracking-[2px] uppercase font-semibold grad-text">
              Imagem {i + 1}
            </p>

            <AdminField label="Imagem">
              <ImageUpload value={item.image} onChange={url => update(i, 'image', url)} previewHeight="h-24" />
            </AdminField>

            <AdminField label="Legenda">
              <input type="text" value={item.label} onChange={e => update(i, 'label', e.target.value)} className="admin-input" />
            </AdminField>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryEditor;
