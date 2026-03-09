import { useState } from 'react';
import { Eye, EyeOff, Lock } from 'lucide-react';

interface AdminLoginProps {
  onLogin: () => void;
}

const ADMIN_PASSWORD = 'enjoy2024';

const AdminLogin = ({ onLogin }: AdminLoginProps) => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [shaking, setShaking] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      sessionStorage.setItem('admin-auth', 'true');
      onLogin();
    } else {
      setError('Senha incorreta. Tente novamente.');
      setShaking(true);
      setTimeout(() => setShaking(false), 500);
      setPassword('');
    }
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
            Digite a senha para acessar o painel de edição da landing page.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={e => { setPassword(e.target.value); setError(''); }}
                placeholder="••••••••"
                className="w-full h-12 rounded-xl border border-border bg-background px-4 pr-12 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors text-sm"
                autoFocus
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors p-1"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>

            {error && (
              <p className="text-sm text-destructive text-center">{error}</p>
            )}

            <button
              type="submit"
              className="w-full h-12 rounded-xl grad-bg text-white text-sm tracking-[2px] uppercase font-semibold font-dm transition-all duration-300 hover:opacity-90 hover:-translate-y-0.5 shadow-[0_8px_30px_rgba(27,123,180,0.2)]"
            >
              Entrar
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
