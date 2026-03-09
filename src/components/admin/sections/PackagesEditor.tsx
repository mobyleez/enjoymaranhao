import { useState } from 'react';
import { useSiteContent, PackageData } from '@/contexts/SiteContentContext';
import AdminField from '../AdminField';

const PackagesEditor = () => {
  const { content, updateSection } = useSiteContent();
  const packages = content.packages;
  const [activeTab, setActiveTab] = useState(0);

  const updatePkg = (index: number, field: keyof PackageData, value: string | boolean) => {
    const updated = packages.map((p, i) => i === index ? { ...p, [field]: value } : p);
    updateSection('packages', updated);
  };

  const updatePkgItem = (pkgIndex: number, itemIndex: number, value: string) => {
    const updated = packages.map((p, i) => {
      if (i !== pkgIndex) return p;
      return {
        ...p,
        items: p.items.map((item, j) => j === itemIndex ? { ...item, text: value } : item),
      };
    });
    updateSection('packages', updated);
  };

  const pkg = packages[activeTab];
  const isFeatured = pkg?.type === 'featured';

  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-playfair text-2xl font-bold text-foreground mb-1">Pacotes</h2>
        <p className="text-sm text-muted-foreground">Os 3 pacotes de viagem exibidos na seção de preços.</p>
      </div>

      {/* Tabs */}
      <div className="flex gap-2">
        {packages.map((p, i) => (
          <button
            key={i}
            onClick={() => setActiveTab(i)}
            className={`flex-1 py-2.5 px-3 rounded-xl text-xs font-semibold tracking-[1px] uppercase transition-all duration-200 ${
              activeTab === i
                ? 'grad-bg text-white shadow-[0_4px_16px_rgba(27,123,180,0.2)]'
                : 'bg-muted/30 border border-border text-muted-foreground hover:text-foreground'
            }`}
          >
            {p.type === 'featured' ? '★ Destaque' : `Pacote ${i + 1}`}
          </button>
        ))}
      </div>

      {pkg && (
        <div className="space-y-5">
          {isFeatured && (
            <AdminField label="Badge" hint="Texto do badge destacado">
              <input
                type="text"
                value={pkg.badge ?? ''}
                onChange={e => updatePkg(activeTab, 'badge', e.target.value)}
                className="admin-input"
              />
            </AdminField>
          )}

          <AdminField label="Nome do Pacote" hint="Use \n para quebra de linha">
            <textarea
              value={pkg.name}
              onChange={e => updatePkg(activeTab, 'name', e.target.value)}
              rows={2}
              className="admin-input resize-none"
            />
          </AdminField>

          <AdminField label="Subtítulo">
            <textarea
              value={pkg.subtitle}
              onChange={e => updatePkg(activeTab, 'subtitle', e.target.value)}
              rows={2}
              className="admin-input resize-none"
            />
          </AdminField>

          <div className="grid grid-cols-2 gap-4">
            <AdminField label="Label do Preço" hint="Ex: 'A partir de', 'Consulte'">
              <input
                type="text"
                value={pkg.priceLabel}
                onChange={e => updatePkg(activeTab, 'priceLabel', e.target.value)}
                className="admin-input"
              />
            </AdminField>
            <AdminField label="Preço">
              <input
                type="text"
                value={pkg.price}
                onChange={e => updatePkg(activeTab, 'price', e.target.value)}
                className="admin-input"
              />
            </AdminField>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <AdminField label="Sufixo do Preço" hint="Ex: /pax">
              <input
                type="text"
                value={pkg.priceSuffix}
                onChange={e => updatePkg(activeTab, 'priceSuffix', e.target.value)}
                className="admin-input"
              />
            </AdminField>
            <AdminField label="Texto do Botão">
              <input
                type="text"
                value={pkg.btnText}
                onChange={e => updatePkg(activeTab, 'btnText', e.target.value)}
                className="admin-input"
              />
            </AdminField>
          </div>

          <div>
            <p className="text-xs tracking-[2px] uppercase font-semibold text-muted-foreground mb-3">Itens Incluídos</p>
            <div className="space-y-2">
              {pkg.items.map((item, j) => (
                <div key={j} className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full flex-shrink-0 border-2" style={{ borderColor: item.color, backgroundColor: item.color + '33' }} />
                  <input
                    type="text"
                    value={item.text}
                    onChange={e => updatePkgItem(activeTab, j, e.target.value)}
                    className="admin-input flex-1"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PackagesEditor;
