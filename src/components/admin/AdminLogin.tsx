import { useState } from 'react';
import { Eye, EyeOff, Lock } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

interface AdminLoginProps {
  onLogin: () => void;
}

const AdminLogin = ({ onLogin }: AdminLoginProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [shaking, setShaking] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const { data, error: authError } = await supabase.auth.signInWithPassword({ email, password });

    if (authError || !data.user) {
      setError('E-mail ou senha incorretos.');
      setShaking(true);
      setTimeout(() => setShaking(false), 500);
      setLoading(false);
      return;
    }

    // Check admin role
    const { data: roles } = await supabase
      .from('user_roles')
      .select('role')
      .eq('user_id', data.user.id)
      .eq('role', 'admin');

    if (!roles || roles.length === 0) {
      setError('Você não tem permissão de administrador.');
      await supabase.auth.signOut();
      setShaking(true);
      setTimeout(() => setShaking(false), 500);
      setLoading(false);
      return;
    }

    onLogin();
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-5">
      <div className="absolute inset-0" style={{
        backgroundImage: 'radial-gradient(circle at 20% 80%, rgba(26,120,117,0.12) 0%, transparent 40%), radial-gradient(circle at 80% 20%, rgba(27,123,180,0.1) 0%, transparent 40%)'
      }} />

      <div className={`relative z-10 w-full max-w-[400px] ${shaking ? 'animate-[shake_0.5s_ease]' : ''}`}>
        {/* Logo */}
        <div className="text-center mb-10">
          <p className="font-playfair text-2xl font-bold tracking-wider mb-1">
            <span className="grad-text">ENJOY</span>
            <span className="text-foreground ml-2">MARANHÃO</span>
          </p>
          <p className="text-[10px] tracking-[3px] uppercase text-muted-foreground">Painel Administrativo</p>
        </div>

        <div className="bg-muted/30 border border-border rounded-2xl p-8 backdrop-blur-sm">
          <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-muted border border-border mx-auto mb-6">
            <Lock className="w-6 h-6 text-muted-foreground" />
          </div>

          <h1 className="font-playfair text-2xl font-bold text-center text-foreground mb-2">Acesso Restrito</h1>
          <p className="text-sm text-muted-foreground text-center mb-8 leading-relaxed">
            Faça login com suas credenciais de administrador.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-xs tracking-[1px] uppercase text-foreground/70 font-semibold mb-1.5 block">E-mail</label>
              <input
                type="email"
                value={email}
                onChange={e => { setEmail(e.target.value); setError(''); }}
                placeholder="admin@enjoymaranhao.com.br"
                className="w-full h-12 rounded-xl border border-border bg-background px-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors text-sm"
                autoFocus
              />
            </div>

            <div className="relative">
              <label className="text-xs tracking-[1px] uppercase text-foreground/70 font-semibold mb-1.5 block">Senha</label>
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={e => { setPassword(e.target.value); setError(''); }}
                placeholder="••••••••"
                className="w-full h-12 rounded-xl border border-border bg-background px-4 pr-12 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors text-sm"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 bottom-3 text-muted-foreground hover:text-foreground transition-colors p-1"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>

            {error && (
              <p className="text-sm text-destructive text-center">{error}</p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full h-12 rounded-xl grad-bg text-white text-sm tracking-[2px] uppercase font-semibold font-dm transition-all duration-300 hover:opacity-90 hover:-translate-y-0.5 shadow-[0_8px_30px_rgba(27,123,180,0.2)] disabled:opacity-60"
            >
              {loading ? 'Entrando...' : 'Entrar'}
            </button>
          </form>
        </div>

        <p className="text-center text-xs text-muted-foreground mt-6">
          <a href="/" className="hover:text-foreground transition-colors">← Voltar ao site</a>
        </p>
      </div>

      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          20% { transform: translateX(-8px); }
          40% { transform: translateX(8px); }
          60% { transform: translateX(-6px); }
          80% { transform: translateX(6px); }
        }
      `}</style>
    </div>
  );
};

export default AdminLogin;
