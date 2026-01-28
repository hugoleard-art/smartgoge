
import React from 'react';
import { MessageCircle, ChevronRight, TrendingUp } from 'lucide-react';

interface HeroProps {
  onCTA: () => void;
  onSecCTA: () => void;
}

const Hero: React.FC<HeroProps> = ({ onCTA, onSecCTA }) => {
  return (
    <section className="relative py-16 md:py-24 px-4 overflow-hidden bg-white">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[500px] h-[500px] bg-orange-100 rounded-full blur-[100px] opacity-50 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="text-center lg:text-left z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-50 text-brand-orange rounded-full text-sm font-bold mb-6 border border-orange-100">
            <TrendingUp size={16} />
            OPORTUNIDADE DE NEGÓCIO EXCLUSIVA
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-zinc-900 leading-tight mb-6">
            Tenha sua própria franquia de móveis planejados com <span className="text-brand-orange underline decoration-zinc-300">alto lucro</span> e gestão simples.
          </h1>
          <p className="text-lg md:text-xl text-zinc-600 mb-8 max-w-2xl">
            Modelo de negócio validado, altamente rentável, com suporte completo e possibilidade de faturamento milionário.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button 
              onClick={onCTA}
              className="bg-brand-orange hover:bg-orange-600 text-white font-bold py-5 px-8 rounded-xl text-lg shadow-xl shadow-orange-500/20 transition-all flex items-center justify-center gap-2"
            >
              <MessageCircle size={20} />
              Quero receber informações no WhatsApp
            </button>
            <button 
              onClick={onSecCTA}
              className="bg-zinc-100 hover:bg-zinc-200 text-zinc-700 font-bold py-5 px-8 rounded-xl text-lg transition-all flex items-center justify-center gap-2"
            >
              Saber mais sobre o modelo
              <ChevronRight size={20} />
            </button>
          </div>
          
          <div className="mt-10 flex items-center justify-center lg:justify-start gap-6 text-zinc-400">
            <div className="flex -space-x-3">
              {[1,2,3,4].map(i => (
                <img key={i} className="w-10 h-10 rounded-full border-2 border-white" src={`https://picsum.photos/seed/${i+10}/100/100`} alt="Franqueado" />
              ))}
            </div>
            <p className="text-sm font-medium"><span className="text-zinc-900 font-bold">+50</span> investidores qualificados</p>
          </div>
        </div>

        <div className="relative group">
          <div className="absolute inset-0 bg-brand-orange rounded-3xl rotate-3 scale-95 opacity-10 group-hover:rotate-6 transition-transform"></div>
          <img 
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1200" 
            alt="Showroom Móveis Planejados" 
            className="rounded-3xl shadow-2xl relative z-10 w-full object-cover aspect-video lg:aspect-square"
          />
          {/* Badge Social Proof */}
          <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl z-20 hidden md:block border border-zinc-100">
            <p className="text-zinc-400 text-xs font-bold uppercase mb-1 tracking-widest">Lucro Estimado</p>
            <p className="text-3xl font-black text-brand-orange">R$ 25.000<span className="text-lg">/mês</span></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
