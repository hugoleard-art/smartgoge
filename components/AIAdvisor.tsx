
import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";
import { Bot, X, Send, Loader2, Minimize2, MessageSquare } from 'lucide-react';

const AIAdvisor: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'ai', text: string}[]>([
    { role: 'ai', text: 'Olá! Sou o assistente virtual da Smart System Garabetti. Como posso ajudar você a entender melhor nosso modelo de franquia?' }
  ]);

  const handleAsk = async () => {
    if (!input.trim() || loading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setLoading(true);

    try {
      // Fixed: Initializing GoogleGenAI instance following strict @google/genai guidelines
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMsg,
        config: {
          systemInstruction: `Você é o consultor de franquias oficial da Smart System Garabetti. 
          Sua missão é convencer o investidor sobre a qualidade do negócio.
          Dados Importantes:
          - Conceito: A Marca do Casal Feliz
          - Lucro médio: R$ 25.000/mês
          - Payback: 18 meses
          - Investimento: Menor que um carro popular
          - Modelo: Produto Linha B, Preço C e Vida Útil A (Alta qualidade, preço competitivo)
          - Fundador: 21 anos de mercado.
          - Vantagem: Cliente final ganha 20% de benefícios.
          - Gestão: 1 hora por dia.
          Seja profissional, persuasivo e focado em convidar para falar no WhatsApp.`
        }
      });

      // Fixed: Directly accessing .text property on GenerateContentResponse
      const aiResponse = response.text || "Desculpe, tive um problema técnico. Mas saiba que nossa franquia é altamente rentável!";
      setMessages(prev => [...prev, { role: 'ai', text: aiResponse }]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'ai', text: "Houve um erro ao processar. Que tal falar diretamente com um consultor humano no WhatsApp?" }]);
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) {
    return (
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 left-6 z-[100] bg-zinc-900 text-white p-4 rounded-2xl shadow-2xl flex items-center gap-3 border border-zinc-800 hover:scale-105 transition-transform"
      >
        <div className="w-10 h-10 bg-brand-orange rounded-lg flex items-center justify-center">
          <Bot size={24} />
        </div>
        <div className="text-left hidden md:block">
          <p className="text-xs font-bold text-zinc-500 uppercase">Consultor IA</p>
          <p className="font-bold text-sm">Dúvidas sobre a franquia?</p>
        </div>
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 left-6 z-[100] w-80 md:w-96 bg-white rounded-3xl shadow-2xl border border-zinc-100 flex flex-col overflow-hidden animate-in slide-in-from-bottom-5">
      {/* Header */}
      <div className="bg-zinc-900 p-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-brand-orange rounded-xl flex items-center justify-center">
            <Bot size={24} className="text-white" />
          </div>
          <div>
            <p className="text-white font-bold text-sm">Smart Advisor</p>
            <p className="text-zinc-400 text-xs flex items-center gap-1">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span> Online agora
            </p>
          </div>
        </div>
        <button onClick={() => setIsOpen(false)} className="text-zinc-400 hover:text-white">
          <Minimize2 size={20} />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 p-4 h-[400px] overflow-y-auto space-y-4 bg-zinc-50">
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] p-3 rounded-2xl text-sm ${
              m.role === 'user' 
                ? 'bg-brand-orange text-white rounded-tr-none' 
                : 'bg-white border border-zinc-200 text-zinc-700 rounded-tl-none shadow-sm'
            }`}>
              {m.text}
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
            <div className="bg-white border border-zinc-200 p-3 rounded-2xl rounded-tl-none shadow-sm">
              <Loader2 size={16} className="animate-spin text-zinc-400" />
            </div>
          </div>
        )}
      </div>

      {/* Input */}
      <div className="p-4 border-t border-zinc-100 bg-white">
        <div className="relative">
          <input 
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyPress={e => e.key === 'Enter' && handleAsk()}
            placeholder="Pergunte sobre rentabilidade..."
            className="w-full bg-zinc-100 border-none rounded-2xl px-4 py-3 pr-12 focus:ring-2 focus:ring-brand-orange text-sm outline-none"
          />
          <button 
            onClick={handleAsk}
            disabled={loading || !input.trim()}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-brand-orange text-white rounded-xl flex items-center justify-center disabled:opacity-50"
          >
            <Send size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIAdvisor;
