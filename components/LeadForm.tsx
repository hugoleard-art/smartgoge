
import React, { useState } from 'react';
import { Send, CheckCircle2, Loader2 } from 'lucide-react';

const LeadForm: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 2000);
  };

  if (success) {
    return (
      <div className="py-24 bg-white px-4">
        <div className="max-w-xl mx-auto text-center bg-zinc-50 p-12 rounded-[40px] border border-zinc-100">
          <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 size={40} />
          </div>
          <h2 className="text-3xl font-black mb-4">Solicitação Enviada!</h2>
          <p className="text-zinc-600 text-lg mb-8">
            Em breve um de nossos consultores estratégicos entrará em contato para agendar sua reunião.
          </p>
          <button 
            onClick={() => setSuccess(false)}
            className="text-brand-orange font-bold underline"
          >
            Fazer outra solicitação
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="py-24 bg-white px-4">
      <div className="max-w-xl mx-auto">
        <div className="bg-white p-8 md:p-12 rounded-[40px] shadow-2xl border border-zinc-100 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-orange text-white py-2 px-6 rounded-full text-sm font-bold shadow-lg">
            PREENCHA O FORMULÁRIO ABAIXO
          </div>
          
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black text-zinc-900 mb-2">Quero saber mais sobre a franquia</h2>
            <p className="text-zinc-500">Nosso time entrará em contato o mais rápido possível.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-bold text-zinc-700 mb-1">Nome Completo</label>
              <input 
                type="text" required 
                placeholder="Seu nome"
                className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-4 focus:ring-2 focus:ring-brand-orange focus:outline-none transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-zinc-700 mb-1">Telefone / WhatsApp</label>
              <input 
                type="tel" required 
                placeholder="(00) 0 0000-0000"
                className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-4 focus:ring-2 focus:ring-brand-orange focus:outline-none transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-zinc-700 mb-1">Cidade / Estado</label>
              <input 
                type="text" required 
                placeholder="Ex: São Paulo / SP"
                className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-4 focus:ring-2 focus:ring-brand-orange focus:outline-none transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-zinc-700 mb-1">Capital disponível para investimento</label>
              <select className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-4 focus:ring-2 focus:ring-brand-orange focus:outline-none transition-all">
                <option>Selecione uma opção</option>
                <option>R$ 50k - R$ 100k</option>
                <option>R$ 100k - R$ 200k</option>
                <option>R$ 200k - R$ 500k</option>
                <option>Acima de R$ 500k</option>
              </select>
            </div>
            
            <button 
              disabled={loading}
              type="submit"
              className="w-full bg-zinc-900 hover:bg-black text-white font-bold py-5 rounded-xl text-lg flex items-center justify-center gap-2 shadow-xl transition-all disabled:opacity-70"
            >
              {loading ? <Loader2 className="animate-spin" /> : <Send size={20} />}
              Quero receber o plano de negócios agora
            </button>

            <p className="text-center text-xs text-zinc-400">
              Ao enviar, você concorda com nossa política de privacidade e tratamento de dados.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LeadForm;
