import { useSiteContent } from '@/contexts/SiteContentContext';
import AdminField from '../AdminField';
import ImageUpload from '../ImageUpload';

const FooterEditor = () => {
  const { content, updateSection } = useSiteContent();
  const footer = content.footer;

  const update = (field: keyof typeof footer, value: unknown) => {
    updateSection('footer', { ...footer, [field]: value });
  };

  const updateLogo = (index: number, url: string) => {
    const logos = [...(footer.partnerLogos || ['', '', '', ''])];
    logos[index] = url;
    update('partnerLogos', logos);
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-playfair text-2xl font-bold text-foreground mb-1">Rodapé</h2>
        <p className="text-sm text-muted-foreground">Informações de contato e descrição da empresa no rodapé.</p>
      </div>

      <div className="space-y-5">
        <AdminField label="Descrição da Empresa">
          <textarea
            value={footer.description}
            onChange={e => update('description', e.target.value)}
            rows={3}
            className="admin-input resize-none"
          />
        </AdminField>

        {/* Partner Logos */}
        <div>
          <h3 className="text-xs tracking-[2px] uppercase font-semibold text-foreground/80 mb-3">Logos de Parceiros</h3>
          <p className="text-[11px] text-muted-foreground mb-4">4 logos exibidos entre as linhas no topo do rodapé.</p>
          <div className="grid grid-cols-2 gap-4 mb-4">
            {(footer.partnerLogos || ['', '', '', '']).map((logo, i) => (
              <AdminField key={i} label={`Parceiro ${i + 1}`}>
                <ImageUpload value={logo} onChange={url => updateLogo(i, url)} previewHeight="h-16" />
              </AdminField>
            ))}
          </div>
          <AdminField label="Altura dos logos (px)" hint="Ajuste o tamanho dos logos de parceiros">
            <input
              type="number"
              value={footer.partnerLogoSize || 40}
              onChange={e => update('partnerLogoSize', Number(e.target.value))}
              min={20}
              max={120}
              className="admin-input w-32"
            />
          </AdminField>
        </div>

        <div className="space-y-4">
          <p className="text-xs tracking-[2px] uppercase font-semibold text-muted-foreground">Contato</p>
          <AdminField label="E-mail">
            <input
              type="email"
              value={footer.email}
              onChange={e => update('email', e.target.value)}
              className="admin-input"
            />
          </AdminField>
          <div className="grid grid-cols-2 gap-4">
            <AdminField label="Telefone">
              <input
                type="text"
                value={footer.phone}
                onChange={e => update('phone', e.target.value)}
                className="admin-input"
              />
            </AdminField>
            <AdminField label="Endereço">
              <input
                type="text"
                value={footer.address}
                onChange={e => update('address', e.target.value)}
                className="admin-input"
              />
            </AdminField>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <AdminField label="Label WhatsApp">
              <input
                type="text"
                value={footer.whatsapp}
                onChange={e => update('whatsapp', e.target.value)}
                className="admin-input"
              />
            </AdminField>
            <AdminField label="Label Instagram">
              <input
                type="text"
                value={footer.instagram}
                onChange={e => update('instagram', e.target.value)}
                className="admin-input"
              />
            </AdminField>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterEditor;
