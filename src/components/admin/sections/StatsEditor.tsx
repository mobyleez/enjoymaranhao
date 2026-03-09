import { useSiteContent } from '@/contexts/SiteContentContext';
import AdminField from '../AdminField';

const StatsEditor = () => {
  const { content, updateSection } = useSiteContent();
  const stats = content.stats;

  const updateStat = (index: number, field: 'num' | 'suffix' | 'label', value: string) => {
    const updated = stats.map((s, i) => i === index ? { ...s, [field]: value } : s);
    updateSection('stats', updated);
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-playfair text-2xl font-bold text-foreground mb-1">Estatísticas</h2>
        <p className="text-sm text-muted-foreground">Os 4 números de destaque exibidos na faixa de stats.</p>
      </div>

      <div className="space-y-4">
        {stats.map((stat, i) => (
          <div key={i} className="bg-muted/20 border border-border rounded-xl p-5 space-y-4">
            <p className="text-xs tracking-[2px] uppercase font-semibold grad-text">Stat {i + 1}</p>
            <div className="grid grid-cols-2 gap-4">
              <AdminField label="Número">
                <input
                  type="text"
                  value={stat.num}
                  onChange={e => updateStat(i, 'num', e.target.value)}
                  className="admin-input"
                />
              </AdminField>
              <AdminField label="Sufixo" hint="Ex: +, %, ★">
                <input
                  type="text"
                  value={stat.suffix}
                  onChange={e => updateStat(i, 'suffix', e.target.value)}
                  className="admin-input"
                />
              </AdminField>
            </div>
            <AdminField label="Rótulo">
              <input
                type="text"
                value={stat.label}
                onChange={e => updateStat(i, 'label', e.target.value)}
                className="admin-input"
              />
            </AdminField>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsEditor;
