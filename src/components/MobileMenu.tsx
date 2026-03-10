import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet';

const MobileMenu = () => {
  const [open, setOpen] = useState(false);

  const navItems = ['Destinos', 'Experiências', 'Pacotes', 'Contato'];

  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button
          className="lg:hidden flex items-center justify-center w-11 h-11 rounded-full border border-[rgba(255,255,255,0.2)] transition-colors hover:border-[rgba(255,255,255,0.4)]"
          aria-label="Abrir menu"
        >
          <Menu className="w-5 h-5 text-foreground" />
        </button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="w-[85vw] max-w-[320px] bg-background border-l border-[rgba(255,255,255,0.1)] p-0"
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-[rgba(255,255,255,0.06)]">
            <div className="font-playfair text-lg font-bold tracking-wider">
              <span className="grad-text">ENJOY</span>
              <span className="text-foreground ml-1">MARANHÃO</span>
            </div>
            <SheetClose asChild>
              <button
                className="flex items-center justify-center w-10 h-10 rounded-full border border-[rgba(255,255,255,0.2)] transition-colors hover:border-[rgba(255,255,255,0.4)]"
                aria-label="Fechar menu"
              >
                <X className="w-5 h-5 text-foreground" />
              </button>
            </SheetClose>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 py-8 px-6">
            <ul className="flex flex-col gap-2">
              {navItems.map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')}`}
                    onClick={handleLinkClick}
                    className="flex items-center h-14 px-4 rounded-xl text-base tracking-[1px] uppercase text-[rgba(255,255,255,0.7)] no-underline transition-all duration-200 font-medium hover:text-white hover:bg-[rgba(255,255,255,0.05)]"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA Button */}
          <div className="p-6 border-t border-[rgba(255,255,255,0.06)]">
            <a
              href="/admin"
              onClick={handleLinkClick}
              className="flex items-center justify-center w-full h-12 mb-3 rounded-full border border-[rgba(255,255,255,0.2)] text-[rgba(255,255,255,0.75)] text-xs tracking-[2px] uppercase font-semibold no-underline font-dm transition-all duration-300 hover:text-white hover:border-[rgba(255,255,255,0.4)]"
            >
              Área Admin
            </a>
            <a
              href="#contato"
              onClick={handleLinkClick}
              className="flex items-center justify-center w-full h-14 rounded-full grad-bg text-white text-sm tracking-[2px] uppercase font-semibold no-underline font-dm transition-all duration-300 hover:shadow-[0_8px_30px_rgba(27,123,180,0.3)]"
            >
              Planejar Viagem
            </a>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
