
import React from 'react';
import { CheckCircle2, Award, Zap, BarChart, Globe, Layers } from 'lucide-react';

const BenefitsSection: React.FC = () => {
  const benefits = [
    {
      title: "Modelo Testado e Validado",
      desc: "Não perca tempo tentando descobrir o que funciona. Siga um caminho que já gera lucro real.",
      icon: <CheckCircle2 className="text-brand-orange" />
    },
    {
      title: "Marca em Expansão",
      desc: "Faça parte de um ecossistema que está crescendo e ganhando autoridade em todo o Brasil.",
      icon: <Globe className="text-brand-orange" />
    },
    {
      title: "Processo Comercial Estruturado",
      desc: "Scripts, abordagens e técnicas de fechamento prontas para você aplicar e vender.",
      icon: <BarChart className="text-brand-orange" />
    },
    {
      title: "Sistema Americano de Compra",
      desc: "Trazemos para o Brasil o que há de mais moderno em praticidade e valor percebido.",
      icon: <Zap className="text-brand-orange" />
    },
    {
      title: "Vantagens Reais para o Cliente",
      desc: "Diferenciais competitivos que tornam a sua franquia a escolha óbvia do consumidor.",
      icon: <Award className="text-brand-orange" />
    },
    {
      title: "Operação Replicável e Escalável",
      desc: "Crie processos que funcionam sem a sua presença constante e escale seus lucros.",
      icon: <Layers className="text-brand-orange" />
    }
  ];

  return (
    <section className="py-24 px-4 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-zinc-900 mb-6">
            Benefícios de Ser um Franqueado
          </h2>
          <p className="text-zinc-500 text-lg max-w-2xl mx-auto">
            Oferecemos todo o suporte e ferramentas que você precisa para dominar o mercado local de móveis planejados.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8">
          {benefits.map((b, i) => (
            <div key={i} className="flex gap-5 group">
              <div className="flex-shrink-0 w-14 h-14 bg-zinc-50 rounded-2xl flex items-center justify-center group-hover:bg-brand-orange transition-all duration-300">
                {/* Fixed: Cast to React.ReactElement<any> to allow 'size' and 'className' props on cloned Lucide icons */}
                {React.cloneElement(b.icon as React.ReactElement<any>, { size: 28, className: "group-hover:text-white transition-colors" })}
              </div>
              <div>
                <h3 className="text-xl font-bold text-zinc-900 mb-2">{b.title}</h3>
                <p className="text-zinc-600 leading-relaxed">{b.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-zinc-950 rounded-[40px] p-10 md:p-16 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/20 blur-[100px] rounded-full"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="max-w-xl text-left">
              <h3 className="text-2xl md:text-4xl font-black mb-6">Pronto para dar o próximo passo rumo ao seu faturamento milionário?</h3>
              <p className="text-zinc-400 text-lg">Nossa equipe está pronta para apresentar todos os detalhes do plano de negócios.</p>
            </div>
            <button 
              onClick={() => document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-brand-orange hover:bg-orange-600 text-white font-bold py-5 px-10 rounded-2xl text-lg transition-all shadow-xl shadow-orange-500/10 whitespace-nowrap"
            >
              Falar com um Consultor
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
