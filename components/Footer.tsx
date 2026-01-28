
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-4 bg-zinc-50 border-t border-zinc-100">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
          <img 
            src="https://raw.githubusercontent.com/ai-gen-images/smart-system/main/logo.png" 
            alt="Smart System Garabetti" 
            className="h-12 mb-4 opacity-70 grayscale hover:grayscale-0 transition-all cursor-pointer"
            onError={(e) => {
              (e.target as HTMLImageElement).src = "https://picsum.photos/seed/smartsystem/200/60";
            }}
          />
          <p className="text-zinc-400 text-sm">© 2024 Smart System Garabetti. Todos os direitos reservados.</p>
        </div>

        <div className="flex gap-8">
          <a href="#" className="text-zinc-500 hover:text-brand-orange text-sm font-medium transition-colors">Termos de Uso</a>
          <a href="#" className="text-zinc-500 hover:text-brand-orange text-sm font-medium transition-colors">Privacidade</a>
          <a href="#" className="text-zinc-500 hover:text-brand-orange text-sm font-medium transition-colors">Contato</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
