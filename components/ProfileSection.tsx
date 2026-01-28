
import React from 'react';
import { UserCheck, ShieldCheck, Heart, FastForward, CheckCircle } from 'lucide-react';

const ProfileSection: React.FC = () => {
  const profiles = [
    { icon: <ShieldCheck />, text: "Pessoas que buscam empreender com total segurança" },
    { icon: <UserCheck />, text: "Investidores que desejam um negócio estruturado e validado" },
    { icon: <Heart />, text: "Ideal para quem busca independência financeira e qualidade de vida" },
    { icon: <FastForward />, text: "Não é necessário ter experiência prévia no segmento moveleiro" }
  ];

  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="bg-zinc-50 rounded-[40px] p-8 md:p-16 border border-zinc-100 shadow-2xl shadow-zinc-200/50">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-12">
            Perfil Ideal do Franqueado
          </h2>
          
          <div className="space-y-6">
            {profiles.map((p, i) => (
              <div key={i} className="flex items-start gap-5 p-6 bg-white rounded-2xl shadow-sm border border-zinc-100 hover:border-brand-orange/30 transition-colors">
                <div className="w-12 h-12 flex-shrink-0 bg-orange-50 text-brand-orange flex items-center justify-center rounded-xl">
                  {/* Fixed: Cast to React.ReactElement<any> to allow the 'size' prop on cloned Lucide icons */}
                  {React.cloneElement(p.icon as React.ReactElement<any>, { size: 24 })}
                </div>
                <p className="text-xl font-semibold text-zinc-700 py-2">{p.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center bg-zinc-900 text-white p-8 rounded-3xl">
            <p className="text-brand-orange font-bold text-lg mb-2">Atenção!</p>
            <p className="text-zinc-300">Buscamos investidores comprometidos com a excelência e que desejam crescer junto com uma marca que está revolucionando o mercado nacional.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
