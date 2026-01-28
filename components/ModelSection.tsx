
import React from 'react';
import { LayoutGrid, Zap, Shield, ShoppingCart, Settings } from 'lucide-react';

const ModelSection: React.FC = () => {
  const features = [
    {
      title: "Franquia enxuta e altamente rentável",
      desc: "Baixo custo operacional com foco total na margem de lucro.",
      icon: <ShoppingCart className="text-brand-orange" />
    },
    {
      title: "Modelo inovador e exclusivo",
      desc: "Um oceano azul em um mercado tradicional e pouco eficiente.",
      icon: <Zap className="text-brand-orange" />
    },
    {
      title: "Sem necessidade de experiência",
      desc: "Não exige conhecimento prévio em móveis, design ou montagem.",
      icon: <Shield className="text-brand-orange" />
    },
    {
      title: "Sistema Inteligente de Compra e Venda",
      desc: "Tecnologia própria para facilitar toda a jornada do cliente.",
      icon: <LayoutGrid className="text-brand-orange" />
    },
    {
      title: "Operação Simples e Estruturada",
      desc: "Processos desenhados para serem replicados por qualquer pessoa.",
      icon: <Settings className="text-brand-orange" />
    }
  ];

  return (
    <section className="py-20 bg-zinc-50 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-zinc-900 mb-4">
            A Revolução no Modelo de Franquias
          </h2>
          <div className="h-1.5 w-24 bg-brand-orange mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl border border-zinc-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center mb-6">
                {f.icon}
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mb-3">{f.title}</h3>
              <p className="text-zinc-600 leading-relaxed">{f.desc}</p>
            </div>
          ))}
          <div className="bg-brand-orange p-8 rounded-2xl text-white flex flex-col justify-center">
            <h3 className="text-2xl font-black mb-4">O Conceito</h3>
            <p className="text-orange-50 italic text-xl">"A Marca do Casal Feliz"</p>
            <p className="mt-4 text-orange-100">Focado em proporcionar a melhor experiência de compra para quem está realizando o sonho da casa própria.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModelSection;
