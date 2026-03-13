import { useState, useEffect } from 'react';
import { ExternalLink, RotateCcw, Save, LayoutDashboard, Image, BarChart3, MapPin, Sparkles, BookOpen, Package, Megaphone, Footprints, LogOut, Images, MessageSquareQuote } from 'lucide-react';
import AdminLogin from '@/components/admin/AdminLogin';
import HeroEditor from '@/components/admin/sections/HeroEditor';
import StatsEditor from '@/components/admin/sections/StatsEditor';
import DestinationsEditor from '@/components/admin/sections/DestinationsEditor';
import ExperiencesEditor from '@/components/admin/sections/ExperiencesEditor';
import ManifestoEditor from '@/components/admin/sections/ManifestoEditor';
import PackagesEditor from '@/components/admin/sections/PackagesEditor';
import CTAEditor from '@/components/admin/sections/CTAEditor';
import FooterEditor from '@/components/admin/sections/FooterEditor';
import GalleryEditor from '@/components/admin/sections/GalleryEditor';
import TestimonialsEditor from '@/components/admin/sections/TestimonialsEditor';
import { useSiteContent } from '@/contexts/SiteContentContext';
import { toast } from '@/hooks/use-toast';
import { Toaster } from '@/components/ui/toaster';
import { supabase } from '@/integrations/supabase/client';

const sections = [
  { id: 'hero', label: 'Hero', icon: Image, desc: 'Título e CTA principal' },
  { id: 'stats', label: 'Estatísticas', icon: BarChart3, desc: '4 números de destaque' },
  { id: 'destinations', label: 'Destinos', icon: MapPin, desc: '5 cards de destinos' },
  { id: 'gallery', label: 'Galeria', icon: Images, desc: '6 imagens do carrossel' },
  { id: 'experiences', label: 'Experiências', icon: Sparkles, desc: '6 cards de experiências' },
  { id: 'manifesto', label: 'Manifesto', icon: BookOpen, desc: 'Citação em destaque' },
  { id: 'packages', label: 'Pacotes', icon: Package, desc: '3 pacotes de viagem' },
  { id: 'cta', label: 'Seção CTA', icon: Megaphone, desc: 'Chamada para ação' },
  { id: 'footer', label: 'Rodapé', icon: Footprints, desc: 'Contato e empresa' },
];

const sectionComponents: Record<string, React.ReactNode> = {
  hero: <HeroEditor />,
  stats: <StatsEditor />,
  destinations: <DestinationsEditor />,
  gallery: <GalleryEditor />,
  experiences: <ExperiencesEditor />,
  manifesto: <ManifestoEditor />,
  packages: <PackagesEditor />,
  cta: <CTAEditor />,
  footer: <FooterEditor />,
};

