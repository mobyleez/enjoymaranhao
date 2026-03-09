import { useSiteContent } from '@/contexts/SiteContentContext';
import AdminField from '../AdminField';

const FooterEditor = () => {
  const { content, updateSection } = useSiteContent();
  const footer = content.footer;

  const update = (field: keyof typeof footer, value: string) => {
    updateSection('footer', { ...footer, [field]: value });
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
