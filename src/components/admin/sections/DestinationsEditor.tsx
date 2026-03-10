import { useSiteContent } from '@/contexts/SiteContentContext';
import AdminField from '../AdminField';

const DestinationsEditor = () => {
  const { content, updateSection } = useSiteContent();
  const destinations = content.destinations;

  const update = (index: number, field: 'name' | 'tag' | 'sub' | 'image', value: string) => {
    const updated = destinations.map((d, i) => i === index ? { ...d, [field]: value } : d);
    updateSection('destinations', updated);
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-playfair text-2xl font-bold text-foreground mb-1">Destinos</h2>
        <p className="text-sm text-muted-foreground">Os 5 cards de destino exibidos na grade de destinos.</p>
      </div>

      <div className="space-y-4">
        {destinations.map((dest, i) => (
          <div key={i} className="bg-muted/20 border border-border rounded-xl p-5 space-y-4">
            <p className="text-xs tracking-[2px] uppercase font-semibold grad-text">
              {i === 0 ? '★ Destaque (card grande)' : `Destino ${i + 1}`}
            </p>

            <AdminField label="Imagem de Fundo" hint="URL da imagem">
              <input
                type="text"
                value={dest.image}
                onChange={e => update(i, 'image', e.target.value)}
                placeholder="https://images.unsplash.com/..."
                className="admin-input"
              />
              {dest.image && (
                <div className="mt-2 rounded-lg overflow-hidden border border-border h-24">
                  <img src={dest.image} alt="Preview" className="w-full h-full object-cover" />
                </div>
              )}
            </AdminField>

            <AdminField label="Nome do Destino">
              <input
                type="text"
                value={dest.name}
                onChange={e => update(i, 'name', e.target.value)}
                className="admin-input"
              />
            </AdminField>
            <div className="grid grid-cols-2 gap-4">
              <AdminField label="Tag / Badge">
                <input
                  type="text"
                  value={dest.tag}
                  onChange={e => update(i, 'tag', e.target.value)}
                  className="admin-input"
                />
              </AdminField>
              <AdminField label="Subtítulo">
                <input
                  type="text"
                  value={dest.sub}
                  onChange={e => update(i, 'sub', e.target.value)}
                  className="admin-input"
                />
              </AdminField>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DestinationsEditor;