const AdminPage = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [checkingAuth, setCheckingAuth] = useState(true);
  const [activeSection, setActiveSection] = useState('hero');
  const [isSaving, setIsSaving] = useState(false);
  const { content, resetToDefaults, saveToSupabase } = useSiteContent();

  useEffect(() => {
    document.title = 'Admin — Enjoy Maranhão';

    // Check if already logged in with admin role
    const checkSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session?.user) {
        const { data: roles } = await supabase
          .from('user_roles')
          .select('role')
          .eq('user_id', session.user.id)
          .eq('role', 'admin');
        if (roles && roles.length > 0) {
          setIsAuthenticated(true);
        }
      }
      setCheckingAuth(false);
    };

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!session) {
        setIsAuthenticated(false);
      }
    });

    checkSession();
    return () => subscription.unsubscribe();
  }, []);

  const handleLogin = () => setIsAuthenticated(true);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setIsAuthenticated(false);
  };

  const handleSave = async () => {
    setIsSaving(true);
    try {
      await saveToSupabase();
      toast({
        title: 'Alterações salvas!',
        description: 'As mudanças já estão visíveis na landing page.',
      });
    } catch {
      toast({
        title: 'Erro ao salvar',
        description: 'Não foi possível salvar as alterações. Tente novamente.',
        variant: 'destructive',
      });
    }
    setIsSaving(false);
  };

  const handleReset = () => {
    if (confirm('Tem certeza? Todas as alterações serão perdidas e os conteúdos voltarão ao padrão.')) {
      resetToDefaults();
      toast({
        title: 'Conteúdo resetado',
        description: 'Todos os valores foram restaurados para o padrão.',
      });
    }
  };

  if (checkingAuth) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-muted-foreground text-sm">Verificando autenticação...</div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <AdminLogin onLogin={handleLogin} />;
  }

  const activeData = sections.find(s => s.id === activeSection);

  return (
    <div className="min-h-screen bg-background flex" style={{ fontFamily: 'DM Sans, sans-serif' }}>
      <Toaster />

      {/* Sidebar */}
      <aside className="w-[260px] flex-shrink-0 border-r border-border flex flex-col sticky top-0 h-screen overflow-y-auto">
        {/* Logo */}
        <div className="p-6 border-b border-border">
          <p className="font-playfair text-lg font-bold tracking-wider mb-0.5">
            <span className="grad-text">ENJOY</span>
            <span className="text-foreground ml-1.5">MARANHÃO</span>
          </p>
          <p className="text-[10px] tracking-[2px] uppercase text-muted-foreground">Painel Admin</p>
        </div>

        {/* Dashboard pill */}
        <div className="px-4 pt-4">
          <div className="flex items-center gap-2.5 px-3 py-2 rounded-lg bg-muted/30 text-muted-foreground text-xs">
            <LayoutDashboard className="w-4 h-4 flex-shrink-0" />
            <span className="font-medium">Landing Page CMS</span>
          </div>
        </div>

        {/* Nav */}
        <nav className="flex-1 px-4 py-4 space-y-1">
          {sections.map(section => {
            const Icon = section.icon;
            const isActive = activeSection === section.id;
            return (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`w-full flex items-center gap-3 px-3 py-3 rounded-xl text-left transition-all duration-200 group ${
                  isActive
                    ? 'grad-bg text-white shadow-[0_4px_20px_rgba(27,123,180,0.2)]'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted/40'
                }`}
              >
                <Icon className="w-4 h-4 flex-shrink-0" />
                <div className="min-w-0">
                  <p className="text-xs font-semibold leading-none mb-0.5">{section.label}</p>
                  <p className={`text-[10px] leading-none truncate ${isActive ? 'text-white/70' : 'text-muted-foreground'}`}>
                    {section.desc}
                  </p>
                </div>
              </button>
            );
          })}
        </nav>

        {/* Bottom actions */}
        <div className="p-4 border-t border-border space-y-2">
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl border border-border text-xs font-medium text-muted-foreground hover:text-foreground hover:border-foreground/20 transition-all duration-200"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            Ver Site
          </a>
          <button
            onClick={handleLogout}
            className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl border border-border text-xs font-medium text-muted-foreground hover:text-destructive hover:border-destructive/30 transition-all duration-200"
          >
            <LogOut className="w-3.5 h-3.5" />
            Sair
          </button>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Topbar */}
        <header className="sticky top-0 z-10 bg-background/80 backdrop-blur-md border-b border-border px-8 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-sm font-semibold text-foreground">{activeData?.label}</h1>
            <p className="text-xs text-muted-foreground">{activeData?.desc}</p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={handleReset}
              className="flex items-center gap-2 py-2 px-4 rounded-xl border border-border text-xs font-medium text-muted-foreground hover:text-destructive hover:border-destructive/30 transition-all duration-200"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Reset geral
            </button>
            <button
              onClick={handleSave}
              disabled={isSaving}
              className="flex items-center gap-2 py-2 px-5 rounded-xl grad-bg text-white text-xs font-semibold tracking-[1px] uppercase transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5 disabled:opacity-60 shadow-[0_4px_16px_rgba(27,123,180,0.25)]"
            >
              <Save className="w-3.5 h-3.5" />
              {isSaving ? 'Salvando...' : 'Salvar'}
            </button>
          </div>
        </header>

        {/* Editor area */}
        <main className="flex-1 p-8 max-w-3xl">
          {sectionComponents[activeSection]}
        </main>
      </div>

      {/* Admin input global styles */}
      <style>{`
        .admin-input {
          width: 100%;
          background: hsl(var(--background));
          border: 1px solid hsl(var(--border));
          border-radius: 10px;
          padding: 10px 14px;
          color: hsl(var(--foreground));
          font-size: 14px;
          font-family: DM Sans, sans-serif;
          line-height: 1.5;
          transition: border-color 0.2s;
          outline: none;
        }
        .admin-input:focus {
          border-color: hsl(var(--primary));
        }
        .admin-input::placeholder {
          color: hsl(var(--muted-foreground));
        }
      `}</style>
    </div>
  );
};

export default AdminPage;
