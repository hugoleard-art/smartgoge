
import React from 'react';
import { DollarSign, Clock, BarChart3, TrendingUp, HandCoins, Target } from 'lucide-react';

const StatsSection: React.FC = () => {
  const stats = [
    {
      label: "Lucro Médio Estimado",
      value: "R$ 25.000 /mês",
      desc: "Após estabilização do negócio",
      icon: <DollarSign className="w-8 h-8 text-green-500" />
    },
    {
      label: "Payback Médio",
      value: "18 meses",
      desc: "Retorno do investimento rápido",
      icon: <Clock className="w-8 h-8 text-blue-500" />
    },
    {
      label: "Ponto de Equilíbrio",
      value: "4 meses",
      desc: "Empate operacional acelerado",
      icon: <BarChart3 className="w-8 h-8 text-brand-orange" />
    },
    {
      label: "Lucro Anual Potencial",
      value: "Até 1 Milhão",
      desc: "A partir do 3º ano de operação",
      icon: <TrendingUp className="w-8 h-8 text-purple-500" />
    }
  ];

  return (
    <section className="py-24 px-4 bg-zinc-950 text-white overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="grid grid-cols-6 h-full border-l border-zinc-700">
          {[1,2,3,4,5,6].map(i => <div key={i} className="border-r border-zinc-700 h-full"></div>)}
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-3xl md:text-5xl font-black leading-tight mb-8">
              Por que investir na Franquia Smart System Garabetti?
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-zinc-800 rounded-lg flex items-center justify-center">
                  <HandCoins className="text-brand-orange" />
                </div>
                <div>
                  <h4 className="text-xl font-bold">Investimento Acessível</h4>
                  <p className="text-zinc-400">Investimento menor que um carro popular para um negócio de faturamento milionário.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-zinc-800 rounded-lg flex items-center justify-center">
                  <Target className="text-brand-orange" />
                </div>
                <div>
                  <h4 className="text-xl font-bold">Gestão Eficiente</h4>
                  <p className="text-zinc-400">Demanda em média apenas 1 hora por dia para gestão estratégica.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {stats.map((s, i) => (
              <div key={i} className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl hover:border-brand-orange/50 transition-all">
                <div className="mb-4">{s.icon}</div>
                <p className="text-zinc-400 text-sm font-bold uppercase tracking-wider mb-2">{s.label}</p>
                <p className="text-2xl font-black mb-1">{s.value}</p>
                <p className="text-zinc-500 text-xs">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-brand-orange to-orange-600 rounded-3xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Produto Linha B, Preço C e Vida Útil A</h3>
          <p className="text-orange-50 max-w-3xl mx-auto text-lg">
            Essa é a nossa fórmula do sucesso: oferecemos um produto de qualidade superior (Vida Útil A) com o melhor custo-benefício do mercado para o cliente final.
          </p>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
