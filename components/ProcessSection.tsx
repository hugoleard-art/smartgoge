
import React from 'react';

const ProcessSection: React.FC = () => {
  const steps = [
    {
      letter: "A",
      title: "Sistema Inovador",
      desc: "Modelo único de franquia que rompe com as barreiras tradicionais do setor moveleiro."
    },
    {
      letter: "B",
      title: "Sistema Americano de Compra",
      desc: "Objetividade, praticidade e valor. Simples e eficiente como as melhores operações globais."
    },
    {
      letter: "C",
      title: "Sistema Inteligente",
      desc: "Uso estratégico de dados e ferramentas para garantir uma operação revolucionária e eficaz."
    },
    {
      letter: "D",
      title: "Vantagem do Cliente",
      desc: "O cliente final ganha cerca de 20% em vantagens reais, tornando a venda muito mais fácil."
    }
  ];

  return (
    <section className="py-24 px-4 bg-zinc-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-brand-orange font-bold uppercase tracking-widest mb-2">Nosso Método</p>
          <h2 className="text-3xl md:text-4xl font-black text-zinc-900">O Processo Smart System</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="relative bg-white p-8 rounded-2xl shadow-sm border border-zinc-100 group hover:-translate-y-2 transition-transform duration-300">
              <div className="absolute -top-6 left-8 w-14 h-14 bg-zinc-900 text-brand-orange text-3xl font-black flex items-center justify-center rounded-xl shadow-lg transform -rotate-3 group-hover:rotate-0 transition-transform">
                {step.letter}
              </div>
              <div className="pt-6">
                <h3 className="text-xl font-extrabold text-zinc-900 mb-3">{step.title}</h3>
                <p className="text-zinc-600 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-white p-10 rounded-3xl border-2 border-dashed border-zinc-200 flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1">
            <h4 className="text-2xl font-bold mb-4">Operação Replicável e Escalável</h4>
            <p className="text-zinc-600 mb-6">Nosso sistema comercial estruturado permite que você foque no que importa: o crescimento do seu patrimônio.</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {['Modelo Testado', 'Marca em Expansão', 'Suporte Completo', 'Treinamento VIP'].map((t, i) => (
                <li key={i} className="flex items-center gap-2 text-zinc-700 font-semibold">
                  <div className="w-2 h-2 bg-brand-orange rounded-full"></div>
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=400" alt="Processo" className="rounded-2xl shadow-lg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
