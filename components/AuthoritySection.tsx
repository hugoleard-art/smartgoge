
import React from 'react';
import { Star, ShieldCheck, Award } from 'lucide-react';

const AuthoritySection: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-zinc-50 border-y border-zinc-100">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="w-full md:w-1/2 relative">
          <div className="absolute -inset-4 bg-brand-orange opacity-10 rounded-3xl -rotate-2"></div>
          <img 
            src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800" 
            alt="Fundador Smart System" 
            className="rounded-3xl shadow-2xl relative z-10 aspect-[4/5] object-cover"
          />
          <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl z-20 border border-zinc-100">
            <div className="flex text-yellow-400 mb-2">
              {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="currentColor" />)}
            </div>
            <p className="font-bold text-zinc-900">Expertise de 21 Anos</p>
          </div>
        </div>

        <div className="w-full md:w-1/2">
          <p className="text-brand-orange font-bold uppercase tracking-widest mb-4">Liderança & Visão</p>
          <h2 className="text-3xl md:text-5xl font-black text-zinc-900 mb-6 leading-tight">
            Fundador com mais de 21 anos de experiência no mercado
          </h2>
          
          <div className="space-y-6">
            <p className="text-zinc-600 text-lg leading-relaxed">
              O Processo Smart System não nasceu do dia para a noite. Foram 7 anos de desenvolvimento contínuo e 16 anos liderando equipes de alta performance.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 bg-white rounded-2xl border border-zinc-100 flex gap-4 items-center">
                <div className="text-brand-orange"><Award size={32} /></div>
                <div>
                  <p className="font-black text-2xl">21+</p>
                  <p className="text-xs text-zinc-500 font-bold uppercase">Anos de Mercado</p>
                </div>
              </div>
              <div className="p-5 bg-white rounded-2xl border border-zinc-100 flex gap-4 items-center">
                <div className="text-brand-orange"><ShieldCheck size={32} /></div>
                <div>
                  <p className="font-black text-2xl">100%</p>
                  <p className="text-xs text-zinc-500 font-bold uppercase">Comprometimento</p>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-zinc-200">
              <p className="text-zinc-900 font-bold text-xl mb-4 italic">
                "Nossa visão é clara: levar o Processo Smart System para cada canto do país e expandir nossa presença internacional através de parceiros estratégicos."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthoritySection;
